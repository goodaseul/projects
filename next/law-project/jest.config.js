/** @type {import('jest').Config} */
module.exports = {
    preset: "ts-jest", // TypeScript 처리
    testEnvironment: "jsdom", // 브라우저 환경
    setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"], // jest-dom
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
