# typescript-jest-accelerator

playground environment for typescript and jest tests

## Usage

- run `yarn install` to install the necessary dependencies

## Running Tests

- Refer to the package.json
- `yarn test:jest`
- `yarn test:coverage:jest`

```json
  "scripts": {
    "test:jest": "jest --verbose --updateSnapshot --passWithNoTests",
    "test:coverage:jest": "jest --verbose --updateSnapshot --coverage --passWithNoTests"
  }
```

## Environment Variables

- You will need a local `.env` file to work with environment variables

## Ommiting Samples

Uncomment these 2 lines in the `jest.config.js`

```ts
// testPathIgnorePatterns: ["/node_modules/", "/__tests__/", "/sample/"],
// coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/", "/sample/"],
```
