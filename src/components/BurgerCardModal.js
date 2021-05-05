import React, { useState } from 'react';
import '../styles/components/burgerCardModal.css';
import { Modal, Button, Row, Form, Col, ButtonGroup } from 'react-bootstrap';
import BurgerIamge from '../assets/images/product.png';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const BurgerCardModal = (props) => {
  const { onHide } = props;
  const [modalShow, setModalShow] = useState(false);
  const [selectDrinkList, setSelectDrinkList] = useState([
    'Pepsi',
    '7UP',
    'Marinda',
    'Fanta',
    'Coke',
    'Due',
    'Sprite',
    'Sting',
  ]);
  const [selectAddonsList, setSelectAddonsList] = useState([
    'Malai Roll',
    'Raita',
    'Extra Fries',
    'Extra Bread',
    ' Additional Kabab',
  ]);
  const [drinksRadio, setDrinksRadio] = useState('Pepsi');
  const [selectDrink, setSelectDrink] = useState('Pepsi');
  const [selectAddOns, setSelectAddOns] = useState('Malai Roll');
  const [malaiRollCount, setMalaiRollCount] = useState(0);
  const [raitaCount, setRaitaCount] = useState(0);
  const [extraFriesCount, setextraFriesCount] = useState(0);
  const [extraBreadCount, setextraBreadCount] = useState(0);
  const [additionalKababCount, setadditionalKababCount] = useState(0);
  const [specialMessage, setSpecialMessage] = useState('');
  const [addToCartQtyCount, setAddToCartQtyCount] = useState(0);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <div className='buegerCardModalLogo'>
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
                  <Form.Group controlId='coldDrinks'>
                    <Form.Control
                      as='select'
                      custom
                      size='sm'
                      value={selectDrink}
                      onChange={(e) => setSelectDrink(e.target.value)}
                      name='selectDrink'
                    >
                      {selectDrinkList &&
                        selectDrinkList.map((d, i) => (
                          <option key={i} value={d}>
                            {d}
                          </option>
                        ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className='coldrink-main-container'>
                  <Form.Check
                    className='mb-2'
                    type='radio'
                    checked={drinksRadio === 'Pepsi'}
                    value='Pepsi'
                    label='Pepsi'
                    id='Pepsi'
                    onChange={(e) => setDrinksRadio(e.target.value)}
                  />
                  <Form.Check
                    className='mb-2'
                    type='radio'
                    checked={drinksRadio === 'Fanta'}
                    value='Fanta'
                    label='Fanta'
                    id='Fanta'
                    onChange={(e) => setDrinksRadio(e.target.value)}
                  />
                  <Form.Check
                    className='mb-2'
                    type='radio'
                    checked={drinksRadio === '7UP'}
                    value='7UP'
                    label='7UP'
                    id='7UP'
                    onChange={(e) => setDrinksRadio(e.target.value)}
                  />
                  <Form.Check
                    className='mb-2'
                    type='radio'
                    checked={drinksRadio === 'Marinda'}
                    value='Marinda'
                    label='Marinda'
                    id='Marinda'
                    onChange={(e) => setDrinksRadio(e.target.value)}
                  />
                </div>
              </div>

              <div className='addOns'>
                <div className='addons-wrapper'>
                  <p className='um'>Add-ons</p>
                  <Form.Group controlId='addons' className='selectAddons'>
                    <Form.Control
                      as='select'
                      custom
                      size='sm'
                      value={selectAddOns}
                      onChange={(e) => setSelectAddOns(e.target.value)}
                      name='selectAddOns'
                    >
                      {selectAddonsList &&
                        selectAddonsList.map((addon, index) => (
                          <option key={index} value={addon}>
                            {addon}
                          </option>
                        ))}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className='addons-main-container'>
                  <div className='addons-container'>
                    <Form.Check
                      className='mb-2'
                      type={'checkbox'}
                      id={`default-checkbox-mr`}
                      label={'Malai Roll'}
                      checked
                    />
                    <div>
                      <span className='ur'>
                        PKR <span className='price'>323</span>
                      </span>
                      <button
                        onClick={() => setMalaiRollCount(malaiRollCount - 1)}
                        className='modal-counter-btn ml-2'
                        disabled={malaiRollCount === 0}
                      >
                        -
                      </button>
                      <span className='mx-2'>{malaiRollCount}</span>
                      <button
                        onClick={() => setMalaiRollCount(malaiRollCount + 1)}
                        className='modal-counter-btn'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className='addons-container'>
                    <Form.Check
                      className='mb-2'
                      type={'checkbox'}
                      id={`default-checkbox-r`}
                      label={'Raita'}
                    />
                    <div>
                      <span className='ur'>
                        PKR <span className='price'>45</span>
                      </span>
                      <button
                        onClick={() => setRaitaCount(raitaCount - 1)}
                        className='modal-counter-btn ml-2'
                        disabled={malaiRollCount === 0}
                      >
                        -
                      </button>
                      <span className='mx-2'>{raitaCount}</span>
                      <button
                        onClick={() => setRaitaCount(raitaCount + 1)}
                        className='modal-counter-btn'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className='addons-container'>
                    <Form.Check
                      className='mb-2'
                      type={'checkbox'}
                      id={`default-checkbox-ef`}
                      label={'Extra Fries'}
                      checked
                    />
                    <div>
                      <span className='ur'>
                        PKR <span className='price'>323</span>
                      </span>
                      <button
                        onClick={() => setextraFriesCount(extraFriesCount - 1)}
                        className='modal-counter-btn ml-2'
                        disabled={malaiRollCount === 0}
                      >
                        -
                      </button>
                      <span className='mx-2'>{extraFriesCount}</span>
                      <button
                        onClick={() => setextraFriesCount(extraFriesCount + 1)}
                        className='modal-counter-btn'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className='addons-container'>
                    <Form.Check
                      className='mb-2'
                      type={'checkbox'}
                      id={`default-checkbox-eb`}
                      label={'Extra Bread'}
                      checked
                    />
                    <div>
                      <span className='ur'>
                        PKR <span className='price'>323</span>
                      </span>
                      <button
                        onClick={() => setextraBreadCount(extraBreadCount - 1)}
                        className='modal-counter-btn ml-2'
                        disabled={malaiRollCount === 0}
                      >
                        -
                      </button>
                      <span className='mx-2'>{extraBreadCount}</span>
                      <button
                        onClick={() => setextraBreadCount(extraBreadCount + 1)}
                        className='modal-counter-btn'
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className='addons-container'>
                    <Form.Check
                      className='mb-2'
                      type={'checkbox'}
                      id={`default-checkbox-eb`}
                      label={'Additional Kabab'}
                    />
                    <div>
                      <span className='ur'>
                        PKR <span className='price'>45</span>
                      </span>
                      <button
                        onClick={() =>
                          setadditionalKababCount(additionalKababCount - 1)
                        }
                        className='modal-counter-btn ml-2'
                        disabled={malaiRollCount === 0}
                      >
                        -
                      </button>
                      <span className='mx-2'>{additionalKababCount}</span>
                      <button
                        onClick={() =>
                          setadditionalKababCount(additionalKababCount + 1)
                        }
                        className='modal-counter-btn'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <Form.Group controlId='special-message'>
                <Form.Control
                  placeholder='Special Message'
                  as='textarea'
                  rows={4}
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
      <Drawer showSidebar={showSidebar} sidebar={sidebar} />
    </>
  );
};

export default BurgerCardModal;
