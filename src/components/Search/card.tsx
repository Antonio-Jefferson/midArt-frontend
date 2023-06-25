export default function Card() {
  return (
    <li className="flex justify-between items-center py-3 w-full mt-2">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full bg-slate-200">image</div>
        <p className="font-bold text-sm text-gray-200">Username</p>
      </div>
    </li>
  )
}
