const mockedSequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17];

const findMissingNumbersInSequence = (someSequence) => {
  const minNumber = someSequence[0]; // O(1)
  const correctSequenceLength = someSequence.length + 2; // O(1)
  const missingNumbers = [];

  for (let i = minNumber; i <= correctSequenceLength; i++) { // O(N^2)
    if (!someSequence.includes(i)) {
      missingNumbers.push(i); // O(1)
    }
  }

  return missingNumbers;
};
// Time Complexity: O(N^2)

console.log(
  `Missing numbers are:`,
  findMissingNumbersInSequence(mockedSequence).join(" & ")
);
