import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='register__logo'/></Link>
        <h2 className='register__title'>Рады видеть!</h2>
        <form>
          <div className='register__input-wrapper'>
            <fieldset className='register__fieldset'>
              <label htmlFor='useremail' className='register__label'>E-mail</label>
              <input type='email' className='register__input' defaultValue='pochta@yandex.ru' id='useremail'></input>
            </fieldset>
            <fieldset className='register__fieldset'>
              <label htmlFor='userpassword' className='register__label'>Пароль</label>
              <input type='password' className='register__input' defaultValue='qwerty' id='userpassword'></input>
            </fieldset>
            <span className='register__input-error register__input-error_invisible'>Что-то пошло не так...</span>
          </div>
          <button type='submit' className='register__button'>Войти</button>
        </form>
        <p className='register__question'>Ещё не зарегистрированы? <Link to='/signup' className='register__link'>Регистрация</Link></p>
      </div>
    </section>
  );
}

export default Login;