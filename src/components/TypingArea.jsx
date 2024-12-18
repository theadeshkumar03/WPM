import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { CharacterSpan } from './CharacterSpan';

export default function TypingArea({ text, typedText, isActive, onType }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive && containerRef.current) {
      containerRef.current.focus();
    }
  }, [isActive]);

  const handleKeyDown = (e) => {
    if (!isActive) return;
    
    // Only handle alphanumeric keys, punctuation, space, and backspace
    if (e.key.length === 1 || e.key === 'Backspace') {
      onType(e.key);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className={clsx(
        "relative w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
        "transition-all duration-200",
        "cursor-text select-none" // Prevent text selection and show text cursor
      )}
    >
      <p className="text-lg leading-relaxed font-mono dark:text-gray-200 whitespace-pre-wrap">
        {text.split('').map((char, index) => (
          <CharacterSpan
            key={`${char}-${index}`}
            char={char}
            typed={typedText[index]}
            isCurrentChar={index === typedText.length}
          />
        ))}
      </p>
    </div>
  );
}