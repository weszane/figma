import { memo } from "react";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Xc } from "../figma_app/703447";
import { xN } from "../figma_app/492908";
import { nj } from "../905/125019";
import { v as _$$v } from "../905/343590";
import { O as _$$O } from "../905/257268";
import { e } from "../905/678389";
import { E as _$$E } from "../905/465157";
import { a as _$$a } from "../905/996627";
import { n as _$$n } from "../905/317686";
import { n as _$$n2 } from "../905/451212";
import { k as _$$k } from "../figma_app/962894";
import { W as _$$W } from "../905/865092";
import { A as _$$A } from "../figma_app/180822";
import { N as _$$N } from "../905/852320";
import { Q as _$$Q } from "../figma_app/447352";
import { T as _$$T } from "../905/256551";
import { sD, _H } from "../figma_app/243058";
import { ey, nK } from "../905/859698";
import { $XN, glU } from "../figma_app/763686";
import { s as _$$s } from "../905/583953";
import { AD, Hr, dI } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { s as _$$s2 } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { dk } from "../figma_app/396372";
let b = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon-tertiary)",
      fillRule: "evenodd",
      d: "M7.43 5.434A7.99 7.99 0 0 0 4 12a7.99 7.99 0 0 0 3.43 6.567 7.003 7.003 0 0 0 0-13.133",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M20 12a8 8 0 0 1-11.5 7.196A8 8 0 0 0 13 12a8 8 0 0 0-4.5-7.196A8 8 0 0 1 20 12M4 12a7.99 7.99 0 0 1 3.43-6.567 7.003 7.003 0 0 1 0 13.134A7.99 7.99 0 0 1 4 12m-1 0a9 9 0 1 1 4.287 7.669A9 9 0 0 1 3 12",
      clipRule: "evenodd"
    })]
  });
});
export let $$R0 = () => ({
  all: {
    label: getI18nString("sites.panel.sites_issues.all_properties"),
    icon: void 0
  },
  autoLayout: {
    label: getI18nString("fullscreen.properties_panel.stack_panel.auto_layout"),
    icon: jsx(_$$v, {})
  },
  position: {
    label: getI18nString("sites.panel.position_panel.position"),
    icon: jsx(_$$O, {})
  },
  appearance: {
    label: getI18nString("fullscreen.appearance_panel.appearance"),
    icon: void 0
  },
  typography: {
    label: getI18nString("fullscreen.type_panel.typography"),
    icon: jsx(e, {})
  },
  stroke: {
    label: getI18nString("fullscreen.properties_panel.fill.stroke"),
    icon: jsx(_$$E, {})
  },
  fill: {
    label: getI18nString("fullscreen.properties_panel.fill.fill"),
    icon: jsx(_$$a, {})
  },
  effects: {
    label: getI18nString("properties_panel.effects.effects"),
    icon: jsx(_$$n, {})
  },
  accessibility: {
    label: getI18nString("sites.panel.accessibility_header"),
    icon: jsx(_$$n2, {})
  },
  interactions: {
    label: getI18nString("sites.panel.interactions_panel.interactions"),
    icon: jsx(_$$k, {})
  },
  link: {
    label: getI18nString("sites.lint.link"),
    icon: jsx(_$$W, {})
  },
  objects: {
    label: getI18nString("sites.lint.objects"),
    icon: jsx(_$$A, {})
  }
});
function L({
  text: e
}) {
  return jsx("span", {
    className: _$$s2.colorText.$,
    children: e
  });
}
let P = [{
  name: "layout/frame/rotated-child-with-stretch-constraints",
  category: "position",
  label: renderI18nText("sites.lint.layout/frame/rotated-child-with-stretch-constraints"),
  description: renderI18nText("sites.lint.layout/frame/rotated-child-with-stretch-constraints-description", {
    topBottom: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.constraints_panel.select.top_plus_bottom")
    }),
    leftRight: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.constraints_panel.select.left_plus_right")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.set-position-constraints-center"),
    action: $XN.SET_POSITION_CONSTRAINTS_CENTER
  }, {
    label: renderI18nText("sites.lint.remove-rotation"),
    action: $XN.REMOVE_ROTATION
  }],
  isViolation: e => {
    let t = "STRETCH" === e.horizontalConstraint || "STRETCH" === e.verticalConstraint;
    let r = !!e.parentNode;
    let n = e.rotation;
    return t && r && Math.abs(n) > .01;
  }
}, {
  name: "styles/autolayout-negative-item-spacing",
  label: renderI18nText("sites.lint.styles/autolayout-negative-item-spacing"),
  description: renderI18nText("sites.lint.styles/autolayout-negative-item-spacing-description", {
    gap: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.section_autoLayout.label_gap")
    })
  }),
  category: "autoLayout",
  recommendations: [],
  isViolation: e => {
    if ("FRAME" !== e.type || "NONE" === e.stackMode || e.stackSpacing >= 0) return !1;
    let t = "STRETCH" === e.stackChildAlignSelf && e.childrenNodes.every(e => e.stackChildPrimaryGrow > 0);
    let r = e.childrenNodes.some(e => e.isGroup);
    let n = e.childrenNodes.some(t => "INSTANCE" === t.type && "NONE" !== t.stackMode && (t.stackMode === e.stackMode && "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === t.stackPrimarySizing || "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === t.stackCounterSizing));
    return t || r || n || "WRAP" === e.stackWrap;
  }
}, {
  name: "layout/autolayout-only-absolutely-positioned-children",
  category: "autoLayout",
  label: renderI18nText("sites.lint.layout/resizing-position-conflict"),
  description: renderI18nText("sites.lint.layout/autolayout-only-absolutely-positioned-children-description", {
    hugContents: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.stack_panel.al.hug")
    }),
    absolute: jsx(L, {
      text: renderI18nText("sites.panel.position_panel.absolute")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-autolayout"),
    action: $XN.REMOVE_AUTOLAYOUT
  }],
  isViolation: e => "NONE" !== e.stackMode && 0 !== e.childCount && ("RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackPrimarySizing || "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackCounterSizing) && e.childrenNodes.every(e => "ABSOLUTE" === e.stackPositioning)
}, {
  name: "styles/autolayout-baseline-alignment",
  category: "autoLayout",
  label: renderI18nText("sites.lint.styles/autolayout-baseline-alignment"),
  description: renderI18nText("sites.lint.styles/autolayout-baseline-alignment-description", {
    alignTextBaseline: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.stack_panel.align_text_baseline")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-alignment"),
    action: $XN.REMOVE_BASELINE_ALIGNMENT
  }],
  isViolation: e => {
    if ("HORIZONTAL" !== e.stackMode || "BASELINE" !== e.stackCounterAlignItems) return !1;
    let t = e => e.childrenNodes.some(e => "TEXT" === e.type || "FRAME" === e.type && t(e));
    return e.childrenNodes.some(e => "FRAME" === e.type && t(e));
  }
}, {
  name: "scrolling/scrolling-enabled-with-clipped-content",
  category: "autoLayout",
  label: renderI18nText("sites.lint.scrolling/scrolling-enabled-with-clipped-content"),
  description: renderI18nText("sites.lint.scrolling/scrolling-enabled-with-clipped-content-description", {
    clipContent: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.transform_panel.clip_content")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.set-clip-content"),
    action: $XN.SET_CLIP_CONTENT
  }, {
    label: renderI18nText("sites.lint.remove-scrolling"),
    action: $XN.REMOVE_SCROLLING
  }],
  isViolation: e => !e.isBreakpointFrame && "NONE" !== e.scrollDirection && !0 === e.frameMaskDisabled
}, {
  name: "layout/autolayout/rotated-frame-with-hug-contents",
  category: "autoLayout",
  label: renderI18nText("sites.lint.layout/resizing-position-conflict"),
  description: renderI18nText("sites.lint.layout/rotated-frame-with-hug-contents-description", {
    hugContents: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.stack_panel.al.hug")
    }),
    absolute: jsx(L, {
      text: renderI18nText("sites.panel.position_panel.absolute")
    }),
    fixed: jsx(L, {
      text: renderI18nText("sites.panel.position_panel.fixed")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.SET_AUTOLAYOUT_SIZING_FIXED
  }],
  isViolation: e => {
    let t = "ABSOLUTE" === e.stackPositioning;
    let r = "STRETCH" === e.horizontalConstraint || "MIN" === e.horizontalConstraint || "MAX" === e.horizontalConstraint || "STRETCH" === e.verticalConstraint || "MIN" === e.verticalConstraint || "MAX" === e.verticalConstraint;
    let n = "NONE" !== e.stackMode;
    let i = "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackPrimarySizing || "RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" === e.stackCounterSizing;
    let a = Math.abs(e.rotation) >= .01;
    return t && r && n && i && a;
  }
}, {
  name: "layout/autolayout-child-with-fill-and-rotation",
  category: "autoLayout",
  label: renderI18nText("sites.lint.layout/autolayout-child-with-fill-and-rotation"),
  description: renderI18nText("sites.lint.layout/autolayout-child-with-fill-and-rotation-description", {
    fill: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.fill.fill")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-fill-container"),
    action: $XN.REMOVE_FILL_CONTAINER
  }, {
    label: renderI18nText("sites.lint.remove-rotation"),
    action: $XN.REMOVE_ROTATION
  }],
  isViolation: e => !!e.parentNode && "NONE" !== e.parentNode.stackMode && "ABSOLUTE" !== e.stackPositioning && ("STRETCH" === e.stackChildAlignSelf || 0 !== e.stackChildPrimaryGrow) && Math.abs(e.rotation) >= 45 && 135 >= Math.abs(e.rotation)
}, {
  name: "layout/gap/space-between-legacy",
  category: "autoLayout",
  label: renderI18nText("sites.lint.version-out-of-date"),
  description: renderI18nText("sites.lint.version-out-of-date-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.set-spacing-auto"),
    action: $XN.SET_AUTOLAYOUT_SPACING_AUTO
  }],
  isViolation: e => "NONE" !== e.stackMode && "SPACE_EVENLY" === e.stackPrimaryAlignItems
}, {
  name: "layout/autolayout-fill-and-hug",
  category: "autoLayout",
  label: renderI18nText("sites.lint.autolayout-fill-and-hug"),
  description: renderI18nText("sites.lint.autolayout-fill-and-hug-description", {
    hugContents: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.stack_panel.al.hug")
    }),
    fill: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.fill.fill")
    })
  }),
  isViolation: e => "NONE" !== e.stackMode && 0 !== e.childCount && !(("RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" !== e.stackCounterSizing || e.childrenNodes.some(e => "STRETCH" !== e.stackChildAlignSelf && e.visible)) && ("RESIZE_TO_FIT_WITH_IMPLICIT_SIZE" !== e.stackPrimarySizing || e.childrenNodes.some(e => e.visible && 0 === e.stackChildPrimaryGrow))),
  recommendations: [{
    label: renderI18nText("sites.lint.set-autolayout-sizing-fixed"),
    action: $XN.SET_AUTOLAYOUT_SIZING_FIXED
  }, {
    label: renderI18nText("sites.lint.remove-autolayout"),
    action: $XN.REMOVE_AUTOLAYOUT
  }]
}, {
  name: "blendmode/plus-darker",
  category: "appearance",
  icon: jsx(_$$N, {}),
  label: renderI18nText("sites.lint.blendmode/plus-darker"),
  description: renderI18nText("sites.lint.blendmode/plus-darker-description", {
    multiply: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.blend_mode.multiply")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.USE_BLEND_MODE_MULTIPLY
  }],
  isViolation: e => {
    let t = "LINEAR_BURN";
    return e.blendMode === t || B(e, e => e.blendMode === t);
  }
}, {
  name: "strokes/corner-smoothing",
  category: "appearance",
  icon: jsx(_$$Q, {}),
  label: renderI18nText("sites.lint.strokes/corner-smoothing"),
  description: renderI18nText("sites.lint.strokes/corner-smoothing-description", {
    cornerSmoothing: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.transform_panel.corner_smoothing")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.SET_CORNER_SMOOTHING_ZERO
  }],
  isViolation: e => !U(e) && !!e.cornerSmoothing && 0 !== e.cornerRadius
}, {
  name: "text/vertical-trim",
  category: "typography",
  label: renderI18nText("sites.lint.text/vertical-trim"),
  description: renderI18nText("sites.lint.text/vertical-trim-description", {
    capHeight: jsx(L, {
      text: renderI18nText("type_settings.leading_trim.cap_height")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-vertical-trim"),
    action: $XN.REMOVE_VERTICAL_TRIM
  }],
  isViolation: e => "TEXT" === e.type && "CAP_HEIGHT" === e.leadingTrim
}, {
  name: "text/stroke",
  category: "typography",
  label: renderI18nText("sites.lint.text/stroke"),
  description: renderI18nText("sites.lint.text/stroke-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-stroke"),
    action: $XN.REMOVE_STROKE
  }],
  isViolation: e => "TEXT" === e.type && G(e)
}, {
  name: "styles/video-fill",
  category: "fill",
  label: renderI18nText("sites.lint.styles/video"),
  description: renderI18nText("sites.lint.styles/video-fill-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-video"),
    action: $XN.REMOVE_VIDEO_FILL
  }],
  enabled: () => !getFeatureFlags().sts_video,
  isViolation: e => B(e, e => "VIDEO" === e.type)
}, {
  name: "styles/texture-pattern-fill",
  category: "fill",
  label: renderI18nText("sites.lint.styles/texture-pattern-fill"),
  description: renderI18nText("sites.lint.styles/texture-pattern-fill-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-texture"),
    action: $XN.REMOVE_TEXTURE_PATTERN_FILL
  }],
  isViolation: e => !U(e) && B(e, e => "PATTERN" === e.type)
}, {
  name: "styles/texture-noise-fill",
  category: "fill",
  label: renderI18nText("sites.lint.styles/texture-noise-fill"),
  description: renderI18nText("sites.lint.styles/texture-noise-fill-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-texture"),
    action: $XN.REMOVE_TEXTURE_NOISE_FILL
  }],
  isViolation: e => !U(e) && B(e, e => "NOISE" === e.type)
}, {
  name: "styles/strokes-blend-mode",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/strokes-blend-mode"),
  description: renderI18nText("sites.lint.styles/strokes-blend-mode-description", {
    normal: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.blend_mode.normal")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.REMOVE_STROKE_BLEND_MODE
  }],
  isViolation: e => G(e, e => e.blendMode && "NORMAL" !== e.blendMode)
}, {
  name: "styles/strokes-gradient",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/strokes-gradient"),
  description: renderI18nText("sites.lint.styles/strokes-gradient-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-gradient"),
    action: $XN.REMOVE_STROKE_GRADIENT
  }],
  isViolation: e => !U(e) && G(e, j)
}, {
  name: "styles/strokes-join-miter",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/strokes-join-miter"),
  description: renderI18nText("sites.lint.styles/strokes-join-miter-description", {
    miter: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.stroke_settings.miter")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.REMOVE_CUSTOM_JOIN
  }],
  isViolation: e => !e.isInImmutableFrame && (e.strokeGeometry?.length > 0 && "MITER" !== e.strokeJoin || 4 !== e.strokeMiterLimit)
}, {
  name: "styles/strokes-image",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/strokes-image"),
  description: renderI18nText("sites.lint.styles/strokes-image-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-image"),
    action: $XN.REMOVE_STROKE_IMAGE
  }],
  isViolation: e => !e.isInImmutableFrame && G(e, e => "IMAGE" === e.type)
}, {
  name: "styles/video-stroke",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/video"),
  description: renderI18nText("sites.lint.video-stroke-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-video"),
    action: $XN.REMOVE_VIDEO_STROKE
  }],
  isViolation: e => G(e, e => "VIDEO" === e.type)
}, {
  name: "styles/texture-dynamic-stroke",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/texture-dynamic-stroke"),
  description: renderI18nText("sites.lint.styles/texture-dynamic-stroke-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-texture-stroke"),
    action: $XN.REMOVE_TEXTURE_DYNAMIC_STROKE
  }],
  isViolation: e => {
    if (!G(e)) return !1;
    let t = 1 !== e.dynamicStrokeSettings.interval || 0 !== e.dynamicStrokeSettings.wiggle || 0 !== e.dynamicStrokeSettings.smoothen;
    return !U(e) && t;
  }
}, {
  name: "styles/texture-brush-stroke",
  category: "stroke",
  label: renderI18nText("sites.lint.styles/texture-brush-stroke"),
  description: renderI18nText("sites.lint.styles/texture-brush-stroke-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-texture-stroke"),
    action: $XN.REMOVE_TEXTURE_BRUSH_STROKE
  }],
  isViolation: e => {
    if (!G(e)) return !1;
    let t = e.strokeBrushGuid !== AD;
    return !U(e) && t;
  }
}, {
  name: "effects/frames-no-fills",
  label: renderI18nText("sites.lint.effects/frames-no-fills"),
  description: renderI18nText("sites.lint.effects/frames-no-fills-description"),
  category: "effects",
  recommendations: [{
    label: renderI18nText("sites.lint.remove-effect"),
    action: $XN.REMOVE_EFFECTS
  }],
  isViolation: e => ["FRAME", "RECTANGLE", "ROUNDED_RECTANGLE", "INSTANCE"].includes(e.type) && !B(e) && V(e)
}, {
  name: "styles/text-background-blur",
  category: "effects",
  label: renderI18nText("sites.lint.styles/text-background-blur"),
  description: renderI18nText("sites.lint.styles/text-background-blur-description", {
    backgroundBlur: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.effects.background_blur")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-blur"),
    action: $XN.REMOVE_TEXT_BACKGROUND_BLUR
  }],
  isViolation: e => "TEXT" === e.type && V(e, e => "BACKGROUND_BLUR" === e.type)
}, {
  name: "styles/text-inner-shadows",
  category: "effects",
  label: renderI18nText("sites.lint.styles/text-inner-shadows"),
  description: renderI18nText("sites.lint.styles/text-inner-shadows-description", {
    innerShadow: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.effects.inner_shadow")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-shadow"),
    action: $XN.REMOVE_TEXT_INNER_SHADOW
  }],
  isViolation: e => "TEXT" === e.type && V(e, e => "INNER_SHADOW" === e.type)
}, {
  name: "styles/shadow-blend-mode",
  label: renderI18nText("sites.lint.styles/shadow-blend-mode"),
  description: renderI18nText("sites.lint.styles/shadow-blend-mode-description", {
    normal: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.blend_mode.normal")
    })
  }),
  category: "effects",
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.SET_BLEND_MODE_NORMAL
  }],
  isViolation: e => V(e, e => ("DROP_SHADOW" === e.type || "INNER_SHADOW" === e.type) && e.blendMode && "NORMAL" !== e.blendMode)
}, {
  name: "a11y/linked-images-have-no-label",
  category: "accessibility",
  label: renderI18nText("sites.lint.a11y/linked-images-have-no-label"),
  description: renderI18nText("sites.lint.a11y/action/add-label-to-linked-images-params", {
    add_accessibility_settings: jsx(L, {
      text: renderI18nText("sites.lint.a11y/action/add-accessibility-settings")
    }),
    aria_label_option: jsx(L, {
      text: renderI18nText("sites.lint.a11y/action/aria-label-option")
    })
  }),
  recommendations: [],
  isViolation: e => !getFeatureFlags().sts_a11y_aria_attributes && "" === e.accessibleLabel && e.prototypeInteractions.some(e => e.event?.interactionType === "ON_CLICK") && !function (e) {
    let t = [e];
    for (; t.length > 0;) {
      let e = t.pop();
      if (e.characters && e.characters.length > 0 || e.accessibleLabel && e.accessibleLabel.length > 0) return !0;
      e.childrenNodes && t.push(...e.childrenNodes);
    }
    return !1;
  }(e)
}, {
  name: "interactions/close_overlay",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.action_close_overlay")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-action"),
    action: $XN.REMOVE_CLOSE_OVERLAY_ACTIONS
  }],
  isViolation: e => H(e, "CLOSE")
}, {
  name: "interactions/open_overlay",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.action_open_overlay")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-action"),
    action: $XN.REMOVE_OPEN_OVERLAY_ACTIONS
  }],
  isViolation: e => z(e, "OVERLAY")
}, {
  name: "interactions/set_variable_mode",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.action_set_variable_mode")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-action"),
    action: $XN.REMOVE_SET_VARIABLE_MODE_ACTIONS
  }],
  isViolation: e => H(e, "SET_VARIABLE_MODE")
}, {
  name: "interactions/links",
  category: "interactions",
  label: renderI18nText("sites.lint.trigger-conflict"),
  description: renderI18nText("sites.lint.interactions/links", {
    onClick: jsx(L, {
      text: renderI18nText("proto.interaction.type.on_click")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-trigger"),
    action: $XN.REMOVE_ON_CLICK_ACTIONS
  }],
  isViolation: e => ee(e)
}, {
  name: "interactions/nested",
  category: "interactions",
  label: renderI18nText("sites.lint.nested_interactions_title"),
  description: renderI18nText("sites.lint.nested_interactions_description"),
  recommendations: [],
  enabled: () => !!getFeatureFlags().sts_a11y_nested_interaction_lint,
  isViolation: (e, t) => {
    let r = et(e);
    let n = t?.ancestorIsInteractive ?? !1;
    let i = {
      ...t,
      ancestorIsInteractive: r || n
    };
    return [r && n, i];
  }
}, {
  name: "animation/smart_animate_navigate_to",
  category: "interactions",
  label: renderI18nText("sites.lint.unsupported-animation"),
  description: renderI18nText("sites.lint.animation/smart_animate_navigate_to_description", {
    smartAnimate: jsx(L, {
      text: renderI18nText("proto.transition_behavior.smart_animate")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.REMOVE_NAVIGATE_ACTIONS_WITH_SMART_ANIMATE
  }],
  isViolation: e => Q(e, "NAVIGATE", "SMART_ANIMATE")
}, {
  name: "interactions/gamepad",
  category: "interactions",
  label: renderI18nText("sites.lint.unsupported-trigger"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.interaction.type.key_gamepad")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-trigger"),
    action: $XN.REMOVE_GAMEPAD_ACTIONS
  }],
  isViolation: e => Y(e)
}, {
  name: "interactions/mouse_in",
  category: "interactions",
  label: renderI18nText("sites.lint.unsupported-trigger"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.interaction.type.mouse_enter_deprecated")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.replace-trigger"),
    action: $XN.REMOVE_MOUSE_IN_ACTIONS
  }],
  isViolation: e => K(e, "MOUSE_IN")
}, {
  name: "interactions/mouse_out",
  category: "interactions",
  label: renderI18nText("sites.lint.unsupported-trigger"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.interaction.type.mouse_leave_deprecated")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.replace-trigger"),
    action: $XN.REMOVE_MOUSE_OUT_ACTIONS
  }],
  isViolation: e => K(e, "MOUSE_OUT")
}, {
  name: "behaviors/marquee_without_autolayout",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.behaviors/marquee-without-autolayout-description", {
    marquee: jsx(L, {
      text: renderI18nText("sites.panel.interactions_panel.marquee_behavior")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.ADD_AUTOLAYOUT
  }],
  isViolation: e => "FRAME" === e.type && !e.isStack && $(e, Xc.Marquee)
}, {
  name: "behaviors/reveal_and_parallax",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.appear_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.code_behaviors.mouse_parallax.name")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.appear_behavior"),
    action: $XN.REMOVE_APPEAR_BEHAVIOR
  }, {
    label: renderI18nText("sites.code_behaviors.mouse_parallax.name"),
    action: $XN.REMOVE_CODE_BEHAVIORS
  }],
  isViolation: e => {
    let t = $(e, Xc.Appear);
    let r = X(e, "MouseParallax");
    return t && r;
  }
}, {
  name: "behaviors/cursor_and_typewriter",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.cursor_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.code_behaviors.typewriter.name")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.cursor_behavior"),
    action: $XN.REMOVE_CURSOR_BEHAVIOR
  }, {
    label: renderI18nText("sites.code_behaviors.typewriter.name"),
    action: $XN.REMOVE_CODE_BEHAVIORS
  }],
  isViolation: e => {
    let t = $(e, Xc.Cursor);
    let r = X(e, "Typewriter");
    return t && r;
  }
}, {
  name: "behaviors/cursor_and_scramble_text",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.cursor_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.code_behaviors.text_scramble.name")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.cursor_behavior"),
    action: $XN.REMOVE_CURSOR_BEHAVIOR
  }, {
    label: renderI18nText("sites.code_behaviors.text_scramble.name"),
    action: $XN.REMOVE_CODE_BEHAVIORS
  }],
  isViolation: e => {
    let t = $(e, Xc.Cursor);
    let r = X(e, "ScrambleText");
    return t && r;
  }
}, {
  name: "behaviors/reveal_and_typewriter",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.appear_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.code_behaviors.typewriter.name")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.appear_behavior"),
    action: $XN.REMOVE_APPEAR_BEHAVIOR
  }, {
    label: renderI18nText("sites.code_behaviors.typewriter.name"),
    action: $XN.REMOVE_CODE_BEHAVIORS
  }],
  isViolation: e => {
    let t = $(e, Xc.Appear);
    let r = X(e, "Typewriter");
    return t && r;
  }
}, {
  name: "behaviors/reveal_and_scramble",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.appear_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.code_behaviors.text_scramble.name")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.appear_behavior"),
    action: $XN.REMOVE_APPEAR_BEHAVIOR
  }, {
    label: renderI18nText("sites.code_behaviors.text_scramble.name"),
    action: $XN.REMOVE_CODE_BEHAVIORS
  }],
  isViolation: e => {
    let t = $(e, Xc.Appear);
    let r = X(e, "ScrambleText");
    return t && r;
  }
}, {
  name: "behaviors/mouse_and_scroll_parallax",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.code_behaviors.mouse_parallax.name")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.scroll_parallax_behavior")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.code_behaviors.mouse_parallax.name"),
    action: $XN.REMOVE_CODE_BEHAVIORS
  }, {
    label: renderI18nText("sites.panel.interactions_panel.scroll_parallax_behavior"),
    action: $XN.REMOVE_SCROLL_PARALLAX_BEHAVIOR
  }],
  isViolation: e => {
    let t = X(e, "MouseParallax");
    let r = $(e, Xc.ScrollParallax);
    return t && r;
  }
}, {
  name: "behaviors/reveal_and_scroll_transform",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.appear_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.scroll_transform_behavior")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.appear_behavior"),
    action: $XN.REMOVE_APPEAR_BEHAVIOR
  }, {
    label: renderI18nText("sites.panel.interactions_panel.scroll_transform_behavior"),
    action: $XN.REMOVE_SCROLL_TRANSFORM_BEHAVIOR
  }],
  isViolation: e => {
    let t = $(e, Xc.Appear);
    let r = $(e, Xc.ScrollTransform);
    return t && r;
  }
}, {
  name: "behaviors/scroll_transform_and_scroll_parallax",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.scroll_transform_behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.panel.interactions_panel.scroll_parallax_behavior")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.panel.interactions_panel.scroll_transform_behavior"),
    action: $XN.REMOVE_SCROLL_TRANSFORM_BEHAVIOR
  }, {
    label: renderI18nText("sites.panel.interactions_panel.scroll_parallax_behavior"),
    action: $XN.REMOVE_SCROLL_PARALLAX_BEHAVIOR
  }],
  isViolation: e => {
    let t = $(e, Xc.ScrollTransform);
    let r = $(e, Xc.ScrollParallax);
    return t && r;
  }
}, {
  name: "behaviors/on_hover_and_hover",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.lint.behaviors/hover-behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.lint.behaviors/hover-interaction-trigger")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.lint.behaviors/hover-behavior"),
    action: $XN.REMOVE_HOVER_BEHAVIOR
  }, {
    label: renderI18nText("sites.lint.behaviors/hover-interaction-trigger"),
    action: $XN.REMOVE_ON_HOVER_ACTIONS
  }],
  isViolation: e => {
    let t = $(e, Xc.Hover);
    let r = K(e, "ON_HOVER");
    return t && r;
  }
}, {
  name: "behaviors/on_press_and_press",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/action-conflict"),
  description: renderI18nText("sites.lint.behaviors/conflicting-actions-description", {
    actions: jsxs(Fragment, {
      children: [jsx(L, {
        text: renderI18nText("sites.lint.behaviors/press-behavior")
      }), jsxs("span", {
        children: [" ", renderI18nText("sites.lint.interactions.and"), " "]
      }), jsx(L, {
        text: renderI18nText("sites.lint.behaviors/press-interaction-trigger")
      })]
    })
  }),
  recommendationLabelOverride: renderI18nText("sites.lint.interactions.remove"),
  recommendations: [{
    label: renderI18nText("sites.lint.behaviors/press-behavior"),
    action: $XN.REMOVE_PRESS_BEHAVIOR
  }, {
    label: renderI18nText("sites.lint.behaviors/press-interaction-trigger"),
    action: $XN.REMOVE_ON_PRESS_ACTIONS
  }],
  isViolation: e => {
    let t = $(e, Xc.Press);
    let r = K(e, "ON_PRESS");
    return t && r;
  }
}, {
  name: "interactions/swap_overlay",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.action_swap_overlay")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-action"),
    action: $XN.REMOVE_SWAP_OVERLAY_ACTIONS
  }],
  isViolation: e => z(e, "SWAP")
}, {
  name: "interactions/on_drag",
  category: "interactions",
  label: renderI18nText("sites.lint.unsupported-trigger"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.interaction.type.on_drag")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-trigger"),
    action: $XN.REMOVE_ON_DRAG_ACTIONS
  }],
  isViolation: e => K(e, "DRAG")
}, {
  name: "animation/dissolve",
  category: "interactions",
  label: renderI18nText("sites.lint.unsupported-animation"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: jsx(L, {
      text: renderI18nText("proto.transition_behavior.dissolve")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-animation"),
    action: $XN.REMOVE_DISSOLVE_ANIMATIONS
  }],
  isViolation: e => W(e, "DISSOLVE")
}, {
  name: "nodetype/connector",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/connector")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_CONNECTOR
  }],
  isViolation: e => "CONNECTOR" === e.type
}, {
  name: "nodetype/shape-with-text",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/shape-with-text")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_SHAPE_WITH_TEXT
  }],
  isViolation: e => "SHAPE_WITH_TEXT" === e.type
}, {
  name: "nodetype/sticky",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/sticky")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_STICKY
  }],
  isViolation: e => "STICKY" === e.type
}, {
  name: "nodetype/washi-tape",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.is-not-supported", {
    action: renderI18nText("sites.lint.nodetype/washi-tape")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_WASHI_TAPE
  }],
  isViolation: e => "WASHI_TAPE" === e.type
}, {
  name: "nodetype/highlight",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/highlight")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_HIGHLIGHT
  }],
  isViolation: e => "HIGHLIGHT" === e.type
}, {
  name: "nodetype/stamp",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/stamp")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_STAMP
  }],
  isViolation: e => "STAMP" === e.type
}, {
  name: "nodetype/table",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/table")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_TABLE
  }],
  isViolation: e => "TABLE" === e.type
}, {
  name: "nodetype/widget",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/widget")
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-object"),
    action: $XN.REMOVE_WIDGET
  }],
  isViolation: e => "WIDGET" === e.type && !e.isHTMLWidget
}, {
  name: "vector/variable-binding",
  category: "interactions",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.vectors/variable-binding-unsupported-description", {
    setVariable: jsx(L, {
      text: renderI18nText("proto.action_set_variable")
    }),
    fill: jsx(L, {
      text: renderI18nText("proto.frame_preset_panel.fill")
    }),
    stroke: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.fill.stroke")
    })
  }),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-action"),
    action: $XN.REMOVE_VECTOR_SET_VARIABLE_ACTIONS
  }],
  isViolation: e => {
    let t = e.prototypeInteractions.flatMap(e => e.actions).filter(e => e?.connectionType === "SET_VARIABLE").map(e => e?.targetVariable?.id).filter(e => void 0 !== e);
    if (0 === t.length) return !1;
    let r = new Set(["fills", "strokes"]);
    let n = [];
    for (let e of t) {
      let t;
      t = e.assetRef && e.assetRef.key && e.assetRef.version ? sD.fromRef({
        key: ey(e.assetRef.key),
        version: nK(e.assetRef.version)
      }) : sD.fromLocalNodeIdObj(e.guid ?? Hr);
      let r = glU?.transitiveConsumersOfVariable(t);
      r && (n = n.concat(Array.from(r)));
    }
    let i = t.map(e => {
      let t = sD.INVALID;
      e.guid ? t = sD.fromLocalNodeIdObj(e.guid) : e.assetRef && void 0 !== e.assetRef.key && void 0 !== e.assetRef.version && (t = sD.fromRef({
        key: ey(e.assetRef.key),
        version: nK(e.assetRef.version)
      }));
      return t?.toString();
    });
    for (let t of n) {
      let n = e.sceneGraph.get(t);
      if (n?.type === "VECTOR") for (let e of Object.entries(n?.boundVariables)) {
        let [t, n] = e;
        if (Array.isArray(n)) for (let e = 0; e < n.length; e++) {
          let a = n[e];
          if (a && !r.has(t) && i.includes(a.id)) return !0;
        } else if (!r.has(t) && i.includes(n.id)) return !0;
      }
    }
    return !1;
  }
}, {
  name: "nodetype/text-path",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.are-not-supported", {
    action: renderI18nText("sites.lint.nodetype/text-path")
  }),
  recommendations: [],
  isViolation: e => "TEXT_PATH" === e.type
}, {
  name: "effects/grain",
  category: "effects",
  label: renderI18nText("sites.lint.effects/grain"),
  description: renderI18nText("sites.lint.effects/grain-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-effect"),
    action: $XN.REMOVE_GRAIN_EFFECT
  }],
  isViolation: e => !U(e) && V(e, e => "GRAIN" === e.type)
}, {
  name: "effects/noise",
  category: "effects",
  label: renderI18nText("sites.lint.effects/noise"),
  description: renderI18nText("sites.lint.effects/noise-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-effect"),
    action: $XN.REMOVE_NOISE_EFFECT
  }],
  isViolation: e => !U(e) && V(e, e => "NOISE" === e.type)
}, {
  name: "effects/progressive-blur",
  category: "effects",
  label: renderI18nText("sites.lint.effects/progressive-blur"),
  description: renderI18nText("sites.lint.effects/progressive-blur-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-effect"),
    action: $XN.REMOVE_PROGRESSIVE_BLUR
  }],
  isViolation: e => !U(e) && V(e, e => ("FOREGROUND_BLUR" === e.type || "BACKGROUND_BLUR" === e.type) && "PROGRESSIVE" === e.blurOpType)
}, {
  name: "effects/glass",
  category: "effects",
  label: renderI18nText("sites.lint.effects/glass"),
  description: renderI18nText("sites.lint.effects/glass-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-effect"),
    action: $XN.REMOVE_GLASS
  }],
  isViolation: e => !U(e) && V(e, e => "GLASS" === e.type)
}, {
  name: "link/link-to-deleted-object",
  category: "link",
  label: renderI18nText("sites.lint.missing_hyperlink"),
  description: renderI18nText("sites.lint.missing_hyperlink_description"),
  recommendations: [{
    label: renderI18nText("sites.lint.missing_hyperlink.remove_link"),
    action: $XN.REMOVE_LINKS_TO_DELETED_NODES
  }],
  isViolation: e => {
    if (!e.hyperlink) return !1;
    if ("mixed" === e.hyperlink) {
      let t = e.textData?.characters;
      if (!t) return !1;
      let r = 0;
      let n = null;
      for (; r < t.length;) {
        let t = e.getRangeHyperlink(r, r + 1);
        if (t !== n && null !== t && (n = t, "NODE" === t.type && null == e.sceneGraph.get(t.value))) return !0;
        r++;
      }
    } else if ("NODE" === e.hyperlink.type) {
      let t = e.hyperlink.value;
      return null == e.sceneGraph.get(t);
    }
    return !1;
  }
}, {
  name: "interactions/scroll_to_in_component_instance",
  label: renderI18nText("sites.lint.interactions/unsupported-action"),
  description: renderI18nText("sites.lint.interactions/scroll-to-in-component-instance-unsupported"),
  category: "interactions",
  recommendations: [{
    label: renderI18nText("sites.lint.remove-action"),
    action: $XN.REMOVE_SCROLL_TO_ACTIONS
  }],
  isViolation: e => e.isInstanceSublayer && z(e, "SCROLL_TO")
}, {
  name: "appearance/image-adjustments",
  category: "appearance",
  icon: jsx(_$$T, {}),
  label: renderI18nText("sites.lint.appearance/image-adjustments"),
  description: renderI18nText("sites.lint.appearance/image-adjustments-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-image-adjustments"),
    action: $XN.REMOVE_IMAGE_ADJUSTMENTS
  }],
  isViolation: e => B(e, e => {
    if ("IMAGE" !== e.type || !e.paintFilter) return !1;
    let t = e.paintFilter;
    return !!t && ["exposure", "contrast", "vibrance", "temperature", "tint", "highlights", "shadows"].some(e => {
      let r = t[e];
      return void 0 !== r && !xN(r, 0);
    });
  })
}, {
  name: "appearance/transformed-mask",
  category: "appearance",
  label: renderI18nText("sites.lint.appearance/transformed-mask"),
  description: renderI18nText("sites.lint.appearance/transformed-mask-description"),
  icon: jsx(b, {}),
  recommendations: [{
    label: renderI18nText("sites.lint.appearance/remove-mask-transform"),
    action: $XN.REMOVE_MASK_TRANSFORM
  }],
  isViolation: e => {
    if (!(e.isGroup && e.childrenNodes.some(e => e.mask))) return !1;
    let t = _$$s.identity().toFigMatrix();
    let {
      m00,
      m01,
      m02,
      m10,
      m11,
      m12
    } = e.relativeTransform;
    return !(xN(m00, t.m00) && xN(m01, t.m01) && xN(m02, t.m02) && xN(m10, t.m10) && xN(m11, t.m11) && xN(m12, t.m12)) || e.childrenNodes.some(e => {
      let {
        m00,
        m01,
        m02,
        m10,
        m11,
        m12
      } = e.relativeTransform;
      return !xN(m00, t.m00) || !xN(m01, t.m01) || !xN(m02, t.m02) || !xN(m10, t.m10) || !xN(m11, t.m11) || !xN(m12, t.m12);
    });
  }
}, {
  name: "fills/rotated-image",
  category: "fill",
  label: renderI18nText("sites.lint.fills/rotated-image"),
  description: renderI18nText("sites.lint.fills/rotated-image-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-rotation"),
    action: $XN.REMOVE_IMAGE_ROTATION
  }, {
    label: renderI18nText("sites.lint.fills/remove-fill"),
    action: $XN.REMOVE_ROTATED_IMAGE_FILL
  }],
  isViolation: e => B(e, e => {
    if ("IMAGE" !== e.type) return !1;
    if (0 !== e.rotation) return !0;
    if ("STRETCH" === e.imageScaleMode && e.transform) {
      let t = _$$s.fromFigMatrix(e.transform);
      if (!xN(t.toRadians(), 0)) return !0;
    }
    return !1;
  })
}, {
  name: "fills/rotated-video",
  category: "fill",
  label: renderI18nText("sites.lint.fills/rotated-video"),
  description: renderI18nText("sites.lint.fills/rotated-video-description"),
  enabled: () => !!getFeatureFlags().sts_video,
  recommendations: [{
    label: renderI18nText("sites.lint.remove-rotation"),
    action: $XN.REMOVE_VIDEO_ROTATION
  }, {
    label: renderI18nText("sites.lint.fills/remove-fill"),
    action: $XN.REMOVE_ROTATED_VIDEO_FILL
  }],
  isViolation: e => B(e, e => {
    if ("VIDEO" !== e.type) return !1;
    if (0 !== e.rotation) return !0;
    if ("STRETCH" === e.imageScaleMode && e.transform) {
      let t = _$$s.fromFigMatrix(e.transform);
      if (!xN(t.toRadians(), 0)) return !0;
    }
    return !1;
  })
}, {
  name: "fills/video-fill-exclusive",
  category: "fill",
  label: renderI18nText("sites.lint.fills/video-fill-exclusive"),
  description: renderI18nText("sites.lint.fills/video-fill-exclusive-description"),
  recommendations: [],
  enabled: () => !!getFeatureFlags().sts_video,
  isViolation: e => {
    let t = B(e, e => "VIDEO" === e.type);
    let r = e.fills.filter(e => F(e)).length > 1;
    return t && r;
  }
}, {
  name: "fills/video-fill-unsupported-node",
  category: "fill",
  label: renderI18nText("sites.lint.fills/video-fill-unsupported-node"),
  description: renderI18nText("sites.lint.fills/video-fill-unsupported-node-description"),
  recommendations: [],
  enabled: () => !!getFeatureFlags().sts_video,
  isViolation: e => {
    let t = ["RECTANGLE", "ROUNDED_RECTANGLE", "FRAME"].includes(e.type);
    return B(e, e => "VIDEO" === e.type) && !t;
  }
}, {
  name: "fills/video-fill-invalid-scale-mode",
  category: "fill",
  label: renderI18nText("sites.lint.fills/video-fill-invalid-scale-mode"),
  description: renderI18nText("sites.lint.fills/video-fill-invalid-scale-mode-description", {
    Tile: jsx(L, {
      text: renderI18nText("fullscreen.properties_panel.image_scale.tile")
    })
  }),
  enabled: () => !!getFeatureFlags().sts_video,
  recommendations: [{
    label: renderI18nText("sites.lint.fix-issue"),
    action: $XN.SET_VIDEO_FILL_SCALE_MODE_FILL
  }],
  isViolation: e => B(e, e => "VIDEO" === e.type && "TILE" === e.imageScaleMode)
}, {
  name: "fills/video-settings-controls-autoplay-invalid",
  category: "fill",
  label: renderI18nText("sites.lint.fills/video-playback-warning"),
  description: renderI18nText("sites.lint.fills/video-settings-controls-autoplay-invalid-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.turn-on-autoplay"),
    action: $XN.SET_VIDEO_AUTOPLAY
  }, {
    label: renderI18nText("sites.lint.show-controls"),
    action: $XN.SET_VIDEO_CONTROLS
  }],
  enabled: () => !!getFeatureFlags().sts_video,
  isViolation: e => B(e, t => {
    if ("VIDEO" !== t.type) return !1;
    let r = e.videoPlayback;
    return !e.videoPlayback.showControls && !r.autoplay;
  })
}, {
  name: "fills/video-settings-muted-autoplay-invalid",
  category: "fill",
  label: renderI18nText("sites.lint.fills/video-playback-warning"),
  description: renderI18nText("sites.lint.fills/video-settings-muted-autoplay-invalid-description"),
  recommendations: [],
  enabled: () => !!getFeatureFlags().sts_video,
  isViolation: e => B(e, t => {
    if ("VIDEO" !== t.type) return !1;
    let r = e.videoPlayback;
    return !r.muted && r.autoplay;
  })
}, {
  name: "nodetype/component-set-in-responsive-set",
  category: "objects",
  label: renderI18nText("sites.lint.nodetype/unsupported"),
  description: renderI18nText("sites.lint.component-sets-in-pages"),
  recommendations: [],
  isViolation: e => e.isStateGroup
}, {
  name: "layout/fixed-child-outside-of-tlf",
  category: "position",
  label: renderI18nText("sites.lint.layout/fixed-child-outside-of-tlf"),
  description: renderI18nText("sites.lint.layout/fixed-child-outside-of-tlf-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.set-position-absolute"),
    action: $XN.SET_POSITION_ABSOLUTE
  }],
  isViolation: e => {
    if ("FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" !== e.scrollBehavior) return !1;
    if (e.parentGuid) {
      let t = e.sceneGraph.get(e.parentGuid);
      if (t && t.parentGuid) {
        let e = t.parentNode;
        if (!e?.isResponsiveSet) return !0;
      }
    }
    return !1;
  }
}, {
  name: "fills/video-size",
  category: "fill",
  label: renderI18nText("sites.lint.fills/video-size"),
  description: renderI18nText("sites.lint.fills/video-size-description"),
  recommendations: [{
    label: renderI18nText("sites.lint.remove-video"),
    action: $XN.REMOVE_VIDEO_FILL
  }],
  enabled: () => !!getFeatureFlags().sts_video && !!getFeatureFlags().sts_video_size_lint_rule,
  beforeRun: async (e, t) => {
    await er(e, t);
  },
  isViolation: e => {
    let t = en(e);
    if (!t.length) return !1;
    for (let e of t) {
      let t = dk.instance.getMetadataForHash(e);
      if (t?.bytes && t.bytes > 0xa00000) return !0;
    }
    return !1;
  }
}];
let D = e => {
  let t = new Set();
  let r = [e];
  for (; r.length > 0;) {
    let e = r.pop();
    t.add(e);
    r.push(...e.childrenNodes);
  }
  return t;
};
function k(e, t) {
  if (!e) return !1;
  let r = e.containingCanvas;
  let n = r && t.get(r);
  return !!n && !n.isInternalOnlyNode;
}
export async function $$M1(e, t, r, n) {
  let i = [];
  for (let n of P) {
    if (!(!("enabled" in n) || n.enabled())) continue;
    let a = t.get(r);
    "beforeRun" in n && (await n.beforeRun(e, a));
    let s = function (e, t, r, n) {
      if (!t) return [];
      let i = [{
        node: t,
        context: void 0
      }];
      let a = [];
      let s = new Set();
      for (; i.length > 0;) {
        let {
          node,
          context
        } = i.shift();
        if (!(node.visible || node.boundVariables.visible)) continue;
        let o = r.isViolation(node, context);
        let [l, d] = "boolean" == typeof o ? [o, void 0] : o;
        if (l && ("INSTANCE" === node.type && node.symbolId && function (e, t, r, n) {
          let i = t.get(e);
          if (!k(i, t)) return !1;
          let a = r.isViolation(i, n);
          let [s] = "boolean" == typeof a ? [a, void 0] : a;
          return s;
        }(node.symbolId, e, r, context) ? a.push(node.symbolId) : a.push(node.guid)), ["INSTANCE", "SYMBOL"].includes(node.type) && !s.has(node.guid)) {
          if (s.add(node.guid), node.symbolId) {
            let r = e.get(node.symbolId);
            k(r, e) && i.push({
              node: r,
              context
            });
          }
          [...D(node)].flatMap(t => J(t, e => "SWAP_STATE" === e.navigationType).map(t => {
            if (!t.transitionNodeID) return;
            let r = dI(t.transitionNodeID);
            if (k(e.get(r), e)) return r;
          }).filter(Boolean)).forEach(t => {
            let r = e.get(t);
            r && i.push({
              node: r,
              context
            });
          });
        }
        node.childrenNodes.forEach(e => {
          i.push({
            node: e,
            context: d
          });
        });
      }
      return a;
    }(t, a, n);
    s.length > 0 && i.push({
      ...n,
      nodeIds: s
    });
    await new Promise(e => setTimeout(e, 0));
  }
  (function (e, t) {
    Object.entries(e.reduce((e, t) => (e[t.name] = (e[t.name] || 0) + 1, e), {})).map(([e, r]) => {
      analyticsEventManager.trackDefinedEvent("sites.linting_errors", {
        lintRule: e,
        count: r,
        source: t
      });
    });
  })(i, n);
  return i;
}
let F = e => !!e.visible && 0 !== (e.opacity || 1) && (!!("SOLID" === e.type && (e.color?.a || 1) > 0) || !j(e) || e.stops?.some(e => e.color.a > 0));
function j(e) {
  return "GRADIENT_ANGULAR" === e.type || "GRADIENT_DIAMOND" === e.type || "GRADIENT_LINEAR" === e.type || "GRADIENT_RADIAL" === e.type;
}
function U(e) {
  return "ELLIPSE" === e.type || "REGULAR_POLYGON" === e.type || "STAR" === e.type || "VECTOR" === e.type || "LINE" === e.type || "BOOLEAN_OPERATION" === e.type;
}
function B(e, t = () => !0) {
  return e.fills.length > 0 && e.fills.some(e => t(e) && F(e));
}
function G(e, t = () => !0) {
  return e.strokePaints.data.length > 0 && e.strokePaints.data.some(e => t(e) && F(e));
}
function V(e, t = () => !0) {
  return e.effects.some(e => t(e) && e.visible);
}
let H = (e, t) => q(e, e => e.connectionType === t);
let z = (e, t) => q(e, e => e.navigationType === t);
let W = (e, t) => q(e, e => e.transitionType === t);
let K = (e, t) => Z(e, e => e.event?.interactionType === t);
let Y = e => Z(e, e => e.event?.interactionType === "ON_KEY_DOWN" && e.event?.keyTrigger?.triggerDevice !== "KEYBOARD");
let $ = (e, t) => !!e.behaviors && t in e.behaviors;
function X(e, t) {
  if (!e.behaviors?.code || 0 === e.behaviors.code.length) return !1;
  let r = _H.fromString(e.behaviors.code[0].codeComponentId);
  if (!r) return !1;
  let n = e.sceneGraph.getCodeComponentNode(r);
  return !!n?.isCodeBehavior && n?.name === t;
}
let q = (e, t) => e.prototypeInteractions.some(e => e.actions?.some(e => t(e) || e.conditionalActions?.some(e => e.actions?.some(t))));
let J = (e, t) => {
  let r = [];
  e.prototypeInteractions.forEach(e => {
    e.actions?.forEach(e => {
      t(e) && r.push(e);
      e.conditionalActions?.forEach(e => {
        e.actions?.forEach(e => {
          t(e) && r.push(e);
        });
      });
    });
  });
  return r;
};
let Z = (e, t) => e.prototypeInteractions.some(e => t(e));
let Q = (e, t, r) => q(e, e => {
  let n = "ANY" === r ? "INSTANT_TRANSITION" !== e.transitionType : e.transitionType === r;
  return e.navigationType === t && n;
});
let ee = e => !!e.hyperlink && K(e, "ON_CLICK");
let et = e => !!e.hyperlink || K(e, "ON_CLICK") || "BUTTON" === e.accessibleHTMLTag;
async function er(e, t) {
  if (!getFeatureFlags().sts_video || !getFeatureFlags().sts_video_size_lint_rule || !e) return;
  let r = function e(t) {
    let r = new Set();
    t && (en(t).forEach(e => r.add(e)), t.childrenNodes.forEach(t => {
      e(t).forEach(e => r.add(e));
    }));
    return r;
  }(t);
  0 !== r.size && (await dk.instance.populateCacheForHashes(e, Array.from(r)));
}
function en(e) {
  return e.fills.filter(e => "VIDEO" === e.type && F(e)).map(e => e.video?.hash ? nj(e.video.hash) : void 0).filter(e => void 0 !== e);
}
export const uU = $$R0;
export const N0 = $$M1;