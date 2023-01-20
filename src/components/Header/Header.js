import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({ location, history, onBurgerClick }) {
  return (
    <header className={`header ${location !== '/' && 'header_grey'}`}>
      <Logo />
      <Navigation
        onBurgerClick={onBurgerClick}
        history={history}
      />
    </header>
  );
}

export default Header;
