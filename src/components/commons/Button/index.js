import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  background-color: transparent;
  margin-top: 5px;
  margin-right: 5px;
  font-weight: bold;
  outline: none;
`;

export default Button;
