import { FaPenNib, FaBell } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'
import {
  BsFillBookmarkFill,
  BsFillTicketPerforatedFill,
  BsFillPersonFill,
} from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

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
          <li className="flex gap-4 items-center mb-10">
            <HiHome fontSize={35} color="#cc670a" />
            <h3 className="text-secondary font-bold text-xl">Página inicial</h3>
          </li>
          <li className="flex gap-4 items-center mb-10">
            <FaBell fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Notificações</h3>
          </li>
          <li className="flex gap-4 items-center mb-10">
            <BsFillBookmarkFill fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Favoritos</h3>
          </li>
          <li className="flex gap-4 items-center mb-10">
            <BsFillTicketPerforatedFill fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Eventos</h3>
          </li>
          <li className="flex gap-4 items-center mb-10">
            <BsFillPersonFill fontSize={35} color="#d9d9d9" />
            <h3 className="text-gray-200 font-bold text-xl">Perfil</h3>
          </li>
        </ul>
        <div className="flex flex-col justify-center items-center mt-56">
          <div className="flex flex-col gap-5">
            <button className="w-60 h-12 bg-secondary p-3 rounded-3xl text-xl font-semibold text-gray-200">
              Novo Grupo
            </button>
            <button className="w-60 h-12 bg-secondary p-3 rounded-3xl text-xl font-semibold text-gray-200">
              Novo Post
            </button>
          </div>
          <div className="flex justify-between items-center w-96 mt-24">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-slate-600"></div>
              <p className="text-gray-200 font-bold">Name User</p>
            </div>
            <FiLogOut fontSize={30} color="#d9d9d9" />
          </div>
        </div>
      </div>
    </div>
  )
}
