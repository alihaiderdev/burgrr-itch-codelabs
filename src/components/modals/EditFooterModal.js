import React, { useState } from 'react';
import '../../styles/components/modals/editFooterModal.css';

import { Col, Form, Row } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '../formComponents/Button';
import CustomModal from './CustomModal';

const EditFooterModal = ({ editFooterModal, handleCloseEditFooterModal }) => {
  const [editFooterInfo, setEditFooterInfo] = useState({
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
  });

  const {
    column1Title,
    column1Description,
    column2Title,
    column2FacebookUsername,
    column2InstagramUsername,
    column2TwitterUsername,
    column3Title,
    column3ContactUs,
    column3EmailAddress,
    column3PhoneNumber,
    column3Location,
  } = editFooterInfo;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditFooterInfo({ ...editFooterInfo, [name]: value });
  };

  const editFooterSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      {
        column1Title,
        column1Description,
        column2Title,
        column3Title,
        column3ContactUs,
        column3EmailAddress,
        column3PhoneNumber,
        column3Location,
      },
      `column2FacebookUsername : https://www.facebook.com/${column2FacebookUsername} column2InstagramUsername : https://www.instagram.com/${column2InstagramUsername} column2TwitterUsername : https://www.twitter.com/${column2TwitterUsername}`
    );
    handleCloseEditFooterModal();
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
        <Form onSubmit={editFooterSubmitHandler}>
          <h5 className='um'>Coulmn 1</h5>
          <Form.Group controlId='column1Title'>
            <Form.Control
              name='column1Title'
              type='text'
              value={column1Title}
              onChange={onChangeHandler}
              placeholder='Enter Column 1 Title'
            />
          </Form.Group>
          <Form.Group controlId='column1Description'>
            <Form.Control
              name='column1Description'
              type='text'
              as='textarea'
              rows={4}
              value={column1Description}
              onChange={onChangeHandler}
              placeholder='Enter Column 1 Description'
            />
          </Form.Group>
          <h5 className='um'>Coulmn 2</h5>
          <Form.Group controlId='column2Title'>
            <Form.Control
              name='column2Title'
              type='text'
              value={column2Title}
              onChange={onChangeHandler}
              placeholder='Enter Column 2 Title'
            />
          </Form.Group>
          <Form.Group controlId='column2FacebookUsername'>
            <Form.Label>Account 1</Form.Label>
            <Row>
              <Col md={3}>
                <p className='m-0'>facebook.com/</p>
              </Col>
              <Col md={9} className='pl-0'>
                <Form.Control
                  name='column2FacebookUsername'
                  type='text'
                  value={column2FacebookUsername}
                  onChange={onChangeHandler}
                  placeholder='Facebook Username'
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId='column2InstagramUsername'>
            <Form.Label>Account 2</Form.Label>
            <Row>
              <Col md={3}>
                <p className='m-0'>instagram.com/</p>
              </Col>
              <Col md={9} className='pl-0'>
                <Form.Control
                  name='column2InstagramUsername'
                  type='text'
                  value={column2InstagramUsername}
                  onChange={onChangeHandler}
                  placeholder='Instagram Username'
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId='column2TwitterUsername'>
            <Form.Label>Account 3</Form.Label>
            <Row>
              <Col md={3}>
                <p className='m-0'>twitter.com/</p>
              </Col>
              <Col md={9} className='pl-0'>
                <Form.Control
                  name='column2TwitterUsername'
                  type='text'
                  value={column2TwitterUsername}
                  onChange={onChangeHandler}
                  placeholder='Twitter Username'
                />
              </Col>
            </Row>
          </Form.Group>
          <h5 className='um'>Coulmn 3</h5>
          <Form.Group controlId='column3Title'>
            <Form.Control
              name='column3Title'
              type='text'
              value={column3Title}
              onChange={onChangeHandler}
              placeholder='Enter Column 3 Title'
            />
          </Form.Group>
          <Form.Group controlId='column3ContactUs'>
            <Form.Control
              name='column3ContactUs'
              type='text'
              value={column3ContactUs}
              onChange={onChangeHandler}
              placeholder='Contact Us'
            />
          </Form.Group>
          <Form.Group controlId='column3EmailAddress'>
            <Form.Control
              name='column3EmailAddress'
              type='text'
              value={column3EmailAddress}
              onChange={onChangeHandler}
              placeholder='Email Address'
            />
          </Form.Group>
          <Form.Group controlId='column3PhoneNumber'>
            <Form.Control
              name='column3PhoneNumber'
              type='text'
              value={column3PhoneNumber}
              onChange={onChangeHandler}
              placeholder='Phone Number'
            />
          </Form.Group>
          <Form.Group controlId='column3Location'>
            <Form.Control
              name='column3Location'
              type='text'
              value={column3Location}
              onChange={onChangeHandler}
              placeholder='Location'
            />
          </Form.Group>

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
      </CustomModal>
    </>
  );
};

export default EditFooterModal;
