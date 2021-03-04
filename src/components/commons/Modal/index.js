import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
// import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  background: rgba(0,0,0,0);
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
  width: 95%;
  align-self: center;
  ${breakpointsMedia({
    md: css`
      width: 550px;
      align-self: center;
    `,
  })}
`;

const ChildrenWrapperMotion = motion(ChildrenWrapper);
function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >

      {isOpen && <LockScroll />}
      <ChildrenWrapperMotion
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
        })}
      </ChildrenWrapperMotion>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
