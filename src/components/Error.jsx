import React from 'react';

const Error = ({ message }) => {
  return (
    <>
      <p className='red darken-4 error'>{message}</p>
    </>
  );
};

export default Error;
