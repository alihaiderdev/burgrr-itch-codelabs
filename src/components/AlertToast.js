import React from 'react';
import { toast } from 'react-toastify';

// toast transitions : bounce , slide , zoom , flip
// toast type : info , success , warning , error , default, dark

const AlertToast = ({ type, message, position, autoClose, transition }) => {
  console.log({ type, message });
  // toast.configure();
  // const CustomToast = ({ closeToast }) => {
  //   return (
  //     <div>
  //       CustomToast Notification ! <button onClick={closeToast}>Close</button>
  //     </div>
  //   );
  // };
  switch (type) {
    case type === 'info':
      return toast.info(`${message}`, {
        position: position ? position : 'top-right',
        autoClose: autoClose ? autoClose : 5000,
        pauseOnHover: true,
        transition: transition ? transition : 'bounce',
      });
    case type === 'success':
      return toast.success(`${message}`, {
        position: position ? position : 'top-right',
        autoClose: autoClose ? autoClose : 5000,
        pauseOnHover: true,
        transition: transition ? transition : 'bounce',
      });
    case type === 'warning':
      return toast.warning(`${message}`, {
        position: position ? position : 'top-right',
        autoClose: autoClose ? autoClose : 5000,
        pauseOnHover: true,
        transition: transition ? transition : 'bounce',
      });
    case type === 'error':
      return toast.error(`${message}`, {
        position: position ? position : 'top-right',
        autoClose: autoClose ? autoClose : 5000,
        pauseOnHover: true,
        transition: transition ? transition : 'bounce',
      });
    case type === 'dark':
      return toast.dark(`${message}`, {
        position: position ? position : 'top-right',
        autoClose: autoClose ? autoClose : 5000,
        pauseOnHover: true,
        transition: transition ? transition : 'bounce',
      });

    default:
      return toast(`${message}`, {
        position: position ? position : 'top-right',
        autoClose: autoClose ? autoClose : 5000,
        pauseOnHover: true,
        transition: transition ? transition : 'bounce',
      });
  }
};

export default AlertToast;
