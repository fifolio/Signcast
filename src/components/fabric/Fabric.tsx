import { useEffect, useRef } from 'react';

export const Fabric = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // Access Fabric.js from the global `window` object
      const fabric = window.fabric;

      // Initialize the Fabric.js canvas
      const canvas = new fabric.Canvas(canvasRef.current);

      // Add a rectangle as an example
      const rect = new fabric.Rect({
        left: 50,
        top: 50,
        fill: 'red',
        width: 100,
        height: 100,
      });

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
      width={800}
      height={600}
      style={{ border: '1px solid black' }}
    ></canvas>
  );
};
