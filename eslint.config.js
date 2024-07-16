import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["**/*.tsx"], languageOptions: { parserOptions: { ecmaFeatures: { tsx: true } } } },
  pluginReactConfig,
  {
    rules: {
      "comma-dangle": ["error", "never"],
      "no-cond-assign": ["error"],
      "no-console": ["error"],
      "no-constant-condition": ["error"],
      "no-control-regex": ["error"],
      "no-debugger": ["error"],
      "no-dupe-args": ["error"],
      "no-dupe-keys": ["error"],
      "no-duplicate-case": ["error"],
      "no-empty-character-class": ["error"],
      "no-empty-pattern": ["error"],
      "no-ex-assign": ["error"],
      "no-extra-boolean-cast": ["error"],
      "no-extra-parens": ["error", "functions"],
      "no-extra-semi": ["error"],
      "no-func-assign": ["error"],
      "no-inner-declarations": ["error"],
      "no-invalid-regexp": ["error"],
      "no-irregular-whitespace": ["error"],
      "no-mixed-spaces-and-tabs": ["error"],
      "no-multiple-empty-lines": ["error"],
      "no-multi-spaces": ["error"],
      "no-new-symbol": ["error"],
      "no-obj-calls": ["error"],
      "no-prototype-builtins": ["error"],
      "no-redeclare": ["error"],
      "no-regex-spaces": ["error"],
      "no-sparse-arrays": ["error"],
      "no-this-before-super": ["error"],
      "no-undef": ["error"],
      "no-unexpected-multiline": ["error"],
      "no-unmodified-loop-condition": ["error"],
      "no-unneeded-ternary": ["error"],
      "no-unreachable": ["error"],
      "no-unsafe-finally": ["error"],
      "no-unsafe-negation": ["error"],
      "no-unused-expressions": ["error"],
      "no-unused-vars": ["error"],
      "no-use-before-define": ["error"],
      "no-useless-call": ["error"],
      "no-useless-computed-key": ["error"],
      "no-useless-constructor": ["error"],
      "no-useless-escape": ["error"],
      "no-useless-rename": ["error"],
      "no-useless-return": ["error"],
      "no-with": ["error"],
      "semi": ["error"],
      "quotes": ["error", "double"]
    },
    ignores: ["dist", "./vite.config.ts"],
    "settings": {
      "react": {
        "version": "detect" // or a specific version like "18.2.0"
      }
    }
  }
];