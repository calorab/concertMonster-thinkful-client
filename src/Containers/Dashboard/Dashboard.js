import React, {Component} from 'react';
import SearchArtists from '../SearchArtists/SearchArtists';
import FollowedArtists from '../FollowedArtists/followedArtists';
import Aux from '../hoc/Aux/Aux';
import classes from './Dashboard.module.css';
import Button from '../../Components/UI/Button/Button';


class Dashboard extends Component {

    state = {
        showArtists: false
    }

    componentDidMount = () => {
        if (!sessionStorage.getItem('token') && this.props.history) {
            this.props.history.push('/auth');
        } 
    };
    
    toggleMyArtists = () => {
        this.setState(prevState => {
            return {showArtists: !prevState.showArtists}
        });
    }

    handleLogout = () => {
        this.props.history.push('/logout');
    };

    render(props) {
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
                <div className={classes.Logout}>
                    <Button btnType="Danger" clicked={this.handleLogout} >Logout</Button>
                </div>
                
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
