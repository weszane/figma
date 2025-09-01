export function $$n1(e) {
  return {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@figma/figma-plugins/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: e.isWidget && e.useEsbuild ? "./widget-src/tsconfig.json" : "./tsconfig.json"
    },
    root: !0,
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_"
      }]
    }
  };
}
export function $$r0(e) {
  let t = {
    "@figma/plugin-typings": "*",
    "@figma/eslint-plugin-figma-plugins": "*",
    "@typescript-eslint/eslint-plugin": "^6.12.0",
    "@typescript-eslint/parser": "^6.12.0",
    eslint: "^8.54.0",
    typescript: "^5.3.2"
  };
  e.isWidget && (t = {
    ...t,
    "@figma/widget-typings": "*"
  });
  e.useEsbuild && (t = {
    ...t,
    esbuild: "*"
  });
  return s(t);
}
export function $$a2(e) {
  let t = {
    build: "tsc -p tsconfig.json",
    watch: "npm run build -- --watch",
    lint: "eslint --ext .ts,.tsx --ignore-pattern node_modules .",
    "lint:fix": "eslint --ext .ts,.tsx --ignore-pattern node_modules --fix ."
  };
  e.isWidget && e.useEsbuild && (t = {
    ...t,
    build: "esbuild widget-src/code.tsx --bundle --outfile=dist/code.js --target=es6",
    tsc: "tsc --noEmit -p widget-src"
  });
  return s(t);
}
function s(e) {
  let t = Object.keys(e).sort();
  let i = {};
  for (let n of t) i[n] = e[n];
  return i;
}
export const Pl = $$r0;
export const Z8 = $$n1;
export const wL = $$a2;