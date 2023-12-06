import React, { Component } from 'react';
import { Box, TitlePrimary, TitleSecondary, TitleThird } from './App.styled';
import ContactFormComponent from 'components/ContactForm/ContactForm';
import FilterComponent from 'components/Filter/Filter';
import ContactListComponent from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

    const isDuplicate = this.state.contacts.some(
      contact => contact.name === name && contact.number === number
    );
    if (isDuplicate) {
      alert('This name is here');
      return;
    }

    const newContact = { name, number, id: nanoid() };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  onChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
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
      <>
        <Box>
          <TitlePrimary>Phonebook</TitlePrimary>
          <ContactFormComponent
            onSubmit={this.onSubmit}
            name={name}
            number={number}
            onChangeInput={this.onChangeInput}
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

// Variant 1 with all in App,jsx
// ///////////////
// import { Component } from 'react';
// import {
//   Box,
//   Button,
//   ContactForm,
//   ContactItem,
//   ContactList,
//   DeleteButton,
//   Filter,
//   Input,
//   Label,
//   TitlePrimary,
//   TitleSecondary,
//   TitleThird,
// } from './App.styled';
// import { nanoid } from 'nanoid';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     name: '',
//     number: '',
//     filter: '',
//   };

//   onChangeInput = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   onSubmit = evt => {
//     evt.preventDefault();
//     const { name, number } = this.state;

//     const isDuplicate = this.state.contacts.some(
//       contact => contact.name === name && contact.number === number
//     );
//     if (isDuplicate) {
//       alert('This name is here');
//       return;
//     }

//     const newContact = { name, number, id: nanoid() };
//     this.setState(prevState => {
//       return {
//         contacts: [newContact, ...prevState.contacts],
//         name: '',
//         number: '',
//       }; // порядок виводу контактів
//     });
//   };

//   onChangeFilter = evt => {
//     this.setState({ filter: evt.target.value });
//   };

//   filtredContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   };

//   onDeleteContact = id => {
//     this.setState(prevState => {
//       const updatedContacts = prevState.contacts.filter(
//         contact => contact.id !== id
//       );
//       return { contacts: updatedContacts };
//     });
//   };

//   render() {
//     const { name, number, filter } = this.state;
//     const filtredContacts = this.filtredContacts();

//     return (
//       <>
//         <Box>
//           <TitlePrimary>Phonebook</TitlePrimary>
//           <ContactForm onSubmit={this.onSubmit}>
//             <Label>Name</Label>
//             <Input
//               value={name}
//               onChange={this.onChangeInput}
//               type="text"
//               name="name"
//               required
//               placeholder="Add contact name"
//             />
//             <Label>Number</Label>
//             <Input
//               value={number}
//               onChange={this.onChangeInput}
//               type="tel"
//               name="number"
//               required
//               placeholder="Add contact number"
//             />
//             <Button type="submit">Add Contact</Button>
//           </ContactForm>
//           <TitleSecondary>Contacts</TitleSecondary>
//           <TitleThird>Find contact name by number:</TitleThird>
//           <Filter
//             onChange={this.onChangeFilter}
//             value={filter}
//             type="text"
//             name="filter"
//             placeholder="Find contact name"
//           />
//           <ContactList>
//             {filtredContacts.map(contact => {
//               return (
//                 <ContactItem key={contact.id}>
//                   {contact.name}:{contact.number}
//                   <DeleteButton
//                     onClick={() => this.onDeleteContact(contact.id)}
//                   >
//                     Delete
//                   </DeleteButton>
//                 </ContactItem>
//               );
//             })}
//           </ContactList>
//         </Box>
//       </>
//     );
//   }
// }
