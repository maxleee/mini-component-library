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
      <Presentational>
        {displayedValue}
        <Icon id='chevron-down' size={24} strokeWidth={2} />
      </Presentational>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectElement = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Presentational = styled.div`
  color: ${COLORS.gray700};
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  ${SelectElement}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${SelectElement}:hover + & {
    color: ${COLORS.black};
  }
`;
export default Select;
