const { defineConfig, globalIgnores } = require('eslint/config');

// Zero dependencies beyond `eslint` itself. No `typescript-eslint`, no
// `globals` package, no plugins — everything here ships inside `eslint`
// core, so this works in an image with only `eslint` installed and no
// node_modules to manage.
//
// ESLint enables NO rules by default — "eslint:recommended" is normally
// supplied by the separate `@eslint/js` package, which isn't available
// here. The block below is that same rule set, generated directly from
// this installed eslint version's own rule metadata (every core rule
// whose `meta.docs.recommended` flag is true), so it's the standard,
// "official" baseline rather than a hand-picked list. If you upgrade the
// eslint version in this image, you can regenerate it with:
//
//   node -e "const{builtinRules}=require('eslint/use-at-your-own-risk');
//   const r={};for(const[n,d]of builtinRules)if(d.meta?.docs?.recommended)
//   r[n]='error';console.log(JSON.stringify(r,null,2))"
const recommendedRules = {
  'constructor-super': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-import-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-this-before-super': 'error',
  'no-unassigned-vars': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': 'error',
  'no-useless-assignment': 'error',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'preserve-caught-error': 'error',
  'require-yield': 'error',
  'use-isnan': 'error',
  'valid-typeof': 'error',
};

module.exports = defineConfig([
  // Global ignores (replaces `ignorePatterns`)
  globalIgnores(['.devcontainer/*', '.vscode/*', '**/node_modules/*', '**/vendor/*']),

  {
    // Plain JS/JSX only. Without @typescript-eslint/parser, TypeScript
    // syntax can't be parsed — .ts/.tsx files would error here, so they're
    // deliberately left out of this config's `files` scope.
    files: ['**/*.js', '**/*.jsx'],

    languageOptions: {
      ecmaVersion: 'latest', // no year to bump by hand going forward
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },

      // The `globals` package isn't available, so the commonly needed
      // identifiers are declared by hand instead. Trim or extend as needed.
      globals: {
        // browser
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        performance: 'readonly',

        // node / commonjs (added since this project is staying CommonJS)
        process: 'readonly',
        module: 'writable',
        exports: 'writable',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        Buffer: 'readonly',

        // jest
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',

        // explicit extras from the original config
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },

    rules: recommendedRules,
  },
]);
