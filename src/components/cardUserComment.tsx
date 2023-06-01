export default function CardUserComment() {
  return (
    <li className="flex gap-4 items-center h-20 p-1 border-t border-b border-gray-700">
      <div className="w-10 h-10 rounded-full bg-slate-300"></div>
      <div>
        <h2 className="font-semibold text-base text-gray-200">Nome do user</h2>
        <p className="font-normal text-sm text-gray-400"> que desenho bonito</p>
      </div>
    </li>
  )
}
