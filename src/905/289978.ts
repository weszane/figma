import { getFilteredFeatureFlags } from "../905/717445";
import { parseAndNormalizeQuery } from "../905/634134";
import { encodeUri } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { getRepoById, getDisplayName } from "../905/760074";
import { Zt } from "../figma_app/617727";
import { FEditorType } from "../figma_app/53721";
import { d8, qi, oU, ZH, gR, H_, Wi, sR, qr } from "../905/366346";
function u(e) {
  return !!getFilteredFeatureFlags().ce_il_root && e?.view === "fullscreen" && e?.editorType === FEditorType.Illustration;
}
export class $$p0 {
  pathToSelectedView(e, t, i, a) {
    if (!getFilteredFeatureFlags().ce_il_root) return null;
    let s = i ? parseAndNormalizeQuery(i) : {};
    let o = t[1];
    if (("design" === o || "file" === o) && ("draw" === s.mode || "draw" === s.m) && "auto" !== s.m) {
      let i = "branch" === t[3] && t[4] ? t[4] : t[2];
      let n = {
        view: "fullscreen",
        editorType: e?.user ? FEditorType.Illustration : FEditorType.Design,
        fileKey: i
      };
      d8(a, n);
      qi(s, n);
      u(n) && ("draw" === s.mode || "draw" === s.m) && (n.mode = "draw");
      return n;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return !1;
  }
  selectedViewToPath(e, t) {
    if (u(e)) {
      if (e.fileKey === Zt) return oU();
      let i = this.selectedViewName(e, t);
      let n = i ? encodeUri(i) : "";
      let r = {};
      let s = e.fileKey;
      let d = e.fileKey && t.fileByKey[e.fileKey];
      let u = "design";
      let p = "";
      d ? p = ZH(u, s ?? "", n, d || void 0, getRepoById(d, t.repos)) : (p = `/${u}/${s}`, n ? p += `/${n}` : p += "/Untitled");
      gR(r, e.nodeId);
      H_(r, e.nodeId);
      Wi(r, e.versionId);
      r.m = "draw";
      p = sR(p, r);
      return p = qr(p, e.commentThreadId);
    }
    return null;
  }
  selectedViewName(e, t) {
    if (u(e)) {
      let i = null;
      if (e.fileKey) {
        let n = t.fileByKey[e.fileKey];
        if (n) {
          let e = getRepoById(n, t.repos);
          i = e ? getDisplayName(n, e) : n.name;
        }
      }
      return i ?? getI18nString("dev_handoff.dev_handoff_view_selector.untitled");
    }
    return null;
  }
  selectedViewHasMissingResources(e, t) {
    return !!u(t) && !!t.fileKey && !(t.fileKey in e.fileByKey);
  }
}
export const y = $$p0;
