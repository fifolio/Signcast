import { useEffect, useState } from "react";

// UI Components 🖥️
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

// STORES 📂
import { useDataFromfile } from "@/stores/useDataFromFile";
import { useConfigurations } from "@/stores/useConfiguration";

// TYPES 🧠
import { ConfigurationsDataTypes } from "@/types/ConfigurationsDataTypes";

export default function Configuration() {

    // Fetch data for iteration 🔄
    const {
        Data_from_Screen_MFR,      // Screen data
        Data_from_Media_Player_MFR, // Media Player data
        Data_from_Mounts,          // Mounts data
        Data_from_Receptacle_Box   // Receptacle Box data
    } = useDataFromfile();

    // Get the configurations store 📊
    const { setConfigurations } = useConfigurations();

    // Temporarily store configurations data 💾
    const [configurationsData, setConfigurationsData] = useState<ConfigurationsDataTypes>({
        screen_MFR: '',
        media_Player_MFR: '',
        mounts: '',
        receptacle_Box: '',
    });

    // Update configurations whenever configurationsData changes 📝
    useEffect(() => {
        setConfigurations([configurationsData]); // Update the global configurations state
    }, [configurationsData, setConfigurationsData]);


    return (
        <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 mb-3 rounded-md w-[300px] h-min">
            <h5 className="font-semibold text-md mb-4">Configuration</h5>

            {/* SCREEN MODELS 🖥️ */}
            <div className="mb-3">
                <Select onValueChange={(value) => setConfigurationsData((prev) => ({ ...prev, screen_MFR: value }))}>
                    <Label className="text-gray-800 font-thin">Screen</Label>
                    <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select a Screen" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Screen Models</SelectLabel>
                            {/* Mapping over the Screen data 🔄 */}
                            {Data_from_Screen_MFR.map((screen, i) => (
                                <SelectItem key={i} value={`${screen['Screen MFR']}`}>{screen['Screen MFR']}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* MEDIA PLAYERS 🎮 */}
            <div className="mb-3">
                <Select onValueChange={(value) => setConfigurationsData((prev) => ({ ...prev, media_Player_MFR: value }))}>
                    <Label className="text-gray-800 font-thin">Media Player</Label>
                    <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select a Media Player" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Media Player</SelectLabel>
                            {/* Mapping over Media Player data 🎵 */}
                            {Data_from_Media_Player_MFR.map((mediaPlayer, i) => (
                                <SelectItem key={i} value={`${mediaPlayer['MFG. PART']}`}>{mediaPlayer['MFG. PART']}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* MOUNTS 🏔️ */}
            <div className="mb-3">
                <Select onValueChange={(value) => setConfigurationsData((prev) => ({ ...prev, mounts: value }))}>
                    <Label className="text-gray-800 font-thin">Mounts</Label>
                    <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select a Mount Model" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Mounts</SelectLabel>
                            {/* Mapping over Mounts data 🏗️ */}
                            {Data_from_Mounts.map((mount, i) => (
                                <SelectItem key={i} value={`${mount['MFG. PART']}`}>{mount['MFG. PART']}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* RECEPTACLE BOX 🔌 */}
            <div className="mb-3">
                <Select onValueChange={(value) => setConfigurationsData((prev) => ({ ...prev, receptacle_Box: value }))}>
                    <Label className="text-gray-800 font-thin">Receptacle Box</Label>
                    <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Select a Receptacle Box" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Receptacle Box's</SelectLabel>
                            {/* Mapping over Receptacle Box data 🔋 */}
                            {Data_from_Receptacle_Box.map((receptacle_box, i) => (
                                <SelectItem key={i} value={`${receptacle_box['MFG. PART']}`}>{receptacle_box['MFG. PART']}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}
