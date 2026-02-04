const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^infra/(.*)$": "<rootDir>/infra/$1",
  },
});

module.exports = jestConfig;
