import { Component } from 'react';
import {
  Box,
  Button,
  ContactItem,
  ContactList,
  Form,
  H1,
  H2,
  H3,
  Input,
  Label,
} from './App.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  onChangeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number, id: nanoid() };
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] }; // порядок виводу контактів
    });
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filtredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { name, number, filter } = this.state;
    const filtredContacts = this.filtredContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Box>
          <H1>Phonebook</H1>
          <Form onSubmit={this.onSubmit}>
            <Label>Name</Label>
            <Input
              value={name}
              onChange={this.onChangeInput}
              type="text"
              name="name"
              required
              placeholder="Add contact name"
            />
            <Label>Number</Label>
            <Input
              value={number}
              onChange={this.onChangeInput}
              type="tel"
              name="number"
              required
              placeholder="Add contact number"
            />
            <Button type="submit">Add Contact</Button>
          </Form>
          <H2>Contacts</H2>
          <H3>Find contact name by number:</H3>
          <Input
            onChange={this.onChangeFilter}
            value={filter}
            type="text"
            name="filter"
            placeholder="Find contact name"
          />
          <ContactList>
            {filtredContacts.map(contact => {
              return (
                <ContactItem key={contact.id}>
                  {contact.name}:{contact.number}
                </ContactItem>
              );
            })}
          </ContactList>
        </Box>
      </div>
    );
  }
}
