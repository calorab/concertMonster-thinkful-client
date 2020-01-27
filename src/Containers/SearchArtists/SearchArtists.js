import React, {Component} from 'react';
import classes from './SearchArtists.module.css';

import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import BackToTopButton from '../../Components/UI/BackToTopButton/backToTopButton';

import SearchResultItem from '../../Components/SearchResultItem/SearchResultItem';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



class SearchArtists extends Component {

    state = {
        error: false,
        loading: false,
        artists: [],
        showScroll: false,
        searchValue: ''
    };

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    };
 
    submitHandler = (event) => {
        this.setState({loading: true, showScroll: false});
        const artist = event.target.search.value;
        const url = 'http://localhost:8080/search/artists/' + encodeURIComponent(artist);
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
        .catch(err => {
            console.log(err);
            this.setState({
                loading: false,
                error: err
            });
            return err;
        });
    };

    onAddArtist = (event, artist) => {
        this.setState({loading: true});
        let apiEndpoint = 'http://localhost:8080/followedartists/myartist';
        fetch(apiEndpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                name: artist.data.displayName, 
                tour: artist.data.onTourUntil,
                url: artist.data.uri,
                userId: sessionStorage.getItem('userId')
            })
        })
        .then(response => {
            this.setState({loading: false});
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err);
            this.setState({error: true});
            return err;
        });
    };
    
    render() {

        let searchForm =
            <Formik
                initialValues={{search: ''}}
                validationSchema={Yup.object({
                search: Yup.string()
                    .required('Required')
                })}
                onSubmit={({ setSubmitting }) => {
                    this.submitHandler();
                }}>
                <Form  onSubmit={this.submitHandler} >
                    <Field name="search" type="text" className={classes.SearchElement} placeholder='Alison Wonderland' />
                    <ErrorMessage name="search" />
                    <br></br>
                    <Button 
                        className='testing1' 
                        btnType='Success'
                        type='submit'>
                        SEARCH
                    </Button>
                </Form>
            </Formik>;
 
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
                <div className={classes.SearchArtists}>
                    {searchForm}
                </div>
                {searchResults}
                {this.state.showScroll ? <BackToTopButton clicked={() => window.scrollTo(0,0)} />: null}
            </div>
        );
    }
};

export default SearchArtists;
