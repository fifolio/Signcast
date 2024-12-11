import { Input } from "../ui/input";

export default function Screen() {
  return (
<div className="bg-white shadow-sm rounded-md border-[1px] border-gray-200 w-full p-2">
      <h6 className="font-semibold">Screen Dimensions</h6>
      <div className="flex-col">
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Height</span>
          <Input type="number" placeholder='28' className="w-1/2"  />
        </div>
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Width</span>
          <Input type="number" placeholder="48.50" className="w-1/2" />
        </div>
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Floor Line</span>
          <Input type="number" placeholder="50" className="w-1/2" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-5">
        All dimensions will be copied and included in the final PDF file automatically.
      </p>
    </div>
  )
}
