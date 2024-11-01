'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/signin'); // Redirect to signin if not authenticated
  }, [session, status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not signed in.</p>;
  }

  return (
    <div>
      <h1>Protected Layout</h1>
      <nav>{/* Add navigation links here */}</nav>
      {children}
    </div>
  );
};

export default ProtectedLayout;
