import { lQ } from "../905/934246";
import { l as _$$l } from "../905/716947";
import { eU, Iz, mg, M2, FZ } from "../figma_app/27355";
import s from "../vendor/239910";
import { Xm } from "../905/723791";
import { yZ } from "../figma_app/476572";
import { DU } from "../figma_app/275462";
import { JB } from "../figma_app/657017";
import { M } from "../figma_app/155411";
import { T9 } from "../figma_app/528509";
import { J } from "../905/9585";
import { i as _$$i } from "../905/667910";
import { o as _$$o } from "../905/738144";
import { F } from "../905/686267";
import { kX, cM } from "../905/261982";
import { yV } from "../figma_app/516028";
import { OX, bt, Pj, S9 } from "../905/270322";
import { DtB, vsj, Acj, eHy, CfA } from "../figma_app/43951";
import { w5 } from "../figma_app/345997";
import { gM } from "../figma_app/155728";
import { Me } from "../figma_app/598018";
import { o as _$$o2 } from "../figma_app/633080";
var o = s;
let $$x0 = eU(e => {
  let t = e(yV);
  if (!t) return Xm();
  let r = t.parentOrgId;
  let n = !!t.teamId;
  let i = T9(t?.project);
  let a = e(DtB.Query({
    fileKey: t.key ?? "",
    teamId: t.teamId ?? "-1",
    workspaceId: t.team?.workspaceId ?? null,
    orgId: r,
    group: M() ?? null
  }));
  let s = e(JB);
  let o = e(Me);
  let d = w5(o);
  return gM(a, n, i, s, r, d);
});
let N = Iz(e => mg($$x0, t => new Set(t.data?.map(t => t[e])), yZ));
export function $$C2(e) {
  return N(e);
}
let $$w5 = OX(_$$o2.LIBRARY, "SET_LIBRARY_PUBLISHING_MODE");
let $$O6 = bt(e => e.openFile?.publishedHubFile?.id);
let $$R1 = bt(e => e.openFile?.publishedHubFile?.libraryKey ? _$$l(e.openFile.publishedHubFile.libraryKey) : null);
let L = bt(e => e.openFile?.editorType);
let $$P3 = eU(null);
let D = (e, t) => t;
let $$k4 = (() => {
  let e = M2(eU(e => {
    let t = e($$O6);
    let r = e(L);
    let n = {
      variableSets: {},
      variables: {},
      styles: {},
      components: {},
      stateGroups: {},
      modules: {}
    };
    if (!t || !DU(r ?? void 0)) return n;
    let i = e(vsj.Query({
      hubFileId: t
    }));
    let a = J(i);
    let s = _$$o(i);
    let l = e(Acj.Query({
      hubFileId: t
    }));
    let d = F(l);
    let u = e(eHy.Query({
      hubFileId: t
    }));
    let p = kX({
      type: "community",
      value: u
    }, !0);
    let _ = cM({
      type: "community",
      value: u
    }, !0);
    let y = e(CfA.Query({
      hubFileId: t
    }));
    let b = _$$i(y);
    n.variables = o()(_, "node_id");
    n.variableSets = o()(p, "node_id");
    n.styles = o()(d, "node_id");
    n.components = o()(a, "node_id");
    n.stateGroups = o()(s, "node_id");
    n.modules = o()(b, "node_id");
    return n;
  }, lQ));
  let t = Pj(e, "SET_OPEN_HUB_FILE_PUBLISHED_LIVEGRAPH", {
    variableSets: {},
    variables: {},
    styles: {},
    components: {},
    stateGroups: {},
    modules: {}
  });
  let r = FZ(t, D);
  return S9(r, t.reducer);
})();
export const I1 = $$x0;
export const RG = $$R1;
export const cY = $$C2;
export const dL = $$P3;
export const jz = $$k4;
export const pz = $$w5;
export const yP = $$O6;