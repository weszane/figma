import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useRef, useContext, useId, useEffect } from "react";
import { flushSync } from "react-dom";
import { useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import _ from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { KeyCodes } from "../905/63728";
import { generateRecordingKey, useHandleFocusEvent, useHandleKeyboardEvent, SKIP_RECORDING } from "../figma_app/878298";
import { P as _$$P } from "../905/347284";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { ay } from "../905/879323";
import { DP } from "../905/640017";
import { A as _$$A } from "../905/639174";
import { splitAndJoinPath } from "../figma_app/80990";
import { fullscreenValue } from "../figma_app/455680";
import { valueOrFallback } from "../905/216495";
import { b as _$$b } from "../figma_app/755529";
import { Um } from "../905/848862";
import { getBasename, getDirname } from "../905/309735";
import { KindEnum } from "../905/129884";
import { useIsFullscreenSitesView } from "../905/561485";
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
  let g = useIsFullscreenSitesView() && getFeatureFlags().sites_responsive_text_styles && "TEXT" === m;
  return jsxs(AutoLayout, {
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
          recordingKey: generateRecordingKey(l, "slideTheme")
        })]
      }), _ && (s ? jsx(_$$t2, {
        recordingKey: generateRecordingKey(l, "inspectionPanel")
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
  return jsx(AutoLayout, {
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
  let [g, y] = useState((r ?? "") + (t ? getBasename(t) : ""));
  let [S, v] = useState(valueOrFallback(u, ""));
  let C = useDispatch();
  let w = e.guid;
  let L = e.styleType;
  let P = useRef(null);
  let D = useContext(zK);
  let k = useHandleFocusEvent(generateRecordingKey(p, "styleName"), "submit", () => {
    if ("" === g) return;
    let r = t ? getDirname(t) : void 0;
    let n = r ? r + "/" + g : g;
    permissionScopeHandler.user("rename-style", () => Fullscreen.renameNode(sessionLocalIDToString(w), splitAndJoinPath(n)));
    fullscreenValue.triggerAction("commit");
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
  let U = useHandleKeyboardEvent(p, "keydown", e => {
    if (e.keyCode === KeyCodes.TAB) k();else if (e.keyCode === KeyCodes.ENTER) {
      k();
      D === zM.EDIT_STYLE && "" === g || h?.();
      e.preventDefault();
      e.stopPropagation();
    } else {
      if (e.keyCode !== KeyCodes.ESCAPE) return SKIP_RECORDING;
      flushSync(() => {
        y(t ? getBasename(t) : "");
      });
      F();
      P.current?.blur();
    }
  });
  let G = () => {
    permissionScopeHandler.user("set-style-description", () => {
      let e = getSingletonSceneGraph().get(sessionLocalIDToString(w));
      e && (e.description = S);
    });
    trackEventAnalytics("Style Description Changed", {
      styleType: L,
      length: S.length,
      guid: sessionLocalIDToString(w)
    });
  };
  return jsxs(AutoLayout, {
    direction: "vertical",
    height: "hug-contents",
    children: [jsxs(AutoLayout, {
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
        "data-tooltip-type": KindEnum.TEXT,
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
        })), y(g), SKIP_RECORDING),
        onKeyDown: U,
        placeholder: $$J1(L),
        recordingKey: generateRecordingKey(p, "styleName"),
        value: g
      })]
    }), (u || !_) && jsxs(AutoLayout, {
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
        "data-tooltip-type": KindEnum.TEXT,
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
        recordingKey: generateRecordingKey(p, "styleDescription"),
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
  }, [e, c, t]), o && e && 0 !== c.length) ? jsxs(AutoLayout, {
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
    }), r ? jsx(AutoLayout, {
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
          recordingKey: generateRecordingKey(a, e)
        }, e))
      })
    })]
  }) : null;
}
export const O8 = $$Y0;
export const Qv = $$J1;
export const RO = $$q2;
export const we = $$$3;