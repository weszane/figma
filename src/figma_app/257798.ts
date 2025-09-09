import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useEffect, useState, useCallback } from "react";
import { X as _$$X } from "../figma_app/668792";
import { d as _$$d } from "../figma_app/577559";
import { s as _$$s } from "../figma_app/481199";
import { K as _$$K } from "../905/107582";
import { E as _$$E } from "../905/737393";
import { F as _$$F } from "../905/544329";
import { j as _$$j } from "../figma_app/63338";
import { V as _$$V } from "../figma_app/525321";
import { H as _$$H } from "../figma_app/580834";
import { Q as _$$Q } from "../905/384324";
import { O as _$$O } from "../905/410575";
import { u as _$$u } from "../905/486140";
import { generateRecordingKey } from "../figma_app/878298";
import { s as _$$s2 } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { formatI18nMessage } from "../905/482208";
import { fullscreenValue } from "../figma_app/455680";
import { Zr, vm, yU } from "../figma_app/678782";
import { Xo } from "../figma_app/482495";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { ei as _$$ei } from "../figma_app/795674";
import { c as _$$c } from "../905/370443";
import { Em } from "../figma_app/976749";
import { e } from "../905/621515";
import { UK } from "../figma_app/740163";
import { selectCurrentUser } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { getObservableOrFallback } from "../figma_app/84367";
import { N as _$$N } from "../figma_app/268271";
import { pN } from "../figma_app/433401";
import { rq } from "../905/425180";
import { V as _$$V2 } from "../905/460261";
import { F_ } from "../905/858282";
import { Tuf } from "../figma_app/6204";
import { oW, Rg, gf } from "../figma_app/201694";
import { g as _$$g } from "../figma_app/594353";
import { fn } from "../figma_app/811257";
import { t as _$$t } from "../figma_app/480016";
import { bL, c$ } from "../905/575478";
import { Ay } from "@stylexjs/stylex";
let B = () => {
  let e = _$$V2();
  let t = Em();
  let r = "1" === localStorage.getItem("property-labels-visible");
  let n = _$$f(pN);
  let a = _$$f("did_sign_up_as_ui3_user");
  let s = selectCurrentUser();
  let o = useMemo(() => {
    if (!s) return 0;
    let e = a ? new Date(s.created_at) : n ? n.createdAt : new Date();
    return (Date.now() - e.getTime()) / _$$ei;
  }, []);
  return !!e && !!s && !r && !!t && o >= 7;
};
function G() {
  let {
    show,
    isShowing,
    complete
  } = e({
    overlay: Tuf,
    priority: _$$N.SECONDARY_MODAL
  });
  let a = B();
  useEffect(() => {
    show({
      canShow: () => a
    });
  }, [a, show]);
  let s = getObservableOrFallback(UK().showPropertyLabels);
  return jsx(rq, {
    arrowPosition: F_.RIGHT_BODY,
    description: jsx("span", {
      className: _$$s2.preWrap.$,
      children: renderI18nText("ui3_labels_curator.description", {
        view: jsx("strong", {
          children: renderI18nText("fullscreen_actions.view-menu")
        })
      })
    }),
    isShowing,
    onClose: () => complete(),
    primaryCta: {
      type: "button",
      label: renderI18nText("general.got_it"),
      onClick: () => complete(),
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    secondaryCta: {
      type: "button",
      onClick: () => {
        fullscreenValue.triggerAction("toggle-show-property-labels", {
          source: "show-labels-curator"
        });
      },
      label: s ? renderI18nText("ui3_labels_curator.secondary_cta.turn_off") : renderI18nText("ui3_labels_curator.secondary_cta.turn_on"),
      ctaTrackingDescriptor: _$$c.CLOSE
    },
    shouldDisableAnimation: !0,
    shouldRepositionOnTargetLost: !1,
    targetKey: "ui3_labels_onboarding",
    testId: "ui3_labels_onboarding_test_id",
    title: renderI18nText("ui3_labels_curator.title"),
    trackingContextName: "UI3LabelsEducation"
  });
}
function $(e) {
  let {
    controls,
    value,
    onChange,
    recordingKey
  } = e;
  return jsx(bL, {
    legend: null,
    onChange,
    value,
    recordingKey,
    children: jsx("div", {
      className: "x78zum5 xh8yej3 x12mrbbr",
      children: controls.map((e, i) => {
        let {
          children,
          ...s
        } = e;
        return jsx(c$, {
          ...s,
          ...Ay.props(X.option, s.readonly && X.disabled, value === s.value && X.selectedOption, 0 === i && X.firstChild, i === controls.length - 1 && X.lastChild),
          children: jsx("span", {
            children
          })
        }, i);
      })
    })
  });
}
let X = {
  firstChild: {
    borderTopLeftRadius: "x1hs5g0s",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomLeftRadius: "xgtq5j1",
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    $$css: !0
  },
  lastChild: {
    borderTopRightRadius: "xbjeahn",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomRightRadius: "x1w61mk2",
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    $$css: !0
  },
  selectedOption: {
    "--color-icon": "x19irszi",
    "--color-icon-secondary": "xe6pbpt",
    backgroundColor: "xnj5wec",
    ":hover_backgroundColor": "x1ycfkyd",
    $$css: !0
  },
  option: {
    flex: "x98rzlu",
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    display: "x78zum5",
    justifyContent: "xl56j7k",
    backgroundColor: "x1yrfp1h",
    ":focus-within_outlineColor": "x71wdqq",
    ":focus-within_outlineStyle": "x14xc8xn",
    ":focus-within_outlineWidth": "xfqya6k",
    ":focus-within_outlineOffset": "x1aqcdw",
    ":hover_backgroundColor": "x19bvbp2",
    $$css: !0
  },
  disabled: {
    "--color-icon": "x19pgg6y",
    "--color-icon-secondary": "x1wgnmda",
    "--color-icon-tertiary": "xpaqg7k",
    ":hover_backgroundColor": "xqz9e21",
    $$css: !0
  }
};
function q(e) {
  let t = Zr("align-left");
  let r = Zr("align-horizontal-center");
  let a = Zr("align-right");
  let s = Zr("align-top");
  let o = Zr("align-vertical-center");
  let l = Zr("align-bottom");
  let [d, c] = useState(!1);
  let u = vm(oW);
  let p = d && e.isHoveringOverPanel && u;
  let _ = useCallback(e => {
    c(e.altKey || e.shiftKey);
  }, []);
  useEffect(() => {
    function e() {
      c(!1);
    }
    document.addEventListener("keydown", _);
    document.addEventListener("keyup", _);
    window.addEventListener("blur", e);
    return () => {
      document.removeEventListener("keydown", _);
      document.removeEventListener("keyup", _);
      window.removeEventListener("blur", e);
    };
  }, [_]);
  let h = ee({
    renderGroupAlignButtons: p,
    alignLeftEnabled: t,
    alignHorCenterEnabled: r,
    alignRightEnabled: a
  });
  let m = et({
    renderGroupAlignButtons: p,
    alignTopEnabled: s,
    alignVerCenterEnabled: o,
    alignBottomEnabled: l
  });
  let g = Fk(e => {
    let t = e.getDirectlySelectedNodes();
    if (t.some(e => !e.isGridChild || "ABSOLUTE" === e.stackPositioning)) return null;
    let r = e => {
      let r = new Set();
      for (let n of t) {
        let t;
        if ("gridChildHorizontalAlign" === e) {
          let r = n.parentNode ? n.parentNode.stackPrimaryAlignItems : "MIN";
          t = ea("AUTO" !== n[e] ? n[e] : r);
        } else {
          let r = n.parentNode ? n.parentNode.stackCounterAlignItems : "MIN";
          t = es("AUTO" !== n[e] ? n[e] : r);
        }
        if (t && r.add(t), r.size > 1) return;
      }
      return r.values()?.next()?.value;
    };
    let n = r("gridChildVerticalAlign");
    return {
      horizontal: r("gridChildHorizontalAlign"),
      vertical: n
    };
  });
  let b = !!g;
  let T = b ? jsx(er, {
    options: h,
    appliedAlignment: g?.horizontal,
    recordingKey: generateRecordingKey(e.recordingKey, "alignButton", "horizontal")
  }) : jsx(Q, {
    options: h,
    recordingKey: generateRecordingKey(e.recordingKey, "alignButton")
  });
  let S = b ? jsx(er, {
    options: m,
    appliedAlignment: g?.vertical,
    recordingKey: generateRecordingKey(e.recordingKey, "alignButton", "vertical")
  }) : jsx(Q, {
    recordingKey: generateRecordingKey(e.recordingKey, "alignButton"),
    options: m
  });
  let A = yU(Rg);
  let x = jsx(gf, {
    actions: Rg,
    recordingKey: e.recordingKey
  });
  if (e.inSlidesPanel) return jsxs("div", {
    className: _$$s2.flex.p8.gap8.itemsCenter.$,
    children: [jsx("div", {
      className: _$$s2.flexGrow1.$,
      children: T
    }), jsx("div", {
      className: _$$s2.flexGrow1.$,
      children: S
    }), jsx(gf, {
      actions: Rg,
      disabled: !A,
      recordingKey: e.recordingKey
    })]
  });
  let N = jsx("div", {
    "data-onboarding-key": "ui3_labels_onboarding",
    className: _$$s2.inline.$,
    children: renderI18nText("fullscreen.properties_panel.section_position.label_alignment")
  });
  return jsxs(Fragment, {
    children: [e.renderRow(N, T, S, A ? x : null), jsx(G, {})]
  });
}
export function $$J0(e) {
  return jsx(q, {
    ...e,
    renderRow: (e, t, r, i) => jsx(fn, {
      dataTestId: "alignPanel",
      leftLabel: e,
      leftInput: t,
      rightLabel: null,
      rightInput: r,
      icon: i
    })
  });
}
export function $$Z1(e) {
  return jsx(q, {
    ...e,
    renderRow: (e, t, r) => jsx(_$$g, {
      leftLabel: null,
      leftInput: t,
      rightLabel: null,
      rightInput: r
    })
  });
}
function Q({
  recordingKey: e,
  options: t
}) {
  let r = ei();
  let a = useMemo(() => t.map(e => r(e.action, e.icon, e.isEnabled)), [t, r]);
  return jsx(_$$t, {
    controls: a,
    recordingKey: e
  });
}
let ee = ({
  renderGroupAlignButtons: e,
  alignLeftEnabled: t,
  alignHorCenterEnabled: r,
  alignRightEnabled: i
}) => e ? [{
  action: "align-left-as-group",
  icon: jsx(_$$X, {}),
  isEnabled: !0
}, {
  action: "align-horizontal-center-as-group",
  icon: jsx(_$$d, {}),
  isEnabled: !0
}, {
  action: "align-right-as-group",
  icon: jsx(_$$s, {}),
  isEnabled: !0
}] : [{
  action: "align-left",
  icon: jsx(_$$K, {}),
  isEnabled: t
}, {
  action: "align-horizontal-center",
  icon: jsx(_$$E, {}),
  isEnabled: r
}, {
  action: "align-right",
  icon: jsx(_$$F, {}),
  isEnabled: i
}];
let et = ({
  renderGroupAlignButtons: e,
  alignTopEnabled: t,
  alignVerCenterEnabled: r,
  alignBottomEnabled: i
}) => e ? [{
  action: "align-top-as-group",
  icon: jsx(_$$j, {}),
  isEnabled: !0
}, {
  action: "align-vertical-center-as-group",
  icon: jsx(_$$V, {}),
  isEnabled: !0
}, {
  action: "align-bottom-as-group",
  icon: jsx(_$$H, {}),
  isEnabled: !0
}] : [{
  action: "align-top",
  icon: jsx(_$$Q, {}),
  isEnabled: t
}, {
  action: "align-vertical-center",
  icon: jsx(_$$O, {}),
  isEnabled: r
}, {
  action: "align-bottom",
  icon: jsx(_$$u, {}),
  isEnabled: i
}];
function er({
  appliedAlignment: e,
  recordingKey: t,
  options: r
}) {
  let a = en();
  let s = useMemo(() => r.map(e => a(e.action, e.icon, e.isEnabled)), [r, a]);
  return jsx($, {
    controls: s,
    recordingKey: t,
    value: e,
    onChange: e => {
      fullscreenValue.triggerActionInUserEditScope(e);
    }
  });
}
let en = () => {
  let e = Xo();
  return useCallback((t, r, n) => ({
    "aria-label": formatI18nMessage(t),
    "data-tooltip": t,
    "data-tooltip-type": Ib.LOOKUP,
    children: r,
    readonly: !n || void 0,
    value: t,
    htmlAttributes: {
      onMouseDown: t => {
        e?.id.startsWith("paint") && t.stopPropagation();
      }
    }
  }), [e]);
};
let ei = () => {
  let e = Xo();
  return useCallback((t, r, n) => ({
    "aria-label": formatI18nMessage(t),
    "data-tooltip": t,
    "data-tooltip-type": Ib.LOOKUP,
    children: r,
    disabled: !n,
    onMouseDown: t => {
      e?.id.startsWith("paint") && t.stopPropagation();
    },
    onClick: () => {
      fullscreenValue.triggerActionInUserEditScope(t);
    },
    recordingKey: t
  }), [e]);
};
let ea = e => {
  switch (e) {
    case "CENTER":
      return "align-horizontal-center";
    case "MAX":
      return "align-right";
    case "SPACE_EVENLY":
    case "SPACE_BETWEEN":
    case "MIN":
      return "align-left";
    default:
      return null;
  }
};
let es = e => {
  switch (e) {
    case "CENTER":
      return "align-vertical-center";
    case "MAX":
      return "align-bottom";
    case "MIN":
      return "align-top";
    default:
      return null;
  }
};
export const aq = $$J0;
export const wF = $$Z1;