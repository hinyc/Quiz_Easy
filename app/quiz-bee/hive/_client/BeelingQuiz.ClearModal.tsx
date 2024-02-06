import { BoxShadow } from '@/common/CommonStyle';
import { COLOR } from '@/common/constant/color';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

export const ClearModalShowTime = 800;
export default function ClearModal() {
  return (
    <ClearModalStyle>
      <div className="modal">Bee-rilliant!</div>
    </ClearModalStyle>
  );
}

const showAnimation = keyframes`
0%{opacity:0;}
25%{
  opacity:0.7;
}
50%{
  opacity:1;
  transform:translate(-50%, -50%) scale(1.1);
}
65%{
  opacity: 1;
}
100%{
  opacity:0;
  transform:translate(-50%, -50%) scale(0.7);
}
`;
const ClearModalStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 150px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${showAnimation} ${ClearModalShowTime}ms;
  .modal {
    padding: 20px 16px;
    border-radius: 12px;
    background-color: #ffffff;
    font-size: 42px;
    font-weight: 700;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    color: ${COLOR.orange};
    ${BoxShadow}
  }
`;
