import { useState } from "react"

// UI
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"



export default function Description() {

    const [date, setDate] = useState<Date>()

    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 mb-3 rounded-md w-[300px] h-min">
            <h5 className="font-semibold text-md mb-4">Description</h5>

            <main className="w-full text-sm text-gray-800 space-y-4">

                {/* Title */}
                <div className="space-y-2">
                    <h6>Title</h6>
                    <div className="w-full text-black font-normal">
                        <Input placeholder='Enter a title..' type="text" />
                    </div>
                </div>

                {/* Drawer */}
                <div className="space-y-2">
                    <h6>Drawer</h6>
                    <div className="w-full text-black font-normal">
                        <Input placeholder='Provide a drawer..' type="text" />
                    </div>
                </div>

                {/* Department */}
                <div className="space-y-2">
                    <h6>Department</h6>
                    <div className="w-full text-black font-normal">
                        <Input placeholder='Specify Department..' type="text" />
                    </div>
                </div>

                {/* Screen Size */}
                <div className="space-y-2">
                    <h6>Screen Size</h6>
                    <div className="w-full text-black font-normal">
                        <Input placeholder='Specify Screen Size..' type="text" />
                    </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                    <h6>Date</h6>
                    <div className="w-full text-black font-normal">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

            </main>
        </div>
    )
}
