import { FamousType } from '@/@types/homeTypes'
import Image from 'next/image'
import Button from './button'

export default function CardUserPopular(props: FamousType) {
  console.log(props)
  return (
    <li className="flex justify-between items-center border-b border-gray-500 p-3">
      <div className="flex gap-5 items-center">
        <div className="w-12 h-12 rounded-full bg-slate-500">
          <Image
            src={props.profile_image}
            width={48}
            height={48}
            alt="user image"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
            }}
          />
        </div>
        <p className="font-semibold text-gray-200 text-sm">{props.username}</p>
      </div>
      <Button userId={props.id} />
    </li>
  )
}
