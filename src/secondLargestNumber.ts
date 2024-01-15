// Given a list a numbers, select the second largest number, return the only number if it is 1 element long
// [1,3,2,5,3] => 3
// [0] => 0
export const secondLargestNumber = (list: number[]) => {
  const newArray = [];
  if (list.length == 1) {
    return list[0];
  } else {
    //sort list in descending order
    list.sort((a, b) => b - a);
    return list[1];
  }
};

// console.log(secondLargestNumber([1,3,2,5,3]);
