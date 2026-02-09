async function wait(speed, isPausedRef) {
  while (isPausedRef.current) {
    await new Promise((r) => setTimeout(r, 50));
  }
  await new Promise((r) => setTimeout(r, speed));
}

export async function runAnimations(
  steps,
  setArray,
  setActiveIndices,
  setSortedIndices,
  speed,
  isPausedRef
) {
  for (let step of steps) {
    if (step.type === "compare") {
      setActiveIndices(step.indices);
    }

    if (step.type === "swap") {
      setArray((prev) => {
        const arr = [...prev];
        const [i, j] = step.indices;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
      });
    }

    if (step.type === "overwrite") {
      setArray((prev) => {
        const arr = [...prev];
        arr[step.index] = step.value;
        return arr;
      });
    }

    if (step.type === "sorted") {
      setSortedIndices((prev) =>
        prev.includes(step.index) ? prev : [...prev, step.index]
      );
      setActiveIndices([]);
    }

    await wait(speed, isPausedRef);
  }
}
