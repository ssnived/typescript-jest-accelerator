import * as secondLargestNumber from "../src/secondLargestNumber";

describe("SecondLargestNumber validations @unit", () => {
  //test data array
  const testData = [
    {
      testList: [1, 3, 3, 5, 6, 7, 7, 8],
      expectedResult: 7,
    },
    {
      testList: [2],
      expectedResult: 2,
    },
    {
      testList: [-1, 4],
      expectedResult: -1,
    },
    {
      testList: [-1, -2, 10],
      expectedResult: -1,
    },
  ];

  it.each(testData)(
    "Validate the secondLargestNumber accurately returns the second largest number from the list '$testList' as '$expectedResult'",
    ({ testList, expectedResult }) => {
      const result = secondLargestNumber.secondLargestNumber(testList);

      //test assertion
      expect(result).toEqual(expectedResult);
    }
  );
});
