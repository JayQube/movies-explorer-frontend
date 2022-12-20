import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li>
          <a href='https://jayqube.github.io/how-to-learn/index.html'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>Статичный сайт</a>
        </li>
        <li>
          <a href='https://jayqube.github.io/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>Адаптивный сайт</a>
        </li>
        <li>
          <a href='https://shebyakin.students.nomoredomains.icu/'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
