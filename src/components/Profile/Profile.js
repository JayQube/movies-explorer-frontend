import './Profile.css';
import Form from '../Form/Form';

function Profile() {
  return (
    <section className='profile'>
      <Form
        name='profile'
        title='Привет, Гость!'
        confirmButtonText='Редактировать'
        logoutbuttonText='Выйти из аккаунта'
      >
        <div className='form__field form__field_profile'>
          <p className='form__input-title form__input-title_profile'>Имя</p>
          <input
            type='text'
            id='name'
            name='name'
            className='form__input form__input_profile'
            required
            minLength='2'
            maxLength='40'
            defaultValue='Имя'
          />
          <span className='form__error name-error'>Имя</span>
        </div>
        <div className='form__field form__field_profile'>
          <p className='form__input-title form__input-title_profile'>E-mail</p>
          <input
            type='email'
            id='email'
            name='email'
            className='form__input form__input_profile'
            required
            defaultValue='E-mail'
          />
          <span className="form__error title-error">E-mail</span>
        </div>

      </Form>
    </section>
  );
}

export default Profile;
