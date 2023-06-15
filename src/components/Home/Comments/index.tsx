'use client'

import { BsSend } from 'react-icons/bs'
import CardUserComment from './components/cardUserComment'
import { useState } from 'react'
import { parseCookies } from 'nookies'
import { postComments } from '@/server/homeApi'

export default function CardComment(props: any) {
  const [newComment, setNewComment] = useState('')

  const handleComment = async (drawId: number) => {
    const cookies = parseCookies()
    const token = cookies.token
    try {
      await postComments(token, drawId, newComment)
      setNewComment('')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="h-80 bg-gray-900 relative">
      <ul className="w-full h-80 p-3 overflow-y-auto pb-12">
        {props.length > 0 ? (
          props.map((comment: any) => (
            <CardUserComment
              key={comment.id}
              id={comment.id}
              user_id={comment.user_id}
              drawing_id={comment.drawing_id}
              username={comment.username}
              image_user={comment.image_user}
              comment_text={comment.comment_text}
              created_at={comment.created_at}
            />
          ))
        ) : (
          <p>nenhum comentário</p>
        )}
      </ul>
      <div className="flex w-full gap-4 items-center absolute bg-primary bottom-0 p-3 border-t border-b border-gray-700">
        <input
          className="pl-2 w-full h-8 rounded-lg bg-slate-700 text-gray-100"
          type="text"
          placeholder="digite aqui..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <BsSend
          color="#d9d9d9"
          fontSize={20}
          onClick={() => handleComment(2)}
        />
      </div>
    </div>
  )
}
