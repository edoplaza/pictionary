import { useEffect, useRef, useState } from 'react';
import type { ReactSketchCanvasRef } from 'react-sketch-canvas';

import { fetchWord, fetchNewWord, sendGuess } from './api';
import CanvasArea from './components/CanvasArea';
import GameControls from './components/GameControls';
import GameHeader from './components/GameHeader';
import GuessForm from './components/GuessForm';
import LandingScreen from './components/LandingScreen';
import ResultMessage from './components/ResultMessage';
import WordDisplay from './components/WordDisplay';

export default function Game() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const [word, setWord] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState<null | boolean>(null);
  const [isDrawer, setIsDrawer] = useState(true);
  const [team, setTeam] = useState<'A' | 'B'>('A');
  const [score, setScore] = useState({ A: 0, B: 0 });
  const [secondsLeft, setSecondsLeft] = useState(60);

  useEffect(() => {
    if (hasStarted) {
      fetchWord().then((w) => {
        setWord(w);
      });
    }
  }, [hasStarted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [word]);

  useEffect(() => {
    if (secondsLeft === 0) {
      alert("⏱ Time's up! New word...");
      fetchNewWord().then(setWord);
      canvasRef.current?.clearCanvas();
      setGuess('');
      setResult(null);
      setSecondsLeft(60);
    }
  }, [secondsLeft]);

  async function handleGuess(e: React.FormEvent) {
    e.preventDefault();
    const isCorrect = await sendGuess(guess);
    setResult(isCorrect);
    if (isCorrect) {
      const newWord = await fetchNewWord();
      setWord(newWord);
      setScore((prev) => ({ ...prev, [team]: prev[team] + 1 }));
      setGuess('');
      setResult(null);
      canvasRef.current?.clearCanvas();
      setSecondsLeft(60);
    }
  }

  function resetCanvas() {
    canvasRef.current?.clearCanvas();
  }

  if (!hasStarted) {
    return <LandingScreen onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4 text-gray-800">
      <div className="w-full max-w-3xl space-y-6">
        <GameHeader score={score} />
        <GameControls
          isDrawer={isDrawer}
          onDrawerToggle={() => setIsDrawer((prev) => !prev)}
          team={team}
          onTeamChange={(newTeam) => setTeam(newTeam)}
        />
        <WordDisplay word={word} secondsLeft={secondsLeft} isDrawer={isDrawer} />
        <CanvasArea canvasRef={canvasRef} onReset={resetCanvas} />
        <GuessForm
          guess={guess}
          onGuessChange={(value) => setGuess(value)}
          onSubmit={handleGuess}
        />
        <ResultMessage result={result} />
      </div>
    </div>
  );
}
