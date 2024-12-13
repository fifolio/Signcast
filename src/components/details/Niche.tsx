// Importing the Input component from the UI library for handling input fields ✨
import { Input } from "../ui/input";

// Importing the custom store hook for managing niche dimensions in the app 🗂️
import { useNiche } from "@/stores/useNiche";

export default function Niche() {

  // Set the store for updating niche dimensions 🌟
  // Destructuring the setNiche function from the useNiche store to update height, width, and depth values in the store
  const { setNiche } = useNiche();

  return (
    <div className="bg-white shadow-sm rounded-md border-[1px] border-gray-200 w-full p-2">
      
      {/* Niche Dimensions Header */}
      {/* Display the section title with a bold font 🎯 */}
      <h6 className="font-semibold">Niche Dimensions</h6>
      
      <div className="flex-col">
        
        {/* Height Input */}
        {/* Section for entering the height of the niche in inches, with a placeholder value */}
        {/* The input is tied to the setNiche function to update the store with the height value 🧑‍💻 */}
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Height <span className="text-[13px] italic text-gray-500">(inches)</span></span>
          <Input key="height" type="number" placeholder='30.5' className="w-1/2" onChange={(e) => setNiche('height', Number(e.target.value))} />
        </div>
        
        {/* Width Input */}
        {/* Section for entering the width of the niche in inches, with a placeholder value */}
        {/* The input updates the store with the width value upon change 📏 */}
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Width <span className="text-[13px] italic text-gray-500">(inches)</span></span>
          <Input type="number" placeholder="51" className="w-1/2" onChange={(e) => setNiche('width', Number(e.target.value))} />
        </div>
        
        {/* Depth Input */}
        {/* Section for entering the depth of the niche in inches, with a placeholder value */}
        {/* The input updates the store with the depth value 🧮 */}
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Depth <span className="text-[13px] italic text-gray-500">(inches)</span></span>
          <Input type="number" placeholder="3.7" className="w-1/2" onChange={(e) => setNiche('depth', Number(e.target.value))} />
        </div>
      </div>

      {/* Dimensions Note */}
      {/* A small note explaining that all entered dimensions will be included in the final PDF automatically 📄 */}
      <p className="text-xs text-muted-foreground mt-5">
        All dimensions will be copied and included in the final PDF file automatically.
      </p>
    </div>
  )
}
