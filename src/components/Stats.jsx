export default function Stats({ timeLeft, mistakes, wpm, cpm }) {
  const stats = [
    { label: 'Time Left', value: `${timeLeft}s` },
    { label: 'Mistakes', value: mistakes },
    { label: 'WPM', value: wpm },
    { label: 'CPM', value: cpm },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md
                     transform hover:scale-105 transition-transform duration-200"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold text-blue-600">{value}</p>
        </div>
      ))}
    </div>
  );
}