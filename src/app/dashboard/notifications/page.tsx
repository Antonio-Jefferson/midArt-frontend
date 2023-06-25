import List from '@/components/Home/Posts'

export default function NotificationPage() {
  return (
    <div className="w-full min-h-full bg-primary border border-gray-700 m-auto md:w-[600px] md:min-w-[480px]">
      <ul className="h-screen">
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}
