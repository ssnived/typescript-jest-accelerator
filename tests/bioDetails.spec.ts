import * as bioDetails from "../src/bioDetails";

describe("bioDetails summary tests @unit", () => {
  it("biodetails successfully returns expected string", () => {
    //test data
    const name = ["John", "Smith"];
    const city = "Phoenix";
    const state = "Arizona";
    const expectedResult = "Hello, John Smith! Welcome to Phoenix, Arizona!";

    //test result
    const result = bioDetails.bioDetails(name, city, state);

    //assertions
    expect(result).toEqual(expectedResult);
  });
});
