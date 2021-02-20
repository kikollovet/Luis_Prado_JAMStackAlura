import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const LeftImage = styled.div`
  width: 214.97px;
  height: 280.31px;
  top: 0px;
  background: url(/images/plantaCel.png);
  background-repeat: no-repeat;
  align-items: left;
  align-self: flex-start;
  background-color: transparent;
  ${breakpointsMedia({
    md: css`
      width: 479.81px;
      height: 595px;
      top: 0px;
      background: url(/images/planta.png);
      background-repeat: no-repeat;
      background-size: 500px;
      /* background-size: 479.81px 719.39px; */
      /* max-width: 768px; */
      /* background-size: contain; */
      /* position:absolute; */
    `,
  })}
`;

const RightImage = styled.div`
  width: 214.97px;
  height: 280.31px;
  background: url(/images/plantaCel.png);
  background-repeat: no-repeat;
  transform: rotate(180deg);
  align-self: flex-end;
  background-color: transparent;

  ${breakpointsMedia({
    md: css`
      width: 479.81px;
      height: 595px;
      background: url(/images/planta.png);
      background-repeat: no-repeat;
      transform: rotate(180deg);
      background-size: 500px;
    `,
  })}
`;

const CapaWrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ${breakpointsMedia({
    md: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      /* flex: none; */
    `,
  })}
`;

const NomeCapa = styled.span`
  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  text-transform: uppercase;

  ${breakpointsMedia({
    md: css`
      font-size: 90px;
      line-height: 108px;
    `,
  })}
`;

const NomePortfolio = styled.span`
  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  text-transform: capitalize;

  ${breakpointsMedia({
    md: css`
      font-weight: 300;
      font-size: 48px;
      line-height: 58px;
      flex-direction: column;
    `,
  })}
`;

const NomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  align-self:center;

  /* @media only screen and (min-width: 768px){
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    }*/

  ${breakpointsMedia({
    md: css`
      position: absolute;
      /* top: 50%; */
      left: 50%;
      transform: translate(-50%, 0%);
      width: fit-content;
      z-index:4;
    `,
  })}
`;

export default function Capa() {
  return (
    <CapaWrapper>
      <LeftImage />
      <NomeWrapper>
        <NomeCapa>Luis Prado</NomeCapa>
        <NomePortfolio>Portfólio</NomePortfolio>
      </NomeWrapper>
      <RightImage />
    </CapaWrapper>
  );
}
