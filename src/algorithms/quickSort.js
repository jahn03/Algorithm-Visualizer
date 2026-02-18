export function quickSortSteps(array) {
  const arr = [...array];
  const steps = [];

  function quickSort(start, end) {
    if (start >= end) {
      if (start === end) {
        steps.push({ type: "sorted", index: start });
      }
      return;
    }

    const pivotIndex = partition(start, end);
    steps.push({ type: "sorted", index: pivotIndex });

    quickSort(start, pivotIndex - 1);
    quickSort(pivotIndex + 1, end);
  }

  function partition(start, end) {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      steps.push({ type: "compare", indices: [j, end] });

      if (arr[j] < pivot) {
        steps.push({ type: "swap", indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    steps.push({ type: "swap", indices: [i, end] });
    [arr[i], arr[end]] = [arr[end], arr[i]];

    return i;
  }

  quickSort(0, arr.length - 1);
  return steps;
}
