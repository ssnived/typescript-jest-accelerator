//Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// example Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

export const pipeFixer = (list: number[]) => {
  const listMin = Math.min(...list);
  const listMax = Math.max(...list);

  const fixedList: number[] = Array.from(
    { length: listMax - listMin + 1 },
    (_, index) => listMin + index
  );

  return fixedList;
};

// console.log(pipeFixer([1, 3, 5, 6, 7, 8]));
