import React from 'react';
import { LoginPageStyle } from './page.style';
import CustomRouter from '../../components/customRouter';
import GoogleLoginButton from './_component/GoogleLoginButton';
import Splash from './_component/Splash';

export default function LoginPage() {
  console.log('test');
  console.log('qqq', process.env.NODE_ENV);
  return (
    <>
      <div>
        <LoginPageStyle>LoginPage</LoginPageStyle>
      </div>
      <div>
        <CustomRouter href="/">home</CustomRouter>
      </div>
      <GoogleLoginButton />
      <Splash />
    </>
  );
}
