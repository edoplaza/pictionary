interface GuessFormProps {
  guess: string;
  onGuessChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function GuessForm({ guess, onGuessChange, onSubmit }: GuessFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <input
        type="text"
        className="flex-1 rounded border px-3 py-2"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => onGuessChange(e.target.value)}
      />
      <button className="rounded bg-green-600 px-4 text-white">Guess</button>
    </form>
  );
}
