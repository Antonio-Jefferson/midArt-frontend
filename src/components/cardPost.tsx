import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import CardComment from './cardComment'

export default function CardPost() {
  return (
    <li>
      <div className="border border-gray-800 p-3">
        <div className="flex gap-4 p-3">
          <div className="w-14 h-14 rounded-full bg-slate-300">image</div>
          <div>
            <h2 className="font-bold text-gray-100 text-xl">Nome do usuario</h2>
            <p className="font-normal text-base text-gray-200">descrição</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col justify-between items-center p-2">
            <div className="flex flex-col items-center">
              <AiOutlineHeart fontSize={24} color="#d9d9d9" />
              <p className="text-gray-300">123</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRegComment fontSize={24} color="#d9d9d9" />
              <p className="text-gray-300">39</p>
            </div>
            <div className="flex flex-col items-center">
              <BsBookmark fontSize={24} color="#d9d9d9" />
              <p className="text-gray-300">12</p>
            </div>
          </div>
          <div className="w-full h-72 rounded-md bg-slate-300"></div>
        </div>
      </div>
      <CardComment />
    </li>
  )
}
