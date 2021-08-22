module.exports = {
  plugins: ['prettier'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    // 'plugin:unicorn/recommended',
  ],
  rules: {
    // 'import/no-namespace': 'error',
    // 'import/no-relative-parent-imports': 'error',
    // 'unicorn/filename-case': [
    //   'error',
    //   {
    //     cases: {
    //       camelCase: true,
    //       pascalCase: true,
    //     },
    //   },
    // ],
    // 'unicorn/no-array-for-each': 'off',
    // 'unicorn/no-array-reduce': 'off',
    // 'unicorn/prevent-abbreviations': 'off',
    // 'unicorn/no-null': 'off',
    // 'unicorn/filename-case': [
    //   'error',
    //   {
    //     case: 'camelCase',
    //     ignore: ['App.tsx', 'index.tsx'],
    //   },
    // ],
    'prettier/prettier': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  // overrides: [
  //   {
  //     files: ['src/components/**/*.tsx'],
  //     rules: {
  //       'unicorn/filename-case': [
  //         'error',
  //         {
  //           case: 'pascalCase',
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     files: ['src/pages/**/*.tsx'],
  //     rules: {
  //       'unicorn/filename-case': [
  //         'error',
  //         {
  //           case: 'kebabCase',
  //         },
  //       ],
  //     },
  //   },
  // ],
};
