import React from 'react';
import styled, { css } from 'styled-components';
// import Box from '../../foundation/layout/Box';
import { Lottie } from '@crello/react-lottie';
import Text from '../../foundation/Text';
import TextField from '../../forms/TextField';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

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
  /* border: 1px solid ${({ theme }) => theme.colors.begeEscuro}; */
  border: none;
  background-color: transparent;
  /* border-radius: 50%; */
  margin-top: 5px;
  /* margin-right: 5px; */
  font-weight: bold;
  outline: none;
  position: relative;
  top: 0;
  left: 40px;
  ${breakpointsMedia({
    md: css`
      left: 25px;
    `,
  })}
`;

const ButtonSend = styled.button`
  /* align-self:flex-end; */
  background-color: transparent;
  border: none;
  /* border-radius: 50%; */
  /* border: 1px solid ${({ theme }) => theme.colors.begeEscuro}; */
  margin-left: 5px;
  font-weight: bold;
  outline: none;
`;

const MessageArea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  padding: 12px 16px;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  outline: 0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const BoxLottie = styled.div`
  display: flex;
  justify-content: center;
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

// eslint-disable-next-line react/prop-types
function FormContent({ onClose }) {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [messageInfo, setMessageInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setMessageInfo({
      ...messageInfo,
      [fieldName]: event.target.value,
    });
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // eslint-disable-next-line max-len
  const isFormValid = messageInfo.name.length > 0 && validateEmail(messageInfo.email) && messageInfo.message.length > 0;

  return (
    <FormWrapper>
      <ButtonClose type="button" onClick={() => onClose()}>
        <img src="/images/closeForm.png" alt="Fechar formulário" />
      </ButtonClose>
      <FormInside
        onSubmit={(event) => {
          event.preventDefault();
          // eslint-disable-next-line no-console
          setIsFormSubmited(true);

          // Data Transfer Object
          const messageDTO = {
            name: messageInfo.name,
            email: messageInfo.email,
            message: messageInfo.message,
          };

          fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageDTO),
          })
            .then((respostaDoServidor) => {
              if (respostaDoServidor.ok) {
                return respostaDoServidor.json();
              }

              throw new Error('Não foi possível enviar sua mensagem :(');
            })
            .then((respostaConvertidaEmObjeto) => {
              setSubmissionStatus(formStates.DONE);
              // eslint-disable-next-line no-console
              console.log(respostaConvertidaEmObjeto);
            })
            .catch((error) => {
              setSubmissionStatus(formStates.ERROR);
              // eslint-disable-next-line no-console
              console.error(error);
            });
        }}
      >
        <Text style={{ alignSelf: 'center' }} variant="title" tag="h1">Envie sua mensagem</Text>
        <Text variant="navLink" tag="span">Seu nome</Text>
        <div>
          <TextField name="name" placeholder="Seu nome" value={messageInfo.name} onChange={handleChange} />
        </div>
        <Text variant="navLink" tag="span">Seu email</Text>
        <div>
          <TextField name="email" placeholder="E-mail" value={messageInfo.email} onChange={handleChange} />
        </div>
        <Text variant="navLink" tag="span">Sua mensagem</Text>
        <div>
          <MessageArea rows="4" name="message" placeholder="Sua mensagem" value={messageInfo.message} onChange={handleChange} />
        </div>
        <div style={{
          height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        >
          <Text style={{ alignSelf: 'center' }} variant="navLink" tag="span">
            Enviar
          </Text>
          {isFormValid && (
            <ButtonSend type="submit">
              <img src="/images/sendForm.png" alt="Enviar mensagem" />
            </ButtonSend>
          )}
        </div>
        {isFormSubmited && submissionStatus === formStates.DONE && (
        <BoxLottie>
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </BoxLottie>
        )}

        {isFormSubmited && submissionStatus === formStates.ERROR && (
        <BoxLottie>
          <Lottie
            width="100px"
            height="100px"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </BoxLottie>
        )}
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
