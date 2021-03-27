import { render, screen, fireEvent } from '@testing-library/react';
import AddContact from './AddContact';

const setTextField = (labelText, value) => {
  fireEvent.change(screen.getByLabelText(labelText), { target: { value: value } });
};

const setFirstName = (value) => { setTextField('First name', value) };
const setLastName = (value) => { setTextField('Last name', value) };
const setEmail = (value) => { setTextField('Email', value) };

describe('rendering', () => {
  it('renders closed without error', () => {
    render(<AddContact />);
  });

  it('renders open without error', () => {
    render(<AddContact startsOpen={true} />);
  });
});

describe('submitting', () =>{
  it('shows an error when first name is not entered', () => {
    render(<AddContact startsOpen={true} />);
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add a first name/);
    expect(alert).toBeInTheDocument();
  });

  it('shows an error when last name is not entered', () => {
    render(<AddContact startsOpen={true} />);
    setFirstName('First');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add a last name/);
    expect(alert).toBeInTheDocument();
  });

  test('shows an error when email is not entered', () => {
    render(<AddContact startsOpen={true} />);
    setFirstName('First');
    setLastName('Last');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.getByText(/Please add an email/);
    expect(alert).toBeInTheDocument();
  });

  test('saves when all required fields are entered', () => {
    render(<AddContact startsOpen={true} onAdd={() => {}} />);
    setFirstName('First');
    setLastName('Last');
    setEmail('Email');
    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    fireEvent.click(saveButton);
    const alert = screen.queryByRole('alert');
    expect(alert).toBeNull();
  });
});
