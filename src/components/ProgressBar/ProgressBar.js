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
  return <Progress style={styles} max={100} value={value}></Progress>;
};

const Progress = styled('progress')`
  &[value] {
    -webkit-appearance: none;
    appearance: none;

    height: var(--height);

    ::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      border-radius: 8px;
      box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
      padding: var(--padding);
    }

    ::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: 4px 0px 0px 4px;
    }
  }
`;

export default ProgressBar;
