// src/helpers/handleFileUpload.ts
import * as XLSX from "xlsx";

interface HandleFileUploadArgs {
  setData_from_Screen_MFR: (data: []) => void;
  setData_from_Media_Player_MFR: (data: []) => void;
  setData_from_Mounts: (data: []) => void;
  setData_from_Receptacle_Box: (data: []) => void;
}

export const handleFileUpload = ({ 
  setData_from_Screen_MFR, 
  setData_from_Media_Player_MFR, 
  setData_from_Mounts, 
  setData_from_Receptacle_Box 
}: HandleFileUploadArgs) => (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBufferLike);
      const workbook = XLSX.read(data, { type: "array" });
      const sheets = workbook.SheetNames;

      sheets.forEach((sheetName) => {
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (sheetName === "Screen MFR") {
          setData_from_Screen_MFR(jsonData as []);
        } else if (sheetName === "Media Player MFR") {
          setData_from_Media_Player_MFR(jsonData as []);
        } else if (sheetName === "Mounts") {
          setData_from_Mounts(jsonData as []);
        } else if (sheetName === "Receptacle Box") {
          setData_from_Receptacle_Box(jsonData as []);
        }
      });
    };

    reader.readAsArrayBuffer(file);
  }
};
