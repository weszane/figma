import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, createRef, useMemo, useCallback } from "react";
import { wA } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { bL, l9, mc, c$ } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { fp, md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { Uz } from "../905/63728";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t } from "../905/303541";
import { CZ } from "../905/294085";
import { hO, d3 } from "../figma_app/545293";
import { l1 } from "../figma_app/502363";
import { j7 } from "../905/929976";
import { Um } from "../905/848862";
import { QB } from "../905/143890";
import { WY } from "../figma_app/162807";
import { H } from "../905/286442";
import { dd } from "../figma_app/604494";
import { c as _$$c } from "../905/566438";
import { R$ } from "../905/479155";
import { k as _$$k } from "../905/341245";
export function $$w0({
  entryPoint: e,
  containerRef: t,
  hideSpacesFilter: i
}) {
  return jsxs("div", {
    className: _$$s.flex.gap8.$,
    "data-testid": "fragment-search-filters",
    children: [jsx(C, {
      dropdownId: "same-energy-modal-creator-facet-dropdown",
      facetType: WY.CREATOR,
      containerRef: t
    }), !i && jsx(C, {
      dropdownId: "same-energy-modal-space-facet-dropdown",
      facetType: WY.SPACE,
      containerRef: t
    }), jsx(T, {
      entryPoint: e
    })]
  });
}
function C({
  dropdownId: e,
  facetType: t,
  containerRef: i
}) {
  let s = useRef(null);
  let o = wA();
  let l = Um();
  let d = l?.type === e;
  let {
    active,
    target
  } = H({
    ref: s || createRef(),
    focusOptions: {
      enableAutoFocus: !1
    }
  });
  let m = useMemo(() => ({
    allowDefault: !0,
    shortcuts: [{
      key: Uz.ENTER
    }],
    onAction: () => {
      !d && s.current && o(j7({
        type: e,
        data: {
          facetType: t,
          targetRect: s.current.getBoundingClientRect()
        }
      }));
    }
  }), [o, d, e, s, t]);
  _$$k({
    primaryAction: m,
    active,
    actionLabel: !1,
    target
  });
  return jsx(_$$c, {
    active,
    children: jsx("div", {
      ref: s,
      children: jsx(l1, {
        dropdownId: e,
        facetType: t,
        hasQuickActionsStyling: !0,
        containerRef: i,
        contentTargetRef: s
      })
    })
  });
}
function T({
  entryPoint: e
}) {
  let [t, i] = fp(hO.sortByAtom);
  let a = md(hO.currentSearchAtom);
  let s = md(CZ);
  let p = md(dd);
  let f = !!a?.result?.data?.length;
  let _ = [...QB.map(e => ({
    type: "checkableOption",
    value: e,
    text: k(e),
    disabled: !f
  }))];
  let A = useRef(null);
  let {
    active,
    target,
    focus
  } = H({
    ref: A || createRef(),
    focusOptions: {
      enableAutoFocus: !1
    }
  });
  let T = {
    allowDefault: !0,
    shortcuts: [{
      key: Uz.ENTER
    }]
  };
  _$$k({
    primaryAction: T,
    active,
    actionLabel: !1,
    target
  });
  let R = R$();
  let N = useCallback(() => {
    setTimeout(() => {
      R();
      focus();
    }, 0);
  }, [R, focus]);
  let P = useCallback(t => {
    a && (sx("Fragment search sorted results", {
      ...d3(e, p, a.searchId, a.input, !1, s),
      sort_by: t
    }), i(t), N());
  }, [a, e, s, p, i, N]);
  return jsx("div", {
    className: "xh8yej3",
    children: jsxs(bL, {
      onChange: P,
      value: t,
      onOpenChange: N,
      children: [jsx(_$$c, {
        active,
        children: jsx(l9, {
          label: jsx(_$$h, {
            children: tx("fragment_search.sort_by")
          }),
          children: jsx("div", {
            ref: A,
            children: t ? k(t) : tx("fragment_search.sort_by")
          })
        })
      }), jsx(mc, {
        children: _.map(e => jsx(c$, {
          value: e.value,
          children: e.text
        }, e.value))
      })]
    })
  });
}
function k(e) {
  switch (e) {
    case "percent_match":
      return t("fragment_search.sort_percent_match");
    case "last_modified":
      return t("fragment_search.sort_last_modified");
    default:
      xb(e);
  }
}
export const s = $$w0;