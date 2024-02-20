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
      <div>
        <div>로그아웃</div>
        <div>음악끄기</div>
        <div>닉네임 프레임수정</div>
        <div>광고안보기 결제</div>
        <div>광고안보기 결제 취소</div>
      </div>
      {/*  */}
      <button onClick={_onClickSignOut}>signOut</button>
    </div>
  );
}
