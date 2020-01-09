import React, {Component} from 'react';
import SearchArtists from '../SearchArtists/SearchArtists';
import FollowedArtists from '../FollowedArtists/followedArtists';
import Aux from '../hoc/Aux/Aux';
// import {Redirect, Link} from 'react-router-dom';
import Button from '../../Components/UI/Button/Button';


class Dashboard extends Component {

    state = {
        showArtists: false,
        token: false
    }

    // componentDidMount = () => {
    //     if (localstorage.getItem('token')) {
    //         this.setState({token: true});
    //         console.log(this.state.token);
    //     }
    // };
    
    toggleMyArtists = () => {
        console.log('showArtists just switched');
        this.setState(prevState => {
            return {showArtists: !prevState.showArtists}
        });
    }

    render(props) {
        console.log(this.state);
        let display = 
            <div>
                <SearchArtists clicked={this.toggleMyArtists} />   
            </div>;

        if (this.state.showArtists) {
            display = 
                <div>
                    <FollowedArtists />
                </div>;
        }

        return (
            <Aux>
                {!this.state.showArtists ? 
                    <Button btnType="Success" 
                        clicked={this.toggleMyArtists}>
                        Go to Your Followed Artists
                    </Button> : 
                    <Button btnType="Success" 
                        clicked={this.toggleMyArtists}>
                        Go back to Search
                    </Button>
                }
                {display}
            </Aux>       
        );
    }
    
};

export default Dashboard;
