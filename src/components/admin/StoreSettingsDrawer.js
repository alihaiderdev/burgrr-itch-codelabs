import React, { useState } from 'react';
import '../../styles/components/admin/StoreSettingsDrawer.css';

import { Link, withRouter } from 'react-router-dom';
import { Drawer, Collapse } from 'antd';
import { BsGear } from 'react-icons/bs';

import ToggleOnIcon from '../../assets/admin-icons-images/Icons/Toggle-On.svg';
import ToggleOffIcon from '../../assets/admin-icons-images/Icons/Toggle-Off.svg';
import AccordianOpenIcon from '../../assets/admin-icons-images/Icons/accordion-open.svg';
import AccordianCloseIcon from '../../assets/admin-icons-images/Icons/accordion-closed.svg';
import AddDiscountModal from '../../components/admin/AddDiscountModal';

import StoreDetails from './StoreSettingsDrawerComponents/StoreDetails';
import StoreTimings from './StoreSettingsDrawerComponents/StoreTimings';
import PaymentSetup from './StoreSettingsDrawerComponents/PaymentSetup';
import PushNotifications from './StoreSettingsDrawerComponents/PushNotifications';
import OrderSettings from './StoreSettingsDrawerComponents/OrderSettings';
import Offers from './StoreSettingsDrawerComponents/Offers';
// import Button from '../../components/formComponents/Button';
import Button from '../formComponents/Button';

const { Panel } = Collapse;

const StoreSettingsDrawer = (props) => {
  const { closeDrawer, visible, placement } = props;
  const [addDiscountModal, setAddDiscountModal] = useState(false);
  const handleOpenAddDiscountModal = () => setAddDiscountModal(true);
  const handleCloseAddDiscountModal = () => setAddDiscountModal(false);

  const [downForMaintenanceToggle, setDownForMaintenanceToggle] =
    useState(false);
  const [availableToggle, setAvailableToggle] = useState(true);
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const toggleCollapse = (key) => {
    console.log(key);
  };

  const header = (accordianHeaderTitle) => {
    return (
      <div className='accordainHeader sb '>
        <span>{accordianHeaderTitle}</span>
        {isCollapseOpen ? (
          <img src={AccordianOpenIcon} alt='AccordianOpenIcon' />
        ) : (
          <img src={AccordianCloseIcon} alt='AccordianCloseIcon' />
        )}
      </div>
    );
  };

  return (
    <div className='customeDrawer'>
      <Drawer
        placement={placement}
        closable={false}
        onClose={closeDrawer}
        visible={visible}
        key={placement}
        className='StoreSettingsDrawer'
      >
        {/* <button className='storeSettingBtn' onClick={closeDrawer}>
          <BsGear color='white' size='30px' />
        </button> */}
        <h3 className='ub my-4'>Store Settings</h3>
        <Collapse onChange={toggleCollapse} expandIconPosition='right'>
          <Panel header={header('Store Details')} key='1' showArrow={false}>
            <StoreDetails />
          </Panel>
          <Panel header={header('Store Timings')} key='2' showArrow={false}>
            <StoreTimings />
          </Panel>
          <Panel header={header('Payment Setup')} key='3' showArrow={false}>
            <PaymentSetup />
          </Panel>
          <Panel
            header={header('Push Notifications')}
            key='4'
            showArrow={false}
          >
            <PushNotifications />
          </Panel>
          <Panel header={header('Order Settings')} key='5' showArrow={false}>
            <OrderSettings />
          </Panel>
          <Panel header={header('Offers')} key='6' showArrow={false}>
            <Offers
              handleOpenAddDiscountModal={handleOpenAddDiscountModal}
              closeDrawer={closeDrawer}
            />
          </Panel>
          <AddDiscountModal
            addDiscountModal={addDiscountModal}
            handleCloseAddDiscountModal={handleCloseAddDiscountModal}
          />
        </Collapse>
        <div className='placeOrderBtnWrappper'>
          <Button
            btnType='outline'
            style={{
              borderRadius: '10px',
              boxShadow: '0px 3px 12px #0000002e',
              padding: '15px 20px ',
              width: '48%',
              textAlign: 'center',
            }}
            title='Place Order'
            onClick={() => props.history.push('/admin/get-started')}
          />
          <Button
            style={{
              borderRadius: '10px',
              boxShadow: '0px 3px 12px #0000002e',
              padding: '15px 20px ',
              width: '48%',
              textAlign: 'center',
            }}
            title='Orders'
            onClick={() => props.history.push('/admin/orders')}
          />
        </div>
        <div className='needHelp'>
          <Link to='' className='ub'>
            Need Help?
          </Link>
        </div>
        <div className='sb downForMaintenance'>
          <h6>Down for maintenance</h6>
          <button
            onClick={() =>
              setDownForMaintenanceToggle(!downForMaintenanceToggle)
            }
          >
            {downForMaintenanceToggle ? (
              <img src={ToggleOnIcon} alt='ToggleOnIcon' />
            ) : (
              <img src={ToggleOffIcon} alt='ToggleOffIcon' />
            )}
          </button>
        </div>
        <div className='sb downForMaintenance'>
          <h6>Available</h6>
          <button onClick={() => setAvailableToggle(!availableToggle)}>
            {availableToggle ? (
              <img src={ToggleOnIcon} alt='ToggleOnIcon' />
            ) : (
              <img src={ToggleOffIcon} alt='ToggleOffIcon' />
            )}
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(StoreSettingsDrawer);
