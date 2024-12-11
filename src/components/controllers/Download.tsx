import { useState } from "react";

// UI
import { Button } from "../ui/button";

// ICONS
import { FiDownload } from "react-icons/fi";

// STORES
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useDescription } from "@/stores/useDescription";

// UI
import PDF from "../pdf/PDF";

export default function Download() {

    // Update the disabled btn state
    const [isLoading, setIsLoading] = useState(false)

    // Collect Data from Stores
    const { description } = useDescription();

    const collectedData = {
        title: description[0]?.title,
        drawer: description[0]?.drawer,
        department: description[0]?.department,
        screen_size: description[0]?.screen_size,
        date: description[0]?.date,
    }


    // handle Download btn
    function handleDownload() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }

    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 rounded-md w-[300px] h-min">

            <Button disabled={isLoading} className={`${isLoading ? 'flex' : 'hidden'} justify-center w-full font-semibold`}>
                <img src="images/loading.gif" alt="downloading..." className="w-9" />
            </Button>

            <PDFDownloadLink className={`${isLoading ? 'hidden' : 'block'}`} document={<PDF collectedData={collectedData}/>} fileName={`${description[0]?.title}.pdf`}>
                <Button onClick={() => handleDownload()} className="flex justify-between w-full font-semibold">
                    <span>Download as PDF</span>
                    <span><FiDownload /></span>
                </Button>
            </PDFDownloadLink>
        </div>
    )
}
