import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useRef, useContext, useId, useEffect } from "react";
import { flushSync } from "../vendor/944059";
import { useDispatch } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { dI } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import _ from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { Uz } from "../905/63728";
import { Pt, of, v_, aH } from "../figma_app/806412";
import { P as _$$P } from "../905/347284";
import { renderI18nText, getI18nString } from "../905/303541";
import { Y } from "../905/830372";
import { ay } from "../905/879323";
import { DP } from "../905/640017";
import { A as _$$A } from "../905/639174";
import { J_ } from "../figma_app/80990";
import { Y5 } from "../figma_app/455680";
import { _W } from "../905/216495";
import { b as _$$b } from "../figma_app/755529";
import { Um } from "../905/848862";
import { kH, In } from "../905/309735";
import { Ib } from "../905/129884";
import { cJ } from "../905/561485";
import { v as _$$v } from "../figma_app/398917";
import { sO } from "../figma_app/21029";
import { TN, Dq, Dh } from "../figma_app/177697";
import { v as _$$v2 } from "../905/318279";
import { t as _$$t2 } from "../figma_app/440177";
import { zK, zM } from "../905/182453";
import { B8, tC, gc, w5 } from "../figma_app/229710";
import { JU, ks } from "../figma_app/626177";
import { l6, c$ } from "../905/794875";
import { zi } from "../905/824449";
import { dGl, wQn } from "../figma_app/27776";
import { BZ, $9, vL, mj, ig, lD, Lq, s1, Gv, gH, SI, hj, mm, Pj, _Z, ow, uO, Xm } from "../figma_app/464758";
var h = _;
let W = 2 * parsePxInt(dGl);
let K = parsePxInt(wQn);
export function $$Y0({
  selectedStyleProperties: e,
  styleName: t,
  styleNameInputPrefix: r,
  styleDescription: i,
  isRenaming: a,
  isInspectPanel: s,
  viewOnly: o,
  recordingKey: l,
  showSlideThemeField: d,
  slideThemeId: c,
  setSlideThemeId: p,
  showProperties: _ = !0,
  onEnterPressed: h,
  type: m
}) {
  let g = cJ() && getFeatureFlags().sites_responsive_text_styles && "TEXT" === m;
  return jsxs(Y, {
    direction: "vertical",
    spacing: 0,
    height: "hug-contents",
    children: [jsx($$$3, {
      selectedStyleProperties: e
    }), jsxs(_$$P, {
      maxHeight: 300,
      width: K,
      children: [jsxs("div", {
        className: BZ,
        children: [jsx(X, {
          styleName: t,
          styleNameInputPrefix: r,
          styleDescription: i,
          selectedStyleProperties: e,
          isRenaming: a,
          isInspectPanel: s,
          viewOnly: o,
          recordingKey: l,
          onEnterPressed: h
        }), d && c && p && jsx(Z, {
          themeId: c,
          setThemeId: p,
          viewOnly: !!o,
          recordingKey: Pt(l, "slideTheme")
        })]
      }), _ && (s ? jsx(_$$t2, {
        recordingKey: Pt(l, "inspectionPanel")
      }) : jsx($$q2, {
        recordingKey: l
      })), g && jsx(_$$v, {})]
    })]
  });
}
export function $$$3({
  selectedStyleProperties: e,
  snug: t
}) {
  let [r, a] = useState(!1);
  let s = e.styleType;
  let o = "TEXT" === s;
  let l = "FILL" === s;
  let d = "dark" === DP();
  let {
    containerClassName,
    previewClassName
  } = useMemo(() => ({
    containerClassName: h()({
      [$9]: o,
      [vL]: !r && l,
      [mj]: r && l,
      [ig]: !o && !l,
      [lD]: t
    }),
    previewClassName: h()({
      [Lq]: !r,
      [s1]: r,
      [Gv]: !0,
      [gH]: o,
      [SI]: o && d,
      [hj]: l,
      [mm]: t
    })
  }), [r, o, l, d, t]);
  let p = useMemo(() => {
    let e = {};
    if (e.backgroundImage = `url('${_$$A()}')`, !o) return l ? r ? e : void 0 : e;
  }, [r, o, l]);
  return jsx(Y, {
    spacing: 0,
    height: "hug-contents",
    padding: {
      left: l && !t ? W : 0,
      right: l && !t ? W : 0,
      top: l && !t ? W : 0,
      bottom: t ? 0 : W
    },
    verticalAlignItems: "start",
    children: jsx("div", {
      style: p,
      className: containerClassName,
      children: e.url ? jsx("img", {
        src: e.url,
        className: previewClassName,
        alt: "",
        onLoad: () => {
          a(!0);
        }
      }) : jsx(zi, {
        dsStyle: {
          style_type: e.styleType
        }
      })
    })
  });
}
function X({
  selectedStyleProperties: e,
  styleName: t,
  styleNameInputPrefix: r,
  styleDescription: u,
  recordingKey: p,
  viewOnly: _,
  onEnterPressed: h
}) {
  let [g, y] = useState((r ?? "") + (t ? kH(t) : ""));
  let [S, v] = useState(_W(u, ""));
  let C = useDispatch();
  let w = e.guid;
  let L = e.styleType;
  let P = useRef(null);
  let D = useContext(zK);
  let k = of(Pt(p, "styleName"), "submit", () => {
    if ("" === g) return;
    let r = t ? In(t) : void 0;
    let n = r ? r + "/" + g : g;
    l7.user("rename-style", () => glU.renameNode(dI(w), J_(n)));
    Y5.triggerAction("commit");
    F();
    trackEventAnalytics("Style Renamed", {
      styleType: e.styleType
    });
  });
  let F = () => {
    C(ay({
      isRenaming: !1
    }));
  };
  let U = v_(p, "keydown", e => {
    if (e.keyCode === Uz.TAB) k();else if (e.keyCode === Uz.ENTER) {
      k();
      D === zM.EDIT_STYLE && "" === g || h?.();
      e.preventDefault();
      e.stopPropagation();
    } else {
      if (e.keyCode !== Uz.ESCAPE) return aH;
      flushSync(() => {
        y(t ? kH(t) : "");
      });
      F();
      P.current?.blur();
    }
  });
  let G = () => {
    l7.user("set-style-description", () => {
      let e = getSingletonSceneGraph().get(dI(w));
      e && (e.description = S);
    });
    trackEventAnalytics("Style Description Changed", {
      styleType: L,
      length: S.length,
      guid: dI(w)
    });
  };
  return jsxs(Y, {
    direction: "vertical",
    height: "hug-contents",
    children: [jsxs(Y, {
      spacing: 0,
      horizontalAlignItems: "space-between",
      height: "hug-contents",
      padding: {
        horizontal: W
      },
      children: [jsx(JU, {
        htmlFor: "style-name-input",
        disabled: _,
        children: renderI18nText("design_systems.create_style.name")
      }), _ ? jsx("div", {
        className: Pj,
        "data-tooltip": t,
        "data-tooltip-type": Ib.TEXT,
        children: t
      }) : jsx(ks, {
        autoComplete: "off",
        autoFocus: !0,
        className: _Z,
        delay: 50,
        id: "style-name-input",
        innerRef: P,
        name: "styleName",
        onBlur: k,
        onChange: e => {
          y(e.target.value);
        },
        onFocus: () => (C(ay({
          isRenaming: !0
        })), y(g), aH),
        onKeyDown: U,
        placeholder: $$J1(L),
        recordingKey: Pt(p, "styleName"),
        value: g
      })]
    }), (u || !_) && jsxs(Y, {
      spacing: 16,
      horizontalAlignItems: "space-between",
      height: "hug-contents",
      padding: {
        horizontal: W
      },
      verticalAlignItems: "start",
      children: [jsx(JU, {
        htmlFor: "style-description-input",
        disabled: _,
        className: ow,
        children: getI18nString("design_systems.create_style.description")
      }), _ ? jsx("div", {
        className: Pj,
        "data-tooltip": u,
        "data-tooltip-type": Ib.TEXT,
        children: u
      }) : jsx(_$$v2, {
        autoComplete: "off",
        className: `${_Z} ${uO}`,
        delay: 50,
        id: "style-description-input",
        name: "styleDescription",
        onBlur: G,
        onChange: e => {
          v(e.target.value);
        },
        placeholder: getI18nString("design_systems.create_style.placeholder_description"),
        recordingKey: Pt(p, "styleDescription"),
        spellCheck: !1,
        submit: G,
        value: S
      })]
    })]
  });
}
export function $$q2({
  recordingKey: e
}) {
  let t = _$$b("styleType");
  return jsxs(Fragment, {
    children: ["FILL" === t && jsx(B8, {
      recordingKey: e,
      shouldUseSelectedStyleProperties: !0
    }, "fill"), "GRID" === t && jsx(tC, {
      shouldUseSelectedStyleProperties: !0,
      recordingKey: e
    }, "grids"), "TEXT" === t && jsx(gc, {
      shouldUseSelectedStyleProperties: !0,
      recordingKey: e
    }, "type"), "EFFECT" === t && jsx(w5, {
      shouldUseSelectedStyleProperties: !0,
      recordingKey: e
    }, "effects")]
  });
}
export function $$J1(e) {
  switch (e) {
    case "FILL":
      return getI18nString("design_systems.create_style.placeholder_name_color");
    case "TEXT":
      return getI18nString("design_systems.create_style.placeholder_name_text");
    case "EFFECT":
      return getI18nString("design_systems.create_style.placeholder_name_effect");
    case "GRID":
      return getI18nString("design_systems.create_style.placeholder_name_guide");
    default:
      return getI18nString("design_systems.create_style.placeholder_name_create_new_style_generic");
  }
}
function Z({
  themeId: e,
  setThemeId: t,
  viewOnly: r,
  recordingKey: a
}) {
  let o = sO();
  let l = useDispatch();
  let d = Um();
  let c = useAtomWithSubscription(TN);
  let u = useAtomWithSubscription(Dq)[e] || "";
  let _ = useId();
  return (useEffect(() => {
    !c.includes(e) && c.length > 0 && t(c[0]);
  }, [e, c, t]), o && e && 0 !== c.length) ? jsxs(Y, {
    horizontalAlignItems: "space-between",
    height: "hug-contents",
    padding: {
      left: W,
      right: W,
      top: W / 2,
      bottom: 0
    },
    children: [jsx(JU, {
      id: _,
      disabled: r,
      children: renderI18nText("slides.properties_panel.theme.panel_title")
    }), r ? jsx(Y, {
      padding: {
        vertical: parsePxInt(dGl)
      },
      width: "hug-contents",
      height: "hug-contents",
      verticalAlignItems: "start",
      children: u
    }) : jsx("div", {
      className: Xm,
      children: jsx(l6, {
        ariaLabelledBy: _,
        id: "style-properties-form-slide-theme-select",
        property: e,
        onChange: t,
        formatter: {
          format: e => Dh(e)?.name || ""
        },
        dispatch: l,
        dropdownShown: d,
        recordingKey: a,
        children: c.map(e => jsx(c$, {
          value: e,
          recordingKey: Pt(a, e)
        }, e))
      })
    })]
  }) : null;
}
export const O8 = $$Y0;
export const Qv = $$J1;
export const RO = $$q2;
export const we = $$$3;