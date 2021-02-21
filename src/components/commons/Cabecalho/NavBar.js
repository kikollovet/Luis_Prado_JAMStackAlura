import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStylesVariantMap } from '../../foundation/Text';

// eslint-disable-next-line import/prefer-default-export
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  ${TextStylesVariantMap.navLink}
  a{
    margin: 8px;
    color: ${({ theme }) => theme.colors.preto};
    text-decoration: none;
    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.preto};
    }
  }
  text-align: center;

  ${breakpointsMedia({
    md: css`
      ${TextStylesVariantMap.navLinkMD}
      a{
        &:hover,
        &:focus {
          font-weight: 500;
          color: ${({ theme }) => theme.colors.preto};
        }
      }
    `,
  })}
`;
