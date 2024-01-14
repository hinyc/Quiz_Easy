'use client';
import styled from '@emotion/styled';
import CustomRouter from '../components/customRouter';
import LoadingIndicator from '../components/loadingIndicator';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  //로그인 시 hive로 이동
  //로그아웃 시 login으로 이동
  //로딩화며 포함 ?
  //auth check
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/quiz-bee/hive');
    }
    if (status === 'unauthenticated') {
      // 기타 스토리지 초기화
    }
  }, [status]);

  return (
    <HomeStyle>
      <LoadingIndicator />
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
