import React from 'react';
import '../styles/components/button.css';
import PropTypes from 'prop-types';

const Button = ({
  icon,
  btnTitle,
  color,
  backgroundColor,
  padding,
  margin,
  width,
  height,
  border,
  borderRadius,
  children,
  onClick,
}) => {
  return (
    <>
      {icon ? (
        <button
          className='buttonOrange'
          style={{
            color,
            backgroundColor,
            padding,
            margin,
            width,
            height,
            border,
            borderRadius,
          }}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className='buttonOrange'
          style={{
            color,
            backgroundColor,
            padding,
            margin,
            width,
            height,
            border,
            borderRadius,
          }}
          onClick={onClick}
        >
          {btnTitle && btnTitle}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  icon: PropTypes.element,
  btnTitle: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  borderRadius: PropTypes.string,
};

Button.defaultProps = {
  color: 'white',
  backgroundColor: '#F46B0D',
  padding: '15px 50px',
  margin: '0px',
  width: '100%',
  border: `1px solid #F46B0D`,
  borderRadius: '10px',
};
export default Button;
