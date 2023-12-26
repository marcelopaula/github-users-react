'use client';

import type { Metadata } from 'next'
import './globals.css'

import { Provider } from 'react-redux';
import { store } from '@/Store';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import GitHub from '@mui/icons-material/GitHub';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="pt-br">
        <body>
          <AppBar position='static'>
            <Toolbar>
              <GitHub />
              <Typography variant='h6'>Github: User search engine</Typography>
            </Toolbar>
          </AppBar>
          {children}
        </body>
      </html>
    </Provider>
  )
}
