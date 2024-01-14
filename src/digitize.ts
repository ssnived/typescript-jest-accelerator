// Given a random non-negative number, this function returns the digits of this number within an array in reverse order.
// 35231 => [1,3,2,5,3]
// 0 => [0]
export const digitize = (n: number): number[] => {
  var result = [0];

  if (n == 0) {
    return result;
  } else {
    const result = Array.from(n.toString()).map(Number).reverse();
    return result;
  }
};

// console.log(digitize(1000));
