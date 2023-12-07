import React, { Component } from 'react';
import { Box, TitlePrimary, TitleSecondary, TitleThird } from './App.styled';
import ContactFormComponent from 'components/ContactForm/ContactForm';
import FilterComponent from 'components/Filter/Filter';
import ContactListComponent from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onContactAdd = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.filteredContacts();

    return (
      <>
        <Box>
          <TitlePrimary>Phonebook</TitlePrimary>
          <ContactFormComponent
            contacts={this.state.contacts}
            onContactAdd={this.onContactAdd}
          />
          <TitleSecondary>Contacts</TitleSecondary>
          <TitleThird>Find contact name by number:</TitleThird>
          <FilterComponent onChange={this.onChangeFilter} value={filter} />
          <ContactListComponent
            filtredContacts={filtredContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Box>
      </>
    );
  }
}

export default App;
