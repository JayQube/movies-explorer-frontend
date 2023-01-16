import React from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import './Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';

function Register({ onRegistration, renderLoading, formNotification, formMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    onRegistration({ name, email, password });
  }

  return (
    <section className='register'>
      <>
        <Logo />
        <Form
          name='register'
          title='Добро пожаловать!'
          confirmButtonText={renderLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          subtitleText='Уже зарегистрированы?'
          subtitleLink='/signin'
          subtitleLinkText='Войти'
          onSubmit={handleSubmit}
          isValid={isValid}
        >
          <div className='form__field'>
            <p className='form__input-title'>Имя</p>
            <input
              type='text'
              id='name'
              name='name'
              className={`form__input ${errors.name && 'form__input_error'}`}
              required
              minLength='2'
              maxLength='40'
              pattern='^[A-Za-zА-Яа-я-\s]+$'
              onChange={handleChange}
              value={values.name || ''}
            />
            <span className='form__error'>{errors.name}</span>
          </div>
          <div className='form__field'>
            <p className='form__input-title'>E-mail</p>
            <input
              type='email'
              id='email'
              name='email'
              className={`form__input ${errors.email && 'form__input_error'} ${formNotification && 'form__input_error'}`}
              required
              pattern='^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$'
              onChange={handleChange}
              value={values.email || ''}
            />
            <span className='form__error'>{errors.email}</span>
          </div>
          <div className='form__field'>
            <p className='form__input-title'>Пароль</p>
            <input
              type='password'
              id='password'
              name='password'
              className={`form__input ${errors.password && 'form__input_error'}`}
              required
              minLength='2'
              onChange={handleChange}
              value={values.password || ''}
            />
            <span className='form__error'>{errors.password}</span>
          </div>
          <span 
            className='form__notification'>
            {formNotification && formMessage}
          </span>
        </Form>
      </>

    </section>
  );
}

export default Register;
