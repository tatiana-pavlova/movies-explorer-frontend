import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import { InputsForRegister } from '../../utils/constants';
import FormInput from '../FormInput/FormInput';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';
import './Register.css';


function Register({onRegister, registerError}) {
  const validation = useFormWithValidation();
  const [isFillingIn, setIsFillingIn] = React.useState(false);

  React.useEffect(() => {
    console.log(validation.isValid);
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(validation.values)
    setIsFillingIn(false);
  }

  const handleChange = (e) => {
    setIsFillingIn(true);
    validation.handleChange(e, InputsForRegister);
  }

    
  return (
    <section className='register'>
      <div className='register__content'>
        <Link to='/'><img src={logoPath} alt='Логотип BeatFilm' className='register__logo'/></Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form onSubmit={handleSubmit}>
          <div className='register__input-wrapper'>
            {InputsForRegister.map((input) => {
              return (
                <FormInput key={input.id} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} 
                onChange={handleChange} error={validation.errors[input.name]} />
              )
            })}
          </div>
          <span className={`register__api-error ${registerError ? '' : 'register__api-error_invisible'}`}>
            Что-то пошло не так...</span>
          <button type='submit' className='register__button' disabled={validation.isValid && isFillingIn ? false : true} >
            Зарегистрироваться</button>
        </form>
        <p className='register__question'>Уже зарегистрированы? <Link to='/signin' className='register__link'>Войти</Link></p>
      </div>
    </section>
  );
}

export default Register;
