import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectElement value={value} onChange={onChange}>
        {children}
      </SelectElement>
      <Icon id='chevron-down' size='20' strokeWidth='2' />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 16px;
  width: fit-content;
  :focus-within {
    outline: -webkit-focus-ring-color 1px solid;
  }
  :hover {
    select {
      color: ${COLORS.black};
    }
    svg {
      color: ${COLORS.black};
    }
  }
`;

const SelectElement = styled.select`
  padding: 12px 16px;
  border: none;
  background-color: transparent;
  transition: color 0.2s;
  appearance: none;
  color: inherit;
  :focus-visible {
    outline: none;
  }
`;
export default Select;
