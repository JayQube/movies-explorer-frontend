import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';


function BurgerMenu({ history, isMenuOpen, onClose }) {
  return (
    <div className={`menu ${isMenuOpen ? 'menu_opened' : ''}`}>
      <div className='navigation navigation_burger'>
        <nav className='navigation__links navigation__links_burger'>
          <NavLink exact to='/' className='navigation__link' activeClassName='navigation__link_active'>
            Главная
          </NavLink>

          <NavLink to='/movies' className='navigation__link' activeClassName='navigation__link_active'>
            Фильмы
          </NavLink>

          <NavLink to='/saved-movies' className='navigation__link' activeClassName='navigation__link_active'>
            Сохраненные фильмы
          </NavLink>
        </nav>
        <button className='navigation__profile-btn' onClick={() => history.push('/profile')}>Аккаунт</button>
        <button
          className={`menu__close-btn ${isMenuOpen ? 'menu__close-btn' : ''}`}
          onClick={onClose}>
        </button>
      </div>
    </div>
  );
}

export default BurgerMenu;