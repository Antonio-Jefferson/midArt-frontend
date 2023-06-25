export default function List() {
  return (
    <li className="border-b border-gray-500 p-4 bg-slate-500">
      <p className="text-gray-600">
        Você foi <strong>CONVIDADO</strong> para participar do grupo
        <strong> Name do gropo</strong>
      </p>
      <div className="flex gap-5 mt-4">
        <button className="font-bold text-ms w-20 h-7 bg-red-600 rounded-md">
          Recusar
        </button>
        <button className="font-bold text-ms w-20 h-7 bg-green-600 rounded-md">
          Aceitar
        </button>
      </div>
    </li>
  )
}
