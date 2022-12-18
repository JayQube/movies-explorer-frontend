import './Login.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';

function Login() {
  return (
    <section className='login'>
      <>
        <Logo />
        <Form
          name='login'
          title='Рады видеть!'
          confirmButtonText='Войти'
          subtitleText='Ещё не зарегистрированы?'
          subtitleLink='/signup'
          subtitleLinkText='Регистрация'
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
        </Form>
      </>

    </section>
  );
}

export default Login;
