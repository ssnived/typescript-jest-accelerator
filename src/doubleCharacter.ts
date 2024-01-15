// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
export const doubleCharacterTransform = (string: string) => {
  const doubleArray = [];

  for (let i = 0; i < string.length; i++) {
    //push the character twice
    doubleArray.push(string[i]);
    doubleArray.push(string[i]);
  }

  const result = doubleArray.join("");
  return result;
};

// console.log(doubleCharacterTransform("Hello the characters are doubled"));
