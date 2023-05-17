import Link from 'next/link'

export const metadata = {
  title: 'MidArt - Signin',
}

export default function Signin() {
  return (
    <main className="flex bg-slate-50 h-screen">
      <div className="flex items-center justify-center bg-green-500 h-screen">
        <div className="w-2/3 bg-red flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-blue-50 text-[34px] m-5">
            SEJA BEM-VINDO
          </h1>
          <p className="text-zinc-200 font-light text-lg">
            Olá, seja bem-vindo! Estamos animados para ter você em nossa
            comunidade de artistas. Entre com sua conta para descobrir e
            compartilhar inspiração, desafiar seus limites e fazer novas
            conexões na sua jornada criativa.
          </p>
          <Link href={'/sign-up'}>
            <button className="text-blue-50 font-bold bg-transparent border-spacing-1 border-white">
              CRIAR CONTA
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          <h1>FAÇA SEU LOGIN</h1>
          <p>
            Bem-vindo de volta! Insira suas informações de login abaixo para
            acessar sua conta e continuar compartilhando sua arte conosco. Não
            se esqueça de verificar as notificações para ver as novidades da
            nossa comunidade!
          </p>
          <form>
            <input type="email" />
            <input type="password" />
            <button type="submit">ENTRAR</button>
          </form>
          <div>icons</div>
        </div>
      </div>
    </main>
  )
}
