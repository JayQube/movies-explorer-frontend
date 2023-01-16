import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ inputValue, onSubmit, onInputChange, onCheckboxChange, isCheckboxChecked, inputError }) {
  return (
    <section className='search-form'>
      <form
        className='search-form__form'
        name='search'
        onSubmit={onSubmit}
      >
        <fieldset className='search-form__input-container'>
          <input
            type='search'
            id='search'
            name='search'
            placeholder='Фильм'
            className='search-form__input'
            minLength='1'
            value={inputValue || ''}
            onChange={onInputChange}
          />
          <button
            type='submit'
            className='search-form__confirm-btn'
          />
        </fieldset>
        <span className='search-form__error'>{inputError && 'Нужно ввести ключевое слово'}</span>
        <fieldset className='search-form__checkbox'>
          <FilterCheckbox
            onCheckboxChange={onCheckboxChange}
            isCheckboxChecked={isCheckboxChecked}
          />
          <p className='search-form__checkbox-text'>Короткометражки</p>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
