'use client'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import CardComment from '../../Comments'
import { CommentType, DrawingType } from '@/@types/homeTypes'
import Image from 'next/image'
import { useState } from 'react'
import { parseCookies } from 'nookies'
import {
  deleteFavorite,
  findCommentsDataApi,
  postDislike,
  postFavorite,
  postLiked,
} from '@/server/homeApi'

export default function CardPost(props: DrawingType) {
  const [isLike, setIsLike] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [coutLike, setCountLike] = useState<number>(props.likes_count)
  const [coutFavorite, setCoutFavorite] = useState<number>(
    props.saved_posts_count,
  )
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

  const likeds = async (id: number) => {
    if (!isLike) {
      try {
        setIsLike(true)
        setCountLike(coutLike + 1)
        const cookies = parseCookies()
        const token = cookies.token
        await postLiked(token, id)
      } catch (error) {
        alert(error)
      }
    } else {
      try {
        setIsLike(false)
        setCountLike(coutLike - 1)
        const cookies = parseCookies()
        const token = cookies.token
        await postDislike(token, id)
      } catch (error) {
        alert(error)
      }
    }
  }

  const favoritePost = async (id: number) => {
    if (!isFavorite) {
      try {
        setIsFavorite(true)
        setCoutFavorite(coutFavorite + 1)
        const cookies = parseCookies()
        const token = cookies.token
        await postFavorite(token, id)
      } catch (error) {
        alert(error)
      }
    } else {
      try {
        setIsFavorite(false)
        setCoutFavorite(coutFavorite - 1)
        const cookies = parseCookies()
        const token = cookies.token
        await deleteFavorite(token, id)
      } catch (error) {
        alert(error)
      }
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
                width: '100%',
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
              {isLike ? (
                <AiFillHeart
                  onClick={() => likeds(props.id)}
                  fontSize={24}
                  color="#b70000"
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => likeds(props.id)}
                  fontSize={24}
                  color="#d9d9d9"
                  className="cursor-pointer"
                />
              )}
              <p className="text-gray-300">{coutLike}</p>
            </div>
            <div
              className="flex flex-col items-center"
              onClick={() => findComments(props.id)}
            >
              <FaRegComment
                fontSize={24}
                color="#d9d9d9"
                className="cursor-pointer"
              />
              <p className="text-gray-300">{props.comments_count}</p>
            </div>
            <div className="flex flex-col items-center">
              {isFavorite ? (
                <BsFillBookmarkFill
                  onClick={() => favoritePost(props.id)}
                  fontSize={24}
                  color="#c0ba07"
                  className="cursor-pointer"
                />
              ) : (
                <BsBookmark
                  onClick={() => favoritePost(props.id)}
                  fontSize={24}
                  color="#d9d9d9"
                  className="cursor-pointer"
                />
              )}
              <p className="text-gray-300">{coutFavorite}</p>
            </div>
          </div>
          <div className="w-full h-72 rounded-md bg-slate-300">
            <Image
              src={props.drawing_image}
              width={100}
              height={288}
              alt="desenho"
              style={{
                width: '100%',
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
