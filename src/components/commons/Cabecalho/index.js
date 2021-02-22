import React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';
import { Logo } from './Logo';

const CabecalhoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.begeClaro};
  /* position: sticky;
  top: 0; */
`;

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <Logo>{'<ME />'}</Logo>
      <NavBar>
        <a href="teste">Sobre Mim</a>
        <a href="teste">Contato</a>
      </NavBar>
    </CabecalhoWrapper>
  );
}
