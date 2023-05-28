import './globals.css'

import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-pr">{children}</body>
    </html>
  )
}
