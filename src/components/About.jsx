import React, { useState, useEffect } from 'react';
import getRandomColor from '../hooks/getRandomColor';
import profilePhoto from "../assets/profile-photo.jpg"
import { uxExperience, webDevExperience, designExperience } from '../hooks/getYear';

export default function About() {
  const words = ['Design systems', 'Atomic design', 'Accessibility', 'CSS styles', 'Interaction design',
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
          <h1 className='about__title' data-text="America Sanchez Leon" tabIndex="0">America Sanchez Leon</h1>
          <h3  tabIndex="0">UX engineer | Product designer | UI developer</h3>
          <p className='mt-3'>I’m an unicorn 🦄
            I have {uxExperience} years of experience un UX/UI, {webDevExperience} as UI developer and front end developer,
            and a whole background of {designExperience} years as integral designer.
            <br /><br />
            <b> I specialize in reducing the inconsistency between design and development.</b> My goal is to deliver cohesive, functional and usable products. 
            With experience in both design and development, I can
            translate complex user and business needs into
            intuitive and accesible interfaces that
            not only meet user expectations but also account
            for engineering constraints, ensuring a smooth transition
            from concept to production. <br /> <br />
            I’m also skilled at developing UI components and
            implementing cleand and organized design systems.
            <br />
          </p>
          <span className='about__highlightedWords'><p>I love</p><p style={{ color: color }}>{words[currentWordIndex]}</p></span>
          <a
            type="button"
            tabIndex="0"
            className="btn btn-outline-primary btn-lg rounded-0 btn-themed-primary"
            aria-label="Download resume from google drive"
            target="_blank"
            href="https://drive.google.com/file/d/1xJj8bZX_zk5lhwQJ8gTIlVxgIIlR9bhR/view?usp=sharing"
          >
            Download resume
          </a>
        </div>
        <div className='col-3 d-none d-md-flex'>
          <img src={profilePhoto} alt='profile photo' className='about__img'></img>
        </div>
      </div>
    </header>
  );
};
