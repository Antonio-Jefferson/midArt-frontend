import { GroupsType } from '@/@types/homeTypes'
import Image from 'next/image'
export default function Groupe(props: GroupsType) {
  return (
    <li className="flex items-center gap-5 border-t border-b border-gray-500 p-3">
      <div className="w-12 h-12 rounded-full bg-slate-500">
        <Image
          src={props.group_image}
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
      <p className="font-bold text-gray-200 text-sm">{props.group_name}</p>
    </li>
  )
}
