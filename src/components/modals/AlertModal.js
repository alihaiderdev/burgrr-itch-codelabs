import React from 'react';
import '../../styles/components/modals/alertModal.css';

import Button from '../formComponents/Button';
import CustomModal from './CustomModal';

const AlertModal = (props) => {
  const {
    openAlertModal,
    closeAlertModal,
    modalTitle,
    modalDescription,
    children,
    linkTitle,
    type,
    width,
    modalPosition,
    centered,
    btn1Title,
    btn2Title,
    btnColor,
  } = props;

  const btnOutlineStyle = {
    borderColor: btnColor ? btnColor : '#F46B0D',
    color: btnColor ? btnColor : '#F46B0D',
    borderRadius: '5px',
    padding: '8px 50px',
    margin: '0 0 0 15px',
  };
  const btnContainedStyle = {
    backgroundColor: btnColor ? btnColor : '#F46B0D',
    borderRadius: '5px',
    padding: '8px 50px',
    margin: '0 0 0 15px',
  };
  return (
    <>
      <CustomModal
        type={type}
        open={openAlertModal}
        onClose={closeAlertModal}
        modalTitle={modalTitle}
        modalDescription={modalDescription}
        linkTitle={linkTitle}
        width={width}
        centered={centered}
        style={{ top: modalPosition }}
      >
        <div className='fe mt-4'>
          {type === 'confirm' ? (
            <>
              {btn1Title && (
                <Button
                  title={btn1Title}
                  btnType='outline'
                  type='button'
                  className='mb-4'
                  style={btnOutlineStyle}
                  onClick={closeAlertModal}
                />
              )}
              {btn2Title && (
                <Button
                  title={btn2Title}
                  type='button'
                  className='mb-4'
                  style={btnContainedStyle}
                  onClick={closeAlertModal}
                />
              )}
            </>
          ) : (
            btn2Title && (
              <Button
                title={btn2Title}
                type='button'
                className='mb-4'
                style={btnContainedStyle}
                onClick={closeAlertModal}
              />
            )
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default AlertModal;

// const [alertModal, setAlertModal] = useState(false);
// const handleOpenAlertModal = () => setAlertModal(true);
// const handleCloseAlertModal = () => setAlertModal(false);
{
  /* <AlertModal
        type='success'
        modalTitle='Confirm Delete'
        modalDescription='Please confirm that you want to delete item'
        openAlertModal={alertModal}
        closeAlertModal={handleCloseAlertModal}
        btn1Title='Cancel'
        btn2Title='Delete'
        btnColor='#24be59'
      /> */
}
{
  /* <AlertModal
        type='success'
        modalTitle='Deleted Successfully!'
        modalDescription='Extra has been deleted successfully. If you think it was a mistake.'
        linkTitle='Undo'
        linkPath='/admin/home'
        openAlertModal={alertModal}
        closeAlertModal={handleCloseAlertModal}
        width={700}
        modalPosition={100}
        btn1Title='Cancel'
        btn2Title='Okay'
        btnColor='#24be59' // green
        // btnColor='#fd2b2a' // red
        // btnColor='#F46B0D' // orange
        // centered={true}
      /> */
}
