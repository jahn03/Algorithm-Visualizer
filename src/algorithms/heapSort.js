export function heapSortSteps(array) {
  const arr = [...array];
  const steps = [];

  function heapify(n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n) {
      steps.push({ type: "compare", indices: [left, largest] });
      if (arr[left] > arr[largest]) largest = left;
    }

    if (right < n) {
      steps.push({ type: "compare", indices: [right, largest] });
      if (arr[right] > arr[largest]) largest = right;
    }

    if (largest !== i) {
      steps.push({ type: "swap", indices: [i, largest] });
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(n, largest);
    }
  }

  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    steps.push({ type: "swap", indices: [0, i] });
    [arr[0], arr[i]] = [arr[i], arr[0]];
    steps.push({ type: "sorted", index: i });
    heapify(i, 0);
  }

  steps.push({ type: "sorted", index: 0 });

  return steps;
}
