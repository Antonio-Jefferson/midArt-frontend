import { FaBell } from 'react-icons/fa'
import { HiHome, HiUserGroup } from 'react-icons/hi'
import { IoSearchSharp } from 'react-icons/io5'
import { BsFillTicketPerforatedFill, BsFillPersonFill } from 'react-icons/bs'

export default function MenuMobile() {
  return (
    <ul className="md:hidden flex justify-between items-center p-4 w-screen h-20 fixed bottom-0 bg-primary border border-t border-gray-200">
      <li>
        <HiHome fontSize={28} color="#cc670a" />
      </li>
      <li>
        <IoSearchSharp fontSize={28} color="#d9d9d9" />
      </li>
      <li>
        <FaBell fontSize={28} color="#d9d9d9" />
      </li>
      <li>
        <HiUserGroup fontSize={28} color="#d9d9d9" />
      </li>
      <li>
        <BsFillTicketPerforatedFill fontSize={28} color="#d9d9d9" />
      </li>
      <li>
        <BsFillPersonFill fontSize={28} color="#d9d9d9" />
      </li>
    </ul>
  )
}
