// Import necessary components for the UI layout. These components are used to construct the main content of the page.
import { Configuration, Description, Download, Fabric, LayoutParameters, Navbar } from "../components";
import { ScrollArea } from "@/components/ui/scroll-area"  // Import the ScrollArea component to create a scrollable area for content. 📜

export default function HomePage() {
  return (
    <>
      {/* The header section, containing the Navbar component for site navigation. 🧭 */}
      <header>
        <Navbar /> {/* The Navbar component renders the site's navigation bar. 🌐 */}
      </header>

      {/* Main content section with responsive layout and padding adjustments based on screen size. 🖥️📱 */}
      <main className="sm:container mx-auto sm:px-0 px-2 mt-16 mb-3 lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        {/* Container for the scrollable area and the content components. 📦 */}
        <div className="space-y-2">
          {/* Scrollable area that holds the Configuration, LayoutParameters, Description, and Download components. 🧳 */}
          <ScrollArea className="h-[858px]">
            <Configuration /> {/* Configuration component: Displays the configuration settings or options. ⚙️ */}
            <LayoutParameters /> {/* LayoutParameters component: Shows layout-related parameters or settings. 📐 */}
            <Description /> {/* Description component: Provides descriptive text or content. 📝 */}
            <Download /> {/* Download component: Displays download options or links for resources. ⬇️ */}
          </ScrollArea>
        </div>

        {/* The second section, a styled container for the Fabric component. 🧵 */}
        <div className="w-full bg-white shadow-sm rounded-md border-[1px] border-gray-200">
          <Fabric /> {/* Fabric component: Likely displays visual elements related to fabric design or a feature. 🪡 */}
        </div>
      </main>
    </>
  )
}
