import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/cartForms.css';
import CartItemCard from './CartItemCard';
import BurgerImage from '../assets/images/product.png';

export class ConfirmOrder extends Component {
  continue = (e) => {
    e.preventDefault();
    // process form
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const cartItemsInfo = [
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
      {
        cardimg: BurgerImage,
        cardName: 'Big Mob',
        cardDrink: 'Pepsi',
        cardAddons: 'Malai Roll, Extra Fries, ..., +1',
        cardPrice: '538',
      },
    ];

    const {
      values: {
        name,
        email,
        contactNumber,
        deliveryAddress,
        deliveryDateTime,
        date,
        message,
        cardHolderName,
        cardNumber,
        expiry,
        cvc,
      },
      firstStep,
      secondStep,
      current,
    } = this.props;

    console.log('{ current } : ', { current });

    return (
      <div className='container-85'>
        <Row className='confirmOrderScreen'>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className='confirmFormCol'
          >
            <div className='confirmForm'>
              <h3 className='um black mb-4'>Confirm Order</h3>
              <div className='personal-info-wrapper'>
                <h6 className>Personal Information</h6>
                <Link
                  onClick={firstStep}
                  className='black confirmOrderEditLink'
                >
                  Edit
                </Link>
              </div>
              <div className='personalInfoContainer'>
                <div>
                  <span className='titles gray'>First Name</span>
                  <span>{name ? name : 'Hoi Smith'}</span>
                </div>
                <div>
                  <span className='titles gray'>Contact Number</span>
                  <span>{contactNumber ? contactNumber : '38179818101'}</span>
                </div>
                <div>
                  <span className='titles gray'>Email Address</span>
                  <span>{email ? email : 'someone@gmail.com'}</span>
                </div>
                <div>
                  <span className='titles gray'>Delivery Address</span>
                  <span>
                    {deliveryAddress
                      ? deliveryAddress
                      : 'House no 100 abc adddress'}
                  </span>
                </div>
              </div>
              <div className='payment-method-wrapper'>
                <h6 className>Payment Methods</h6>
                <Link
                  onClick={secondStep}
                  className='black confirmOrderEditLink'
                >
                  Edit
                </Link>
              </div>
              <div className='personalInfoContainer'>
                <div>
                  <span className='titles gray'>Method</span>
                  <span>{'Jazzcash'}</span>
                </div>
                <div>
                  <span className='titles gray'>Account Number</span>
                  <span>{cardNumber ? cardNumber : '+817981810981'}</span>
                </div>
                <div>
                  <span className='titles gray'>Payment Status</span>
                  <span>{'Paid'}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={6} className='cartItemsCol'>
            <div className='cartItemsContainer'>
              <div className='cartcount'>
                <h2 className='m-0'>Cart</h2>
                <span className='count'>2</span>
              </div>
              <div className='items'>items</div>
              <div className='allCartItemsContainer'>
                {cartItemsInfo &&
                  cartItemsInfo.slice(0, 5).map((c, i) => {
                    return (
                      <CartItemCard
                        index={i}
                        img={c.cardimg}
                        name={c.cardName}
                        drink={c.cardDrink}
                        addons={c.cardAddons}
                        price={c.cardPrice}
                      />
                    );
                  })}
              </div>
              <div className='pricesContainer'>
                <Form.Group controlId='code' className='promotionalCode'>
                  <Form.Label>
                    Promotional Code <span className='gray'>(if any)</span>
                  </Form.Label>
                  <Form.Control type='text' placeholder='Code' />
                </Form.Group>
                <div className='price'>
                  <p className='sb'>
                    <span>Subtotal</span>
                    <span>PKR 538</span>
                  </p>
                  <p className='sb'>
                    <span>Delivery Charges</span>
                    <span>PKR 50</span>
                  </p>
                  <p className='sb'>
                    <span>Total</span>
                    <span className='orange um'>PKR 588</span>
                  </p>
                </div>
                <div className='placeholderBtnWrapper'>
                  <button className='placeOrder' onClick={this.continue}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ConfirmOrder;
