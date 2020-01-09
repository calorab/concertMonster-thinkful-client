import React, {Component} from 'react';
import classes from './SearchArtists.module.css';

import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';
import BackToTopButton from '../../Components/UI/BackToTopButton/backToTopButton';

import SearchResultItem from '../../Components/SearchResultItem/SearchResultItem';
import axios from 'axios';



class SearchArtists extends Component {

    state = {
        error: false,
        loading: false,
        artists: [],
        showScroll: false,
        
    }

    submitHandler = (event) => {
        this.setState({loading: true, showScroll: false});
        const artist = event.target.search.value;
        const url = 'http://localhost:8080/search/artists/' + encodeURIComponent(artist);
        console.log('URL and Artist:', url, artist);
        axios.request({
                method: 'get',
                url: url
        })
        .then(response => {
            this.setState({
                loading: false,
                showScroll: true,
                artists: response.data.results.artist
            });  
        })
        .then(data => console.log('This is the artist state:', this.state.artists))
        .catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });
    };

    onAddArtist = (event, artist) => {
        this.setState({loading: true});
        let apiEndpoint = 'http://localhost:8080/followedartists/myartist';
        console.log(artist.data.displayName);
        fetch(apiEndpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: artist.data.displayName, 
                tour: artist.data.onTourUntil,
                url: artist.data.uri
            })
        })
        .then(response => {
            console.log('RESPONSE', response);
            this.setState({loading: false});
            
            return response.json();
        })
        .then(data => {
            console.log('DATA', data);
            alert('FOLLOWED!!');
        })
        .catch(err => {
            console.log(err);
            this.setState({error: true});
        });
    };
    
    render() {

        let searchForm =
            <form className={classes.SearchArtists} onSubmit={(event) => this.submitHandler(event)}>
                <Input startValue='Search Artist' inputName='search'/>
                <Button btnType="Success">SEARCH</Button>
                
            </form>
        ;

        let searchResultsArray = [];
        for (const searchElement of this.state.artists) {
            searchResultsArray.push({
                id: searchElement.id,
                data: searchElement
            });

        };

        if (this.state.loading) {
            searchForm = <Spinner />;
            searchResultsArray = [];
        }

        let searchResults;
        if (this.state.error) {
            searchResults = <h5>There was a problem getting your results. Please refresh the page and try again.</h5>;
        }

        searchResults = searchResultsArray.map(element => {
                return <SearchResultItem 
                    key={element.data.id}
                    link={element.data.uri}
                    btnClicked={event => this.onAddArtist(event, element)}>
                    {element.data.displayName}
                </SearchResultItem>
            });

        return (
            <div>
                <h3>Search for Artists Below</h3>
                {searchForm}
                {searchResults}
                {this.state.showScroll ? <BackToTopButton clicked={() => window.scrollTo(0,0)} />: null}
            </div>
        );
    }
};

export default SearchArtists;
