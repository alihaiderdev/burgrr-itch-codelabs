import React, {useState} from 'react';
import {Col, Form, Modal} from 'react-bootstrap';
import '../../styles/components/admin/addProductModal.css';
import Logo from '../../assets/images/product.png';
import { MdAddCircle } from 'react-icons/md';

const AddProductModal = ({addproductModal, handleCloseAddproductModal}) => {
  const [addproductInfo, setAddproductInfo] = useState({
    productTitle: '',
    product: '',
    manimumPurchase: '',
    maximumPurchase: '',
  });

  const {productTitle, product, manimumPurchase, maximumPurchase} =
    addproductInfo;

  const onChangeHandler = (e) => {
    setAddproductInfo({...addproductInfo, [e.target.name]: e.target.value});
  };

  const Addextra = () => {
    // setAddproductInfo({...addproductInfo, [e.target.name]: e.target.value});
    return (
      <div>
         <Form.Control
          className="input col-11"
          required
          name='extras'
          type='text'
          onChange={onChangeHandler}
          placeholder=''
        />
      </div>
    )
    
  };

  const addproductSubmitHandler = (e) => {
    e.preventDefault();
    console.log({
      productTitle,
      product,
      manimumPurchase,
      maximumPurchase,
    });
  };

  return (
    <Modal
      show={addproductModal}
      onHide={handleCloseAddproductModal}
      className='addproductModal'
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className='grayClr'>
          Fill up the following form to add a new product to your store
        </p>
        <Form onSubmit={addproductSubmitHandler}>
        <Form.Row>
          <Form.Row className="rowWidth">
          <Col md="8">
            <Form.Group as={Col} controlId='productTitle' className="formGrouppad">
              <Form.Label className="labelStyle">Product Name</Form.Label>
              <Form.Control
                className="input"
                required
                name='productName'
                type='text'
                value={productTitle}
                onChange={onChangeHandler}
                placeholder='i.e, Burger O Clock'
              />
              <div className="mt20">
              <Form.Label className="labelStyle">Description</Form.Label>
                <textarea className="form-control input text_area" rows={6}
                onChange={onChangeHandler}
                placeholder='i.e, Burger O Clock' required>
                </textarea>
              </div>
            </Form.Group>
          </Col>
            <Form.Group as={Col} controlId='productTitle'>
              <div className="imgDiv">
                <img src={Logo}/>
              </div>
            </Form.Group>
          </Form.Row>
        </Form.Row>
          <Form.Row>
          <Col md="8" className="formGrouppad">
            <Form.Group as={Col} controlId='manimumPurchase' className="formGrouppad">
              <Form.Label className="labelStyle">Category</Form.Label>
              <Form.Control
                className="input"
                required
                name='category'
                as="select"
                onChange={onChangeHandler}
                placeholder='42434'
              >
                <option>Burgers</option>
                <option>Burgers</option>
                <option>Burgers</option>
              </Form.Control>
            </Form.Group>
          </Col>
            <Form.Group as={Col} controlId='maximumPurchase'>
              <Form.Label className="labelStyle">Price</Form.Label>
              <Form.Control
                className="input"
                required
                name='maximumPurchase'
                type='number'
                onChange={onChangeHandler}
                placeholder='42434'
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId='manimumPurchase' className="formGrouppad">
              <Form.Label>Extras</Form.Label>
              <Addextra/>
              <div className="row mgleft">
              <Form.Control
                className="input col-11"
                required
                name='extras'
                type='text'
                onChange={onChangeHandler}
                placeholder=''
              />
              <span className="col-1 extrainput">
                <MdAddCircle className="addicon"/>
                Add</span>
              </div>
            </Form.Group>
          </Form.Row>
          <div className="modalbtnFooter">
            <button className='ur cancle' onClick={handleCloseAddproductModal}>
              Cancel
            </button>
            <button
              type='submit'
              className='ur'
              onClick={handleCloseAddproductModal}
            >
              Add Product
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProductModal;
