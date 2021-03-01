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
  flex-grow: inherit;


`;

const ButtonClose = styled.button`
  align-self:flex-end;
  border: 0;
  background-color: transparent;
`;

function FormContent() {
  return (
    <FormWrapper>
      <ButtonClose>X</ButtonClose>
      <FormInside>
        <Text style={{ alignSelf: 'center' }} variant="title" tag="h1">Envie sua mensagem</Text>
        <Text variant="navLink" tag="span">Seu nome</Text>
        <div>
          <TextField name="name" placeholder="Seu nome" value="" onChange={() => {}} />
        </div>
        <Text variant="navLink" tag="span">Seu email</Text>
        <TextField name="email" placeholder="E-mail" value="" onChange={() => {}} />
        <Text variant="navLink" tag="span">Sua mensagem</Text>
        <TextField name="message" placeholder="Sua mensagem" value="" onChange={() => {}} />
        <Text style={{ alignSelf: 'center' }} variant="navLink" tag="span">
          Enviar
          <button type="submit">
            &gt;
          </button>
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
