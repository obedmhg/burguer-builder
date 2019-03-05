import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Axios from './components/Axios/Axios';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <BurgerBuilder></BurgerBuilder>
          </Layout>
          <Axios/>
      </div>
    );
  }
}

export default App;
