// Function to perform Insertion Sort
function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];  // The current element to be inserted
        let j = i - 1;  // The index of the previous element

        // Shift elements of arr[0...i-1], that are greater than current, to one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];  // Shift the element to the right
            j--;  // Move to the previous element
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }

    return arr;  // Return the sorted array
}

// Example usage
const arr = [12, 11, 13, 5, 6];
console.log("Original array:", arr);
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);