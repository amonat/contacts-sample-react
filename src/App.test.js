import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const setTextField = (labelText, value) => {
  fireEvent.change(screen.getByLabelText(labelText), { target: { value: value } });
};

const setFirstName = (value) => { setTextField('First name', value) };
const setLastName = (value) => { setTextField('Last name', value) };
const setEmail = (value) => { setTextField('Email', value) };
const setPhone = (value) => { setTextField('Phone', value) };

test('renders title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Contact Tracker/i);
  expect(headerElement).toBeInTheDocument();
});

describe('adding a contact', () => {
  it('allows filling and saving then displays a newly created contact', () => {
    render(<App />);
    const addContactButton = screen.getByRole('button', { name: 'Add contact' } );
    fireEvent.click(addContactButton);

    setFirstName('New');
    setLastName('Person');
    setEmail('newemail');
    setPhone('newphone');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);

    expect(screen.queryByRole('alert')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Save contact' })).toBeNull();

    const newContactName = screen.getByText(/New Person/);
    expect(newContactName).toBeInTheDocument();
    const newContactEmail = screen.getByText(/newemail/);
    expect(newContactEmail).toBeInTheDocument();
    const newContactPhone = screen.getByText(/newphone/);
    expect(newContactPhone).toBeInTheDocument();
  });
});
