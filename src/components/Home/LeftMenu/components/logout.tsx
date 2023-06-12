'use client'

import { FiLogOut } from 'react-icons/fi'
import Image from 'next/image'
import findCookis from '@/hooks/findCookis'

export default function LogOut() {
  const info = findCookis()
  return (
    <div className="flex justify-between items-center w-96 mt-24">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 rounded-full bg-slate-600">
          <Image
            src={info.userImage}
            width={48}
            height={48}
            alt="user image"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          />
        </div>
        <p className="text-gray-200 font-bold">{info.username}</p>
      </div>
      <FiLogOut fontSize={30} color="#d9d9d9" />
    </div>
  )
}
