import wdio from "eslint-plugin-wdio";
import { configs as wdioConfig } from "eslint-plugin-wdio";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("plugin:wdio/recommended", "eslint:recommended"),
  {
    plugins: {
      wdio,
    },

    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node,
      },

      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    extends: [wdioConfig["flat/recommended"]],
  },
];
