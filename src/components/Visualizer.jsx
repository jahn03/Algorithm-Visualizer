function Visualizer({ array, activeIndices, sortedIndices }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md h-96 flex items-end justify-center gap-1">
      {array.map((value, index) => {
        let barColor = "bg-indigo-500";

        if (sortedIndices.includes(index)) {
          barColor = "bg-green-500";
        } else if (activeIndices.includes(index)) {
          barColor = "bg-yellow-400";
        }

        return (
          <div
            key={index}
            className={`${barColor} w-3 transition-all duration-300`}
            style={{ height: `${value * 3}px` }}
          />
        );
      })}
    </div>
  );
}

export default Visualizer;
