import React, { useState } from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';

import Button from '../formComponents/Button';
import CustomModal from './CustomModal';
import InputField from '../formComponents/InputField';
import AlertModal from './AlertModal';

const AddCouponModal = (props) => {
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

  const [alertAddCouponModal, setAlertAddCouponModal] = useState(false);
  const openAddCouponAlertModal = () => setAlertAddCouponModal(true);
  const closeAddCouponAlertModal = () => setAlertAddCouponModal(false);

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
    couponTitle: '',
    discount: '',
    manimumPurchase: '',
    expiryDate: '',
  };

  const validationSchema = Yup.object({
    couponTitle: Yup.string().required('Required!'),
    discount: Yup.number().required('Required!'),
    manimumPurchase: Yup.number().required('Required!'),
    expiryDate: Yup.string().required('Required!'),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log('Form Data : ', values);
    onSubmitProps.resetForm();
    openAddCouponAlertModal();
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
                  name='couponTitle'
                  label='Coupon Title'
                  placeholder='i.e : KHI-327'
                />
              </Col>
              <Col md={6}>
                <InputField
                  type='text'
                  name='discount'
                  label='Discount'
                  placeholder='Enter your discount on coupon'
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <InputField
                  type='text'
                  name='manimumPurchase'
                  label='Mininum Purchase'
                  placeholder='Enter your minimum purchase to be able to this coupon'
                />
              </Col>
              <Col md={6}>
                <InputField
                  type='text'
                  name='expiryDate'
                  label='Expiry Date'
                  placeholder='Enter expiry date of Coupon'
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
              <Button title='Add Coupon' type='submit' className='mb-4' style={btnContainedStyle} />
            </div>
          </Form>
        </Formik>
      </CustomModal>
      <AlertModal
        type='success'
        modalTitle='Coupon Added Successfully!'
        openAlertModal={alertAddCouponModal}
        closeAlertModal={() => {
          closeAlertModal();
          closeAddCouponAlertModal();
        }}
        width={700}
        modalPosition={100}
        btn2Title='Okay'
        btnColor='#24be59' // green
      />
    </>
  );
};

export default AddCouponModal;
