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
      <div className='contact'>
        <ContactForm onSave={onSave} onCancel={onCancel} contact={contact} />
      </div>
    );
  } else {
    return (
      <div key={contact.id} className='contact'>
        <div className='contact-contents'>
          <h3>
            {`${contact.firstName} ${contact.lastName}`}
          </h3>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.active ? 'Active' : 'Inactive'}</p>
        </div>
        <div className='contact-buttons'>
          <button className='btn' type='button' onClick={editContact}>Edit</button>
          <button className='btn' type='button' onClick={deleteContact}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Contact
