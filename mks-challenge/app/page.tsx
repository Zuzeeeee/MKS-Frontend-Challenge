'use client';
import {
  hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import Home from '@/app/pages/Home';
import Head from 'next/head';

export default function App() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Home />
    </QueryClientProvider>
  );
}
