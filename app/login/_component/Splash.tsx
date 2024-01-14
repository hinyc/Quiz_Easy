'use client';
import LoadingIndicator from '@/components/loadingIndicator';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface SplashProps {
  localSession?: any;
}
export default function Splash({ localSession }: SplashProps) {
  const { status } = useSession(localSession ?? null);
  const router = useRouter();

  // 세션 정보가 존재하는 경우 useSession() 함수에 전달합니다.
  // if (storedSession) {
  //   const session = JSON.parse(storedSession);
  //   useSession(session);
  // }
  //loading 상태 관리 필요
  //스플레쉬 화면 보이는동안 세션체크 하고 로그인 되어있으면 메인페이지로 이동
  useEffect(() => {
    if (status === 'authenticated') {
      setTimeout(() => {
        router.push('/quiz-bee/hive');
      }, 1000);
    }
  }, [status]);
  return (
    <SplashStyle>
      <LoadingIndicator />
    </SplashStyle>
  );
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  60%{
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    display: none;
  }
`;

const SplashStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 2s linear forwards;
`;
