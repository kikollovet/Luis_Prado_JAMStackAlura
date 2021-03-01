import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
// import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  background: rgba(0,0,0,0.1);
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* align-self: inherit; */
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 100;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  ${breakpointsMedia({
    md: css`
      width: 550px;
      align-self: center;
    `,
  })}
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        // isOpen = false;
        if (!isSafeArea) {
          onClose();
        }
      }}
    >

      {isOpen && <LockScroll />}
      <ChildrenWrapper>
        {children({
          'data-modal-safe-area': 'true',
        })}
      </ChildrenWrapper>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
