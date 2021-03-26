import React from 'react'

function Contacts({ contacts }) {
  const hasContacts = contacts.length > 0;

  if (hasContacts) {
    return (
      <>
        {contacts.map((contact) =>
          <React.Fragment key={contact.id}>
            <h3 key={contact.id} className='contact'>
              {contact.firstName}&nbsp;{contact.lastName}
            </h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.status}</p>
          </React.Fragment>
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
