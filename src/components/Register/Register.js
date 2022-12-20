import './Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';

function Register() {
  return (
<section className='register'>
      <>
        <Logo />
        <Form
          name='register'
          title='Добро пожаловать!'
          confirmButtonText='Зарегистрироваться'
          subtitleText='Уже зарегистрированы?'
          subtitleLink='/signin'
          subtitleLinkText='Войти'
        >
          <div className='form__field'>
            <p className='form__input-title'>Имя</p>
            <input
              type='text'
              id='name'
              name='name'
              className='form__input'
              required
              minLength='2'
              maxLength='40'
              defaultValue='Имя'
            />
            <span className='form__error name-error'>Имя</span>
          </div>
          <div className='form__field'>
            <p className='form__input-title'>E-mail</p>
            <input
              type='email'
              id='email'
              name='email'
              className='form__input'
              required
              minLength='2'
              maxLength='40'
              defaultValue='some@some.ru'
            />
            <span className='form__error name-error'>E-mail</span>
          </div>
          <div className='form__field'>
            <p className='form__input-title'>Пароль</p>
            <input
              type='password'
              id='password'
              name='password'
              className='form__input'
              required
            />
            <span className='form__error name-error'>Пароль</span>
          </div>
        </Form>
      </>

    </section>
  );
}

export default Register;
