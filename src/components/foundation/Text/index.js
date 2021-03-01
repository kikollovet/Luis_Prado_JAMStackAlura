import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const navLink = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.navLink.fontSize};
    font-weight: ${theme.typographyVariants.navLink.fontWeight};
    line-height: ${theme.typographyVariants.navLink.lineHeight};
  `}
`;

const navLinkMD = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.navLinkMD.fontSize};
    font-weight: ${theme.typographyVariants.navLinkMD.fontWeight};
    line-height: ${theme.typographyVariants.navLinkMD.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const titleMD = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleMD.fontSize};
    font-weight: ${theme.typographyVariants.titleMD.fontWeight};
    line-height: ${theme.typographyVariants.titleMD.lineHeight};
  `}
`;

const titleProject = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleProject.fontSize};
    font-weight: ${theme.typographyVariants.titleProject.fontWeight};
    line-height: ${theme.typographyVariants.titleProject.lineHeight};
  `}
`;

const titleProjectMD = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleProjectMD.fontSize};
    font-weight: ${theme.typographyVariants.titleProjectMD.fontWeight};
    line-height: ${theme.typographyVariants.titleProjectMD.lineHeight};
  `}
`;

// eslint-disable-next-line import/prefer-default-export
export const TextStylesVariantMap = {
  navLink,
  navLinkMD,
  title,
  titleMD,
  titleProject,
  titleProjectMD,
};

const TextBase = styled.span`
     ${({ variant }) => TextStylesVariantMap[variant]}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};

Text.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  variant: PropTypes.string,
};
