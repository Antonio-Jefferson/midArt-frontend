import { dataCookies } from '@/@types/siginType'
import { setCookie } from 'nookies'

export const cookies = async (data: dataCookies) => {
  console.log(data)
  const cookiesToSet = {
    token: data.token,
    userId: data.userId,
    userImage: data.userImage,
    username: data.username,
  }

  Object.entries(cookiesToSet).forEach(([cookieName, cookieValue]) => {
    setCookie(null, cookieName, cookieValue, {
      path: '/',
    })
  })
}
