import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, savedMoviesList, onAddMovie, onDeleteMovie, savedMoviesPage }) {
  const [isAdded, setIsAdded] = React.useState(null);

  React.useEffect(() => {
    if (savedMoviesList) {
      const savedMovie = savedMoviesList.some((i) => Number(i.movieId) === movie.id)
      setIsAdded(savedMovie)
    }
  }, [savedMoviesList, movie])

  function parsingDuration(res) {
    let hour = Math.floor(res / 60);
    let min = Math.floor(res % 60);
    if (min < 10) {
      min = '0' + min;
    }
    return `${hour}ч ${min}м`;
  }

  function handleAddMovie(e) {
    e.preventDefault();
    onAddMovie(movie);
  }

  function findAndDeleteMovie(e) {
    e.preventDefault();
    const foundMovie = savedMoviesList.find((i) => Number(i.movieId) === movie.id)
    onDeleteMovie(foundMovie);
  }

  function handleDeleteMovie(e) {
    e.preventDefault();
    onDeleteMovie(movie);
  }

  return (
    <li className='movie'>
      <div className='movie__info'>
        <h2 className='movie__title' title={movie.nameRU}>{movie.nameRU}</h2>
        <p className='movie__duration'>{parsingDuration(movie.duration)}</p>
        {savedMoviesPage
          ?
          <button
            onClick={handleDeleteMovie}
            className='movie__btn movie__btn_type_delete'
            title='Удалить из коллекции'>
          </button>
          :
          <button
            onClick={!isAdded ? handleAddMovie : findAndDeleteMovie}
            title='Добавить в коллекцию'
            className={`
            movie__btn 
            movie__btn_type_save 
            ${isAdded
              &&
              'movie__btn_type_save-active'
              }
            `}
          >
          </button>
        }
      </div>
      <a href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'>
        <img
          className='movie__image'
          src={!savedMoviesPage
            ?
            'https://api.nomoreparties.co' + movie.image.url
            :
            movie.image
          }
          alt='Постер'
        />
      </a>
    </li>
  );
}

export default MoviesCard;
