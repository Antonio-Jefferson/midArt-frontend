import { BsFillImageFill } from 'react-icons/bs'
import { FaUserEdit } from 'react-icons/fa'

export default function EditUserModal() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-20 bg-black bg-opacity-80">
      <div className="w-[600px] h-[500px] bg-gray-850 p-5 rounded-2xl flex flex-col justify-between">
        <div className="w-[530px] h-60 relative bg-gray-200 rounded-xl">
          <div className="flex justify-center items-center absolute top-10 left-52">
            <label htmlFor="image-cove">
              <BsFillImageFill fontSize={150} color="#acacac" />
            </label>
            <input className="invisible" type="file" name="image-cove" />
          </div>
          <div className="absolute w-40 h-40 rounded-full bg-gray-400 top-36 left-14">
            <label className="absolute top-12 left-14" htmlFor="image-user">
              <FaUserEdit fontSize={60} color="#acacac" />
            </label>
            <input className="invisible" type="file" name="image-user" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-normal text-gray-200" htmlFor="name">
            Nome
          </label>
          <input
            className="border-b border-gray-400 focus:outline-none bg-transparent"
            type="text"
            name="name"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="w-40 h-10 rounded-full bg-colorButton font-bold text-xl text-gray-50">
            Cancelar
          </button>
          <button className="w-40 h-10 rounded-full bg-secondary font-bold text-xl text-gray-50">
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
