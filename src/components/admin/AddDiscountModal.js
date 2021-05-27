import React, { useState } from 'react';
import { Col, Form, Modal } from 'react-bootstrap';
import '../../styles/components/admin/addDiscountModal.css';
import Button from '../formComponents/Button';

const AddDiscountModal = ({
  addDiscountModal,
  handleCloseAddDiscountModal,
}) => {
  const [addDiscountInfo, setAddDiscountInfo] = useState({
    discountTitle: '',
    discount: '',
    manimumPurchase: '',
    maximumPurchase: '',
  });

  const { discountTitle, discount, manimumPurchase, maximumPurchase } =
    addDiscountInfo;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setAddDiscountInfo({ ...addDiscountInfo, [name]: value });
  };

  const addDiscountSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      discountTitle,
      discount,
      manimumPurchase,
      maximumPurchase,
    });
    handleCloseAddDiscountModal();
  };

  return (
    <Modal
      show={addDiscountModal}
      onHide={handleCloseAddDiscountModal}
      className='addDiscountModal'
    >
      <Modal.Header closeButton>
        <Modal.Title>New Discount Offer</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className='gray'>
          Fillup the following fields to add new discount offer to your store.
        </p>
        <Form onSubmit={addDiscountSubmitHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId='discountTitle'>
              <Form.Label>Discount Title</Form.Label>
              <Form.Control
                name='discountTitle'
                type='text'
                value={discountTitle}
                onChange={onChangeHandler}
                placeholder='i.e, Black Friday Sale'
              />
            </Form.Group>
            <Form.Group as={Col} controlId='discount'>
              <Form.Label>Discount</Form.Label>
              <Form.Control
                name='discount'
                type='number'
                value={discount}
                onChange={onChangeHandler}
                placeholder='42434'
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='manimumPurchase'>
              <Form.Label>Minimum Purchase</Form.Label>
              <Form.Control
                name='manimumPurchase'
                type='number'
                value={manimumPurchase}
                onChange={onChangeHandler}
                placeholder='42434'
              />
            </Form.Group>
            <Form.Group as={Col} controlId='maximumPurchase'>
              <Form.Label>Maximum Purchase</Form.Label>
              <Form.Control
                name='maximumPurchase'
                type='number'
                value={maximumPurchase}
                onChange={onChangeHandler}
                placeholder='42434'
              />
            </Form.Group>
          </Form.Row>
          <div className='fe'>
            <Button
              title='Cancle'
              btnType='outline'
              type='button'
              className='mb-4'
              style={{
                borderRadius: '5px',
                padding: '8px 50px',
                margin: '0 0 0 15px',
              }}
              onClick={handleCloseAddDiscountModal}
            />
            <Button
              title='Add Discount'
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
      </Modal.Body>
    </Modal>
  );
};

export default AddDiscountModal;
