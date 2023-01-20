import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onCheckboxChange, isCheckboxChecked }) {
  return (
    <label className='checkbox' htmlFor='checkbox'>
      <input
        onChange={onCheckboxChange}
        checked={isCheckboxChecked}
        className='checkbox__input'
        type='checkbox'
        id='checkbox' />
      <span className='checkbox__pseudo-item'></span>
    </label>
  );
}

export default FilterCheckbox;