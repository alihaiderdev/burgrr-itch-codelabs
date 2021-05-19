import React, {useState} from 'react';
import '../styles/components/burgerCardModal.css';
import {Modal, Form} from 'react-bootstrap';
import BurgerIamge from '../assets/images/product.png';
import {Link} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import AddonCheckBox from './AddonCheckBox';
import SidebarDrawer from './SidebarDrawer';
import {Radio, Space} from 'antd';

const BurgerCardModal = (props) => {
  const {onHide} = props;
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
  const [selectDrink, setSelectDrink] = useState('Pepsi');
  const [selectAddOns, setSelectAddOns] = useState('Malai Roll');
  const [specialMessage, setSpecialMessage] = useState('');
  const [addToCartQtyCount, setAddToCartQtyCount] = useState(0);
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  const [toggleDrawer, setToggleDrawer] = useState({
    visible: false,
    placement: 'right',
  });

  const {visible, placement} = toggleDrawer;

  const showDrawer = () => {
    setToggleDrawer({...toggleDrawer, visible: true});
  };

  const closeDrawer = () => {
    setToggleDrawer({...toggleDrawer, visible: false});
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
    setDrinksRadio({...drinksRadio, [e.target.name]: e.target.value});
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
                  <Form.Control
                    as='select'
                    custom
                    size='sm'
                    value={selectDrink}
                    onChange={(e) => setSelectDrink(e.target.value)}
                    name='selectDrink'
                    className='selectDrink'
                  >
                    {selectDrinkList &&
                      selectDrinkList.map((d, i) => (
                        <option key={i} value={d}>
                          {d}
                        </option>
                      ))}
                  </Form.Control>
                </div>
                <div className='coldrink-main-container'>
                  {/* <Form.Check
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
                  /> */}

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
                  <Form.Control
                    as='select'
                    custom
                    size='sm'
                    value={selectAddOns}
                    onChange={(e) => setSelectAddOns(e.target.value)}
                    name='selectAddOns'
                    className='selectAddOns'
                  >
                    {selectAddonsList &&
                      selectAddonsList.map((addon, index) => (
                        <option key={index} value={addon}>
                          {addon}
                        </option>
                      ))}
                  </Form.Control>
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
                  rows={4}
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
