'use client';

import type { Metadata } from 'next'
import './globals.css'

import { Provider } from 'react-redux';
import { store } from '@/Store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="pt-br">
        <body>{children}</body>
      </html>
    </Provider>
  )
}
