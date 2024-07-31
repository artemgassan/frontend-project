export default {
    clearMocks: true,
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    testEnvironment: 'jsdom',
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
};
