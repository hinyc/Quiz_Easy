'use client';
import React from 'react';
import styled from '@emotion/styled';
import NavButton from './navButton';
import { LINK } from '@/app/common/link';

export default function Nav() {
  return (
    <NavStyled>
      {NavButtonList.map((item, index) => {
        return <NavButton key={index} {...item} />;
      })}
    </NavStyled>
  );
}

const NavButtonList = [
  { icon: '/assets/images/feature_miner.png', name: 'Quiz Hub', link: LINK.quizHub },
  { icon: '/assets/images/feature_miner.png', name: 'Honey Crown', link: LINK.honeyCrown },
  { icon: '/assets/images/feature_miner.png', name: 'Bee Hive', link: LINK.beeHive },
  { icon: '/assets/images/feature_miner.png', name: 'HC EX', link: LINK.exchange },
  { icon: '/assets/images/feature_miner.png', name: 'Setting', link: LINK.setting },
];

export const NavStyled = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
`;
