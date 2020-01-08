import React, {Component} from 'react';
import SearchArtists from '../SearchArtists/SearchArtists';
import FollowedArtists from '../FollowedArtists/followedArtists';
import Aux from '../hoc/Aux/Aux';
// import {Redirect, Link} from 'react-router-dom';
import Button from '../../Components/UI/Button/Button';


class Dashboard extends Component {

    state = {
        showArtists: false
    }
    
    toggleMyArtists = () => {
        console.log('showArtists just switched');
        this.setState(prevState => {
            return {showArtists: !prevState.showArtists}
        });
    }

    render(props) {
        console.log(this.state);
        let display = 
            <Aux>
                <SearchArtists clicked={this.toggleMyArtists} /> 
                <Button btnType="Success" clicked={this.toggleMyArtists}>Go to Your Followed Artists</Button>  
            </Aux>;

        if (this.state.showArtists) {
            display = 
                <div>
                    <FollowedArtists />
                </div>;
        }

        return (
            <div>
                {display}
            </div>       
        );
    }
    
};

export default Dashboard;
