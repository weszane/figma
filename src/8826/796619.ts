import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState, useId } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { languageCodes } from "../905/816253";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { bL, DZ, mc, c$, wv } from "../905/493196";
import { A as _$$A } from "../905/891805";
import { getFeatureFlags } from "../905/601108";
import { am } from "../figma_app/901889";
import { Pt } from "../figma_app/806412";
import { E as _$$E } from "../905/277716";
import { renderI18nText, getI18nString } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
import { isInvalidValue } from "../905/216495";
import { kl, lJ } from "../905/275640";
import { Um } from "../905/848862";
import { Sh } from "../figma_app/889655";
import { Ib } from "../905/129884";
import { L as _$$L } from "../905/158054";
import { k as _$$k2 } from "../905/336528";
import { l6, c$ as _$$c$ } from "../905/794875";
import { d as _$$d } from "../905/976845";
import { bL as _$$bL } from "../905/911410";
import { ZC } from "../figma_app/39751";
import { k as _$$k3 } from "../905/582200";
import { u1 } from "../figma_app/91703";
import { jD } from "../905/765855";
import { fullscreenValue } from "../figma_app/455680";
import { kG } from "../figma_app/482495";
import { qo } from "../905/959568";
import { p1 } from "../figma_app/779965";
import H from "classnames";
import { sR } from "../figma_app/694588";
import { Sj } from "../figma_app/960598";
function T({
  id: e,
  onClose: t,
  ...n
}) {
  let a = useDispatch();
  let o = kG(e);
  let s = ZC(o.showing);
  let c = p1();
  let d = useRef(t);
  d.current = t;
  useEffect(() => {
    s && !o.showing && d.current?.();
  }, [o.showing, s]);
  useEffect(() => () => d.current?.(), []);
  let u = () => {
    o.showing && (o.hide(), fullscreenValue.deselectProperty());
  };
  let h = Pt(n, "trigger");
  let {
    x,
    y
  } = o.initialPosition;
  return jsxs(Fragment, {
    children: [jsx(P, {
      name: n.buttonInteractableName,
      children: jsx(_$$d, {
        actionOnPointerDown: !0,
        onClick: t => {
          if (t.stopPropagation(), o.showing) {
            u();
            return;
          }
          let {
            top
          } = t.currentTarget.getBoundingClientRect();
          let l = qo;
          let i = c();
          i && (l = window.innerWidth - i.getBoundingClientRect().left);
          a(u1({
            id: e,
            initialX: l,
            initialY: top
          }));
        },
        "aria-expanded": o.showing,
        "aria-label": n.tooltip,
        recordingKey: h,
        htmlAttributes: {
          onPointerMove: () => {
            o.showing && a(jD());
          },
          "data-testid": h
        },
        children: n.icon
      })
    }), o.showing ? jsx(M, {
      name: n.windowTrackableName,
      children: jsx(_$$bL, {
        width: n.width,
        onClose: u,
        defaultPosition: {
          top: y,
          right: x
        },
        recordingKey: Pt(n, "window"),
        children: n.children
      })
    }) : null]
  });
}
function P({
  children: e,
  name: t
}) {
  return t ? jsx(_$$E, {
    name: t,
    children: e
  }) : jsx(Fragment, {
    children: e
  });
}
function M({
  children: e,
  name: t
}) {
  return t ? jsx(_$$k3, {
    name: t,
    children: e
  }) : jsx(Fragment, {
    children: e
  });
}
var B = H;
let F = "stack_layout_details_preview--stroke--tWkNh";
let z = "stack_layout_details_preview--strokeLight--RsPk7";
let G = "stack_layout_details_preview--fill--V74cf";
let K = "stack_layout_details_preview--fillWhite--uTjlG";
let V = "stack_layout_details_preview--fillTertiary--xuwqQ";
let D = {
  reverseStackingOrder: function ({
    enabled: e
  }) {
    let t = [jsxs("g", {
      filter: "url(#reverse-stacking-order-filter)",
      children: [jsx("rect", {
        className: K,
        x: "67",
        y: "40",
        width: "40",
        height: "40",
        rx: "20"
      }), jsx("path", {
        className: G,
        d: "M88.4893 53.9091V67H87.294V55.1619H87.2173L84.1491 57.201V55.9609L87.2429 53.9091H88.4893Z"
      }), jsx("rect", {
        className: F,
        x: "66.5",
        y: "39.5",
        width: "41",
        height: "41",
        rx: "20.5"
      })]
    }, "1"), jsxs("g", {
      filter: "url(#reverse-stacking-order-filter)",
      children: [jsx("rect", {
        className: K,
        x: "99",
        y: "40",
        width: "40",
        height: "40",
        rx: "20"
      }), jsx("path", {
        className: G,
        d: "M114.964 67V66.1243L119.241 61.3175C119.799 60.6868 120.248 60.1477 120.589 59.7003C120.93 59.2528 121.177 58.8395 121.331 58.4602C121.488 58.081 121.567 57.6868 121.567 57.2777C121.567 56.7791 121.45 56.3445 121.216 55.9737C120.986 55.5987 120.668 55.3068 120.263 55.098C119.858 54.8892 119.402 54.7848 118.895 54.7848C118.358 54.7848 117.888 54.8999 117.483 55.13C117.082 55.3601 116.771 55.6754 116.549 56.076C116.328 56.4766 116.217 56.9368 116.217 57.4567H115.073C115.073 56.7322 115.239 56.0909 115.571 55.5327C115.908 54.9702 116.366 54.5291 116.946 54.2095C117.53 53.8899 118.19 53.7301 118.927 53.7301C119.656 53.7301 120.304 53.8878 120.87 54.2031C121.437 54.5142 121.883 54.9382 122.206 55.4751C122.53 56.0121 122.692 56.6129 122.692 57.2777C122.692 57.7592 122.607 58.2259 122.437 58.6776C122.27 59.1293 121.983 59.6321 121.574 60.1861C121.165 60.7401 120.598 61.4176 119.873 62.2188L116.626 65.843V65.9261H123.101V67H114.964Z"
      }), jsx("rect", {
        className: F,
        x: "98.5",
        y: "39.5",
        width: "41",
        height: "41",
        rx: "20.5"
      })]
    }, "2"), jsxs("g", {
      filter: "url(#reverse-stacking-order-filter)",
      children: [jsx("rect", {
        className: K,
        x: "131",
        y: "40",
        width: "40",
        height: "40",
        rx: "20"
      }), jsx("path", {
        className: G,
        d: "M151.048 67.179C150.243 67.179 149.522 67.0341 148.887 66.7443C148.252 66.4503 147.75 66.0433 147.379 65.5234C147.008 65.0036 146.812 64.4048 146.791 63.7273H147.999C148.02 64.2045 148.167 64.6222 148.44 64.9801C148.713 65.3338 149.075 65.6108 149.527 65.8111C149.978 66.0071 150.481 66.1051 151.035 66.1051C151.64 66.1051 152.173 65.9922 152.633 65.7663C153.098 65.5405 153.46 65.2315 153.72 64.8395C153.984 64.4432 154.116 63.9957 154.116 63.4972C154.116 62.9687 153.982 62.5021 153.713 62.0973C153.445 61.6925 153.059 61.3771 152.556 61.1513C152.058 60.9254 151.461 60.8125 150.767 60.8125H150V59.7386H150.767C151.333 59.7386 151.834 59.6364 152.269 59.4318C152.708 59.223 153.053 58.9311 153.304 58.5561C153.556 58.1811 153.681 57.7401 153.681 57.233C153.681 56.7514 153.573 56.3274 153.355 55.9609C153.138 55.5945 152.831 55.3068 152.435 55.098C152.043 54.8892 151.585 54.7848 151.061 54.7848C150.554 54.7848 150.089 54.8828 149.667 55.0788C149.245 55.2749 148.904 55.5518 148.645 55.9098C148.389 56.2678 148.252 56.6918 148.235 57.1818H147.078C147.096 56.5 147.283 55.9013 147.641 55.3857C148.003 54.8658 148.483 54.4609 149.079 54.1712C149.68 53.8771 150.345 53.7301 151.074 53.7301C151.845 53.7301 152.512 53.8878 153.074 54.2031C153.637 54.5185 154.071 54.9382 154.378 55.4624C154.689 55.9822 154.845 56.5554 154.845 57.1818C154.845 57.9276 154.642 58.5668 154.238 59.0994C153.833 59.6278 153.287 59.9943 152.601 60.1989V60.282C153.436 60.4482 154.093 60.8189 154.57 61.3942C155.051 61.9652 155.292 62.6662 155.292 63.4972C155.292 64.196 155.109 64.8246 154.743 65.3828C154.376 65.9368 153.873 66.3757 153.234 66.6996C152.599 67.0192 151.87 67.179 151.048 67.179Z"
      }), jsx("rect", {
        className: F,
        x: "130.5",
        y: "39.5",
        width: "41",
        height: "41",
        rx: "20.5"
      })]
    }, "3")];
    e && t.reverse();
    return jsxs("svg", {
      width: "240",
      height: "120",
      fill: "none",
      children: [t, jsx("rect", {
        className: z,
        x: "58.5",
        y: "28.5",
        width: "123",
        height: "63",
        rx: "3.5",
        strokeDasharray: "4 2"
      }), jsx("defs", {
        children: jsxs("filter", {
          id: "reverse-stacking-order-filter",
          x: "-1px",
          y: "-1px",
          width: "44",
          height: "42",
          filterUnits: "objectBoundingBox",
          colorInterpolationFilters: "sRGB",
          children: [jsx("feFlood", {
            floodOpacity: "0",
            result: "BackgroundImageFix"
          }), jsx("feColorMatrix", {
            in: "SourceAlpha",
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
            result: "hardAlpha"
          }), jsx("feOffset", {
            dx: "2"
          }), jsx("feComposite", {
            in2: "hardAlpha",
            operator: "out"
          }), jsx("feColorMatrix", {
            type: "matrix",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          }), jsx("feBlend", {
            mode: "normal",
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_1112_23748"
          }), jsx("feBlend", {
            mode: "normal",
            in: "SourceGraphic",
            in2: "effect1_dropShadow_1112_23748",
            result: "shape"
          })]
        })
      })]
    });
  },
  alignToBaseline: function () {
    return jsxs("svg", {
      width: 240,
      height: 120,
      fill: "none",
      children: [jsx("path", {
        className: B()("stack_layout_details_preview--alignToBaselineLine--Erw5t", "stack_layout_details_preview--strokeAssistive--GgFOd"),
        d: "M38 60.5h164"
      }), jsxs("g", {
        className: "stack_layout_details_preview--alignToBaselineA--kQYyh",
        children: [jsx("path", {
          className: G,
          d: "M63.8516 67L65.2514 63.0561H70.7486L72.1484 67H73.4013L68.6392 53.9091H67.3608L62.5987 67H63.8516ZM65.6349 61.9822L67.9553 55.4624H68.0447L70.3651 61.9822H65.6349Z"
        }), jsx("rect", {
          className: F,
          x: 46.5,
          y: 38.5,
          width: 43,
          height: 43,
          rx: 1.5
        })]
      }), jsx("rect", {
        className: B()("stack_layout_details_preview--alignToBaselineEmpty--Z-l7O", F),
        x: 98.5,
        y: 38.5,
        width: 43,
        height: 43,
        rx: 1.5
      }), jsxs("g", {
        className: "stack_layout_details_preview--alignToBaselineG--YayQ-",
        children: [jsx("path", {
          className: G,
          d: "M171.843 68.8864C174.169 68.8864 175.895 67.7486 175.895 65.2557V55.1818H174.783V57.0547H174.668C174.265 56.1726 173.453 55.0476 171.651 55.0476C169.222 55.0476 167.592 57.0803 167.592 60.0653C167.592 63.076 169.279 64.8977 171.632 64.8977C173.396 64.8977 174.259 63.875 174.649 62.9737H174.751V65.1854C174.751 67.0135 173.581 67.8636 171.843 67.8636C170.161 67.8636 169.356 67.0518 168.941 66.304L168.007 66.9176C168.583 68.0426 169.835 68.8864 171.843 68.8864ZM171.766 63.8558C169.816 63.8558 168.736 62.2962 168.736 60.0462C168.736 57.8345 169.797 56.0831 171.766 56.0831C173.69 56.0831 174.77 57.745 174.77 60.0462C174.77 62.4176 173.658 63.8558 171.766 63.8558Z"
        }), jsx("rect", {
          className: F,
          x: 150.5,
          y: 38.5,
          width: 43,
          height: 43,
          rx: 1.5
        })]
      }), jsx("rect", {
        className: B()("stack_layout_details_preview--alignToBaselineOutline--YlRIY", z),
        x: 38.5,
        y: 30.5,
        width: 163,
        height: 59,
        rx: 3.5,
        strokeDasharray: "4 2",
        vectorEffect: "non-scaling-stroke"
      })]
    });
  },
  bordersTakeSpace: function () {
    return jsxs("svg", {
      width: 240,
      height: 120,
      fill: "none",
      children: [jsxs("g", {
        className: "stack_layout_details_preview--bordersTakeSpaceLeft--WTfPZ",
        children: [jsx("rect", {
          className: V,
          x: "43",
          y: "37",
          width: "48",
          height: "48",
          rx: "2"
        }), jsx("rect", {
          className: K,
          x: "49",
          y: "43",
          width: "36",
          height: "36",
          rx: "2"
        })]
      }), jsxs("g", {
        className: "stack_layout_details_preview--bordersTakeSpaceRight--QCBF1",
        children: [jsx("rect", {
          className: V,
          x: "98",
          y: "37",
          width: "99",
          height: "48",
          rx: "2"
        }), jsx("rect", {
          className: K,
          x: "104",
          y: "43",
          width: "87",
          height: "36",
          rx: "2"
        })]
      }), jsx("rect", {
        className: B()("stack_layout_details_preview--bordersTakeSpaceOutline--Xq42w", z),
        x: "48.5",
        y: "42.5",
        width: "143",
        height: "37",
        rx: "1.5",
        strokeDasharray: "4 2",
        vectorEffect: "non-scaling-stroke"
      })]
    });
  }
};
function U({
  setting: e,
  enabled: t
}) {
  let n = e ? D[e] : null;
  return jsx("div", {
    className: B()("stack_layout_details_preview--preview---r9k-", {
      "stack_layout_details_preview--active--yCMB3": t
    }),
    "data-non-interactive": !0,
    children: n ? jsx(n, {
      enabled: t
    }) : jsx("div", {
      className: "stack_layout_details_preview--previewText--0NBYb",
      children: renderI18nText("fullscreen.properties_panel.stack_panel.preview")
    })
  });
}
let Y = "stack_layout_details_modal--dropdownControl--PRPD5";
let X = "stack_layout_details_modal--input--h2Yc7";
let Q = "stack_layout_details_modal--chevron--tW9wo";
export function $$Z0(e) {
  let [t, n] = useState({
    enabled: !1
  });
  let r = getI18nString("fullscreen.properties_panel.section_autoLayout.settings");
  return jsx("span", {
    className: Sj,
    children: jsx(T, {
      id: "LAYOUT_DETAILS_PICKER",
      tooltip: r,
      buttonInteractableName: "open_stack_layout_details_modal_button",
      windowTrackableName: "stack_layout_details_modal",
      icon: jsx(_$$A, {}),
      recordingKey: e.recordingKey,
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: r
          })
        }), jsx(nB, {
          padding: 0,
          children: jsx(q, {
            hoveredSetting: t,
            setHoveredSetting: n,
            recordingKey: e.recordingKey
          })
        })]
      })
    })
  });
}
function q({
  hoveredSetting: e,
  setHoveredSetting: t,
  recordingKey: n
}) {
  let i = kl("stackMode");
  return jsxs(Fragment, {
    children: [jsx(U, {
      setting: e.setting,
      enabled: e.enabled
    }), jsxs("div", {
      className: "stack_layout_details_modal--controls--SFjhS",
      children: [jsx(et, {
        updatePreview: t,
        recordingKey: n
      }), ("HORIZONTAL" === i || "VERTICAL" === i || isInvalidValue(i)) && jsxs(Fragment, {
        children: [jsx(J, {
          updatePreview: t,
          recordingKey: n
        }), jsx(ee, {
          updatePreview: t,
          recordingKey: n
        })]
      })]
    })]
  });
}
function J({
  updatePreview: e,
  recordingKey: t
}) {
  let n = useDispatch();
  let o = Um();
  let [c, k] = lJ("stackReverseZIndex");
  let y = am();
  let S = useSelector(Sh);
  let j = getI18nState()?.getPrimaryLocale(!0) === languageCodes.EN ? 120 : 180;
  let b = isInvalidValue(c);
  let N = !0 === c;
  let I = useId();
  return jsx(_$$E, {
    name: "stacking_order_control",
    children: jsx(_$$L, {
      label: getI18nString("fullscreen.properties_panel.stack_panel.canvas_stacking_order"),
      labelId: I,
      onMouseEnter: () => e({
        setting: "reverseStackingOrder",
        enabled: N
      }),
      onMouseLeave: () => e({
        enabled: !1
      }),
      children: getFeatureFlags().ce_tv_fpl_select ? jsx("span", {
        className: Y,
        children: jsxs(bL, {
          value: b ? "Mixed" : c ? "TRUE" : "FALSE",
          onChange: e => {
            k("TRUE" === e);
            y(N ? "Enable reverse zIndex" : "Disable reverse zIndex", {
              nodeIds: S
            });
          },
          onSelectionChange: t => e({
            setting: null != t ? "reverseStackingOrder" : void 0,
            enabled: "TRUE" === t
          }),
          recordingKey: Pt(t, "reverseStackingOrder"),
          children: [jsx(DZ, {
            id: I,
            width: "fill"
          }), jsxs(mc, {
            children: [b && jsxs(Fragment, {
              children: [jsx(c$, {
                value: "Mixed",
                disabled: !0,
                children: getI18nString("fullscreen.mixed")
              }), jsx(wv, {})]
            }), jsx(c$, {
              value: "TRUE",
              children: en.format(!0)
            }), jsx(c$, {
              value: "FALSE",
              children: en.format(!1)
            })]
          })]
        })
      }) : jsxs(l6, {
        ariaLabelledBy: I,
        chevronClassName: Q,
        className: Y,
        dispatch: n,
        dropdownAlignment: "right",
        dropdownShown: o,
        dropdownWidth: j,
        formatter: en,
        id: "reverse-stacking-order-select",
        inputClassName: X,
        onChange: e => {
          k(e);
          y(e ? "Enable reverse zIndex" : "Disable reverse zIndex", {
            nodeIds: S
          });
        },
        onOptionFocus: t => e({
          setting: null != t ? "reverseStackingOrder" : void 0,
          enabled: !!t
        }),
        property: c,
        recordingKey: Pt(t, "reverseStackingOrder"),
        children: [jsx(_$$c$, {
          value: !0
        }), jsx(_$$c$, {
          value: !1
        })]
      })
    })
  });
}
function ee({
  updatePreview: e,
  recordingKey: t
}) {
  let n = kl("stackMode");
  let i = "BASELINE" === kl("stackCounterAlignItems");
  let r = "HORIZONTAL" !== n;
  let a = sR();
  return jsx(_$$E, {
    name: "baseline_alignment_control",
    children: jsx(_$$k2, {
      label: getI18nString("fullscreen.properties_panel.stack_panel.align_text_baseline"),
      recordingKey: Pt(t, "alignToBaseline"),
      property: i,
      disabled: r,
      onChange: t => {
        a(t, "modal");
        e({
          setting: "alignToBaseline",
          enabled: t
        });
      },
      onFocus: t => {
        e({
          setting: "alignToBaseline",
          enabled: i
        });
      },
      onHover: (t, n) => {
        e({
          setting: "ENTER" === n ? "alignToBaseline" : void 0,
          enabled: t
        });
      },
      "data-tooltip": r ? getI18nString("fullscreen.properties_panel.stack_panel.only_applicable_for_horizontal_layout") : void 0,
      "data-tooltip-type": Ib.TEXT
    })
  });
}
function et({
  updatePreview: e,
  recordingKey: t
}) {
  let n = useDispatch();
  let a = Um();
  let [o, c] = lJ("bordersTakeSpace");
  let m = am();
  let k = useSelector(Sh);
  let y = isInvalidValue(o);
  let S = !0 === o;
  let j = useId();
  return jsx(_$$E, {
    name: "borders_take_space_control",
    children: jsx(_$$L, {
      label: getI18nString("fullscreen.properties_panel.stack_panel.borders_take_space"),
      labelId: j,
      onMouseEnter: () => e({
        setting: "bordersTakeSpace",
        enabled: S
      }),
      onMouseLeave: () => e({
        enabled: !1
      }),
      children: getFeatureFlags().ce_tv_fpl_select ? jsx("span", {
        className: Y,
        children: jsxs(bL, {
          value: y ? "Mixed" : S ? "TRUE" : "FALSE",
          onChange: e => {
            c("TRUE" === e);
            m("change_borders_take_space", {
              enabled: "TRUE" === e,
              source: "modal",
              nodeIds: k
            });
          },
          onSelectionChange: t => e({
            setting: null != t ? "bordersTakeSpace" : void 0,
            enabled: "TRUE" === t
          }),
          recordingKey: Pt(t, "bordersTakeSpace"),
          children: [jsx(DZ, {
            id: j,
            width: "fill"
          }), jsxs(mc, {
            children: [y && jsxs(Fragment, {
              children: [jsx(c$, {
                value: "Mixed",
                disabled: !0,
                children: getI18nString("fullscreen.mixed")
              }), jsx(wv, {})]
            }), jsx(c$, {
              value: "TRUE",
              children: el.format(!0)
            }), jsx(c$, {
              value: "FALSE",
              children: el.format(!1)
            })]
          })]
        })
      }) : jsxs(l6, {
        ariaLabelledBy: j,
        chevronClassName: Q,
        className: Y,
        dispatch: n,
        dropdownShown: a,
        dropdownWidth: 168,
        formatter: el,
        id: "borders-take-space-select",
        inputClassName: X,
        onChange: e => {
          c(e);
          m("change_borders_take_space", {
            enabled: e,
            source: "modal",
            nodeIds: k
          });
        },
        onOptionFocus: t => e({
          setting: null != t ? "bordersTakeSpace" : void 0,
          enabled: !!t
        }),
        property: S,
        recordingKey: Pt(t, "bordersTakeSpace"),
        children: [jsx(_$$c$, {
          value: !0
        }), jsx(_$$c$, {
          value: !1
        })]
      })
    })
  });
}
let en = {
  format: e => e ? getI18nString("fullscreen.properties_panel.stack_panel.first_on_top") : getI18nString("fullscreen.properties_panel.stack_panel.last_on_top")
};
let el = {
  format: e => e ? getI18nString("fullscreen.properties_panel.stack_panel.included") : getI18nString("fullscreen.properties_panel.stack_panel.excluded"),
  formatExtended: e => ({
    text: e ? getI18nString("fullscreen.properties_panel.stack_panel.included_in_layout") : getI18nString("fullscreen.properties_panel.stack_panel.excluded_from_layout")
  })
};
export const o = $$Z0;