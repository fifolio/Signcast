import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

// UI
import PDF from "../pdf/PDF";
import { Button } from "../ui/button";

// ICONS
import { FiDownload } from "react-icons/fi";

// STORES
import { useConfigurations } from "@/stores/useConfiguration";
import { useLayoutParameters } from "@/stores/useLayoutParameters";
import { useDescription } from "@/stores/useDescription";
import { useNiche } from "@/stores/useNiche";
import { useScreen } from "@/stores/useScreen";
import { useNotes } from "@/stores/useNotes";
import { useDataFromfile } from "@/stores/useDataFromFile";


export default function Download() {

    // Update the disabled btn state
    const [isLoading, setIsLoading] = useState(false)

    // Collect Data from Stores
    const { Data_from_Screen_MFR, Data_from_Media_Player_MFR } = useDataFromfile();
    const { configurations } = useConfigurations();
    const { layoutParameters } = useLayoutParameters();
    const { description } = useDescription();
    const { niche } = useNiche();
    const { screen } = useScreen();
    const { notes } = useNotes();

    // Extra details
    const addOn_Configurations = Data_from_Screen_MFR?.filter(item => item["Screen MFR"] === configurations[0]?.screen_MFR);
    const media_player_type = Data_from_Media_Player_MFR?.filter(item => item["MFG. PART"] === configurations[0]?.media_Player_MFR);

    // Pass all the collected data to PDF.tsx
    const collectedData = {

        // From Description
        title: description[0]?.title,
        drawer: description[0]?.drawer,
        department: description[0]?.department,
        screen_size: description[0]?.screen_size,
        date: description[0]?.date,

        // From Configurations
        screen_MFR: `${addOn_Configurations?.[0]?.["Make"] || ''} ${configurations[0]?.screen_MFR}`,
        media_Player_MFR: `${media_player_type?.[0]?.["Make"] || ''} ${configurations[0]?.media_Player_MFR}`,
        mounts: configurations[0]?.mounts,
        receptacle_Box: configurations[0]?.receptacle_Box,

        // From Layout Parameters
        orientation: layoutParameters?.orientation,
        placement: layoutParameters?.placement,
        nicheDepthVar: layoutParameters?.nicheDepthVar,
        floorDistance: layoutParameters?.floorDistance,

        // From Niche Dimensions
        niche_width: niche?.width,
        niche_height: niche?.height,
        niche_depth: niche?.depth,

        // From Screen Dimensions
        screen_floorLine: screen?.["floor line"],
        screen_width: screen?.width,
        screen_height: screen?.height,
        screen_weight: addOn_Configurations?.[0]?.["Weight (LBS)"] || '',

        // From Notes
        notes: notes
    }



    // handle Download btn
    function handleDownload() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 5000);
    }

    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 rounded-md w-[300px] h-min">

            <Button disabled={isLoading} className={`${isLoading ? 'flex' : 'hidden'} justify-center w-full font-semibold`}>
                <img src="images/loading.gif" alt="downloading..." className="w-9" />
            </Button>

            <PDFDownloadLink className={`${isLoading ? 'hidden' : 'block'}`}
                document={<PDF data={collectedData} />}
                fileName={description[0]?.title ? `${description[0].title}.pdf` : `SignCast Media Planner.pdf`}
            >
                <Button onClick={() => handleDownload()} className="flex justify-between w-full font-semibold">
                    <span>Download as PDF</span>
                    <span><FiDownload /></span>
                </Button>
            </PDFDownloadLink>
        </div>
    )
}
