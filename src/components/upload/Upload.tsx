import { useEffect } from "react";

// UI
import { Input } from "@/components/ui/input";  // Input field component for file upload 📥
import { Label } from "@/components/ui/label";  // Label component to style the file upload button 🏷️
import { useToast } from "@/hooks/use-toast";  // Custom hook to show toast notifications 🍞

// ICONS
import { FaCloudUploadAlt } from "react-icons/fa";  // Cloud upload icon 🌥️

// STORES
import { useIsUploadingLoading } from "@/stores/useIsUploadingLoading";  // Store for loading state while uploading ⏳
import { useIsUploaded } from "@/stores/useIsUploaded";  // Store for checking if the file upload is complete ✅
import { useDataFromfile } from "@/stores/useDataFromFile";  // Store for saving data from the uploaded file 📂

// HELPERS
import { handleFileUpload } from "@/helpers/handleFileUpload";  // Helper function to handle the file upload process 🛠️

export default function Upload() {

  // Initialize toast notification system 🧑‍🍳
  const { toast } = useToast();

  // Access the uploading state and setter function from the store 🏗️
  const { isUploadingLoading, setIsUploadingLoading } = useIsUploadingLoading();
  const { setIsUploaded } = useIsUploaded();

  // Initialize the data-saving functions from the store 🗂️
  const {
    setData_from_Screen_MFR,
    setData_from_Media_Player_MFR,
    setData_from_Mounts,
    setData_from_Receptacle_Box
  } = useDataFromfile();

  // useEffect hook to handle file input changes 📂➡️
  useEffect(() => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;

    fileInput?.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (file && !(/\.(xlsx)$/i).test(file.name)) {
        // Show error toast if the file is not an Excel file 📣
        toast({
          title: "Oops! Unsupported File Type",
          description: "Please upload a file in .xlsx format to continue",
          variant: "destructive"
        })
      } else {
        // Start loading state if file is valid ✅
        setIsUploadingLoading(true);
      }
    });

    return () => {
      fileInput?.removeEventListener("change", () => { });
    };
  });

  // Function to update the states after uploading is complete 🏁
  function updateUploadingStates() {
    if (isUploadingLoading) {
      // Hide the loading page when the upload is done 🎉
      setIsUploadingLoading(false);
      // Show the home page when the file is uploaded successfully 🏠
      setIsUploaded(true);
    }
  }

  // useEffect hook to simulate upload completion after 3 seconds ⏱️
  useEffect(() => {
    setTimeout(() => {
      updateUploadingStates();  // Update states after the timeout ⏳
    }, 3000);
  }, [isUploadingLoading]);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="sm:text-sm text-normal max-w-[300px]">
        {/* Label and upload button with cloud upload icon 🌥️ */}
        <Label
          htmlFor="fileInput"
          className="font-semibold text-gray-500 rounded-md space-x-2 cursor-pointer"
        >
          <div>
            <FaCloudUploadAlt className="mx-auto text-[200px]" /> {/* Cloud upload icon 🧳 */}
            <div className="text-center bg-blue-500 border-blue-600 hover:bg-blue-600 border-[1px] font-semibold uppercase text-white px-4 py-3 rounded-md shadow-md w-full">
              Upload New file
            </div>
          </div>
        </Label>

        {/* Hidden file input field, triggered by the label when clicking the button 🗃️ */}
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

        {/* Description of file upload instructions 📑 */}
        <p className="text-gray-500 my-3 text-sm mx-auto text-center">Upload your Excel (.xlsx) files</p>
      </div>
    </div>
  );
}
