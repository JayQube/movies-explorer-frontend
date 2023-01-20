import React from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import './Login.css';

function Login({ onAuthorization, renderLoading, formNotification, formMessage }) {

  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    onAuthorization({ email, password });
  }

  return (
    <section className='login'>
      <>
        <Logo />
        <Form
          name='login'
          title='Рады видеть!'
          confirmButtonText={renderLoading ? 'Авторизация...' : 'Войти'}
          subtitleText='Ещё не зарегистрированы?'
          subtitleLink='/signup'
          subtitleLinkText='Регистрация'
          onSubmit={handleSubmit}
          isValid={isValid}
        >
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
              className={`form__input ${errors.password && 'form__input_error'} ${formNotification && 'form__input_error'}`}
              required
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

export default Login;
