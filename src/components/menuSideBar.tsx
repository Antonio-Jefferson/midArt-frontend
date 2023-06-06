import { FaBell } from 'react-icons/fa'
import { HiHome, HiUserGroup } from 'react-icons/hi'
import {
  BsFillBookmarkFill,
  BsFillTicketPerforatedFill,
  BsFillPersonFill,
} from 'react-icons/bs'
import { GrFormAdd } from 'react-icons/gr'

export default function MenuSideBar() {
  return (
    <div className="hidden flex-col justify-between items-center bg-primary fixed left-0 h-screen w-20 p-3 md:flex 2xl:hidden">
      <div className="felx flex-col h-80 gap-80">
        <div className="mb-10 mt-8">
          <HiHome fontSize={35} color="#cc670a" />
        </div>
        <div className="mb-10">
          <FaBell fontSize={35} color="#d9d9d9" />
        </div>
        <div className="mb-10">
          <BsFillBookmarkFill fontSize={35} color="#d9d9d9" />
        </div>
        <div className="mb-10">
          <BsFillTicketPerforatedFill fontSize={35} color="#d9d9d9" />
        </div>
        <div className="mb-10">
          <BsFillPersonFill fontSize={35} color="#d9d9d9" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <div className="flex flex-col gap-5">
          <button className="flex justify-center items-center w-12 h-12 rounded-full bg-secondary">
            <HiUserGroup fontSize={25} color="#d9d9d9" />
          </button>
          <button className="flex justify-center items-center w-12 h-12 rounded-full bg-secondary">
            <GrFormAdd fontSize={25} color="#ffff" />
          </button>
        </div>
        <div>
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full bg-slate-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
