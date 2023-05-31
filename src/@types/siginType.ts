import { z } from 'zod'

export const loginUserSchema = z.object({
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase(),
  password: z.string().nonempty('Campo obrigatório'),
})

export type dataCookies = {
  token: string
  userId: string
  userImage: string
  username: string
}
