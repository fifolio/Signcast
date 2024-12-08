// UI
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"


export default function LayoutParameters() {

    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 mb-3 rounded-md w-[300px] h-min">
            <h5 className="font-semibold text-md mb-4">Layout Parameters</h5>

            <main className="w-full text-[15px] text-gray-800 font-thin space-y-2">

                {/* Orientations */}
                <div className="flex items-center">
                    <h6 className="w-1/2">Orientation</h6>
                    <div className="w-1/2 text-black font-normal">
                        <Select defaultValue="horizontal">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an Orientation" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Orientations</SelectLabel>
                                    <SelectItem value="vertical">Vertical</SelectItem>
                                    <SelectItem value="horizontal">Horizontal</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Placements */}
                <div className="flex items-center">
                    <h6 className="w-1/2">Placement</h6>
                    <div className="w-1/2 text-black font-normal">
                        <Select defaultValue="niche">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Placement" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Placements</SelectLabel>
                                    <SelectItem value="niche">Niche</SelectItem>
                                    <SelectItem value="flat_wall">Flat Wall</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Floor Distance */}
                <div className="flex items-center">
                    <h6 className="w-1/2">Floor Distance</h6>
                    <div className="w-1/2 text-black font-normal">
                        <Input placeholder='i.g. 50"' type="number" />
                    </div>
                </div>

                {/* Niche Depth Var */}
                <div className="flex items-center">
                    <h6 className="w-1/2">Niche Depth Var</h6>
                    <div className="w-1/2 text-black font-normal">
                        <Input placeholder='i.g. 0.3"' type="number" />
                    </div>
                </div>

            </main>
        </div>
    )
}
