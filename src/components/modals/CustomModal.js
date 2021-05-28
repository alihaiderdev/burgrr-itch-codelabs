import React, { useMemo } from 'react';
import '../../styles/components/modals/customModal.css';

import { Modal } from 'antd';
// import { AiOutlineClose } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CustomModal = ({
  linkTitle,
  linkPath,
  type,
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
  console.log({
    linkPath,
  });
  return (
    <Modal
      visible={open}
      closeIcon={closeIcon}
      closable={closable}
      // title={title}
      bodyStyle={bodyStyle}
      style={style}
      onOk={onClose}
      onCancel={onClose}
      width={width}
      centered={centered}
      footer={null}
      className={classname}
    >
      <div className='sb mb-2'>
        {type === 'success'
          ? modalTitle && (
              <h3
                className='modalTitle modalTitleSuccess mb-2'
                style={{ fontWeight: 'bolder' }}
              >
                {modalTitle}
                <span></span>
              </h3>
            )
          : type === 'delete' || type === 'confirm'
          ? modalTitle && (
              <h3
                className='modalTitle modalTitleDelete mb-2'
                style={{ fontWeight: 'bolder' }}
              >
                {modalTitle}
                <span></span>
              </h3>
            )
          : modalTitle && (
              <h3 className='modalTitle m-0' style={{ fontWeight: 'bolder' }}>
                {modalTitle}
              </h3>
            )}

        <button className='button' onClick={onClose}>
          <IoCloseSharp size='25px' color='#9C9B9B' />
        </button>
      </div>
      {modalDescription ? (
        <h6 className='modalDescription um gray mb-4'>
          {modalDescription}{' '}
          {modalDescription && linkTitle && linkPath ? (
            <a
              target='_blank'
              href={linkPath}
              className='undoLink'
              onClick={() => onClose()}
            >
              {linkTitle}
            </a>
          ) : null}
        </h6>
      ) : null}
      {children}
    </Modal>
  );
};

export default CustomModal;
