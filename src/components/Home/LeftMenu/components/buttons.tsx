'use client'

import React from 'react'

interface IProps {
  setIsOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenPostModal: boolean
  setIsOpenGroupModal: React.Dispatch<React.SetStateAction<boolean>>
  isOpenGroupModal: boolean
}

export default function Buttons({
  setIsOpenPostModal,
  isOpenPostModal,
  setIsOpenGroupModal,
  isOpenGroupModal,
}: IProps) {
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
    </div>
  )
}
