import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'

import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app'

import Layout from '../layout/Layout'

export default function App({ Component, pageProps }: AppProps) 
{
  return (
    <Layout> 
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
