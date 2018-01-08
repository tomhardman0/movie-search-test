import React from 'react';

import Search from '../search/search';

export default () => {
  return (
    <header className='header'>
      <img src='/assets/img/logo.png' className='header__logo' />
      <Search header={true}/>
    </header>
  );
};
