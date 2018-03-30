import React, { Component } from 'react';
import ContentBody from '../containers/ContentBody';
import AutoCompleteDropdown from '../components/AutoCompleteDropdown';
import * as ApiManager from '../apis/ApiManager';
import characterList from '../assets/character_list.json';
import '../assets/datalist-polyfill.min';

const containerStyle = {
  margin: '20px 0 0 20px'
};

const headerStyle = {
  fontSize: '3em',
  fontFamily: 'Nanum Myeongjo, serif',
  fontStyle: 'bold',
  margin: '10px 0'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    };

    this.handleOnSelected = this.handleOnSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnSelected(e) {
    this.setState({
      selected: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const charaName = e.target.elements.searchBox.value;

    if (characterList.characters.map(c => c.name).includes(charaName) && !(charaName in this.state)) {
      const res = await ApiManager.fetchWiki(charaName);
      this.setState({
        selected: charaName,
        [charaName]: {
          name: charaName,
          info: res
        }
      });
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        <h1 style={headerStyle}>Wiki Potter</h1>
        <form onSubmit={this.handleSubmit}>
          <AutoCompleteDropdown onItemSelected={this.handleOnSelected} />
          <input type="submit" value="Search" />
        </form>
        <ContentBody charaInfo={this.state[this.state.selected]} />
      </div>
    )
  }
}

export default App;