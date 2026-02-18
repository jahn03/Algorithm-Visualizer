export const algorithmInfo = {
  bubble: {
    name: "Bubble Sort",
    time: "O(n²)",
    space: "O(1)",
    description:
      "Repeatedly compares adjacent elements and swaps them if they are in the wrong order. Larger elements 'bubble' to the end of the array.",
  },
  selection: {
    name: "Selection Sort",
    time: "O(n²)",
    space: "O(1)",
    description:
      "Selects the smallest remaining element and places it in its correct position in each iteration.",
  },
  insertion: {
    name: "Insertion Sort",
    time: "O(n²)",
    space: "O(1)",
    description:
      "Builds the sorted array one element at a time by inserting each element into its correct position.",
  },
  merge: {
    name: "Merge Sort",
    time: "O(n log n)",
    space: "O(n)",
    description:
      "Divide-and-conquer algorithm that splits the array, sorts subarrays, and merges them back together.",
  },
  quick: {
    name: "Quick Sort",
    time: "O(n log n) average",
    space: "O(log n)",
    description:
      "Divide-and-conquer algorithm that selects a pivot and partitions the array around it.",
  },
  heap: {
    name: "Heap Sort",
    time: "O(n log n)",
    space: "O(1)",
    description:
      "Builds a max heap and repeatedly extracts the largest element to sort the array.",
  },
};
