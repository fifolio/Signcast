// UI
import { Button } from "../ui/button";

// ICONS
import { FiDownload } from "react-icons/fi";


export default function Download() {
    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 rounded-md w-[300px] h-min">
            <Button className="flex justify-between w-full font-semibold">
                <span>Download as PDF</span>
                <span><FiDownload /></span>
            </Button>
        </div>
    )
}
