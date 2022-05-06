import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../useFormWithValidation/useFormWithValidation';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const validation = useFormWithValidation();

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(false);
  

  React.useEffect(() => {
    setUserName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

   
  const handleUserNameChange = (e) => {
    validation.handleChange(e, [{name: 'username'}]);
    if (currentUser.name !== e.target.value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setUserName(e.target.value);
  }

  const handleEmailChange = (e) => {
    validation.handleChange(e, [{name: 'email'}]);
    if (currentUser.email !== e.target.value) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEmail(e.target.value);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser({
      name: userName,
      email: email,
    })
    setIsValid(false);
  }

  
  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__greeting'>Привет, {currentUser.name}!</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>Имя</label>
            <input type='text' name='username' className='profile__input' value={userName} id='username' 
                   onChange={handleUserNameChange} placeholder='Имя' />
          </fieldset>
          <span className='profile__input-error'>{validation.errors.username}</span> 
          <hr className='profile__line' />
          <fieldset className='profile__fieldset'>
            <label className='profile__label'>E-mail</label>
            <input type='email' name='email' className='profile__input' value={email} id='useremail' 
                   onChange={handleEmailChange} placeholder='email' />
          </fieldset>
          <span className='profile__input-error'>{validation.errors.email}</span>
          <div>{props.infoTooltip}</div>
          <button type='submit' className='profile__edit' disabled={validation.isValid && isValid ? false : true}>Редактировать</button>
        </form>
        <Link to='/' className='profile__quit' onClick={props.onSignOut}>Выйти из аккаунта</Link> 
      </div>
    </section>
  );
}

export default Profile;
