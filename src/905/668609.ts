import { t_ } from "../905/75293";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, memo, useContext, useCallback, useMemo } from "react";
import { Q as _$$Q } from "../figma_app/104130";
import { MenuItemComp, setupMenu, MenuRootComp, MenuContainerComp } from "../figma_app/860955";
import { O as _$$O } from "../905/969533";
import { getI18nString } from "../905/303541";
import { Bf } from "../905/937445";
import { vG, IK } from "../905/210945";
import { PopupButtonPrimitive } from "../905/65923";
import { g as _$$g } from "../905/125190";
import h from "classnames";
import { H as _$$H } from "../905/762413";
import { z as _$$z } from "../905/626016";
import { L as _$$L } from "../905/858162";
import { s as _$$s } from "../905/551945";
import { k as _$$k } from "../905/376839";
import { getFilteredFeatureFlags } from "../905/717445";
import { E as _$$E } from "../905/375716";
import { Y as _$$Y } from "../905/762765";
import { m as _$$m2 } from "../905/148147";
import { t as _$$t2 } from "../905/398894";
import { DesignGraphElements } from "../figma_app/763686";
import { defaultSessionLocalID } from "../905/871411";
import { useAtomWithSubscription } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import { useSprigWithSampling } from "../905/99656";
import { rM } from "../figma_app/241541";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue, isValidValue } from "../905/216495";
import { useUpdateSelectionProperty, useSelectionProperty } from "../905/275640";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { u as _$$u2 } from "../figma_app/110635";
import { T6 } from "../figma_app/156285";
import { lF, Y4 } from "../figma_app/384713";
import { CL } from "../figma_app/722913";
var n = {};
require.d(n, {
  checkPlaceholder: () => x,
  dialogTriggerButton: () => f,
  entrypointMenuDialogTriggerButton: () => v,
  ghost: () => _,
  icon: () => b,
  lg: () => y,
  optionContainer: () => I,
  optionContainerWithoutIcon: () => E,
  secondary: () => A
});
var g = h;
let f = "entrypoint_menu--dialogTriggerButton--V93TX fpl_fork_dialog_trigger_button--dialogTriggerButton--9Vzp5 fpl_fork_dialog_trigger_button--baseIconButton--pUMGT";
let _ = "entrypoint_menu--ghost--KnvQ2 fpl_fork_dialog_trigger_button--ghost--uSVyp";
let A = "entrypoint_menu--secondary--FhNgV fpl_fork_dialog_trigger_button--secondary--TJuD-";
let y = "entrypoint_menu--lg--gJNkj fpl_fork_dialog_trigger_button--lg--HKU6O";
let b = "entrypoint_menu--icon--Dgqif fpl_fork_dialog_trigger_button--icon--WZJCn fpl_fork_dialog_trigger_button--icon--WZJCn";
let v = "entrypoint_menu--entrypointMenuDialogTriggerButton--uzZcS";
let I = "entrypoint_menu--optionContainer--iy2Fl";
let E = "entrypoint_menu--optionContainerWithoutIcon--GzmW3";
let x = "entrypoint_menu--checkPlaceholder--q5HJT";
function S({
  children: e,
  hasIcon: t
}) {
  return jsx("div", {
    className: g()(I, t ? void 0 : E),
    children: e
  });
}
function w() {
  return jsx("div", {
    className: x
  });
}
function C({
  icon: e,
  getLabel: t,
  callback: i,
  isDisabled: n,
  isSelected: a,
  recordingKey: s
}) {
  return jsx(MenuItemComp, {
    onClick: i,
    disabled: n,
    recordingKey: s,
    children: jsxs(S, {
      hasIcon: !!e,
      children: [a && jsx(_$$g, {}), !1 === a && jsx(w, {}), e, t()]
    })
  }, t());
}
let T = {
  md: void 0,
  lg: y
};
let k = forwardRef(({
  children: e,
  size: t = "md",
  variant: i = "ghost",
  htmlAttributes: a,
  ...s
}, o) => jsx(PopupButtonPrimitive, {
  ...s,
  ref: o,
  htmlAttributes: {
    ...a,
    "data-tooltip": a?.["data-tooltip"] ?? s["aria-label"],
    "data-tooltip-type": a?.["data-tooltip-type"] ?? "text"
  },
  "aria-haspopup": "aria-haspopup" in s ? s["aria-haspopup"] : "dialog",
  className: g()(f, n[i], T[t], v),
  children: jsx("span", {
    className: b,
    "aria-hidden": !0,
    children: e
  })
}));
k.displayName = "EntrypointDialogTriggerButton";
let R = {
  DROP_SHADOW: {
    icon: vG(IK("DROP_SHADOW")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.drop_shadow")
  },
  INNER_SHADOW: {
    icon: vG(IK("INNER_SHADOW")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.inner_shadow")
  },
  FOREGROUND_BLUR: {
    icon: vG(IK("FOREGROUND_BLUR")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.layer_blur")
  },
  BACKGROUND_BLUR: {
    icon: vG(IK("BACKGROUND_BLUR")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.background_blur")
  },
  GRAIN: {
    icon: vG(IK("GRAIN")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.texture")
  },
  NOISE: {
    icon: vG(IK("NOISE")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.noise")
  },
  GLASS: {
    icon: vG(IK("GLASS")),
    getLabel: () => getI18nString("fullscreen.properties_panel.effects.glass")
  },
  REPEAT: null,
  SYMMETRY: null
};
let N = {
  PNG: {
    icon: null,
    getLabel: () => "PNG"
  },
  JPEG: {
    icon: null,
    getLabel: () => "JPEG"
  },
  SVG: {
    icon: null,
    getLabel: () => "SVG"
  },
  PDF: {
    icon: null,
    getLabel: () => "PDF"
  }
};
let j = {
  SOLID: {
    icon: jsx(_$$H, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.solid")
  },
  GRADIENT_LINEAR: {
    icon: jsx(_$$z, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.gradient")
  },
  PATTERN: {
    icon: jsx(_$$L, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.pattern"),
    isEnabled: () => getFilteredFeatureFlags().ce_il_pattern ?? !1
  },
  IMAGE: {
    icon: jsx(_$$s, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.image")
  },
  VIDEO: {
    icon: jsx(_$$k, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.video")
  }
};
function U() {
  return !0;
}
let z = new t_();
let H = {
  GRID: {
    icon: jsx(_$$E, {})
  },
  Y: {
    icon: jsx(_$$Y, {})
  },
  X: {
    icon: jsx(_$$m2, {})
  }
};
let K = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M6 10a2 2 0 0 1 2 2 1 1 0 1 0 2 0 2 2 0 1 1 4 0 1 1 0 1 0 2 0 2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H18a1 1 0 0 0-1 1 2 2 0 1 1-4 0 1 1 0 1 0-2 0 2 2 0 1 1-4 0 1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1z"
    })
  });
});
let Y = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M9.664 9.504c1.15-.21 2.31.071 3.02.35.786.309 1.14.55 1.514.735.365.193.95.298 1.65.204a6.7 6.7 0 0 0 1.635-.44 6 6 0 0 0 .26-.107l.265-.124.12-.06a.6.6 0 0 1 .39-.041.57.57 0 0 1 .331.183c.08.095.122.22.126.358a.62.62 0 0 1-.104.377l-.087.113-.38.495-.312.388a10.4 10.4 0 0 1-1.058 1.136c-.694.636-1.673 1.255-2.895 1.416-1.071.15-2.092-.092-2.788-.331l-.277-.102a8 8 0 0 1-.788-.35l-.55-.282c-.37-.185-.981-.275-1.684-.177l-.375.064a7 7 0 0 0-1.156.344l-.321.13a6 6 0 0 0-.33.156l-.087.033a.6.6 0 0 1-.198.019l-.103-.014a.6.6 0 0 1-.263-.12l-.066-.064a.54.54 0 0 1-.115-.254l-.011-.1a.7.7 0 0 1 .055-.295l.046-.082q.24-.316.462-.614c.285-.366.573-.729.904-1.084l.346-.353c.627-.607 1.487-1.216 2.598-1.462zm2.654 1.28c-.61-.24-1.572-.46-2.474-.295l-.011.002c-.958.164-1.718.677-2.296 1.238l-.003.004a9 9 0 0 0-.698.758 7.4 7.4 0 0 1 1.078-.236l.312-.034c.717-.057 1.41.04 1.938.298v-.001c.488.23.62.352 1.271.603.621.24 1.59.513 2.565.375h.01l.177-.028c.879-.16 1.613-.622 2.171-1.134l.004-.004.34-.329q.214-.224.414-.46a7 7 0 0 1-1.14.244c-.836.11-1.63.004-2.22-.3v.002l-.021-.011-.004-.002v-.001c-.35-.175-.558-.312-.943-.49z"
    })
  });
});
let el = {
  Basic: {
    icon: jsx(_$$t2, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.stroke_settings.basic_stroke")
  },
  Dynamic: {
    icon: jsx(K, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.stroke_settings.dynamic_stroke")
  },
  Brush: {
    icon: jsx(Y, {}),
    getLabel: () => getI18nString("fullscreen.properties_panel.stroke_settings.brush_stroke")
  }
};
function ed(e) {
  return t => useContext(_$$Q).showEntrypointMenusInPropertyLists ? jsx(e, {
    ...t
  }) : null;
}
let $$ec0 = ed(function ({
  onAddEffect: e,
  allowedEffects: t
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let s = useCallback(t => {
    e(IK(t));
  }, [e]);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(k, {
      "aria-label": getI18nString("fullscreen.properties_panel.add"),
      ...getTriggerProps(),
      children: jsx(_$$O, {})
    }), jsx(MenuContainerComp, {
      children: Bf().map(e => {
        let i = R[e];
        if (!i) return null;
        let {
          icon,
          getLabel
        } = i;
        return C({
          icon,
          getLabel,
          callback: () => s(e),
          isDisabled: "allowed" !== t[e]
        });
      })
    })]
  });
});
let $$eu1 = ed(function ({
  addExportOfType: e
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(k, {
      "aria-label": getI18nString("fullscreen.properties_panel.add"),
      ...getTriggerProps(),
      children: jsx(_$$O, {})
    }), jsx(MenuContainerComp, {
      children: Object.keys(N).map(t => {
        let {
          icon,
          getLabel
        } = N[t];
        return C({
          icon,
          getLabel,
          callback: () => e(t)
        });
      })
    })]
  });
});
let $$ep2 = ed(function ({
  addPaintOfType: e,
  disablePatternPaints: t
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(k, {
      "aria-label": getI18nString("fullscreen.properties_panel.add"),
      ...getTriggerProps(),
      children: jsx(_$$O, {})
    }), jsx(MenuContainerComp, {
      children: Object.keys(j).map(i => {
        if (!j[i]) return null;
        let {
          icon,
          getLabel,
          isEnabled = U
        } = j[i];
        return isEnabled() ? C({
          icon,
          getLabel,
          callback: () => e(i),
          isDisabled: t && "PATTERN" === i
        }) : null;
      })
    })]
  });
});
let $$em4 = ed(function ({
  addPropertyCallback: e,
  addPaint: t,
  recordingKey: i
}) {
  let {
    Sprig
  } = useSprigWithSampling();
  let s = useAtomWithSubscription(T6);
  let {
    activeToolId,
    activateTool
  } = rM(_$$u2);
  let p = useUpdateSelectionProperty("strokeBrushGuid");
  let m = useUpdateSelectionProperty("dynamicStrokeSettings");
  let [h, g] = useSelectionProperty("variableWidthPoints");
  let [f, _] = useSelectionProperty("strokePaints");
  let [A, y] = useSelectionProperty("strokeWeight");
  let b = useUpdateSelectionProperty("strokeAlign");
  let v = useUpdateSelectionProperty("strokeCap");
  let I = useUpdateSelectionProperty("strokeJoin");
  let E = useCallback(() => {
    if (!f || isInvalidValue(f)) {
      t();
      return;
    }
    f.some(e => e.visible) || _(f.map(e => ({
      ...e,
      visible: !0
    })));
    0 === A && y(1);
  }, [t, _, f, y, A]);
  let x = CL();
  let {
    manager,
    getTriggerProps
  } = setupMenu();
  let T = useMemo(() => ({
    Basic: () => {
      E();
      e?.();
      p(defaultSessionLocalID, yesNoTrackingEnum.NO);
      m(lF, yesNoTrackingEnum.YES);
    },
    Dynamic: () => {
      if (E(), e?.(), p(defaultSessionLocalID, yesNoTrackingEnum.NO), b("CENTER", yesNoTrackingEnum.NO), I("MITER", yesNoTrackingEnum.NO), h && isValidValue(h) && h.length > 0) {
        g([], yesNoTrackingEnum.NO);
        let e = getI18nString("visual_bell.dynamic_stroke_vector_network_warning");
        fullscreenValue.showVisualBellWithUndo("dynamic-stroke-vector-network-warning", e, !1);
      }
      m(Y4, yesNoTrackingEnum.YES);
      activeToolId === DesignGraphElements.VECTOR_VAR_WIDTH_POINT && activateTool(DesignGraphElements.SELECT);
      Sprig("setAttribute", "is_assets_visual_style_user", !0);
    },
    Brush: () => {
      E();
      e?.();
      I("ROUND", yesNoTrackingEnum.NO);
      v("NONE", yesNoTrackingEnum.NO);
      b("CENTER", yesNoTrackingEnum.NO);
      m(lF, yesNoTrackingEnum.NO);
      p(s ?? defaultSessionLocalID, yesNoTrackingEnum.YES);
      Sprig("setAttribute", "is_assets_visual_style_user", !0);
    }
  }), [s, p, m, g, h, b, v, I, e, E, Sprig, activeToolId, activateTool]);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(k, {
      "aria-label": getI18nString("fullscreen.properties_panel.add"),
      ...getTriggerProps(),
      recordingKey: generateRecordingKey(i, "triggerButton"),
      children: jsx(_$$O, {})
    }), jsx(MenuContainerComp, {
      children: Object.keys(el).map(e => {
        if (!el[e]) return null;
        let {
          icon,
          getLabel
        } = el[e];
        return C({
          icon,
          getLabel,
          isSelected: x === e,
          callback: T[e],
          recordingKey: generateRecordingKey(i, "menuOption", e)
        });
      })
    })]
  });
});
let $$eh3 = ed(function ({
  addGridOfType: e
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(k, {
      "aria-label": getI18nString("fullscreen.properties_panel.add"),
      ...getTriggerProps(),
      children: jsx(_$$O, {})
    }), jsx(MenuContainerComp, {
      children: Object.keys(H).map(t => {
        let {
          icon
        } = H[t];
        return C({
          icon,
          getLabel: () => z.format(t),
          callback: () => e(t)
        });
      })
    })]
  });
});
export const IR = $$ec0;
export const n3 = $$eu1;
export const ZQ = $$ep2;
export const ZB = $$eh3;
export const UX = $$em4;