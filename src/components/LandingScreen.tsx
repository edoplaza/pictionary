interface LandingScreenProps {
  onStart: () => void;
}

export default function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-6 text-4xl font-bold">Welcome to Pictionary 🎨</h1>
        <button
          onClick={onStart}
          className="rounded bg-white px-6 py-2 text-lg text-blue-600 shadow hover:bg-gray-100"
        >
          Start Playing
        </button>
      </div>
    </div>
  );
}
