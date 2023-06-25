import CardUser from '@/components/Search/card'
import { IoSearchSharp } from 'react-icons/io5'

export default function Search() {
  return (
    <div className="w-full min-h-screen bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px] p-4">
      <div className="flex gap-1 items-center w-full h-10 p-2 rounded-3xl relative">
        <input
          className="w-full h-10 rounded-3xl border border-gray-500 pl-2 bg-gray-850 outline-none"
          type="text"
          placeholder="Buscar usuário..."
        />
        <IoSearchSharp className="absolute right-5" color="#d9d9d9" />
      </div>
      <ul>
        <CardUser />
      </ul>
    </div>
  )
}
