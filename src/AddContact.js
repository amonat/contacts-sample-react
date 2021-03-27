import React, { useState } from 'react'

function AddContact({ onAdd, startsOpen }) {
  const [isOpen, setOpen] = useState(startsOpen);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [active, setActive] = useState(true);
  const [error, setError] = useState(null)

  const showForm = (show) => {
    setOpen(show);
  }

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

    onAdd({ firstName, lastName, email, phone, active });

    setOpen(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setActive(true);
    setError(null);
  }

  if (isOpen) {
    return (
      <>
        { error && <p role='alert' className='error'>{error}</p>}
        <form onSubmit={onSubmit}>
          <div className='form-field'>
            <label htmlFor='first-name-input'>First name</label>
            <input
              id='first-name-input'
              type='text'
              placeholder='First name'
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className='form-field'>
            <label htmlFor='last-name-input'>Last name</label>
            <input
              id='last-name-input'
              type='text'
              placeholder='Last name'
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <div className='form-field'>
            <label htmlFor='email-input'>Email</label>
            <input
              id='email-input'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className='form-field'>
            <label htmlFor='phone-input'>Phone</label>
            <input
              id='phone-input'
              type='text'
              placeholder='Phone'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>

          <div className='form-field'>
            <label htmlFor='active-input'>Active</label>
            <input
              id='active-input'
              type='checkbox'
              checked={active}
              onChange={(event) => setActive(event.currentTarget.checked)}
            />
          </div>

          <button type='submit' onClick={onSubmit}>Save contact</button>
          <button type='button' onClick={() => { showForm(false) }}>Cancel</button>
        </form>
      </>
    );
  } else {
    return (
      <button type='submit' onClick={() => { showForm(true) }}>Add contact</button>
    )
  }
}

export default AddContact
