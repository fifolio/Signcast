// src/helpers/handleFileUpload.ts

// Importing the XLSX library to work with Excel files (for parsing .xlsx files). 📊
import * as XLSX from "xlsx";

// Define an interface for the arguments required by the handleFileUpload function. 
// It expects functions to set data for different categories like Screen MFR, Media Player MFR, Mounts, and Receptacle Box. 🔧
interface HandleFileUploadArgs {
  setData_from_Screen_MFR: (data: []) => void; // Function to set data for Screen MFR
  setData_from_Media_Player_MFR: (data: []) => void; // Function to set data for Media Player MFR
  setData_from_Mounts: (data: []) => void; // Function to set data for Mounts
  setData_from_Receptacle_Box: (data: []) => void; // Function to set data for Receptacle Box
}

// The main function that handles the file upload. It receives an object with setter functions as arguments. 📤
export const handleFileUpload = ({ 
  setData_from_Screen_MFR, 
  setData_from_Media_Player_MFR, 
  setData_from_Mounts, 
  setData_from_Receptacle_Box 
}: HandleFileUploadArgs) => (event: React.ChangeEvent<HTMLInputElement>) => {
  // Get the uploaded file from the input element. 📂
  const file = event.target.files?.[0];

  // Check if a file is selected. If yes, process it; if not, do nothing. 🚫
  if (file) {
    // Create a new FileReader instance to read the file's contents. 📖
    const reader = new FileReader();

    // When the file is successfully loaded, process the data. 🔄
    reader.onload = (e) => {
      // Convert the result to a Uint8Array for binary processing. 💻
      const data = new Uint8Array(e.target?.result as ArrayBufferLike);

      // Parse the binary data as an Excel workbook. 📥
      const workbook = XLSX.read(data, { type: "array" });

      // Get the names of all the sheets in the workbook. 📑
      const sheets = workbook.SheetNames;

      // Iterate through each sheet in the workbook. 🔄
      sheets.forEach((sheetName) => {
        // Get the content of the current sheet. 📄
        const worksheet = workbook.Sheets[sheetName];

        // Convert the sheet data into a JSON format. 📝
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Based on the sheet name, call the corresponding setter function to store the data. 🔄
        if (sheetName === "Screen MFR") {
          setData_from_Screen_MFR(jsonData as []); // Set data for Screen MFR
        } else if (sheetName === "Media Player MFR") {
          setData_from_Media_Player_MFR(jsonData as []); // Set data for Media Player MFR
        } else if (sheetName === "Mounts") {
          setData_from_Mounts(jsonData as []); // Set data for Mounts
        } else if (sheetName === "Receptacle Box") {
          setData_from_Receptacle_Box(jsonData as []); // Set data for Receptacle Box
        }
      });
    };

    // Read the file as an ArrayBuffer to allow binary data processing. 🗂️
    reader.readAsArrayBuffer(file);
  }
};
