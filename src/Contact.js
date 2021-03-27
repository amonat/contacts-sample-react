import React from 'react'

function Contact({ contact }) {
  return (
    <React.Fragment key={contact.id}>
      <h3 className='contact'>
        {`${contact.firstName} ${contact.lastName}`}
      </h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.active ? 'Active' : 'Inactive'}</p>
    </React.Fragment>
  )
}

export default Contact
