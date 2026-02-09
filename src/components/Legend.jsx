function Legend() {
  const Item = ({ color, label }) => (
    <div className="flex items-center gap-2 text-sm">
      <span className={`w-4 h-4 rounded ${color}`} />
      <span>{label}</span>
    </div>
  );

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-3">Legend</h2>

      <div className="grid grid-cols-2 gap-2 text-gray-300">
        <Item color="bg-indigo-500" label="Unsorted" />
        <Item color="bg-yellow-400" label="Comparing" />
        <Item color="bg-green-500" label="Sorted" />
      </div>
    </div>
  );
}

export default Legend;
