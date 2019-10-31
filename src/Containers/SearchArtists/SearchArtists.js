import React, {Component} from 'react';
import classes from './SearchArtists.module.css';

import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';


class SearchArtists extends Component {
    render() {

        let searchForm =
            <form className={classes.SearchArtists}>
                <Input value='Alison Wonderland'/>
                <Button btnType="Success" >SEARCH</Button>
            </form>;


        return (
            <div>
                <h1>Search for Artists Below</h1>
                {searchForm}
            </div>
        );
    }
};

export default SearchArtists;
