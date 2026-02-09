function Controls({
  generateArray,
  startSorting,
  speed,
  setSpeed,
  isSorting,
  isPaused,
  setIsPaused,
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-wrap gap-4 items-center justify-between">
      <div className="flex gap-2">
        <button
          onClick={generateArray}
          disabled={isSorting}
          className="bg-indigo-600 px-4 py-2 rounded disabled:opacity-50"
        >
          New Array
        </button>

        <button
          onClick={startSorting}
          disabled={isSorting}
          className="bg-green-600 px-4 py-2 rounded disabled:opacity-50"
        >
          Start
        </button>

        <button
          onClick={() => setIsPaused((p) => !p)}
          disabled={!isSorting}
          className="bg-yellow-500 px-4 py-2 rounded disabled:opacity-50"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm">Speed</span>
        <input
          type="range"
          min="50"
          max="500"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Controls;
