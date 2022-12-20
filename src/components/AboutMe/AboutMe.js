import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <SectionTitle>Студент</SectionTitle>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Виталий</h3>
          <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове,
            закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.</p>
          <a href='https://github.com/JayQube' target='_blank' rel='noreferrer' className='about-me__link'>Github</a>
        </div>
        <img src={Photo} alt='фото' className='about-me__photo'></img>
      </div>
    </section>
  );
}

export default AboutMe;
