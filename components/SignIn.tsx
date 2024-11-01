'use client';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      {/* Add more providers as needed */}
    </div>
  );
};

export default SignIn;
