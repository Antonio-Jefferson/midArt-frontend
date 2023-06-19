'use client'

import CreateGroupModal from '@/components/modals/CreateGroupModal'
import PostModal from '@/components/modals/PostModal'
import { useState } from 'react'

export default function Buttons() {
  const [isOpenGroupModal, setIsOpenGroupModal] = useState<boolean>(false)
  const [isOpenPostModal, setIsOpenPostModal] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-5">
      <button
        onClick={() => setIsOpenGroupModal(true)}
        className="w-60 h-12 bg-secondary p-3 rounded-3xl text-xl font-semibold text-gray-200"
      >
        Novo Grupo
      </button>
      <button
        onClick={() => setIsOpenPostModal(true)}
        className="w-60 h-12 bg-secondary p-3 rounded-3xl text-xl font-semibold text-gray-200"
      >
        Novo Post
      </button>
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
  )
}
