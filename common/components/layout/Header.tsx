'use client';
import React from 'react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import { BoxShadow, MinMaxWidth } from '@/common/CommonStyle';
import { COLOR } from '@/common/constant/color';
import RankSwiper from './RankSwiper';

/**
 * @height 90px
 */
export default function Header() {
  const { data: session } = useSession();

  return (
    <HeaderContainer>
      <div className="user__info">
        <div className="level">lv.1</div>
        <div className="nickname">{session?.user.email}</div>
      </div>
      <RankSwiper />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  padding: 30px 12px 0px;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${MinMaxWidth}
  .user__info {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 16px;
    .level {
      height: fit-content;
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
      height: fit-content;
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
  }
`;
