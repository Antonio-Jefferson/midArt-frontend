import './globals.css'

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <he
      <body className="bg-black">{children}</body>
    </html>
  )
}
