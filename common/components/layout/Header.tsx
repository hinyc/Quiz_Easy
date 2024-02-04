'use client';
import React from 'react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import { BoxShadow, MinMaxWidth } from '@/common/CommonStyle';
import { COLOR } from '@/common/constant/color';

/**
 * @height 90px
 */
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
  padding: 40px 12px 20px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 90px;
  font-size: 16px;
  ${MinMaxWidth}
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
