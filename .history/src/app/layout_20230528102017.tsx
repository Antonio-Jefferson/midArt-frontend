import './globals.css'

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head></head>
      <body className="bg-black">{children}</body>
    </html>
  )
}
