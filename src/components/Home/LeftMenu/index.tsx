import { FaPenNib, FaBell } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import {
  BsFillBookmarkFill,
  BsFillTicketPerforatedFill,
  BsFillPersonFill,
} from 'react-icons/bs'
import Link from 'next/link'
import LogOut from './components/logout'
import Buttons from './components/buttons'

export default function LeftSideBar() {
  return (
    <div className="hidden w-[400px] flex-col fixed h-screen p-5 left-1 bg-primary 2xl:flex 2xl:left-20">
      <div className="flex items-center">
        <div className="flex gap-2 mr-14">
          <div className="w-7 h-7 rounded-full bg-pink-600"></div>
          <div className="w-7 h-7 rounded-full bg-secondary"></div>
          <div className="w-7 h-7 rounded-full bg-blue-600"></div>
        </div>
        <div className="flex ml-10">
          <h1 className="font-black text-4xl text-secondary">MidArt</h1>
          <FaPenNib fontSize={20} color="#cc670a" />
        </div>
      </div>
      <div className="mt-8 flex-col justify-between items-center">
        <ul className="flex-col">
          <Link
            className="flex gap-4 items-center rounded-full p-3 mb-8 hover:bg-gray-500"
            href="/dashboard/home"
          >
            <HiHome fontSize={35} color="#cc670a" />
            <h3 className="text-secondary font-bold text-xl">Página inicial</h3>
          </Link>
          <Link
            className="flex gap-4 items-center mb-8 rounded-full p-3 hover:bg-gray-500 "
            href="/dashboard/notifications"
          >
            <FaBell fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Notificações</h3>
          </Link>
          <Link
            className="flex gap-4 items-center mb-8 rounded-full p-3 hover:bg-gray-500"
            href="/dashboard/favorites"
          >
            <BsFillBookmarkFill fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Favoritos</h3>
          </Link>
          <Link
            className="flex gap-4 items-center mb-8 rounded-full p-3 hover:bg-gray-500"
            href="/dashboard/events"
          >
            <BsFillTicketPerforatedFill fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Eventos</h3>
          </Link>
          <Link
            className="flex gap-4 items-center mb-8 rounded-full p-3 hover:bg-gray-500"
            href={`/dashboard/profile/1`}
          >
            <BsFillPersonFill fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Perfil</h3>
          </Link>
        </ul>
        <div className="flex flex-col justify-center items-center mt-40">
          <Buttons />
          <LogOut />
        </div>
      </div>
    </div>
  )
}
