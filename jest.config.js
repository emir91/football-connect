module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
      "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
      "^@models/(.*)$": "<rootDir>/src/models/$1",
      "^@routes/(.*)$": "<rootDir>/src/routes/$1"
    }
};