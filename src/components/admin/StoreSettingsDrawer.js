import React, { useState } from 'react';
import '../../styles/components/admin/StoreSettingsDrawer.css';

import { Link, withRouter } from 'react-router-dom';
import { Drawer, Collapse } from 'antd';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

import StoreDetails from './StoreSettingsDrawerComponents/StoreDetails';
import StoreTimings from './StoreSettingsDrawerComponents/StoreTimings';
import PaymentSetup from './StoreSettingsDrawerComponents/PaymentSetup';
import PushNotifications from './StoreSettingsDrawerComponents/PushNotifications';
import OrderSettings from './StoreSettingsDrawerComponents/OrderSettings';
import Offers from './StoreSettingsDrawerComponents/Offers';
import Button from '../formComponents/Button';
import StoreTheme from './StoreSettingsDrawerComponents/StoreTheme';
import PublishStore from './StoreSettingsDrawerComponents/PublishStore';
import Icon from '../Icon';
import AddDiscountModal from '../modals/AddDiscountModal';
import AddCouponModal from '../modals/AddCouponModal';

const { Panel } = Collapse;

const StoreSettingsDrawer = (props) => {
  const { closeDrawer, visible, placement } = props;

  const [addDiscountModal, setAddDiscountModal] = useState(false);
  const openAddDiscountModal = () => setAddDiscountModal(true);
  const closeAddDiscountModal = () => setAddDiscountModal(false);

  const [addCouponModal, setAddCouponModal] = useState(false);
  const openAddCouponModal = () => setAddCouponModal(true);
  const closeAddCouponModal = () => setAddCouponModal(false);

  const [downForMaintenanceToggle, setDownForMaintenanceToggle] = useState(false);
  const [availableToggle, setAvailableToggle] = useState(true);

  // const toggleCollapse = (key) => {
  //   console.log(key);
  // };

  const header = (accordianHeaderTitle) => {
    return (
      <div className='accordainHeader sb '>
        <span>{accordianHeaderTitle}</span>
        <Icon>
          <IoIosArrowDropdownCircle size='25px' />
        </Icon>
      </div>
    );
  };

  return (
    <>
      <Drawer
        placement={placement}
        closable={false}
        onClose={closeDrawer}
        visible={visible}
        key={placement}
        className='StoreSettingsDrawer'
      >
        <h3 className='ub my-4 black'>Store Settings</h3>
        <Collapse expandIconPosition='right'>
          <Panel header={header('Store Details')} key='1' showArrow={false}>
            <StoreDetails />
          </Panel>
          <Panel header={header('Store Timings')} key='2' showArrow={false}>
            <StoreTimings
              handleOpenAddDiscountModal={openAddDiscountModal}
              closeDrawer={closeDrawer}
            />
          </Panel>
          <Panel header={header('Store Theme')} key='3' showArrow={false}>
            <StoreTheme />
          </Panel>
          <Panel header={header('Payment Setup')} key='4' showArrow={false}>
            <PaymentSetup />
          </Panel>
          <Panel header={header('Push Notifications')} key='5' showArrow={false}>
            <PushNotifications />
          </Panel>
          <Panel header={header('Order Settings')} key='6' showArrow={false}>
            <OrderSettings />
          </Panel>
          <Panel header={header('Offers')} key='7' showArrow={false}>
            <Offers
              handleOpenAddDiscountModal={openAddDiscountModal}
              handleOpenAddCouponModal={openAddCouponModal}
              closeDrawer={closeDrawer}
            />
          </Panel>
          <Panel header={header('Pulish Store')} key='8' showArrow={false}>
            <PublishStore />
          </Panel>
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
            onClick={() => props.history.push('/admin/orders')}
          />
        </div>
        <div className='needHelp'>
          <Link to='' className='ub'>
            Need Help?
          </Link>
        </div>
        <div className='sb downForMaintenance black'>
          <h6>Down for maintenance</h6>
          <button onClick={() => setDownForMaintenanceToggle(!downForMaintenanceToggle)}>
            {downForMaintenanceToggle ? (
              <Icon children={<BsToggleOn size='30px' />} />
            ) : (
              <Icon children={<BsToggleOff size='30px' />} />
            )}
          </button>
        </div>
        <div className='sb downForMaintenance black'>
          <h6>Available</h6>
          <button onClick={() => setAvailableToggle(!availableToggle)}>
            {availableToggle ? (
              <Icon children={<BsToggleOn size='30px' />} />
            ) : (
              <Icon children={<BsToggleOff size='30px' />} />
            )}
          </button>
        </div>
      </Drawer>

      <AddDiscountModal
        width={800}
        modalPosition={100}
        modalTitle='New Discount Offer'
        modalDescription='Fill up the following fields to add new discount offer to your store'
        openAlertModal={addDiscountModal}
        closeAlertModal={closeAddDiscountModal}
      />
      <AddCouponModal
        width={800}
        modalPosition={100}
        modalTitle='New Coupon Offer'
        modalDescription='Fill up the following fields to add new coupon offer to your store'
        openAlertModal={addCouponModal}
        closeAlertModal={closeAddCouponModal}
      />
    </>
  );
};

export default withRouter(StoreSettingsDrawer);
