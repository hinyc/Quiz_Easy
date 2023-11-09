import React from 'react';
import { LoginPageStyle } from './page.style';
import CustomRouter from '../../components/customRouter';

export default function LoginPage() {
  return (
    <>
      <div>
        <LoginPageStyle>LoginPage</LoginPageStyle>
      </div>
      <div>
        <CustomRouter href="/">home</CustomRouter>
      </div>
    </>
  );
}
