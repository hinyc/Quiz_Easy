'use client';
import React from 'react';
import styled from '@emotion/styled';
import NavButton from './navButton';

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
  { icon: '/assets/images/feature_miner.png', name: 'Quiz Hub', link: 'hub' },
  { icon: '/assets/images/feature_miner.png', name: 'Honey Crown', link: 'crown' },
  { icon: '/assets/images/feature_miner.png', name: 'Bee Hive', link: 'hive' },
  { icon: '/assets/images/feature_miner.png', name: 'HC EX', link: 'exchange' },
  { icon: '/assets/images/feature_miner.png', name: 'Setting', link: 'setting' },
];

export const NavStyled = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: blue;
`;
