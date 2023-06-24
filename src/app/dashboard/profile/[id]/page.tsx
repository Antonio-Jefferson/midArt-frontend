import CardPost from '@/components/Home/Posts/components/cardPost'

interface UserIdProps {
  params: {
    id: number
  }
}

export default function ProfilePage({ params }: UserIdProps) {
  return (
    <div className="w-full h-full bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <div className="w-full h-40 relative bg-gray-400">
        <div className="w-36 h-36 rounded-full bg-gray-300 absolute top-20 left-10"></div>
      </div>
      <div className="flex ml-48 justify-between p-3">
        <p className="text-xl font-bold text-gray-200">Antônio Jefferson</p>
        <button className="w-32 h-7 bg-secondary rounded-full font-normal text-gray-50">
          Editar perfil
        </button>
      </div>
      <div className="flex justify-between items-center p-5 mt-4">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg text-gray-200 font-bold">Seguindo</h2>
          <p className="text-sm font-medium text-gray-500">123</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg text-gray-200 font-bold">Seguidores</h2>
          <p className="text-sm font-medium text-gray-500">143</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg text-gray-200 font-bold">Curtidas</h2>
          <p className="text-sm font-medium text-gray-500">634</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg text-gray-200 font-bold">Publicações</h2>
          <p className="text-sm font-medium text-gray-500">65</p>
        </div>
      </div>
      <div>
        <div className="flex w-full h-10 justify-evenly items-center border-b border-secondary bg-primary z-20 sticky top-0">
          <div className="font-semibold text-lg text-secondary">
            Minhas publicações
          </div>
          <div className="font-semibold text-lg text-gray-200">Favoritados</div>
        </div>
        <ul className="mb-8 mt-8">
          <CardPost
            key={1}
            id={1}
            user_id={1}
            user_image="https://cdn.dribbble.com/users/2837665/screenshots/15955560/media/8387ceb42f22d6489327eb9ff1e0b4ef.png?resize=400x0"
            username="Jefferson"
            description="algum desenho qualquer"
            drawing_image="https://cdn.dribbble.com/users/2837665/screenshots/15955560/media/8387ceb42f22d6489327eb9ff1e0b4ef.png?resize=400x0"
            saved_posts_count={23}
            likes_count={21}
            comments_count={2}
            created_at="10/09/2012"
          />
          <CardPost
            key={1}
            id={1}
            user_id={1}
            user_image="https://cdn.dribbble.com/users/2837665/screenshots/15955560/media/8387ceb42f22d6489327eb9ff1e0b4ef.png?resize=400x0"
            username="Jefferson"
            description="algum desenho qualquer"
            drawing_image="https://cdn.dribbble.com/users/2837665/screenshots/15955560/media/8387ceb42f22d6489327eb9ff1e0b4ef.png?resize=400x0"
            saved_posts_count={23}
            likes_count={21}
            comments_count={2}
            created_at="10/09/2012"
          />
        </ul>
      </div>
    </div>
  )
}
