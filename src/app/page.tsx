import Image from 'next/image'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'

export const metadata = {
  title: 'MidArt - Signin',
}

export default function Signin() {
  return (
    <main className="flex justify-between  bg-slate-50 h-screen">
      <div className="w-2/3 bg-primary hidden lg:block">
        <div className="flex flex-col justify-center my-64 items-center">
          <h1 className="text-center font-bold text-blue-50 text-3xl my-5">
            SEJA BEM-VINDO
          </h1>
          <p className="text-zinc-200 font-light text-2xl p-5">
            Olá, seja bem-vindo! Estamos animados para ter você em nossa
            comunidade de artistas. Entre com sua conta para descobrir e
            compartilhar inspiração, desafiar seus limites e fazer novas
            conexões na sua jornada criativa.
          </p>
          <Link href={'/sign-up'}>
            <button className="bg-transparent border-2 border-white rounded-2xl text-white font-semibold px-4 py-2 mt-10 m-auto hover:bg-white hover:bg-opacity-10">
              FAZER CADASTRO
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/3 flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-primary text-3xl m-5">
            FAÇA SEU LOGIN
          </h1>
          <p className="text-zinc-500 font-light text-lg text-center mb-10">
            Bem-vindo de volta! Insira suas informações de login abaixo para
            acessar sua conta e continuar compartilhando sua arte conosco. Não
            se esqueça de verificar as notificações para ver as novidades da
            nossa comunidade!
          </p>
          <form className=" flex flex-col justify-center items-center w-96 h-2/5">
            <div className="flex justify-center items-center w-96 h-14 bg-gray-200 p-2 border rounded-md mb-5">
              <MdEmail className="text-gray-500 text-1xl" />
              <input
                className="bg-gray-200 ml-2 w-80 h-14 rounded-md outline-none"
                type="email"
                placeholder="email"
              />
            </div>
            <div className="flex justify-center items-center w-96 h-14 bg-gray-200 p-2 border rounded-md mb-5">
              <FaKey className="text-gray-500 text-1xl" />
              <input
                className="bg-gray-200 ml-2 w-80 h-14 rounded-md outline-none"
                type="password"
                placeholder="senha"
              />
            </div>
            <button
              className="bg-primary p-1 text-green-50 rounded w-60 h-12 hover:bg-secondary font-semibold mt-8"
              type="submit"
            >
              ENTRAR
            </button>
            <p className="lg:hidden mt-3 text-zinc-500">
              Não possue conta?
              <span className="font-semibold text-secondary hover:cursor-pointer hover:underline ml-1">
                <Link href={'/sign-up'}>CADASTRE-SE</Link>
              </span>
            </p>
          </form>
          <div className="flex gap-5 mt-10">
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
    </main>
  )
}
