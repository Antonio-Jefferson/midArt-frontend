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
