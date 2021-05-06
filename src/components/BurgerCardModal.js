import React, { useState } from 'react';
import '../styles/components/burgerCardModal.css';
import { Modal, Button, Row, Form, Col, ButtonGroup } from 'react-bootstrap';
import BurgerIamge from '../assets/images/product.png';
import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import AddonCheckBox from './AddonCheckBox';

const BurgerCardModal = (props) => {
  const { onHide } = props;
  const [modalShow, setModalShow] = useState(false);
  const selectDrinkList = [
    'Pepsi',
    '7UP',
    'Marinda',
    'Fanta',
    'Coke',
    'Due',
    'Sprite',
    'Sting',
  ];
  const selectAddonsList = [
    'Malai Roll',
    'Raita',
    'Extra Fries',
    'Extra Bread',
    'Additional Kabab',
  ];

  // const [state, setState] = useState([
  //   { name: 'foo', counter: 0 },
  //   { name: 'far', counter: 0 },
  //   { name: 'faz', counter: 0 },
  // ]);

  // const clickButton = () => {
  //   // 1. Make a shallow copy of the array
  //   let temp_state = [...state];

  //   // 2. Make a shallow copy of the element you want to mutate
  //   let temp_element = { ...temp_state[0] };

  //   // 3. Update the property you're interested in
  //   temp_element.counter = temp_element.counter + 1;

  //   // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
  //   temp_state[0] = temp_element;

  //   // 5. Set the state to our new copy
  //   setState(temp_state);
  // };

  const [addOnsCheckBoxes, setAddOnsCheckBoxes] = useState([
    {
      id: 1,
      value: 'Malai Roll',
      isChecked: false,
      count: 0,
      price: 232,
      // addOnCountInc: () => this.count++,
      // addOnCountDec: () => this.count--,
    },
    {
      id: 2,
      value: 'Raita',
      isChecked: false,
      count: 0,
      price: 45,
    },
    {
      id: 3,
      value: 'Extra Fries',
      isChecked: false,
      count: 0,
      price: 232,
    },
    {
      id: 4,
      value: 'Extra Bread',
      isChecked: false,
      count: 0,
      price: 232,
    },
    {
      id: 5,
      value: 'Additional Kabab',
      isChecked: false,
      count: 0,
      price: 45,
    },
  ]);

  const [drinksRadio, setDrinksRadio] = useState('Pepsi');
  const [selectDrink, setSelectDrink] = useState('Pepsi');
  const [selectAddOns, setSelectAddOns] = useState('Malai Roll');
  // const [malaiRollCount, setMalaiRollCount] = useState(0);
  // const [raitaCount, setRaitaCount] = useState(0);
  // const [extraFriesCount, setextraFriesCount] = useState(0);
  // const [extraBreadCount, setextraBreadCount] = useState(0);
  // const [additionalKababCount, setadditionalKababCount] = useState(0);
  const [specialMessage, setSpecialMessage] = useState('');
  const [addToCartQtyCount, setAddToCartQtyCount] = useState(0);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleCheckedCheckbox = (e) => {
    addOnsCheckBoxes.forEach((addOn) => {
      if (addOn.value === e.target.value) addOn.isChecked = e.target.checked;
    });
    setAddOnsCheckBoxes({ addOnsCheckBoxes });
    // this.setState({ fruites: fruites });
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
                  {addOnsCheckBoxes &&
                    addOnsCheckBoxes.map((addon) => {
                      return (
                        <AddonCheckBox
                          {...addon}
                          handleCheckedCheckbox={handleCheckedCheckbox}
                        />
                      );
                    })}
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

// <div className='addons-container'>
//   <Form.Check
//     className='mb-2'
//     type={'checkbox'}
//     onClick={handleCheckChieldElement}
//     id={`default-checkbox-mr`}
//     label={'Malai Roll'}
//   />
//   <div>
//     <span className='ur'>
//       PKR <span className='price'>323</span>
//     </span>
//     <button
//       onClick={() => setMalaiRollCount(malaiRollCount - 1)}
//       className='modal-counter-btn ml-2'
//       disabled={malaiRollCount === 0}
//     >
//       -
//     </button>
//     <span className='mx-2'>{malaiRollCount}</span>
//     <button
//       onClick={() => setMalaiRollCount(malaiRollCount + 1)}
//       className='modal-counter-btn'
//     >
//       +
//     </button>
//   </div>
// </div>

// <div className='addons-container'>
//   <Form.Check
//     className='mb-2'
//     type={'checkbox'}
//     onClick={handleCheckChieldElement}
//     id={`default-checkbox-r`}
//     label={'Raita'}
//   />
//   <div>
//     <span className='ur'>
//       PKR <span className='price'>45</span>
//     </span>
//     <button
//       onClick={() => setRaitaCount(raitaCount - 1)}
//       className='modal-counter-btn ml-2'
//       disabled={malaiRollCount === 0}
//     >
//       -
//     </button>
//     <span className='mx-2'>{raitaCount}</span>
//     <button
//       onClick={() => setRaitaCount(raitaCount + 1)}
//       className='modal-counter-btn'
//     >
//       +
//     </button>
//   </div>
// </div>

// <div className='addons-container'>
//   <Form.Check
//     className='mb-2'
//     type={'checkbox'}
//     onClick={handleCheckChieldElement}
//     id={`default-checkbox-ef`}
//     label={'Extra Fries'}
//   />
//   <div>
//     <span className='ur'>
//       PKR <span className='price'>323</span>
//     </span>
//     <button
//       onClick={() => setextraFriesCount(extraFriesCount - 1)}
//       className='modal-counter-btn ml-2'
//       disabled={malaiRollCount === 0}
//     >
//       -
//     </button>
//     <span className='mx-2'>{extraFriesCount}</span>
//     <button
//       onClick={() => setextraFriesCount(extraFriesCount + 1)}
//       className='modal-counter-btn'
//     >
//       +
//     </button>
//   </div>
// </div>

// <div className='addons-container'>
//   <Form.Check
//     className='mb-2'
//     type={'checkbox'}
//     onClick={handleCheckChieldElement}
//     id={`default-checkbox-eb`}
//     label={'Extra Bread'}
//   />
//   <div>
//     <span className='ur'>
//       PKR <span className='price'>323</span>
//     </span>
//     <button
//       onClick={() => setextraBreadCount(extraBreadCount - 1)}
//       className='modal-counter-btn ml-2'
//       disabled={malaiRollCount === 0}
//     >
//       -
//     </button>
//     <span className='mx-2'>{extraBreadCount}</span>
//     <button
//       onClick={() => setextraBreadCount(extraBreadCount + 1)}
//       className='modal-counter-btn'
//     >
//       +
//     </button>
//   </div>
// </div>

// <div className='addons-container'>
//   <Form.Check
//     className='mb-2'
//     type={'checkbox'}
//     onClick={handleCheckChieldElement}
//     id={`default-checkbox-eb`}
//     label={'Additional Kabab'}
//   />
//   <div>
//     <span className='ur'>
//       PKR <span className='price'>45</span>
//     </span>
//     <button
//       onClick={() =>
//         setadditionalKababCount(additionalKababCount - 1)
//       }
//       className='modal-counter-btn ml-2'
//       disabled={malaiRollCount === 0}
//     >
//       -
//     </button>
//     <span className='mx-2'>{additionalKababCount}</span>
//     <button
//       onClick={() =>
//         setadditionalKababCount(additionalKababCount + 1)
//       }
//       className='modal-counter-btn'
//     >
//       +
//     </button>
//   </div>
// </div>
