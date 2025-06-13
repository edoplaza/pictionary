interface ResultMessageProps {
  result: boolean | null;
}

export default function ResultMessage({ result }: ResultMessageProps) {
  if (result === null) return null;

  return (
    <p className={`text-center font-semibold ${result ? 'text-green-600' : 'text-red-600'}`}>
      {result ? '🎉 Correct!' : '❌ Try again!'}
    </p>
  );
}
