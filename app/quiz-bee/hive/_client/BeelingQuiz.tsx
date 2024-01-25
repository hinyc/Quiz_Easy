'use client';
import styled from '@emotion/styled';
import React, { use } from 'react';

export default function BeelingQuiz() {
  return (
    <BeelingQuizStyle>
      <h2>BelingQuiz</h2>
    </BeelingQuizStyle>
  );
}

const BeelingQuizStyle = styled.div`
  padding: 12px;
  width: 100%;
  height: 400px;
  background-color: yellow;
`;
