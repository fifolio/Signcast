
// ICONS
import { MdOutlineUploadFile } from "react-icons/md";


export default function Navbar() {
  return (
    <div className="bg-white py-2 shadow-sm">
      <div className="sm:container mx-auto sm:px-0 px-2 flex justify-between items-center">
        <div>
          <a href="https://signcast.ca/" target="_blank">
            <img className="w-[90px]" src="https://149355274.v2.pressablecdn.com/wp-content/uploads/2018/05/signcast-email-logo.png" alt="Signcast Logo" />
          </a>
        </div>
        <div className="sm:text-sm text-normal">
          <button className="bg-blue-500 border-blue-600 hover:bg-blue-600 border-[1px] font-semibold uppercase text-white px-6 py-2 rounded-md shadow-sm space-x-2 flex items-center">
            <div className="flex">Upload .CSV<span className="sm:block hidden mx-1">file</span></div>
            <div className="text-lg"><MdOutlineUploadFile /></div>
          </button>
        </div>
      </div>
    </div>
  )
}
