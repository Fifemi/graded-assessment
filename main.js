//I define a function named shuffleArray that takes an array as input
function shuffleArray(array) {
    // then I create a copy of the input array using the spread operator
    const shuffledArray = [...array];
    // I iterate over the array in reverse order
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and the current index
      const a = Math.floor(Math.random() * (i + 1));
      // Swap the elements at positions i and a in the shuffledArray
      [shuffledArray[i], shuffledArray[a]] = [shuffledArray[a], shuffledArray[i]];
    }
    // Return the shuffledArray
    return shuffledArray;
  }
  // Create an array named originalArray with elements 1, 2, 3, 4, 5
  const originalArray = [1, 2, 3, 4, 5, 6, 10];
  // Call the shuffleArray function with originalArray as an argument
  const shuffledResult = shuffleArray(originalArray);
  // Print the shuffled result to the console
  console.log(shuffledResult);