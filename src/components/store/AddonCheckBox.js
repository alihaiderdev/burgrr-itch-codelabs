import React from 'react';
import { Form } from 'react-bootstrap';
import { Checkbox } from 'antd';

const AddonCheckBox = ({
  id,
  value,
  isChecked,
  addOnsCheckBoxes,
  selectedAddOns,
  setSelectedAddOns,
  qty,
  price,
  handleCheckedCheckbox,
  qtyIncHandler,
  qtyDecHandler,
}) => {
  const onChange = (value, id) => {
    console.log(`checked = ${value} ${id}`);
    setSelectedAddOns([...selectedAddOns, selectedAddOns.push(value)]);
    console.log(`Selected Checkbox : ${selectedAddOns}`);
  };

  return (
    <div className='addons-container' key={id}>
      <Checkbox onChange={() => onChange(value, id)} value={value}>
        {value}
      </Checkbox>

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
