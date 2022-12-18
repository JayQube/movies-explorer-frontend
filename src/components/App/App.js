import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import PageNotFound from '../PageNotFound/PageNotFound';

import { Route, Switch, useLocation, useHistory } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation().pathname;
  const history = useHistory();

  const loggedIn = false;
  const isMovieFound = false;
  const activatePreloder = false;

  function handleBurgerBtnClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  React.useEffect(() => {
    closeMenu();
  }, [location])

  return (
    <div className='App'>
      <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
        <Header
          location={location}
          loggedIn={loggedIn}
          history={history}
          onBurgerClick={handleBurgerBtnClick}
        />
      </Route>

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/movies'>
          <Movies
            isMovieFound={isMovieFound}
            activatePreloder={activatePreloder}
          />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies
            isMovieFound={isMovieFound}
          />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
      <BurgerMenu
        history={history}
        isMenuOpen={isMenuOpen}
        onClose={closeMenu}
      />
      <Route exact path={['/', '/movies', '/saved-movies']}>
        <Footer />
      </Route>
    </div>

  );
}

export default App;
