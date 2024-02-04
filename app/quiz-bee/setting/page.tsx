'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function SettingPage() {
  const _onClickSignOut = () => {
    localStorage.removeItem('session');
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div>
      SettingPage
      {/*  */}
      <button onClick={_onClickSignOut}>signOut</button>
    </div>
  );
}
