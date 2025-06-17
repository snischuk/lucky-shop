import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'package.json',
      'package-lock.json',
      'tsconfig.node.json',
      'vite.config.ts',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      import: importPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'func-style': 'off',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'warn',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'import/no-default-export': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prefer-const': 'warn',
      'no-useless-return': 'warn',
      '@typescript-eslint/explicit-function-return-type': [
        'off',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
    },
  },
);
