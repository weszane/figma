import { d4 } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { getInitialOptions } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { tB, tS } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { F$0, ErZ, HdA, oBY, D2i, Xon, nlH } from "../figma_app/43951";
import { n as _$$n } from "../905/347702";
let $$u5 = _$$n(e => {
  let t = tB({
    openFile: e.openFile ?? null
  });
  return t?.canAccessFullDevMode ?? !0;
});
let $$p0 = _$$n(e => {
  let t = tB({
    openFile: e.openFile ?? null
  });
  return t?.canAccessDevModeEntryPoint ?? !0;
});
export function $$_2() {
  return d4($$u5);
}
export function $$h1() {
  return d4($$p0);
}
export function $$m3() {
  let e = iZ();
  let t = tS();
  let r = t === getInitialOptions().dev_mode_demo_file_key;
  return !!getFeatureFlags().logged_out_dev_mode_demo_file && !!t && !e && r;
}
export function $$g6() {
  let e = tS();
  let t = Rs(F$0, {
    key: e || ""
  }, {
    enabled: !!e
  });
  return t.data?.file && "error" !== t.data.file.status ? t.data?.file?.data?.hasPermission ?? !1 : e === getInitialOptions().dev_mode_demo_file_key;
}
export function $$f4(e) {
  Rs(ErZ, {
    key: e
  });
  Rs(HdA, {
    key: e
  });
  Rs(oBY, {
    key: e
  });
  Rs(D2i, {
    key: e
  });
  Rs(Xon, {
    key: e
  });
  Rs(nlH, {
    key: e
  });
}
export const Nc = $$p0;
export const U4 = $$h1;
export const _I = $$_2;
export const l7 = $$m3;
export const lF = $$f4;
export const tn = $$u5;
export const xo = $$g6;