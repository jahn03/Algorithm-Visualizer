import { useEffect, useRef, useState } from "react";
import { bubbleSortSteps } from "./algorithms/bubbleSort";
import { mergeSortSteps } from "./algorithms/mergeSort";
import { selectionSortSteps } from "./algorithms/selectionSort";
import { runAnimations } from "./utils/animationRunner";

function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(30);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const speed = 50;
  const isPausedRef = useRef(false);

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  const generateArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 300) + 20
    );
    setArray(newArray);
    setSortedIndices([]);
    setActiveIndices([]);
  };

  const getSteps = () => {
    if (selectedAlgorithm === "bubble") {
      return bubbleSortSteps(array);
    }
    if (selectedAlgorithm === "merge") {
      return mergeSortSteps(array);
    }
    if (selectedAlgorithm === "selection") {
      return selectionSortSteps(array);
    }
    return [];
  };

  const handleSort = async () => {
    setIsSorting(true);
    setSortedIndices([]);
    const steps = getSteps();

    await runAnimations(
      steps,
      setArray,
      setActiveIndices,
      setSortedIndices,
      speed,
      isPausedRef
    );

    setIsSorting(false);
    setActiveIndices([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Algorithm Visualizer</h1>

      <div className="flex flex-col items-center gap-4 mb-6 w-full max-w-md">

        {/* Algorithm Selector */}
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
          disabled={isSorting}
          className="bg-gray-700 p-2 rounded w-full"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="selection">Selection Sort</option>
        </select>

        {/* Array Size Slider */}
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

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={generateArray}
            disabled={isSorting}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            New Array
          </button>

          <button
            onClick={handleSort}
            disabled={isSorting}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
          >
            Sort
          </button>
        </div>
      </div>

      {/* Bars */}
      <div className="flex items-end gap-1 h-80 w-full max-w-5xl">
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{ height: `${value}px` }}
            className={`flex-1 rounded-sm ${
              sortedIndices.includes(idx)
                ? "bg-green-500"
                : activeIndices.includes(idx)
                ? "bg-red-400"
                : "bg-teal-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
