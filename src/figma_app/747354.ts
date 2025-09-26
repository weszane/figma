import { LazyComponentFactory } from "../905/275748";
import _require from "../b2835def/160846";
import { NONE_SYMBOL } from "../905/992467";
export let $$i0 = new LazyComponentFactory({
  name: "fullscreen_illustration",
  dependencies: [],
  exports: {
    "./components": "./components.ts",
    "./properties_panel_components": "./properties_panel_components.ts",
    "./lazy_illustration_view": "./lazy_illustration_view.tsx",
    "./illustration_utils": "./illustration_utils.ts",
    "./toolbelt/drawing_tools": "./toolbelt/drawing_tools.tsx",
    "./inputs": "./inputs.ts",
    "./entrypoints/exports": "./entrypoints/exports.tsx",
    "./onboarding": "./onboarding.ts"
  },
  sideEffects: !1,
  friendFiles: []
}).createLazyComponent(() => Promise.all([]).then(_require).then(e => e.IllustrationView), {
  componentName: "LazyIllustrationView",
  error: NONE_SYMBOL.NONE
});
export const C = $$i0;