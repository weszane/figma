import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { throwTypeError } from "../figma_app/465776";
import { g as _$$g } from "../905/757007";
import { generateRecordingKey } from "../figma_app/878298";
import { KeyCodes, ModifierKeyCodes } from "../905/63728";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { x as _$$x } from "../905/312412";
import { P } from "../905/994270";
import { cq } from "../905/794154";
import { hm, zQ } from "../905/487011";
import { o2, sd, Cq } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { kz, F1 } from "../figma_app/171177";
import { B } from "../905/222272";
import { y as _$$y } from "../905/236825";
import { z } from "../905/788559";
var $$v2 = (e => (e.REVIEW = "REVIEW", e.PREVIEW = "PREVIEW", e.ACCEPT = "ACCEPT", e.KEEP_IT = "KEEP_IT", e.TRY_AGAIN = "TRY_AGAIN", e.MAKE_CHANGES = "MAKE_CHANGES", e.UNDO = "UNDO", e.UNDO_MAKE_CHANGES = "UNDO_MAKE_CHANGES", e.BACK = "BACK", e))($$v2 || {});
export function $$I0({
  iterateOptions: e,
  children: t,
  content: i,
  recordingKey: r,
  aiTrackingContext: a,
  targets: s,
  stayOpen: l,
  completionString: c,
  debugButtonInternalOnly: u,
  showFeedbackInline: p = !1,
  onDismiss: m,
  showFeedback: h = !0
}) {
  let {
    onDismiss,
    toastRef,
    hasAcceptButton
  } = x({
    iterateOptions: e,
    aiTrackingContext: a,
    targets: s,
    stayOpen: l,
    onDismiss: m
  });
  let v = !!a && h;
  let I = !!i;
  let w = (() => {
    if ((v || I) && (!p || I || 0 !== e.length)) return jsx("div", {
      className: cssBuilderInstance.flex.wFull.flexColumn.gap8.$,
      children: jsxs(B, {
        fullWidth: !0,
        justify: "space-between",
        gap: 4,
        children: [v && jsx(z, {
          aiTrackingContext: a
        }, "feedbackButtons") || jsx("div", {}), E(e, a, r)]
      })
    });
  })();
  return jsx(_$$y, {
    extra: w,
    content: i,
    onDismiss: hasAcceptButton ? void 0 : onDismiss,
    recordingKey: generateRecordingKey(r, "toast"),
    ref: toastRef,
    shouldAutoFocus: !0,
    children: jsx(B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: jsxs(B, {
        gap: 4,
        align: "center",
        children: [jsx(S, {
          completionString: c
        }), jsx("span", {
          className: cssBuilderInstance.textBodyMedium.colorTextSecondary.ml4.$,
          children: t
        }), w ? void 0 : p && v && !I ? jsx(z, {
          aiTrackingContext: a
        }, "feedbackButtons") : E(e, a, r), u]
      })
    })
  });
}
let E = (e, t, i) => jsx(B, {
  children: e.map(e => jsx(_$$r, {
    onAction: i => {
      switch (t && hm({
        ...t,
        ...zQ(i),
        status: o2.COMPLETED,
        interaction: function (e) {
          switch (e) {
            case "BACK":
            case "TRY_AGAIN":
              return sd.RETRY;
            case "MAKE_CHANGES":
              return sd.MAKE_CHANGES;
            case "UNDO":
              return sd.UNDO;
            case "PREVIEW":
            case "REVIEW":
              return sd.REVIEW;
            case "KEEP_IT":
            case "ACCEPT":
              return sd.ACCEPT;
            case "UNDO_MAKE_CHANGES":
              return sd.UNDO_MAKE_CHANGES;
            default:
              throwTypeError(e);
          }
        }(e.type)
      }), e.type) {
        case "KEEP_IT":
        case "TRY_AGAIN":
        case "MAKE_CHANGES":
        case "UNDO":
        case "REVIEW":
        case "PREVIEW":
        case "ACCEPT":
        case "UNDO_MAKE_CHANGES":
        case "BACK":
          e.callback();
          break;
        default:
          throwTypeError(e.type);
      }
    },
    variant: e.isPrimary ? "primary" : "secondary",
    shortcuts: e.isPrimary ? [{
      key: KeyCodes.ENTER,
      modifier: [ModifierKeyCodes.META]
    }] : e.shortcuts,
    recordingKey: generateRecordingKey(i, e.type),
    children: function (e) {
      switch (e.type) {
        case "TRY_AGAIN":
          return getI18nString("ai.try_again");
        case "MAKE_CHANGES":
          return getI18nString("ai.make_changes");
        case "UNDO":
          return getI18nString("ai.undo");
        case "REVIEW":
          return getI18nString("ai.review");
        case "KEEP_IT":
          return getI18nString("ai.keep_it");
        case "ACCEPT":
          return getI18nString("ai.accept");
        case "PREVIEW":
          return getI18nString("ai.preview");
        case "UNDO_MAKE_CHANGES":
          return getI18nString("ai.undo_make_changes");
        case "BACK":
          return getI18nString("ai.back");
        default:
          throwTypeError(e.type);
      }
    }(e)
  }, e.type))
});
function x({
  iterateOptions: e,
  aiTrackingContext: t,
  targets: i,
  stayOpen: n,
  onDismiss: a
}) {
  let {
    close
  } = cq();
  P(!!n);
  let o = !!e.find(e => ["ACCEPT", "KEEP_IT"].includes(e.type));
  let d = useCallback(() => {
    void 0 !== t && hm({
      ...t,
      status: o2.COMPLETED,
      interaction: sd.DISMISS,
      interaction_type: Cq.BUTTON_CLICK
    });
    close();
    a?.();
  }, [close, t, a]);
  let c = useRef(null);
  let f = useCallback(() => {
    void 0 !== t && hm({
      ...t,
      status: o2.COMPLETED,
      interaction: sd.DISMISS,
      interaction_type: Cq.AUTO
    });
  }, [t]);
  _$$x({
    ref: c,
    targets: i || [],
    onClose: f,
    disabled: !i
  });
  kz(KeyCodes.ESCAPE, () => {
    t && hm({
      ...t,
      status: o2.COMPLETED,
      interaction: sd.DISMISS,
      interaction_type: Cq.KEYBOARD_SHORTCUT,
      keyboard_shortcut: F1({
        key: KeyCodes.ESCAPE
      })
    });
    close();
  }, !o);
  return {
    onDismiss: d,
    toastRef: c,
    hasAcceptButton: o
  };
}
function S({
  completionString: e
}) {
  return jsxs(Fragment, {
    children: [jsx(_$$g, {
      style: {
        "--color-icon": "var(--color-icon-success)"
      }
    }), jsx("span", {
      className: cssBuilderInstance.textBodyMediumStrong.$,
      "data-testid": "iterateDoneText",
      children: e || renderI18nText("ai.done")
    })]
  });
}
export function $$w1({
  iterateOptions: e,
  content: t,
  recordingKey: i,
  aiTrackingContext: r,
  targets: a,
  stayOpen: s,
  completionString: l,
  onDismiss: d
}) {
  let {
    onDismiss,
    toastRef
  } = x({
    iterateOptions: e,
    aiTrackingContext: r,
    targets: a,
    stayOpen: s,
    onDismiss: d
  });
  let p = !!r;
  return jsx(_$$y, {
    content: t,
    onDismiss,
    recordingKey: generateRecordingKey(i, "toast"),
    ref: toastRef,
    shouldAutoFocus: !0,
    children: jsxs(B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsx(S, {
        completionString: l
      }), p && jsx("div", {
        className: "x98rzlu x78zum5 x13a6bvl",
        children: jsx(z, {
          aiTrackingContext: r
        }, "feedbackButtons")
      })]
    })
  });
}
export const Oq = $$I0;
export const R = $$w1;
export const is = $$v2;