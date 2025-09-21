import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { KeyCodes, ModifierKeyCodes } from "../905/63728";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText } from "../905/303541";
import { B } from "../905/969273";
import { _0, PI, sZ } from "../figma_app/948389";
import { useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { handleUrlAction } from "../905/280005";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { _t, d7 } from "../figma_app/632248";
import { cq } from "../905/794154";
import { hm, zQ } from "../905/487011";
import { $J, o2, sd, Cq } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { C as _$$C } from "../905/504203";
import v from "classnames";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { B as _$$B } from "../905/222272";
import { y as _$$y } from "../905/236825";
var I = v;
function x({
  children: e,
  secondaryMessage: t
}) {
  return jsxs("div", {
    className: I()(cssBuilderInstance.wFull.flex.gap4.justifyCenter.itemsCenter.selectNone.textBodyMediumStrong.$, "error--icon--s8H64"),
    children: [jsx(_$$C, {
      style: {
        "--color-icon": "var(--color-icon-danger)"
      }
    }), jsxs("div", {
      className: cssBuilderInstance.flex1.minW0.$,
      children: [e, t && jsx("span", {
        className: cssBuilderInstance.textBodyMedium.colorTextSecondary.ml4.$,
        children: t
      })]
    })]
  });
}
let C = {
  [B.RATE_LIMIT_EXCEEDED]: renderI18nText("ai.error.rate_limited"),
  [B.CONTENT_LENGTH_LIMIT]: renderI18nText("ai.error.content_length_limit"),
  [B.UNSAFE_OR_HARMFUL_CONTENT]: renderI18nText("ai.error.unsafe_or_harmful"),
  [B.GENERIC]: renderI18nText("ai.error.generic"),
  [B.OFFLINE]: renderI18nText("ai.error.offline"),
  [B.METER_EXCEEDED]: renderI18nText("ai.error.generic"),
  [B.NOT_IMPLEMENTED]: renderI18nText("ai.error.not_implemented"),
  [B.NETWORK_ERROR]: renderI18nText("ai.error.network_error"),
  [B.UNCLOSED_TAGS_BENIGN]: renderI18nText("ai.error.generic")
};
export var $$T0 = (e => (e.LEARN_MORE = "LEARN_MORE", e.TRY_AGAIN = "TRY_AGAIN", e.GO_BACK = "GO_BACK", e.OK = "OK", e.BOOST_ANYWAY = "BOOST_ANYWAY", e.SELECT = "SELECT", e))($$T0 || {});
function k({
  button: e,
  recordingKey: t,
  aiTrackingContext: i
}) {
  return jsx(_$$r, {
    recordingKey: t,
    onAction: t => {
      void 0 !== i && hm({
        ...i,
        ...zQ(t),
        iteration_view_type: $J.ERROR,
        status: o2.FAILED,
        interaction: function (e) {
          switch (e) {
            case "TRY_AGAIN":
              return sd.RETRY;
            case "GO_BACK":
              return sd.GO_BACK;
            case "OK":
              return sd.ACCEPT;
            case "LEARN_MORE":
              return sd.LEARN_MORE;
            case "BOOST_ANYWAY":
              return sd.BOOST_ANYWAY;
            case "SELECT":
              return sd.SELECT;
            default:
              throwTypeError(e);
          }
        }(e.type)
      });
      e.callback();
    },
    variant: e.isPrimary ? "primary" : "secondary",
    shortcuts: e.isPrimary ? [{
      key: KeyCodes.ENTER,
      modifier: [ModifierKeyCodes.META]
    }] : void 0,
    children: function (e) {
      switch (e.type) {
        case "TRY_AGAIN":
          return renderI18nText("ai.try_again");
        case "GO_BACK":
          return renderI18nText("ai.go_back");
        case "OK":
          return renderI18nText("ai.ok");
        case "LEARN_MORE":
          return renderI18nText("ai.learn_more");
        case "BOOST_ANYWAY":
          return renderI18nText("image_ai.upscale_image.image_already_max_upscaled_error.boost_anyway");
        case "SELECT":
          return renderI18nText("image_ai.image_modification.select");
        default:
          throwTypeError(e.type);
      }
    }(e)
  }, e.type);
}
export function $$R1({
  buttons: e,
  customMessage: t,
  error: i,
  extra: a,
  aiTrackingContext: s,
  onDismiss: d,
  recordingKey: y,
  secondaryMessage: b
}) {
  let {
    close
  } = cq();
  let I = function ({
    error: e,
    customMessage: t
  }) {
    if (_0(e)) {
      let t = PI(e);
      return t ? renderI18nText("ai.limit_reached", {
        resetDate: t
      }) : renderI18nText("ai.error.generic");
    }
    if (t) return t;
    let i = sZ(e);
    if (i in C) return C[i];
  }({
    error: i,
    customMessage: t
  });
  let E = function ({
    error: e,
    buttons: t
  }) {
    let i = function () {
      let e = useDispatch();
      return useCallback(() => {
        let t = getFeatureFlags().ai_ga ? _t : d7;
        handleUrlAction(t) || e(setupHyperlinkHandler({
          rawInput: t
        }));
      }, [e]);
    }();
    return _0(e) ? [{
      type: "LEARN_MORE",
      callback: i
    }] : t;
  }({
    error: i,
    buttons: e
  });
  let T = useCallback(() => {
    void 0 !== s && hm({
      ...s,
      iteration_view_type: $J.ERROR,
      status: o2.FAILED,
      interaction: sd.DISMISS,
      interaction_type: Cq.BUTTON_CLICK
    });
    d ? d() : close();
  }, [s, close, d]);
  return jsx(_$$y, {
    onDismiss: T,
    extra: a,
    dataTestId: "errorView",
    recordingKey: generateRecordingKey(y, "toast"),
    shouldAutoFocus: !0,
    children: jsxs(_$$B, {
      justify: "space-between",
      align: "center",
      fullWidth: !0,
      children: [jsx(x, {
        secondaryMessage: b,
        children: I
      }), jsx(_$$B, {
        children: E && E.map(e => jsx(k, {
          recordingKey: generateRecordingKey(y, e.type),
          button: e,
          aiTrackingContext: s
        }, e.type))
      })]
    })
  });
}
export const f = $$T0;
export const E = $$R1;