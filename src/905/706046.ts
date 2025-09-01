export function $$n4(e) {
  return e.sort((e, t) => e.position - t.position);
}
export function $$r2(e) {
  return e.sort((e, t) => (e.position || 0) - (t.position || 0));
}
export function $$a1(e) {
  return {
    color: e.color,
    colorVar: {
      value: {
        colorValue: e.color
      },
      dataType: "COLOR",
      resolvedDataType: "COLOR"
    },
    position: e.position
  };
}
export function $$s3(e, t) {
  let i = (e, t, i) => e * (1 - i) + t * i;
  if (t <= e[0].position) return e[0]?.color;
  if (t >= e[e.length - 1].position) return e[e.length - 1]?.color;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    let a = e[n + 1];
    if (t > r.position && t <= a.position) {
      let e = (t - r.position) / (a.position - r.position);
      return {
        r: i(r.color.r, a.color.r, e),
        g: i(r.color.g, a.color.g, e),
        b: i(r.color.b, a.color.b, e),
        a: i(r.color.a, a.color.a, e)
      };
    }
  }
  return null;
}
export function $$o0(e) {
  return ("GRADIENT_ANGULAR" === e.type || "GRADIENT_DIAMOND" === e.type || "GRADIENT_LINEAR" === e.type || "GRADIENT_RADIAL" === e.type) && !!e.stopsVar?.some(e => e.colorVar && "ALIAS" === e.colorVar.dataType);
}
export const U2 = $$o0;
export const Ug = $$a1;
export const Zb = $$r2;
export const _R = $$s3;
export const oV = $$n4;