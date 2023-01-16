import React from 'react';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMoviesList, searchMovies, onDeleteMovie }) {
  const [inputValue, setInputValue] = React.useState('');
  const [inputError, setInputError] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false);
  const [isSearched, setIsSearched] = React.useState(false);

  function filteringShortMovies(list) {
    return list.filter((item) => item.duration < 40)
  }

  function handleCheckboxChange() {
    if (isChecked === false) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSearched(false);
    if (inputValue === '' || inputValue === null) {
      setInputError(true);
    } else {
      setIsSearched(true);
      setInputError(false);
      searchMovies(inputValue)
    }
  }

  return (
    <main className='saved-movies'>
      <SearchForm
        inputValue={inputValue}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onCheckboxChange={handleCheckboxChange}
        isCheckboxChecked={isChecked}
        inputError={inputError}
      />
      <MoviesCardList
        movies={isChecked ? filteringShortMovies(savedMoviesList) : savedMoviesList}
        onDeleteMovie={onDeleteMovie}
        savedMoviesPage={true}
        isSearched={isSearched}
      />
    </main>
  );
}

export default SavedMovies;
