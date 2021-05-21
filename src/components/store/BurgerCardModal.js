import React, { useState } from 'react';
import '../../styles/components/store/burgerCardModal.css';

import { Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { Radio, Space } from 'antd';

import BurgerIamge from '../../assets/images/product.png';
import AddonCheckBox from '../store/AddonCheckBox';
import SidebarDrawer from '../store/SidebarDrawer';

const BurgerCardModal = (props) => {
  const { onHide } = props;

  const [addOnsCheckBoxes, setAddOnsCheckBoxes] = useState([
    {
      id: 1,
      value: 'Malai Roll',
      isChecked: false,
      qty: 0,
      price: 232,
    },
    {
      id: 2,
      value: 'Raita',
      isChecked: false,
      qty: 0,
      price: 45,
    },
    {
      id: 3,
      value: 'Extra Fries',
      isChecked: false,
      qty: 0,
      price: 232,
    },
    {
      id: 4,
      value: 'Extra Bread',
      isChecked: false,
      qty: 0,
      price: 232,
    },
    {
      id: 5,
      value: 'Additional Kabab',
      isChecked: false,
      qty: 0,
      price: 45,
    },
  ]);

  const [drinksRadio, setDrinksRadio] = useState('Pepsi');
  const [specialMessage, setSpecialMessage] = useState('');
  const [addToCartQtyCount, setAddToCartQtyCount] = useState(0);

  const [toggleDrawer, setToggleDrawer] = useState({
    visible: false,
    placement: 'right',
  });

  const { visible, placement } = toggleDrawer;

  const showDrawer = () => {
    setToggleDrawer({ ...toggleDrawer, visible: true });
  };

  const closeDrawer = () => {
    setToggleDrawer({ ...toggleDrawer, visible: false });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleCheckedCheckbox = (e) => {
    addOnsCheckBoxes.forEach((addOn) => {
      if (addOn.value === e.target.value) addOn.isChecked = e.target.checked;
    });
    setAddOnsCheckBoxes([...addOnsCheckBoxes]);
  };

  const qtyIncHandler = (id) => {
    const duplicateData = [...addOnsCheckBoxes];
    addOnsCheckBoxes.map((data, i) => {
      if (data.id === id) {
        let oldQty = duplicateData[i].qty;
        duplicateData[i].qty = ++oldQty;
      }
    });
    setAddOnsCheckBoxes([...duplicateData]);
  };

  const qtyDecHandler = (id) => {
    const duplicateData = [...addOnsCheckBoxes];
    addOnsCheckBoxes.map((data, i) => {
      if (data.id === id) {
        let oldQty = duplicateData[i].qty;
        duplicateData[i].qty = --oldQty;
      }
    });
    setAddOnsCheckBoxes([...duplicateData]);
  };

  const onChangeHandler = (e) => {
    console.log('radio checked', e.target.value);
    setDrinksRadio({ ...drinksRadio, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='burgerCardModal'
      >
        <div className='burgerCardModalLogo'>
          <img src={BurgerIamge} alt='BurgerIamge' />
        </div>

        <Modal.Body className='mt-0'>
          <button className='closeModal' type='button' onClick={onHide}>
            <AiOutlineClose size='25px' />
          </button>
          <div className='burgerModalDetails'>
            <h3 className='mb-0'>Big Mab</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            </p>
          </div>
          <div className='modalBody'>
            <Form onSubmit={handleSubmitForm}>
              <div className='coldDrinks'>
                <div className='drinks-wrapper'>
                  <p className='um'>Select Drink</p>
                </div>
                <div className='coldrink-main-container'>
                  <Radio.Group
                    onChange={onChangeHandler}
                    defaultValue={drinksRadio}
                  >
                    <Space direction='vertical'>
                      <Radio
                        value={'Pepsi'}
                        name='Pepsi'
                        checked={drinksRadio === 'Pepsi'}
                      >
                        Pepsi
                      </Radio>
                      <Radio
                        value={'Fanta'}
                        name={'Fanta'}
                        checked={drinksRadio === 'Fanta'}
                      >
                        Fanta
                      </Radio>
                      <Radio
                        value={'7UP'}
                        name={'7UP'}
                        checked={drinksRadio === '7UP'}
                      >
                        7UP
                      </Radio>
                      <Radio
                        value={'Marinda'}
                        name={'Marinda'}
                        checked={drinksRadio === 'Marinda'}
                      >
                        Marinda
                      </Radio>
                    </Space>
                  </Radio.Group>
                </div>
              </div>

              <div className='addOns'>
                <div className='addons-wrapper'>
                  <p className='um'>Add-ons</p>
                </div>
                <div className='addons-main-container'>
                  {addOnsCheckBoxes &&
                    addOnsCheckBoxes.map((addon) => {
                      return (
                        <AddonCheckBox
                          {...addon}
                          addOnsCheckBoxes={addOnsCheckBoxes}
                          handleCheckedCheckbox={handleCheckedCheckbox}
                          qtyIncHandler={qtyIncHandler}
                          qtyDecHandler={qtyDecHandler}
                        />
                      );
                    })}
                </div>
              </div>
              <Form.Group>
                <Form.Control
                  placeholder='Special Message'
                  as='textarea'
                  rows={2}
                  className='specialMessage'
                  value={specialMessage}
                  onChange={(e) => setSpecialMessage(e.target.value)}
                />
              </Form.Group>
              <div className='add-to-cart-wrapper'>
                <div className='price-qty-wrapper'>
                  <h4 className='m-0 ur orange'>450.0 PKR</h4>
                  <div className='add-to-cart-qty-count'>
                    <button
                      className='sub'
                      onClick={() =>
                        setAddToCartQtyCount(addToCartQtyCount - 1)
                      }
                      disabled={addToCartQtyCount === 0}
                    >
                      -
                    </button>
                    <div className='value'>{addToCartQtyCount}</div>
                    <button
                      className='add'
                      onClick={() =>
                        setAddToCartQtyCount(addToCartQtyCount + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='add-to-cart-btn-container'>
                  <Link
                    to='/order-place'
                    className='addToCart'
                    onClick={onHide}
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <SidebarDrawer
        closeDrawer={closeDrawer}
        visible={visible}
        placement={placement}
      />
    </>
  );
};

export default BurgerCardModal;
