import React, { Component } from 'react';
import AutoCompleteDropdown from '../components/AutoCompleteDropdown';

const containerStyle = {
  margin: '20px 0 0 20px'
};

class App extends Component {
  render() {
    return(
      <div style={containerStyle}>
        <AutoCompleteDropdown />
      </div>
    ) 
  }
}

export default App;