import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import './App.css';
import Auth from './Containers/Auth/Auth';
import Layout from './Containers/hoc/Layout/Layout';
import Welcome from './Containers/Welcome/Welcome';
import Dashboard from './Containers/Dashboard/Dashboard';

import Logout from './Containers/Logout/logout';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
            <Route path='/' exact component={Welcome} />
            <Route path='/auth' component={Auth}/>
            <Route path='/logout' component={Logout}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Layout>
      </div>
    );
  }
}

export default App;
