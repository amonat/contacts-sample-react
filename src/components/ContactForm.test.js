import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

const setTextField = (labelText, value) => {
  fireEvent.change(screen.getByLabelText(labelText), { target: { value: value } });
};

const setFirstName = (value) => { setTextField('First name', value) };
const setLastName = (value) => { setTextField('Last name', value) };
const setEmail = (value) => { setTextField('Email', value) };

describe('rendering', () => {
  it('renders without error', () => {
    render(<ContactForm />);
  });
});

describe('submitting', () =>{
  it('shows an error when first name is not entered', () => {
    render(<ContactForm />);
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add a first name/);
    expect(alert).toBeInTheDocument();
  });

  it('shows an error when last name is not entered', () => {
    render(<ContactForm />);
    setFirstName('First');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add a last name/);
    expect(alert).toBeInTheDocument();
  });

  test('shows an error when email is not entered', () => {
    render(<ContactForm />);
    setFirstName('First');
    setLastName('Last');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add an email/);
    expect(alert).toBeInTheDocument();
  });

  test('saves when all required fields are entered', () => {
    let onSaveCalls = 0;
    render(<ContactForm onSave={() => { onSaveCalls++; }} />);
    setFirstName('First');
    setLastName('Last');
    setEmail('Email');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);

    // After saving, there is no alert, and the callback has been called once
    expect(screen.queryByRole('alert')).toBeNull();
    expect(onSaveCalls).toEqual(1);
  });
});
