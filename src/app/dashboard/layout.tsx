import '../globals.css'

import { ReactNode } from 'react'
import Head from 'next/head'
import LeftSideBar from '@/components/leftSideBar'
import RightSideBar from '@/components/rightSideBar'
import MenuSideBar from '@/components/menuSideBar'
import MenuMobile from '@/components/menuMobile'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MidArt</title>
      </Head>
      <body className="bg-primary">
        <div className="flex bg-primary">
          <MenuSideBar />
          <LeftSideBar />
          {children}
          <RightSideBar />
          <MenuMobile />
        </div>
      </body>
    </html>
  )
}
