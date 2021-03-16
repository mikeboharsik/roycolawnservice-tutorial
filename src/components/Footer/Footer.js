import React from 'react';

const Footer = props => {
  return (
    <div
      id="footer"
      style={{
        padding: '2px 6px 4px 6px',
        marginBottom: '1em',
        marginTop: '5em',
        backgroundColor: 'white',
        borderRadius: '8px',
      }}
    >
      &#169; 1994-{new Date().getFullYear()} RoyCo Lawn Service
    </div>
  );
};

export default Footer;