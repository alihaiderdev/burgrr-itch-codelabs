import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Button = ({
  title,
  type,
  btnType,
  onClick,
  icon,
  color,
  backgroundColor,
  border,
  outline,
  style,
  classname,
  children,
}) => {
  let activeColorTheme = '';
  const [colorTheme, setColorTheme] = useState('orange-theme');

  useEffect(() => {
    // check for selected theme from local storage
    const currentColorTheme = localStorage.getItem('theme-color');
    // if found set selected theme value in state
    if (currentColorTheme) {
      setColorTheme(currentColorTheme);
      activeColorTheme = currentColorTheme;
    }
  }, [colorTheme]);

  return (
    <>
      {btnType === 'text' ? (
        <button
          type={type}
          className={`customButton ${classname}`}
          style={{
            backgroundColor: 'transparent',
            color: '#fd7e14',
            border,
            outline,
            ...style,
            textAlign: 'center',
          }}
          onClick={onClick}
        >
          {title && title}
          {children}
        </button>
      ) : btnType === 'outline' ? (
        <button
          type={type}
          className={`customButton ${classname}`}
          style={{
            backgroundColor: 'transparent',
            color: '#fd7e14',
            border: '1px solid #fd7e14',
            outline,
            ...style,
            textAlign: 'center',
          }}
          onClick={onClick}
        >
          {/* {icon && icon} */}
          {title && title}
          {children}
        </button>
      ) : (
        <button
          type={type}
          className={`customButton ${classname}`}
          style={{
            backgroundColor,
            color,
            border,
            outline,
            ...style,
            textAlign: 'center',
          }}
          onClick={onClick}
        >
          {/* {icon && icon} */}
          {title && title}
          {children}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  btnType: PropTypes.string,
  icon: PropTypes.element,
  btnTitle: PropTypes.string,
};

Button.defaultProps = {
  type: 'contained',
  color: 'white',
  backgroundColor: '#fd7e14',
  // backgroundColor: `${activeColorTheme}`,
  border: 'none',
  outline: 'none',
  fontFamily: 'UbuntuRegular',
};
export default Button;
