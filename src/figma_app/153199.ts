import { wS } from "../vendor/794973";
import { f6 } from "../905/35608";
import { _o } from "../figma_app/262526";
import { A } from "../vendor/978734";
let o = [40, 181, 47, 253];
export async function $$l1(e) {
  if (function (e) {
    for (let t = 0; t < o.length; t++) if (e[t] !== o[t]) return !1;
    return !0;
  }(e)) {
    let t = new A();
    await t.init();
    return t.decode(e);
  }
  return wS(e);
}
export async function $$d0(e) {
  let t = await _o();
  if (f6(e)) {
    let r = new t.ZipReader(new t.Uint8ArrayReader(e));
    for (let e of await r.getEntries()) if ("canvas.fig" === e.filename && e.getData) return e.getData(new t.Uint8ArrayWriter());
  }
  return e;
}
export const BX = $$d0;
export const z1 = $$l1;