import {
  Button,
  ContactForm,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';

const ContactFormComponent = ({ onSubmit, name, number, onChangeInput }) => (
  <ContactForm onSubmit={onSubmit}>
    <Label>Name</Label>
    <Input
      value={name}
      onChange={onChangeInput}
      type="text"
      name="name"
      required
      placeholder="Add contact name"
    />
    <Label>Number</Label>
    <Input
      value={number}
      onChange={onChangeInput}
      type="tel"
      name="number"
      required
      placeholder="Add contact number"
    />
    <Button type="submit">Add Contact</Button>
  </ContactForm>
);

export default ContactFormComponent;
