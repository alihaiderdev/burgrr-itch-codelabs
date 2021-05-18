import React, {useState} from 'react';
import {DatePicker, Space} from 'antd';
import moment from 'moment';

import '../../../styles/components/admin/StoreSettingsDrawerComponents/orderSettings.css';
import ToggleOnIcon from '../../../assets/admin-icons-images/Icons/Toggle-On.svg';
import ToggleOffIcon from '../../../assets/admin-icons-images/Icons/Toggle-Off.svg';

const {RangePicker} = DatePicker;

const OrderSettings = () => {
  const [dontAcceptOrderToggle, setDontAcceptOrderToggle] = useState(true);
  const dateFormat = 'YYYY/MM/DD';
  var currentTime = new Date();
  let currentTimeHourMin = `${currentTime.getHours} : ${currentTime.getMinutes}`;

  const customFormat = (value) => `${value.format('LT')}`;

  return (
    <div className='orderSettings'>
      <div className='sb'>
        <span className='gray'>Don’t Accept Orders</span>
        <button
          onClick={() => setDontAcceptOrderToggle(!dontAcceptOrderToggle)}
        >
          {dontAcceptOrderToggle ? (
            <img
              className='toggleImage'
              src={ToggleOnIcon}
              alt='ToggleOnIcon'
            />
          ) : (
            <img
              className='toggleImage'
              src={ToggleOffIcon}
              alt='ToggleOffIcon'
            />
          )}
        </button>
      </div>
      <div className='sb'>
        <span className='gray'>Up Till</span>
        <DatePicker
          defaultValue={moment('2015/01/01', dateFormat)}
          format={customFormat}
        />
      </div>
    </div>
  );
};

export default OrderSettings;
