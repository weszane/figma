import { LayoutTabType, NoneColor } from "../figma_app/763686";
import { Uz } from "../905/63728";
import { fullscreenValue } from "../figma_app/455680";
import { f7 } from "../figma_app/896988";
import { x$ } from "../figma_app/385874";
import { zk } from "../figma_app/198712";
import { $ } from "../figma_app/297778";
import { Ug } from "../905/706046";
export function $$u2(e, t, i, n, r) {
  let a = x$(t);
  if (!a || !(i.index > a.stops.length - 1) && -1 !== i.index) {
    if (a && a.stops.length) {
      let t = a.stops.slice();
      let s = t[i.index];
      t[i.index] = {
        color: e,
        position: s.position
      };
      let o = 0 === a.stopsVar.length ? a.stops.map(Ug) : a.stopsVar.slice();
      let l = o[i.index];
      l && (o[i.index] = {
        colorVar: {
          value: {
            colorValue: e
          },
          dataType: "COLOR",
          resolvedDataType: "COLOR"
        },
        color: e,
        position: l.position
      });
      n({
        ...a,
        stops: t,
        stopsVar: o
      }, r);
    } else {
      let i = e.a;
      n($({
        ...t,
        color: e,
        opacity: i
      }), r);
    }
  }
}
export function $$p0(e, t, i, o, d) {
  let c = e.event.keyCode;
  if (c === Uz.BACKSPACE || c === Uz.DELETE) {
    if (i === LayoutTabType.GRADIENT) f7(e.event);else {
      let e = t.stops.slice();
      o && o.index >= 0 && e.length > 1 && ((e = e.slice()).splice(o.index, 1), fullscreenValue.updateAppModel({
        currentSelectedGradientStop: {
          type: NoneColor.COLOR,
          index: 0
        }
      }), d({
        ...t,
        stops: e
      }, zk.YES));
    }
    e.accept();
  }
}
export function $$m1() {
  return !0;
}
export const T_ = $$p0;
export const X7 = $$m1;
export const n8 = $$u2;