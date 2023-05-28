import './globals.css'

import { ReactNode } from 'react'
import Head from 'next/head'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <Head
      <body className="bg-black">{children}</body>
    </html>
  )
}
