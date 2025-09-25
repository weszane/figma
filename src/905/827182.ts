import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { debounce } from "../905/915765";
import { deepEqual } from "../905/382883";
import { c$, bL, l9, mc, wv } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { IconButton } from "../905/443068";
import { W } from "../905/63398";
import { setupThemeContext } from "../905/614223";
import { AppStateTsApi, Thumbnail, Fullscreen, Command, DistributionType } from "../figma_app/763686";
import { isShapeType } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import f from "classnames";
import { useDebounce } from 'use-debounce';
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { WAFImage } from "../905/675859";
import { Qp } from "../figma_app/162641";
import { getI18nString, renderI18nText } from "../905/303541";
import { getVisibleTheme } from "../905/640017";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { isInvalidValue, isValidValue } from "../905/216495";
import { useSelectionProperty, useSelectionPropertyValue } from "../905/275640";
import { getObservableValue } from "../figma_app/84367";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { il, X7 } from "../figma_app/789050";
import { g as _$$g } from "../905/412697";
import { Kt, $A } from "../figma_app/156285";
var _ = f;
let L = "stroke_width_profile_control--darkBackground--tHuX5";
let F = "stroke_width_profile_control--png--fOi9L";
function M(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0; i < e.length; i++) if (e[i].position !== t[i].position || e[i].ascent !== t[i].ascent || e[i].descent !== t[i].descent) return !1;
  return !0;
}
function j(e) {
  let t = e ?? [];
  if (isInvalidValue(t)) return "MIXED";
  for (let [e, i] of Object.entries(U)) if (M(t, i.controlPoints) || M(t, z(i.controlPoints))) return e;
  return "CUSTOM";
}
let U = {
  UNIFORM: {
    controlPoints: [],
    classNames: ["stroke_width_profile_control--uniform--T4Q5k"]
  },
  WEDGE: {
    controlPoints: [{
      position: 0,
      ascent: .5,
      descent: .5
    }, {
      position: 1,
      ascent: 0,
      descent: 0
    }],
    classNames: ["stroke_width_profile_control--wedge--D5rvV", F]
  },
  TAPER: {
    controlPoints: [{
      position: 0,
      ascent: .5,
      descent: .5
    }, {
      position: 1,
      ascent: .1875,
      descent: .1875
    }],
    classNames: ["stroke_width_profile_control--taper--gjaXT", F]
  },
  QUARTER_TAPER: {
    controlPoints: [{
      position: 0,
      ascent: .1875,
      descent: .1875
    }, {
      position: .25,
      ascent: .5,
      descent: .5
    }, {
      position: 1,
      ascent: .1875,
      descent: .1875
    }],
    classNames: ["stroke_width_profile_control--quarterTaper--IDc7x", F]
  },
  EYE: {
    controlPoints: [{
      position: 0,
      ascent: 0,
      descent: 0
    }, {
      position: .5,
      ascent: .5,
      descent: .5
    }, {
      position: 1,
      ascent: 0,
      descent: 0
    }],
    classNames: ["stroke_width_profile_control--eye--uY6nh", F]
  },
  LENS: {
    controlPoints: [{
      position: 0,
      ascent: .1875,
      descent: .1875
    }, {
      position: .5,
      ascent: .5,
      descent: .5
    }, {
      position: 1,
      ascent: .1875,
      descent: .1875
    }],
    classNames: ["stroke_width_profile_control--lens--Bo7KM", F]
  }
};
function B(e) {
  return jsx("div", {
    className: _()("stroke_width_profile_control--vwp--4nVN-", ...e.profileClassNames, {
      "stroke_width_profile_control--round--jDNUt": e.roundEndcaps,
      [L]: e.darkBackground,
      "stroke_width_profile_control--disabled--FdduE": e.disabled
    })
  });
}
function V(e) {
  return jsx("span", {
    className: _()("stroke_width_profile_control--customProfileContainer--r2oFG", F, {
      [L]: e.darkBackground
    }),
    children: jsx(WAFImage, {
      src: e.imageUrl,
      alt: getI18nString("fullscreen.properties_panel.width_profile.custom.alt_label"),
      className: "stroke_width_profile_control--customProfile--M0j9K"
    })
  });
}
export function $$G1(e) {
  let t = !il();
  let i = X7();
  let s = Kt();
  let [d, c] = useSelectionProperty("variableWidthPoints");
  let [f] = useDebounce(d, 200);
  let _ = j(d);
  let v = useSelectionPropertyValue("strokeCap");
  let L = "dark" === getVisibleTheme();
  let F = getObservableValue(AppStateTsApi?.widthProfilePreviewState().widthProfilePreviewNodeId, void 0);
  let [M, G] = useState();
  let z = useDeepEqualSceneValue(e => {
    let t = e.getDirectlySelectedNodes();
    return t && t.every(e => isShapeType(e.type));
  });
  useEffect(() => {
    if (getFeatureFlags().ce_il_vws_custom_preview && "CUSTOM" === j(f)) {
      if (f && isValidValue(f)) {
        let e = f.filter(e => void 0 !== e.ascent && void 0 !== e.descent && void 0 !== e.position).map(e => ({
          ...e,
          segmentId: 0
        }));
        AppStateTsApi?.widthProfilePreviewState().updateCustomWidthProfilePreviewNode(e);
      }
      G(function (e) {
        if (!Thumbnail || !e) return;
        let t = getSingletonSceneGraph().get(e);
        if (!t) return;
        let i = 10 / t.size.y;
        return $A({
          guid: e,
          upSample: 4 * i,
          sizeX: t.size.x,
          sizeY: t.size.y
        });
      }(F));
    }
  }, [F, f]);
  let H = useMemo(() => Object.entries(U).map(([e, i]) => jsx(c$, {
    value: e,
    children: jsx(setupThemeContext, {
      mode: "dark",
      children: jsx(B, {
        roundEndcaps: "ROUND" === v,
        profileClassNames: [...i.classNames, "stroke_width_profile_control--option--az1AW"],
        darkBackground: !0,
        disabled: t
      })
    })
  }, e)), [v, t]);
  let {
    valueBeforePreview,
    updatePreview,
    onSubmit,
    clearPreview
  } = _$$g({
    id: "width-profile-dropdown",
    property: _,
    onChange: (t, i = yesNoTrackingEnum.YES) => {
      if ("EDIT" === t) {
        getFeatureFlags().ce_il_vws_custom_preview && z && (Fullscreen?.triggerActionEnumInUserEditScope(Command.REQUEST_EDIT_MODE_VIA_TOOLBAR, {}), Fullscreen?.triggerActionEnumInUserEditScope(Command.SET_TOOL_VAR_WIDTH_POINT, {}));
        return;
      }
      if (!t || "CUSTOM" === t || "MIXED" === t) return;
      let n = mapEditorTypeToProductType(debugState.getState().selectedView.editorType);
      let r = U[t];
      (i === yesNoTrackingEnum.YES || i === yesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT) && analyticsEventManager.trackDefinedEvent("illustration.web_variable_width_stroke_profile_changed", {
        source: e.source,
        controlPointCount: r.controlPoints.length,
        productType: n,
        profileName: t,
        brushType: s === DistributionType.SCATTER ? "scatter" : s === DistributionType.STRETCH ? "stretch" : "none"
      });
      r.controlPoints && c(r.controlPoints, i);
    },
    enablePreview: "MIXED" !== _ && "CUSTOM" !== _
  });
  let $ = isInvalidValue(valueBeforePreview) ? "MIXED" : valueBeforePreview;
  let Z = "MIXED" === _ || "MIXED" === $;
  let X = "CUSTOM" === _ || "CUSTOM" === $;
  let Q = $ ?? _;
  let J = debounce(e => {
    if ("MIXED" !== e && "CUSTOM" !== e && "EDIT" !== e) {
      if (!e && $) {
        updatePreview($);
        return;
      }
      updatePreview(e);
    }
  }, 50);
  let ee = useMemo(() => Z ? getI18nString("fullscreen.mixed") : X ? getFeatureFlags().ce_il_vws_custom_preview ? M ? jsx(V, {
    imageUrl: M,
    darkBackground: L
  }) : jsx(Qp, {}) : getI18nString("fullscreen.properties_panel.width_profile.custom") : jsx(B, {
    roundEndcaps: "ROUND" === v,
    profileClassNames: U[_].classNames,
    darkBackground: L,
    disabled: t
  }), [M, t, X, L, Z, v, _]);
  return jsxs(bL, {
    value: Q,
    onChange: onSubmit,
    recordingKey: e.recordingKey,
    onSelectionChange: J,
    onOpenChange: e => {
      valueBeforePreview && !e && clearPreview();
    },
    children: [jsx(l9, {
      disabled: t,
      width: "fill",
      label: jsx(HiddenLabel, {
        children: renderI18nText("fullscreen.properties_panel.width_profile.label")
      }),
      htmlAttributes: {
        "data-tooltip": t ? i : void 0,
        "data-tooltip-type": t ? KindEnum.TEXT : void 0
      },
      children: ee
    }), jsxs(mc, {
      children: [Z && jsx(Fragment, {
        children: jsx(c$, {
          value: "MIXED",
          disabled: !0,
          children: renderI18nText("fullscreen.mixed")
        }, "MIXED")
      }), ...H, X && jsxs(Fragment, {
        children: [jsx(wv, {}), jsx(c$, {
          value: "CUSTOM",
          children: getFeatureFlags().ce_il_vws_custom_preview ? M ? jsx(V, {
            imageUrl: M,
            darkBackground: !0
          }) : jsx(Qp, {}) : renderI18nText("fullscreen.properties_panel.width_profile.custom")
        }, "CUSTOM")]
      }), getFeatureFlags().ce_il_vws_custom_preview && z && jsxs(Fragment, {
        children: [jsx(wv, {}), jsx(c$, {
          value: "EDIT",
          children: renderI18nText("fullscreen.properties_panel.width_profile.edit")
        }, "EDIT")]
      })]
    })]
  });
}
function z(e) {
  return e.map(e => ({
    ...e,
    position: 1 - (e.position ?? 0)
  })).reverse();
}
export function $$H0(e) {
  let t = !il();
  let [i, r] = useSelectionProperty("variableWidthPoints");
  return jsx(IconButton, {
    recordingKey: e.recordingKey,
    "aria-label": getI18nString("fullscreen.properties_panel.width_profile.flip_horizonal"),
    disabled: t || isInvalidValue(i) || !i || function (e) {
      let t = z(e);
      return deepEqual(e, t);
    }(i),
    onClick: () => {
      !isInvalidValue(i) && i && r(z(i));
    },
    children: jsx(W, {})
  });
}
export const iI = $$H0;
export const D7 = $$G1;