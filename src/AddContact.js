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
      <ContactForm onSave={onSave} onCancel={onCancel} />
    );
  } else {
    return (
      <button type='submit' onClick={() => { showForm(true) }}>Add contact</button>
    )
  }
}

export default AddContact
