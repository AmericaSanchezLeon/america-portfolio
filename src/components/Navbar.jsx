import navbarData from '../data/navbarData.json';
import logo from  '../assets/logo-america.svg';
import getRandomColor from '../hooks/getRandomColor';

export default function Navbar() {

  const color  = getRandomColor();
  document.documentElement.style.setProperty('--random-color', color);

  return (
    <nav className="nav">
      <img className="nav__logo d-none d-md-flex" 
      src={logo} alt='america sanchez logo'/>
      
      <ul>
        {navbarData.map((item) => (
          <li key={item.name}>
            <a href={item.href} 
            aria-label='{item.ariaLabel}'
            tabIndex="0">
              {item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}