import './MoviesCard.css';

function MoviesCard({ movie, savedMoviesPage }) {
  return (
    <li className='movie'>
      <div className='movie__info'>
        <h2 className='movie__title'>{movie.nameRU}</h2>
        <p className='movie__duration'>{movie.duration}</p>
        {savedMoviesPage
          ?
          <button className='movie__btn movie__btn_type_delete'></button>
          :
          <button
            className={`
            movie__btn 
            movie__btn_type_save 
            ${movie.saved
              &&
              'movie__btn_type_save-active'
              }
            `}
          >
          </button>
        }
      </div>
      <img className='movie__image' src={movie.url} alt='Постер'></img>
    </li>
  );
}

export default MoviesCard;
