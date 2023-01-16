import './PageNotFound.css';

function PageNotFound({ history }) {
  return (
    <main className='page-not-found'>
      <h1 className='page-not-found__code'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button
        className='page-not-found__btn'
        onClick={(e) => {
          e.preventDefault()
          history.go(-3)
        }}
      >
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;