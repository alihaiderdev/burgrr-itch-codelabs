import React from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/storeTimings.css';
import Button from '../../formComponents/Button';

const StoreTimings = ({ handleOpenAddDiscountModal, closeDrawer }) => {
  return (
    <div className='storeTimings' style={{ textAlign: 'center' }}>
      <Button
        title='Set Timing'
        type='submit'
        className='mb-4'
        style={{
          borderRadius: '5px',
          padding: '10px 50px',
          margin: '10px 0',
        }}
        onClick={() => {
          handleOpenAddDiscountModal();
        }}
      />
    </div>
  );
};

export default StoreTimings;
