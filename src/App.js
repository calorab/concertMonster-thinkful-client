import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Auth from './Containers/Auth/Auth';
import Layout from './Containers/hoc/Layout/Layout';
import Welcome from './Components/Welcome/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            <Route path='/' component={Welcome} />
            <Route path='/auth' component={Auth}/>
        </Layout>
      </div>
    );
  }
}

export default App;
