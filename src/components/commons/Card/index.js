import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStylesVariantMap } from '../../foundation/Text';

const CardWrapper = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 1px solid #E9C46A;
  box-sizing: border-box;
  /* padding: 10px; */
  margin: 10px;
  order: 1;

  ${breakpointsMedia({
    md: css`
      order: 0;
    `,
  })}
`;

const CardTitle = styled.span`
  ${TextStylesVariantMap.titleProject}
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 279px;
  word-break: break-word;

  ${breakpointsMedia({
    md: css`
      ${TextStylesVariantMap.titleProjectMD}
      padding-top: 41px;
      padding-bottom: 41px;
      width: 277px;
    `,
  })}
`;

const CardImage = styled.img`
  width: 289px;
  height: 177px;

  ${breakpointsMedia({
    md: css`
      width: 287px;
      height: 390px;
    `,
  })}
`;

// eslint-disable-next-line no-unused-vars
export default function Card({ imageSrc, children, ...props }) {
  return (
    <CardWrapper>
      <CardImage src={imageSrc} />
      <CardTitle>
        {children}
      </CardTitle>
    </CardWrapper>
  );
}

Card.defaultProps = {
  imageSrc: 'https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png',
  children: 'Precisa ser passado o título do cartão',
};

Card.propTypes = {
  imageSrc: PropTypes.string,
  children: PropTypes.node,
};
