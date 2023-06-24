export default function NotificationPage() {
  return (
    <div className="w-full min-h-full bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <ul>
        <li className="border-b border-gray-400">
          <p>
            Você foi <strong>CONVIDADO</strong> para participar do grupo
            <strong>Name do gropo</strong>
          </p>
          <div>
            <button>Recusar</button>
            <button>Aceitar</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
