import { d4 } from "../vendor/514228";
import { u4 } from "../figma_app/991591";
import { mW } from "../figma_app/797994";
import { PE } from "../figma_app/251115";
import { sO } from "../figma_app/21029";
import { wl } from "../figma_app/835688";
export function $$d0() {
  let e = sO();
  let t = function () {
    let {
      isSlidesAiEnabled
    } = u4();
    let t = function () {
      let {
        isSlidesAiEnabled: _isSlidesAiEnabled
      } = u4();
      let t = PE();
      return _isSlidesAiEnabled && t;
    }();
    let i = d4(e => e.userFlags);
    let o = mW(i, wl);
    return isSlidesAiEnabled && t && o;
  }();
  return e && !t;
}
export const Os = $$d0;