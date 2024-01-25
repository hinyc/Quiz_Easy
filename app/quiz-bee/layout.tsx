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
  .children {
    margin-top: 90px;
    padding: 16px;
    height: calc(100vh - 150px);
  }
`;
