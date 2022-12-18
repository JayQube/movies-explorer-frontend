import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='checkbox' htmlFor='checkbox'>
      <input className='checkbox__input' type='checkbox' id='checkbox' />
      <span className='checkbox__pseudo-item'></span>
    </label>
  );
}

export default FilterCheckbox;