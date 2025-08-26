import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // React 19 and Next.js 15 specific rules
      'react/no-unknown-property': 'off',
      'react/jsx-no-leaked-render': 'off', // Changed to off for flexibility
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'error',
      
      // General performance and code quality rules
      'no-console': 'off',
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      
      // React hooks rules
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

export default eslintConfig;
