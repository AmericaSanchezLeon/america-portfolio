import stackData from '../data/stackData.json';

export default function Stack() {
  return (
    <section id="stack" className="stack py-5">
      <h2 tabIndex="0">My Stack</h2>
      <div className='stack__wrapper py-5'>
        <ul className="stack__row row">
          {stackData.map((item) => (
            <li key={item.text} className="stack__item col col-4 col-md-2" tabIndex="0">
              {item.imgUrl && <img className="stack__img" src={item.imgUrl} alt={item.ariaLabel} />}
              <span><b>{item.text}</b></span>
              <span>{item.experience}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
