import { BsFillImageFill } from 'react-icons/bs'

export default function GroupPage() {
  return (
    <div className="w-full h-full bg-gray-600 border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <div className="min-w-[600px] h-16 fixed top-0 bg-gray-950 flex items-center gap-3 p-3">
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>
        <h2 className="text-lg font-bold text-gray-200">Name do grupo</h2>
      </div>
      <ul className="flex flex-col gap-2 my-16 p-2 h-screen">
        <li className="flex gap-2">
          <div className="w-12 h-12 bg-gray-300 rounded-full">image</div>
          <p className="flex mt-5 justify-center items-center w-auto p-1 bg-slate-100 rounded-bl-full rounded-tr-full rounded-br-full">
            Oi, como vai?
          </p>
        </li>
        <li className="flex justify-end gap-2">
          <p className="flex mt-5 justify-center items-center w-auto p-1 bg-slate-100 rounded-tl-full rounded-bl-full rounded-br-full">
            Oi, vou bem, e você mano?
          </p>
          <div className="w-12 h-12 bg-gray-300 rounded-full">image</div>
        </li>
      </ul>
      <div className="min-w-[600px] h-14 fixed bottom-0 bg-gray-950 flex gap-2 items-center px-3">
        <div>
          <input
            className="w-[550px] h-8 pl-2 rounded-lg"
            type="text"
            placeholder="escreva aqui..."
          />
        </div>
        <BsFillImageFill fontSize={20} color="#D9D9D9" />
      </div>
    </div>
  )
}
