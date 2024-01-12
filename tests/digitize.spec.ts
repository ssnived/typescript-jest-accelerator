import * as digitize from "../src/digitize"; //import module to test

describe("digitize function @unit", () => {
  it("should reverse digits of a number", () => {
    const result = digitize.digitize(12345);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
  it("should return 0 when given the number 0", () => {
    const result = digitize.digitize(0);
    expect(result).toEqual([0]);
  });
});
