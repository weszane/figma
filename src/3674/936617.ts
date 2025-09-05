import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { uQ } from "../figma_app/311375";
import { M } from "../469e6e40/302359";
import { V } from "../469e6e40/782251";
import { kTx } from "../figma_app/763686";
import { q6 } from "../figma_app/793429";
import { fu } from "../figma_app/831799";
import { Fk } from "../figma_app/167249";
import { VZ } from "../figma_app/727192";
import { _p } from "../figma_app/826998";
import { s0, yg } from "../figma_app/261761";
import { JG } from "../figma_app/852050";
import { t as _$$t2 } from "../figma_app/143965";
import { SG, VS, Af, ZN } from "../figma_app/803932";
import { X } from "../figma_app/934313";
import { J } from "../figma_app/785050";
import { N as _$$N, o as _$$o } from "../figma_app/254634";
import { U } from "../figma_app/914726";
function m({
  isSubsection: e
}) {
  let t = q6("EFFECT");
  let n = q6("TEXT");
  let i = uQ();
  return Fk((e, t) => {
    if (!t) return !1;
    let n = e?.get(t);
    return !!n && ("SECTION" === n.type || "FRAME" === n.type);
  }, i) ? jsxs(Fragment, {
    children: [t.visibleItems.length > 0 && jsx(fu, {
      name: "Selection styles panel",
      properties: {
        resourceType: "Effect",
        count: t.totalItems
      },
      children: jsxs(VZ, {
        title: _$$t("dev_handoff.selection_effect_styles"),
        recordingKey: "devModeSelectionEffectStyles",
        isSubsection: e,
        noPadding: e,
        noBorder: e,
        children: [t.visibleItems.map(e => jsx(_, {
          styleData: e
        }, e?.key)), t.showMoreButton]
      })
    }), n.visibleItems.length > 0 && jsx(fu, {
      name: "Selection styles panel",
      properties: {
        resourceType: "Text",
        count: n.totalItems
      },
      children: jsxs(VZ, {
        title: _$$t("dev_handoff.selection_text_styles"),
        recordingKey: "devModeSelectionTextStyles",
        isSubsection: e,
        noPadding: e,
        noBorder: e,
        children: [n.visibleItems.map(e => jsx(_, {
          styleData: e
        }, e?.key)), n.showMoreButton]
      })
    })]
  }) : null;
}
function _({
  styleData: e
}) {
  return jsx(_p, {
    styleId: e.key,
    styleNodeId: e.node_id,
    styleType: e.style_type,
    onMouseEnter: () => {
      kTx?.highlightOnlySameStyleInSublayers(e.guids);
    },
    onMouseLeave: () => {
      kTx?.highlightOnlySameStyleInSublayers([]);
    },
    className: "selection_styles_panel--styleRow--t--sj",
    children: jsx(s0, {
      styleKey: e.key,
      styleType: e.style_type,
      rowWithAccessoryButton: !0
    })
  });
}
export function $$A2() {
  let e = SG();
  let t = VS();
  let n = _$$N()?.[0];
  let {
    selectionVariables,
    selectionStyles,
    selectionValues
  } = M();
  let d = useSelector(e => e.mirror.selectionPaints.emptyDueToLimitExceeded);
  return useMemo(() => {
    if (!e.length && !t.length && !n?.strokeColors.length && !selectionVariables.length && !selectionStyles.length && !selectionValues.length) return {
      total: 0,
      chits: [],
      emptyDueToLimitExceeded: d
    };
    let i = e.length + t.length + (n?.strokeColors.length ?? 0) + selectionVariables.length + selectionStyles.length + selectionValues.length;
    let o = [];
    for (let i of [e, t, n?.strokeColors, selectionVariables, selectionStyles, selectionValues]) if (i && 0 !== i.length && (o.push(...i.slice(0, 3 - o.length)), 3 === o.length)) break;
    return {
      chits: o,
      total: i,
      emptyDueToLimitExceeded: d
    };
  }, [e, t, n?.strokeColors, selectionVariables, selectionStyles, selectionValues, d]);
}
export function $$I1() {
  let {
    total,
    emptyDueToLimitExceeded
  } = $$A2();
  return total || emptyDueToLimitExceeded ? jsxs(Fragment, {
    children: [jsx(J, {
      isSubsection: !0
    }), jsxs(VZ, {
      title: _$$t("inspect_panel.colors.title"),
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
export function $$E0() {
  JG({
    enabled: !0
  });
  let e = uQ();
  return Fk((e, t) => {
    if (!t) return !1;
    let n = e?.get(t);
    return !!n && !!n.isAlive && "SECTION" === n.type;
  }, e) ? jsx($$I1, {}) : jsxs("div", {
    className: "figma_properties_section--figmaPropertiesSection--H09WT",
    children: [jsx(X, {
      hideBorder: !0,
      noPadding: !0,
      isSubsection: !0
    }), jsx(U, {
      hideBorder: !0,
      noPadding: !0,
      isSubsection: !0
    }), jsx($$I1, {}), jsx(yg, {
      hideBorder: !0,
      noPadding: !0,
      isSubsection: !0
    }), jsx(m, {
      isSubsection: !0
    }), jsx(_$$t2, {
      isSubsection: !0
    })]
  });
}
export const Fe = $$E0;
export const r_ = $$I1;
export const x1 = $$A2;