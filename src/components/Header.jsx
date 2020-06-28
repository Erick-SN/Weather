import React from 'react';

const Header = ({ title }) => {
  return (
    <>
      <nav className='nav-wrapper light-blue darken-2'>
        <a href='#!' className='brand-logo'>
          {title}
        </a>
      </nav>
    </>
  );
};

export default Header;
