'use client';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import LoadingIndicator from '../../../components/loadingIndicator';

export default function Splash() {
  //loading 상태 관리 필요

  return (
    <SplashStyle>
      <LoadingIndicator />
    </SplashStyle>
  );
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

const SplashStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 2s linear forwards;
`;
