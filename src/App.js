import './App.css';
import Contacts from './Contacts';

function App() {
  const contacts = [
    {
      id: 1,
      firstName: 'Evelyn',
      lastName: 'Hancock',
      email: 'evelyn.hancock@example.com',
      phone: '111-555-1212',
      status: 'active',
    },
    {
      id: 2,
      firstName: 'Crystal',
      lastName: 'Haas',
      email: 'crystal.haas@example.com',
      phone: '222-555-1213',
      status: 'active',
    },
    {
      id: 3,
      firstName: 'Esteban',
      lastName: 'Pope',
      email: 'esteban.pope@example.com',
      phone: '333-555-1212',
      status: 'inactive',
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Tracker</h1>
      </header>
      <Contacts contacts={contacts} />
    </div>
  );
}

export default App;
