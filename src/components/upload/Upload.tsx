import { useEffect } from "react";

// UI
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// ICONS
import { FaCloudUploadAlt } from "react-icons/fa";

// STORES
import { useIsUploadingLoading } from "@/stores/useIsUploadingLoading";
import { useIsUploaded } from "@/stores/useIsUploaded";
import { useDataFromfile } from "@/stores/useDataFromFile";

// HELPERS
import { handleFileUpload } from "@/helpers/handleFileUpload";

export default function Upload() {


  const { toast } = useToast();

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
    <div className="flex justify-center items-center w-full h-screen">
      <div className="sm:text-sm text-normal max-w-[300px]">
        <Label
          htmlFor="fileInput"
          className="font-semibold text-gray-500 rounded-md space-x-2 cursor-pointer"
        >
          <div>
            <FaCloudUploadAlt className="mx-auto text-[200px]" />
            <div className="text-center bg-blue-500 border-blue-600 hover:bg-blue-600 border-[1px] font-semibold uppercase text-white px-4 py-3 rounded-md shadow-md w-full">
              Upload New file
            </div>
          </div>
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

        <p className="text-gray-500 my-3 text-sm mx-auto text-center">Upload your Excel (.xlsx) files</p>
      </div>
    </div>
  );
}