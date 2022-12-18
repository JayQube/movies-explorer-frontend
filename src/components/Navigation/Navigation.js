import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ loggedIn, onBurgerClick, history }) {
  return (
    <div className='navigation'>
      {loggedIn
        ?
        <>
          <nav className='navigation__links navigation__links_films'>
            <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active'>
              Фильмы
            </NavLink>

            <NavLink to='/saved-movies' className='navigation__link' activeClassName='navigation__link_active'>
              Сохраненные фильмы
            </NavLink>

            <button className='navigation__profile-btn' onClick={() => history.push('/profile')}>Аккаунт</button>
          </nav>
          <button className='navigation__burger-icon' onClick={onBurgerClick}></button>
        </>
        :
        <nav className='navigation__links navigation__links_auth'>
          <Link to="/signup" className='navigation__link'>Регистрация</Link>
          <Link to="/signin" className='navigation__link navigation__link_login'>Войти</Link>
        </nav>
      }
    </div >
  );
}

export default Navigation;
