import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

function PageNotFound(props) {
  const history = useHistory();

  return (
    <main className='page-not-found'>
      <h1 className='page-not-found__code'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <button
        className='page-not-found__btn'
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </main>
  );
}

export default PageNotFound;