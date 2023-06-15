'use client'

import { AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import CardComment from '../../Comments'
import { CommentType, DrawingType } from '@/@types/homeTypes'
import Image from 'next/image'
import { useState } from 'react'
import { parseCookies } from 'nookies'
import { findCommentsDataApi } from '@/server/homeApi'

export default function CardPost(props: DrawingType) {
  const [readComment, setReadComment] = useState<boolean>(false)
  const [commentsData, setCommentsData] = useState<CommentType[]>([])

  const findComments = async (id: number) => {
    try {
      const cookies = parseCookies()
      const token = cookies.token
      const data = await findCommentsDataApi(token, id)
      const dataComments = {
        ...data,
        drawId: props.id,
      }
      setCommentsData(dataComments)
      setReadComment(!readComment)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <li>
      <div className="border border-gray-800 p-3">
        <div className="flex gap-4 p-3">
          <div className="w-14 h-14 rounded-full bg-slate-300">
            <Image
              src={props.user_image}
              width={56}
              height={56}
              alt="user image"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-100 text-xl">
              {props.username}
            </h2>
            <p className="font-normal text-base text-gray-200">
              {props.description}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col justify-between items-center p-2">
            <div className="flex flex-col items-center">
              <AiOutlineHeart fontSize={24} color="#d9d9d9" />
              <p className="text-gray-300">{props.likes_count}</p>
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => findComments(props.id)}
            >
              <FaRegComment fontSize={24} color="#d9d9d9" />
              <p className="text-gray-300">{props.comments_count}</p>
            </div>
            <div className="flex flex-col items-center">
              <BsBookmark fontSize={24} color="#d9d9d9" />
              <p className="text-gray-300">{props.saved_posts_count}</p>
            </div>
          </div>
          <div className="w-full h-72 rounded-md bg-slate-300">
            <Image
              src={props.drawing_image}
              width={100}
              height={288}
              alt="desenho"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: '6px',
              }}
            />
          </div>
        </div>
      </div>
      {readComment ? <CardComment commentsData={commentsData} /> : ''}
    </li>
  )
}
