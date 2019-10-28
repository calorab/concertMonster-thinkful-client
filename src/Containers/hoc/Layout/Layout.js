import React, {Component} from 'react';
import classes from './Layout.module.css';

import Toolbar from '../../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render(props) {
        return (
            // Should replace <div> with <aux> to allow multiple components/elements
            <div>
                <Toolbar />
                <SideDrawer />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
            // needs state for open/close sideDrawer and possibly show/hide navItem's
        );
    }
};

export default Layout;
