import Groupe from './groupe'

export default function CardGroupe() {
  return (
    <div className="bg-gray-850 border-gray-500 rounded-xl w-[350px] h-[400px]">
      <h2 className="font-bold text-xl text-gray-200 text-center border-b border-gray-500">
        Grupos
      </h2>
      <ul className="max-h-[369px] overflow-scroll">
        <Groupe />
        <Groupe />
        <Groupe />
        <Groupe />
        <Groupe />
        <Groupe />
      </ul>
    </div>
  )
}
