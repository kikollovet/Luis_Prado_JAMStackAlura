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
  border: 1px solid ${({ theme }) => theme.colors.begeEscuro};
  box-sizing: border-box;
  /* padding: 10px; */
  margin: 10px;

  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      align-items: flex-start;
    `,
  })}
`;

const CardTitle = styled.span`
  ${TextStylesVariantMap.titleProject}
  /* text-align: center; */
  padding-top: 20px;
  padding-bottom: 20px;
  word-break: break-word;
  width: 279px;
  text-align: center;

  ${breakpointsMedia({
    md: css`
      ${TextStylesVariantMap.titleProjectMD}
      padding-top: 41px;
      padding-bottom: 41px;
      padding-right: 20px;
      padding-left: 20px;
      width: 240px;
    `,
  })}
`;

const CardImage = styled.div`
  width: 289px;
  height: 177px;
  background: url(${({ src }) => src});
  background-size:cover;

  ${breakpointsMedia({
    md: css`
      width: 593px;
      height: 320px;
    `,
  })}
`;

const TextoDestaque = styled.div`
  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  color:black;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.preto};
  top: 10px;
  left: 10px;
  width: min-content;
  padding-left: 10px;
  padding-right: 10px;

  ${breakpointsMedia({
    md: css`
      font-weight: 400;
      font-size: 38px;
      line-height: 46px;
      top: 25px;
      left: 25px;
      width: min-content;
      padding-left: 10px;
      padding-right: 10px;
    `,
  })}
`;

const CardTextWrapper = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const CardDescription = styled.span`
  font-family: 'Fira Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  width: 240px;
  word-break: break-word;
  /* margin-bottom: 20px; */
  text-align: center;

  ${breakpointsMedia({
    md: css`
      font-size: 18px;
      line-height: 22px;
      &::before {
        content: "${(props) => props.description}"
      }
    `,
  })}
`;
export default function CardDestaque({ imageSrc, children, description }) {
  return (
    <CardWrapper>
      <CardImage src={imageSrc}>
        <TextoDestaque>Destaque</TextoDestaque>
      </CardImage>
      <CardTextWrapper>
        <CardTitle>
          {children}
        </CardTitle>
        <CardDescription description={description} />
      </CardTextWrapper>
    </CardWrapper>
  );
}

CardDestaque.propTypes = {
  imageSrc: PropTypes.string,
  children: PropTypes.node,
  description: PropTypes.node,
};

CardDestaque.defaultProps = {
  imageSrc: 'https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png',
  children: 'Precisa ser passado o título do cartão',
  description: 'Seria legal colocar uma descrição',
};
