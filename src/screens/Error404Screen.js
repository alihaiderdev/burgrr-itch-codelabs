import React from 'react';
import '../styles/screens/error404.css';

const Error404Screen = ({ match, history, location }) => {
  console.log('{ match, history, location } : ', { match, history, location });
  console.log('location.pathname : ', location.pathname.split('/'));
  return (
    <div className='error404Screen conatiner-85'>
      <h1>404 - ({location.pathname}) - page not found</h1>
    </div>
  );
};

export default Error404Screen;
