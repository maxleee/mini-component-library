/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--padding': '4px',
    '--height': '24px',
  },
  medium: {
    '--padding': '0px',
    '--height': '12px',
  },
  small: {
    '--padding': '0px',
    '--height': '8px',
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgressWrapper role='progressbar' style={styles} aria-valuemax={100} aria-valuenow={value}>
      <ValueMask>
        <ValueBar value={value}></ValueBar>
      </ValueMask>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const ValueBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value}%;
  height: 100%;
`;

const ValueMask = styled.div`
  width: 100%;
  height: 100%;
  clip-path: inset(0 round 4px);
`;

export default ProgressBar;
