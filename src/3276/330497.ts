import { jsx } from "react/jsx-runtime";
import { useDispatch, useStore, useSelector } from "react-redux";
import { $n } from "../905/521428";
import { E } from "../905/632989";
import { getI18nString } from "../905/303541";
import { jT, Pp } from "../905/989765";
import { ds } from "../figma_app/314264";
import { q5 } from "../figma_app/516028";
import { h as _$$h } from "../figma_app/275739";
export function $$u0(e) {
  let t = useDispatch();
  let n = useStore();
  let u = useSelector(e => e.voice.showWidget);
  let p = q5();
  let h = useSelector(t => !!t.voice.activeCall[e.fileKey]);
  let f = !!p && !!h;
  let _ = {
    onClick: async () => {
      e.hidePopover && e.hidePopover();
      u && f ? u && t(jT()) : (ds("Context Viewed", e.fileKey, n.getState(), {
        name: "should-close-open-audio-nux"
      }), await _$$h.createInstance(), f && ds("voice_widget_minimized_toggle", e.fileKey, n.getState(), {
        minimized: !1
      }), t(Pp(!0)));
    },
    "data-tooltip-show-below": !0,
    "data-dropdown-tooltip": e["data-tooltip"],
    "data-tooltip-type": e["data-tooltip-type"],
    "data-tooltip": e["data-tooltip"],
    "aria-label": getI18nString("collaboration.voice.start_conversation"),
    "data-fullscreen-intercept": !0
  };
  if (e.isJoinWidget) {
    let {
      onClick,
      "aria-label": n,
      ...a
    } = _;
    return jsx("div", {
      "data-onboarding-key": e["data-onboarding-key"],
      children: jsx($n, {
        onClick,
        "aria-label": n,
        variant: "signup",
        htmlAttributes: {
          ...a
        },
        children: e.children
      })
    });
  }
  return jsx(E, {
    ..._,
    className: e.className,
    children: e.children
  });
}
export const K = $$u0;
