import React from 'react';
import { toast } from 'react-toastify';

const AlertToast = () => {
  const CustomToast = ({ closeToast }) => {
    return (
      <div>
        CustomToast Notification ! <button onClick={closeToast}>Close</button>
      </div>
    );
  };

  const notify = () => {
    console.log('Notify');
    toast('Default Notification !');

    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });

    toast.error('Error Notification !', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 10000,
    });

    toast.warn('Warning Notification !', {
      position: toast.POSITION.BOTTOM_LEFT,
    });

    toast.info('Info Notification !', {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    toast.info(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    toast('Custom Style Notification with css class!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
    });
  };

  return <button onClick={notify}>Notify</button>;
};

export default AlertToast;
