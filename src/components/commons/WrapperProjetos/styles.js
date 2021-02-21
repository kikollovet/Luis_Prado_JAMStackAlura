import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStylesVariantMap } from '../../foundation/Text';

export const WrapperProjetosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;

  ${breakpointsMedia({
    md: css`
      padding-top: 64px;
      padding-bottom: 64px;
    `,
  })}
`;

export const SectionTitle = styled.span`
  ${TextStylesVariantMap.title}
  text-align: center;
  padding-bottom: 32px;

  ${breakpointsMedia({
    md: css`
      ${TextStylesVariantMap.titleMD}
      padding-bottom: 64px;
    `,
  })}
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${breakpointsMedia({
    md: css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
    `,
  })}
`;
