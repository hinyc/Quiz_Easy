'use client';
import styled from '@emotion/styled';
import React from 'react';

interface NavButtonProps {
  children: React.ReactNode;
}
export default function ButtonEffect({ children }: NavButtonProps) {
  return <NavButtonStyled>{children}</NavButtonStyled>;
}

const NavButtonStyled = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  outline: none;
  border: none;
  transition: transform 0.2s ease-in-out;
  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }
`;
