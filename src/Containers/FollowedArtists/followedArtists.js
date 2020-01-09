import React, {Component} from 'react';
import MyArtistItem from '../../Components/MyArtistItem/myArtistItem';
import axios from 'axios';
import Button from '../../Components/UI/Button/Button';
import Aux from '../hoc/Aux/Aux';


class followedArtists extends Component {
    state = {
        artists: [],
        error: false
    }

    componentDidMount = () => {
        this.getMyArtistsHandler();
    };

    getMyArtistsHandler = () => {
        const url = 'http://localhost:8080/followedartists/myartists';
        axios.request({
            method: 'get',
            url: url
        })
        .then(response => {
            console.log('RESPONSE ', response);
            this.setState({
                artists: response.data.artists
            });
            console.log(this.state.artists);
            return response;
        })
        .catch(err => {
            console.log(err);
        });
    };

    unfollowHandler = (artist, event) => {
        event.preventDefault();
        console.log('START...');
        const url = 'http://localhost:8080/followedartists/deleteartist';
        fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                artistId: artist
            })
        })
        .then(response => {
            console.log('RESPONSE', response.body);
            return response;
        }).then(() => {
            return this.getMyArtistsHandler();
        })
        .catch(err => {
            console.log(err);
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

        let myArtistsResults;
        if (this.state.error) {
            myArtistsResults = <h5>There was a problem getting your results. Please refresh the page and try again.</h5>;
        } else if (!this.state.artists) {

            // CALEB THIS IS NOT WORKING:
            
            myArtistsResults = 
            <div>
                <h5>You're not following any artists</h5>
                <p>Return to your dashboard and search for artists to follow them</p>
            </div>;
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
            </Aux>
        )
    }
    
};

// btnClicked={event => this.onGetConcerts(event, element)}>
export default followedArtists;