import { Z6A, Hyj } from "../figma_app/763686";
import { nc } from "../905/189185";
import { eU, zl, Iz } from "../figma_app/27355";
import { dT } from "../figma_app/106207";
import { w } from "../905/924253";
import { t as _$$t } from "../905/940050";
let d = eU(null);
let c = eU(null);
let u = eU({
  x: 0,
  y: 0
});
let p = eU(null);
let _ = eU(!1);
let h = eU(!1);
let $$m4 = eU(e => e(c));
let $$g6 = eU(e => e(h));
let $$f5 = eU(e => e(u));
let E = eU(!1);
let y = "new_preview";
let b = null;
function T() {
  b && b.abort(y);
  b = null;
}
let $$I0 = eU(null, async (e, t, r, i) => {
  let a = !e(_) && _$$t(r.template, e(c));
  if (e(h) || a || e(E)) return !1;
  t(A);
  t(_, !0);
  t(d, i.previewManager);
  t(c, r.template);
  T();
  b || (b = new TaskController({
    priority: "background"
  }));
  let s = b;
  function m(t) {
    return scheduler.postTask(() => !!(_$$t(r.template, e(c)) && e(w)) && (t(), !0), {
      signal: s.signal
    }).catch(e => {
      if (e === y) return !1;
      throw e;
    });
  }
  s.setPriority(i.priority);
  let g = e(d);
  let f = (async () => {
    try {
      let a = await e($$w1(r));
      let s = g?.nodeType === Z6A.SECTION ? g.options : null;
      let o = i?.position || null;
      if (!(await m(() => Hyj.prepareTemplatePreview(a, s, o))) || !(await m(() => Hyj.insertTemplatePreview(i.moveViewportAfterPreview, i.viewportOptions || null)))) return !1;
      let l = Hyj.getTemplatePreviewSize();
      t(u, l);
      t(_, !1);
      return !0;
    } catch (n) {
      _$$t(r.template, e(c)) && t(A);
      return n;
    }
  })();
  t(p, f);
  return await f;
});
let $$S3 = eU(null, async (e, t, r) => {
  let a = e(p);
  if (!a || e(h)) return !1;
  t(h, !0);
  try {
    if (!(await a) || !e(w)) return !1;
    await scheduler.postTask(nc(r.editScopeType, "commit-figjam-template-preview", () => Hyj.commitTemplatePreview(r.selectTemplateAfterCommit, r.moveViewportAfterCommit)), {
      priority: r.priority
    });
    t(c, null);
    t(E, !0);
    t($$N7);
    return !0;
  } finally {
    t(h, !1);
  }
});
let v = eU(null, (e, t) => {
  t(E, !1);
  e(_) && (T(), t(A));
});
let A = eU(null, (e, t) => {
  t(c, null);
  t(p, null);
  t(_, !1);
  t(h, !1);
  e(w) && Hyj.clearTemplatePreview();
});
let $$x2 = eU(null, (e, t) => {
  t(v);
  t(A);
});
let $$N7 = eU(null, (e, t) => {
  t(d, null);
  Hyj.clearSectionPreviewSupport();
});
let $$C8 = {
  clearTemplatePreview() {
    zl.set(A);
  }
};
let $$w1 = Iz(e => eU(async () => await dT(e)), (e, t) => e.fileKey === t.fileKey && e.fileVersion === t.fileVersion && _$$t(e.template, t.template));
export const ME = $$I0;
export const Re = $$w1;
export const Yq = $$x2;
export const bj = $$S3;
export const oh = $$m4;
export const pF = $$f5;
export const pg = $$g6;
export const pn = $$N7;
export const t7 = $$C8; 
