import { Input } from "../ui/input";

export default function Niche() {
  return (
    <div className="bg-white shadow-sm rounded-md border-[1px] border-gray-200 w-full p-2">
      <h6 className="font-semibold">Niche Dimensions</h6>
      <div className="flex-col">
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Height</span>
          <Input type="number" placeholder='30.5' className="w-1/2"  />
        </div>
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Width</span>
          <Input type="number" placeholder="51" className="w-1/2" />
        </div>
        <div className="flex items-center justify-between space-y-2 w-full text-sm">
          <span className="font-normal w-1/2 mt-1">Depth</span>
          <Input type="number" placeholder="3.7" className="w-1/2" />
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-5">
        All dimensions will be copied and included in the final PDF file automatically.
      </p>
    </div>
  )
}
