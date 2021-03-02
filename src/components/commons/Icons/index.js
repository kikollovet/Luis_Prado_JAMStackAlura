/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { MessageRoundedAdd } from '@styled-icons/boxicons-regular';

export const BlackMessageRoundedAdd = styled(MessageRoundedAdd)`
  color: ${({ theme }) => theme.colors.begeEscuro};
  width: 30px;
  height: 30px;
`;
