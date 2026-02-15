import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", "coverage/**"], // ✅ ignore build folders
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node, // ✅ makes `process` defined
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
  },
]);

