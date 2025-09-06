import { jsxs, jsx } from "react/jsx-runtime";
import { f as _$$f } from "../905/167712";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { y as _$$y } from "../1156/673497";
import { getI18nString } from "../905/303541";
import { PM } from "../1156/108847";
import { YD } from "../figma_app/690664";
import { jT } from "../figma_app/302802";
export function $$p0({
  openText: e,
  hideText: t,
  children: n,
  asLargeVariant: p
}) {
  let [u, h] = useAtomValueAndSetter(YD);
  let [m] = jT();
  let [x] = PM();
  let g = m?.filter(e => "error" === e.type);
  let y = x.filter(e => "error" === e.level);
  let f = g && g.length > 0 || y && y.length > 0;
  let _ = u ? t : e;
  let b = f ? getI18nString("figmake.toolbar.console_drawer_button.error_indicator_a11y_description") : "";
  let v = jsxs("div", {
    className: "x1n2onr6",
    children: [f && jsx("div", {
      className: "x10l6tqk xndqk7f x1pzoy33 x51ohtg xqu0tyb x16rqkct xxvmw7z x1ml4hsw"
    }), n]
  });
  let I = p ? _$$y : _$$f;
  return jsx(I, {
    "aria-description": b,
    "aria-label": _,
    checked: u,
    htmlAttributes: {
      "data-tooltip": _,
      "data-tooltip-type": "text"
    },
    offIcon: v,
    onChange: () => h(!u),
    onIcon: v,
    recordingKey: "toggleConsoleDrawerButton",
    variant: "highlighted"
  });
}
export const r = $$p0;