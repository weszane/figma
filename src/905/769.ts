import { _o } from "../figma_app/516324";
import { XHR } from "../905/910117";
import { z } from "../905/875422";
var $$s2 = (e => (e[e.IMPORTING_FILES = 0] = "IMPORTING_FILES", e[e.ATTACHING_BRANCH = 1] = "ATTACHING_BRANCH", e[e.SUCCESS = 2] = "SUCCESS", e[e.ERROR = 3] = "ERROR", e))($$s2 || {});
export function $$o3(e, t, i) {
  return XHR.post("/api/files/attach_branch", {
    branch_tip_file_key: e,
    branch_point_file_key: t,
    main_tip_file_key: i
  });
}
export async function $$l0(e) {
  let t = await _o();
  let i = new t.ZipReader(new t.BlobReader(e));
  let r = await i.getEntries();
  let a = r.find(e => "meta.json" === e.filename);
  let s = null;
  let o = null;
  let l = null;
  if (!a || void 0 === a.getData) return;
  let d = JSON.parse(await a.getData(new t.TextWriter()));
  let c = d.branch_file_name;
  let u = d.source_file_name;
  for (let e of r) if (e.getData) try {
    let i = await e.getData(new t.BlobWriter());
    switch (e.filename) {
      case "branch_point.fig":
        s = i;
        break;
      case "branch_tip.fig":
        o = i;
        break;
      case "main_tip.fig":
        l = i;
    }
  } catch (e) {
    break;
  }
  if (s && o && l) return {
    bp: s,
    bt: o,
    mt: l,
    branchFileName: c,
    sourceFileName: u
  };
}
export function $$d1(e, t) {
  e.dispatch(z({
    name: `${t.branchFileName} (branch point)`,
    blob: t.bp
  }));
  e.dispatch(z({
    name: `${t.sourceFileName} (main tip)`,
    blob: t.mt
  }));
  e.dispatch(z({
    name: `${t.branchFileName} (branch tip)`,
    blob: t.bt
  }));
}
export const Gc = $$l0;
export const TA = $$d1;
export const uf = $$s2;
export const yA = $$o3;