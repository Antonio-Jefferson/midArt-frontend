'use client'

import '../globals.css'

import { ReactNode, useState } from 'react'
import Head from 'next/head'
import LeftSideBar from '@/components/Home/LeftMenu'
import RightSideBar from '@/components/Home/RightMenu'
import MenuSideBar from '@/components/Home/menuSideBar'
import MenuMobile from '@/components/Home/menuMobile'
import PostModal from '@/components/modals/PostModal'
import CreateGroupModal from '@/components/modals/CreateGroupModal'

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpenPostModal, setIsOpenPostModal] = useState(false)
  const [isOpenGroupModal, setIsOpenGroupModal] = useState(false)
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
          <LeftSideBar
            setIsOpenPostModal={setIsOpenPostModal}
            isOpenPostModal={isOpenPostModal}
            isOpenGroupModal={isOpenGroupModal}
            setIsOpenGroupModal={setIsOpenGroupModal}
          />
          {children}
          <RightSideBar />
          <MenuMobile />
          {isOpenGroupModal ? (
            <CreateGroupModal setIsOpenGroupModal={setIsOpenGroupModal} />
          ) : (
            ''
          )}
          {isOpenPostModal ? (
            <PostModal setIsOpenPostModal={setIsOpenPostModal} />
          ) : (
            ''
          )}
        </div>
      </body>
    </html>
  )
}
