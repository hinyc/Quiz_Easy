import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '@/common/constant/color';
import { BoxShadow } from '@/common/CommonStyle';

export default function AllClearModal() {
  useEffect(() => {}, []);

  return <AllClearModalStyle>모든 문제를 풀었어요!</AllClearModalStyle>;
}

const AllClearModalStyle = styled.div`
  position: absolute;
  padding: 20px 16px;
  background-color: ${COLOR.white};
  border-radius: 12px;
  ${BoxShadow}
`;
