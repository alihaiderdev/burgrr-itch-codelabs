import React from 'react';
import { Form } from 'react-bootstrap';

const AddonCheckBox = ({
  id,
  value,
  isChecked,
  count,
  price,
  handleCheckedCheckbox,
  addOnCountDec,
  addOnCountInc,
}) => {
  //   const addOnCountDec = (count) => {
  //     return count - 1;
  //   };
  //   const addOnCountInc = (count) => {
  //     return count + 1;
  //   };
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
          onClick={() => addOnCountDec()}
          className='modal-counter-btn ml-2'
          disabled={count === 0}
        >
          -
        </button>
        <span className='mx-2'>{count}</span>
        <button onClick={() => addOnCountInc()} className='modal-counter-btn'>
          +
        </button>
      </div>
    </div>
  );
};

export default AddonCheckBox;
