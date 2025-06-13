const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchWord() {
  const res = await fetch(`${BASE_URL}/word`);
  const data = await res.json();
  return data.word as string;
}

export async function sendGuess(guess: string) {
  const res = await fetch(`${BASE_URL}/guess`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess }),
  });
  const data = await res.json();
  return data.correct as boolean;
}

export async function fetchNewWord() {
  const res = await fetch(`${BASE_URL}/new-word`, {
    method: 'POST',
  });
  const data = await res.json();
  return data.word as string;
}
