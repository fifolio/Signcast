import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Configuration() {
    return (
        <div className="bg-white shadow-sm p-3 rounded-md w-[300px] h-[300px]">
            <h5 className="font-semibold text-md mb-4">Configuration</h5>

            <div>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Screen" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Screen Models</SelectLabel>
                            <SelectItem value="55TNF5J">55TNF5J</SelectItem>
                            <SelectItem value="43TNF5J">43TNF5J</SelectItem>
                            <SelectItem value="LH55WMRWBGCXZA">LH55WMRWBGCXZA</SelectItem>
                            <SelectItem value="98UM5J-B">98UM5J-B</SelectItem>
                            <SelectItem value="65UH5J-H">65UH5J-H</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
        </div>
    )
}
