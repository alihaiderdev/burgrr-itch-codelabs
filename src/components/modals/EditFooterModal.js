import React, { useState } from 'react';
import '../../styles/components/modals/editFooterModal.css';

import { Col, Row } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../formComponents/Button';
import CustomModal from './CustomModal';
import InputField from '../formComponents/InputField';
import AlertModal from './AlertModal';

const EditFooterModal = ({ editFooterModal, handleCloseEditFooterModal }) => {
  // const [editFooterInfo, setEditFooterInfo] = useState({
  //   column1Title: '',
  //   column1Description: '',
  //   column2Title: '',
  //   column2FacebookUsername: '',
  //   column2InstagramUsername: '',
  //   column2TwitterUsername: '',
  //   column3Title: '',
  //   column3ContactUs: '',
  //   column3EmailAddress: '',
  //   column3PhoneNumber: '',
  //   column3Location: '',
  // });

  // const {
  //   column1Title,
  //   column1Description,
  //   column2Title,
  //   column2FacebookUsername,
  //   column2InstagramUsername,
  //   column2TwitterUsername,
  //   column3Title,
  //   column3ContactUs,
  //   column3EmailAddress,
  //   column3PhoneNumber,
  //   column3Location,
  // } = editFooterInfo;

  // const onChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setEditFooterInfo({ ...editFooterInfo, [name]: value });
  // };

  // const editFooterSubmitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     {
  //       column1Title,
  //       column1Description,
  //       column2Title,
  //       column3Title,
  //       column3ContactUs,
  //       column3EmailAddress,
  //       column3PhoneNumber,
  //       column3Location,
  //     },
  //     `column2FacebookUsername : https://www.facebook.com/${column2FacebookUsername} column2InstagramUsername : https://www.instagram.com/${column2InstagramUsername} column2TwitterUsername : https://www.twitter.com/${column2TwitterUsername}`
  //   );
  //   handleCloseEditFooterModal();
  // };

  const [alertEditFooterModal, setAlertEditFooterModal] = useState(false);
  const openEditFooterAlertModal = () => setAlertEditFooterModal(true);
  const closeEditFooterAlertModal = () => setAlertEditFooterModal(false);

  const initialValues = {
    column1Title: '',
    column1Description: '',
    column2Title: '',
    column2FacebookUsername: '',
    column2InstagramUsername: '',
    column2TwitterUsername: '',
    column3Title: '',
    column3ContactUs: '',
    column3EmailAddress: '',
    column3PhoneNumber: '',
    column3Location: '',
  };

  const validationSchema = Yup.object({
    column1Title: Yup.string().required('Required!'),
    column1Description: Yup.string().required('Required!'),
    column2Title: Yup.string().required('Required!'),
    column2FacebookUsername: Yup.string().required('Required!'),
    column2InstagramUsername: Yup.string().required('Required!'),
    column2TwitterUsername: Yup.string().required('Required!'),
    column3Title: Yup.string().required('Required!'),
    column3ContactUs: Yup.string().required('Required!'),
    column3EmailAddress: Yup.string().required('Required!'),
    column3PhoneNumber: Yup.string().required('Required!'),
    column3Location: Yup.string().required('Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log('Form Data : ', values);
    onSubmitProps.resetForm();
    openEditFooterAlertModal();
  };

  return (
    <>
      <CustomModal
        width={900}
        open={editFooterModal}
        onClose={handleCloseEditFooterModal}
        modalTitle='Edit Footer'
        modalDescription='Edit your footer information'
        classname='editFooterModal'
        style={{ top: 20 }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <h5 className='um black'>Coulmn 1</h5>
            <InputField type='text' name='column1Title' placeholder='Enter Column 1 Title' />
            <InputField
              type='text'
              name='column1Description'
              placeholder='Enter Column 1 Description'
            />
            <h5 className='um black'>Coulmn 2</h5>
            <InputField type='text' name='column2Title' placeholder='Enter Column 2 Title' />

            <label htmlFor='column2FacebookUsername'>Account 1</label>
            <Row>
              <Col md={3}>
                <p className='m-0'>facebook.com/</p>
              </Col>
              <Col md={9} className='pl-0'>
                <InputField
                  type='text'
                  name='column2FacebookUsername'
                  placeholder='Facebook Username'
                />
              </Col>
            </Row>

            <label htmlFor='column2InstagramUsername'>Account 2</label>
            <Row>
              <Col md={3}>
                <p className='m-0'>instagram.com/</p>
              </Col>
              <Col md={9} className='pl-0'>
                <InputField
                  type='text'
                  name='column2InstagramUsername'
                  placeholder='Instagram Username'
                />
              </Col>
            </Row>

            <label htmlFor='column2TwitterUsername'>Account 3</label>
            <Row>
              <Col md={3}>
                <p className='m-0'>twitter.com/</p>
              </Col>
              <Col md={9} className='pl-0'>
                <InputField
                  type='text'
                  name='column2TwitterUsername'
                  placeholder='Twitter Username'
                />
              </Col>
            </Row>

            <h5 className='um black'>Coulmn 3</h5>
            <InputField type='text' name='column3Title' placeholder='Enter Column 3 Title' />
            <InputField type='text' name='column3ContactUs' placeholder='Contact Us' />
            <InputField type='text' name='column3EmailAddress' placeholder='Email Address' />
            <InputField type='text' name='column3PhoneNumber' placeholder='Phone Number' />
            <InputField type='text' name='column3Location' placeholder='Location' />

            <div className='fe mt-4'>
              <Button
                title='Cancel'
                btnType='outline'
                type='button'
                className='mb-4'
                style={{
                  borderRadius: '5px',
                  padding: '8px 50px',
                  margin: '0 0 0 15px',
                }}
                onClick={handleCloseEditFooterModal}
              />
              <Button
                title='Edit Footer'
                type='submit'
                className='mb-4'
                style={{
                  borderRadius: '5px',
                  padding: '10px 50px',
                  margin: '0 0 0 15px',
                }}
              />
            </div>
          </Form>
        </Formik>
      </CustomModal>
      <AlertModal
        type='success'
        modalTitle='Footer Added Successfully!'
        openAlertModal={alertEditFooterModal}
        closeAlertModal={() => {
          closeEditFooterAlertModal();
          handleCloseEditFooterModal();
        }}
        width={700}
        modalPosition={100}
        btn2Title='Okay'
        btnColor='#24be59' // green
      />
    </>
  );
};

export default EditFooterModal;
