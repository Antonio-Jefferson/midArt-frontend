import { BsFillImageFill } from 'react-icons/bs'
import React from 'react'

interface IProps {
  setIsOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostModal({ setIsOpenPostModal }: IProps) {
  return (
    <div className="absolute w-screen h-screen flex justify-center items-center z-20 bg-black bg-opacity-80 top-0">
      <div className="w-[600px] h-[500px] bg-gray-850 p-5 rounded-2xl">
        <div className="flex gap-3 items-center">
          <div className="w-14 h-14 rounded-full bg-slate-200"></div>
          <h2 className="font-bold text-xl text-gray-200">Name user</h2>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <input
              className=" ml-20 w-[400px] border-b border-gray-400 focus:outline-none bg-transparent"
              type="text"
            />
            <div className="m-auto mt-14 w-40 h-40">
              <label htmlFor="file">
                <BsFillImageFill fontSize={200} color="#D9D9D9" />
              </label>
              <input className="invisible" type="file" name="file" id="file" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-28">
            <button
              onClick={() => setIsOpenPostModal(false)}
              className="w-40 h-10 rounded-full bg-colorButton font-bold text-xl text-gray-50"
            >
              Cancelar
            </button>
            <button className="w-40 h-10 rounded-full bg-secondary font-bold text-xl text-gray-50">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
