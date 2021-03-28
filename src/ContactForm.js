import React, { useState } from 'react'

function ContactForm({ onSave, onCancel, contact={} }) {
  const [firstName, setFirstName] = useState(contact.firstName ?? '');
  const [lastName, setLastName] = useState(contact.lastName ?? '');
  const [email, setEmail] = useState(contact.email ?? '');
  const [phone, setPhone] = useState(contact.phone ?? '');
  const [active, setActive] = useState(contact.active ?? true);
  const [error, setError] = useState(null)

  const onSubmit = (event) => {
    event.preventDefault();

    if (!firstName) {
      setError('Please add a first name');
      return;
    }

    if (!lastName) {
      setError('Please add a last name');
      return;
    }

    if (!email) {
      setError('Please add an email');
      return;
    }

    const id = contact.id;
    onSave({ firstName, lastName, email, phone, active, id });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setActive(true);
    setError(null);
  }

  // Suffix to ensure each form has unique labels. An unsaved contact will have '-undefined'
  const labelSuffix = contact.id;
  const firstNameId = `first-name-input-${labelSuffix}`;
  const lastNameId = `last-name-input-${labelSuffix}`;
  const emailId = `email-input-${labelSuffix}`;
  const phoneId = `phone-input-${labelSuffix}`;
  const activeId = `active-input-${labelSuffix}`;

  return (
    <>
      { error && <p role='alert' className='error'>{error}</p>}
      <form onSubmit={onSubmit}>
        <div className='form-field'>
          <label htmlFor={firstNameId}>First name</label>
          <input
            id={firstNameId}
            type='text'
            placeholder='First name'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div className='form-field'>
          <label htmlFor={lastNameId}>Last name</label>
          <input
            id={lastNameId}
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div className='form-field'>
          <label htmlFor={emailId}>Email</label>
          <input
            id={emailId}
            type='text'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className='form-field'>
          <label htmlFor={phoneId}>Phone</label>
          <input
            id={phoneId}
            type='text'
            placeholder='Phone'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className='form-field'>
          <label htmlFor={activeId}>Active</label>
          <input
            id={activeId}
            type='checkbox'
            checked={active}
            onChange={(event) => setActive(event.currentTarget.checked)}
          />
        </div>

        <button type='submit' onClick={onSubmit}>Save contact</button>
        <button type='button' onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
}

export default ContactForm
