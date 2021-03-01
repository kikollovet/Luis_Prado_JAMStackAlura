import React from 'react';
import styled from 'styled-components';
// import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';

const BoxForm = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */

  align-self:center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 600px; */
`;

const FormInside = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 500px;
  padding: 15px;
  /* flex-grow: inherit; */
`;

const ButtonClose = styled.button`
  align-self:flex-end;
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  background-color: transparent;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 5px;
  font-weight: bold;
  outline: none;
`;

const ButtonSend = styled.button`
  align-self:flex-end;
  border: 0;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  margin-left: 5px;
  font-weight: bold;
  outline: none;
`;

function FormContent() {
  return (
    <FormWrapper>
      <ButtonClose type="button">x</ButtonClose>
      <FormInside>
        <Text style={{ alignSelf: 'center' }} variant="title" tag="h1">Envie sua mensagem</Text>
        <Text variant="navLink" tag="span">Seu nome</Text>
        <div>
          <TextField name="name" placeholder="Seu nome" value="" onChange={() => {}} />
        </div>
        <Text variant="navLink" tag="span">Seu email</Text>
        <div>
          <TextField name="email" placeholder="E-mail" value="" onChange={() => {}} />
        </div>
        <Text variant="navLink" tag="span">Sua mensagem</Text>
        <div>
          <TextField name="message" placeholder="Sua mensagem" value="" onChange={() => {}} />
        </div>
        <Text style={{ alignSelf: 'center' }} variant="navLink" tag="span">
          Enviar
          <ButtonSend type="submit">
            &gt;
          </ButtonSend>
        </Text>
      </FormInside>
    </FormWrapper>
  );
}

export default function FormMessage() {
  return (
    <BoxForm>
      <FormContent />
    </BoxForm>
  );
}
