import { render, screen, fireEvent } from '@testing-library/react';
import AddContact from './AddContact';

const setTextField = (labelText, value) => {
  fireEvent.change(screen.getByLabelText(labelText), { target: { value: value } });
};

const setFirstName = (value) => { setTextField('First name', value) };
const setLastName = (value) => { setTextField('Last name', value) };
const setEmail = (value) => { setTextField('Email', value) };

const clickAddContact = () => {
  const addContactButton = screen.getByRole('button', { name: 'Add contact' });
  fireEvent.click(addContactButton);
};

describe('rendering', () => {
  it('renders closed without error', () => {
    render(<AddContact />);
  });

  it('renders open without error', () => {
    render(<AddContact />);
  });
});

describe('submitting', () =>{
  it('shows an error when first name is not entered', () => {
    render(<AddContact />);
    clickAddContact();
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add a first name/);
    expect(alert).toBeInTheDocument();
  });

  it('shows an error when last name is not entered', () => {
    render(<AddContact />);
    clickAddContact();
    setFirstName('First');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add a last name/);
    expect(alert).toBeInTheDocument();
  });

  test('shows an error when email is not entered', () => {
    render(<AddContact />);
    clickAddContact();
    setFirstName('First');
    setLastName('Last');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add an email/);
    expect(alert).toBeInTheDocument();
  });

  test('saves when all required fields are entered', () => {
    let onAddContactCalls = 0;
    render(<AddContact onAddContact={() => { onAddContactCalls++; }} />);
    clickAddContact();
    setFirstName('First');
    setLastName('Last');
    setEmail('Email');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);

    // After saving, there is no alert, and Save contact has been replaced with Add contact
    expect(screen.queryByRole('alert')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Save contact' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Add contact' })).toBeInTheDocument();
    // Also, the callback has been called once
    expect(onAddContactCalls).toEqual(1);
  });
});
