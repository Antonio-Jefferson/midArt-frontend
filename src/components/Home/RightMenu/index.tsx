import { IoSearchSharp } from 'react-icons/io5'
import CardGroupe from './components/cardGroup'
import CardPopular from './components/cardPopular'
export default function RightSideBar() {
  return (
    <div className="hidden flex-col gap-8 w-[400px] h-screen fixed right-0 bg-primary pt-5 pl-5 xl:flex 2xl:right-20">
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
