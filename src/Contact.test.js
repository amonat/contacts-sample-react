import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders fields of contact', () => {
  const contact = {
    id: 1,
    firstName: 'First1',
    lastName: 'Last1',
    email: 'test@example.com',
    phone: '123-456-7890',
  };
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
