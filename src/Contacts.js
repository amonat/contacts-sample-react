import React from 'react'
import Contact from './Contact';

function Contacts({ contacts }) {
  const hasContacts = contacts.length > 0;

  if (hasContacts) {
    return (
      <>
        {contacts.map((contact) =>
          <Contact contact={contact} key={contact.id} />
        )}
      </>
    )
  } else {
    return (
      <h3>No contacts to show</h3>
    )
  }
}

export default Contacts
