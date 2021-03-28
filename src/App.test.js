import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const setTextField = (labelText, value) => {
  fireEvent.change(screen.getByLabelText(labelText), { target: { value: value } });
};

const setFirstName = (value) => { setTextField('First name', value) };
const setLastName = (value) => { setTextField('Last name', value) };
const setEmail = (value) => { setTextField('Email', value) };
const setPhone = (value) => { setTextField('Phone', value) };
const toggleActive = () => {
  const activeCheckbox = screen.getByLabelText('Active');
  fireEvent.click(activeCheckbox);
};

const addContact = ({ firstName, lastName, email, phone, active }) => {
  const addContactButton = screen.getByRole('button', { name: 'Add contact' } );
  fireEvent.click(addContactButton);

  setFirstName(firstName);
  setLastName(lastName);
  setEmail(email);
  setPhone(phone);
  if (!active) {
    toggleActive();
  }
  const saveButton = screen.getByRole('button', { name: 'Save contact' });
  fireEvent.click(saveButton);
};


test('renders title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Contact Tracker/i);
  expect(headerElement).toBeInTheDocument();
});

describe('adding a contact', () => {
  it('allows filling and saving then displays a newly created contact', () => {
    render(<App />);
    const contactInfo = {
      firstName: 'New',
      lastName: 'Person',
      email: 'newemail',
      phone: 'newphone',
      active: false,
    };

    addContact(contactInfo);

    expect(screen.queryByRole('alert')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Save contact' })).toBeNull();

    const newContactName = screen.getByText(/New Person/);
    expect(newContactName).toBeInTheDocument();
    const newContactEmail = screen.getByText(/newemail/);
    expect(newContactEmail).toBeInTheDocument();
    const newContactPhone = screen.getByText(/newphone/);
    expect(newContactPhone).toBeInTheDocument();
    const newContactActive = screen.getByText(/inactive/i);
    expect(newContactActive).toBeInTheDocument();
  });
});

test('edits a contact', () => {
  render(<App />);

  const initialContactInfo = {
    firstName: 'InitialFirst',
    lastName: 'IntialLast',
    email: 'initial@example.org',
    phone: '212-INI-TIAL',
    active: true,
  };

  addContact(initialContactInfo);

  const editButton = screen.getByRole('button', { name: 'Edit' });
  fireEvent.click(editButton);

  setFirstName('EditedFirst');
  setLastName('EditedLast');
  setEmail('edited@example.org');
  setPhone('212-44F-INAL');
  toggleActive();

  const saveButton = screen.getByRole('button', { name: 'Save contact' });
  fireEvent.click(saveButton);

  const newContactName = screen.getByText(/EditedFirst EditedLast/);
  expect(newContactName).toBeInTheDocument();
  const newContactEmail = screen.getByText(/edited@example.org/);
  expect(newContactEmail).toBeInTheDocument();
  const newContactPhone = screen.getByText(/212-44F-INAL/);
  expect(newContactPhone).toBeInTheDocument();
  const newContactActive = screen.getByText(/inactive/i);
  expect(newContactActive).toBeInTheDocument();
});

test('deletes a contact', () => {
  render(<App />);
  const contactInfo = {
    firstName: 'New',
    lastName: 'Person',
    email: 'newemail',
    phone: 'newphone',
    active: false,
  };

  addContact(contactInfo);
  expect(screen.getByText(/New Person/)).toBeInTheDocument();

  const deleteButton = screen.getByRole('button', { name: 'Edit' });
  fireEvent.click(deleteButton);

  expect(screen.queryByText(/New Person/)).toBeNull();
});