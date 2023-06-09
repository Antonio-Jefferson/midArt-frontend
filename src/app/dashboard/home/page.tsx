import List from '@/components/Home/Posts'
import PostMobile from '@/components/Home/Posts/postMobile'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <div className="w-full md:w-[600px] flex flex-col p-3 border-b-2 bg-primary border-secondary fixed top-0 z-10">
        <div className="flex justify-between items-center">
          <p className="font-bold text-secondary text-lg">Posts</p>
          <p className="font-bold text-gray-100 text-lg">Amigos</p>
          <p className="font-bold text-gray-100 text-lg">Desafios</p>
        </div>
      </div>
      <PostMobile />
      <List />
    </div>
  )
}
