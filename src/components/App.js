import { useState } from 'react'
import './App.css';
import AddContact from './AddContact';
import Contacts from './Contacts';

function App() {
  let initialContacts = [];

  const onAddContact = (contact) => {
    const lastId = contacts[contacts.length - 1]?.id || 0;
    const contactToSave = { ...contact, id: lastId + 1 }
    setContacts([...contacts, contactToSave]);
  };

  const onUpdateContact = (contact) => {
    const index = findContactIndex(contact);
    const updated = [...contacts.slice(0, index), contact, ...contacts.slice(index + 1)]
    setContacts(updated);
  };

  const onDeleteContact = (contact) => {
    const index = findContactIndex(contact);
    const updated = [...contacts.slice(0, index), ...contacts.slice(index + 1)]
    setContacts(updated);
  };

  const findContactIndex = (contact) => {
    const index = contacts.findIndex(c => c.id === contact.id);

    if (index === undefined) {
      throw new Error(`Can not find contact with id ${contact.id} to update`);
    } else {
      return index;
    }
  }

  let [contacts, setContacts] = useState(initialContacts);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Contact Tracker</h1>
      </header>
      <div className='App-body'>
        <AddContact onAddContact={onAddContact} />
        <Contacts
          contacts={contacts}
          onUpdateContact={onUpdateContact}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </div>
  );
}

export default App;
