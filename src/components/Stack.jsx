import stackData from '../data/stackData.json';

export default function Stack() {
  return (
    <section id="stack" className="stack py-5">
      <h2>My Stack</h2>
      <div className='stack__wrapper py-5'> 
            <ul className="stack__row row">
              {stackData.map( (item) => (
                <li key={item.text} className="stack__item col col-md-2 col-sm-4">
                  {item.imgUrl && <img className="stack__img" src={item.imgUrl} alt={item.text}/> } 
                  <span><b>{item.text}</b></span>
                   <span>{item.experience}</span>
                </li>
              ))}
            </ul>
          </div>
       
    </section>
  );
}
