import { useState, useCallback } from 'react';
import { fetchRandomQuote } from '../utils/api';

export function useTyping() {
  const [text, setText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [mistakes, setMistakes] = useState(0);

  const loadNewQuote = useCallback(async () => {
    const quote = await fetchRandomQuote();
    setText(quote);
    setTypedText('');
    setTimeLeft(60);
    setIsActive(false);
    setMistakes(0);
  }, []);

  const handleType = (key) => {
    if (!isActive) {
      setIsActive(true);
    }

    if (typedText.length < text.length) {
      if (key === 'Backspace') {
        setTypedText(prev => prev.slice(0, -1));
      } else {
        setTypedText(prev => prev + key);
        if (key !== text[typedText.length]) {
          setMistakes(prev => prev + 1);
        }
      }
    }
  };

  return {
    text,
    typedText,
    timeLeft,
    isActive,
    mistakes,
    setTimeLeft,
    loadNewQuote,
    handleType
  };
}