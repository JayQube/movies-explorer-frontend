import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesButtonMore from '../MoviesButtonMore/MoviesButtonMore';
import Preloader from '../Preloader/Preloader';
import { initialMovies } from '../../utils/initialMovies';

function Movies({ isMovieFound, activatePreloder }) {
  return (
    <main className='movies'>
      <SearchForm />
      {isMovieFound ?
        <>
          <MoviesCardList
            movies={initialMovies}
          />
          <MoviesButtonMore />
        </>
        :
        <p className='movies__error'>Ничего не найдено</p>
      }
      {activatePreloder && <Preloader />}
    </main>
  );
}

export default Movies;
