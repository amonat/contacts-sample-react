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
  }

  let [contacts, setContacts] = useState(initialContacts);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Tracker</h1>
      </header>
      <AddContact onAdd={onAddContact} />
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
