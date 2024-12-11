import { useEffect, useRef, useState } from 'react';

// STORES
import { useLayoutParameters } from '@/stores/useLayoutParameters';
import { useDrawingToolStore } from '@/stores/useAddDrawingTools';

// UI
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Niche, Notes, Screen } from '../details';

// ICONS
import { MdOutlineDraw } from "react-icons/md";
import { LuRectangleHorizontal } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";
import { PiLineVerticalBold } from "react-icons/pi";
import { LuTextCursor } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";


export const Fabric = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fabricCanvasRef = useRef<any>(null); // Store the Fabric.js canvas instance
  const { layoutParameters } = useLayoutParameters();
  const { orientation, placement, floorDistance, nicheDepthVar } = layoutParameters;

  // Access the selected tool from the global store
  const selectedTool = useDrawingToolStore((state) => state.selectedTool);

  // Pass the selected drawing tool to the store
  const setSelectedTool = useDrawingToolStore((state) => state.setSelectedTool);

  const [addNewText, setAddNewText] = useState<string>('');


  // Initialize Fabric.js canvas once
  useEffect(() => {
    if (canvasRef.current) {
      const fabric = window.fabric;
      const canvas = new fabric.Canvas(canvasRef.current);

      // Save the Fabric.js canvas instance
      fabricCanvasRef.current = canvas;

      // Set initial dimensions and styles
      canvas.setWidth(900);
      canvas.setHeight(500);

      return () => {
        canvas.dispose();
      };
    }
  }, []); // Run only once when the component mounts

  // Update layout based on parameters and keep the drawings
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      // Remove old objects with specific tags
      canvas.getObjects().forEach((obj: { customId: string; }) => {
        if (obj.customId === 'screen' || obj.customId === 'label' || obj.customId === 'niche' || obj.customId === 'dimension') {
          canvas.remove(obj);
        }
      });

      const width = orientation === 'horizontal' ? 300 : 150;
      const height = orientation === 'horizontal' ? 150 : 300;

      // Draw the LED screen
      const screen = new window.fabric.Rect({
        width,
        height,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
        top: canvas.height / 2 - height / 2,
        left: canvas.width / 2 - width / 2,
      });
      screen.customId = 'screen'; // Add custom ID
      canvas.add(screen);

      // Add dashed box for the power outlet
      const powerOutlet = new window.fabric.Rect({
        width: 50,
        height: 50,
        stroke: 'gray',
        strokeWidth: 2,
        fill: 'transparent',
        top: screen.top! + screen.height! + 20,
        left: canvas.width / 2 - 25,
      });
      powerOutlet.customId = 'screen'; // Add custom ID
      canvas.add(powerOutlet);

      // Handle niche installation
      if (placement === 'Niche') {
        const niche = new window.fabric.Rect({
          width: width + nicheDepthVar,
          height: height + nicheDepthVar,
          stroke: 'gray',
          strokeWidth: 2,
          fill: 'transparent',
          left: screen.left! - nicheDepthVar / 2,
          top: screen.top! - nicheDepthVar / 2,
        });
        niche.customId = 'niche'; // Add custom ID
        canvas.add(niche);
      }

      // Render updated canvas
      canvas.renderAll();
    }
  }, [orientation, placement, floorDistance, nicheDepthVar]);

  // Handle adding new drawing tools
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    if (canvas && selectedTool) {
      switch (selectedTool) {
        case 'text': {
          const addText = new window.fabric.Text(addNewText, {
            left: canvas.width / 2 - 50,
            top: canvas.height / 2 - 25,
            fontFamily: 'Arial',
            fontSize: 15,
            fill: 'black',
            type: 'text',
            editable: true, // Make text editable
          });
          addText.customId = `${new Date().getTime().toString()}`; // Add custom ID
          canvas.add(addText);
          break;
        }
        case 'rectangle': {
          const rectangle = new window.fabric.Rect({
            left: canvas.width / 2 - 50,
            top: canvas.height / 2 - 50,
            width: 100,
            height: 100,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
          });
          canvas.add(rectangle);
          break;
        }
        case 'circle': {
          const circle = new window.fabric.Circle({
            left: canvas.width / 2 - 50,
            top: canvas.height / 2 - 50,
            radius: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
          });
          canvas.add(circle);
          break;
        }
        case 'h-line': {
          const hLine = new window.fabric.Line(
            [canvas.width / 2 - 100, canvas.height / 2, canvas.width / 2 + 100, canvas.height / 2],
            {
              stroke: 'black',
              strokeWidth: 2,
            }
          );
          canvas.add(hLine);
          break;
        }
        case 'v-line': {
          const vLine = new window.fabric.Line(
            [canvas.width / 2, canvas.height / 2 - 100, canvas.width / 2, canvas.height / 2 + 100],
            {
              stroke: 'black',
              strokeWidth: 2,
            }
          );
          canvas.add(vLine);
          break;
        }
        default:
          break;
      }
      canvas.renderAll(); // Render updated canvas
    }
  }, [selectedTool]); // Run every time the selected tool changes

  // Function to delete the selected object
  const deleteSelectedObject = () => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        canvas.remove(activeObject); // Remove the selected object
        canvas.discardActiveObject(); // Deselect the object
        canvas.renderAll(); // Re-render the canvas
      }
    }
  };

  return (
    <div className="w-full px-3 py-5">

      {/* DETAILS AREA */}
      <div className="lg:flex block lg:justify-between lg:space-x-3 space-y-3 lg:space-y-0">
        <Notes />
        <Niche />
        <Screen />
      </div>

      {/* ADD NEW TOOL && DELETE SELECTED TOOL btns */}
      <div className="flex justify-between items-center rounded-md w-full mb-3 mt-10">

        {/* ADD NEW TOOL */}
        <div className="flex items-center space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex justify-between px-4 items-center min-w-[180px] border-[1px] border-gray-300 bg-white h-[40px] shadow-sm rounded-md text-sm font-semibold">
              <span>
                Add New Object
              </span>
              <MdOutlineDraw className="text-lg" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Drawing Tool</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('rectangle')}>
                <span>
                  Rectangle
                </span>
                <LuRectangleHorizontal />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('circle')}>
                <span>
                  Circle
                </span>
                <FaRegCircle />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('h-line')}>
                <span>
                  Horizontal Line
                </span>
                <RxDividerHorizontal />
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('v-line')}>
                Vertical Line
                <PiLineVerticalBold />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className='flex justify-between px-4 items-center min-w-[120px] border-[1px] border-gray-300 bg-white h-[40px] shadow-sm rounded-md text-sm font-semibold'>
                <span>
                  Add Text
                </span>
                <LuTextCursor />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Insert a new label</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input placeholder="Enter your text ..." onChange={(e) => setAddNewText(e.target.value)} />
                </div>
                <Button type="submit" className="px-3" onClick={() => setSelectedTool('text')}>
                  Add
                  <span className="sr-only">Copy</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* DELETE TOOL */}
        <Button variant={'destructive'} onClick={deleteSelectedObject} className="flex justify-between items-center font-semibold">
          <span>
            Delete Selected Object
          </span>
          <AiOutlineDelete className='text-lg' />
        </Button>
      </div>

      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className="border-[1px] border-gray-200 rounded-md"
        ></canvas>
      </div>
    </div>
  );
};
