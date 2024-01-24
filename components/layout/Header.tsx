'use client';
import React from 'react';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';

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
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  }

  .nickname {
    border-bottom: 1px solid yellowgreen;
  }
`;
