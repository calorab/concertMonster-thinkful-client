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

    testHandler = () => {
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
    }

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
        }

        myArtistsResults = myArtistsArray.map(element => {
                return <MyArtistItem 
                    key={element.data._id}
                    link={element.data.url}
                    tour={element.data.tour ? element.data.tour : 'Not on tour'}>
                    {element.data.name}
                </MyArtistItem>
            });
        return (
            <Aux>
                <div>
                    <h3>ToDo: make a get request and map results</h3>
                </div>
                <Button btnType='Danger' clicked={this.testHandler}>Testing 1-2-3...</Button>
                {myArtistsResults}
            </Aux>
        )
    }
    
};

// btnClicked={event => this.onAddArtist(event, element)}>
export default followedArtists;