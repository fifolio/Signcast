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
  DialogDescription,
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
import { useCanvasDataURL } from '@/interfaces/useCanvasDataURL';
import { useGenerateDiagram } from '@/stores/useGenerateDiagram';


export const Fabric = () => {
  // 🔧 Create a reference for the canvas element to interact with it
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 🖼️ Initialize a reference for the Fabric.js canvas instance (with 'any' type)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fabricCanvasRef = useRef<any>(null); // Store the Fabric.js canvas instance

  // 📐 Retrieve layout parameters that influence the drawing
  const { layoutParameters } = useLayoutParameters();
  const { orientation, placement, floorDistance, nicheDepthVar } = layoutParameters;

  // 🛠️ Get the selected tool from the global drawing tool store
  const selectedTool = useDrawingToolStore((state) => state.selectedTool);

  // 🔄 Update the selected drawing tool in the global store
  const setSelectedTool = useDrawingToolStore((state) => state.setSelectedTool);

  // 📝 State to handle new text that will be added
  const [addNewText, setAddNewText] = useState<string>('');

  // 🌐 Update the canvas data URL in the global store
  const { setCanvasDataURL } = useCanvasDataURL();

  // ⚙️ Check and manage the state related to diagram generation
  const { generateDiagram, setGenerateDiagram } = useGenerateDiagram();

  // 📋 Initialize the Fabric.js canvas once when the component mounts
  useEffect(() => {
    if (canvasRef.current) {
      const fabric = window.fabric;
      const canvas = new fabric.Canvas(canvasRef.current);

      // 🔒 Save the Fabric.js canvas instance to the ref for later use
      fabricCanvasRef.current = canvas;

      // 🖼️ Set the initial dimensions and styles of the canvas
      canvas.setWidth(900);
      canvas.setHeight(500);

      // 🧹 Cleanup function to dispose of the canvas when the component unmounts
      return () => {
        canvas.dispose();
      };
    }

  }, []);


  // 👀 Initialize the effect to update the layout based on parameters and preserve existing drawings
  useEffect(() => {
    const canvas = fabricCanvasRef.current;

    if (canvas) {
      // 🧹 Clear existing objects with specific custom IDs to make room for new ones
      canvas.getObjects().forEach((obj: { customId: string; }) => {
        if (obj.customId === 'screen' || obj.customId === 'label' || obj.customId === 'niche' || obj.customId === 'dimension') {
          canvas.remove(obj);
        }
      });

      // 📏 Set dimensions based on orientation: Horizontal or Vertical
      const width = orientation === 'Horizontal' ? 300 : 150;
      const height = orientation === 'Horizontal' ? 150 : 300;

      // 🖥️ Draw the LED screen with the calculated width and height
      const screen = new window.fabric.Rect({
        width,
        height,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 2,
        top: canvas.height / 2 - height / 2,
        left: canvas.width / 2 - width / 2,
      });
      screen.customId = 'screen'; // 🔑 Assign a custom ID to the screen
      canvas.add(screen);

      // 🔌 Add a dashed box for the power outlet placement
      const powerOutlet = new window.fabric.Rect({
        width: 50,
        height: 50,
        stroke: 'gray',
        strokeWidth: 2,
        fill: 'transparent',
        top: screen.top! + screen.height! + 20,
        left: canvas.width / 2 - 25,
      });
      powerOutlet.customId = 'screen'; // 🔑 Assign custom ID to the power outlet
      canvas.add(powerOutlet);

      // 🏠 Handle niche installation if the placement is 'Niche'
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
        niche.customId = 'niche'; // 🔑 Assign custom ID to the niche
        canvas.add(niche);
      }

      // 🔄 Ensure the updated canvas renders after adding new objects
      canvas.renderAll();
    }

    // 🖼️ Ensure canvas rendering is up-to-date after objects are added
    canvas.renderAll();
    const dataURL = canvas.toDataURL();
    setCanvasDataURL(dataURL);

  }, [orientation, placement, floorDistance, nicheDepthVar]); // ⏳ Dependencies that trigger the effect


  // 🖊️ Effect hook to handle the addition of drawing tools
  useEffect(() => {
    const canvas = fabricCanvasRef.current;

    // 🎨 Check if the canvas is available and a drawing tool is selected
    if (canvas && selectedTool) {
      switch (selectedTool) {

        // ✍️ Adding a text tool
        case 'text': {
          const addText = new window.fabric.Text(addNewText, {
            left: 10,
            top: 10,
            fontFamily: 'Arial',
            fontSize: 16,
            fill: 'black',
            type: 'text',
            editable: true, // 📝 Make text editable
          });
          addText.customId = `${new Date().getTime().toString()}`; // 🔑 Add custom ID
          canvas.add(addText);
          break;
        }

        // ➖ Adding a rectangle tool
        case 'rectangle': {
          const rectangle = new window.fabric.Rect({
            left: 10,
            top: 10,
            width: 100,
            height: 100,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
          });
          canvas.add(rectangle);
          break;
        }

        // 🔵 Adding a circle tool
        case 'circle': {
          const circle = new window.fabric.Circle({
            left: 10,
            top: 10,
            radius: 50,
            fill: 'transparent',
            stroke: 'black',
            strokeWidth: 2,
          });
          canvas.add(circle);
          break;
        }

        // ➖ Adding a horizontal line tool
        case 'h-line': {
          const hLine = new window.fabric.Line(
            [canvas.width / 2 - 100, canvas.height / 2, canvas.width / 2 + 100, canvas.height / 2],
            {
              left: 10,
              top: 20,
              stroke: 'black',
              strokeWidth: 2,
            }
          );
          canvas.add(hLine);
          break;
        }

        // ➖ Adding a vertical line tool
        case 'v-line': {
          const vLine = new window.fabric.Line(
            [canvas.width / 2, canvas.height / 2 - 100, canvas.width / 2, canvas.height / 2 + 100],
            {
              left: 10,
              top: 20,
              stroke: 'black',
              strokeWidth: 2,
            }
          );
          canvas.add(vLine);
          break;
        }

        // ⚙️ Default case to handle unknown tools
        default:
          break;
      }

      // 🔄 Re-render the canvas to display the added drawing
      canvas.renderAll(); // Render updated canvas
    }

    // 🔄 Ensure the canvas renders after adding the object
    canvas.renderAll();

    // 📸 Convert canvas to a data URL for saving or exporting
    const dataURL = canvas.toDataURL();
    setCanvasDataURL(dataURL);

  }, [selectedTool]);  // 🧩 Depend on the selectedTool to trigger the effect



  // Function to delete the selected object from the canvas 🗑️
  const deleteSelectedObject = () => {
    // Get the canvas reference 🖼️
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      // Get the active object (the currently selected object) on the canvas 🖌️
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        // Remove the selected object from the canvas 🚫
        canvas.remove(activeObject);
        // Deselect the object to clear the selection ❌
        canvas.discardActiveObject();
        // Re-render the canvas to reflect the changes 🔄
        canvas.renderAll();
      }
    }
  };


  useEffect(() => {
    // 🖼️ Access the canvas reference to manipulate the canvas
    const canvas = fabricCanvasRef.current;
    let interval: NodeJS.Timeout;

    // 💡 If `generateDiagram` is true, start an interval to repeatedly update the canvas
    if (generateDiagram === true) {
      interval = setInterval(() => {
        // 🔄 Ensure the canvas renders after adding the object
        canvas.renderAll();
        const dataURL = canvas.toDataURL();
        // 📤 Set the data URL of the canvas to state
        setCanvasDataURL(dataURL);
      }, 10); // ⏱️ Update the canvas every 10 milliseconds
    } else if (generateDiagram === false) {
      // 🔄 Ensure the canvas renders after adding the object
      canvas.renderAll();
      const dataURL = canvas.toDataURL();
      // 📤 Set the data URL of the canvas to state
      setCanvasDataURL(dataURL);
    }

    // 🧹 Cleanup the interval when `generateDiagram` changes or on component unmount
    return () => {
      if (interval) {
        // ❌ Clear the interval to prevent memory leaks
        clearInterval(interval);
      }
    };
  }, [generateDiagram]); // 📉 Effect depends on `generateDiagram` state



  // Function to handle the dynamic generation of the diagram 🔄📊
  function handleDiagramGenerating(state: boolean) {
    setGenerateDiagram(state); // Set the flag to indicate whether to generate the diagram or not 🚦
  }



  return (
    <div className="w-full px-3 py-5">

      {/* DETAILS AREA 📝 */}
      {/* This section contains the different details and elements that can be displayed side by side */}
      <div className="lg:flex block lg:justify-between lg:space-x-3 space-y-3 lg:space-y-0">
        <Notes />
        <Niche />
        <Screen />
      </div>

      {/* ADD NEW TOOL && DELETE SELECTED TOOL btns ➕🗑️ */}
      {/* The section contains buttons for adding new tools and deleting the selected tool */}
      <div
        onMouseEnter={() => handleDiagramGenerating(true)}
        onMouseLeave={() => handleDiagramGenerating(false)}
        className="flex justify-between items-center rounded-md w-full mb-3 mt-10"
      >

        {/* ADD NEW TOOL ➕ */}
        {/* This button will open a dropdown for selecting a new drawing tool */}
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

              {/* Rectangle Tool ⬛ */}
              {/* Selects a rectangle as the drawing tool */}
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('rectangle')}>
                <span>
                  Rectangle
                </span>
                <LuRectangleHorizontal />
              </DropdownMenuItem>

              {/* Circle Tool 🔵 */}
              {/* Selects a circle as the drawing tool */}
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('circle')}>
                <span>
                  Circle
                </span>
                <FaRegCircle />
              </DropdownMenuItem>

              {/* Horizontal Line Tool ➖ */}
              {/* Selects a horizontal line as the drawing tool */}
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('h-line')}>
                <span>
                  Horizontal Line
                </span>
                <RxDividerHorizontal />
              </DropdownMenuItem>

              {/* Vertical Line Tool ➗ */}
              {/* Selects a vertical line as the drawing tool */}
              <DropdownMenuItem className="flex justify-between cursor-pointer" onClick={() => setSelectedTool('v-line')}>
                Vertical Line
                <PiLineVerticalBold />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* ADD TEXT ✍️ */}
          {/* Button for adding new text to the drawing area */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex justify-between px-4 items-center min-w-[120px] border-[1px] border-gray-300 bg-white h-[40px] shadow-sm rounded-md text-sm font-semibold"
              >
                <span>Add Text</span>
                <LuTextCursor />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="sm:max-w-md"
              aria-describedby="dialog-description"
            >
              <DialogHeader>
                <DialogTitle>Insert a new label</DialogTitle>
                <DialogDescription id="dialog-description">
                  Enter the text below and click "Add" to insert it.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Input
                    placeholder="Enter your text ..."
                    onChange={(e) => setAddNewText(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="px-3"
                  onClick={() => setSelectedTool("text")}
                >
                  Add
                  <span className="sr-only">Copy</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

        </div>

        {/* DELETE TOOL 🗑️ */}
        {/* Button for deleting the selected drawing tool */}
        <Button variant={'destructive'} onClick={deleteSelectedObject} className="flex justify-between items-center font-semibold">
          <span>
            Delete Selected Object
          </span>
          <AiOutlineDelete className='text-lg' />
        </Button>
      </div>

      {/* CANVAS AREA 🖼️ */}
      {/* This section contains the canvas where the user can draw the selected objects */}
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className="border-[1px] border-gray-200 rounded-md"
        ></canvas>
      </div>
    </div>
  );

};
