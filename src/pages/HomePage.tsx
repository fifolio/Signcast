// UI
import { Configuration, Description, Download, Fabric, LayoutParameters, Navbar } from "../components";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function HomePage() {

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
