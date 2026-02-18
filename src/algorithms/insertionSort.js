export function insertionSortSteps(array) {
  const arr = [...array];
  const steps = [];

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      steps.push({ type: "compare", indices: [j, j + 1] });
      steps.push({ type: "overwrite", index: j + 1, value: arr[j] });
      arr[j + 1] = arr[j];
      j--;
    }

    steps.push({ type: "overwrite", index: j + 1, value: key });
    arr[j + 1] = key;
  }

  for (let i = 0; i < arr.length; i++) {
    steps.push({ type: "sorted", index: i });
  }

  return steps;
}
