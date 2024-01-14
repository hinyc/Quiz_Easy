// import { auth } from '@/lib/auth';
import { auth } from '@/lib/auth';
import NextAuth from 'next-auth/next';

// const handler = NextAuth(authOption);
const handler = auth;

export { handler as GET, handler as POST };
