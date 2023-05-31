import api from './api'

export async function signUp(
  username: string,
  email: string,
  password: string,
) {
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/users/signup`,
    {
      username,
      email,
      password,
    },
  )
  return response.data
}

export async function singIn(email: string, password: string) {
  console.log({ email, password })
  const response = await api.post(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_BASE_URL}/users/signin`,
    {
      email,
      password,
    },
  )
  return response
}
