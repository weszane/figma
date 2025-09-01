import { Qw } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { CI } from "../figma_app/528509";
import { _6 } from "../figma_app/386952";
import { NI1 } from "../figma_app/43951";
import { X$, H3 } from "../figma_app/465071";
export function $$d0(e) {
  let t = X$("useFolderDisplayName").unwrapOr(null);
  let i = H3(t);
  let d = "folder" === _6().view;
  let c = Rs(NI1, {
    projectId: e
  }, {
    enabled: !!e && !d
  });
  if (d) return Qw.loaded(null);
  if ("loaded" !== c.status) return Qw.from(c);
  let u = c.data.project;
  return H3(u?.planPublicInfo ?? null) !== i ? Qw.loaded(null) : Qw.loaded(u ? CI(u) : null);
}
export function $$c1(e) {
  let t = X$("useFolderDisplayNameAndTrashedStatus").unwrapOr(null);
  let i = H3(t);
  let d = "folder" === _6().view;
  let c = Rs(NI1, {
    projectId: e
  }, {
    enabled: !!e && !d
  });
  if (d) return Qw.loaded(null);
  if ("loaded" !== c.status) return Qw.from(c);
  let u = c.data.project;
  return H3(u?.planPublicInfo ?? null) !== i ? Qw.loaded(null) : Qw.loaded(u ? {
    folderName: CI(u),
    isTrashed: !!u?.trashedAt
  } : null);
}
export const l = $$d0;
export const p = $$c1;