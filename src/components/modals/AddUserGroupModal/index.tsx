import { IoSearchSharp } from 'react-icons/io5'
import CardUser from './components/cardUser'

export default function AddUserGroupModal() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-20 bg-black bg-opacity-80 py-5">
      <div className="w-[550px] h-full bg-gray-850 flex-col gap-2 rounded-xl p-5">
        <div className="flex gap-1 items-center w-full h-10 p-2 rounded-3xl relative">
          <input
            className="w-full h-10 rounded-3xl border border-gray-500 pl-2 bg-gray-850 outline-none"
            type="text"
            placeholder="Buscar usuário..."
          />
          <IoSearchSharp className="absolute right-5" color="#d9d9d9" />
        </div>
        <ul className="h-[780px] w-full flex-col justify-between items-center py-4  overflow-y-scroll my-3">
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
        </ul>
        <div className="flex justify-between items-center my-4">
          <button className="w-28 h-10 mx-auto text-xl font-bold text-gray-50 rounded-full bg-colorButton">
            Cancelar
          </button>
          <button className="w-28 h-10 mx-auto text-xl font-bold text-gray-50 rounded-full bg-secondary">
            Concluir
          </button>
        </div>
      </div>
    </div>
  )
}
