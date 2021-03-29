import React, { useState } from 'react'
import ContactForm from './ContactForm';

function AddContact({ onAddContact }) {
  const [isOpen, setOpen] = useState(false);

  const showForm = (show) => {
    setOpen(show);
  }

  const onSave = (contact) => {
    onAddContact(contact);
    setOpen(false);
  };

  const onCancel = () => { showForm(false); }

  if (isOpen) {
    return (
      <div className='add-contact-form'>
        <h3 className='margin-zero'>New contact</h3>
        <ContactForm onSave={onSave} onCancel={onCancel} />
      </div>
    );
  } else {
    return (
      <button className='btn btn-primary-action' type='submit' onClick={() => { showForm(true) }}>Add contact</button>
    )
  }
}

export default AddContact
