import { FaBell } from 'react-icons/fa'
import { HiHome, HiUserGroup } from 'react-icons/hi'
import { IoSearchSharp } from 'react-icons/io5'
import { BsFillTicketPerforatedFill, BsFillPersonFill } from 'react-icons/bs'
import Link from 'next/link'

export default function MenuMobile() {
  return (
    <ul className="md:hidden flex justify-between items-center p-4 w-screen h-20 fixed bottom-0 bg-primary border border-t border-gray-200">
      <Link href={'/dashboard/home'}>
        <HiHome fontSize={28} color="#cc670a" />
      </Link>
      <Link href={'/dashboard/search'}>
        <IoSearchSharp fontSize={28} color="#d9d9d9" />
      </Link>
      <Link href={'/dashboard/notification'}>
        <FaBell fontSize={28} color="#d9d9d9" />
      </Link>
      <Link href={'/dashboard/groups'}>
        <HiUserGroup fontSize={28} color="#d9d9d9" />
      </Link>
      <Link href={'/dashboard/events'}>
        <BsFillTicketPerforatedFill fontSize={28} color="#d9d9d9" />
      </Link>
      <Link href={'/dashboard/profile'}>
        <BsFillPersonFill fontSize={28} color="#d9d9d9" />
      </Link>
    </ul>
  )
}
