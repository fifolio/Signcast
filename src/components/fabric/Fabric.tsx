import { useEffect, useRef } from 'react';

export const Fabric = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Access Fabric.js from the global `window` object
      const fabric = window.fabric;

      // Initialize the Fabric.js canvas
      const canvas = new fabric.Canvas(canvasRef.current);

      // Add a sample rectangle (for testing)
      const rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'blue',
        width: 200,
        height: 100,
      });
      canvas.add(rect);

      canvas.add(rect);

      // Clean up on unmount
      return () => {
        canvas.dispose();
      };
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={500}
      className='border-[1px] border-gray-200 rounded-md'
    ></canvas>
  );
};
