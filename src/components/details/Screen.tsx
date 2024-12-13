// UI: Importing the Input component from the UI folder 📦
import { Input } from "../ui/input";

// STORES: Importing the useScreen store to manage screen dimensions ⚙️
import { useScreen } from "@/stores/useScreen";

export default function Screen() {

  // Setting up the store function to update screen dimensions 📏
  const { setScreen } = useScreen();

  return (
    <div className="bg-white shadow-sm rounded-md border-[1px] border-gray-200 w-full p-2">
      <h6 className="font-semibold">Screen Dimensions</h6>
      <div className="flex-col">
        {/* Input field for Screen Height (in inches) 📐 */}
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Height <span className="text-[13px] italic text-gray-500">(inches)</span></span>
          {/* This input updates the height value in the store 🖥️ */}
          <Input type="number" placeholder='28' className="w-1/2" onChange={(e) => setScreen('height', Number(e.target.value))}/>
        </div>

        {/* Input field for Screen Width (in inches) 🌐 */}
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Width <span className="text-[13px] italic text-gray-500">(inches)</span></span>
          {/* This input updates the width value in the store 📊 */}
          <Input type="number" placeholder="48.50" className="w-1/2" onChange={(e) => setScreen('width', Number(e.target.value))}/>
        </div>

        {/* Input field for Floor Line (in inches) 📏 */}
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Floor Line <span className="text-[13px] italic text-gray-500">(inches)</span></span>
          {/* This input updates the floor line value in the store 🧑‍💻 */}
          <Input type="number" placeholder="50" className="w-1/2" onChange={(e) => setScreen('floor line', Number(e.target.value))}/>
        </div>
      </div>

      {/* Information text about dimensions being automatically included in the PDF 📄 */}
      <p className="text-xs text-muted-foreground mt-5">
        All dimensions will be copied and included in the final PDF file automatically.
      </p>
    </div>
  )
}
