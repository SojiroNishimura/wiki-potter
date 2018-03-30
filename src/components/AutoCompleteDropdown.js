import React, { Component } from 'react';
import characterList from '../assets/character_list.json';

const style = {
  width: '240px',
  height: '40px',
  border: '1px lightgray solid',
  borderRadius: '4px',
  fontSize: '1.2em',
  paddingLeft: '5px',
  marginBottom: '8px'
};

const options = characterList.characters.map(item => (
  <option key={item.name} value={item.name} />
));

const AutoCompleteDropdown = (props) => {
  return (
    <div>
      <input style={style} type="search" name="searchBox" autoFocus={focus} autocomplete="on" list="options"
        onChange={props.onItemSelected} />
      <datalist id="options">
        {options}
      </datalist>
    </div>
  )
};

export default AutoCompleteDropdown;