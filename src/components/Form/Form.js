import './Form.css';
import { Link } from "react-router-dom";

function Form({
  name,
  title,
  children,
  onSubmit,
  isValid,
  isDataEqual,
  confirmButtonText,
  logoutbuttonText,
  subtitleText,
  subtitleLink,
  subtitleLinkText,
  logout }) {

  return (
    <form className={`form ${name === 'profile' && 'form_profile'}`} name={name} onSubmit={onSubmit}>
      <p className={`form__title ${name === 'profile' && 'form__title_profile'}`}>{title}</p>
      <fieldset className={`form__input-container 
        ${name === 'profile' && 'form__input-container_profile'}
        ${name === 'register' && 'form__input-container_register'}`
      }>
        {children}
        <button
          type="submit"
          className={`form__confirm-btn 
          ${name === 'profile' && 'form__confirm-btn_profile'} 
          ${!isValid || isDataEqual ? 'form__confirm-btn_profile_disabled' : ''}
          `}
          disabled={!isValid || isDataEqual}
        >
          {confirmButtonText}
        </button>
      </fieldset>
      {name === 'profile'
        ?
        <button
          className='form__logout-button'
          type='button'
          onClick={logout}>
          {logoutbuttonText}
        </button>
        :
        <p className='form__subtitle'>{subtitleText}<Link className='form__subtitle-link' to={subtitleLink}>{subtitleLinkText}</Link></p>}
    </form>
  );
}

export default Form;