export type DrawingType = {
  id: number
  user_id: number
  username: string
  user_image: string
  description: string
  drawing_image: string
  likes_count: number
  comments_count: number
  saved_posts_count: number
  created_at: string
}

export type configType = {
  headers: {
    Authorization: string
  }
}