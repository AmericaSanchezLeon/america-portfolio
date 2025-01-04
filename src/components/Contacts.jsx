import { useEffect } from 'react';

import contactsData from '../data/contactsData.json';
import ContactCard from "./ContactCard";
import getRandomColor from '../hooks/getRandomColor';

export default function Contacts() {
  const contact = contactsData.map((data) =>
    <ContactCard
       text={data.text}
       href={data.href}
       ariaLabel={data.ariaLabel}
       icon = {data.icon}
       key={data.id} 
     /> )

     useEffect(() => {
      const componentRoot = document.getElementById('contact');
      const color = getRandomColor();
      componentRoot.style.setProperty('--random-color', color);
    }, []);


  return (
    <section id="contact" className='contact py-md-5 py-3'>
      <h2>Contact</h2>
      <div className='contact__wrapper py-md-5 py-3'>
      
      <h3 >Let's get in touch!</h3>
      <ul className='contact__links'>
        {contact}
        </ul>
      </div>
     
    </section>
  );
};