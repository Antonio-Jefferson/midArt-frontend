import { parseCookies } from 'nookies'

const findCookis = () => {
  const cookies = parseCookies()
  const userImage = cookies.userImage
  const username = cookies.username

  return {
    userImage,
    username,
  }
}

export default findCookis
