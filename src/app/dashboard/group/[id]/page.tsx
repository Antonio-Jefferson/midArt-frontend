import { BsFillImageFill } from 'react-icons/bs'

export default function GroupPage() {
  return (
    <div className="w-full h-full bg-gray-600 border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <div className="w-full h-14 fixed top-0 bg-gray-950 flex p-3">
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>
        <h2 className="text-lg font-bold text-gray-200">Name do grupo</h2>
      </div>
      <ul className="my-8 p-2">
        <li className="flex gap-2">
          <div className="w-12 h-12 bg-gray-300 rounded-full">image</div>
          <p className="w-auto h-auto p-1">Oi, como vai?</p>
        </li>
      </ul>
      <div className="w-full h-14 fixed bottom-0 bg-gray-950 flex gap-2 items-center px-3">
        <div>
          <input type="text" placeholder="escreva aqui..." />
        </div>
        <BsFillImageFill fontSize={20} color="#D9D9D9" />
      </div>
    </div>
  )
}
