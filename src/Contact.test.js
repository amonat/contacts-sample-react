import { fireEvent, render, screen } from '@testing-library/react';
import Contact from './Contact';

const sampleContact = {
  id: 1,
  firstName: 'First1',
  lastName: 'Last1',
  email: 'test@example.com',
  phone: '123-456-7890',
};

test('renders fields of contact', () => {
  const contact = sampleContact;
  render(<Contact contact={contact} />);

  const firstName = screen.getByText(new RegExp(contact.firstName, 'i'));
  expect(firstName).toBeInTheDocument();
  const lastName = screen.getByText(new RegExp(contact.lastName, 'i'));
  expect(lastName).toBeInTheDocument();
  const email = screen.getByText(new RegExp(contact.email, 'i'));
  expect(email).toBeInTheDocument();
  const phone = screen.getByText(new RegExp(contact.phone, 'i'));
  expect(phone).toBeInTheDocument();
});

describe('editing', () => {
  it('has an Edit button', () => {
    const contact = sampleContact;
    render(<Contact contact={contact} />);

    const editButton = screen.getByRole('button', { name: 'Edit' });
    expect(editButton).toBeInTheDocument();
  });

  it('shows form when edit button is clicked', () => {
    const contact = sampleContact;
    render(<Contact contact={contact} />);

    const editButton = screen.getByRole('button', { name: 'Edit' });
    fireEvent.click(editButton);

    const saveButton = screen.getByRole('button', { name: 'Save contact' });
    expect(saveButton).toBeInTheDocument();
  });

  describe('deleting', () => {
    it('has a Delete button', () => {
      const contact = sampleContact;
      render(<Contact contact={contact} />);

      const deleteButton = screen.getByRole('button', { name: 'Delete' });
      expect(deleteButton).toBeInTheDocument();
    });

    it('calls the delete callback when Delete is clicked', () => {
      const contact = sampleContact;

      let onDeleteContactCalls = 0;
      render(<Contact contact={contact} onDeleteContact={() => onDeleteContactCalls++ } />);

      const deleteButton = screen.getByRole('button', { name: 'Delete' });
      fireEvent.click(deleteButton);

      expect(onDeleteContactCalls).toEqual(1);
    });
  });
});
