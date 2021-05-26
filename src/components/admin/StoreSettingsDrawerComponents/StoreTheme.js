import React from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/storeTheme.css';
import Button from '../../formComponents/Button';

const StoreTheme = () => {
  return (
    <div className='storeTheme'>
      <p>Color Style </p>

      <div className='colorThemeWrapper'>
        <div className='yellow-theme'></div>
        <div className='purple-theme'></div>
        <div className='black-theme'></div>
        <div className='orange-theme'></div>
        <div className='dark-purple-theme'></div>
        <div className='light-purple-theme'></div>
        <div className='green-theme'></div>
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
