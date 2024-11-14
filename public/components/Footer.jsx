import getRandomColor from '../../src/hooks/getRandomColor';

export default function Footer() {
  const tech = ['React, ', 'SASS, ', 'JS, ', 'Bootstrap'];
  const color = getRandomColor();

  return (
    <footer className="py-2">
      <p>
        This project was built with {tech} <i className="bi bi-heart-fill" style={{ color: color }}></i>
      </p>
    </footer>
  );
}
