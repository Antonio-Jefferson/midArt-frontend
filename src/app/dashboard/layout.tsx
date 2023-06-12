import '../globals.css'

import { ReactNode } from 'react'
import Head from 'next/head'
import LeftSideBar from '@/components/Home/LeftMenu'
import RightSideBar from '@/components/Home/RightMenu'
import MenuSideBar from '@/components/Home/menuSideBar'
import MenuMobile from '@/components/Home/menuMobile'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MidArt</title>
      </Head>
      <body>
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
