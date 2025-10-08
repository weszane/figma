import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { memo, useState, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { sha1HexFromBytes } from "../905/125019";
import { DesignGraphElements, ToolType, Fullscreen, NodePropertyCategory } from "../figma_app/763686";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import c from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { blackColor } from "../figma_app/191804";
import { generateRecordingKey } from "../figma_app/878298";
import { vectorPencilStyleAtom, highlighterStyleAtom, toolStylesAtom } from "../905/125333";
import { getI18nString } from "../905/303541";
import { colorCSSManipulatorInstance } from "../905/989956";
import { fullscreenValue } from "../figma_app/455680";
import { fullscreenHandler } from "../905/258517";
import { Yv } from "../figma_app/616107";
import { KindEnum } from "../905/129884";
import { $J, Z9 } from "../figma_app/634656";
import { Qv } from "../figma_app/967873";
import { s as _$$s } from "../figma_app/666387";
import { ng } from "../figma_app/366203";
import { oE } from "../figma_app/671837";
import { ME } from "../figma_app/630194";
import { s as _$$s2 } from "../figma_app/30255";
import { br, XI, Qu } from "../figma_app/937735";
import { I as _$$I } from "../figma_app/552397";
import { B as _$$B } from "../figma_app/397954";
import { TS, AF, V_ } from "../figma_app/153399";
import { K0, $n } from "../figma_app/439493";
import { W1, HL, WW, xY, YR, cd } from "../figma_app/650460";
import { v as _$$v } from "../figma_app/99807";
import { fK } from "../figma_app/300024";
import { BG, JE, GQ } from "../figma_app/634288";
import { wv, uM, g5, Iz } from "../905/888175";
import { Qc, Iw, M8 } from "../figma_app/368611";
import { B as _$$B2, M as _$$M } from "../figma_app/371825";
import { V as _$$V } from "../figma_app/177090";
import { A as _$$A } from "../svg/702571";
import { A as _$$A2 } from "../svg/972143";
var u = c;
let V = "dlt_drawing_tool_submenu--fadeWhenNotHovered--emhT7";
let W = {
  source: fK,
  submenu: !0
};
let $$K0 = memo(function ({
  tool: e,
  isOpen: t,
  recordingKey: r,
  optimizeForCompactSize: s
}) {
  let [c, T] = useAtomValueAndSetter(vectorPencilStyleAtom);
  let [C, O] = useAtomValueAndSetter(highlighterStyleAtom);
  let [M, K] = useState(!1);
  let [$, X] = useState(!1);
  let {
    openColorPalettePicker,
    closeColorPalettePicker
  } = $J(X);
  let {
    washiTapePaint
  } = useAtomWithSubscription(toolStylesAtom);
  let Q = washiTapePaint?.image?.hash && sha1HexFromBytes(washiTapePaint?.image?.hash);
  let [ee, et] = useState(!1);
  let [er, en] = useState(!1);
  let ei = useSelector(e => e.mirror?.appModel.isReadOnly);
  let [ea, es] = useAtomValueAndSetter(_$$B);
  useEffect(() => {
    Qc(_$$B2);
  }, []);
  useEffect(() => {
    ei || Q || Iw(M8(_$$B2[0]));
  }, [Q, ei]);
  useEffect(() => {
    K(!1);
    et(!1);
    en(!1);
    closeColorPalettePicker();
  }, [e, t, closeColorPalettePicker]);
  useEffect(() => {
    t && (e === DesignGraphElements.VECTOR_PENCIL || e === DesignGraphElements.DROPPER_COLOR) ? es(ToolType.PENCIL_TOOL) : ea === ToolType.PENCIL_TOOL && es(ToolType.SELECTION);
  }, [e, t, ea, es]);
  useLayoutEffect(() => {
    let e = () => et(!1);
    document.addEventListener("focus", e, !0);
    return () => {
      document.removeEventListener("focus", e, !0);
    };
  });
  let eo = c.strokeWeight === wv;
  let el = c.strokeWeight === uM;
  let ed = C.strokeWeight === g5;
  let ec = C.strokeWeight === Iz;
  let eu = {
    margin: "4px 0",
    borderRadius: "3px"
  };
  let ep = e === DesignGraphElements.VECTOR_PENCIL;
  let e_ = e === DesignGraphElements.ERASER;
  let eh = e === DesignGraphElements.HIGHLIGHTER;
  let em = e === DesignGraphElements.WASHI_TAPE;
  let eg = BG(e);
  let ef = !!eg && (eh ? ed : eo);
  let eE = !!eg && (eh ? ec : el);
  let ey = c.paints?.[0]?.color;
  let eb = C.paints?.[0]?.color;
  let eT = JE();
  function eI(t) {
    eh ? O({
      ...C,
      strokeWeight: "THIN" === t ? g5 : Iz
    }) : ep && T({
      ...c,
      strokeWeight: "THIN" === t ? wv : uM
    });
    trackEventAnalytics("Drawing Tool Change Thickness", {
      thickness: t,
      tool: DesignGraphElements[e]
    });
  }
  function eS(e) {
    let t = [{
      type: "SOLID",
      color: e
    }];
    eh ? O({
      ...C,
      paints: t
    }) : ep && T({
      ...c,
      paints: t
    });
  }
  let ev = Z9();
  let eA = ev.type === Yv.CUSTOM;
  let ex = GQ(e);
  let eN = TS(ex);
  let eC = eA ? ev.variations[ex] : eN;
  let ew = useAtomWithSubscription(Qv);
  let eO = !!ew;
  return jsxs(Fragment, {
    children: [jsxs(br, {
      paddingRight: 5,
      paddingLeft: 13,
      children: [jsx($$Y1, {
        toolType: "small-pencil",
        recordingKey: ME("tool-small-pencil"),
        isSelected: ep,
        onClick: () => {
          Fullscreen?.triggerActionInUserEditScope("set-tool-pencil", W);
        },
        dataTooltip: "set-tool-marker",
        tooltipOffset: {
          offsetX: 0,
          offsetY: -20
        },
        IconNoRef: jsx(oE, {
          type: "Pencil",
          size: "Small",
          color: colorCSSManipulatorInstance.format(ey)
        }),
        optimizeForCompactSize: s
      }), jsx($$Y1, {
        toolType: "highlighter",
        recordingKey: ME("tool-highlighter"),
        isSelected: eh,
        onClick: () => {
          Fullscreen?.triggerActionInUserEditScope("set-tool-highlighter", W);
        },
        dataTooltip: "set-tool-highlighter",
        tooltipOffset: {
          offsetX: 0,
          offsetY: -20
        },
        IconNoRef: jsx(oE, {
          type: "Highlighter",
          size: "Small",
          color: colorCSSManipulatorInstance.format(eb)
        }),
        optimizeForCompactSize: s
      }), !s && jsx($$Y1, {
        toolType: "washi-tape",
        recordingKey: ME("tool-washi-tape"),
        isSelected: e === DesignGraphElements.WASHI_TAPE,
        onClick: () => {
          Fullscreen?.triggerActionInUserEditScope("set-tool-washi-tape", W);
        },
        dataTooltip: "set-tool-washi-tape",
        tooltipOffset: {
          offsetX: 0,
          offsetY: -20
        },
        IconNoRef: jsx(oE, {
          type: "Washi tape",
          size: "Small"
        }),
        optimizeForCompactSize: s
      }), jsx($$Y1, {
        toolType: "eraser",
        recordingKey: ME("tool-eraser"),
        isSelected: e === DesignGraphElements.ERASER,
        onClick: () => {
          Fullscreen?.triggerActionInUserEditScope("set-tool-eraser", W);
        },
        dataTooltip: "set-tool-eraser",
        tooltipOffset: {
          offsetX: 0,
          offsetY: -20
        },
        IconNoRef: jsx(oE, {
          type: "Eraser",
          size: "Small"
        }),
        optimizeForCompactSize: s
      })]
    }), jsx(XI, {}), jsxs(br, {
      disabled: !eg,
      paddingRight: 4,
      paddingLeft: 4,
      children: [jsx("div", {
        className: u()({
          [V]: eg && !ef
        }),
        children: jsx(K0, {
          svg: _$$A2,
          tooltip: ng(3),
          onClick: () => {
            eI("THIN");
          },
          active: ef ? "LOUD" : "NONE",
          isNewSubmenu: !0,
          buttonStyle: eu,
          recordingKey: r && generateRecordingKey(r, "pencil-small-button"),
          tabIndex: -1
        })
      }), jsx("div", {
        className: u()({
          [V]: eg && !eE
        }),
        children: jsx(K0, {
          svg: _$$A,
          tooltip: ng(8),
          onClick: () => {
            eI("THICK");
          },
          active: eE ? "LOUD" : "NONE",
          isNewSubmenu: !0,
          buttonStyle: eu,
          recordingKey: r && generateRecordingKey(r, "pencil-large-button"),
          tabIndex: -1
        })
      })]
    }), jsx(XI, {}), em ? jsxs(Fragment, {
      children: [jsx(br, {
        paddingRight: 8,
        paddingLeft: 8,
        children: _$$B2.map(e => {
          let t = M8(e);
          return jsx(W1, {
            swatchStyle: {
              border: "1px solid rgba(0, 0, 0, 0.2)",
              boxSizing: "border-box",
              boxShadow: "none"
            },
            value: t,
            selectionState: Q === e.image ? "selected" : "unselected",
            onClick: () => {
              Iw(t);
            },
            tooltip: _$$M(e),
            recordingKey: r && generateRecordingKey(r, `washi-tape-pattern.${e.name}`)
          }, e.name);
        })
      }), eT && jsxs(Fragment, {
        children: [jsx(XI, {}), jsx(br, {
          shouldClipAndRoundTopRightCorner: !0,
          children: jsx($n, {
            active: ee ? "LOUD" : "NONE",
            animateCaret: !0,
            ariaLabel: getI18nString("whiteboard.washi_tapes.custom_aria_label"),
            buttonStyle: {
              "--menu-padding-right": "12px",
              marginLeft: "4px",
              padding: "4px 12px 4px 0px"
            },
            caret: "up",
            isNewSubmenu: !0,
            onClick: () => {
              fullscreenValue.updateAppModel({
                currentSelectedProperty: {
                  type: NodePropertyCategory.STROKE_PRESET,
                  indices: [0]
                }
              });
              Fullscreen?.uploadPaintImage("NORMAL", 1);
              et(!0);
            },
            onMouseEnter: () => {
              en(!0);
            },
            onMouseLeave: () => {
              en(!1);
            },
            recordingKey: r && generateRecordingKey(r, "washi-tape-pattern-upload"),
            tabIndex: -1,
            children: !Q || ee || _$$B2.map(e => e.image).includes(Q) ? jsx(HL, {
              value: WW,
              swatchStyle: {
                boxShadow: ee ? "0px 0px 0px 1px rgba(225, 255, 255, 0.8) inset" : "0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset"
              },
              tooltip: getI18nString("whiteboard.washi_tapes.custom"),
              fallbackSvg: xY
            }) : jsx(Fragment, {
              children: jsx(YR, {
                imagePaint: washiTapePaint,
                background: "light",
                size: "medium",
                selectionState: "selected",
                hovered: er
              })
            })
          })
        })]
      })]
    }) : ep && s ? jsx(br, {
      disabled: !ep,
      shouldClipAndRoundTopRightCorner: !0,
      children: jsx(_$$v, {
        target: jsx(Qu, {
          currentColor: ep ? ey : void 0,
          paletteType: "base",
          showPopover: M,
          setShowPopover: K,
          alwaysUseCurrentColorInSwatch: !0,
          recordingKey: r && generateRecordingKey(r, "pencil-color-more")
        }),
        color: ey || blackColor,
        isOpen: ep && M,
        onColorChange: eS,
        onClose: () => {
          K(!1);
        },
        theme: "light",
        analytics: {
          name: "Drawing Tool Change Color",
          properties: {
            tool: DesignGraphElements[e]
          }
        },
        recordingKey: r && generateRecordingKey(r, "customColorPopover"),
        alignment: "right"
      })
    }) : function () {
      let t = ep ? ey : eh ? eb : void 0;
      return jsxs(Fragment, {
        children: [jsxs(br, {
          disabled: e_,
          paddingRight: 8,
          paddingLeft: 8,
          children: [jsx(_$$V, {
            loadingPaletteCircleCount: ew
          }), !eO && eC.map((t, i) => {
            let a = colorCSSManipulatorInstance.format(t);
            let s = eA ? AF(i, ex) : V_(t, ex);
            return jsx(cd, {
              size: "medium",
              value: t,
              selectionState: e_ || em ? "unselected" : (eh ? a === colorCSSManipulatorInstance.format(eb) : a === colorCSSManipulatorInstance.format(ey)) ? "selected" : "unselected",
              onClick: () => {
                eS(t);
                fullscreenHandler.trackFromFullscreen("Drawing Tool Change Color", {
                  source: "default",
                  color: colorCSSManipulatorInstance.format(t),
                  tool: DesignGraphElements[e]
                });
              },
              paletteType: ex,
              background: "light",
              tooltip: s,
              recordingKey: r && generateRecordingKey(r, `pencil-color-${a}`)
            }, a + "-" + i);
          }), jsx(_$$s, {
            colorPalettePickerState: {
              openColorPalettePicker,
              closeColorPalettePicker,
              isColorPalettePickerOpen: $
            },
            paletteType: ex,
            recordingKey: generateRecordingKey(r || "color-palettes", "pencil") || "pencil",
            disabled: eO,
            isInDltSubmenu: !0
          })]
        }), jsx(XI, {}), jsx(br, {
          disabled: !ep,
          shouldClipAndRoundTopRightCorner: !0,
          children: jsx(_$$v, {
            target: jsx(Qu, {
              currentColor: t,
              paletteType: ex,
              showPopover: M,
              setShowPopover: K,
              recordingKey: r && generateRecordingKey(r, "pencil-color-more")
            }),
            color: t || blackColor,
            isOpen: ep && M,
            onColorChange: eS,
            onClose: () => {
              K(!1);
            },
            theme: "light",
            analytics: {
              name: "Drawing Tool Change Color",
              properties: {
                tool: DesignGraphElements[e]
              }
            },
            recordingKey: r && generateRecordingKey(r, "customColorPopover")
          })
        })]
      });
    }()]
  });
});
export function $$Y1({
  onClick: e,
  toolType: t,
  recordingKey: r,
  isSelected: i,
  dataTooltip: a,
  tooltipOffset: o,
  color: l,
  IconNoRef: d,
  optimizeForCompactSize: c,
  forIllustration: u = !1
}) {
  return jsx("div", {
    className: c ? "dlt_drawing_tool_submenu--submenuToolButtonCompactSize--9aaAT" : "dlt_drawing_tool_submenu--submenuToolButton--kDrij",
    onClick: e,
    children: jsx(_$$I, {
      toolType: t,
      recordingKey: r,
      isSelected: i,
      onClick: e,
      inTabOrder: !1,
      "data-tooltip": a,
      "data-tooltip-type": KindEnum.LOOKUP,
      tooltipOffset: o,
      hasOpenSubmenu: !1,
      children: e => jsx(_$$s2, {
        toolType: t,
        color: "",
        isSelected: i,
        onTap: noop,
        IconNoRef: d,
        isDrawingSubmenuTool: !0,
        isHovered: e,
        hoverOffsetAmount: u ? "ILLUSTRATION_DRAWING" : "DRAWING_SUBMENU",
        forIllustration: u
      })
    })
  });
}
export const i = $$K0;
export const I = $$Y1;