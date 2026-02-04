export function mergeSortSteps(array) {
  const steps = [];
  const aux = [...array];

  function mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      steps.push({ type: "compare", indices: [i, j] });

      if (aux[i] <= aux[j]) {
        steps.push({ type: "overwrite", index: k, value: aux[i] });
        aux[k++] = aux[i++];
      } else {
        steps.push({ type: "overwrite", index: k, value: aux[j] });
        aux[k++] = aux[j++];
      }
    }

    while (i <= mid) {
      steps.push({ type: "overwrite", index: k, value: aux[i] });
      aux[k++] = aux[i++];
    }

    while (j <= end) {
      steps.push({ type: "overwrite", index: k, value: aux[j] });
      aux[k++] = aux[j++];
    }

    for (let idx = start; idx <= end; idx++) {
      steps.push({ type: "sorted", index: idx });
    }
  }

  mergeSort(0, array.length - 1);
  return steps;
}
