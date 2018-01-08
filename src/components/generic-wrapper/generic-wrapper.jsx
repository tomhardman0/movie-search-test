import React from 'react';

import Header from '../header/header';

export default (props) => {
  return (
    <section className='generic-wrapper'>
      <Header />
      {props.children}
    </section>
  );
};
