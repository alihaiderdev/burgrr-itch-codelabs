import React from 'react';
import { Form } from 'react-bootstrap';

const AddonCheckBox = ({
  id,
  value,
  isChecked,
  count,
  price,
  handleCheckedCheckbox,
  qtyIncHandler,
  qtyDecHandler,
}) => {
  return (
    <div className='addons-container' key={id}>
      <Form.Check
        className='mb-2'
        type={'checkbox'}
        onClick={handleCheckedCheckbox}
        id={`${value} ${id}`}
        label={value}
        checked={isChecked}
        value={value}
      />
      <div>
        <span className='ur'>
          PKR <span className='price'>{price}</span>
        </span>
        <button
          onClick={() => qtyDecHandler(id)}
          className='modal-counter-btn ml-2'
          disabled={count === 0}
        >
          -
        </button>
        <span className='mx-2'>{count}</span>
        <button onClick={() => qtyIncHandler(id)} className='modal-counter-btn'>
          +
        </button>
      </div>
    </div>
  );
};

export default AddonCheckBox;
