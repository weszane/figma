import { Ez5, nQ7 } from "../figma_app/763686";
import { md, fp } from "../figma_app/27355";
import { l as _$$l } from "../905/745972";
import { _ as _$$_ } from "../figma_app/658134";
import { S } from "../figma_app/109947";
import { jw } from "../figma_app/327588";
import { Lk, x as _$$x } from "../figma_app/639711";
import { dP, qw } from "../figma_app/740163";
import { ut } from "../figma_app/84367";
import { C as _$$C } from "../figma_app/859828";
export function $$$$h0() {
  let {
    windowInnerWidth
  } = _$$l();
  let t = _$$C()?.bottomRightToolsNode;
  let i = md(S);
  let h = dP();
  let m = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let f = jw();
  let [g] = fp(Lk);
  let _ = g === _$$x.ASSETS && f && m === nQ7.SELF;
  let x = m === nQ7.DESIGN;
  let y = qw();
  let b = _ ? _$$_ : h + _$$_;
  let C = ut(Ez5?.uiState().showPropertiesPanel, !1);
  let v = x && C ? y : 0;
  if (t) {
    let r = t.getBoundingClientRect();
    let n = windowInnerWidth - b - v;
    let a = i?.current?.getBoundingClientRect().width || 207;
    let s = b + (n - a) / 2 + a + 12 - r.left;
    s > 0 && (v += 2 * s);
  }
  return {
    leftOffset: b,
    rightOffset: v
  };
}
export const h = $$$$h0;