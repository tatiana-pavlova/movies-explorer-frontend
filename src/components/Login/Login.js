import React from 'react';
import logoPath from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';
import FormInput from '../FormInput/FormInput';
import { InputsForLogin } from '../../utils/constants';

function Login({onLogin, loginError}) {
  const validation = useFormWithValidation();


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(validation.values)
  }
  

  const handleChange = (e) => {
    validation.handleChange(e, InputsForLogin);
  }


  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='register__logo'/></Link>
        <h2 className='register__title'>Рады видеть!</h2>
        <form onSubmit={handleSubmit}>
          <div className='register__input-wrapper'>
            {InputsForLogin.map((input) => {
              return (
                <FormInput key={input.id} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} 
                onChange={handleChange} error={validation.errors[input.name]} />
              )
            })}
          </div>
          <span className={`register__api-error ${loginError ? '' : 'register__api-error_invisible'}`}>Что-то пошло не так...</span>
          <button type='submit' className='register__button' disabled={!validation.isValid ? true : false}>Войти</button>
        </form>
        <p className='register__question'>Ещё не зарегистрированы? <Link to='/signup' className='register__link'>Регистрация</Link></p>
      </div>
    </section>
  );
}

export default Login;
