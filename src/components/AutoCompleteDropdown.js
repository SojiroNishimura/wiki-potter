import React, { Component } from 'react';

const lists = [
  {
    name: "hoge",
    value: 1
  },
  {
    name: "huga",
    value: 2
  },
  {
    name: "piyo",
    value: 3
  },
  {
    name: "Hoo",
    value: 4
  },
  {
    name: "Paa",
    value: 5
  }
];

const style = {
  width: '240px',
  height: '40px',
  border: '1px lightgray solid',
  borderRadius: '4px',
  fontSize: '1.2em',
  paddingLeft: '5px'
};

class AutoCompleteDropdown extends Component {
  render() {
    const options = lists.map(item => (
      <option value={item.name} />
    ));

    return(
      <div>
        <input style={style} type="search" autocomplete="on" list="options" />
        <datalist id="options">
          {options}
        </datalist>
      </div>
    )
  }
}

export default AutoCompleteDropdown;