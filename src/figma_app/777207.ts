import { EntityType } from "../905/806400";
import { l as _$$l } from "../905/716947";
import { atomStoreManager } from "../figma_app/27355";
import { parsePxNumber } from "../figma_app/783094";
import { f } from "../figma_app/436731";
import { r9 } from "../figma_app/646357";
import { Ib } from "../905/129884";
import { A } from "../905/913345";
import { bJ, S0 } from "../905/863795";
import { UEm } from "../figma_app/27776";
let _ = parsePxNumber(UEm);
export function $$h4({
  libraries: e,
  approvedLibraryKeysByResourceType: t,
  currentTeamId: r = null,
  shouldSortByTeam: n = !1
}) {
  e.sort((e, i) => $$m2({
    libraryA: e,
    libraryB: i,
    approvedLibraryKeysByResourceType: t,
    currentTeamId: r,
    shouldSortByTeam: n
  }));
}
export function $$m2({
  libraryA: e,
  libraryB: t,
  approvedLibraryKeysByResourceType: r,
  currentTeamId: n = null,
  shouldSortByTeam: a = !1
}) {
  let {
    workspaceApprovedLibraryKeys,
    orgApprovedLibraryKeys
  } = r;
  if (a && "file" in e && "file" in t && e.team_id !== t.team_id) return r9(e, t, n);
  let c = _$$l(e.library_key ?? "");
  let u = _$$l(t.library_key ?? "");
  let p = orgApprovedLibraryKeys.has(c) ? 1 : 0;
  let _ = orgApprovedLibraryKeys.has(u) ? 1 : 0;
  if (p !== _) return _ - p;
  let h = workspaceApprovedLibraryKeys.has(c) ? 1 : 0;
  let m = workspaceApprovedLibraryKeys.has(u) ? 1 : 0;
  return h !== m ? m - h : f.LEXICOGRAPHICALLY(g(e), g(t));
}
function g(e) {
  return "name" in e ? e.name : e.library_file_name;
}
export function $$f6({
  orgName: e,
  workspaceName: t,
  tooltipLocation: r,
  tooltipDelay: n
}) {
  let i = e ?? t;
  if (!i) return {};
  let a = function (e) {
    try {
      if (e) {
        let t = function (e) {
          let t = document.createElement("span");
          t.textContent = e;
          t.style.visibility = "hidden";
          t.style.fontWeight = "bold";
          t.style.display = "inline-block";
          document.body.appendChild(t);
          let r = t.offsetWidth;
          document.body.removeChild(t);
          return r;
        }(e);
        if (t) {
          if (t > _) return _;
          if (t > _ / 2) return Math.max(116, t);
          return 116;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return _;
  }(i);
  return {
    "data-tooltip-type": Ib.SPECIAL,
    "data-tooltip": A,
    ...("below" === r ? {
      "data-tooltip-show-below": !0
    } : {
      "data-tooltip-show-above": !0
    }),
    ...(n ? {
      "data-tooltip-timeout-delay": n
    } : {
      "data-tooltip-show-immediately": !0
    }),
    "data-tooltip-max-width": a,
    "data-tooltip-workspace-name": t,
    "data-tooltip-org-name": e
  };
}
export function $$E0(e, t) {
  return e.find(e => e.resourceType === EntityType.Workspace && e.resourceId === t);
}
export function $$y3(e, t) {
  if (t) return e.find(e => e.resourceType === EntityType.Org && e.resourceId === t);
}
export function $$b5(e) {
  if (!e) return !1;
  let t = atomStoreManager.get(bJ).has(e);
  let r = atomStoreManager.get(S0).has(e);
  return t || r;
}
export function $$T1({
  workspaceApprovedLibraryKeys: e,
  orgApprovedLibraryKeys: t
}) {
  return e.size > 0 || t.size > 0;
}
export const CA = $$E0;
export const NX = $$T1;
export const Qy = $$m2;
export const XF = $$y3;
export const k9 = $$h4;
export const sF = $$b5;
export const wZ = $$f6;