import CardPost from '@/components/Home/Posts/components/cardPost'

export default function FavoritePage() {
  return (
    <div className="w-full bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
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
      </ul>
    </div>
  )
}
