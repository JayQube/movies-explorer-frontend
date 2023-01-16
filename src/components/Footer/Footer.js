import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>© {new Date().getFullYear()}</p>
        <ul className='footer__social-links'>
          <li className='footer__social-item'>
            <a href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer' className='footer__social-link'>Яндекс.Практикум</a>
          </li>
          <li className='footer__social-item'>
            <a href='https://github.com/' target='_blank' rel='noreferrer' className='footer__social-link'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
