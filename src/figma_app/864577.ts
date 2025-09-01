import { jsx } from "react/jsx-runtime";
import { h } from "../905/270045";
import { S as _$$S } from "../905/274480";
import { B } from "../905/714743";
import { pX, NL, kv } from "../figma_app/708115";
import { A } from "../svg/759533";
import { A as _$$A } from "../svg/522905";
import { A as _$$A2 } from "../svg/912436";
export function $$u1(e) {
  return e.checked ? e.disabled ? jsx(B, {
    className: pX,
    svg: _$$A2
  }) : jsx(B, {
    className: NL,
    svg: _$$A
  }) : jsx(B, {
    svg: A
  });
}
export function $$p0(e) {
  let t = jsx(h, {
    children: e.label
  });
  return jsx("div", {
    className: kv,
    children: jsx(_$$S, {
      checked: e.checked,
      disabled: e.disabled,
      label: t
    })
  });
}
export const P = $$p0;
export const S = $$u1;