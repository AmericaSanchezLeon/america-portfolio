import React, { useState, useEffect } from 'react';

export default function Intro() {
  
  //Data arrays
  const words = ['Design systems', 'Accessibility', 'CSS styles', 'Interaction design',
 'Usability', 'User experience', 'Information design'];

 const colors = [
  '#D238C2', // Pink (Slightly darker)
  '#0040FF', // This blue already has good contrast 
  '#00C6A7', // Cyan (Slightly darker)
  '#FF2380', // This pink is already good 
  '#8736FF', // Purple (Slightly darker) 
  '#6B8E23', // Green (Significantly darker) 
  '#FFB900', // Yellow (Slightly darker)
  '#8B00FF', // Purple (Slightly darker)
  '#9ACD32', // Green (Darker)
  '#00CC7A', // Green (Darker)
  '#FF5500'  // This orange is already good 
];

//hooks
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [color, setColor] = useState('');

 const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setColor(getRandomColor());
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <header>
      <h1 className="header">America Sanchez</h1>
      <h3>Product designer | UI developer</h3>
    </header>
    
      <p>I’m an unicorn (unicorn), I’m a Product Designer with experience of front end designer and UI developer, I focus in reducing inconsistency between design and development..</p>
      <span>I LOVE <p style={{ color: color }}>{words[currentWordIndex]}</p></span> 
      
      <a className="button__download"
      aria-label="Download resume from google drive"
      href="https://drive.google.com/file/d/1xJj8bZX_zk5lhwQJ8gTIlVxgIIlR9bhR/view?usp=sharing">Download resume</a>
    </>
  );
};
