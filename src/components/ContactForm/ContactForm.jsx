import React, { Component } from 'react';
import { Button, ContactForm, Input, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';

class ContactFormComponent extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
  };

  onChangeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const isDuplicate = this.props.contacts.some(
      contact => contact.name === name && contact.number === number
    );

    if (isDuplicate) {
      alert('This name is already in the phonebook');
      return;
    }

    const newContact = { name, number, id: nanoid() };
    this.props.onContactAdd(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactForm onSubmit={this.onSubmit}>
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
      </ContactForm>
    );
  }
}

export default ContactFormComponent;
