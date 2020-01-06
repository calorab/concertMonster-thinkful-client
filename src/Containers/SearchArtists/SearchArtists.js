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

    submitHandler = (event) => {
        this.setState({loading: true});
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
                artists: response.data.results.artist
            });
        })
        .then(data => console.log('This is the state:', this.state.artists))
        .catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
        });
    };

    onAddArtist = () => {
        alert('You clicked a button!!');
        // let apiEndpoint = 'http://localhost:8080/followedartists/myartist';
        
        // fetch(apiEndpoint, {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json'
        //       },
        //     body: JSON.stringify({
        //         email: 'test1@test.com', 
        //         password: '12345'
        //     })
        // })
        // .then(response => {
        //     return response.json();
        // })
        // .then(data => {
        //     console.log('DATA', data);
        //     this.props.history.push('/dashboard');
        // })
        // .catch(err => {
        //     console.log(err);
        // });
    };
    
    render() {

        let searchForm =
            <form className={classes.SearchArtists} onSubmit={(event) => this.submitHandler(event)}>
                <Input startValue='Search Artist' inputName='search'/>
                <Button btnType="Success">SEARCH</Button>
            </form>
        ;

        let searchResultsArray = []
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
                    btnClicked={this.onAddArtist}>
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
