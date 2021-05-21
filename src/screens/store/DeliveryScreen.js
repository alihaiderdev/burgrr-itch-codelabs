import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/screens/store/delivery.css';

const DeliveryScreen = () => {
  return (
    <div className='deliveryScreen'>
      <Container>
        <div className='enterZoneWrapper'>
          <h5 className='um black mb-4'>Delivery Zones</h5>
          <input className='enterZone ur' placeholder='Area Name' type='text' />
          <button className='white bg-orange b-none p-2 px-4 um'>
            Find Business
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DeliveryScreen;
