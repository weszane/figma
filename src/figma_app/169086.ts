import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createContext, useState, useMemo, useEffect, useContext } from "react";
import { debounce } from "../905/915765";
import { assertNotNullish } from "../figma_app/95419";
import { ScreenReaderOnly } from "../905/172252";
import l from "../vendor/524488";
import { getI18nString } from "../905/303541";
import { QZ } from "../figma_app/844435";
import { o3, nt } from "../905/226610";
import { Jc } from "../905/946805";
var d = l;
let h = createContext({
  state: {
    status: null,
    type: "results"
  },
  setState: () => {}
});
export function $$m0({
  children: e
}) {
  let [t, r] = useState(null);
  let a = useMemo(() => ({
    state: t,
    setState: r
  }), [t, r]);
  return jsxs(Fragment, {
    children: [jsx(h.Provider, {
      value: a,
      children: e
    }), jsx(g, {
      status: t?.type === "error" ? t?.status : null
    })]
  });
}
function g({
  debounceTimeMs: e = 500,
  status: t
}) {
  let [r, s] = useState(null);
  let l = useMemo(() => debounce(e => {
    s(e);
  }, e), [e]);
  useEffect(() => (l(t), () => {
    l.cancel();
  }), [l, t]);
  return jsx(ScreenReaderOnly, {
    children: jsx("span", {
      "aria-live": "assertive",
      "aria-atomic": "true",
      children: r
    })
  });
}
export function $$f1({
  activeTab: e,
  isLoading: t = !1,
  passthroughErrorMessage: r,
  query: n,
  resultsCount: a
}) {
  let o = o3(nt.quickActionsA11y);
  let l = QZ();
  let {
    setState
  } = assertNotNullish(useContext(h), "Must call `useSubscribedLibraries` from within <UpdateQuickActionsScreenReaderStatusContext>");
  let g = useMemo(() => {
    if (r) return {
      status: r,
      type: "error"
    };
    if (0 === a) {
      if (n) {
        let t = d()(n, {
          length: 24
        });
        switch (e) {
          case Jc.ALL:
            return {
              status: getI18nString("qa.accessibility_status.all_tab.no_results", {
                query: t
              }),
              type: "error"
            };
          case Jc.ASSETS:
            return {
              status: getI18nString("qa.accessibility_status.assets_tab.no_results", {
                query: t
              }),
              type: "error"
            };
          case Jc.EXTENSIONS:
            return {
              status: l ? getI18nString("qa.accessibility_status.extensions_tab.include_widgets.no_results", {
                query: t
              }) : getI18nString("qa.accessibility_status.extensions_tab.no_results", {
                query: t
              }),
              type: "error"
            };
        }
      }
      return {
        status: null,
        type: "results"
      };
    }
    return {
      status: getI18nString("qa.accessibility_status.has_results", {
        numResults: a
      }),
      type: "results"
    };
  }, [e, l, r, n, a]);
  useEffect(() => {
    !t && o && setState(g);
  }, [o, t, g, setState]);
}
export function $$E2({
  id: e
}) {
  let {
    state
  } = useContext(h);
  return state?.type !== "results" ? null : jsxs(ScreenReaderOnly, {
    children: [jsx("span", {
      id: e,
      children: getI18nString("qa.input.description")
    }), state.status && jsx("h2", {
      children: state.status
    })]
  });
}
export const Do = $$m0;
export const iC = $$f1;
export const mr = $$E2;