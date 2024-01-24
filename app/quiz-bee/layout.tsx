import Header from '@/components/layout/Header';
import Nav from '@/components/layout/Nav';
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
