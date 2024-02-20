'use client';
import Header from '@/common/components/layout/Header';
import Nav from '@/common/components/layout/Nav';
import styled from '@emotion/styled';
import React from 'react';

export default function QuizBeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuizBeeLayoutStyle>
      <Header />
      <div className="children">{children}</div>

      <Nav />
    </QuizBeeLayoutStyle>
  );
}

const QuizBeeLayoutStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  overflow-y: scroll;
  .children {
    height: calc(100% - 135px);
    padding: 10px 16px 16px;
    margin-bottom: 60px;
  }
`;
