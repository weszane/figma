import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, createRef } from "react";
import { flushSync } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { DialogTriggerButton } from "../905/976845";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { Button } from "../905/521428";
import { IconButton } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { T as _$$T } from "../figma_app/300269";
import { d as _$$d2 } from "../figma_app/844319";
import { J as _$$J } from "../figma_app/63663";
import { q as _$$q } from "../905/820062";
import { l as _$$l } from "../figma_app/603241";
import { Z } from "../905/279476";
import { A as _$$A } from "../905/891805";
import { O as _$$O } from "../905/487602";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { useHandleFocusEvent, useHandleKeyboardEvent, SKIP_RECORDING } from "../figma_app/878298";
import { AutoInteractableWrapper } from "../905/277716";
import { OptionComponent, SeparatorComponent } from "../figma_app/236327";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { getNudgeAmounts } from "../figma_app/740163";
import { useDropdown } from "../905/848862";
import { kG } from "../figma_app/482495";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { LengthInput } from "../figma_app/178475";
import { ConnectedPointingDropdown, DropdownType } from "../905/504727";
import { Zk, ks } from "../figma_app/626177";
import { Z as _$$Z } from "../905/278240";
import { I as _$$I } from "../905/439783";
import { a as _$$a } from "../905/575557";
import { ParagraphSpacingInput } from "../905/2401";
import { B as _$$B } from "../905/957400";
import { dx } from "../figma_app/334459";
import { Wv } from "../figma_app/711157";
import { fn, pG } from "../figma_app/811257";
import { b as _$$b, zQ, IL, yF } from "../figma_app/427309";
let K = "responsive_text_style_variants--icon---QQbO raw_components--iconInsideBorderFocusWithin--2g7fO";
let Y = "responsive_text_style_variants--breakpointTextWidthDropdown--buWMV";
let $ = "responsive_text_style_variants--breakpointDropdownNameAndIcon--GoFa6";
let X = "responsive_text_style_variants--modalBody--NAqJo";
let q = "responsive_text_style_variants--breakpointDropdownContainer--0-xZj";
let J = "responsive_text_style_variants--textInput--zcSFY styles_properties_form--textInput--rWj8- raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u";
export function $$Z0() {
  let e = useDropdown("sites-responsive-text-style-dropdown");
  let t = useRef(null);
  let r = t.current?.getBoundingClientRect();
  let a = useRef(null);
  let l = a.current?.getBoundingClientRect().width;
  let d = Fullscreen?.getSortedBreakpointFramesNameAndRange();
  let c = new Set();
  let u = kG("responsive-text-style-create-custom-breakpoint");
  let _ = useSelector(e => e.mirror.selectedStyleProperties);
  if (!_.responsiveTextStyleVariants) return null;
  let h = function (e) {
    let t = new Set();
    e.forEach(e => {
      void 0 !== e.minWidth && t.add(e.minWidth);
    });
    let r = Array.from(t).sort((e, t) => e - t);
    let n = new Map();
    if (0 === r.length) return n;
    if (1 === r.length) {
      n.set(r[0], r[0] + "+");
      return n;
    }
    let i = r[0];
    for (let e = 1; e < r.length; e++) {
      let t = r[e] - 1;
      n.set(i, i + " - " + t);
      i = r[e];
    }
    n.set(i, i + "+");
    return n;
  }(_.responsiveTextStyleVariants);
  let m = (t, r) => {
    permissionScopeHandler.user("create-responsive-text-style-variant", () => {
      if (_.responsiveTextStyleVariants && _.responsiveTextStyleVariants.some(e => e.minWidth === t && e.name === r)) return;
      let e = {
        value: _.lineHeight.value,
        units: _.lineHeight.units
      };
      let n = {
        value: _.letterSpacing.value,
        units: _.letterSpacing.units
      };
      Fullscreen.createVariantForSelectedTextStyleNode(sessionLocalIDToString(_.guid), t || 0, r || getI18nString("sites.panel.responsive_text_style.custom"), _.fontSize, e, n, _.paragraphSpacing);
    });
    e.hide();
  };
  return jsxs(Fragment, {
    children: [jsxs(Zk, {
      className: "responsive_text_style_variants--panelBorder--KcVg7",
      ref: a,
      children: [jsx(Wv, {
        isEmpty: 0 === _.responsiveTextStyleVariants.length,
        faded: 0 === _.responsiveTextStyleVariants.length,
        titleTx: renderI18nText("sites.panel.responsive_text_style.title"),
        children: jsx(DialogTriggerButton, {
          ref: t,
          onClick: () => e.toggle(),
          "aria-expanded": e.showing,
          "aria-label": getI18nString("sites.panel.responsive_text_style.add_new_style_breakpoint"),
          children: jsx(_$$e, {})
        })
      }), _.responsiveTextStyleVariants.map((e, t) => {
        let r = c.has(e.minWidth);
        r || c.add(e.minWidth);
        return jsx(et, {
          variant: e,
          variants: _.responsiveTextStyleVariants ?? [],
          variantIndex: t,
          textStyleGuid: _.guid,
          width: l,
          rangeStringMap: h,
          showErrorIcon: r
        }, t);
      })]
    }), e.showing && r && d && jsx(Q, {
      variants: _.responsiveTextStyleVariants ?? [],
      breakpointsInFile: d,
      dropdownTargetRect: r,
      onAddNewVariant: m,
      onAddCustomVariant: () => {
        u.toggle(() => calculatePickerPositionLeft(t.current, l + 240 - 20));
        e.hide();
      }
    }), u.showing && jsx(ee, {
      variants: _.responsiveTextStyleVariants ?? [],
      onClose: u.hide,
      position: u.initialPosition,
      onCreateCustomBreakpoint: (e = 0, t) => {
        m(e, t);
        u.hide();
      }
    })]
  });
}
function Q({
  variants: e,
  breakpointsInFile: t,
  dropdownTargetRect: r,
  onAddNewVariant: i,
  onAddCustomVariant: a
}) {
  let s = e.some(e => e.minWidth < _$$b && e.name === getI18nString("sites.breakpoint_bar.add_mobile_breakpoint"));
  let o = e.some(e => e.minWidth >= zQ && e.name === getI18nString("sites.breakpoint_bar.add_desktop_breakpoint"));
  let l = e.some(e => e.minWidth > _$$b && e.minWidth < zQ && e.name === getI18nString("sites.breakpoint_bar.add_tablet_breakpoint"));
  let d = [];
  s || d.unshift(jsx(OptionComponent, {
    onClick: () => i(1, getI18nString("sites.breakpoint_bar.add_mobile_breakpoint")),
    children: jsxs("div", {
      className: q,
      children: [jsxs("div", {
        className: $,
        children: [jsx(_$$T, {}), renderI18nText("sites.breakpoint_bar.add_mobile_breakpoint")]
      }), jsxs("span", {
        className: Y,
        children: ["1 - ", IL - 1]
      })]
    })
  }, "add-mobile-breakpoint"));
  l || d.unshift(jsx(OptionComponent, {
    onClick: () => i(IL, getI18nString("sites.breakpoint_bar.add_tablet_breakpoint")),
    children: jsxs("div", {
      className: q,
      children: [jsxs("div", {
        className: $,
        children: [jsx(_$$d2, {}), renderI18nText("sites.breakpoint_bar.add_tablet_breakpoint")]
      }), jsxs("span", {
        className: Y,
        children: [IL, " - ", yF - 1]
      })]
    })
  }, "add-tablet-breakpoint"));
  o || d.unshift(jsx(OptionComponent, {
    onClick: () => i(yF, getI18nString("sites.breakpoint_bar.add_desktop_breakpoint")),
    children: jsxs("div", {
      className: q,
      children: [jsxs("div", {
        className: $,
        children: [jsx(_$$J, {}), renderI18nText("sites.breakpoint_bar.add_desktop_breakpoint")]
      }), jsxs("span", {
        className: Y,
        children: [yF, "+"]
      })]
    })
  }, "add-desktop-breakpoint"));
  let c = e => {
    let t = e.name === getI18nString("sites.breakpoint_bar.add_desktop_breakpoint") && (e.minWidth === yF || e.currentSize === yF);
    let r = e.name === getI18nString("sites.breakpoint_bar.add_tablet_breakpoint") && (e.minWidth === IL || e.currentSize === IL);
    let n = e.name === getI18nString("sites.breakpoint_bar.add_mobile_breakpoint") && (1 === e.minWidth || 1 === e.currentSize);
    return t || r || n;
  };
  let u = t.filter(t => !(c(t) || e && e.some(e => e.minWidth === t.minWidth)));
  let p = [];
  u.map(e => {
    let t = e.minWidth;
    e.currentSize && (t = e.currentSize);
    p.push(jsx(OptionComponent, {
      onClick: () => i(t, e.name),
      children: jsxs("div", {
        className: q,
        children: [jsxs("div", {
          className: $,
          children: [jsx(_$$q, {}), " ", e.name]
        }), jsx("span", {
          className: Y,
          children: e.rangeString
        })]
      })
    }, `add-breakpoint-${e.rangeString}`));
  });
  return jsxs(ConnectedPointingDropdown, {
    targetRect: r,
    type: DropdownType.DEFAULT,
    lean: "left",
    children: [d, d.length > 0 && jsx(SeparatorComponent, {}), p, u.length > 0 && jsx(SeparatorComponent, {}), jsx(OptionComponent, {
      onClick: a,
      children: jsx("div", {
        className: q,
        children: jsxs("div", {
          className: $,
          children: [jsx(_$$q, {}), renderI18nText("sites.breakpoint_bar.add_custom_breakpoint")]
        })
      })
    }, "add-custom-breakpoint")]
  });
}
function ee({
  variants: e,
  onClose: t,
  position: r,
  onCreateCustomBreakpoint: a
}) {
  let o = useDispatch<AppDispatch>();
  let u = getNudgeAmounts();
  let [p, _] = useState("");
  let [h, m] = useState(1);
  let [g, y] = useState(!1);
  let b = useRef(null);
  return jsx(bL, {
    onClose: t,
    defaultPosition: r,
    width: 240,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("sites.panel.responsive_text_style.custom_breakpoint")
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsxs("div", {
          className: X,
          children: [jsx(fn, {
            leftInput: getI18nString("sites.panel.responsive_text_style.name"),
            rightInput: jsx(ks, {
              ref: b,
              className: J,
              value: p,
              placeholder: "Custom",
              onChange: e => {
                _(e.target.value);
              },
              recordingKey: "responsiveTextStyleVariantCustomName",
              delay: 50,
              autoFocus: !0,
              autoComplete: "off"
            }),
            leftLabel: void 0,
            rightLabel: void 0,
            icon: void 0
          }), jsx(fn, {
            leftInput: getI18nString("sites.panel.responsive_text_style.min_width"),
            rightInput: jsx(LengthInput, {
              value: h,
              id: "responsive_text_style_variant_custom_min_width",
              onValueChange: t => {
                m(t);
                y(e.some(e => e.minWidth === t));
              },
              dispatch: o,
              "data-tooltip": getI18nString("sites.panel.responsive_text_style.min_width"),
              "data-tooltip-type": KindEnum.TEXT,
              min: 1,
              smallNudgeAmount: u.smallNudgeAmount,
              bigNudgeAmount: u.bigNudgeAmount,
              children: jsx("div", {
                className: K,
                children: jsx(_$$l, {})
              })
            }),
            leftLabel: void 0,
            rightLabel: void 0,
            icon: g && jsx(Z, {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("sites.panel.responsive_text_style.min_width_conflicts")
            })
          }), jsx("div", {
            className: "responsive_text_style_variants--row--pcVq- ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu",
            children: jsx(Button, {
              onClick: () => {
                a(h, p);
              },
              children: renderI18nText("sites.panel.responsive_text_style.create_custom_breakpoint")
            })
          })]
        })
      })]
    })
  });
}
function et({
  variant: e,
  variants: t,
  variantIndex: r,
  textStyleGuid: a,
  width: s,
  rangeStringMap: l,
  showErrorIcon: d
}) {
  let c = useRef(null);
  let p = kG("responsive-text-style-edit-variant-picker-" + r);
  let _ = l.get(e.minWidth) ?? e.minWidth.toString();
  return jsxs(Fragment, {
    children: [jsx(pG, {
      input: jsxs("div", {
        className: (cssBuilderInstance.alignLeft.$, "responsive_text_style_variants--breakpointIconAndText--yCSLI"),
        children: [d && jsx(Z, {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("sites.panel.responsive_text_style.min_width_conflicts")
        }), e.name, jsxs("span", {
          className: "responsive_text_style_variants--breakpointText--Pleoi",
          children: ["\xb7 ", _]
        })]
      }),
      leftIcon: jsx(DialogTriggerButton, {
        ref: c,
        "aria-expanded": p.showing,
        "aria-label": getI18nString("sites.panel.responsive_text_style.settings"),
        onClick: () => p.toggle(() => calculatePickerPositionLeft(c.current, s + 240 - 50)),
        children: jsx(_$$A, {})
      }),
      rightIcon: jsx(IconButton, {
        "aria-label": getI18nString("sites.panel.responsive_text_style.settings"),
        onClick: () => {
          permissionScopeHandler.user("delete-responsive-text-style-variant", () => {
            Fullscreen.deleteVariantForTextStyleNode(sessionLocalIDToString(a), r);
          });
        },
        children: jsx(_$$O, {})
      }),
      label: null
    }), jsx(en, {
      variant: e,
      index: r,
      textStyleGuid: a
    }), p.showing && jsx(er, {
      variant: e,
      variants: t,
      index: r,
      textStyleGuid: a,
      onClose: p.hide,
      position: p.initialPosition
    })]
  });
}
function er({
  variant: e,
  variants: t,
  index: r,
  textStyleGuid: o,
  onClose: c,
  position: u
}) {
  let p = useDispatch<AppDispatch>();
  let _ = getNudgeAmounts();
  let [h, m] = useState(e.name ?? "");
  let [g, y] = useState(e.minWidth ?? 1);
  let [b, A] = useState(!1);
  let x = useRef(null);
  let N = e => {
    permissionScopeHandler.user("update-responsive-text-style-variant-min-width", () => {
      Fullscreen.editVariantMinWidthForTextStyleNode(sessionLocalIDToString(o), r, e);
    });
  };
  let O = useHandleFocusEvent("responsiveTextStyleVariantName", "submit", () => {
    "" !== h && permissionScopeHandler.user("update-responsive-text-style-variant-name", () => {
      Fullscreen.editVariantNameForTextStyleNode(sessionLocalIDToString(o), r, h);
    });
  });
  let R = useHandleKeyboardEvent("responsiveTextStyleVariantName", "keydown", t => {
    if ("Tab" === t.key || "Enter" === t.key) O();else {
      if ("Escape" !== t.key) return SKIP_RECORDING;
      flushSync(() => {
        m(e.name);
      });
      x.current?.blur();
    }
  });
  return jsx(bL, {
    onClose: () => {
      N(g);
      c();
    },
    defaultPosition: u,
    width: 240,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("sites.panel.responsive_text_style.settings")
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsxs("div", {
          className: X,
          children: [jsx(fn, {
            leftInput: getI18nString("sites.panel.responsive_text_style.name"),
            rightInput: jsx(ks, {
              autoComplete: "off",
              autoFocus: !0,
              className: J,
              delay: 50,
              innerRef: x,
              onBlur: O,
              onChange: e => {
                m(e.target.value);
              },
              onFocus: () => (m(h), SKIP_RECORDING),
              onKeyDown: R,
              placeholder: getI18nString("sites.panel.responsive_text_style.custom"),
              recordingKey: "responsiveTextStyleVariantCustomName",
              value: h
            }),
            icon: null,
            leftLabel: void 0,
            rightLabel: void 0
          }), jsx(fn, {
            leftInput: getI18nString("sites.panel.responsive_text_style.min_width"),
            rightInput: jsx(LengthInput, {
              value: g,
              id: "responsive_text_style_variant_min_width" + r,
              onValueChange: r => {
                y(r);
                let n = 0;
                t.forEach(e => {
                  e.minWidth === r && n++;
                });
                A(n > 1 && r === e.minWidth || n >= 1 && r !== e.minWidth);
              },
              dispatch: p,
              "data-tooltip": getI18nString("sites.panel.responsive_text_style.min_width"),
              "data-tooltip-type": KindEnum.TEXT,
              min: 1,
              smallNudgeAmount: _.smallNudgeAmount,
              bigNudgeAmount: _.bigNudgeAmount,
              children: jsx("div", {
                className: K,
                children: jsx(_$$l, {})
              })
            }),
            icon: b && jsx(Z, {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("sites.panel.responsive_text_style.min_width_conflicts")
            }),
            leftLabel: void 0,
            rightLabel: void 0
          })]
        })
      })]
    })
  });
}
function en({
  variant: e,
  index: t,
  textStyleGuid: r
}) {
  let a = useDispatch<AppDispatch>();
  let o = _$$B();
  let l = createRef();
  let d = createRef();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = getNudgeAmounts();
  let p = jsx(AutoInteractableWrapper, {
    name: "responsive_text_style_variant_font_size",
    children: jsx(_$$Z, {
      id: "responsive_text_style_variant_font_size" + t,
      fontSize: e.fontSize,
      disabled: !1,
      editingStyleGuid: r,
      responsiveTextStyleVariantIndex: t,
      recordingKey: "responsiveTextStylesFontSize"
    })
  });
  let _ = jsx(AutoInteractableWrapper, {
    name: "responsive_text_style_variant_line_height",
    children: jsx(_$$a, {
      lineHeight: e.lineHeight,
      disabled: !1,
      editingStyleGuid: r,
      responsiveTextStyleVariantIndex: t,
      recordingKey: "responsiveTextStylesLineHeight",
      lineHeightInContext: o,
      rowElementRef: l
    })
  });
  let h = jsx(AutoInteractableWrapper, {
    name: "responsive_text_style_variant_letter_spacing",
    children: jsx(_$$I, {
      letterSpacing: e.letterSpacing,
      disabled: !1,
      responsiveTextStyleVariantIndex: t,
      editingStyleGuid: r,
      recordingKey: "responsiveTextStylesLetterSpacing",
      rowElementRef: d,
      dispatch: a
    })
  });
  let m = jsx(AutoInteractableWrapper, {
    name: "responsive_text_style_variant_paragraph_spacing",
    children: jsx(ParagraphSpacingInput, {
      paragraphSpacing: e.paragraphSpacing,
      isDisabled: !1,
      smallNudgeAmount,
      bigNudgeAmount,
      rowElementRef: d,
      editingStyleGuid: r,
      responsiveTextStyleVariantIndex: t,
      recordingKey: "responsiveTextStylesParagraphSpacing",
      onChange: (e, n) => {
        permissionScopeHandler.user("editVariantParagraphSpacingForTextStyleNode", () => Fullscreen.editVariantParagraphSpacingForTextStyleNode(sessionLocalIDToString(r), t, e));
      }
    })
  });
  return jsxs(Fragment, {
    children: [jsx(dx, {
      ref: l,
      left: p,
      right: _
    }), jsx(dx, {
      ref: d,
      left: h,
      right: m
    })]
  });
}
export const v = $$Z0;