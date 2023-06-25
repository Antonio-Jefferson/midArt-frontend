'use client'
import Groupe from '@/components/Home/RightMenu/components/groupe'

import { useEffect, useState } from 'react'
import { GroupsType } from '@/@types/homeTypes'
import { parseCookies } from 'nookies'
import { findGroupsData } from '@/server/homeApi'

export default function GoupsPage() {
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
    <div className="w-full bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <ul className="h-screen overflow-hidden">
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
