// UI
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// STORES
import { useIsUploaded } from "@/stores/useIsUploaded";
import { useIsUploadingLoading } from "@/stores/useIsUploadingLoading";

// ICONS
import { MdOutlineUploadFile } from "react-icons/md";


export default function Navbar() {

  const { isUploaded } = useIsUploaded();
  const {isUploadingLoading} = useIsUploadingLoading();

  return (
    <div className="bg-white py-2 shadow-sm fixed w-full">
      <div className="sm:container mx-auto sm:px-0 px-2 flex justify-between items-center">
        <div>
          <a className="flex items-center" href="https://signcast.ca/" target="_blank">
            <img className="w-[90px] mr-3" src="https://149355274.v2.pressablecdn.com/wp-content/uploads/2018/05/signcast-email-logo.png" alt="Signcast Logo" />
            <span className="text-gray-400 font-semibold mt-1 sm:block hidden">LED Install Planner</span>
          </a>
        </div>
        <div className={`sm:text-sm text-normal ${!isUploaded || isUploadingLoading && 'hidden'}`}>
          <Label htmlFor="upload" className="bg-blue-500 border-blue-600 hover:bg-blue-600 border-[1px] font-semibold uppercase text-white px-4 py-2 rounded-md shadow-sm space-x-2 flex items-center cursor-pointer">
            <div className="flex">Upload .CSV<span className="sm:block hidden mx-1">file</span></div>
            <div className="text-lg"><MdOutlineUploadFile /></div>
          </Label>
          <Input type="file" id="upload" className="hidden" />
        </div>
      </div>
    </div>
  )
}
