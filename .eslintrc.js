module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["plugin:react/recommended", "airbnb", "plugin:@typescript-eslint/recommended", "prettier"],
    settings: {
      "import/resolver": {
        node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
      },
    },
    "overrides": [
      {
        "files": ["*.png", "*.jpg", "*.jpeg", "*.gif"],
        "rules": {
          "import/no-unresolved": "off"
        }
      }
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: [
      "react",
      "@typescript-eslint",
      "better-styled-components",
      "react-hooks",
    ],
    rules: {
      // "@typescript-eslint/no-unused-vars": ["error"],
      // "better-styled-components/sort-declarations-alphabetically": 2,
      // "space-before-function-paren": 2,
      // "sort-imports": 0,
      "import/no-unresolved": ["error", { ignore: ["^.*\\.png$"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          mjs: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "object-shorthand": 0,
      "import/prefer-default-export": 0,
      "react/function-component-definition": [
        2,
        {
          namedComponents: "function-declaration",
        },
      ],
      "arrow-body-style": "off",
      "react/prop-types": 0,
      "react/function-component-definition": "off",
      "indent": ["error", 4],
      "react/destructuring-assignment": 0,
      "react/jsx-props-no-spreading": 0,
      "react/require-default-props": 0,
      // // note you must disable the base rule as it can report incorrect errors
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
      // "object-curly-newline": [
      //     "error",
      //     {
      //         multiline: true,
      //         minProperties: 4,
      //     },
      // ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "max-len": ["error", { code: 120,  ignorePattern: '^import .*' }],
      indent: "error",
    },
  };
  