<select
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
  className="bg-gray-700 p-2 rounded w-full"
>
  <option value="bubble">Bubble Sort</option>
  <option value="merge">Merge Sort</option>
  <option value="selection">Selection Sort</option>
</select>
