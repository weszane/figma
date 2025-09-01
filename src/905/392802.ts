export function $$n0(e, t = !1) {
  if (function (e) {
    try {
      return new URL(e, window.location.href).origin === window.location.origin;
    } catch (e) {
      return !1;
    }
  }(e)) return new Worker(e);
  if (t) throw Error(`Cannot load cross-origin worker ${e}`);
  {
    let t = new Blob([`importScripts("${e}");`], {
      type: "application/javascript"
    });
    return new Worker(URL.createObjectURL(t));
  }
}
export const x = $$n0;