// import * as dotenv from "dotenv";
// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// returns Hello, John Smith! Welcome to Phoenix, Arizona!

export const bioDetails = (name: string[], city: string, state: string) => {
  // convert name to string
  const nameString = name.join(" ");
  // final string
  const result = `Hello, ${nameString}! Welcome to ${city}, ${state}!`;
  return result;
};

// console.log(bioDetails(["John", "Smith"], "Phoenix", "Arizona"));
// dotenv.config();
// console.log(process.env.TEST_VAR);
