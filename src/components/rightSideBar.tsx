import { IoSearchSharp } from 'react-icons/io5'
import CardPopular from './cardPopular'
import CardGroupe from './cardGroup'
export default function RightSideBar() {
  return (
    <div className="flex flex-col gap-8 w-1/3 h-screen fixed right-0 bg-primary pt-5 pl-10">
      <div className="flex gap-1 items-center w-80 h-10 p-2 rounded-3xl relative">
        <input
          className="w-80 h-10 rounded-3xl pl-2 bg-gray-850 outline-none"
          type="text"
          placeholder="Buscar usuário..."
        />
        <IoSearchSharp className="absolute right-5" color="#d9d9d9" />
      </div>
      <CardPopular />
      <CardGroupe />
    </div>
  )
}
