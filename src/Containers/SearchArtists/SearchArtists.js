import React, {Component} from 'react';
import classes from './SearchArtists.module.css';

import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';

import SearchResults from '../SearchResults/SearchResults';
import axios from 'axios';


class SearchArtists extends Component {

    state = {
        loading: false
    }

    submitHandler = () => {
        this.setState({loading: true});
        const artist = 'dermot kennedy';
        const url = 'http://localhost:8080/search/artists/' + encodeURIComponent(artist);
        console.log(url);
        axios.request({
                method: 'get',
                url: url
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err.response));
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

        return (
            <div>
                <h1>Search for Artists Below</h1>
                {searchForm}
                {this.state.loading ? <h4>Getting your results...</h4> : <SearchResults />}
            </div>
        );
    }
};

export default SearchArtists;
