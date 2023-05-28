import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'

export default function Signin() {
  return (
    <main className="flex h-screen">
      <div className="flex-col h-screen w-1/2 justify-center items-center bg-secondary hidden lg:flex">
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
          <Link href={'/sign-up'}>
            <button className="w-60 h-14 bg-transparent border-2 border-white rounded-2xl text-white font-semibold px-4 py-2 mt-10 m-auto hover:bg-white hover:bg-opacity-10">
              FAZER CADASTRO
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full lg:w-1/2 bg-gray-50 items-center justify-center">
        <div className="flex flex-col w-3/5 items-center">
          <h1 className="text-center font-bold text-secondary text-3xl mb-8">
            FAÇA SEU LOGIN
          </h1>
          <p className="text-zinc-500 font-light text-lg text-center">
            Bem-vindo de volta! Insira suas informações de login abaixo para
            acessar sua conta e continuar compartilhando sua arte conosco. Não
            se esqueça de verificar as notificações para ver as novidades da
            nossa comunidade!
          </p>
          <form className=" flex flex-col gap-4 justify-center items-center w-96 h-2/5 mt-10">
            <div className="relative">
              <MdEmail className="absolute top-5 left-4 text-gray-500 text-1xl" />
              <input
                className="w-96 h-14 pl-10 border bg-gray-50 rounded-md outline-none"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="relative">
              <FaKey className="absolute top-5 left-4 text-gray-500 text-1xl" />
              <input
                className="w-96 h-14 pl-10 border bg-gray-50 rounded-md outline-none"
                type="password"
                placeholder="senha"
              />
            </div>
            <button
              className="bg-secondary text-green-50 rounded w-60 h-12 hover:bg-primary font-semibold mt-8 py-4"
              type="submit"
            >
              ENTRAR
            </button>
            <p className="lg:hidden mt-3 text-zinc-500">
              Não possue conta?
              <span className="font-semibold text-primary hover:cursor-pointer hover:underline ml-1">
                <Link href={'/sign-up'}>CADASTRE-SE</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}
