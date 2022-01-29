import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id='aboutProject' className='project'>
      <SectionTitle title='О проекте' />

      <div className='project__info'>
        <div className='project__item'>
          <h3 className='project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__item'>
          <h3 className='project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className='project__chart'>
        <div className='project__first-term'>
          <p className='project__term-duration'>1 неделя</p>
        </div>
        <div className='project__second-term'>
          <p className='project__term-duration'>4 недели</p>
        </div>
      </div>

      <div className='project__chart'>
        <div className='project__first-term-name'>
          <p className='project__term-name'>Back-end</p>
        </div>
        <div className='project__second-term-name'>
          <p className='project__term-name'>Front-end</p>
        </div>
      </div>
      
    </section>
  );
}

export default AboutProject;