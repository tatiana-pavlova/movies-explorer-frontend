import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className='profile'>
      <div className='profile__content'>
        <h2 className='profile__greeting'>Привет, Виталий!</h2>
        <form>
          <fieldset className='profile__info'>
            <label className='profile__label'>Имя</label>
            <input type='text' className='profile__input' defaultValue='Виталий' placeholder='Имя' />
          </fieldset>
          <hr className='profile__line' />
          <fieldset className='profile__info'>
            <label className='profile__label'>E-mail</label>
            <input type='email' className='profile__input' defaultValue='pochta@yandex.ru' placeholder='email' />
          </fieldset>
          <button type='submit' className='profile__edit'>Редактировать</button>
        </form>
        <Link to='/' className='profile__quit'>Выйти из аккаунта</Link> 
      </div>
    </section>
  );
}

export default Profile;