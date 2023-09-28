import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const SIZES = {
    large: {
      '--font-size': '1.125rem',
      iconSize: 24,
      '--border-width': '2px',
      '--padding': '8px',
    },
    small: {
      '--font-size': '0.875rem',
      iconSize: 16,
      '--border-width': '1px',
      '--padding': '4px',
    },
  };

  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <>
      <LabelWrapper for={label} style={{ ...styles, '--width': width + 'px' }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon size={styles.iconSize} id={icon} />
        <Input type='text' id={label} placeholder={placeholder}></Input>
      </LabelWrapper>
    </>
  );
};

const LabelWrapper = styled.label`
  display: flex;
  gap: 8px;
  border-bottom: var(--border-width) solid ${COLORS.black};
  align-items: center;
  padding-block: var(--padding);
  width: var(--width);
  color: ${COLORS.gray700};
  transition: color 0.2s ease;
  :focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
  :hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  :focus-visible {
    outline: none;
  }
`;

export default IconInput;
