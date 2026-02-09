import { useEffect, useState } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(30);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 20);
    }
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((res) => setTimeout(res, 50));
        }
      }
    }

    setIsSorting(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Algorithm Visualizer</h1>

      {/* Controls */}
      <div className="flex flex-col items-center gap-4 mb-6 w-full max-w-md">
        <label className="w-full">
          <span className="text-sm text-gray-300">
            Array Size: {arraySize}
          </span>
          <input
            type="range"
            min="10"
            max="100"
            value={arraySize}
            disabled={isSorting}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="w-full"
          />
        </label>

        <div className="flex gap-4">
          <button
            onClick={generateArray}
            disabled={isSorting}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            New Array
          </button>

          <button
            onClick={bubbleSort}
            disabled={isSorting}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
          >
            Bubble Sort
          </button>
        </div>
      </div>

      {/* Bars */}
      <div className="flex items-end gap-1 h-80 w-full max-w-5xl">
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{ height: `${value}px` }}
            className="bg-teal-400 flex-1 rounded-sm"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
