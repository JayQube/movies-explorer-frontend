import './Form.css';
import { Link } from "react-router-dom";

function Form({ name, title, children, confirmButtonText, logoutbuttonText, subtitleText, subtitleLink, subtitleLinkText }) {
  return (
    <form className={`form ${name === 'profile' && 'form_profile'}`} name={name}>
      <p className={`form__title ${name === 'profile' && 'form__title_profile'}`}>{title}</p>
      <fieldset className={`form__input-container 
        ${name === 'profile' && 'form__input-container_profile'}
        ${name === 'register' && 'form__input-container_register'}`
      }>
        {children}
        <button
          type="submit"
          className={`form__confirm-btn ${name === 'profile' && 'form__confirm-btn_profile'}`}
        >
          {confirmButtonText}
        </button>
      </fieldset>
      {name === 'profile'
        ?
        <button className='form__logout-button' type='button'>{logoutbuttonText}</button>
        :
        <p className='form__subtitle'>{subtitleText}<Link className='form__subtitle-link' to={subtitleLink}>{subtitleLinkText}</Link></p>}
    </form>
  );
}

export default Form;