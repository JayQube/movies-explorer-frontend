import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMoviesList, onAddMovie, onDeleteMovie, amountCards, savedMoviesPage, isSearched }) {

  return (
    <section className='movies-items'>
      {movies.length !== 0
        ?
        <ul className='movies-list'>
          {movies.slice(0, amountCards).map((movie) => (
            <MoviesCard
              key={!savedMoviesPage ? movie.id : movie._id}
              movie={movie}
              savedMoviesList={savedMoviesList}
              onAddMovie={onAddMovie}
              onDeleteMovie={onDeleteMovie}
              savedMoviesPage={savedMoviesPage}
            />
          ))}
        </ul>
        :
        <p className='saved-movies__notification'>
          {isSearched ? 'Не найдено ни одного фильма' : ''}
        </p>
      }


    </section>
  );
}

export default MoviesCardList;
