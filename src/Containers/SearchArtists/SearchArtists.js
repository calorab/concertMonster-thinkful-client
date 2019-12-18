import React, {Component} from 'react';
import classes from './SearchArtists.module.css';

import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';

import SearchResults from '../SearchResults/SearchResults';


class SearchArtists extends Component {

    state = {
        loading: false
    }

    submitHandler = () => {
        this.setState({loading: true});

        const changeState = () => this.setState({loading: false});
        setTimeout(changeState, 2000);
    }


    render() {

        let searchForm =
            <form className={classes.SearchArtists} onSubmit={this.submitHandler}>
                <Input defaultValue='Alison Wonderland'/>
                <Button btnType="Success" >SEARCH</Button>
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
