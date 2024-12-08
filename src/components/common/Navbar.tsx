import { useEffect } from "react";

// UI
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

// STORES
import { useIsUploaded } from "@/stores/useIsUploaded";
import { useIsUploadingLoading } from "@/stores/useIsUploadingLoading";
import { useDataFromfile } from "@/stores/useDataFromFile";

// ICONS
import { MdOutlineUploadFile } from "react-icons/md";

// HELPERS
import { handleFileUpload } from "@/helpers/handleFileUpload";

export default function Navbar() {

  const { toast } = useToast();
  const { isUploaded } = useIsUploaded();

  // Run the Loading State when the uploaded file type is accepted 
  const { isUploadingLoading, setIsUploadingLoading } = useIsUploadingLoading();
  const { setIsUploaded } = useIsUploaded();

  // Store the data from the uploaded file
  const {
    setData_from_Screen_MFR,
    setData_from_Media_Player_MFR,
    setData_from_Mounts,
    setData_from_Receptacle_Box } = useDataFromfile();

  useEffect(() => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;

    fileInput?.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (file && !(/\.(xlsx)$/i).test(file.name)) {
        toast({
          title: "Oops! Unsupported File Type",
          description: "Please upload a file in .xlsx format to continue",
          variant: "destructive"
        })
      } else {
        setIsUploadingLoading(true);
      }
    });

    return () => {
      fileInput?.removeEventListener("change", () => { });
    };
  });

  function updateUploadingStates() {
    if (isUploadingLoading) {
      // hide the Loading page
      setIsUploadingLoading(false)
      // display the Home page
      setIsUploaded(true)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      updateUploadingStates()
    }, 3000)
  }, [isUploadingLoading])

  return (
    <div className="bg-white py-2 shadow-sm w-full fixed top-0 z-50">
      <div className="sm:container mx-auto sm:px-0 px-2 flex justify-between items-center">
        <div>
          <a className="flex items-center" href="https://signcast.ca/" target="_blank">
            <img className="w-[90px] mr-3" src="https://149355274.v2.pressablecdn.com/wp-content/uploads/2018/05/signcast-email-logo.png" alt="Signcast Logo" />
            <span className="text-gray-400 font-semibold mt-1 sm:block hidden">LED Install Planner</span>
          </a>
        </div>
        <div className={`sm:text-sm text-normal ${isUploaded == false || isUploadingLoading == true ? 'hidden' : ''}`}>
          <Label htmlFor="fileInput" className="bg-blue-500 border-blue-600 hover:bg-blue-600 border-[1px] font-semibold uppercase text-white px-4 py-2 rounded-md shadow-sm space-x-2 flex items-center cursor-pointer">
            <div className="flex">Upload <span className="sm:block hidden mx-1">new file</span></div>
            <div className="text-lg"><MdOutlineUploadFile /></div>
          </Label>
          <Input
            type="file"
            id="fileInput"
            accept=".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet"
            className="hidden"
            onChange={handleFileUpload({
              setData_from_Screen_MFR,
              setData_from_Media_Player_MFR,
              setData_from_Mounts,
              setData_from_Receptacle_Box,
            })}
          />
        </div>
      </div>
    </div>
  )
}
