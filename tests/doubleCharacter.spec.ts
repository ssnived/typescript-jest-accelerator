import * as doubleCharacterTransform from "../src/doubleCharacter";

describe("doubleCharacterTransform tests @unit", () => {
  const testData = [
    {
      string: "String",
      expectedResult: "SSttrriinngg",
    },
    {
      string: "Hello World",
      expectedResult: "HHeelllloo  WWoorrlldd",
    },
    {
      string: "1234!_ ",
      expectedResult: "11223344!!__  ",
    },
  ];

  it.each(testData)(
    "doubleCharacterTransform of '$string' to '$expectedResult'",
    ({ string, expectedResult }) => {
      const result = doubleCharacterTransform.doubleCharacterTransform(string);
      //test assertion
      expect(result).toEqual(expectedResult);
    }
  );
});
