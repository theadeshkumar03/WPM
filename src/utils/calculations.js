export function calculateWPM(charIndex, mistakes, timeElapsed) {
  const words = Math.max(0, (charIndex - mistakes) / 5);
  const minutes = timeElapsed / 60;
  return Math.round(words / minutes) || 0;
}

export function calculateCPM(charIndex, timeElapsed) {
  return Math.round((charIndex / timeElapsed) * 60) || 0;
}