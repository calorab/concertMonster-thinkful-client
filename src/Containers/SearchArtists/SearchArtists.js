import React, {Component} from 'react';
import classes from './SearchArtists.module.css';

import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';

import SearchResultItem from '../../Components/SearchResultItem/SearchResultItem';
import axios from 'axios';


class SearchArtists extends Component {

    state = {
        error: null,
        loading: false,
        artists: [],
    }

    submitHandler = () => {
        this.setState({loading: true});
        const artist = 'billie';
        const url = 'http://localhost:8080/search/artists/' + encodeURIComponent(artist);
        console.log(url);
        axios.request({
                method: 'get',
                url: url
        })
        .then(response => {
            this.setState({
                loading: false,
                artists: response.data.results.artist
            });
        })
        .then(data => console.log('This is the state:', this.state.artists))
        .catch(err => {
            console.log(err);
            this.setState({error: err});
        });
    };


    render() {

        let searchForm =
            <form className={classes.SearchArtists} onSubmit={this.submitHandler}>
                <Input defaultValue='Alison Wonderland'/>
                <Button btnType="Success">SEARCH</Button>
            </form>
        ;

        if (this.state.loading) {
            searchForm = <Spinner />;
        }
        let searchResultsArray = []
        for (const searchElement of this.state.artists) {
            console.log(searchElement);
            searchResultsArray.push({
                id: searchElement.id,
                data: searchElement
            });
        };
        let searchResults;

        if (this.state.loading) {
            searchResults = <h4>Getting your results...</h4>;
        } else if (this.state.error) {
            searchResults = <h5>There was a problem getting your results. Try searching for a different artist</h5>;
        }

        searchResults = searchResultsArray.map(element => {
                return <SearchResultItem 
                    key={element.data.id}
                    link={element.data.uri}>
                    {element.data.displayName}
                </SearchResultItem>
            });

        return (
            <div>
                <h1>Search for Artists Below</h1>
                {searchForm}
                {searchResults}
            </div>
        );
    }
};

export default SearchArtists;
