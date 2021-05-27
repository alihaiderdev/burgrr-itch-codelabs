import React, { useState } from 'react';
import '../../styles/components/admin/StoreSettingsDrawer.css';

import { Link, withRouter } from 'react-router-dom';
import { Drawer, Collapse } from 'antd';
import { BsGear } from 'react-icons/bs';
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

// import ToggleOnIcon from '../../assets/admin-icons-images/Icons/Toggle-On.svg';
// import ToggleOffIcon from '../../assets/admin-icons-images/Icons/Toggle-Off.svg';
// import AccordianOpenIcon from '../../assets/admin-icons-images/Icons/accordion-open.svg';
// import AccordianCloseIcon from '../../assets/admin-icons-images/Icons/accordion-closed.svg';
import AddDiscountModal from '../../components/admin/AddDiscountModal';
import StoreDetails from './StoreSettingsDrawerComponents/StoreDetails';
import StoreTimings from './StoreSettingsDrawerComponents/StoreTimings';
import PaymentSetup from './StoreSettingsDrawerComponents/PaymentSetup';
import PushNotifications from './StoreSettingsDrawerComponents/PushNotifications';
import OrderSettings from './StoreSettingsDrawerComponents/OrderSettings';
import Offers from './StoreSettingsDrawerComponents/Offers';
// import Button from '../../components/formComponents/Button';
import Button from '../formComponents/Button';
import StoreTheme from './StoreSettingsDrawerComponents/StoreTheme';
import PublishStore from './StoreSettingsDrawerComponents/PublishStore';
import Icon from '../Icon';

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

  // const toggleCollapse = (key) => {
  //   console.log(key);
  // };

  const header = (accordianHeaderTitle) => {
    return (
      <div className='accordainHeader sb '>
        <span>{accordianHeaderTitle}</span>
        {/* <Icon children={<IoIosArrowDropdownCircle size='25px' />} /> */}

        <button onClick={() => setIsCollapseOpen(!isCollapseOpen)}>
          {isCollapseOpen ? (
            <Icon children={<IoIosArrowDropupCircle size='25px' />} />
          ) : (
            <Icon children={<IoIosArrowDropdownCircle size='25px' />} />
          )}
        </button>
        {/* {isCollapseOpen ? (
          <Icon children={<IoIosArrowDropupCircle size='25px' />} />
        ) : (
          <Icon children={<IoIosArrowDropdownCircle size='25px' />} />
        )} */}
      </div>
    );
  };

  return (
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
      <Collapse
        //  onChange={toggleCollapse}
        expandIconPosition='right'
      >
        <Panel header={header('Store Details')} key='1' showArrow={false}>
          <StoreDetails />
        </Panel>
        <Panel header={header('Store Timings')} key='2' showArrow={false}>
          <StoreTimings
            handleOpenAddDiscountModal={handleOpenAddDiscountModal}
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
            handleOpenAddDiscountModal={handleOpenAddDiscountModal}
            closeDrawer={closeDrawer}
          />
        </Panel>
        <Panel header={header('Pulish Store')} key='8' showArrow={false}>
          <PublishStore />
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
          onClick={() => props.history.push('/admin/orders')}
        />
        {/* <Button
            style={{
              borderRadius: '10px',
              boxShadow: '0px 3px 12px #0000002e',
              padding: '15px 20px ',
              width: '48%',
              textAlign: 'center',
            }}
            title='Orders'
            onClick={() => props.history.push('/admin/orders')}
          /> */}
      </div>
      <div className='needHelp'>
        <Link to='' className='ub'>
          Need Help?
        </Link>
      </div>
      <div className='sb downForMaintenance'>
        <h6>Down for maintenance</h6>
        <button
          onClick={() => setDownForMaintenanceToggle(!downForMaintenanceToggle)}
        >
          {downForMaintenanceToggle ? (
            <Icon children={<BsToggleOn size='30px' />} />
          ) : (
            <Icon children={<BsToggleOff size='30px' />} />
          )}
        </button>
      </div>
      <div className='sb downForMaintenance'>
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
  );
};

export default withRouter(StoreSettingsDrawer);
