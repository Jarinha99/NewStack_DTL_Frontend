import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < Routes />
      </div>
    );
  }
}

// < Footer />

export default App;
