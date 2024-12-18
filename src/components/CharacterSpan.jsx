import clsx from 'clsx';

export function CharacterSpan({ char, typed, isCurrentChar }) {
  return (
    <span
      className={clsx(
        'relative inline-block transition-all duration-100',
        {
          'text-green-500 dark:text-green-400': typed === char,
          'text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-900/50': typed && typed !== char,
          'text-gray-800 dark:text-gray-300': !typed && !isCurrentChar,
          'border-l-2 border-primary animate-pulse': isCurrentChar,
        }
      )}
    >
      {char}
    </span>
  );
}