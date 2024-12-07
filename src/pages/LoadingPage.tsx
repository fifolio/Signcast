// UI
import { Navbar } from "@/components";

export default function LoadingPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex justify-center items-center w-full h-screen">
        <img src="images/loading.gif" alt="loading" className="w-12" />
        <p className="text-gray-500">Preparing your planner...</p>
      </div>
    </>
  )
}
