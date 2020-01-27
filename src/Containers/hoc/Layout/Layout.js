import React, {Component} from 'react';
import classes from './Layout.module.css';

import Toolbar from '../../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    sideDrawerClosehandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    }

    render(props) {
        return (
            <div>
                <Toolbar
                    drawerToggleClicked={this.drawerToggleHandler} 
                    isAuth={this.state.isAuthenticated}/>
                <SideDrawer
                    close={this.sideDrawerClosehandler}
                    open={this.state.sideDrawerOpen}
                    isAuth={this.state.isAuthenticated} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default Layout;
