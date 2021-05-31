import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../formComponents/Button';
import CustomModal from './CustomModal';
import InputField from '../formComponents/InputField';
import { Col, Row } from 'react-bootstrap';
import AlertModal from './AlertModal';

const AddDiscountModal = (props) => {
  const {
    openAlertModal,
    modalTitle,
    modalDescription,
    width,
    modalPosition,
    centered,
    btnColor,
    closeAlertModal,
  } = props;

  const [alertAddDiscountModal, setAlertAddDiscountModal] = useState(false);
  const openAddDiscountAlertModal = () => setAlertAddDiscountModal(true);
  const closeAddDiscountAlertModal = () => setAlertAddDiscountModal(false);

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
    padding: '9px 50px',
    margin: '0 0 0 15px',
  };

  const initialValues = {
    discountTitle: '',
    discount: '',
    manimumPurchase: '',
    expiryDate: '',
  };

  const validationSchema = Yup.object({
    discountTitle: Yup.string().required('Required!'),
    discount: Yup.number().required('Required!'),
    manimumPurchase: Yup.number().required('Required!'),
    expiryDate: Yup.string().required('Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log('Form Data : ', values);
    onSubmitProps.resetForm();
    openAddDiscountAlertModal();
  };

  return (
    <>
      <CustomModal
        open={openAlertModal}
        onClose={closeAlertModal}
        modalTitle={modalTitle}
        modalDescription={modalDescription}
        width={width}
        centered={centered}
        style={{ top: modalPosition }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Row>
              <Col md={6}>
                <InputField
                  type='text'
                  name='discountTitle'
                  label='Discount Title'
                  placeholder='i.e : Black Friday Sale'
                />
              </Col>
              <Col md={6}>
                <InputField
                  type='text'
                  name='discount'
                  label='Discount'
                  placeholder='Enter your discount'
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <InputField
                  type='text'
                  name='manimumPurchase'
                  label='Mininum Purchase'
                  placeholder='Enter your minimum purchase to be able to this discount'
                />
              </Col>
              <Col md={6}>
                <InputField
                  type='text'
                  name='expiryDate'
                  label='Expiry Date'
                  placeholder='Enter expiry date for discount'
                />
              </Col>
            </Row>
            <div className='fe mt-4'>
              <Button
                title='Cancel'
                btnType='outline'
                type='button'
                className='mb-4'
                style={btnOutlineStyle}
                onClick={closeAlertModal}
              />
              <Button
                title='Add Discount'
                type='submit'
                className='mb-4'
                style={btnContainedStyle}
              />
            </div>
          </Form>
        </Formik>
      </CustomModal>
      <AlertModal
        type='success'
        modalTitle='Discount Added Successfully!'
        openAlertModal={alertAddDiscountModal}
        closeAlertModal={() => {
          closeAlertModal();
          closeAddDiscountAlertModal();
        }}
        width={700}
        modalPosition={100}
        btn2Title='Okay'
        btnColor='#24be59' // green
      />
    </>
  );
};

export default AddDiscountModal;
