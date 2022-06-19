import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PopupNavigation from '../PopupNavigation/PopupNavigation';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MaxShortFilmDuration, 
         NumberOfInitialCardsForLargeScreen, 
         NumberOfInitialCardsForMediumScreen, 
         NumberOfInitialCardsForSmallScreen,
         NumberOfAdditionalCardsForLargeScreen,
         NumberOfAdditionalCardsForSmallScreen,
         LargeScreenMinWidth,
         MediumScreenMinWidth } from '../../utils/constants';


function App() {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedMovies, setSelectedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [cardsPerPage, setCardsPerPage] = React.useState(0);
  const [searchInfoBox, setSearchInfoBox] = React.useState('');
  const [registerError, setRegisterError] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name: '', email: '', _id: ''})
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [infoTooltipTitle, setInfoTooltipTitle] = React.useState('');
  const [isUserChecked, setIsUserChecked] = React.useState(false);
  const [isUserDataSending, setIsUserDataSending] = React.useState(false);
  
  const indexOfLastCard = cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = selectedMovies.slice(indexOfFirstCard, indexOfLastCard);
  const history = useHistory();

  
  React.useEffect (() => {
    mainApi.getUserInfo()
      .then ((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        setIsUserChecked(true);
      })
      .catch((err) => {
        setIsUserChecked(true);
        console.log(err);
      });
  }, [loggedIn, history])
 

  React.useEffect(() => {
    if (localStorage.getItem('movies') === null) {
      moviesApi.getMovies()
        .then((moviesData) => {
          const selectedMoviesData = moviesData.map((movie) => {
            return {movieId: movie.id, 
                    country: movie.country === null ? 'No Name' : movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: `https://api.nomoreparties.co${movie.image.url}`,
                    trailer: movie.trailerLink,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN === null ? 'No Name' : movie.nameEN,
                    thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`}
          });
          setMovies(selectedMoviesData);
          localStorage.setItem('movies', JSON.stringify(selectedMoviesData));
        })
        .catch((err) => {
          console.log(err);
          setSearchInfoBox('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        });
    } else {
      setMovies(JSON.parse(localStorage.getItem('movies')))
    }
  }, []);


  React.useEffect(() => {
    if (localStorage.getItem('selectedMovies') !== null) {
      setSelectedMovies(JSON.parse(localStorage.getItem('selectedMovies')));
    }
    setCardsPerPageForRender();
  }, [])

    
  React.useEffect (() => {
    mainApi.getSavedMovies()
      .then ((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [loggedIn])

  
  React.useEffect(() => {
    setTimeout(function() {
      setIsInfoTooltipOpen(false);
    }, 2000)
  }, [isInfoTooltipOpen])

    
  const filterMovies = (movies, keyWords, isShortFilm) => {
    let filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(keyWords.toLowerCase()));
    if (isShortFilm) {
      filteredMovies = filteredMovies.filter(movie => movie.duration <= MaxShortFilmDuration);
    }

    if (filteredMovies.length === 0) {
      setSearchInfoBox('Ничего не найдено');
    } 
    return filteredMovies;
  };


  const handleSearchMovies = (moviesPool, keyWords, isShortFilm) => {
    setIsLoading(true);
        
    const foundMovies = filterMovies(moviesPool, keyWords, isShortFilm);
        
    localStorage.setItem('selectedMovies', JSON.stringify(foundMovies));
    localStorage.setItem('keyWords', JSON.stringify(keyWords));
    localStorage.setItem('isShortFilm', JSON.stringify(isShortFilm));
    setSelectedMovies(foundMovies);
    
    setCardsPerPageForRender();
    setIsLoading(false);
  };


  const handleBurgerMenuClick = () => {
    setIsPopupNavigationOpen(true);
  }
  

  const setCardsPerPageForRender = () => {
    if (document.documentElement.clientWidth >= LargeScreenMinWidth) {
      setCardsPerPage(NumberOfInitialCardsForLargeScreen);
    } else if (document.documentElement.clientWidth >= MediumScreenMinWidth) {
      setCardsPerPage(NumberOfInitialCardsForMediumScreen);
    } else {
      setCardsPerPage(NumberOfInitialCardsForSmallScreen);
    }
  }

  
  const handleLoadMore = () => {
    if (document.documentElement.clientWidth > LargeScreenMinWidth) {
      setCardsPerPage(cardsPerPage + NumberOfAdditionalCardsForLargeScreen);
    } else {
      setCardsPerPage(cardsPerPage + NumberOfAdditionalCardsForSmallScreen);
    }
  }


  const handleSaveMovie = (movie) => {
    if (!savedMovies.some(savedMovie => savedMovie.movieId === movie.movieId)) {
      mainApi.saveMovie(movie)
      .then ((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
        movie._id = savedMovie._id;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }


  const handleDeleteMovie = (movie) => {
    const chosenMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.movieId);
    
    mainApi.deleteMovie(chosenMovie._id)
      .then((deletedMovie) => {
        setSavedMovies((state) => state.filter((c) => c._id !== deletedMovie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  const onRegister = (values) => {
    setIsUserDataSending(true);

    mainApi.register(values)
      .then ((res) => {
        if(res) {
          onLogin(values);
        }
      })
      .catch (() => {
        setRegisterError(true);
      })
    
    setIsUserDataSending(false);
  }


  const onLogin = (values) => {
    setIsUserDataSending(true);

    mainApi.authorize(values)
    .then ((data) => {
      if (data.token) {
        setLoggedIn(true);
        history.push('/movies');
      }
    })
    .catch(() => {
      setLoginError(true);
    });

    setIsUserDataSending(false);
  }


  const onSignOut = () => {
    mainApi.unauthorize()
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          localStorage.clear();
          setSelectedMovies([]);
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleSuccessTooltip = () => {
    setIsInfoTooltipOpen(true);
    setInfoTooltipTitle('Данные успешно обновлены');
  }


  const handleTooltipError = () => {
    setIsInfoTooltipOpen(true);
    setInfoTooltipTitle('Ошибка обновления данных');
  }


  const handleUpdateUser = (data) => {
    return mainApi.editProfileInfo(data)
      .then((res) => {
        setCurrentUser(res);
        handleSuccessTooltip();
      })
      .catch((err) => {
        handleTooltipError();
      });
  }


  const closePopupNavigation = () => {
    setIsPopupNavigationOpen(false);
  }


  window.addEventListener('resize', function() {
    setTimeout(setCardsPerPageForRender, 5000);
  }, true);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedMoviesContext.Provider value={savedMovies}>
        <div className='app'>
          <div className='app__content'>
            <Header onBurgerClick={handleBurgerMenuClick} isLoggedIn={loggedIn} />
            <Switch>
              <Route exact path='/'>
                <Main />
              </Route>
              <ProtectedRoute path='/movies' loggedIn={loggedIn} component={Movies} onSearchMovies={handleSearchMovies} 
                onLoadMore={handleLoadMore} onSaveMovie={handleSaveMovie} onDeleteMovie={handleDeleteMovie} 
                selectedMovies={selectedMovies} currentCards={currentCards} isLoading={isLoading} searchInfoBox={searchInfoBox}
                movies={movies} isUserChecked={isUserChecked} />
              <ProtectedRoute path='/saved-movies' loggedIn={loggedIn} component={SavedMovies} onDeleteMovie={handleDeleteMovie}
                filterMovies={filterMovies} searchInfoBox={searchInfoBox} isUserChecked={isUserChecked} />
              <ProtectedRoute path='/profile' loggedIn={loggedIn} component={Profile} onUpdateUser={handleUpdateUser} 
                infoTooltip={<InfoTooltip isOpen={isInfoTooltipOpen} title={infoTooltipTitle} />} onSignOut={onSignOut}
                isUserChecked={isUserChecked} />
              <Route path='/signup'>
                <Register onRegister={onRegister} registerError={registerError} isDataSending={isUserDataSending} />
              </Route>
              <Route path='/signin'>
                <Login onLogin={onLogin} loginError={loginError} isDataSending={isUserDataSending} />
              </Route>
              <Route path='*'>
                <PageNotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
          <PopupNavigation isOpen={isPopupNavigationOpen} onClose={closePopupNavigation} />
        </div>
      </SavedMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
