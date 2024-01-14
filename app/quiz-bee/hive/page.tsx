'use client';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

export default function HivePage() {
  const session = useSession();
  useEffect(() => {
    if (session.status === 'authenticated') {
      localStorage.setItem('session', JSON.stringify(session));
    }
  }, []);

  const _onClickSignOut = () => {
    localStorage.removeItem('session');
    signOut({ callbackUrl: '/login' });
  };

  return (
    <div>
      HivePage
      <button onClick={_onClickSignOut}>signOut</button>
    </div>
  );
}
