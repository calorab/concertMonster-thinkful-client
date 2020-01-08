import React, {Component} from 'react';
import SearchArtists from '../SearchArtists/SearchArtists';
import {Redirect, Link} from 'react-router-dom';
import Button from '../../Components/UI/Button/Button';


class dashboard extends Component {

    componentDidMount = () => {
        if (localStorage.token == undefined) {
           return <Redirect to='/auth' />
        }
    }
    goToMyArtists = () => {
        this.history.push('/myartists');
    }

    render(props) {
        return (
            <div>
                <SearchArtists /> 
                <Button clicked={this.goToMyArtists}>Go to Your Followed Artists</Button>  
            </div>
        );
    }
    
};

export default dashboard;
