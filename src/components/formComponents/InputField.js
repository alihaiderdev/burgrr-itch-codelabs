import React, { useEffect, useState } from 'react';

import '../../styles/components/formComponents/inputField.css';

import { ErrorMessage, Field, useField } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import PasswordStrengthBar from 'react-password-strength-bar';

const InputField = (props) => {
  const {
    type,
    name,
    label,
    placeholder,
    children,
    disabled,
    onChange,
    onBlur,
    value,
    touched,
    errors,
  } = props;

  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);
  const handleClickShowPassword = () => {
    setPasswordToggleIcon(!passwordToggleIcon);
  };

  var password = document.getElementById('password');
  var letter = document.getElementById('letter');
  var capital = document.getElementById('capital');
  var number = document.getElementById('number');
  var length = document.getElementById('length');

  // // When the user clicks on the password field, show the message box
  // password.onfocus = function () {
  //   document.getElementById('message').style.display = 'block';
  // };

  // // When the user clicks outside of the password field, hide the message box
  // password.onblur = function () {
  //   document.getElementById('message').style.display = 'none';
  // };

  // When the user starts to type something inside the password field
  const onKeyUpHandler = () => {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (value.match(lowerCaseLetters)) {
      letter.classList.remove('invalid');
      letter.classList.add('valid');
    } else {
      letter.classList.remove('valid');
      letter.classList.add('invalid');
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (value.match(upperCaseLetters)) {
      capital.classList.remove('invalid');
      capital.classList.add('valid');
    } else {
      capital.classList.remove('valid');
      capital.classList.add('invalid');
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (value.match(numbers)) {
      number.classList.remove('invalid');
      number.classList.add('valid');
    } else {
      number.classList.remove('valid');
      number.classList.add('invalid');
    }

    // Validate length
    if (value.length >= 8) {
      length.classList.remove('invalid');
      length.classList.add('valid');
    } else {
      length.classList.remove('valid');
      length.classList.add('invalid');
    }
  };

  return (
    <>
      {type === 'password' && (
        <div className='formControl'>
          {/* {label && <label htmlFor={name}>{label}</label>}
          <Field
            className='inputPassword'
            type={passwordToggleIcon ? 'text' : 'password'}
            name={name}
            id={name}
            placeholder={placeholder}
            disabled={disabled ? disabled : false}
            value={value && value}
          />
          <div id='error' className='m-0'>
            <ErrorMessage name={name} />
          </div> */}

          {label && <label htmlFor={name}>{label}</label>}
          <input
            className='inputPassword'
            type={passwordToggleIcon ? 'text' : 'password'}
            name={name}
            id='password'
            disabled={disabled ? disabled : false}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={() => {
              onBlur();
              document.getElementById('message').style.display = 'none';
            }}
            onFocus={() =>
              (document.getElementById('message').style.display = 'block')
            }
            onkeyup={() => onKeyUpHandler()}
            value={value}
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
          />
          <div className='passwordStrengthBarContainer'>
            <PasswordStrengthBar password={value} />
          </div>

          {touched && errors && (
            <div id='error' className='error m-0'>
              {errors}
            </div>
          )}

          <div id='message'>
            <h6 className='black'>Password must contain the following:</h6>
            <p id='letter' class='invalid'>
              A <b>lowercase</b> letter
            </p>
            <p id='capital' class='invalid'>
              A <b>capital (uppercase)</b> letter
            </p>
            <p id='number' class='invalid'>
              A <b>number</b>
            </p>
            <p id='length' class='invalid'>
              Minimum <b>8 characters</b>
            </p>
          </div>

          <button
            type='button'
            className='button passwordToggleIcon'
            onClick={handleClickShowPassword}
          >
            {passwordToggleIcon ? (
              <AiFillEye size='20px' className='grayIcon' />
            ) : (
              <AiFillEyeInvisible size='20px' className='grayIcon' />
            )}
          </button>
        </div>
      )}

      {type === 'email' || type === 'text' ? (
        <div className='formControl'>
          {label && <label htmlFor={name}>{label}</label>}
          <input
            className='input'
            type={type ? type : 'text'}
            name={name}
            id={name}
            placeholder={placeholder}
            disabled={disabled ? disabled : false}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          {touched && errors && (
            <div id='error' className='error m-0'>
              {errors}
            </div>
          )}

          {/* {label && <label htmlFor='name'>{label}</label>}
          <Field
            className='input'
            type={type ? type : 'text'}
            name={name}
            id={name}
            placeholder={placeholder}
            disabled={disabled ? disabled : false}
            value={value && value}
          />
          <div id='error'>
            <ErrorMessage name={name} />
          </div> */}
          <div className='formInputIcon'>{children && children}</div>
        </div>
      ) : null}
    </>
  );
};

export default InputField;
