import { LazyComponentFactory } from "../905/275748";
import _require from "../a88a4c5a/123304";
import { NONE_SYMBOL } from "../905/992467";
export let $$i0 = new LazyComponentFactory({
  name: "fullscreen_design",
  dependencies: [],
  exports: {
    "./lazy_design_view": "./lazy_design_view.tsx"
  },
  friendFiles: [],
  routeHints: ["fullscreen_design"]
}).createLazyComponent(() => Promise.all([]).then(_require).then(e => e.DesignView), {
  componentName: "LazyDesignView",
  error: NONE_SYMBOL.NONE
});
export const a = $$i0;