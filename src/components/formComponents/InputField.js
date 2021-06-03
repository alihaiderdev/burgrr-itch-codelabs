import React, { useEffect, useState } from 'react';

import '../../styles/components/formComponents/inputField.css';

import { ErrorMessage, Field, useField } from 'formik';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { TiDeleteOutline as CrossIcon } from 'react-icons/ti';
import { CgCheckO as TickIcon } from 'react-icons/cg';
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
    passwordValidations,
  } = props;

  console.log({ passwordValidations });

  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);
  const handleClickShowPassword = () => {
    setPasswordToggleIcon(!passwordToggleIcon);
  };

  const valid = (item, v_icon, inv_icon) => {
    if (
      document.querySelector(`#${item}`) &&
      document.querySelector(`#${item} .${v_icon}`) &&
      document.querySelector(`#${item} .${inv_icon}`)
    ) {
      document.querySelector(`#${item}`).style.opacity = '1';
      document.querySelector(`#${item} .${v_icon}`).style.opacity = '1';
      document.querySelector(`#${item} .${inv_icon}`).style.opacity = '0';
    }
  };

  const inValid = (item, v_icon, inv_icon) => {
    if (
      document.querySelector(`#${item}`) &&
      document.querySelector(`#${item} .${v_icon}`) &&
      document.querySelector(`#${item} .${inv_icon}`)
    ) {
      document.querySelector(`#${item}`).style.opacity = '0.5';
      document.querySelector(`#${item} .${v_icon}`).style.opacity = '0';
      document.querySelector(`#${item} .${inv_icon}`).style.opacity = '1';
    }
  };

  if (value.match(/[a-z]/) != null) {
    valid('lower', 'tickIcon', 'crossIcon');
  } else {
    inValid('lower', 'tickIcon', 'crossIcon');
  }

  if (value.match(/[A-Z]/) != null) {
    valid('upper', 'tickIcon', 'crossIcon');
  } else {
    inValid('upper', 'tickIcon', 'crossIcon');
  }

  if (value.match(/[0-9]/) != null) {
    valid('number', 'tickIcon', 'crossIcon');
  } else {
    inValid('number', 'tickIcon', 'crossIcon');
  }

  // if (value.match(/[$&+,:;=?@#|'<>.-^*()%!]/g) != null) {
  if (value.match(/[!@#$%^&*+,:;=?|'"<>.-]/) != null) {
    valid('symbol', 'tickIcon', 'crossIcon');
  } else {
    inValid('symbol', 'tickIcon', 'crossIcon');
  }

  if (value.length > 7) {
    valid('more8', 'tickIcon', 'crossIcon');
  } else {
    inValid('more8', 'tickIcon', 'crossIcon');
  }

  const onChangeE = (e) => console.log('e : ', e);
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
            onBlur={onBlur}
            value={value}
          />
          {passwordValidations === true && (
            <div className='passwordStrengthBarContainer'>
              <PasswordStrengthBar password={value} />
            </div>
          )}

          {touched && errors && (
            <div id='error' className='error m-0'>
              {errors}
            </div>
          )}

          {value.length > 0 && passwordValidations === true && (
            <div id='message'>
              <h6 className='black'>Password must contain the following:</h6>
              <p id='lower' className='invalid'>
                <CrossIcon className='crossIcon icon' />
                <TickIcon className='tickIcon icon' />
                <span>
                  {' '}
                  A <b>small (lowercase)</b> letter
                </span>
              </p>
              <p id='upper' className='invalid'>
                <CrossIcon className='crossIcon icon' />
                <TickIcon className='tickIcon icon' />
                <span>
                  {' '}
                  A <b>capital (uppercase)</b> letter
                </span>
              </p>
              <p id='number' className='invalid'>
                <CrossIcon className='crossIcon icon' />
                <TickIcon className='tickIcon icon' />
                <span>
                  {' '}
                  A <b>number</b>
                </span>
              </p>
              <p id='symbol' className='invalid'>
                <CrossIcon className='crossIcon icon' />
                <TickIcon className='tickIcon icon' />
                <span>
                  {' '}
                  <b>Special</b> Characters
                </span>
              </p>
              <p id='more8' className='invalid'>
                <CrossIcon className='crossIcon icon' />
                <TickIcon className='tickIcon icon' />
                <span>
                  {' '}
                  Minimum <b>8 characters</b>
                </span>
              </p>
            </div>
          )}

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
