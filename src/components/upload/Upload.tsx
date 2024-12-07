import { useEffect } from "react";
import Papa from 'papaparse';

// UI
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// ICONS
import { FaCloudUploadAlt } from "react-icons/fa";

// STORES
import { useIsUploadingLoading } from "@/stores/useIsUploadingLoading";
import { useIsUploaded } from "@/stores/useIsUploaded";
import { useDataFromfile } from "@/stores/useDataFromFile";

export default function Upload() {

  // Run the Loading State when the uploaded file type is accepted 
  const { isUploadingLoading, setIsUploadingLoading } = useIsUploadingLoading();
  const { setIsUploaded } = useIsUploaded();

  // Store the data from the uploaded file
  const { setDataFromFile } = useDataFromfile();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;

        // Parse CSV data
        Papa.parse(csvData, {
          header: true, // Assumes the first row is a header
          skipEmptyLines: true,
          complete: (results) => {
            setDataFromFile(results.data as []);
          },
        });
      };
      reader.readAsText(file); // Read the file as text
    }
  };

  // Check on uploaded file type
  useEffect(() => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    const errorDiv = document.getElementById("uploadError");

    fileInput?.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (file && !(/\.(csv|xls|xlsx|ods)$/i).test(file.name)) {
        errorDiv?.classList.add("block");
        errorDiv?.classList.remove("hidden");
      } else {
        errorDiv?.classList.add("hidden");
        errorDiv?.classList.remove("block");
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
          <div className="text-[200px]">
            <FaCloudUploadAlt className="mx-auto" />
          </div>
          <div className="text-center bg-blue-500 border-blue-600 hover:bg-blue-600 border-[1px] font-semibold uppercase text-white px-4 py-3 rounded-md shadow-md">
            Upload New file
          </div>
          <div
            id="uploadError"
            className="hidden bg-red-500 border-[1px] text-center border-red-600 text-white font-normal p-2 rounded-md mt-5"
          >
            Only .csv, .xls, .xlsx, or .ods files are allowed!
          </div>
        </Label>
        <Input
          type="file"
          id="fileInput"
          accept=".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet"
          className="hidden"
          onChange={handleFileUpload}
        />

        <p className="text-gray-500 my-3 text-sm mx-auto text-center">You can upload files in the following formats: .csv, .xls, .xlsx, or .ods.</p>
      </div>
    </div>
  );
}