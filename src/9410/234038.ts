import { xN } from "../figma_app/492908";
import { oB } from "../figma_app/273493";
import { HD, F_, tK } from "../figma_app/191804";
import { lH, Yx, lg, Dk } from "../figma_app/18582";
import { x as _$$x, c4, gU, oR, Jv } from "../figma_app/234690";
function l(e) {
  let t = new Set();
  let i = new Set();
  e.forEach(e => {
    7 === e.length ? t.add(e) : i.add(e);
  });
  return [Array.from(t), Array.from(i)];
}
export function $$d2(e, t) {
  let {
    bg,
    content
  } = t;
  let c = HD(e) ? lH.DARK : lH.LIGHT;
  let u = F_(e);
  let p = oB(e);
  let h = bg.filter(e => e !== u);
  let [m, f] = l(h);
  let g = function (e) {
    let t = {};
    e.forEach(e => {
      t[e] = (t[e] || 0) + 1;
    });
    return t;
  }(h);
  let _ = m.sort((e, t) => g[t] - g[e]);
  let x = _.find(e => {
    let t = tK(e);
    if (!t) return !1;
    let i = oB(t);
    return _$$x(i.l, c) && !xN(i.l, p.l, .12);
  });
  if (x) return x;
  let [y, b] = l(content);
  let C = y.find(e => {
    let t = tK(e);
    return t && Yx(oB(t).l, lg.CONTENT);
  });
  if (C) return C;
  if (_$$x(p.l, c) && !c4(p.l)) return u;
  let v = f.sort((e, t) => g[t] - g[e]).find(e => {
    let t = tK(e);
    if (!t) return !1;
    let i = oB(t);
    return _$$x(i.l, c);
  });
  return v ? v : b.find(e => {
    let t = tK(e);
    return t && Yx(oB(t).l, lg.CONTENT);
  }) || (_.length ? _[0] : y.length ? y[0] : u);
}
export function $$c0(e) {
  let t = {};
  if (!e) return t;
  let i = [e];
  for (; i.length > 0;) {
    let e = i.pop();
    if (e) {
      if (e.fills.length > 0) {
        let i = gU(e.fills);
        if (i) {
          let r = oB(i);
          t[e.guid] = {
            s: r.s,
            l: r.l
          };
        }
      } else if (e.strokePaints.data.length > 0) {
        let i = gU(e.strokePaints.data);
        if (i) {
          let r = oB(i);
          t[e.guid] = {
            s: r.s,
            l: r.l
          };
        }
      }
      "childrenNodes" in e && i.push(...e.childrenNodes);
    }
  }
  return t;
}
export function $$u1(e, t, i, r, n, a) {
  e && function e(t, i, r, n) {
    if (t.name.toLowerCase().includes("swatch")) return;
    let a = r[t.guid];
    if (oR({
      node: t,
      getNewColor: i,
      options: {
        ...n,
        modeChanged: !1,
        role: Dk(t),
        originalSL: a
      }
    }), t.childCount) {
      let a = t.fills.some(e => "IMAGE" === e.type);
      let s = gU(t.fills, a ? void 0 : n.parentFillColor);
      t.childrenNodes.forEach(t => {
        e(t, i, r, {
          ...n,
          parentFillColor: s
        });
      });
    }
  }(e, (e, i) => Jv(e, {
    ...i,
    brandColor: t
  }), r, {
    mode: i,
    currentBrandHex: n,
    parentFillColor: a
  });
}
export const N_ = $$c0;
export const l9 = $$u1;
export const tb = $$d2;