import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';

const Global = ({ children }) => {
  const location = useLocation();
  return (
    <div className="isolate flex min-h-screen flex-col overflow-x-hidden">
      {location.pathname === '/registration/drive' ||
      location.pathname === '/registration/health' ||
      location.pathname === '/login' ? null : (
        <Header />
      )}
      {children}
      {location.pathname === '/registration/drive' ||
      location.pathname === '/registration/health' ||
      location.pathname === '/login' ? null : (
        <Footer />
      )}
    </div>
  );
};

export default Global;
