import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { WB } from "../905/761735";
import { Bc, kF, $D } from "../905/11";
import { x1 } from "../905/714362";
import { sy } from "../figma_app/930338";
import { XHR } from "../905/910117";
import { t as _$$t } from "../905/303541";
import { nX } from "../905/617744";
import { FFileType } from "../figma_app/191312";
import { PW } from "../905/535806";
import { e6 } from "../905/557142";
export function $$f13(e) {
  return !!(e.file_repo_id && e.source_file_key);
}
export function $$_6(e) {
  return !!(e.fileRepoId && e.sourceFileKey);
}
export function $$A19(e, t) {
  return $$y17(e, t.key);
}
export function $$y17(e, t) {
  return $$f13(e) && e.source_file_key === t;
}
export function $$b9(e, t) {
  return $$_6(e) && e.sourceLibraryKey === t;
}
export function $$v11(e) {
  return $$f13(e) ? _$$t("file_info_row.branch") : _$$t("file_info_row.file");
}
export function $$I12(e, t) {
  return e.key === t.default_file_key;
}
export function $$E10(e, t) {
  return e.key === t.defaultFileKey;
}
export function $$x15(e) {
  return $$_6(e) && !!e.trashedAt;
}
export function $$S25(e) {
  return !!e?.has_file_link_password || !!e?.has_proto_link_password;
}
export function $$w0(e, t) {
  return $$I12(e, t) ? t.name || "Untitled" : e.name || "Untitled";
}
export function $$C22(e, t) {
  return (e?.name ?? t?.name) || "Untitled";
}
export function $$T7(e, t) {
  if (!e) return null;
  let i = e.file_repo_id;
  return i && t[i] || null;
}
export function $$k24(e, t) {
  if (!e) return null;
  let i = e.fileRepoId;
  return i && t[i] || null;
}
export function $$R18(e, t, i) {
  let n = `/${i}`;
  n += $$f13(e) && t?.default_file_key ? `/${t.default_file_key}/branch/${e.key}` : `/${e.key}`;
  let r = sy($$C22(t, e));
  r && (n += `/${r}`);
  return n;
}
let N = (e, t, i) => {
  let n = `/${i}`;
  n += $$_6(e) && t?.defaultFileKey ? `/${t.defaultFileKey}/branch/${e.key}` : `/${e.key}`;
  let r = sy((t?.name ?? e?.name) || "Untitled");
  r && (n += `/${r}`);
  return n;
};
function P(e, t) {
  let i = t.editor_type || t.editorType;
  return "proto" === e ? e : i === FFileType.DESIGN ? "design" : e;
}
function O(e) {
  try {
    let t = e.pathname.split("/")[1];
    "file" === t ? e.searchParams.append("type", FFileType.DESIGN) : "design" === t && e.searchParams.append("m", "auto");
  } catch {}
  return e;
}
export function $$D3(e, t, i) {
  let n = P(i, e);
  return O(new URL($$R18(e, t, n), document.baseURI)).href;
}
export function $$L1(e, t, i) {
  let n = P(i, e);
  return O(new URL(N(e, t, n), document.baseURI));
}
export function $$F20(e, t, i, n) {
  return t.filter(e => !($$f13(e) && e.trashed_at)).map(t => {
    let r = $$I12(t, e);
    let a = i[t.key] && i[t.key][n];
    let s = !r && a?.level === e6.OWNER;
    return {
      key: t.key,
      name: r ? "Main" : t.name,
      isMain: r,
      ownedByUser: s
    };
  });
}
export function $$M21(e, t, i) {
  let n = i[e.id] || "";
  return $$j8(e, t, n);
}
export function $$j8(e, t, i) {
  if (i) {
    let e = t.find(e => e.key === i);
    if (e) return e;
  }
  return t.find(t => $$I12(t, e)) || t.reduce((e, t) => e.touched_at > t.touched_at ? e : t, t[0]);
}
export async function $$U5(e) {
  let t = XHR.post("/api/files_batch/restore", {
    files: e.map(e => ({
      key: e
    })),
    batch_fail_on_file_limit: !0
  });
  let i = {
    File: {}
  };
  e.forEach(e => {
    i.File[e] = {
      key: e,
      trashedAt: void 0
    };
  });
  try {
    let n = await WB().optimisticallyUpdate(i, t);
    if (207 === n.status) try {
      let e = n.data;
      return {
        status: "error",
        message: e.message
      };
    } catch (t) {
      return {
        status: "error",
        message: _$$t("collaboration.branching.error_restoring_branches", {
          branchCount: e.length
        })
      };
    }
    return {
      status: "success"
    };
  } catch ({
    response: t
  }) {
    try {
      let e = JSON.parse(t);
      return {
        status: "error",
        message: e.message
      };
    } catch (t) {
      return {
        status: "error",
        message: _$$t("collaboration.branching.error_restoring_branches", {
          branchCount: e.length
        })
      };
    }
  }
}
export function $$B2() {
  return getFeatureFlags().fig_diff_remove_canvas_fields_write ? 7 : 6;
}
function V(e, t) {
  return {
    "bm.branchingFailureType": e,
    "bm.diffVersion": `${$$B2()}`,
    "bm.mergeDirection": t ?? "unknown"
  };
}
export function $$G16(e, t) {
  Bc(V(e, t));
}
export function $$z23() {
  Object.keys(V(PW.UNHANDLED, null)).forEach(e => kF(e, void 0));
}
export function $$H4(e, t, i, r) {
  x1("branching", e.message, r);
  $D(_$$e.SCENEGRAPH_AND_SYNC, e, {
    tags: V(t, i)
  });
}
export function $$W14(e, t) {
  let i = zl.get(nX);
  x1("branching", e.message, t);
  $D(_$$e.SCENEGRAPH_AND_SYNC, e, {
    tags: V(PW.MODAL, i)
  });
}
export const At = $$w0;
export const By = $$L1;
export const C2 = $$B2;
export const CE = $$D3;
export const HJ = $$H4;
export const J8 = $$U5;
export const Kz = $$_6;
export const L8 = $$T7;
export const LH = $$j8;
export const LP = $$b9;
export const Ns = $$E10;
export const Pn = $$v11;
export const SA = $$I12;
export const Xm = $$f13;
export const cb = $$W14;
export const ci = $$x15;
export const dn = $$G16;
export const dp = $$y17;
export const gN = $$R18;
export const gs = $$A19;
export const gx = $$F20;
export const mr = $$M21;
export const oj = $$C22;
export const qk = $$z23;
export const up = $$k24;
export const yR = $$S25;