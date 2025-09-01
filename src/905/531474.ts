export function $$n0(e) {
  return function (e) {
    for (let t = e.fills.length - 1; t >= 0; t--) {
      let i = e.fills[t];
      if (i && "IMAGE" === i.type && i.visible) return [t, i];
    }
  }(e)?.[1];
}
export const R = $$n0;