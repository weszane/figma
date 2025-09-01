import { jsxs, jsx } from "react/jsx-runtime";
import { $n } from "../905/521428";
import { Pt } from "../figma_app/806412";
import { TH } from "../figma_app/171177";
import { f7 } from "../905/783179";
export function $$l0({
  variant: e = "primary",
  shortcuts: t,
  onAction: i,
  children: l,
  disabled: d,
  submenuRef: c,
  target: u = null,
  disableKeyboardShortcuts: p,
  recordingKey: m,
  iconPrefix: h
}) {
  TH(t || [], (e, t) => {
    i && !d && (e.preventDefault(), i({
      shortcut: t,
      target: u
    }));
  }, !!i && !p);
  let g = t ? f7(t) : null;
  return jsxs($n, {
    variant: e,
    onClick: () => i?.({
      shortcut: null,
      target: u
    }),
    disabled: d,
    iconPrefix: h,
    recordingKey: Pt(m, "actionButton"),
    ref: c,
    htmlAttributes: {
      "data-testid": "actionButton"
    },
    children: [l, g && jsx($n.Shortcut, {
      children: g
    })]
  });
}
export const r = $$l0;