import React from 'react'
import { Navigate } from 'react-router-dom';

const RedirectionRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected content
  return children;
}

export default RedirectionRoute