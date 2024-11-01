// app/api/auth/[...nextauth]/route.ts
import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error('Missing Google Client ID or Client Secret');
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    // Puedes agregar más proveedores aquí
  ],
  adapter: PrismaAdapter(prisma),
  // Puedes agregar más configuraciones aquí
});

export { handler as GET, handler as POST };
