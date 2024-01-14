'use client';
import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function GoogleLoginButton() {
  const _onSignIn = () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/' });
  };
  return (
    <GoogleLoginButtonStyle onClick={_onSignIn}>
      <Image src={'/assets/images/google_3d.png'} width={40} height={40} alt="google" />
      <span>Sign in with Google</span>
    </GoogleLoginButtonStyle>
  );
}

const GoogleLoginButtonStyle = styled.button`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 24px 6px;
  /* padding: 12px 24px; */
  margin-top: 28vh;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  background-color: #fff;
  cursor: pointer;
  transition: 0.1s;
  :active {
    transform: scale(0.95);
  }
  span {
    margin-left: 8px;
  }
`;
