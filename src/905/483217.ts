import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { MediaQuerySvgComponent } from "../905/331623";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { A } from "../1617/45452";
import { A as _$$A } from "../1617/805095";
import { A as _$$A2 } from "../1617/954184";
import { A as _$$A3 } from "../1617/546131";
var a = r;
let l = "missing_image--error--ol-7J";
export function $$m0({
  error: e = !1
}) {
  return jsx("div", {
    className: a()("missing_image--missingCover--Gz0yP", {
      [l]: e
    }),
    children: jsx(MediaQuerySvgComponent, {
      className: cssBuilderInstance.colorIcon.$,
      svg: A,
      fallbackSvg: _$$A
    })
  });
}
export function $$h1({
  error: e = !1
}) {
  return jsx("div", {
    className: a()("missing_image--missingPlaygroundFile--btzGV", {
      [l]: e,
      "missing_image--ui3--uvb5i": !0
    }),
    children: jsx(MediaQuerySvgComponent, {
      className: cssBuilderInstance.colorIcon.$,
      svg: _$$A2,
      fallbackSvg: _$$A3
    })
  });
}
export const Ek = $$m0;
export const O = $$h1;