import React, { Component } from 'react';

import 'tachyons';
import Navigation from './components/Navigation';
import Main from './components/Main';

import './App.css';
//import NavOptions from './components/NavOptions';

class App extends Component {
  /* super()
		this.state = {
    contractors: [],
  //searchField: ''
} */

  render() {
    return (
        <div className="App">
          <header >
            <Navigation />
          </header>
          <div>
           <Main />
          </div>
          <footer>

          </footer>
        </div>  

    );
  }
}

export default App;
