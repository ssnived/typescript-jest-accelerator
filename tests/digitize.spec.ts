import * as digitize from "../src/digitize"; //import module to test

describe("digitize function @unit", () => {
  it("should reverse digits of a number", () => {
    //test data
    const testData = [{ number: 12345, expectedList: [5, 4, 3, 2, 1] }];

    testData.forEach((record) => {
      const result = digitize.digitize(record.number);
      expect(result).toEqual(record.expectedList);
    });
  });
  it("should return 0 when given the number 0", () => {
    //test data
    const testData = [{ number: 0, expectedList: [0] }];

    testData.forEach((record) => {
      const result = digitize.digitize(record.number);
      expect(result).toEqual(record.expectedList);
    });
  });
});
