const arrayOfNumbers = [15, 5, 4, 3, 2, 3];

/**
 *
 * @param array - number[]
 * @returns indexes for best benefits or empty array if there are no best benefits
 */
const findABenefit = (array) => {
  const ascendingArraySort = array.slice().sort((a, b) => a - b);
  let result = [];

  for (i = 0; i <= array.length; i++) {
    const descendingArraySortOfHigherNumbers = array
      .filter((number) => ascendingArraySort[i] < number)
      .sort((a, b) => b - a);

    if (descendingArraySortOfHigherNumbers.length) {
      descendingArraySortOfHigherNumbers.forEach((value) => {
        const indexOfMinValue = array.indexOf(ascendingArraySort[i]);
        const indexOfMaxValue = array.indexOf(value, indexOfMinValue);

        if (indexOfMaxValue !== -1 && !result.length)
          result = [
            `min number ${ascendingArraySort[i]}, index: ${indexOfMinValue}`,
            `max number ${value}, index: ${indexOfMaxValue}`,
          ];
      });

      break;
    }
  }

  return result;
};

console.log(findABenefit(arrayOfNumbers));
