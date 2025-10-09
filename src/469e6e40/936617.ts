import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getI18nString } from "../905/303541";
import { useSingleSelectedKey } from "../figma_app/311375";
import { M } from "../469e6e40/302359";
import { V } from "../469e6e40/782251";
import { SelectionStylesHelpers } from "../figma_app/763686";
import { q6 } from "../figma_app/793429";
import { TrackingProvider } from "../figma_app/831799";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { VZ } from "../figma_app/727192";
import { _p } from "../figma_app/826998";
import { s0, yg } from "../figma_app/261761";
import { useVariableDataLoaded } from "../figma_app/852050";
import { t as _$$t2 } from "../figma_app/143965";
import { SG, VS, Af, ZN } from "../figma_app/803932";
import { X } from "../figma_app/934313";
import { J } from "../figma_app/785050";
import { N, o as _$$o } from "../figma_app/254634";
import { U } from "../figma_app/914726";
function x({
  isSubsection: e
}) {
  let t = q6("EFFECT");
  let a = q6("TEXT");
  let s = useSingleSelectedKey();
  return useDeepEqualSceneValue((e, t) => {
    if (!t) return !1;
    let a = e?.get(t);
    return !!a && ("SECTION" === a.type || "FRAME" === a.type);
  }, s) ? jsxs(Fragment, {
    children: [t.visibleItems.length > 0 && jsx(TrackingProvider, {
      name: "Selection styles panel",
      properties: {
        resourceType: "Effect",
        count: t.totalItems
      },
      children: jsxs(VZ, {
        title: getI18nString("dev_handoff.selection_effect_styles"),
        recordingKey: "devModeSelectionEffectStyles",
        isSubsection: e,
        noPadding: e,
        noBorder: e,
        children: [t.visibleItems.map(e => jsx(b, {
          styleData: e
        }, e?.key)), t.showMoreButton]
      })
    }), a.visibleItems.length > 0 && jsx(TrackingProvider, {
      name: "Selection styles panel",
      properties: {
        resourceType: "Text",
        count: a.totalItems
      },
      children: jsxs(VZ, {
        title: getI18nString("dev_handoff.selection_text_styles"),
        recordingKey: "devModeSelectionTextStyles",
        isSubsection: e,
        noPadding: e,
        noBorder: e,
        children: [a.visibleItems.map(e => jsx(b, {
          styleData: e
        }, e?.key)), a.showMoreButton]
      })
    })]
  }) : null;
}
function b({
  styleData: e
}) {
  return jsx(_p, {
    styleId: e.key,
    styleNodeId: e.node_id,
    styleType: e.style_type,
    onMouseEnter: () => {
      SelectionStylesHelpers?.highlightOnlySameStyleInSublayers(e.guids);
    },
    onMouseLeave: () => {
      SelectionStylesHelpers?.highlightOnlySameStyleInSublayers([]);
    },
    className: "selection_styles_panel--styleRow--t--sj",
    children: jsx(s0, {
      styleKey: e.key,
      styleType: e.style_type,
      rowWithAccessoryButton: !0
    })
  });
}
export function $$C2() {
  let e = SG();
  let t = VS();
  let a = N()?.[0];
  let {
    selectionVariables,
    selectionStyles,
    selectionValues
  } = M();
  let d = useSelector(e => e.mirror.selectionPaints.emptyDueToLimitExceeded);
  return useMemo(() => {
    if (!e.length && !t.length && !a?.strokeColors.length && !selectionVariables.length && !selectionStyles.length && !selectionValues.length) return {
      total: 0,
      chits: [],
      emptyDueToLimitExceeded: d
    };
    let s = e.length + t.length + (a?.strokeColors.length ?? 0) + selectionVariables.length + selectionStyles.length + selectionValues.length;
    let i = [];
    for (let s of [e, t, a?.strokeColors, selectionVariables, selectionStyles, selectionValues]) if (s && 0 !== s.length && (i.push(...s.slice(0, 3 - i.length)), 3 === i.length)) break;
    return {
      chits: i,
      total: s,
      emptyDueToLimitExceeded: d
    };
  }, [e, t, a?.strokeColors, selectionVariables, selectionStyles, selectionValues, d]);
}
export function $$S1() {
  let {
    total,
    emptyDueToLimitExceeded
  } = $$C2();
  return total || emptyDueToLimitExceeded ? jsxs(Fragment, {
    children: [jsx(J, {
      isSubsection: !0
    }), jsxs(VZ, {
      title: getI18nString("inspect_panel.colors.title"),
      additionalHeaders: jsx(Af, {}),
      recordingKey: "colors",
      noBorder: !0,
      noPadding: !0,
      isSubsection: !0,
      children: [jsx(ZN, {
        hideBorder: !0,
        noPadding: !0,
        isSubsection: !0
      }), jsx(_$$o, {
        hideBorder: !0,
        noPadding: !0,
        isSubsection: !0
      }), jsx(V, {
        hideBorder: !0,
        noPadding: !0,
        isSubsection: !0
      })]
    })]
  }) : null;
}
export function $$N0() {
  useVariableDataLoaded({
    enabled: !0
  });
  let e = useSingleSelectedKey();
  return useDeepEqualSceneValue((e, t) => {
    if (!t) return !1;
    let a = e?.get(t);
    return !!a && !!a.isAlive && "SECTION" === a.type;
  }, e) ? jsx($$S1, {}) : jsxs("div", {
    className: "figma_properties_section--figmaPropertiesSection--H09WT",
    children: [jsx(X, {
      hideBorder: !0,
      noPadding: !0,
      isSubsection: !0
    }), jsx(U, {
      hideBorder: !0,
      noPadding: !0,
      isSubsection: !0
    }), jsx($$S1, {}), jsx(yg, {
      hideBorder: !0,
      noPadding: !0,
      isSubsection: !0
    }), jsx(x, {
      isSubsection: !0
    }), jsx(_$$t2, {
      isSubsection: !0
    })]
  });
}
export const Fe = $$N0;
export const r_ = $$S1;
export const x1 = $$C2;