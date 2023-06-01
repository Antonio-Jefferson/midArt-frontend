export default function CardUserPopular() {
  return (
    <li className="flex justify-between items-center border-t border-b border-gray-500 p-3">
      <div className="flex gap-5 items-center">
        <div className="w-12 h-12 rounded-full bg-slate-500">img</div>
        <p className="font-semibold text-gray-200 text-sm">Nome do usuário</p>
      </div>
      <button className="w-20 h-8 border border-secondary rounded-full bg-transparent text-sm font-bold text-secondary">
        Seguir
      </button>
    </li>
  )
}
