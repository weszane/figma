import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Pt } from "../figma_app/806412";
import { Vq, c$, wv } from "../figma_app/236327";
import { t as _$$t } from "../905/303541";
function l(e, t) {
  !function (e, t) {
    let i = Object.getOwnPropertyDescriptor(e, "value")?.set;
    let n = Object.getPrototypeOf(e);
    let r = Object.getOwnPropertyDescriptor(n, "value")?.set;
    r && i !== r ? r.call(e, t) : i && i.call(e, t);
  }(e, t);
  let i = new Event("change", {
    bubbles: !0
  });
  e.dispatchEvent(i);
}
export let $$d0 = "variable-binding-context-menu";
export function $$c1({
  inputRef: e,
  isBound: t = !1,
  left: i,
  onClose: d,
  onOpenVariablePicker: c,
  onUnbindVariable: u,
  recordingKey: p,
  top: m
}) {
  let h = t => {
    e?.current && (t.preventDefault(), e.current.focus(), e.current.select(), d());
  };
  let g = t => {
    e?.current && (h(t), navigator.clipboard.writeText(e.current.value));
  };
  let f = useRef(null);
  return t ? jsxs(Vq, {
    ref: f,
    style: {
      top: m,
      left: i,
      position: "fixed"
    },
    closeDropdown: d,
    children: [jsx(c$, {
      onClick: u,
      recordingKey: Pt(p, "detachVariable"),
      children: _$$t("variables.binding_ui.detach_variable_tooltip")
    }), jsx(c$, {
      onClick: c,
      recordingKey: Pt(p, "applyVariable"),
      children: _$$t("fullscreen.properties_panel.apply_variable_ellipses")
    })]
  }) : jsxs(Vq, {
    ref: f,
    style: {
      top: m,
      left: i,
      position: "fixed"
    },
    closeDropdown: d,
    children: [jsx(c$, {
      onClick: t => {
        e?.current && (g(t), l(e.current, ""));
      },
      recordingKey: Pt(p, "cut"),
      children: _$$t("fullscreen_actions.cut")
    }), jsx(c$, {
      onClick: g,
      recordingKey: Pt(p, "copy"),
      children: _$$t("fullscreen_actions.copy")
    }), jsx(c$, {
      onClick: () => {
        navigator.clipboard.readText().then(t => {
          e?.current && (e.current.focus(), l(e.current, t));
          d();
        });
      },
      recordingKey: Pt(p, "paste"),
      children: _$$t("fullscreen_actions.paste")
    }), jsx(c$, {
      onClick: h,
      recordingKey: Pt(p, "selectAll"),
      children: _$$t("fullscreen_actions.select-all")
    }), jsx(wv, {}), jsx(c$, {
      onClick: c,
      recordingKey: Pt(p, "applyVariable"),
      children: _$$t("fullscreen.properties_panel.apply_variable_ellipses")
    })]
  });
}
export const v = $$d0;
export const G = $$c1;