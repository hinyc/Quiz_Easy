'use client';
import React from 'react';
import ButtonEffect from '../buttonEffect';
import styled from '@emotion/styled';
import Link from 'next/link';

interface NavButtonProps {
  icon: string;
  name: string;
  link: string;
}

export default function NavButton({ icon, name, link }: NavButtonProps) {
  return (
    <ButtonEffect>
      <Link href={link}>
        <NavButtonStyled bgUrl={icon}>
          {/* <img src={icon} alt={''} /> */}
          <span>{name}</span>
        </NavButtonStyled>
      </Link>
    </ButtonEffect>
  );
}

type NavButtonStyledProps = {
  bgUrl: string;
};
const NavButtonStyled = styled.div<NavButtonStyledProps>`
  position: relative;
  width: 60px;
  height: 60px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border-radius: 10px; // 모서리를 둥글게
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.3);
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    width: 100%;
    text-align: center;
    color: white; // 텍스트 색상을 하얀색으로 변경
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 10); // 텍스트에 그림자 추가
  }
`;
