import { fireEvent, render, screen } from '@testing-library/react';
import Contacts from './Contacts';

test('renders message when no contacts are shown', () => {
  const contacts = [];
  render(<Contacts contacts={contacts} />);
  const noContactsMessage = screen.getByText(/No contacts to show/i);
  expect(noContactsMessage).toBeInTheDocument();
});

test('renders contacts passed to it', () => {
  const contacts = [
    { id: 1, firstName: 'First1', lastName: 'Last1', email: 'Email1' },
    { id: 2, firstName: 'First2', lastName: 'Last2', email: 'Email2' },
  ];
  render(<Contacts contacts={contacts} />);

  for (const contact of contacts) {
    const firstName = screen.getByText(new RegExp(contact.firstName, 'i'));
    expect(firstName).toBeInTheDocument();
    const lastName = screen.getByText(new RegExp(contact.lastName, 'i'));
    expect(lastName).toBeInTheDocument();
  }
});
