import Link from 'next/link'

export const metadata = {
  title: 'MidArt - Signup',
}

export default function Signup() {
  return (
    <main className="flex bg-slate-50 h-screen">
      <div className="w-3/5 bg-green-500 h-screen">
        <div>
          <h1>SEJA BEM-VINDO</h1>
          <p>
            Olá, seja bem-vindo! Estamos animados para ter você em nossa
            comunidade de artistas. Entre com sua conta para descobrir e
            compartilhar inspiração, desafiar seus limites e fazer novas
            conexões na sua jornada criativa.
          </p>
          <Link href={'/'}>
            <button>FAZER LOGIN</button>
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h1>CRIE SUA CONTA</h1>
          <p>
            Deixe sua criatividade fluir e conecte-se com outros artistas na
            nossa comunidade. Cadastre-se agora e comece a compartilhar sua
            arte!
          </p>
          <form>
            <input type="text" />
            <input type="email" />
            <input type="password" />
            <button type="submit">CRIAR CONTA</button>
          </form>
          <div></div>
        </div>
      </div>
    </main>
  )
}
