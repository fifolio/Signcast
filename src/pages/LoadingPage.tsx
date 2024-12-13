// Importing the Navbar component from the components directory
import { Navbar } from "@/components";

// LoadingPage component - displays a loading screen with a spinner and message
export default function LoadingPage() {
  return (
    <>
      {/* Header section with Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content of the loading page */}
      <div className="flex justify-center items-center w-full h-screen">
        {/* Loading gif displayed as a spinner */}
        <img src="images/loading.gif" alt="loading" className="w-12" />
        
        {/* Text message indicating the loading state */}
        <p className="text-gray-500">Preparing your planner...</p>
      </div>
    </>
  )
}
