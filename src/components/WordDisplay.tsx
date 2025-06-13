interface WordDisplayProps {
  word: string;
  secondsLeft: number;
  isDrawer: boolean;
}

export default function WordDisplay({ word, secondsLeft, isDrawer }: WordDisplayProps) {
  if (!isDrawer) return null;

  return (
    <div className="rounded border border-yellow-300 bg-yellow-100 p-3 text-center text-yellow-800">
      <strong>Your word:</strong> {word}
      <span className="ml-4 text-sm">⏱ {secondsLeft}s</span>
    </div>
  );
}
