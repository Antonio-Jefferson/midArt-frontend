'use client'

import { useEffect, useState } from 'react'
import CardUserPopular from './cardUserPopular'
import { FamousType } from '@/@types/homeTypes'
import { findPopularsData } from '@/server/homeApi'
import { parseCookies } from 'nookies'

export default function CardPopular() {
  const [famousData, setFamousData] = useState<FamousType[]>([])

  const findFamousData = async () => {
    const cookies = parseCookies()
    const token = cookies.token
    try {
      const data = await findPopularsData(token)
      setFamousData(data)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    findFamousData()
  })

  return (
    <div className="bg-gray-850 border-gray-500 rounded-xl w-80 h-[400px]">
      <h2 className="font-bold text-xl text-gray-200 text-center border-b border-gray-500">
        Mais populares
      </h2>
      <ul className="max-h-[367px] overflow-scroll">
        {famousData.map((famou) => (
          <CardUserPopular
            key={famou.id}
            id={famou.id}
            username={famou.username}
            profile_image={famou.profile_image}
          />
        ))}
      </ul>
    </div>
  )
}
