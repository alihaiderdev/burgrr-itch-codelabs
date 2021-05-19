import React from 'react';
import {Form} from 'react-bootstrap';
import {Checkbox} from 'antd';

const AddonCheckBox = ({
  id,
  value,
  isChecked,
  addOnsCheckBoxes,
  qty,
  price,
  handleCheckedCheckbox,
  qtyIncHandler,
  qtyDecHandler,
}) => {
  return (
    <div className='addons-container' key={id}>
      {/* <Form.Check
        className='mb-2'
        type={'checkbox'}
        onClick={() => handleCheckedCheckbox()}
        id={`${value} ${id}`}
        label={value}
        checked={isChecked}
        value={value}
      /> */}
      <Checkbox.Group
        options={addOnsCheckBoxes}
        // name={value}
        defaultValue={['Malai Roll']}
        onChange={() => handleCheckedCheckbox()}
        value={value}
      />

      <div>
        <span className='ur'>
          PKR <span className='price'>{price}</span>
        </span>
        <button
          onClick={() => qtyDecHandler(id)}
          className='modal-counter-btn ml-2'
          disabled={qty === 0}
        >
          -
        </button>
        <span className='mx-2'>{qty}</span>
        <button onClick={() => qtyIncHandler(id)} className='modal-counter-btn'>
          +
        </button>
      </div>
    </div>
  );
};

export default AddonCheckBox;
