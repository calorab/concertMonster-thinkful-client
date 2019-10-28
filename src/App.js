import React, { Component } from 'react';
import './App.css';
import Auth from './Containers/Auth/Auth';
import Layout from './Containers/hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            <Auth />
        </Layout>
      </div>
    );
  }
}

export default App;
