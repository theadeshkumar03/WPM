import { useEffect } from 'react';
import TypingArea from './components/TypingArea';
import Stats from './components/Stats';
import ThemeToggle from './components/ThemeToggle';
import { useTyping } from './hooks/useTyping';
import { useTimer } from './hooks/useTimer';
import { calculateWPM, calculateCPM } from './utils/calculations';
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js'; // Import necessary Chart.js components


export default function App() {
  const {
    text,
    typedText,
    timeLeft,
    isActive,
    mistakes,
    setTimeLeft,
    loadNewQuote,
    handleType
  } = useTyping();

  useEffect(() => {
    loadNewQuote();
  }, [loadNewQuote]);

  useTimer(isActive, timeLeft, setTimeLeft);

  const wpm = calculateWPM(typedText.length, mistakes, 60 - timeLeft);
  const cpm = calculateCPM(typedText.length, 60 - timeLeft);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Speed Typing Test
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Start typing to begin. Press Backspace to correct mistakes.
            </p>
          </div>

          <TypingArea
            text={text}
            typedText={typedText}
            isActive={timeLeft > 0}
            onType={handleType}
          />

          <Stats
            timeLeft={timeLeft}
            mistakes={mistakes}
            wpm={wpm}
            cpm={cpm}
          />

          <div className="flex justify-center">
            <button
              onClick={loadNewQuote}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 
                       transition-colors transform hover:scale-105 duration-200
                       shadow-lg hover:shadow-blue-800/50"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
 
}






