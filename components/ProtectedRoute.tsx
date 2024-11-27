'use client';

import React from 'react';
import { useAuthContext } from '@/context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string; // Optional redirect path
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectTo = '/get-started' }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>You are not logged in!</div>;
  }

  // console.log('Authenticated user:', user);

  return <>{children}</>;
};

export default ProtectedRoute;
