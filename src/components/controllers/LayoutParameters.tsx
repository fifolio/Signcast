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

  const handleOrientationChange = (value: string) => {
    setLayoutParameters({ orientation: value });
  };

  const handlePlacementChange = (value: string) => {
    setLayoutParameters({ placement: value });
  };

  const handleFloorDistanceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLayoutParameters({ floorDistance: value });
  };

  const handleNicheDepthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLayoutParameters({ nicheDepthVar: value });
  };

  return (
    <div className="bg-white border-[1px] border-gray-200 shadow-sm p-3 mb-3 rounded-md w-[300px] h-min">
      <h5 className="font-semibold text-md mb-4">Layout Parameters</h5>
      <main className="w-full text-[15px] text-gray-800 font-thin space-y-2">
        {/* Orientation */}
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

        {/* Placement */}
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

        {/* Floor Distance */}
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

        {/* Niche Depth */}
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
