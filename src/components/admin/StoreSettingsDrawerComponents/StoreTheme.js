import React, { useState, useEffect } from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/storeTheme.css';
import Button from '../../formComponents/Button';

const StoreTheme = () => {
  const [colorTheme, setColorTheme] = useState('orange-theme');

  useEffect(() => {
    // check for selected theme from local storage
    const currentColorTheme = localStorage.getItem('theme-color');
    // if found set selected theme value in state
    if (currentColorTheme) {
      setColorTheme(currentColorTheme);
    }
  }, []);

  const handleClick = (themeColor) => {
    setColorTheme(themeColor);
    localStorage.setItem('theme-color', themeColor);
    console.log({ themeColor });
  };

  return (
    <div className={`storeTheme ${colorTheme}`}>
      <div className='theme-options'>
        <div
          id='yellow-theme'
          onClick={() => handleClick('yellow-theme')}
          className={`${colorTheme === 'yellow-theme' ? 'active' : ''}`}
        />
        <div
          id='purple-theme'
          onClick={() => handleClick('purple-theme')}
          className={`${colorTheme === 'purple-theme' ? 'active' : ''}`}
        />
        <div
          id='black-theme'
          onClick={() => handleClick('black-theme')}
          className={`${colorTheme === 'black-theme' ? 'active' : ''}`}
        />
        <div
          id='orange-theme'
          onClick={() => handleClick('orange-theme')}
          className={`${colorTheme === 'orange-theme' ? 'active' : ''}`}
        />
        <div
          id='dark-purple-theme'
          onClick={() => handleClick('dark-purple-theme')}
          className={`${colorTheme === 'dark-purple-theme' ? 'active' : ''}`}
        />
        <div
          id='light-purple-theme'
          onClick={() => handleClick('light-purple-theme')}
          className={`${colorTheme === 'light-purple-theme' ? 'active' : ''}`}
        />
        <div
          id='green-theme'
          onClick={() => handleClick('green-theme')}
          className={`${colorTheme === 'green-theme' ? 'active' : ''}`}
        />
      </div>

      <div className='sb'>
        <Button
          title='Cancle'
          btnType='outline'
          type='button'
          className='mb-4'
          style={{
            borderRadius: '5px',
            padding: '8px 50px',
            margin: '10px 0',
          }}
        />
        <Button
          title='Save Changes'
          type='submit'
          className='mb-4'
          style={{
            borderRadius: '5px',
            padding: '10px 50px',
            margin: '10px 0',
          }}
        />
      </div>
    </div>
  );
};

export default StoreTheme;
