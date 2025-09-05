import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { Agb } from "../figma_app/822011";
import { ServiceCategories as _$$e } from "../905/165054";
import { lyf, kul } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { $D } from "../905/11";
import { Lo } from "../905/714362";
import { up, SA, Kz, Ns } from "../905/760074";
import { Wy, eE } from "../figma_app/952446";
import { q5 } from "../figma_app/516028";
import { FProductAccessType, FFileType } from "../figma_app/191312";
import { QrR, op7 } from "../figma_app/43951";
import { isOrgUserExternallyRestrictedFromState } from "../figma_app/642025";
import { nT } from "../figma_app/53721";
import { TY } from "../figma_app/701001";
import { FC } from "../figma_app/212807";
import { d as _$$d } from "../905/647058";
import { XD } from "../905/981217";
import { Pe } from "../figma_app/12796";
export function $$w2(e, t, i, n, r, a, d, c, u, f) {
  var A;
  return {
    createBranch: function (e, t, i, n, r, a, s) {
      if (!e) return {
        status: "hidden",
        reason: "No file"
      };
      if (i) return {
        status: "hidden",
        reason: "Recovery"
      };
      if (r) return {
        status: "hidden",
        reason: "User is in limited space"
      };
      if (a !== nT.Design) return {
        status: "hidden",
        reason: "Invalid editor type"
      };
      if (void 0 !== s && s !== Wy.SAFE) return {
        status: "disabled",
        reason: "Low memory"
      };
      if (Pe(e)) return {
        status: "disabled",
        reason: "File is copy/export restricted"
      };
      if (isOrgUserExternallyRestrictedFromState(t)) return {
        status: "hidden",
        reason: "Your organization doesn't allow you to create branches in external spaces."
      };
      if (XD({
        currentTeamId: n,
        hasCurrentOrg: !!t.currentUserOrgId
      })) return {
        status: "upsell-org",
        reason: "Not in org but can upsell into it"
      };
      if (!e.parentOrgId) return {
        status: "hidden",
        reason: "File is not in org"
      };
      if (!t.currentUserOrgId) return {
        status: "hidden",
        reason: "Not in org"
      };
      let o = up(e, t.repos);
      if (o && !SA(e, o)) return {
        status: "hidden",
        reason: "Not the main file"
      };
      let l = t.user && t.orgUsersByOrgId[e.parentOrgId] && t.orgUsersByOrgId[e.parentOrgId][t.user.id] ? t.orgUsersByOrgId[e.parentOrgId][t.user.id] : null;
      let d = l && l.design_paid_status;
      let c = l?.active_seat_type?.license_types?.includes(FProductAccessType.DESIGN);
      return null === d ? {
        status: "hidden",
        reason: "Unknown account type"
      } : c ? {
        status: "enabled"
      } : {
        status: "hidden"
      };
    }(e, t, d, c, u, i, n),
    openBranchSource: e && Kz(e) ? {
      status: "enabled"
    } : {
      status: "hidden"
    },
    viewBranches: e && e.fileRepoId ? d ? {
      status: "hidden",
      reason: "Recovery mode"
    } : {
      status: "enabled"
    } : {
      status: "hidden"
    },
    viewBranchDiff: (A = e?.sourceFile || null, e ? Kz(e) ? e.canView ? A?.canView ? d ? {
      status: "hidden",
      reason: "Recovery mode"
    } : r !== lyf.BRANCHING && n !== Wy.SAFE ? {
      status: "disabled",
      reason: "Low memory"
    } : {
      status: "enabled"
    } : {
      status: "hidden",
      reason: "Can't view source"
    } : {
      status: "hidden",
      reason: "Can't view branch"
    } : {
      status: "hidden",
      reason: "Not a branch"
    } : {
      status: "hidden"
    }),
    mergeBranch: function (e, t, i, n, r, a) {
      if (!e) return {
        status: "hidden"
      };
      if (!Kz(e)) return {
        status: "hidden",
        reason: "Not a branch"
      };
      if (!e.canManage) return {
        status: "hidden",
        reason: "Can't edit branch"
      };
      if (!t?.canManage) return {
        status: "hidden",
        reason: "Can't edit source"
      };
      if (e.trashedAt) return {
        status: "hidden",
        reason: "Branch is archived"
      };
      if (a) return {
        status: "hidden",
        reason: "Recovery mode"
      };
      if (n !== lyf.BRANCHING) {
        if (i !== Wy.SAFE) return {
          status: "disabled",
          reason: "Low memory"
        };
        if (r !== kul.JOINED) return {
          status: "disabled",
          reason: "Offline"
        };
      }
      return {
        status: "enabled"
      };
    }(e, e?.sourceFile || null, n, r, a, d),
    viewSourceDiff: function (e, t, i, n, r, a, s) {
      if (!e) return {
        status: "hidden"
      };
      if (!Kz(e)) return {
        status: "hidden",
        reason: "Not a branch"
      };
      if (!e.canView) return {
        status: "disabled",
        reason: "Can't view branch"
      };
      if (!t?.canView) return {
        status: "disabled",
        reason: "Can't view source"
      };
      if (e.trashedAt) return {
        status: "hidden",
        reason: "Branch is archived"
      };
      if (s) return {
        status: "hidden",
        reason: "Recovery mode"
      };
      let l = e.sourceFileKey && i.fileByKey[e.sourceFileKey];
      let d = i.fileByKey[e.key];
      if (!l) return {
        status: "disabled",
        reason: "No source file in redux"
      };
      if (!d) return {
        status: "disabled",
        reason: "No branch file in redux"
      };
      if (!k(d, l)) {
        Lo("branching", "No changes", {
          sourceCheckpointId: l.checkpoint_id,
          branchCheckpointId: d.source_checkpoint_id
        });
        return {
          status: "disabled",
          reason: "No changes"
        };
      }
      if (r !== lyf.BRANCHING) {
        if (n !== Wy.SAFE) return {
          status: "disabled",
          reason: "Low memory"
        };
        if (a !== kul.JOINED) return {
          status: "disabled",
          reason: "Offline"
        };
      }
      return {
        status: "enabled"
      };
    }(e, e?.sourceFile || null, t, n, r, a, d),
    updateBranch: function (e, t, i, n, r, a, d, c) {
      if (!e || !Kz(e)) return {
        status: "hidden"
      };
      if (!e.canManage) return {
        status: "hidden",
        reason: "Can't edit branch"
      };
      if (!t?.canView) return {
        status: "hidden",
        reason: "Can't view source"
      };
      if (e.trashedAt) return {
        status: "hidden",
        reason: "Branch is archived"
      };
      if (d) return {
        status: "hidden",
        reason: "Recovery mode"
      };
      if (getFeatureFlags().branching_update_status_lg) {
        if (!c) return {
          status: "disabled",
          reason: "Repo not found"
        };
        let t = c.files;
        if (!t) {
          $D(_$$e.SCENEGRAPH_AND_SYNC, Error("Repo has no files"));
          return {
            status: "disabled",
            reason: "No files in repo"
          };
        }
        let i = t.find(t => t.key === e.key);
        let n = t.find(e => Ns(e, c));
        if (!i) return {
          status: "disabled",
          reason: "No branch file in livegraph"
        };
        if (!n) return {
          status: "disabled",
          reason: "No source file in livegraph"
        };
        if (!n.checkpointId || !i.sourceCheckpointId || i.sourceCheckpointId === n.checkpointId) {
          Lo("branching", "No changes", {
            sourceCheckpointId: n.checkpointId,
            branchPointCheckpointId: i.sourceCheckpointId
          });
          return {
            status: "disabled",
            reason: "No changes"
          };
        }
      } else {
        let t = e.sourceFileKey && i.fileByKey[e.sourceFileKey];
        let n = i.fileByKey[e.key];
        if (!n) return {
          status: "disabled",
          reason: "No branch file in redux"
        };
        if (!t) return {
          status: "disabled",
          reason: "No source file in redux"
        };
        if (!k(n, t)) {
          Lo("branching", "No changes", {
            sourceCheckpointId: t.checkpoint_id,
            branchCheckpointId: n.source_checkpoint_id
          });
          return {
            status: "disabled",
            reason: "No changes"
          };
        }
      }
      if (r !== lyf.BRANCHING) {
        if (n !== Wy.SAFE) return {
          status: "disabled",
          reason: "Low memory"
        };
        if (a !== kul.JOINED) return {
          status: "disabled",
          reason: "Offline"
        };
      }
      return {
        status: "enabled"
      };
    }(e, e?.sourceFile || null, t, n, r, a, d, f)
  };
}
export function $$C0() {
  let e = FC();
  let t = q5();
  let i = _$$d();
  let a = useSelector(e => e.selectedView.editorType);
  let s = TY();
  let o = md(eE);
  let l = useSelector(e => e.mirror.appModel.topLevelMode);
  let p = useSelector(e => e.mirror.appModel.multiplayerSessionState);
  let m = t?.teamId ?? null;
  let h = t?.sourceFile ?? t;
  let _ = !!(h && h.key);
  let y = Rs(QrR, {
    fileKey: h?.key
  }, {
    enabled: _
  });
  let b = useMemo(() => _ ? resourceUtils.from(y).transform(e => T({
    file: e.file,
    isRecovery: s,
    isUserInLimitedSpace: i,
    plan: e.file?.plan,
    planUser: e.file?.currentPlanUser
  })) : resourceUtils.loaded({
    status: "hidden",
    reason: "Not enabled"
  }), [s, i, y, _]);
  let x = t?.sourceFile?.fileRepoId ?? "";
  let S = Rs(op7, {
    repoId: x
  }, {
    enabled: !!x
  });
  let C = useMemo(() => $$w2(t, e, a, o, l, p, s, m, i, S.data?.repo ?? null), [t, e, a, o, l, p, s, m, i, S]);
  let k = b.transform(e => e.status);
  return "loaded" === k.status ? {
    ...C,
    createBranch: {
      status: k.data
    }
  } : {
    ...C,
    createBranch: {
      status: "hidden"
    }
  };
}
function T({
  file: e,
  isRecovery: t,
  isUserInLimitedSpace: i,
  plan: n,
  planUser: r
}) {
  return e ? t ? {
    status: "hidden",
    reason: "Recovery"
  } : i ? {
    status: "hidden",
    reason: "User is in limited space"
  } : e.editorType !== FFileType.DESIGN ? {
    status: "hidden",
    reason: "Invalid editor type"
  } : e.canCreateBranch ? {
    status: "enabled"
  } : Pe(e) ? {
    status: "disabled",
    reason: "File is copy/export restricted"
  } : n && ![Agb.ENTERPRISE, Agb.ORG].includes(n.tier) ? {
    status: "upsell-org",
    reason: "Not in org but can upsell into it"
  } : r ? {
    status: "hidden"
  } : {
    status: "hidden",
    reason: "Unknown account type"
  } : {
    status: "hidden",
    reason: "No file"
  };
}
function k(e, t) {
  return t.checkpoint_id && e.source_checkpoint_id && e.source_checkpoint_id !== t.checkpoint_id;
}
export function $$R1(e) {
  let t = _$$d();
  let i = e?.key;
  let r = Rs(QrR, {
    fileKey: i
  }, {
    enabled: !!i
  });
  let a = TY();
  return useMemo(() => e ? resourceUtils.from(r).transform(e => T({
    file: e.file,
    isRecovery: a,
    isUserInLimitedSpace: t,
    plan: e.file?.plan,
    planUser: e.file?.currentPlanUser
  })) : resourceUtils.loaded({
    status: "hidden",
    reason: "No file"
  }), [e, a, t, r]);
}
export const $n = $$C0;
export const ac = $$R1;
export const gW = $$w2;