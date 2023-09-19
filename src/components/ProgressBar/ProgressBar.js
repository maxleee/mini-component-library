/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': '4px',
    '--height': '24px',
    '--border-radius': '8px',
  },
  medium: {
    '--padding': '0px',
    '--height': '12px',
    '--border-radius': '4px',
  },
  small: {
    '--padding': '0px',
    '--height': '8px',
    '--border-radius': '4px',
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  return (
    <ProgressWrapper role='progressbar' style={styles} aria-valuemax={100} aria-valuenow={value}>
      <ValueMask>
        <ValueBar style={{ '--value': `${value}%` }}></ValueBar>
      </ValueMask>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ValueBar = styled.div`
  height: var(--height);
  background-color: ${COLORS.primary};
  width: var(--value);
  border-radius: 4px 0px 0px 4px;
`;

const ValueMask = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

export default ProgressBar;
