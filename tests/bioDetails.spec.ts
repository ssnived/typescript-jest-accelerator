import * as bioDetails from "../src/bioDetails";

describe("bioDetails summary tests @unit", () => {
  //test data

  const testData = [
    {
      name: ["John", "Smith"],
      city: "Phoenix",
      state: "Arizona",
      expectedResult: "Hello, John Smith! Welcome to Phoenix, Arizona!",
    },
    {
      name: ["John", "Wick"],
      city: "Phoenix",
      state: "Arizona",
      expectedResult: "Hello, John Wick! Welcome to Phoenix, Arizona!",
    },
  ];

  it.each(testData)(
    "bioDetails correctly converts '$name , $city , $state' to '$expectedResult'",
    ({ name, city, state, expectedResult }) => {
      const result = bioDetails.bioDetails(name, city, state);

      //test assertion
      expect(result).toEqual(expectedResult);
    }
  );
});
