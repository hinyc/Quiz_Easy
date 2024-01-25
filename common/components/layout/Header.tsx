'use client';
import React from 'react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import { BoxShadow } from '@/common/CommonStyle';
import { COLOR } from '@/common/constant/color';

export default function Header() {
  const { data: session } = useSession();

  return (
    <HeaderContainer>
      <div className="class">lv.1</div>
      <div className="nickname">{session?.user.email}</div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  margin: 16px 0;
  padding-left: 12px;
  padding-bottom: 6px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 40px;
  font-size: 16px;

  .class {
    margin-right: 12px;
    padding: 3px 12px 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    border-radius: 4px;
    ${BoxShadow}
  }

  .nickname {
    position: relative;
    ::after {
      content: '';
      height: 8px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: ${COLOR.gold};
      opacity: 0.5;
      z-index: -1;
    }
  }
`;
