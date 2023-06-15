import { parseCookies } from 'nookies'

const findCookies = () => {
  const cookies = parseCookies()
  const token = cookies.token
  const userImage = cookies.userImage
  const userId = cookies.userId
  const username = cookies.username
  console.log(userId)
  return {
    token,
    userImage,
    username,
    userId,
  }
}

export default findCookies
