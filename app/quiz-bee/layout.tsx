import Nav from '@/components/layout/nav';
import React from 'react';

export default function QuizBeeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Nav />
    </>
  );
}
