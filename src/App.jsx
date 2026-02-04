import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AlgorithmSelector from "./components/AlgorithmSelector";
import InfoPanel from "./components/InfoPanel";
import Visualizer from "./components/Visualizer";
import Controls from "./components/Controls";

import { bubbleSortSteps } from "./algorithms/bubbleSort";
import { mergeSortSteps } from "./algorithms/mergeSort";
import { runAnimations } from "./utils/animationRunner";

function App() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(200);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const algorithmMap = {
    bubble: bubbleSortSteps,
    merge: mergeSortSteps,
  };

  const generateRandomArray = (size = 30) => {
    if (isSorting) return;
    const arr = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 100) + 5
    );
    setArray(arr);
    setSortedIndices([]);
    setActiveIndices([]);
  };

  const startSorting = async () => {
    if (isSorting) return;
    setIsSorting(true);

    const steps = algorithmMap[algorithm](array);

    await runAnimations(
      steps,
      setArray,
      setActiveIndices,
      setSortedIndices,
      speed
    );

    setActiveIndices([]);
    setIsSorting(false);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AlgorithmSelector
            selected={algorithm}
            setSelected={setAlgorithm}
          />
          <InfoPanel algorithm={algorithm} />
        </div>

        <Visualizer
          array={array}
          activeIndices={activeIndices}
          sortedIndices={sortedIndices}
        />

        <Controls
          generateArray={generateRandomArray}
          startSorting={startSorting}
          speed={speed}
          setSpeed={setSpeed}
          isSorting={isSorting}
        />
      </div>
    </div>
  );
}

export default App;
