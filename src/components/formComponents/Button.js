import React from 'react';

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
}) => {
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
          {icon && icon}
          {title && title}
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
          {icon && icon}
          {title && title}
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
          {icon && icon}
          {title && title}
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
  border: 'none',
  outline: 'none',
  fontFamily: 'UbuntuRegular',
};
export default Button;
