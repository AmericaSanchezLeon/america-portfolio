import React, { useState, useEffect } from 'react';
import getRandomColor from '../../src/hooks/getRandomColor';

export default function About() {
  const words = ['Design systems', 'Accessibility', 'CSS styles', 'Interaction design',
    'Usability', 'User experience', 'Information design', 'Prototyping', 'Research', 'Design thinking'];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setColor(getRandomColor());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="aboutme" className='about__container py-2'>
      <div className='about__wrapper row pt-5'>
        <div className='col-10 col-md-6'>
        <h1 className='about__title'>America Sanchez</h1>
        <h3>Product designer | UI developer</h3>
          <p>I’m an unicorn 🦄</p>
          <p>I’m a Product Designer with experience as front end designer and UI developer I have 3 years of experience, and a whole background in design,<b> I focus in reducing inconsistency between design and development</b></p>
          <span className='about__highlightedWords'><p>I love</p><p style={{ color: color}}>{words[currentWordIndex]}</p></span>
          <a
            type="button"
            className="btn btn-outline-primary btn-lg rounded-0 btn-themed-primary"
            aria-label="Download resume from google drive"
            href="https://drive.google.com/file/d/1xJj8bZX_zk5lhwQJ8gTIlVxgIIlR9bhR/view?usp=sharing"
          >
            Download resume
          </a>
        </div>
        <div className='col-3 d-none d-md-flex'>
          <img src='src/assets/profile-photo.jpg' alt='profile photo' className='about__img'></img>
        </div>
      </div>
    </header>
  );
};
