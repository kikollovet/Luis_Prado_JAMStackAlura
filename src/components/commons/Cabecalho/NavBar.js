import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  a{
    margin: 8px;
    color: #070C0E;
    text-decoration: none;
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }
  }
  text-align: center;

  ${breakpointsMedia({
    md: css`
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 34px;
      a{
        &:hover,
        &:focus {
          font-weight: 500;
          color: #070C0E;
        }
      }
    `,
  })}
`;
