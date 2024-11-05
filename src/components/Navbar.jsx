import navbarData from '../data/navbarData.json';

export default function Navbar() {
  return (
    <navbar className="nav">
      <img className="nav__logo d-none d-md-flex" src='../src/assets/favicon.svg' alt='america sanchez logo'/>
      
      <ul>
        {navbarData.map((item) => (
          <li key={item.name}>
            <a href={item.href} aria-label='{item.ariaLabel}'>{item.name}</a>
          </li>
        ))}
      </ul>
    </navbar>
  );
}