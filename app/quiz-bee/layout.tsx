import Header from '@/common/components/layout/Header';
import Nav from '@/common/components/layout/Nav';
import React from 'react';

export default function QuizBeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
}
