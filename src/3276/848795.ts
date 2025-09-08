import { b } from "../905/275748";
import _require from "../048e062c/42307";
import { NONE_SYMBOL } from "../905/992467";
export let $$a0 = new b({
  name: "react_scenegraph",
  dependencies: [],
  exports: {
    "./lazy_root": "./lazy_root.tsx",
    "./jsx_panel": "./jsx_panel.tsx",
    "./chart/import_data_modal": "./chart/import_data_modal.tsx",
    "./jsx_props": "./jsx_props.ts"
  },
  friendFiles: [],
  routeHints: ["react_scenegraph"],
  eslint: {
    rules: {
      "react/jsx-no-literals": ["error", {
        elementOverrides: {
          Text: {
            allowElement: !0
          },
          Line: {
            allowElement: !0
          },
          UnorderedList: {
            allowElement: !0
          },
          OrderedList: {
            allowElement: !0
          },
          Sticky: {
            allowElement: !0
          }
        }
      }]
    }
  }
}).createLazyComponent(() => Promise.all([]).then(_require).then(e => e.ReactScenegraphRoot), {
  componentName: "LazyReactScenegraphRoot",
  error: NONE_SYMBOL.NONE
});
export const U = $$a0;
