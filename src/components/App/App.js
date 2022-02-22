import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedMovies, setSelectedMovies] = React.useState([]);
  const [currentPage] = React.useState(1);
  const [cardsPerPage, setCardsPerPage] = React.useState(0);
  const [searchInfoBox, setSearchInfoBox] = React.useState('');
  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = selectedMovies.slice(indexOfFirstCard, indexOfLastCard);

  

  React.useEffect(() => {
    if (localStorage.getItem('movies') === null) {
      moviesApi.getMovies()
        .then((moviesData) => {
          console.log(moviesData);
          setMovies(moviesData);
          localStorage.setItem('movies', JSON.stringify(moviesData));
        })
        .catch((err) => {
          console.log(err);
          setSearchInfoBox('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        });
    } 
    
    setMovies(JSON.parse(localStorage.getItem('movies')))
  }, []);

  React.useEffect(() => {
    setSelectedMovies(JSON.parse(localStorage.getItem('selectedMovies')))
    setCardsPerPageForRender();
  }, [])



  const filterMovies = (keyWords) => {
    return movies.filter(movie => movie.nameRU.toLowerCase().includes(keyWords.toLowerCase()));
  };

  const handleSearchMovies = (keyWords) => {
    setIsLoading(true);
        
    const foundMovies = filterMovies(keyWords);
        
    if (foundMovies.length === 0) {
      setSearchInfoBox('Ничего не найдено');
    } 
    localStorage.setItem('selectedMovies', JSON.stringify(foundMovies));
    setSelectedMovies(foundMovies);
    setCardsPerPageForRender();
    setIsLoading(false);
    // localStorage.clear();
  };

  
  const handleBurgerMenuClick = () => {
    setIsPopupNavigationOpen(true);
  }

  const setCardsPerPageForRender = () => {
    if (document.documentElement.clientWidth >= 850) {
      setCardsPerPage(12);
    } else if (document.documentElement.clientWidth >= 500) {
      setCardsPerPage(8);
    } else {
      setCardsPerPage(5);
    }
  }

  

  const handleLoadMore = () => {
    if (document.documentElement.clientWidth > 850) {
      setCardsPerPage(cardsPerPage + 3);
    } else {
      setCardsPerPage(cardsPerPage + 2);
    }
  }

  const closePopupNavigation = () => {
    setIsPopupNavigationOpen(false);
  }

  window.addEventListener('resize', function() {
    setTimeout(setCardsPerPageForRender, 5000);
  }, true);

  return (
    <div className='app'>
      <div className='app__content'>
        <Header onBurgerClick={handleBurgerMenuClick} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies onSearchMovies={handleSearchMovies} onLoadMore={handleLoadMore} selectedMovies={selectedMovies} 
              currentCards={currentCards} isLoading={isLoading} searchInfoBox={searchInfoBox} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
      <PopupNavigation isOpen={isPopupNavigationOpen} onClose={closePopupNavigation} />
    </div>
  );
}

export default App;
