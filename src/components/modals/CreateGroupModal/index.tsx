import { AiFillCamera } from 'react-icons/ai'

export default function CreateGroupModal() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-20 bg-black bg-opacity-80">
      <div className="w-[600px] h-[500px] bg-gray-850 p-5 rounded-2xl flex flex-col justify-between">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-24 h-24 rounded-full bg-slate-200 flex justify-center items-center">
            <label htmlFor="file">
              <AiFillCamera fontSize={40} color="#868686" />
            </label>
            <input className="hidden" type="file" name="file" id="file" />
          </div>
          <div className="flex flex-col gap-5">
            <input
              className="w-[300px] border-b border-gray-400 focus:outline-none bg-transparent"
              type="text"
              placeholder="Nome do grupo"
            />
            <input
              className="w-[300px] border-b border-gray-400 focus:outline-none bg-transparent"
              type="text"
              placeholder="Descrição.."
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="w-40 h-10 rounded-full bg-colorButton font-bold text-xl text-gray-50">
            Cancelar
          </button>
          <button className="w-40 h-10 rounded-full bg-secondary font-bold text-xl text-gray-50">
            Criar
          </button>
        </div>
      </div>
    </div>
  )
}
