'use client';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

export default function LoadingIndicator() {
  return (
    <LoadingIndicatorStyle>
      {' '}
      <div className="area">
        <div className="rect1 item"></div>
        <div className="rect2 item"></div>
        <div className="rect3 item"></div>
        <div className="rect4 item"></div>
        <div className="rect5 item"></div>
      </div>
    </LoadingIndicatorStyle>
  );
}

const changeScale = keyframes`
  0%, 40%, 100% {
      transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
    }
`;

const LoadingIndicatorStyle = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px auto;
  position: relative;
  .area {
    width: 40px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 20px);
    .item {
      background-color: blue;
      height: 100%;
      width: 6px;
      float: left;
      margin-left: 1px;
      margin-right: 1px;
      transform: scaleY(0.4);
      animation: ${changeScale} 1.2s infinite ease-in-out;
      &.rect2 {
        animation-delay: 0.1s;
      }

      &.rect3 {
        animation-delay: 0.2s;
      }

      &.rect4 {
        animation-delay: 0.3s;
      }

      &.rect5 {
        animation-delay: 0.4s;
      }
    }
  }
`;
