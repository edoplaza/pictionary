import { ReactSketchCanvas, type ReactSketchCanvasRef } from 'react-sketch-canvas';

interface CanvasAreaProps {
  canvasRef: React.RefObject<ReactSketchCanvasRef>;
  onReset: () => void;
}

export default function CanvasArea({ canvasRef, onReset }: CanvasAreaProps) {
  return (
    <div className="rounded bg-white p-2 shadow-sm">
      <ReactSketchCanvas
        ref={canvasRef}
        width="100%"
        height="300px"
        strokeWidth={4}
        strokeColor="black"
        className="rounded bg-white"
      />
      <div className="mt-2 text-right">
        <button onClick={onReset} className="text-sm text-gray-500 hover:underline">
          Reset drawing
        </button>
      </div>
    </div>
  );
}
