import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const Label = styled.label`
  font-size: 26px;
  margin: 0 5px;
`;

export const Input = styled.input`
  width: 500px;
  font-size: 18px;
  margin: 20px 5px;
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  font-size: 16px;
  margin-right: 10px;
  background-color: #4caf50;
  color: white;
  margin: 10px 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2e6d31;
  }
`;
