'use client'

import { DrawingType } from '@/@types/homeTypes'
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import CardPost from './components/cardPost'
import { findFeddData } from '@/server/homeApi'

export default function List() {
  const [postData, setPostData] = useState<DrawingType[]>([])

  const FindPosts = async () => {
    const cookies = parseCookies()
    const token = cookies.token

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    try {
      const data = await findFeddData(config)
      setPostData(data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    FindPosts()
  }, [])

  return (
    <ul className="mb-8 mt-8">
      {postData.map((post) => (
        <CardPost
          key={post.id}
          id={post.id}
          user_id={post.user_id}
          user_image={post.user_image}
          username={post.username}
          description={post.description}
          drawing_image={post.drawing_image}
          saved_posts_count={post.saved_posts_count}
          likes_count={post.likes_count}
          comments_count={post.comments_count}
          created_at={post.created_at}
        />
      ))}
    </ul>
  )
}
