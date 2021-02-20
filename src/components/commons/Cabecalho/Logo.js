/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const Logo = styled.div`
  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  background-color: #E9C46A;
  padding: 7px 7px;
  margin-left: 8px;

  ${breakpointsMedia({
    md: css`
      font-size: 38px;
      line-height: 46px;
    `,
  })}
`;
