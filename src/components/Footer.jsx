import getRandomColor from '../hooks/getRandomColor';

export default function Footer() {
  const tech = ['React, ', 'SASS, ', 'JS, ', 'Bootstrap', ' and ', 'Firebase'];
  const color  = getRandomColor();
  
  return (
    <footer className="py-2">
      <p tabIndex="0">
        This project was built with {tech} <i className="bi bi-heart-fill" style={{ color: color }}></i>
      </p>
    </footer>
  );
}
