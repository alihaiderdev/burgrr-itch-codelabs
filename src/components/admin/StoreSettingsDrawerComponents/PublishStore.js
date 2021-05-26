import React, { useState } from 'react';
import '../../../styles/components/admin/StoreSettingsDrawerComponents/publishStore.css';

import { Form } from 'react-bootstrap';
import { Input, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import Button from '../../formComponents/Button';

const { Option } = Select;

const PublishStore = () => {
  const [publishStoreUrl, setPublishStoreUrl] = useState('');

  const onChangeHandler = (e) => {
    setPublishStoreUrl(e.target.value);
  };
  const publishStoreSubmitHandler = (e) => {
    e.preventDefault();
    console.log(`https://www.${publishStoreUrl}.ordernow.com`);
  };
  return (
    <div className='publishStore'>
      <Form onSubmit={publishStoreSubmitHandler}>
        <Input
          className='my-3'
          addonBefore='https://'
          addonAfter='.ordernow.com'
          value={publishStoreUrl}
          onChange={onChangeHandler}
        />
        <p>URL</p>
        {/* <a
          href={`https://www.${publishStoreUrl}.ordernow.com`}
          className='black'
        >{`https://www.${publishStoreUrl}.ordernow.com`}</a> */}
        <a>burgeritch.ordernow.com</a>

        <div className='sb mt-2'>
          <Button
            title='Cancle'
            btnType='outline'
            type='button'
            className='mb-4'
            style={{
              borderRadius: '5px',
              padding: '8px 50px',
              margin: '10px 0',
            }}
          />
          <Button
            title='Save Changes'
            type='submit'
            className='mb-4'
            style={{
              borderRadius: '5px',
              padding: '10px 50px',
              margin: '10px 0',
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default PublishStore;
