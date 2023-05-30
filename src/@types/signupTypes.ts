import { z } from 'zod'

export const createUserSchema = z
  .object({
    username: z
      .string()
      .nonempty('O nome é obrigatório')
      .min(3, 'Deve ter no minimo 3 caracteries')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
          })
          .join(' ')
      }),
    email: z
      .string()
      .nonempty('O email é obrigatório')
      .email('Formato de e-mail inválido')
      .toLowerCase(),
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'Deve ter no mínimo 6 dígitos'),
    confirmPassword: z.string().nonempty('Campo obrigatório'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem',
    path: ['confirmPassword'],
  })
