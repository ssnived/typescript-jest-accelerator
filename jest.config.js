/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  // testPathIgnorePatterns: ["/node_modules/", "/__tests__/", "/sample/"],
  // coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/", "/sample/"],
  coverageReporters: ["json", "html", "text"],
  testMatch: ["<rootDir>/tests/**/*.spec.ts"],
};
