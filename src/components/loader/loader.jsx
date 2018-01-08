import React from 'react';

export default ({ lightTheme }) => {
  return <div className={`spinner ${lightTheme && 'spinner--light'}`}></div>;
};
