import React from 'react';
import PropTypes from 'prop-types';

const headingStyle = {
  fontFamily: 'Nanum Myeongjo, serif',
  fontSize: '2em',
  margin: '16px 0'
};

const descriptionStyle = {
  fontFamily: 'Nanum Myeongjo, serif',
  padding: '8px 0'
};

const ContentBody = (props) => {
  const { charaInfo } = props;
  const name = charaInfo ? charaInfo.name : 'Search a character...';
  const description = charaInfo ? charaInfo.description : 'Description will be shown...';

  return (
    <div>
      <h2 style={headingStyle}>{name}</h2>
      <p style={descriptionStyle}>{description}</p>
    </div>
  )
};

ContentBody.PropTypes = {
  charaInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  })
};

export default ContentBody;