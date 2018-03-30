import React, { Component } from 'react';

class ContentBody extends Component {
  render() {
    const { charaInfo } = this.props;
    return (
      <div>
        <h2>{charaInfo ? charaInfo.name : 'Search a character...'}</h2>
      </div>
    )
  }
}

export default ContentBody;