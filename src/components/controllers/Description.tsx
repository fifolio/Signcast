import { ChangeEvent, useEffect, useState } from "react";

// UI
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

// STORES
import { useDescription } from "@/stores/useDescription";

// TYPES
import { DescriptionDataTypes } from "@/types/DescriptionDataTypes";


export default function Description() {
    const [date, setDate] = useState<Date | undefined>();

    // Setting the Description store 🛠️
    const { setDescription } = useDescription();

    // Temporary state to hold description data 💾
    const [descriptionData, setDescriptionData] = useState<DescriptionDataTypes>({
        title: "",
        drawer: "",
        department: "",
        screen_size: "",
        date: "",
    });

    // Handling input changes for fields 📝
    const handleInputChange =
        (key: keyof DescriptionDataTypes) => (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setDescriptionData((prev) => ({ ...prev, [key]: value }));
        };

    // Handling date change 🗓️
    const handleDateChange = (selectedDate: Date | undefined) => {
        setDate(selectedDate);
        setDescriptionData((prev) => ({
            ...prev, date: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
        }));
    };

    // Updating description in the store whenever descriptionData changes 🔄
    useEffect(() => {
        setDescription([descriptionData]);
    }, [descriptionData]);

    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 mb-3 rounded-md w-[300px] h-min">
            <h5 className="font-semibold text-md mb-4">Description</h5>

            <main className="w-full text-sm text-gray-800 space-y-4">
                {/* Title Input Section 🏷️ */}
                <div className="space-y-2">
                    <h6>Title</h6>
                    <div className="w-full text-black font-normal">
                        <Input
                            className="capitalize"
                            placeholder="Enter a title"
                            type="text"
                            onChange={handleInputChange("title")}
                        />
                    </div>
                </div>

                {/* Drawer Input Section 📦 */}
                <div className="space-y-2">
                    <h6>Drawer</h6>
                    <div className="w-full text-black font-normal">
                        <Input
                            className="capitalize"
                            placeholder="Provide a drawer"
                            type="text"
                            onChange={handleInputChange("drawer")}
                        />
                    </div>
                </div>

                {/* Department Input Section 🏢 */}
                <div className="space-y-2">
                    <h6>Department</h6>
                    <div className="w-full text-black font-normal">
                        <Input
                            className="capitalize"
                            placeholder="Specify Department"
                            type="text"
                            onChange={handleInputChange("department")}
                        />
                    </div>
                </div>

                {/* Screen Size Input Section 📏 */}
                <div className="space-y-2">
                    <h6>Screen Size</h6>
                    <div className="w-full text-black font-normal">
                        <Input
                            placeholder="Screen Size in Inches"
                            type="number"
                            onChange={handleInputChange("screen_size")}
                        />
                    </div>
                </div>

                {/* Date Selection Section 📅 */}
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
                                    onSelect={handleDateChange}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </main>
        </div>
    );
}
