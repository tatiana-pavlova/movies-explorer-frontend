import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import './Register.css';

function Register() {
  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='register__logo'/></Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form>
          <div className='register__input-wrapper'>
            <fieldset className='register__fieldset'>
              <label htmlFor='username' className='register__label'>Имя</label>
              <input type='text' className='register__input' defaultValue='Виталий' id='username'></input>
            </fieldset>
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
          <button type='submit' className='register__button'>Зарегистрироваться</button>
        </form>
        <p className='register__question'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </div>
    </section>
  );
}

export default Register;
