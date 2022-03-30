import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';
import './Register.css';


function Register({onRegister, registerError}) {
  const validation = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(validation.values)
  }

  const handleChange = (e) => {
    validation.handleChange(e);
  }

  
  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='register__logo'/></Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form onSubmit={handleSubmit}>
          <div className='register__input-wrapper'>
            <fieldset className='register__fieldset'>
              <label htmlFor='username' className='register__label'>Имя</label>
              <input type='text' name='username' className='register__input' placeholder='Имя' 
                id='username' minLength={2} required onChange={handleChange}></input>
              <span className='register__input-error'>{validation.errors.username}</span>
            </fieldset>
            <fieldset className='register__fieldset'>
              <label htmlFor='useremail' className='register__label'>E-mail</label>
              <input type='email' name='email' className='register__input' placeholder='email' 
                id='useremail' required onChange={handleChange}></input>
              <span className='register__input-error'>{validation.errors.email}</span>
            </fieldset>
            <fieldset className='register__fieldset'>
              <label htmlFor='userpassword' className='register__label'>Пароль</label>
              <input type='password' name='password' className='register__input' placeholder='Пароль' 
                id='userpassword' minLength={8} required onChange={handleChange}></input>
              <span className='register__input-error'>{validation.errors.password}</span>
            </fieldset>
          </div>
          <span className={`register__input-error ${registerError ? '' : 'register__input-error_invisible'}`}>Что-то пошло не так...</span>
          <button type='submit' className='register__button' disabled={!validation.isValid ? true : false}>Зарегистрироваться</button>
        </form>
        <p className='register__question'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </div>
    </section>
  );
}

export default Register;
