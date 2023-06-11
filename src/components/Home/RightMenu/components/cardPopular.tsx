import CardUserPopular from './cardUserPopular'

export default function CardPopular() {
  return (
    <div className="bg-gray-850 border-gray-500 rounded-xl w-80 h-[400px]">
      <h2 className="font-bold text-xl text-gray-200 text-center border-b border-gray-500">
        Mais populares
      </h2>
      <ul className="max-h-[367px] overflow-scroll">
        <CardUserPopular />
        <CardUserPopular />
        <CardUserPopular />
        <CardUserPopular />
        <CardUserPopular />
        <CardUserPopular />
        <CardUserPopular />
      </ul>
    </div>
  )
}
