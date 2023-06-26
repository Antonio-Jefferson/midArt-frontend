import { BsFillImageFill } from 'react-icons/bs'

export default function PostMobile() {
  return (
    <div className="md:hidden bg-gray-850 h-58 mt-14 p-5">
      <div className="flex gap-5 items-center">
        <div className="w-14 h-14 rounded-full bg-gray-200">image</div>
        <h2 className="text-base text-gray-200 font-semibold">Jefferson</h2>
      </div>
      <div className="mb-4">
        <input
          className="text-gray-100 ml-20 bg-transparent w-64 outline-none"
          type="text"
          placeholder="digite aqui..."
        />
        <div className="m-auto w-40 h-20 mt-4">
          <label htmlFor="file">
            <BsFillImageFill fontSize={90} color="#D9D9D9" />
          </label>
          <input className="invisible" type="file" name="file" id="file" />
        </div>
        <div className="flex justify-end">
          <button className="text-base text-gray-200 bg-secondary p-1 rounded-md">
            Públicar
          </button>
        </div>
      </div>
    </div>
  )
}
