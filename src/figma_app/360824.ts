import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, forwardRef, useRef, useState, useCallback } from "react";
import { useStore } from "react-redux";
import { IconButton } from "../905/443068";
import { Button } from "../905/521428";
import { A as _$$A } from "../905/593436";
import { C as _$$C } from "../905/520159";
import { A as _$$A2 } from "../905/251970";
import { stylex } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import h from "classnames";
import { useSingleEffect } from "../905/791079";
import { KeyCodes, getModifierBitmask, ModifierKeyCodes } from "../905/63728";
import { useHandleChangeEvent, generateRecordingKey } from "../figma_app/878298";
import { RecordingScrollContainer } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { jsFullscreenPreventEventCapture } from "../figma_app/8833";
import { trackFileEvent } from "../figma_app/314264";
import { C as _$$C2 } from "../figma_app/523506";
import { z } from "../905/654860";
import { y as _$$y } from "../905/263077";
import { useNavigationStack } from "../905/794154";
import { SX, Q0 } from "../905/487011";
import { AIActionMode } from "../905/278499";
import { ActionButton } from "../905/189361";
import { r as _$$r2 } from "../figma_app/175364";
import { y as _$$y2 } from "../figma_app/13082";
import { qI, kz } from "../figma_app/171177";
import { FlexBox } from "../905/222272";
import { o as _$$o } from "../905/40561";
import { m as _$$m } from "../905/685098";
var m = h;
let $$j0 = 24;
let $$U1 = 96;
export function $$B7() {
  return jsx("div", {
    className: cssBuilderInstance.colorBgTertiary.bRadius5.font11.h16.fontMedium.flex.itemsCenter.px4.$,
    children: renderI18nText("whiteboard.ai_modal.hint_tab")
  });
}
export function $$G6({
  promptHistory: e,
  onChange: t,
  textAreaRef: r
}) {
  let a = useMemo(() => {
    let t = [];
    e.length > 0 && (t.push({
      type: "header",
      text: getI18nString("first_draft.prompt_history_header")
    }), t.push(...e.map(e => ({
      type: "option",
      value: e,
      text: e
    }))));
    return t;
  }, [e]);
  return jsx(_$$r2, {
    displayAboveTarget: !0,
    focusContainerOnMount: !0,
    iconAriaLabel: getI18nString("first_draft.prompt_history_label"),
    iconSvg: jsx(_$$A, {
      style: {
        marginLeft: -8,
        marginRight: -8
      }
    }),
    items: a,
    lean: "right",
    maxWidth: 320,
    onSelectedChange: e => {
      t(e);
      r.current?.focus();
    },
    onVisibleChange: e => {
      e || r.current?.focus();
    },
    selected: null
  });
}
export let $$V5 = forwardRef(({
  value: e,
  onChange: t,
  recordingKey: r,
  minLength: a,
  maxLength: s,
  verticalPromptLayout: o,
  height: l,
  maxHeight: d,
  onFocus: c,
  placeholder: u,
  useClose: p = !1,
  suggestion: _,
  ariaLabel: h
}, m) => {
  let T = useRef(null);
  useSingleEffect(() => {
    let e = m?.current;
    e && !c && (e.focus(), e.setSelectionRange(e.value.length, e.value.length), e.addEventListener("keydown", e => {
      e.keyCode === KeyCodes.ENTER && 0 === getModifierBitmask(e) && e.stopPropagation();
    }));
    let t = T.current;
    t && t.scrollToBottom();
  });
  _$$C2(m);
  let I = useHandleChangeEvent(generateRecordingKey(r, "textArea"), "change", e => {
    t(e.currentTarget.value);
  });
  let S = $$z2(o, p);
  return jsx(RecordingScrollContainer, {
    height: l,
    maxHeight: d,
    ref: T,
    children: jsxs("div", {
      className: cssBuilderInstance.grid.borderBox.overflowWrapAnywhere.$,
      style: S,
      children: [jsx("textarea", {
        ref: m,
        "aria-describedby": "textarea-desc",
        className: cssBuilderInstance.resizeNone.borderBox.bgTransparent.overflowHidden.zIndex1.$,
        "data-testid": "textArea",
        maxLength: s,
        minLength: a,
        onChange: I,
        onFocus: c,
        placeholder: u,
        rows: 1,
        style: {
          gridArea: "1 / 1 / 2 / 2"
        },
        value: e
      }), jsx("span", {
        id: "textarea-desc",
        className: "x1s85apg",
        "aria-label": h,
        role: "form",
        children: _
      }), jsx("div", {
        className: cssBuilderInstance.preWrap.invisible.borderBox.$,
        style: {
          gridArea: "1 / 1 / 2 / 2"
        },
        children: function (e) {
          return e.endsWith("\n") ? e + "\u200B" : e;
        }(e)
      })]
    })
  });
});
export function $$H3({
  action: e,
  value: t,
  onChange: r,
  suggestion: l,
  suggestionPills: u = [],
  promptHistory: _ = [],
  disableAutoComplete: h = !1,
  recordingKey: g,
  onBack: y,
  featureNameForInstrumentation: A,
  refocusToInput: w = !1,
  minLength: O,
  maxLength: R,
  topNavContent: L,
  bottomContent: k,
  growVertically: M,
  width: H,
  textAreaRef: W,
  useClose: K = !1,
  ariaLabel: Y
}) {
  let $ = useRef(null);
  let X = W || $;
  let q = l && t !== l && l.startsWith(t);
  let J = !h && q;
  let Z = l?.slice(t.length) || "";
  let {
    isRoot,
    pop
  } = useNavigationStack();
  let et = !(t.length > 0 || k);
  let er = et && u.length > 0;
  let en = getFeatureFlags().first_draft_prompt_history && _.length > 0 && et;
  let ei = useStore().getState();
  let ea = qI();
  let es = document.activeElement?.tagName === "TEXTAREA";
  kz(KeyCodes.TAB, e => {
    J && (!ea || es) && (e.preventDefault(), r(l), trackFileEvent("actions_prompt_tab_completed", ei.openFile?.key, ei, {
      feature: A,
      suggestion: l
    }));
  });
  _$$y(t, X);
  z();
  let eo = !!(y || !isRoot) && !K;
  let el = !L;
  let ed = !el;
  w && X.current?.focus();
  let ec = $$z2(el, K);
  return jsxs("div", {
    className: m()(cssBuilderInstance.borderBox.p4.mb8.colorBgSecondary.wFull.flex.flexColumn.bRadius5.relative.$),
    style: styleBuilderInstance.if(ed, styleBuilderInstance.add(styleBuilderInstance.if(M, {
      minHeight: "128px"
    }, {
      height: "128px"
    }))).add(styleBuilderInstance.if(M, {
      width: `${H}px`
    })).$,
    onClick: () => {
      let e = X?.current;
      e && e.focus();
    },
    children: [jsxs("div", {
      className: m()(cssBuilderInstance.flex.relative.overflowHidden.if(ed, cssBuilderInstance.flexColumn).$, jsFullscreenPreventEventCapture),
      style: ed && !M ? {
        height: 128
      } : {},
      children: [(eo || ed) && jsxs("div", {
        className: cssBuilderInstance.h24.flex.flexRow.relative.justifyBetween.$,
        children: [jsx("div", {
          className: cssBuilderInstance.flex.flexRow.gap4.$,
          children: eo && jsx(IconButton, {
            recordingKey: generateRecordingKey(g, "backButton"),
            onClick: y || pop,
            "aria-label": getI18nString("qa.go_back"),
            children: jsx(_$$C, {})
          })
        }), ed && jsxs(Fragment, {
          children: [jsx("div", {
            className: cssBuilderInstance.flex.flexGrow1.$,
            children: L
          }), jsx("div", {
            className: cssBuilderInstance.flex.pr4.$,
            children: jsx(_$$y2, {
              helpUrlVariant: e
            })
          })]
        })]
      }), jsxs("div", {
        className: cssBuilderInstance.flex1.relative.font13.ml8.$,
        style: styleBuilderInstance.add({
          lineHeight: `${$$j0}px`
        }).if(!M, {
          height: `${$$U1}px`
        }).$,
        children: [jsx("div", {
          className: cssBuilderInstance.if(!M, cssBuilderInstance.absolute.top0.left0.right0).$,
          children: jsx($$V5, {
            ref: X,
            ariaLabel: Y,
            height: M ? void 0 : $$U1,
            maxHeight: $$U1,
            maxLength: R,
            minLength: O,
            onChange: r,
            recordingKey: g,
            suggestion: l,
            useClose: K,
            value: t,
            verticalPromptLayout: el
          })
        }), q && jsxs("div", {
          className: m()(cssBuilderInstance.absolute.top0.wFull.selectNone.eventsNone.colorTextTertiary.overflowWrapAnywhere.$, J ? _$$m : ""),
          style: ec,
          children: [jsx("span", {
            className: cssBuilderInstance.invisible.$,
            children: t
          }), jsx("span", {
            className: cssBuilderInstance.$,
            children: Z
          }), J && jsx("span", {
            className: cssBuilderInstance.inlineFlex.itemsCenter.ml4.$,
            children: jsx($$B7, {})
          })]
        }), el && jsxs("div", {
          className: cssBuilderInstance.absolute.flex.flexRow.$,
          style: {
            top: K ? 0 : 4,
            right: K ? 0 : 4
          },
          children: [jsx(_$$y2, {
            helpUrlVariant: e
          }), K && jsx(IconButton, {
            recordingKey: generateRecordingKey(g, "closeButton"),
            onClick: y || pop,
            "aria-label": getI18nString("common.close"),
            children: jsx(_$$A2, {
              style: {
                "--color-icon": "var(--color-icon-secondary)"
              }
            })
          })]
        })]
      })]
    }), (er || en) && jsxs("div", {
      className: m()(cssBuilderInstance.wFull.flex.flexWrap.pre.pr16.gap8.$, cssBuilderInstance.absolute.zIndex1.$, cssBuilderInstance.overflowHidden.$),
      style: {
        bottom: 8,
        left: 8,
        height: 24
      },
      children: [en && jsx($$G6, {
        promptHistory: _,
        onChange: r,
        textAreaRef: X
      }), er && u.map((e, t) => jsx(Button, {
        variant: "secondary",
        onClick: () => {
          r(e.prompt);
          X.current?.focus();
          A && trackFileEvent("actions_prompt_suggestion_clicked", ei.openFile?.key, ei, {
            feature: A,
            suggestion: e.prompt
          });
        },
        children: e.label
      }, t))]
    }), k && jsx("div", {
      className: m()(cssBuilderInstance.wFull.$),
      children: k
    })]
  });
}
export function $$z2(e, t) {
  return e ? {
    paddingRight: 58 + (t ? 24 : 0),
    paddingLeft: t ? 4 : 0
  } : {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4
  };
}
export function $$W4({
  value: e,
  onChange: t,
  recordingKey: r,
  minLength: a = 1,
  maxLength: s,
  aiTrackingContext: o,
  onRun: l,
  promptHistory: d = []
}) {
  let c = useRef(null);
  z();
  let [p, h] = useState(!1);
  let m = useCallback(() => {
    h(!0);
  }, []);
  let g = _$$o();
  return jsxs("div", {
    className: "xh8yej3",
    children: [jsx("div", {
      className: jsFullscreenPreventEventCapture,
      children: jsxs("div", {
        ...stylex.props(K.prompt(g - 16)),
        children: [d.length > 0 && 0 === e.length && jsx("div", {
          className: "x1kpt5kx",
          children: jsx($$G6, {
            promptHistory: d,
            onChange: t,
            textAreaRef: c
          })
        }), jsx("div", {
          className: "x98rzlu xsgzr2y",
          children: jsx($$V5, {
            ref: c,
            maxHeight: 100,
            maxLength: s,
            minLength: a,
            onChange: t,
            onFocus: m,
            placeholder: getI18nString("fullscreen_actions.edit_image.placeholder"),
            recordingKey: r,
            value: e,
            verticalPromptLayout: !1
          })
        })]
      })
    }), p && jsx(FlexBox, {
      fullWidth: !0,
      justify: "end",
      children: jsx(ActionButton, {
        shortcuts: [{
          key: KeyCodes.ENTER,
          modifier: [ModifierKeyCodes.META]
        }],
        onAction: e => {
          o && SX({
            ...o,
            ...Q0(e),
            interaction: AIActionMode.GENERATE
          });
          l();
        },
        disabled: e.trim().length < a,
        recordingKey: generateRecordingKey(r, "enter"),
        children: renderI18nText("fullscreen_actions.edit_image")
      })
    })]
  });
}
let K = {
  prompt: e => [{
    boxSizing: "x9f619",
    padding: "x9dr4nv",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    marginBottom: "x6drftx",
    backgroundColor: "x1v8gsql",
    maxWidth: null == e ? null : "x10cxd3o",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    position: "x1n2onr6",
    $$css: !0
  }, {
    "--maxWidth": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }]
};
export const $g = $$j0;
export const OL = $$U1;
export const Sg = $$z2;
export const XG = $$H3;
export const aU = $$W4;
export const gr = $$V5;
export const nj = $$G6;
export const qy = $$B7;