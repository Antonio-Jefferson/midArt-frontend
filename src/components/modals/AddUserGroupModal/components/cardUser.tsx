export default function CardUser() {
  return (
    <li className="flex justify-between items-center border-t border-b border-gray-500 py-3 w-full">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full bg-slate-200">image</div>
        <p className="font-bold text-sm text-gray-200">Username</p>
      </div>
      <button className="w-20 h-8 mr-3 border border-secondary bg-transparent text-sm font-semibold text-secondary rounded-full">
        Convidar
      </button>
    </li>
  )
}
