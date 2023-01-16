import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMoviesList } from '../../utils/savedMoviesList';

function SavedMovies({ isMovieFound }) {
  return (
    <main className='saved-movies'>
      <SearchForm />
      {isMovieFound ?
        <MoviesCardList
          movies={savedMoviesList}
          savedMoviesPage={true}
        />
        :
        <p className='saved-movies__error'>Нет ни одного фильма</p>
      }
    </main>
  );
}

export default SavedMovies;
