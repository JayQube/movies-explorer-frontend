import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <SectionTitle>О проекте</SectionTitle>
      <ul className='about-project__container'>
        <li className='about-project__card'>
          <h3 className='about-project__card-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__card-text'>Составление плана, работу над бэкендом,
            вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__card'>
          <h3 className='about-project__card-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__card-text'>У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__terms'>
        <p className='about-project__term about-project__term_green'>1 неделя</p>
        <p className='about-project__term about-project__term_grey'>4 недели</p>
        <p className='about-project__kind'>Back-end</p>
        <p className='about-project__kind'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
