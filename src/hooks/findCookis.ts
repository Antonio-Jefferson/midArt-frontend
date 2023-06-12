import { parseCookies } from 'nookies'

const findCookis = () => {
  const cookies = parseCookies()
  const userImage = cookies.userImage
  const username = cookies.username
  console.log(userImage)
  console.log(username)

  return {
    userImage,
    username,
  }
}

export default findCookis
