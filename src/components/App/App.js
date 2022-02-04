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


function App() {
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = React.useState(false);

  const handleBurgerMenuClick = () => {
    setIsPopupNavigationOpen(true);
  }

  const closePopupNavigation = () => {
    setIsPopupNavigationOpen(false);
  }

  return (
    <div className='app'>
      <div className='content'>
        <Header onBurgerClick={handleBurgerMenuClick} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies />
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
