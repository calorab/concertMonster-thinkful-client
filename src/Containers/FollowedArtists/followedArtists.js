import React, {Component} from 'react';
import MyArtistItem from '../../Components/MyArtistItem/myArtistItem';
import axios from 'axios';
import Aux from '../hoc/Aux/Aux';
import BackToTopButton from '../../Components/UI/BackToTopButton/backToTopButton';


class followedArtists extends Component {
    state = {
        artists: [],
        error: false,
        showScroll: false
    }

    componentDidMount = () => {
        this.getMyArtistsHandler();
    };

    getMyArtistsHandler = () => {
        const url = 'http://localhost:8080/followedartists/myartists';
        const token = sessionStorage.getItem('token');
        axios.request({
            method: 'get',
            url: url,
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            this.setState({
                artists: response.data.artists,
            });
            if (this.state.artists.length > 5) {
                this.setState({showScroll: true});
            }
            return response;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
    };

    unfollowHandler = (artist, event) => {
        event.preventDefault();
        const url = 'http://localhost:8080/followedartists/deleteartist';
        fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                artistId: artist,
                userId: sessionStorage.getItem('userId')
            })
        })
        .then(response => {
            return response;
        }).then(response => {
            if (response.ok) {
                return this.getMyArtistsHandler();
            }
            const error = new Error('Not authorized!');
            error.statusCode = 403;
            throw error;
        })
        .catch(err => {
            console.log(err);
            return err;
        });
    };

    render() {

        let myArtistsArray = [];
        for (const artistElement of this.state.artists) {
            myArtistsArray.push({
                id: artistElement._id,
                data: artistElement
            });
        };

        let myArtistsResults = 
        <div>
            <h5>You're not following any artists</h5>
            <p>Return to your dashboard and search for artists to follow them</p>
        </div>;

        if (this.state.error) {
            this.setState({loading: false});
            myArtistsResults = <h5>There was a problem getting your results. Please refresh the page and try again.</h5>;
        }

        myArtistsResults = myArtistsArray.map(element => {
                return <MyArtistItem 
                    key={element.data._id}
                    link={element.data.url}
                    tour={element.data.tour ? element.data.tour : 'Not on tour'}
                    cnclButton={event => this.unfollowHandler(element.data._id, event)}>
                    {element.data.name}
                </MyArtistItem>
            });
        return (
            <Aux>  
                {myArtistsResults}
                {this.state.showScroll ? <BackToTopButton clicked={() => window.scrollTo(0,0)} />: null}
            </Aux>
        )
    }
    
};

export default followedArtists;