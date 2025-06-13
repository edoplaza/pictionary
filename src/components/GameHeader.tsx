interface GameHeaderProps {
  score: {
    A: number;
    B: number;
  };
}

export default function GameHeader({ score }: GameHeaderProps) {
  return (
    <div className="w-full max-w-3xl space-y-6">
      <h1 className="mb-2 text-center text-3xl font-bold text-blue-700">Pictionary 🎨</h1>
      <div className="flex items-center justify-between rounded bg-white p-4 shadow-sm">
        <div className="text-sm">
          <strong>Score:</strong> <span className="text-blue-600">A: {score.A}</span> |{' '}
          <span className="text-red-600">B: {score.B}</span>
        </div>
      </div>
    </div>
  );
}
