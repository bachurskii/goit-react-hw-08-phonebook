import { WrapperContacts } from './contacts.styled';
import { Toaster } from 'react-hot-toast';
import { Form } from 'components/form/form';
import { ContactList } from 'components/contactList/contactList';
import { Filter } from 'components/filter/filter';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContact';
import { Container, TextStyled } from './contacts.styled';

const ContactsPage = () => {
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  return (
    <Container>
      <WrapperContacts>
        <h2>Phonebook</h2>
        <Form onData={onAddContact} />
      </WrapperContacts>

      <WrapperContacts>
        <h2>Contacts</h2>
        <Filter value={String(filter)} onChangeFilter={onSetFilter} />
        {empty() ? (
          <>
            <ContactList
              contacts={contacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <TextStyled>
            Phonebook is empty! <br /> Add your contacts.
          </TextStyled>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </WrapperContacts>
    </Container>
  );
};

export default ContactsPage;
