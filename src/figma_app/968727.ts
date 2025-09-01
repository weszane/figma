import { Point } from "../905/736624";
import { t as _$$t } from "../905/303541";
import { $ } from "../905/383708";
import { F } from "../905/302958";
import { nF } from "../905/350402";
import { FU } from "../figma_app/933328";
import { d1 } from "../905/766303";
import { Y5 } from "../figma_app/455680";
import { $$ } from "../figma_app/62612";
import { HK } from "../figma_app/646357";
import { l as _$$l } from "../905/997221";
import { n as _$$n } from "../905/64411";
let m = "\x3c!--(figcomponent)";
let $$g1 = nF((e, t) => {
  let r = t.dataTransfer?.getData("text/html");
  if (r) {
    let i = r.indexOf(m) + m.length;
    let a = r.indexOf("(/figcomponent)--\x3e");
    if (i >= 0 && a >= 0 && i < a) {
      let s = r.substring(i, a).trim();
      try {
        let r = JSON.parse(s);
        if ("object" == typeof r) {
          let i = r.fileKey;
          let a = r.nodeId;
          if (i && a) {
            let r = Y5.getViewportInfo();
            let s = new Point(r.x, r.y);
            let o = new Point(t.clientX, t.clientY).subtract(s);
            let l = $$(r, o);
            e.dispatch($$f0({
              fileKey: i,
              nodeId: a,
              canvasX: l.x,
              canvasY: l.y
            }));
          }
        }
      } catch (e) {}
    }
  }
});
let $$f0 = nF(async (e, t) => {
  let {
    fileKey,
    nodeId,
    canvasX,
    canvasY
  } = t;
  let m = e.getState();
  let g = d1(m);
  let f = null;
  if (g && g.key === fileKey) f = m.library.local.components[nodeId] ?? null;else {
    m.fileByKey[fileKey] || (await e.dispatch(_$$n({
      libraryKey: $(fileKey)
    })), m = e.getState());
    let t = m.fileByKey[fileKey];
    let n = t ? _$$l(t) : void 0;
    !n || (f = HK(m.library.publishedByLibraryKey.components, n)[nodeId] ?? null) || (await e.dispatch(_$$n({
      libraryKey: $(fileKey)
    })), m = e.getState(), f = HK(m.library.publishedByLibraryKey.components, n)[nodeId] ?? null);
  }
  f ? e.dispatch(FU({
    item: f,
    canvasPosition: new Point(canvasX, canvasY),
    percentageOffset: new Point(.5, .5),
    insertAsChildOfCanvas: !1
  })) : e.dispatch(F.enqueue({
    type: "insert_component_error",
    message: _$$t("design_systems.subscriptions.this_component_is_not_available"),
    error: !0
  }));
});
export const c = $$f0;
export const r = $$g1;