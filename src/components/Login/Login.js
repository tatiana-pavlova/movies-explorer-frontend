import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

function Login({onLogin, loginError}) {
  const validation =useFormWithValidation();
  // const validation = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(validation.values)
    // onRegister(validation.values)
  }

  const handleChange = (e) => {
    validation.handleChange(e);
  }


  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='register__logo'/></Link>
        <h2 className='register__title'>Рады видеть!</h2>
        <form onSubmit={handleSubmit}>
          <div className='register__input-wrapper'>
            <fieldset className='register__fieldset'>
              <label htmlFor='useremail' className='register__label'>E-mail</label>
              <input type='email' className='register__input' placeholder='E-mail' name='email' id='useremail'
                required onChange={handleChange}></input>
              <span className='register__input-error'>{validation.errors.email}</span>
            </fieldset>
            <fieldset className='register__fieldset'>
              <label htmlFor='userpassword' className='register__label'>Пароль</label>
              <input type='password' className='register__input' placeholder='Пароль' name='password' id='userpassword'
                minLength={8} required onChange={handleChange}></input>
              <span className='register__input-error'>{validation.errors.password}</span>
            </fieldset>
            <span className='register__input-error register__input-error_invisible'>Что-то пошло не так...</span>
          </div>
          <span className={`register__input-error ${loginError ? '' : 'register__input-error_invisible'}`}>Что-то пошло не так...</span>
          <button type='submit' className='register__button' disabled={!validation.isValid ? true : false}>Войти</button>
        </form>
        <p className='register__question'>Ещё не зарегистрированы? <Link to='/signup' className='register__link'>Регистрация</Link></p>
      </div>
    </section>
  );
}

export default Login;