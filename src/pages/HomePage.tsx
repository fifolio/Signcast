import { Configuration, Navbar } from "../components";

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="sm:container mx-auto sm:px-0 px-2 mt-5 flex space-x-4">
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
