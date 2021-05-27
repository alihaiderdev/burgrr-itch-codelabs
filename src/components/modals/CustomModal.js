import React, { useMemo } from 'react';

import { Modal } from 'antd';
// import { AiOutlineClose } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

const CustomModal = ({
  modalTitle,
  modalDescription,
  bodyStyle,
  open,
  closeIcon,
  closable,
  title,
  style,
  centered,
  onClose,
  children,
  width,
  classname,
}) => {
  // console.log({
  //   modalTitle,
  //   modalDescription,
  //   open,
  //   closeIcon,
  //   closable,
  //   bodyStyle,
  //   title,
  //   style,
  //   centered,
  //   onClose,
  //   children,
  //   width,
  // });
  return (
    <Modal
      visible={open}
      closeIcon={closeIcon}
      closable={closable}
      // title={title}
      bodyStyle={bodyStyle}
      centered={centered}
      style={style}
      onOk={onClose}
      onCancel={onClose}
      width={width}
      footer={null}
      className={classname}
    >
      <div className='sb mb-2'>
        {modalTitle && (
          <h3 className='modalTitle m-0' style={{ fontWeight: 'bolder' }}>
            {modalTitle}
          </h3>
        )}
        <button className='button' onClick={onClose}>
          <IoCloseSharp size='25px' color='#9C9B9B' />
        </button>
      </div>
      {modalDescription && (
        <h6 className='modalDescription um gray mb-4'>{modalDescription}</h6>
      )}
      {children}
    </Modal>
  );
};

export default CustomModal;
