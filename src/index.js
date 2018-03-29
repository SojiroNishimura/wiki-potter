import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './containers/App';

class Main extends Component {
  render() {
    console.log("React created");
    return(
      <App />
    )
  }
}

render(<Main />, document.getElementById('app'));
