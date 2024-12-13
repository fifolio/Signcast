import { ChangeEvent } from 'react';
import { useLayoutParameters } from '@/stores/useLayoutParameters';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function LayoutParameters() {
  const { layoutParameters, setLayoutParameters } = useLayoutParameters();

  // Handle orientation change 🌀
  // This function updates the layout orientation when the user selects a new value.
  const handleOrientationChange = (value: string) => {
    setLayoutParameters({ orientation: value });
  };

  // Handle placement change 📍
  // This function updates the placement setting when a new option is selected.
  const handlePlacementChange = (value: string) => {
    setLayoutParameters({ placement: value });
  };

  // Handle floor distance change 📏
  // This function is triggered when the floor distance input is changed by the user.
  // It ensures the floor distance is updated in the layout parameters.
  const handleFloorDistanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLayoutParameters({ floorDistance: value });
  };

  // Handle niche depth change 📐
  // This function updates the depth of the niche in the layout parameters when the user changes the value.
  const handleNicheDepthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLayoutParameters({ nicheDepthVar: value });
  };

  return (
    <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 mb-3 rounded-md w-[300px] h-min">
      <h5 className="font-semibold text-md mb-4">Layout Parameters</h5>
      <main className="w-full text-[15px] text-gray-800 font-thin space-y-2">

        {/* Orientation Selection 🌀 */}
        {/* Allows the user to select the orientation of the layout */}
        <div className="flex items-center">
          <h6 className="w-1/2">Orientation</h6>
          <div className="w-1/2 text-black font-normal">
            <Select onValueChange={handleOrientationChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={layoutParameters.orientation} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Orientations</SelectLabel>
                  <SelectItem value="Horizontal">Horizontal</SelectItem>
                  <SelectItem value="Vertical">Vertical</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Placement Selection 📍 */}
        {/* Allows the user to choose where to place the layout element */}
        <div className="flex items-center">
          <h6 className="w-1/2">Placement</h6>
          <div className="w-1/2 text-black font-normal">
            <Select onValueChange={handlePlacementChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={layoutParameters.placement} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Placements</SelectLabel>
                  <SelectItem value="Niche">Niche</SelectItem>
                  <SelectItem value="Flat Wall">Flat Wall</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Floor Distance Input 📏 */}
        {/* Allows the user to input the distance from the floor */}
        <div className="flex items-center">
          <h6 className="w-1/2">Floor Distance</h6>
          <div className="w-1/2 text-black font-normal">
            <Input
              type="number"
              value={layoutParameters.floorDistance}
              onChange={handleFloorDistanceChange}
              placeholder="e.g., 50"
            />
          </div>
        </div>

        {/* Niche Depth Input 📐 */}
        {/* Allows the user to input the depth of the niche */}
        <div className="flex items-center">
          <h6 className="w-1/2">Niche Depth</h6>
          <div className="w-1/2 text-black font-normal">
            <Input
              type="number"
              value={layoutParameters.nicheDepthVar}
              onChange={handleNicheDepthChange}
              placeholder="e.g., 20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
