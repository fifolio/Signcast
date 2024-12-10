import { useEffect, useRef } from 'react';
import { useLayoutParameters } from '@/stores/useLayoutParameters';

export const Fabric = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fabricCanvasRef = useRef<any>(null); // Store the Fabric.js canvas instance
  const { layoutParameters } = useLayoutParameters();
  const { orientation, placement, floorDistance, nicheDepthVar } = layoutParameters;

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

  // Update layout based on parameters
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    if (canvas) {
      canvas.clear(); // Clear the canvas for updates

      const width = orientation === 'horizontal' ? 300 : 150;
      const height = orientation === 'horizontal' ? 150 : 300;

      // Draw the LED screen
      const screen = new window.fabric.Rect({
        width,
        height,
        fill: '#3498db',
        stroke: 'black',
        strokeWidth: 2,
        top: canvas.height / 2 - height / 2,
        left: canvas.width / 2 - width / 2,
      });
      canvas.add(screen);

      // Add dashed box for the power outlet
      const powerOutlet = new window.fabric.Rect({
        width: 50,
        height: 50,
        stroke: 'red',
        strokeWidth: 2,
        fill: 'transparent',
        top: screen.top! + screen.height! + 20,
        left: canvas.width / 2 - 25,
      });
      canvas.add(powerOutlet);

      // Display floor-to-screen-center distance
      const label = new window.fabric.Text(
        `Floor to Screen Center: ${floorDistance} cm`,
        {
          fontSize: 18,
          left: 10,
          top: 10,
        }
      );
      canvas.add(label);

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
        canvas.add(niche);
      }

      // Add Dimension Boxes (Small Boxes with Numbers)
      const dimensionBoxWidth = new window.fabric.Rect({
        width: 60,
        height: 30,
        fill: '#f39c12',
        stroke: 'black',
        strokeWidth: 1,
        top: screen.top! + height / 2 - 15,
        left: screen.left! + width / 2 + 20,
      });
      const dimensionBoxWidthText = new window.fabric.Text(
        `${width}”`,
        {
          left: dimensionBoxWidth.left! + 10,
          top: dimensionBoxWidth.top! + 7,
          fontSize: 14,
        }
      );
      canvas.add(dimensionBoxWidth, dimensionBoxWidthText);

      const dimensionBoxHeight = new window.fabric.Rect({
        width: 60,
        height: 30,
        fill: '#f39c12',
        stroke: 'black',
        strokeWidth: 1,
        top: screen.top! + height / 2 + 40,
        left: screen.left! - 20,
      });
      const dimensionBoxHeightText = new window.fabric.Text(
        `${height}”`,
        {
          left: dimensionBoxHeight.left! + 10,
          top: dimensionBoxHeight.top! + 7,
          fontSize: 14,
        }
      );
      canvas.add(dimensionBoxHeight, dimensionBoxHeightText);

      // Add Text Labels (e.g., Floor Line, Centerline of Display)
      const floorLineLabel = new window.fabric.Text('Floor Line', {
        fontSize: 16,
        left: 10,
        top: canvas.height - 30,
      });
      const centerlineLabel = new window.fabric.Text('Centerline of Display', {
        fontSize: 16,
        left: canvas.width / 2 - 100,
        top: screen.top! + height / 2,
      });
      canvas.add(floorLineLabel, centerlineLabel);

      // Draw lines for connecting labels to their corresponding objects
      const floorLineLine = new window.fabric.Line(
        [0, canvas.height - 20, canvas.width, canvas.height - 20],
        {
          stroke: 'black',
          strokeWidth: 1,
          selectable: false,
        }
      );
      canvas.add(floorLineLine);

      const centerlineLine = new window.fabric.Line(
        [canvas.width / 2, screen.top! + height / 2, canvas.width / 2, screen.top! + height / 2 + 50],
        {
          stroke: 'black',
          strokeWidth: 1,
          selectable: false,
        }
      );
      canvas.add(centerlineLine);

      // Render updated canvas
      canvas.renderAll();
    }
  }, [orientation, placement, floorDistance, nicheDepthVar]); // Dependencies for parameter changes

  return (
    <canvas
      ref={canvasRef}
      className="border-[1px] border-gray-200 rounded-md"
    ></canvas>
  );
};
