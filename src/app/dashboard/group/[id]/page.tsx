import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdGroupAdd } from 'react-icons/md'
import { BsFillPaletteFill } from 'react-icons/bs'
import { IoPersonRemoveSharp } from 'react-icons/io5'

export default function Group() {
  return (
    <div className="w-full min-h-full bg-gray-850  border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <div className="flex flex-col justify-center items-center relative py-5">
        <div>
          <div>
            <div className="w-36 h-36 rounded-full bg-slate-200"></div>
            <h2 className="text-xl font-bold text-gray-200">Nome do gropo</h2>
          </div>
          <div className=" flex flex-col gap-4 absolute top-2 right-4">
            <FaEdit color="#d5d5d5" fontSize={24} />
            <RiDeleteBin6Fill color="#d5d5d5" fontSize={24} />
            <MdGroupAdd color="#d5d5d5" fontSize={24} />
            <BsFillPaletteFill color="#d5d5d5" fontSize={24} />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <p className="text-base font-normal text-secondary">
            Adm:
            <strong className="font-semibold text-gray-200">Nome do adm</strong>
          </p>
          <p className="text-base font-normal text-gray-200 w-80">
            description
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-5 border-b-2 border-secondary">
          <p className="text-xl text-secondary font-bold">Membros</p>
          <p className="text-base text-gray-200 font-semibold">23</p>
        </div>
        <ul className="h-screen overflow-hidden">
          <li className="flex justify-between items-center p-4 border-b border-slate-600">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-slate-200">image</div>
              <p className="font-bold text-sm text-gray-200">Username</p>
            </div>
            <div className="flex gap-3 items-center">
              <IoPersonRemoveSharp color="#d5d5d5" fontSize={20} />
              <button className="w-20 h-8 border border-secondary rounded-full bg-transparent text-sm font-bold text-secondary hover:bg-secondary hover:text-gray-100">
                Seguir
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
