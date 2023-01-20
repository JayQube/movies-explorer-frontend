import './App.css';
import React from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from "../../utils/auth"

function App() {
  const location = useLocation().pathname;
  const history = useHistory();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [gottenMovieList, setGottenMovieList] = React.useState([]);
  const [moviesList, setMoviesList] = React.useState([]);
  const [activatePreloder, setActivatePreloder] = React.useState(false);
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [formNotification, setFormNotification] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState('');
  const [successMessageStatus, setSuccessMessageStatus] = React.useState(false);
  const [renderLoading, setRenderLoading] = React.useState(false);
  const [jwt, setJwt] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  function filteringMovies(res, inputValue) {
    return res.filter((item) => {
      return item.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        ||
        item.nameEN.toLowerCase().includes(inputValue.toLowerCase())
    });
  }

  function searchMovies(inputValue) {
    setIsSearchError(false)
    setActivatePreloder(true);
    if (gottenMovieList.length === 0) {
      moviesApi.getInfo()
        .then((res) => {
          localStorage.setItem('gottenMovieList', JSON.stringify(res));
          setGottenMovieList(res)
          const filteredMovies = filteringMovies(res, inputValue);
          if (filteredMovies.length !== 0) {
            localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
            setMoviesList(filteredMovies)
          } else {
            localStorage.removeItem('filteredMovies');
            setMoviesList([])
          }
        })
        .catch((err) => {
          setIsSearchError(true)
          console.log(err);
        })
        .finally(() => {
          setActivatePreloder(false);
        })
    }
    else {
      const filteredMovies = filteringMovies(gottenMovieList, inputValue);
      if (filteredMovies.length !== 0) {
        localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
        setMoviesList(filteredMovies)
      } else {
        localStorage.removeItem('filteredMovies');
        setMoviesList([])
      }
      setActivatePreloder(false);
    }
  }

  function handleBurgerBtnClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function searchInSavedMovies(inputValue) {
    const filteredMovies = filteringMovies(savedMoviesList, inputValue);
    if (filteredMovies.length !== 0) {
      setSavedMoviesList(filteredMovies)
    } else {
      setSavedMoviesList([])
    }
  }

  function handleAddMovie(movie) {
    mainApi.addMovie(movie, jwt)
      .then((newMovie) => {
        setSavedMoviesList([newMovie, ...savedMoviesList])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id, jwt)
      .then(() => {
        setSavedMoviesList((state) => state.filter((item) => item._id !== movie._id));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function setNotificationTimeout(setState) {
    setState(true)
    let timeout = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => setState(false), 5000)
  }

  function handleLogOut() {
    localStorage.clear();
    setMoviesList([])
    setSavedMoviesList([]);
    setJwt('');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  }

  function handleUpdateUser(inputValues) {
    setFormMessage('')
    setRenderLoading(true);
    mainApi
      .updateUserInfo(inputValues, jwt)
      .then((data) => {
        setCurrentUser(data);
        setNotificationTimeout(setSuccessMessageStatus);
        setFormMessage('Данные успешно обновлены');
      })
      .catch((err) => {
        setNotificationTimeout(setFormNotification)
        if (err.includes(409)) {
          setFormMessage('Пользователь с таким email уже существует.')
        } else if (err.includes(400)) {
          setFormMessage('При регистрации пользователя произошла ошибка.')
        }
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false);
      })
  }

  function handleAuthorization(data) {
    setRenderLoading(true)
    auth.authorization(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setJwt(res.token);
          auth.checkToken(res.token)
            .then((userData) => {
              setLoggedIn(true);
              setCurrentUser(userData);
              history.push('/movies')
              setFormMessage('');
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      .catch((err) => {
        setNotificationTimeout(setFormNotification)
        if (err.includes(401)) {
          setFormMessage('Вы ввели неправильный логин или пароль. ')
        }
        console.log(err)
      })
      .finally(() => {
        setRenderLoading(false)
      })
  }

  function handleRegistration(data) {
    setFormMessage('')
    setRenderLoading(true)
    auth.register(data)
      .then(() => {
        handleAuthorization(data)
      })
      .catch((err) => {
        setNotificationTimeout(setFormNotification)
        if (err.includes(409)) {
          setFormMessage('Пользователь с таким email уже существует.')
        } else if (err.includes(400)) {
          setFormMessage('При регистрации пользователя произошла ошибка.')
        }
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false)
      })
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setJwt(jwt)
      auth.checkToken(jwt)
        .then((userData) => {
          if (userData) {
            setLoggedIn(true);
            history.push(location);
            setCurrentUser(userData);
            setFormMessage('');
          }
        })
        .catch((err) => {
          setNotificationTimeout(setFormNotification)
          if (err.includes(401)) {
            setFormMessage('При авторизации произошла ошибка. Переданный токен некорректен.')
          }
          console.log(err)
        })
    } else {
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies(jwt)
        .then((savedMovies) => {
          const filteredSavedMovies = () => {
            return savedMovies.filter((item) => {
              return item.owner.includes(currentUser._id)
            });
          }
          setSavedMoviesList(filteredSavedMovies());
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [loggedIn, currentUser._id, jwt])

  React.useEffect(() => {
    const filteredMovies = localStorage.getItem('filteredMovies');
    if (filteredMovies) {
      const filtered = JSON.parse(filteredMovies)
      setMoviesList(filtered);
    }
  }, [])

  React.useEffect(() => {
    closeMenu();
  }, [location])

  return (
    <LoggedInContext.Provider value={loggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className='App'>
          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            <Header
              location={location}
              history={history}
              onBurgerClick={handleBurgerBtnClick}
            />
          </Route>

          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <ProtectedRoute exact
              path='/movies'
              component={Movies}
              moviesList={moviesList}
              savedMoviesList={savedMoviesList}
              onAddMovie={handleAddMovie}
              onDeleteMovie={handleDeleteMovie}
              searchMovies={searchMovies}
              isSearchError={isSearchError}
              activatePreloder={activatePreloder}
            />
            <ProtectedRoute exact
              path='/saved-movies'
              component={SavedMovies}
              savedMoviesList={savedMoviesList}
              searchMovies={searchInSavedMovies}
              onDeleteMovie={handleDeleteMovie}
            />
            <ProtectedRoute exact
              path='/profile'
              component={Profile}
              onSubmit={handleUpdateUser}
              renderLoading={renderLoading}
              successMessageStatus={successMessageStatus}
              formNotification={formNotification}
              formMessage={formMessage}
              logout={handleLogOut}
            />
            <Route exact path='/signin'>
              <Login
                onAuthorization={handleAuthorization}
                renderLoading={renderLoading}
                formNotification={formNotification}
                formMessage={formMessage}
              />
            </Route>
            <Route exact path='/signup'>
              <Register
                onRegistration={handleRegistration}
                renderLoading={renderLoading}
                formNotification={formNotification}
                formMessage={formMessage}
              />
            </Route>
            <Route path='/*'>
              <PageNotFound 
                history={history}
              />
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
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
