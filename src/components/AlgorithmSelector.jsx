function AlgorithmSelector({ selected, setSelected }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Algorithm</h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="bg-gray-700 p-2 rounded w-full"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="merge">Merge Sort</option>
      </select>
    </div>
  );
}

export default AlgorithmSelector;
