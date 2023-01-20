import React from 'react';
import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import Form from '../Form/Form';

function Profile({ logout, onSubmit, successMessageStatus, formNotification, formMessage }) {
  const [isDataEqual, setIsDataEqual] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid } = useFormWithValidation(currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = values;
      onSubmit({ name, email });
  }
  React.useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsDataEqual(true);
    } else {
      setIsDataEqual(false);
    }
  }, [values, currentUser])

  return (
    <section className='profile'>
      <Form
        name='profile'
        title={`Привет, ${currentUser.name}!`}
        confirmButtonText='Редактировать'
        logoutbuttonText='Выйти из аккаунта'
        onSubmit={handleSubmit}
        isValid={isValid}
        isDataEqual={isDataEqual}
        logout={logout}
      >
        <div className='form__field form__field_profile'>
          <p className='form__input-title form__input-title_profile'>Имя</p>
          <input
            type='text'
            id='name'
            name='name'
            className={`form__input form__input_profile ${errors.name && 'form__input_error'}`}
            required
            minLength='2'
            maxLength='40'
            value={values.name}
            onChange={handleChange}
          />
          <span className='form__error form__error_profile'>{errors.name}</span>
        </div>
        <div className='form__field form__field_profile'>
          <span className="form__error form__error_profile">{errors.email}</span>
          <p className='form__input-title form__input-title_profile'>E-mail</p>
          <input
            type='email'
            id='email'
            name='email'
            className={`form__input form__input_profile ${errors.email && 'form__input_error'} ${formNotification && 'form__input_error'}`}
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <span className={`form__notification ${successMessageStatus && 'form__notification_success'}`}>
          {formNotification || successMessageStatus ? formMessage : ''}
        </span>
      </Form>
    </section>
  );
}

export default Profile;
