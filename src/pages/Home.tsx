import { Navbar } from "../components";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="sm:container mx-auto sm:px-0 px-2">
        <p>rest of main</p>
      </main>
    </>
  )
}
