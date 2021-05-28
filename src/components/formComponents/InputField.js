import React, { useEffect, useState } from 'react';

import { ErrorMessage, Field, useField } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const InputField = ({ type, name, label, placeholder, children }) => {
  let inputIcon = null;
  // console.log(icon);
  // const [input, setInput] = useState(name);
  const [passwordToggleIcon, setPasswordToggleIcon] = useState(false);

  const handleClickShowPassword = () => {
    setPasswordToggleIcon(!passwordToggleIcon);
  };

  // let inputValue = '';
  // useEffect(() => {
  //   if (name !== '') {
  //     inputValue = document.getElementById(name).value;
  //     console.log('inputValue : ', inputValue);
  //   }
  // }, [name]);

  return (
    <>
      {type === 'password' && (
        <div className='formControl'>
          {label && <label htmlFor='name'>{label}</label>}
          <Field
            className='inputPassword'
            type={passwordToggleIcon ? 'text' : 'password'}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          <div id='error'>
            <ErrorMessage name={name} />
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
          {label && <label htmlFor='name'>{label}</label>}
          <Field
            className='input'
            type={type ? type : 'text'}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          <div id='error'>
            <ErrorMessage name={name} />
          </div>
          {children && children}
        </div>
      ) : null}
    </>
  );
};

export default InputField;
