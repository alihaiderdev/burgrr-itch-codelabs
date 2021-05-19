import React, {useState} from 'react';
import {Col, Form, Modal} from 'react-bootstrap';
import '../../styles/components/admin/addDiscountModal.css';

const AddDiscountModal = ({addDiscountModal, handleCloseAddDiscountModal}) => {
  const [addDiscountInfo, setAddDiscountInfo] = useState({
    discountTitle: '',
    discount: '',
    manimumPurchase: '',
    maximumPurchase: '',
  });

  const {discountTitle, discount, manimumPurchase, maximumPurchase} =
    addDiscountInfo;

  const onChangeHandler = (e) => {
    setAddDiscountInfo({...addDiscountInfo, [e.target.name]: e.target.value});
  };

  const addDiscountSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      discountTitle,
      discount,
      manimumPurchase,
      maximumPurchase,
    });
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
                required
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
                required
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
                required
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
                required
                name='maximumPurchase'
                type='number'
                value={maximumPurchase}
                onChange={onChangeHandler}
                placeholder='42434'
              />
            </Form.Group>
          </Form.Row>
          <Modal.Footer>
            <button className='ur cancle' onClick={handleCloseAddDiscountModal}>
              Cancel
            </button>
            <button
              type='submit'
              className='ur'
              onClick={handleCloseAddDiscountModal}
            >
              Add Discount
            </button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddDiscountModal;
