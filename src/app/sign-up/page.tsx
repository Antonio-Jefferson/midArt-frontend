'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserSchema } from '@/@types/signupTypes'
import { signUp } from '@/server/loginApi'

import { z } from 'zod'
import { toast } from 'react-toastify'

export default function Signup() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
  })

  async function createUser(data: z.infer<typeof createUserSchema>) {
    try {
      await signUp(data.username, data.email, data.password)
      toast('CADASTRO feito com sucesso')
      router.push('/')
    } catch (err) {
      toast('Não foi possível fazer o CADASTRO')
    }
  }

  return (
    <main className="flex h-screen">
      <div className="flex flex-col h-screen w-full lg:w-1/2 bg-gray-50 items-center justify-center">
        <div className="flex flex-col lg:w-3/5 w-full justify-center items-center mt-5">
          <h1 className="text-center font-bold text-primary text-3xl mb-8">
            CRIE SUA CONTA
          </h1>
          <p className="text-zinc-500 font-light text-lg text-center mb-10 lg:w-full lg:p-4">
            Deixe sua criatividade fluir e conecte-se com outros artistas na
            nossa comunidade. Cadastre-se agora e comece a compartilhar sua
            arte!
          </p>
          <form
            onSubmit={handleSubmit(createUser)}
            className=" flex flex-col gap-4 justify-center items-center w-96 h-2/5 mt-16"
          >
            <div className="relative">
              <BsFillPersonFill className="absolute top-5 left-4 text-gray-500 text-1xl" />
              <input
                className="w-96 h-14 pl-10 border bg-gray-50 rounded-md outline-none"
                type="text"
                placeholder="name"
                {...register('username')}
              />
              {errors.password && (
                <p className="text-red-600 p-1">{errors.username?.message}</p>
              )}
            </div>
            <div className="relative">
              <MdEmail className="absolute top-5 left-4 text-gray-500 text-1xl" />
              <input
                className="w-96 h-14 pl-10 border bg-gray-50 rounded-md outline-none"
                type="email"
                placeholder="email"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-red-600 p-1">{errors.email?.message}</p>
              )}
            </div>
            <div className="relative">
              <FaKey className="absolute top-5 left-4 text-gray-500 text-1xl" />
              <input
                className="w-96 h-14 pl-10 border bg-gray-50 rounded-md outline-none"
                type="password"
                placeholder="senha"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-red-600 p-1">{errors.password?.message}</p>
              )}
            </div>
            <div className="relative">
              <FaKey className="absolute top-5 left-4 text-gray-500 text-1xl" />
              <input
                className="w-96 h-14 pl-10 border bg-gray-50 rounded-md outline-none"
                type="password"
                placeholder="confirmar senha"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 p-1">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <button
              className="bg-primary text-green-50 rounded w-60 h-12 hover:bg-secondary font-semibold mt-8 mb-5 py-4"
              type="submit"
            >
              CRIAR CONTA
            </button>
            <p className="lg:hidden mt-3 mb-5 text-zinc-500">
              Não possue conta?
              <span className="font-semibold text-secondary hover:cursor-pointer hover:underline ml-1">
                <Link href={'/'}>FAÇA LOGIN</Link>
              </span>
            </p>
          </form>
          <div className="flex gap-5 mt-20">
            <Image
              src="/images/google.png"
              width={40}
              height={40}
              alt="google"
            />
            <Image
              src="/images/facebook.png"
              width={40}
              height={40}
              alt="facebook"
            />
          </div>
        </div>
      </div>
      <div className="flex-col h-screen w-1/2 justify-center items-center hidden lg:flex">
        <div className="flex w-3/5 flex-col items-center p-3">
          <h1 className="text-center font-bold text-blue-50 text-4xl mb-10">
            SEJA BEM-VINDO
          </h1>
          <p className="text-zinc-200 font-light text-2xl">
            Olá, seja bem-vindo! Estamos animados para ter você em nossa
            comunidade de artistas. Entre com sua conta para descobrir e
            compartilhar inspiração, desafiar seus limites e fazer novas
            conexões na sua jornada criativa.
          </p>
          <Link href={'/'}>
            <button className="w-60 h-14 bg-transparent border-2 border-white rounded-2xl text-white font-semibold px-4 py-2 mt-10 m-auto hover:bg-white hover:bg-opacity-10">
              FAZER LOGIN
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
