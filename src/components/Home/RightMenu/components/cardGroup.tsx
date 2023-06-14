'use client'

import Groupe from './groupe'
import { useEffect, useState } from 'react'
import { GroupsType } from '@/@types/homeTypes'
import { parseCookies } from 'nookies'
import { findGroupsData } from '@/server/homeApi'

export default function CardGroupe() {
  const [groupsData, setGroupsData] = useState<GroupsType[]>([])

  const findGroups = async () => {
    const cookies = parseCookies()
    const token = cookies.token
    try {
      const data = await findGroupsData(token)
      setGroupsData(data)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    findGroups()
  })

  return (
    <div className="bg-gray-850 border-gray-500 rounded-xl w-[350px] h-[400px]">
      <h2 className="font-bold text-xl text-gray-200 text-center border-b border-gray-500">
        Grupos
      </h2>
      <ul className="max-h-[369px] overflow-scroll">
        {groupsData.length > 0 ? (
          groupsData.map((group) => (
            <Groupe
              key={group.id}
              id={group.id}
              group_name={group.group_name}
              group_image={group.group_image}
            />
          ))
        ) : (
          <p className="text-center text-gray-300">
            Você não está em nenhum grupo.
          </p>
        )}
      </ul>
    </div>
  )
}
