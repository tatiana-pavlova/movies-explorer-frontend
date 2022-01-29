import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
  return (
    <>
      <h2 className='section-title__title'>{props.title}</h2>
      <div className='section-title__line'></div>
    </>
  );
}

export default SectionTitle;