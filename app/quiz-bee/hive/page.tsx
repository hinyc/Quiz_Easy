'use client';
import styled from '@emotion/styled';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import BeelingQuiz from './_client/BeelingQuiz';
import BuzzRecord from './_client/BuzzRecord';
import RankSwiper from './_client/RankSwiper';

export default function HivePage() {
  const session = useSession();
  useEffect(() => {
    if (session.status === 'authenticated') {
      localStorage.setItem('session', JSON.stringify(session));
    }
  }, [session]);

  return (
    <HivePageStyle>
      {/* //layout으로 뺄까 ?..ㄱ */}
      <RankSwiper />
      <BuzzRecord />
      <BeelingQuiz />
    </HivePageStyle>
  );
}

const HivePageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// navigation 은 홈에서만 보이도록 할까 ?
// navigation 를 열고 닫을 수 있도록 할까 ?
