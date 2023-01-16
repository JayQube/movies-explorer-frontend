import './MoviesButtonMore.css';

function MoviesButtonMore({ onClick }) {
  return (
    <section className='movies-more'>
      <button
        className='movies-more__btn'
        onClick={onClick}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesButtonMore;
