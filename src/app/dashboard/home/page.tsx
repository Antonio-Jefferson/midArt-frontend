import CardPost from '@/components/cardPost'

export default function HomePage() {
  return (
    <div className="w-1/3 bg-primary border border-gray-700 m-auto">
      <div className="w-1/3 flex flex-col p-3 border-b-2 bg-primary border-secondary fixed top-0 z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-secondary text-lg">Posts</p>
          <p className="font-bold text-gray-100 text-lg">Amigos</p>
          <p className="font-bold text-gray-100 text-lg">Desafios</p>
        </div>
      </div>
      <ul className="mb-8 mt-8">
        <CardPost />
        <CardPost />
        <CardPost />
      </ul>
    </div>
  )
}
