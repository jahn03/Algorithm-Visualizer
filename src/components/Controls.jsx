function Controls({
  generateArray,
  startSorting,
  speed,
  setSpeed,
  isSorting,
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3">Controls</h2>

      <div className="flex flex-wrap gap-3 items-center">
        <button
          onClick={() => generateArray()}
          disabled={isSorting}
          className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600 disabled:opacity-50"
        >
          Generate Array
        </button>

        <button
          onClick={startSorting}
          disabled={isSorting}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Start
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm">Speed</span>
          <input
            type="range"
            min="50"
            max="500"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={isSorting}
          />
        </div>
      </div>
    </div>
  );
}

export default Controls;
