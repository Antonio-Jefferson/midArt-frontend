import { configType } from '@/@types/homeTypes'
import api from './api'

export async function findFeddData(config: configType) {
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/drawings/feed`,
    config,
  )
  console.log(response.data)
  return response.data
}
