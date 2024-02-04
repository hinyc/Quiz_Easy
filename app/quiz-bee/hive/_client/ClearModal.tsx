import styled from '@emotion/styled';
import React from 'react';

export default function ClearModal() {
  return (
    <ClearModalStyle>
      <div className="modal">clear</div>
    </ClearModalStyle>
  );
}

const ClearModalStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    font-size: 40px;
  }
`;
