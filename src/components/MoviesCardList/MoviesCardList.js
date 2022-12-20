import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMoviesPage }) {
  return (
    <section className='movies-items'>
      <ul className='movies-list'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
            savedMoviesPage={savedMoviesPage}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
