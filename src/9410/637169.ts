import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { setupThemeContext } from "../905/614223";
import { SceneGraphHelpers } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomValueAndSetter, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { buildUploadUrl } from "../figma_app/169182";
import { $z } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { cR } from "../figma_app/297957";
import { UpgradeAction } from "../905/370443";
import { E as _$$E } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { z4 } from "../905/37051";
import { Z } from "../905/104740";
import { EE, lB } from "../figma_app/731583";
import { getViewportInfo, computeFullscreenViewportForNode } from "../figma_app/62612";
import { N as _$$N } from "../figma_app/268271";
import { F_ } from "../905/858282";
import { NJ } from "../figma_app/419216";
import { GV } from "../figma_app/532170";
import { ZNl } from "../figma_app/6204";
import { hj, d1, Sp } from "../figma_app/888478";
import { R3, b as _$$b, Xq, O6, zu, JP, Rg, j as _$$j } from "../0c62c2fd/722541";
let I = buildUploadUrl("bfb358109ac5994e69048d8390d3a0c334253aa8");
let $$k0 = "rfd-upsell-page-title";
function N({
  nodeToHighlight: e,
  complete: t
}) {
  let [i, s] = useState(null);
  let o = useRef(null);
  let l = getViewportInfo({
    subscribeToUpdates_expensive: !0
  });
  let d = useCallback(() => {
    o.current && s(o.current.absoluteBounds.height * l.zoomScale);
  }, [l.zoomScale]);
  useEffect(() => {
    if (!e) {
      s(null);
      return;
    }
    let t = `dev-page-change-upsell-${e}`;
    let i = EE(t, [e], e => {
      o.current = e.position;
      d();
    });
    o.current = i.currentNodePosition[e]?.position || null;
    d();
    return () => {
      lB(t);
    };
  }, [e, d]);
  return jsxs(NJ, {
    arrowPosition: F_.LEFT_TITLE,
    backgroundColor: "var(--color-bg)",
    className: R3,
    closeButtonClassName: _$$b,
    dismissModal: t,
    hideIfArrowPositionDoesNotMatch: !0,
    hideIfTargetLost: !0,
    isCanvasNode: !0,
    leftOffset: 12,
    noAnimation: !0,
    shouldNotWrapInParagraphTag: !0,
    targetKey: e,
    topOffset: i ? -i / 2 - 15 : 0,
    width: 240,
    children: [jsx("div", {
      className: Xq,
      children: getI18nString("dev_handoff.rfd_signals_upsell.mark_as_ready")
    }), jsx("div", {
      className: O6,
      children: jsx("div", {
        className: zu,
        children: getI18nString("dev_handoff.rfd_signals_upsell.description")
      })
    }), jsx("div", {
      className: JP,
      children: jsx(setupThemeContext, {
        brand: "dev-handoff",
        children: jsx($z, {
          trackingProperties: {
            trackingDescriptor: UpgradeAction.MARK_READY_FOR_DEV
          },
          variant: "primary",
          onClick: function () {
            e && (t(), z4.setNodesReady(!0, [e], "dev-node-change-upsell", null));
          },
          children: getI18nString("dev_handoff.rfd_signals_upsell.mark_ready_for_dev")
        })
      })
    })]
  });
}
function $$A(e) {
  analyticsEventManager.trackDefinedEvent("activation.rfd_signal_upsell.disqualification_reason", {
    reason: e,
    upsellSubject: "page"
  });
}
export function $$O1() {
  let [e, t] = useState("show_page_tooltip");
  let [i, d] = useState(null);
  let [c, _] = useAtomValueAndSetter(hj);
  let y = Xr(d1);
  let O = useAtomWithSubscription(Sp);
  let L = Xr(Sp);
  let R = Z("dev-handoff-rfd-signals-page-upsell");
  let D = cR();
  let {
    show,
    complete,
    uniqueId,
    isShowing
  } = _$$e({
    overlay: ZNl,
    priority: _$$N.HIGH_PRIORITY_MODAL,
    experiment: {
      check: D,
      predicate: e => e,
      postCheck: () => !0
    }
  });
  async function U() {
    c && i && SceneGraphHelpers && (await getSingletonSceneGraph().setCurrentPageAsync(i), SceneGraphHelpers.replaceSelection([c], !0), await R(await computeFullscreenViewportForNode({
      nodeId: c,
      alwaysPan: !0
    }), {
      alwaysNavToSimilarViewport: !0
    }), t("show_node_tooltip"));
  }
  return (useEffect(() => {
    y({
      fn: complete
    });
  }, [complete, y]), _$$E(uniqueId, ["page_name_changed_with_rfd_indicator"], e => {
    if (!e.properties.pageId) {
      $$A("no_page_id");
      return;
    }
    if (O) {
      $$A("already_seen_upsell_this_session");
      return;
    }
    let t = getSingletonSceneGraph().get(e.properties.pageId);
    if (!t) {
      $$A("page_not_found");
      return;
    }
    let i = function (e) {
      let t = null;
      let i = 0;
      let r = new Set();
      (function e(n) {
        if (!r.has(n.guid)) {
          if ("FRAME" === n.type && n.childCount > i && n.canHaveStatus) {
            let e = function e(t) {
              let i = 0;
              if (t.childCount > 0) for (let r of t.childrenNodes) i += 1 + e(r);
              r.add(t.guid);
              return i;
            }(n);
            e > i && (i = e, t = n);
          }
          n.childCount > 0 && n.childrenNodes?.forEach(e);
        }
      })(e);
      return t;
    }(t);
    if (!i) {
      $$A("no_upsell_frame_for_page");
      return;
    }
    d(e.properties.pageId);
    _(i.guid);
    show({
      onShow: () => L(!0)
    });
  }), isShowing) ? "show_page_tooltip" === e ? jsxs(NJ, {
    arrowPosition: F_.LEFT_TITLE,
    backgroundColor: "var(--color-bg)",
    className: R3,
    closeButtonClassName: _$$b,
    dismissModal: complete,
    leftOffset: 12,
    noAnimation: !0,
    shouldNotWrapInParagraphTag: !0,
    targetKey: $$k0,
    width: 240,
    children: [jsx("div", {
      className: Rg,
      children: getI18nString("dev_handoff.rfd_signals_upsell.title")
    }), jsxs("div", {
      className: O6,
      children: [jsx("div", {
        className: _$$j,
        children: jsx(GV, {
          src: I,
          width: 240
        })
      }), jsx("div", {
        className: zu,
        children: getI18nString("dev_handoff.rfd_signals_upsell.page_upsell.description")
      })]
    }), jsx("div", {
      className: JP,
      children: jsx(setupThemeContext, {
        brand: "dev-handoff",
        children: jsx($z, {
          trackingProperties: {
            trackingDescriptor: UpgradeAction.SHOW_ME_HOW
          },
          variant: "primary",
          onClick: U,
          children: getI18nString("dev_handoff.rfd_signals_upsell.page_upsell.show_me_how")
        })
      })
    })]
  }) : c ? jsx(N, {
    nodeToHighlight: c,
    complete
  }) : null : null;
}
export const $ = $$k0;
export const A = $$O1;