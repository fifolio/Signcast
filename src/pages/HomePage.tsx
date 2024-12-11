import { useEffect } from "react";

// UI
import { Configuration, Description, Download, Fabric, LayoutParameters, Navbar } from "../components";
import { ScrollArea } from "@/components/ui/scroll-area"

// STORES
import { useConfigurations } from "@/stores/useConfiguration";
import { useLayoutParameters } from "@/stores/useLayoutParameters";
import { useDescription } from "@/stores/useDescription";
import { useArchive } from "@/stores/useArchive";
import { useDataFromfile } from "@/stores/useDataFromFile";

export default function HomePage() {

  const { setArchive } = useArchive();
  const {Data_from_Screen_MFR, Data_from_Media_Player_MFR, Data_from_Mounts, Data_from_Receptacle_Box
} = useDataFromfile();
  const { configurations } = useConfigurations();
  const { layoutParameters } = useLayoutParameters();
  const { description } = useDescription();

  const newArchiveEntry = [
    Data_from_Screen_MFR,
    Data_from_Media_Player_MFR,
    Data_from_Mounts,
    Data_from_Receptacle_Box,
    configurations, 
    layoutParameters, 
    description];

  // Dynamically pass the new data to the Archive
  useEffect(() => {
    setArchive(newArchiveEntry as []);
  }, [configurations, layoutParameters, description]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="sm:container mx-auto sm:px-0 px-2 mt-16 mb-3 lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="space-y-2">
          <ScrollArea className="h-[858px]">
            <Configuration />
            <LayoutParameters />
            <Description />
            <Download />
          </ScrollArea>
        </div>
        <div className=" w-full bg-white shadow-sm rounded-md border-[1px] border-gray-200">
          <Fabric />
        </div>
      </main>
    </>
  )
}
