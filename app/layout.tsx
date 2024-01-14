import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LayoutStyled } from './layout.style';
import NextAuthProvider from './NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <LayoutStyled>{children}</LayoutStyled>
        </NextAuthProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'QUIZ_BEE',
  description: 'Generated by create next app',
  //pwa 용
  manifest: '/manifest.json',
  //아이콘 수정필요함
  icons: [{ url: '/favicon.ico', sizes: '64x64', type: 'image/png', rel: 'icon' }],
  // icons: { icon: [{ url: '/favicon.ico', sizes: '64x64', type: 'image/png' }], apple: [{ sizes: '64x64', url: '/favicon.ico' }] },
  //
};

//메타 테크 추가 필요 아이콘등..
//https://noogoonaa.tistory.com/110
