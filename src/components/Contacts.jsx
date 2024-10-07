import contactsData from '../data/contactsData.json';
import ContactCard from "./ContactCard";

export default function Contacts() {

  const contact = contactsData.map((data) =>
    <ContactCard
       text={data.text}
       href={data.href}
       ariaLabel={data.ariaLabel}
       icon = {data.icon}
     /> )

  return (
    <>
      <h2>Contacts</h2>
      <p>Let get in touch!</p>
      <ul>{contact}
   </ul>


    </>
  );
};