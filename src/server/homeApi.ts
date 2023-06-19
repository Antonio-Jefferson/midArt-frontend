import { configType } from '@/@types/homeTypes'
import api from './api'

export async function findFeddData(config: configType) {
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/drawings/feed`,
    config,
  )
  return response.data
}

export async function findPopularsData(token: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/users/famous`,
    config,
  )
  console.log(response.data)
  return response.data
}

export async function findGroupsData(token: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/group`,
    config,
  )
  console.log(response.data)
  return response.data
}

export async function findCommentsDataApi(token: string, drawId: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/comments/${drawId}`,
    config,
  )
  console.log(response.data)
  return response.data
}

export async function postComments(
  token: string,
  drawId: number,
  text: string,
) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const body = {
    drawId,
    text,
  }
  console.log(body)
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/comments`,
    body,
    config,
  )
  console.log(response.data)
  return response.data
}

export async function postLiked(token: string, drawId: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/likes/${drawId}`,
    config,
  )
  return response.data
}

export async function postDislike(token: string, drawId: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/likes/${drawId}/dislike`,
    config,
  )
  return response.data
}

export async function postFavorite(token: string, drawId: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/favorites/${drawId}`,
    config,
  )
  return response.data
}

export async function deleteFavorite(token: string, drawId: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await api.delete(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/favorites/delete/${drawId}`,
    config,
  )
  return response.data
}

export async function postFollower(token: string, followed: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const body = {
    followed,
  }
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/followers`,
    body,
    config,
  )
  return response.data
}

/*
export async function unfollower(token: string, followed: number) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const body = {
    followed,
  }
  const response = await api.delete(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/followers`,
    body,
    config,
  )
  return response.data
}
*/
