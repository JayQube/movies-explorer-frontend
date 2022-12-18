import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form' name='search'>
        <fieldset className='search-form__input-container'>
          <input
            type='search'
            id='search'
            name='search'
            placeholder='Фильм'
            className='search-form__input'
            required
          />
          <button
            type='submit'
            className='search-form__confirm-btn' />
        </fieldset>
        <fieldset className='search-form__checkbox'>
          <FilterCheckbox />
          <p className='search-form__checkbox-text'>Короткометражки</p>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
