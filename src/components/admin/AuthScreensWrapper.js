import React from 'react';
import '../../styles/components/admin/authScreensWrapper.css';

const AuthScreensWrapper = ({ children, title, descrption, style }) => {
  return (
    <div className='authScreensWrapper' style={style}>
      <div className='authScreensWrapperHeader'>
        {title && <h1 className='um black'>{title}</h1>}
        {descrption && <p className='um'>{descrption}</p>}
      </div>
      {children}
    </div>
  );
};

export default AuthScreensWrapper;
