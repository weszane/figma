import { jsx } from "react/jsx-runtime";
import { bL, QB } from "../905/174266";
import $$a from "classnames";
import { ErrorEnum } from "../905/962579";
var s = $$a;
let l = "flash_view--flashes--laY71";
export function $$d0({
  flashes: e
}) {
  let t = Object.keys(e).map(e => parseInt(e)).sort((e, t) => e - t);
  return jsx("div", {
    className: l,
    children: Array.from(t.entries()).map(([t, i]) => {
      let r = e[i];
      return r ? jsx("div", {
        children: jsx("div", {
          className: s()({
            "flash_view--flashError--WOTRi flash_view--flash--B2pbZ text--_negText--j9g-L": r.status === ErrorEnum.ERROR,
            "flash_view--flash--B2pbZ text--_negText--j9g-L": r.status === ErrorEnum.DEFAULT
          }),
          children: r.message
        })
      }, `flash-${i}`) : null;
    })
  });
}
export function $$c1({
  flashes: e
}) {
  let t = Object.keys(e).map(e => parseInt(e)).sort((e, t) => e - t);
  return jsx("div", {
    className: l,
    children: Array.from(t.entries()).map(([t, i]) => {
      let a = e[i];
      return a ? jsx("div", {
        className: "flash_view--flashPositioner--njLSF",
        children: jsx(bL, {
          variant: a.status === ErrorEnum.ERROR ? "danger" : "default",
          children: jsx(QB, {
            children: a.message
          })
        })
      }, `flash-${i}`) : null;
    })
  });
}
export const a = $$d0;
export const J = $$c1;