import * as pipeFixer from "../src/pipeProblem";

describe("PipeFixer validations @unit", () => {
  //test data array
  const testData = [
    {
      testList: [1, 3, 5, 6, 7, 8],
      expectedResult: [1, 2, 3, 4, 5, 6, 7, 8],
    },
    {
      testList: [2],
      expectedResult: [2],
    },
    {
      testList: [-1, 4],
      expectedResult: [-1, 0, 1, 2, 3, 4],
    },
    {
      testList: [-1, 10],
      expectedResult: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];

  it.each(testData)(
    "Validate the pipeFixer accurately fixes the list from '$testList' to '$expectedResult'",
    ({ testList, expectedResult }) => {
      const result = pipeFixer.pipeFixer(testList);

      //test assertion
      expect(result).toEqual(expectedResult);
    }
  );
});
