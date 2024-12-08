import { useEffect, useState } from "react";

// UI
import { Configuration, Description, Download, LayoutParameters, Navbar } from "../components";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function HomePage() {

  // Dynamically track page height
  const [pageHeight, setPageHeight] = useState<number>(document.documentElement.scrollHeight - 80);

  useEffect(() => {
    const updatePageHeight = () => setPageHeight(document.documentElement.scrollHeight - 80);

    // Update on initial render and window resize
    updatePageHeight();
    window.addEventListener("resize", updatePageHeight);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", updatePageHeight);
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ maxHeight: `${pageHeight}px` }} className="sm:container mx-auto sm:px-0 px-2 mt-16 mb-3 lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="space-y-2">
          <ScrollArea style={{ maxHeight: `${pageHeight}px` }} className="lg:h-full h-[600px]">
            <Configuration />
            <LayoutParameters />
            <Description />
            <Download />
          </ScrollArea>
        </div>
        <div className="w-full bg-white shadow-sm rounded-md border-[1px] border-gray-200">
          <p>Preview</p>
        </div>
      </main>
    </>
  )
}
