'use client';
import React from 'react';
import Home from '@/app/pages/Home/page';
import AppProvider from '@/app/context/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
