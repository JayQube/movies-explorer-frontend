import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesButtonMore from '../MoviesButtonMore/MoviesButtonMore';
import Preloader from '../Preloader/Preloader';

function Movies({
  moviesList,
  savedMoviesList,
  onAddMovie,
  onDeleteMovie,
  searchMovies,
  activatePreloder,
  isSearchError,
}) {
  const [inputValue, setInputValue] = React.useState(' ');
  const [inputError, setInputError] = React.useState(false)
  const [isChecked, setIsChecked] = React.useState(false);
  const [isSearched, setIsSearched] = React.useState(false);
  const [amountCards, setAmountCards] = React.useState();
  const [moreCardsRow, setMoreCardsRow] = React.useState();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function handleMoreItems() {
    setAmountCards(amountCards + moreCardsRow);
  };

  function setWindowDimensions() {
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => setWindowWidth(window.innerWidth), 1000)
  }

  function setCardsRenderConfig(uploaded, initial, more) {
    setAmountCards(uploaded ? uploaded : initial)
    setMoreCardsRow(more)
  }

  React.useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  React.useEffect(() => {
    if (windowWidth > 900) {
      setCardsRenderConfig(amountCards, 12, 3)
    } else if (windowWidth > 480) {
      setCardsRenderConfig(amountCards, 8, 2)
    } else {
      setCardsRenderConfig(amountCards, 5, 2)
    }
  }, [windowWidth, amountCards])

  function filteringShortMovies(list) {
    return list.filter((item) => item.duration < 40)
  }

  function handleCheckboxChange() {
    if (isChecked === false) {
      setIsChecked(true)
      localStorage.setItem('isChecked', true);

    } else {
      setIsChecked(false)
      localStorage.removeItem('isChecked');
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  React.useEffect(() => {
    const checkBox = localStorage.getItem('isChecked');
    setIsChecked(Boolean(checkBox));
    const searchInput = localStorage.getItem('inputValue');
    setInputValue(searchInput)
  }, [isChecked])

  function handleSubmit(e) {
    e.preventDefault();
    setIsSearched(false);
    if (inputValue === '' || inputValue === null) {
      setInputError(true);
    } else {
      setIsSearched(true);
      setInputError(false);
      searchMovies(inputValue)
      localStorage.setItem('inputValue', inputValue);
    }
  }

  return (
    <main className='movies'>
      <SearchForm
        inputValue={inputValue}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onCheckboxChange={handleCheckboxChange}
        isCheckboxChecked={isChecked}
        inputError={inputError}
      />

      {!isSearchError
        ?
        <MoviesCardList
          movies={isChecked ? filteringShortMovies(moviesList) : moviesList}
          savedMoviesList={savedMoviesList}
          onAddMovie={onAddMovie}
          onDeleteMovie={onDeleteMovie}
          amountCards={amountCards}
          isSearched={isSearched}
        />
        :
        <p className='movies__notification movies__notification_error'>
          Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз
        </p>
      }

      {!isChecked
        ?
        (amountCards < moviesList.length
          &&
          <MoviesButtonMore
            onClick={handleMoreItems}
          />
        )
        :
        (amountCards < filteringShortMovies(moviesList).length
          &&
          <MoviesButtonMore
            onClick={handleMoreItems}
          />
        )
      }
      {activatePreloder && <Preloader />}
    </main>
  );
}

export default Movies;
