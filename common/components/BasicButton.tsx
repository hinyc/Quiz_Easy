import styled from '@emotion/styled';
import React from 'react';
import { COLOR } from '../constant/color';

interface BasicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function BasicButton(props: BasicButtonProps) {
  const { children, onClick } = props;
  return <BasicButtonStyle onClick={onClick}>{children}</BasicButtonStyle>;
}

const BasicButtonStyle = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: ${COLOR.orange};
  color: #000000;
  font-size: 16px;
  font-weight: 700;
`;
