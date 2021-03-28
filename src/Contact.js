import React, { useState } from 'react'
import ContactForm from './ContactForm'

function Contact({ contact, onUpdateContact, onDeleteContact }) {
  let [editing, setEditing] = useState(false);

  const editContact = () => {
    setEditing(true);
  };

  const deleteContact = () => {
    onDeleteContact(contact);
  };

  const onSave = (updatedContact) => {
    onUpdateContact(updatedContact);
    setEditing(false);
  }

  const onCancel = () => {
    setEditing(false);
  }

  if (editing) {
    return (
      <ContactForm onSave={onSave} onCancel={onCancel} contact={contact} />
    );
  } else {
    return (
      <React.Fragment key={contact.id}>
        <h3 className='contact'>
          {`${contact.firstName} ${contact.lastName}`}
        </h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.active ? 'Active' : 'Inactive'}</p>
        <button type='button' onClick={editContact}>Edit</button>
        <button type='button' onClick={deleteContact}>Delete</button>
      </React.Fragment>
    )
  }
}

export default Contact
