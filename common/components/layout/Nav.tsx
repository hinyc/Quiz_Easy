'use client';
import React from 'react';
import styled from '@emotion/styled';
import NavButton from './Nav.Button';
import { ROUTE } from '@/app/common/link';

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
  { icon: '/assets/images/feature_miner.png', name: 'Quiz Hub', link: ROUTE.quizHub },
  { icon: '/assets/images/feature_miner.png', name: 'Honey Crown', link: ROUTE.honeyCrown },
  { icon: '/assets/images/feature_miner.png', name: 'Bee Hive', link: ROUTE.beeHive },
  { icon: '/assets/images/feature_miner.png', name: 'HC EX', link: ROUTE.exchange },
  { icon: '/assets/images/feature_miner.png', name: 'Setting', link: ROUTE.setting },
];

export const NavStyled = styled.div`
  margin-top: 12px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: purple;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
`;
