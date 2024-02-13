import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@/common/constant/color';
import { BoxShadow } from '@/common/CommonStyle';
import BasicButton from '@/common/components/BasicButton';

export default function AllClearModal() {
  useEffect(() => {}, []);
  // 20 문제마다 광고보기
  return (
    <AllClearModalStyle>
      <h2>오늘 모든 문제를 풀었어요!</h2>
      <BasicButton>광고 보고 더풀러가기</BasicButton>
      <BasicButton>광고제거 하기</BasicButton>
    </AllClearModalStyle>
  );
}

const AllClearModalStyle = styled.div`
  width: 95%;
  height: calc(100% - 24px);
  position: absolute;
  padding: 24px;
  background-color: ${COLOR.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  ${BoxShadow}
`;
