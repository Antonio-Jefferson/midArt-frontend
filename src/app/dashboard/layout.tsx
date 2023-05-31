import '../globals.css'

import { ReactNode } from 'react'
import Head from 'next/head'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="bg-primary">{children}</body>
    </html>
  )
}
