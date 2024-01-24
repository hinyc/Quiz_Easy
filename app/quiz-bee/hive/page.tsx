'use client';
import styled from '@emotion/styled';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import BeelingQuiz from './_client/BeelingQuiz';
import BuzzRecord from './_client/BuzzRecord';

export default function HivePage() {
  const session = useSession();
  useEffect(() => {
    if (session.status === 'authenticated') {
      localStorage.setItem('session', JSON.stringify(session));
    }
  }, [session]);

  const _onClickSignOut = () => {
    localStorage.removeItem('session');
    signOut({ callbackUrl: '/login' });
  };

  return (
    <HivePageStyle>
      <BuzzRecord />
      <BeelingQuiz />
      {/*  */}
      HivePage
      <button onClick={_onClickSignOut}>signOut</button>
    </HivePageStyle>
  );
}

const HivePageStyle = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
`;

// navigation 은 홈에서만 보이도록 할까 ?
// navigation 를 열고 닫을 수 있도록 할까 ?
