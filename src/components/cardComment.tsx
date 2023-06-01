import { BsSend } from 'react-icons/bs'
import CardUserComment from './cardUserComment'

export default function CardComment() {
  return (
    <div className="h-80 bg-gray-900 relative">
      <ul className="w-full h-80 p-3 overflow-y-scroll pb-12">
        <CardUserComment />
        <CardUserComment />
        <CardUserComment />
        <CardUserComment />
      </ul>
      <div className="flex w-full gap-4 items-center absolute bg-primary bottom-0 p-3 border-t border-b border-gray-700">
        <input
          className="pl-2 w-full h-8 rounded-lg bg-slate-700 text-gray-100"
          type="text"
          placeholder="digite aqui..."
        />
        <BsSend color="#d9d9d9" fontSize={20} />
      </div>
    </div>
  )
}
