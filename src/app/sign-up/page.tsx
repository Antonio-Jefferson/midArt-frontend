import Image from 'next/image'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

export const metadata = {
  title: 'MidArt - Signup',
}

export default function Signup() {
  return (
    <main className="flex justify-between  bg-slate-50 h-screen">
      <div className="w-2/3 bg-secondary hidden lg:block">
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
          <Link href={'/'}>
            <button className="bg-transparent border-2 border-white rounded-2xl text-white font-semibold px-4 py-2 mt-10 m-auto hover:bg-white hover:bg-opacity-10">
              FAZER LOGIN
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-2/3 flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-secondary text-3xl m-5">
            CRIE SUA CONTA
          </h1>
          <p className="text-zinc-500 font-light text-lg text-center mb-10">
            Deixe sua criatividade fluir e conecte-se com outros artistas na
            nossa comunidade. Cadastre-se agora e comece a compartilhar sua
            arte!
          </p>
          <form className=" flex flex-col justify-center items-center w-96 h-2/5">
            <div className="flex justify-center items-center w-96 h-14 bg-gray-200 p-2 border rounded-md mb-5">
              <BsFillPersonFill className="text-gray-500 text-1xl" />
              <input
                className="bg-gray-200 ml-2 w-80 h-14 rounded-md outline-none"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="flex justify-center items-center w-96 h-14 bg-gray-200 p-2 border rounded-md mb-5">
              <MdEmail className="text-gray-500 text-1xl" />
              <input
                className="bg-gray-200 ml-2 w-80 h-14 rounded-md outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-center items-center w-96 h-14 bg-gray-200 p-2 border rounded-md mb-5">
              <FaKey className="text-gray-500 text-1xl" />
              <input
                className="bg-gray-200 ml-2 w-80 h-14 rounded-md outline-none"
                type="password"
                placeholder="Senha"
              />
            </div>
            <div className="flex justify-center items-center w-96 h-14 bg-gray-200 p-2 border rounded-md mb-5">
              <FaKey className="text-gray-500 text-1xl" />
              <input
                className="bg-gray-200 ml-2 w-80 h-14 rounded-md outline-none"
                type="password"
                placeholder="Confirmar senha"
              />
            </div>
            <button
              className="bg-secondary p-1 text-green-50 rounded w-60 h-12 hover:bg-primary font-semibold mt-8"
              type="submit"
            >
              CADASTRAR
            </button>
            <p className="lg:hidden mt-3 text-zinc-500">
              Não possue conta?
              <span className="font-semibold text-primary hover:cursor-pointer hover:underline ml-1">
                <Link href={'/'}>FAÇA LOGIN</Link>
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
