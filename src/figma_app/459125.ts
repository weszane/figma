import { LazyComponentFactory } from "../905/275748";
import _require3 from "../2b17fec9/625947";
import _require2 from "../2b17fec9/275043";
import _require from "../2b17fec9/846715";
import { ServiceCategories } from "../905/165054";
import { NONE_SYMBOL } from "../905/992467";
let a = new LazyComponentFactory({
  name: "fullscreen_whiteboard",
  enforce: !1,
  dependencies: [],
  exports: ["whiteboard_components.tsx"],
  friendFiles: [],
  routeHints: ["fullscreen_whiteboard"],
  eslint: {
    rules: {
      "react/no-array-index-key": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
});
let $$s0 = a.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.DelightfulToolbarWithErrorBoundary), {
  componentName: "LazyDelightfulToolbar",
  team: ServiceCategories.FIGJAM,
  loading: NONE_SYMBOL.NONE,
  error: NONE_SYMBOL.NONE
});
let $$o2 = a.createLazyComponent(() => Promise.all([]).then(_require2).then(e => e.WhiteboardUI3ToolbeltWithErrorBoundary), {
  team: ServiceCategories.FIGJAM,
  componentName: "LazyWhiteboardUI3Toolbelt",
  loading: NONE_SYMBOL.NONE,
  error: NONE_SYMBOL.NONE
});
let $$l1 = a.createLazyComponent(() => Promise.all([]).then(_require3).then(e => e.FigjamView), {
  componentName: "LazyFigjamView",
  team: ServiceCategories.FIGJAM,
  error: NONE_SYMBOL.NONE
});
export const aT = $$s0;
export const Ws = $$l1;
export const OK = $$o2;