import React from 'react';
import styled, { css } from 'styled-components';
// import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const BoxForm = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */

  align-self:center;
  background-color: white;
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
  width: 100%;
  padding: 15px;
  ${breakpointsMedia({
    md: css`
      width: 500px;
    `,
  })}
  /* flex-grow: inherit; */
`;

const ButtonClose = styled.button`
  align-self:flex-end;
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  background-color: transparent;
  border-radius: 50%;
  margin-top: 5px;
  /* margin-right: 5px; */
  font-weight: bold;
  outline: none;
  position: relative;
  top: 0;
  left: 30px;
  ${breakpointsMedia({
    md: css`
      left: 15px;
    `,
  })}
`;

const ButtonSend = styled.button`
  align-self:flex-end;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  margin-left: 5px;
  font-weight: bold;
  outline: none;
`;

// eslint-disable-next-line react/prop-types
function FormContent({ onClose }) {
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // eslint-disable-next-line max-len
  const isFormValid = userInfo.name.length > 0 && validateEmail(userInfo.email) && userInfo.message.length > 0;

  return (
    <FormWrapper>
      <ButtonClose type="button" onClick={() => onClose()}>x</ButtonClose>
      <FormInside>
        <Text style={{ alignSelf: 'center' }} variant="title" tag="h1">Envie sua mensagem</Text>
        <Text variant="navLink" tag="span">Seu nome</Text>
        <div>
          <TextField name="name" placeholder="Seu nome" value={userInfo.name} onChange={handleChange} />
        </div>
        <Text variant="navLink" tag="span">Seu email</Text>
        <div>
          <TextField name="email" placeholder="E-mail" value={userInfo.email} onChange={handleChange} />
        </div>
        <Text variant="navLink" tag="span">Sua mensagem</Text>
        <div>
          <TextField name="message" placeholder="Sua mensagem" value={userInfo.message} onChange={handleChange} />
        </div>
        <Text style={{ alignSelf: 'center' }} variant="navLink" tag="span">
          Enviar
          {isFormValid && (
            <ButtonSend type="submit">
              &gt;
            </ButtonSend>
          )}
        </Text>
      </FormInside>
    </FormWrapper>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormMessage({ propsDoModal, onClose }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BoxForm {...propsDoModal}>
      <FormContent onClose={onClose} />
    </BoxForm>
  );
}
