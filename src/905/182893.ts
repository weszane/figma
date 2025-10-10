import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, createRef, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { KeyCodes } from "../905/63728";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { CZ } from "../905/294085";
import { hO, d3 } from "../figma_app/545293";
import { l1 } from "../figma_app/502363";
import { showDropdownThunk } from "../905/929976";
import { useDropdownState } from "../905/848862";
import { QB } from "../905/143890";
import { CreatorResourceType } from "../figma_app/162807";
import { usKeyboardFocusHandler } from "../905/286442";
import { dd } from "../figma_app/604494";
import { c as _$$c } from "../905/566438";
import { useLayoutRerender } from "../905/479155";
import { k as _$$k } from "../905/341245";
export function $$w0({
  entryPoint: e,
  containerRef: t,
  hideSpacesFilter: i
}) {
  return jsxs("div", {
    className: cssBuilderInstance.flex.gap8.$,
    "data-testid": "fragment-search-filters",
    children: [jsx(C, {
      dropdownId: "same-energy-modal-creator-facet-dropdown",
      facetType: CreatorResourceType.CREATOR,
      containerRef: t
    }), !i && jsx(C, {
      dropdownId: "same-energy-modal-space-facet-dropdown",
      facetType: CreatorResourceType.SPACE,
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
  let o = useDispatch<AppDispatch>();
  let l = useDropdownState();
  let d = l?.type === e;
  let {
    active,
    target
  } = usKeyboardFocusHandler({
    ref: s || createRef(),
    focusOptions: {
      enableAutoFocus: !1
    }
  });
  let m = useMemo(() => ({
    allowDefault: !0,
    shortcuts: [{
      key: KeyCodes.ENTER
    }],
    onAction: () => {
      !d && s.current && o(showDropdownThunk({
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
  let [t, i] = useAtomValueAndSetter(hO.sortByAtom);
  let a = useAtomWithSubscription(hO.currentSearchAtom);
  let s = useAtomWithSubscription(CZ);
  let p = useAtomWithSubscription(dd);
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
  } = usKeyboardFocusHandler({
    ref: A || createRef(),
    focusOptions: {
      enableAutoFocus: !1
    }
  });
  let T = {
    allowDefault: !0,
    shortcuts: [{
      key: KeyCodes.ENTER
    }]
  };
  _$$k({
    primaryAction: T,
    active,
    actionLabel: !1,
    target
  });
  let R = useLayoutRerender();
  let N = useCallback(() => {
    setTimeout(() => {
      R();
      focus();
    }, 0);
  }, [R, focus]);
  let P = useCallback(t => {
    a && (trackEventAnalytics("Fragment search sorted results", {
      ...d3(e, p, a.searchId, a.input, !1, s),
      sort_by: t
    }), i(t), N());
  }, [a, e, s, p, i, N]);
  return jsx("div", {
    className: "xh8yej3",
    children: jsxs(SelectGroupLabel, {
      onChange: P,
      value: t,
      onOpenChange: N,
      children: [jsx(_$$c, {
        active,
        children: jsx(SelectSeparator, {
          label: jsx(HiddenLabel, {
            children: renderI18nText("fragment_search.sort_by")
          }),
          children: jsx("div", {
            ref: A,
            children: t ? k(t) : renderI18nText("fragment_search.sort_by")
          })
        })
      }), jsx(SelectContainer, {
        children: _.map(e => jsx(SelectOptionReset, {
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
      return getI18nString("fragment_search.sort_percent_match");
    case "last_modified":
      return getI18nString("fragment_search.sort_last_modified");
    default:
      throwTypeError(e);
  }
}
export const s = $$w0;