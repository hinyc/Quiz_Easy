'use client';
import styled from '@emotion/styled';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import BeelingQuiz from './_component/BeelingQuiz';
import BuzzRecord from './_component/BuzzRecord';
import RankSwiper from '../../../common/components/layout/RankSwiper';
import CustomStyledComponent from '@/app/common/components/style';

export default function HivePage() {
  const session = useSession();
  useEffect(() => {
    if (session.status === 'authenticated') {
      localStorage.setItem('session', JSON.stringify(session));
    }
  }, [session]);

  return (
    <CustomStyledComponent.PageStyle>
      <h1>
        <span>퀴즈비</span> 하이브
      </h1>
      {/* //layout으로 뺄까 ?..ㄱ */}
      {/* <RankSwiper /> */}
      <BuzzRecord />

      <BeelingQuiz />
    </CustomStyledComponent.PageStyle>
  );
}

// navigation 은 홈에서만 보이도록 할까 ?
// navigation 를 열고 닫을 수 있도록 할까 ?
