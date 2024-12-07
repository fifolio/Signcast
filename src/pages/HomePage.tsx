// UI
import { Configuration, Navbar } from "../components";

// STORES
import { useDataFromfile } from "@/stores/useDataFromFile";



export default function HomePage() {

  // Fetch the storred data from file
  const { dataFromFile } = useDataFromfile();

  console.log('My Data:', dataFromFile)

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="sm:container mx-auto sm:px-0 px-2 mt-5 lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <div className="space-y-2">
          <Configuration />
        </div>
        <div className="w-full bg-white shadow-sm rounded-md">
          <p>Preview</p>
        </div>
      </main>
    </>
  )
}
