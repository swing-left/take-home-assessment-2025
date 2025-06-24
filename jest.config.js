// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // if you're using "@/..." paths
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
