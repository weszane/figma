import { jsx, jsxs } from "react/jsx-runtime";
import { B } from "../905/714743";
import { q } from "../905/600041";
import { y } from "../905/171275";
import { tx } from "../905/303541";
import { A as _$$A } from "../6828/255111";
import { A as _$$A2 } from "../6828/94342";
export function $$c0({
  borderRadius: e,
  noBorder: t,
  size: i
}) {
  let c = jsx(B, {
    svg: _$$A,
    className: "x3xsitq",
    svgWidth: "50px",
    svgHeight: "50px"
  });
  let u = jsxs("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k",
    children: [jsx(B, {
      svg: _$$A2,
      className: "xayg1ih",
      svgWidth: "100px",
      svgHeight: "100px"
    }), jsx("div", {
      className: "x1n0bwc9 x9otpla",
      children: tx("tile.offline_file_tile.offline_created_file")
    })]
  });
  return jsx(q, {
    borderRadius: e,
    noBorder: t,
    backgroundColor: "var(--color-bg-secondary)",
    children: i === y.SMALL ? c : u
  });
}
export const A = $$c0;