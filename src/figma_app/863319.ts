import { sx } from "../905/449184";
import { FEntityType } from "../figma_app/191312";
export function $$a0(e) {
  return !0;
}
export function $$s1(e) {
  return "" === e.name;
}
export function $$o7(e) {
  return e ? 1e3 : 50;
}
export function $$l2(e, t) {
  return $$_4(e.currentUser.favoritedFiles, e.currentUser.favoritedPrototypes, e.currentUser.favoritedProjects, e.currentUser.favoritedTeams, e.currentUser.favoritedWorkspaces).find(e => e.resource.resourceId === t);
}
export function $$d5(e, t) {
  switch (t) {
    case FEntityType.FILE:
      return e.favoritedResource?.favoritedFile != null ? {
        id: e.favoritedResource?.id,
        resourceType: FEntityType.FILE,
        resource: e.favoritedResource?.favoritedFile
      } : void 0;
    case FEntityType.PROTOTYPE:
      return e.favoritedResource?.favoritedPrototype != null ? {
        id: e.favoritedResource?.id,
        resourceType: FEntityType.PROTOTYPE,
        resource: e.favoritedResource?.favoritedPrototype
      } : void 0;
    case FEntityType.FOLDER:
      return e.favoritedResource?.favoritedProject ? {
        id: e.favoritedResource?.id,
        resourceType: FEntityType.FOLDER,
        resource: e.favoritedResource?.favoritedProject
      } : void 0;
    case FEntityType.TEAM:
      return e.favoritedResource?.favoritedTeam ? {
        id: e.favoritedResource?.id,
        resourceType: FEntityType.TEAM,
        resource: e.favoritedResource?.favoritedTeam
      } : void 0;
    case FEntityType.WORKSPACE:
      return e.favoritedResource?.favoritedWorkspace ? {
        id: e.favoritedResource?.id,
        resourceType: FEntityType.WORKSPACE,
        resource: e.favoritedResource?.favoritedWorkspace
      } : void 0;
    default:
      return;
  }
}
function c(e, t, r, i, a, s) {
  sx("data_drift_favorited_resource_corrected", {
    favoritedResourceId: e,
    resourceType: t,
    resourceTeamId: r,
    underlyingResourceTeamId: i,
    resourceOrgId: a,
    underlyingResourceOrgId: s
  }, {
    forwardToDatadog: !0
  });
}
function u(e, t) {
  return e.has(t.resourceId) ? null : (e.add(t.resourceId), t);
}
export function $$p3(e, t, r) {
  let n = new Set((r ?? []).map(e => e.plan_id));
  let i = new Set();
  let a = new Set();
  let s = new Set();
  return {
    favoritedFiles: (e?.favoritedFiles ?? []).map(e => {
      if (null != t) {
        if (t === e.file?.teamId) {
          e.teamId !== e.file?.teamId && (c(e.resourceId, "file", e.teamId, e.file.teamId, null, null), e.teamId = e.file?.teamId);
          return u(i, e);
        }
        if (e.teamId === t && !n.has(e.file?.teamId ?? "")) return u(i, e);
      }
    }).filter(e => null != e),
    favoritedProjects: (e?.favoritedProjects ?? []).map(e => {
      if (null != t) {
        if (t === e.project?.teamId) {
          e.teamId !== e.project?.teamId && (c(e.resourceId, "folder", e.teamId, e.project?.teamId, null, null), e.teamId = e.project?.teamId);
          return u(s, e);
        }
        if (e.project?.orgId === null && e.teamId === t && !n.has(e.project?.teamId ?? "")) return u(s, e);
      }
    }).filter(e => null != e),
    favoritedPrototypes: (e?.favoritedPrototypes ?? []).map(e => {
      if (null != t) {
        if (t === e.prototype?.file?.teamId) {
          e.teamId !== e.prototype?.file?.teamId && (c(e.resourceId, "prototype", e.teamId, e.prototype?.file?.teamId, null, null), e.teamId = e.prototype?.file?.teamId);
          return u(a, e);
        }
        if (e.prototype?.file?.parentOrgId === null && e.teamId === t && !n.has(e.prototype?.file?.teamId ?? "")) return u(a, e);
      }
    }).filter(e => null != e),
    favoritedFilesKeySet: i,
    favoritedPrototypesIdSet: a,
    favoritedFoldersIdSet: s
  };
}
export function $$_4(e, t, r, n, i) {
  return h(e?.filter(e => e.file?.canView) ?? [], t ?? [], r?.filter(e => e.project && !e.project.deletedAt) ?? [], n?.filter(e => e.team && !e.team.deletedAt) ?? [], i ?? []);
}
let h = (e, t, r, n, a) => {
  let s = e.map(e => ({
    id: e.id,
    resourceType: FEntityType.FILE,
    resource: e
  }));
  let o = t.map(e => ({
    id: e.id,
    resourceType: FEntityType.PROTOTYPE,
    resource: e
  }));
  return [...s, ...o, ...r.map(e => ({
    id: e.id,
    resourceType: FEntityType.FOLDER,
    resource: e
  })), ...n.map(e => ({
    id: e.id,
    resourceType: FEntityType.TEAM,
    resource: e
  })), ...a.map(e => ({
    id: e.id,
    resourceType: FEntityType.WORKSPACE,
    resource: e
  }))];
};
export function $$m6(e, t) {
  let r = $$o7(t);
  return $$_4(e.currentUser.favoritedFiles, e.currentUser.favoritedPrototypes, e.currentUser.favoritedProjects, e.currentUser.favoritedTeams, e.currentUser.favoritedWorkspaces).length >= r;
}
export function $$g10(e) {
  return !!e && e >= 1e3;
}
export function $$f9(e, t) {
  let r = {};
  e.forEach(e => {
    r[e.id] = e;
  });
  let n = e.find(e => "" === e.name)?.id;
  let i = t?.map(e => r[e]).filter(e => e) ?? [];
  let a = e.filter(e => !(t && t.includes(e.id)));
  let s = a.findIndex(e => "" === e.name);
  -1 !== s && a.splice(s, 1);
  a.sort((e, t) => new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime());
  return -1 !== s && n ? [r[n], ...i, ...a] : [...i, ...a];
}
export function $$E8(e, t) {
  let r = {};
  e.forEach(e => {
    r[e.resource.id] = e;
  });
  let n = t?.map(e => r[e]).filter(e => e) ?? [];
  let i = e.filter(e => !(t && t.includes(e.resource.id)));
  i.sort((e, t) => new Date(e.resource.createdAt).getTime() - new Date(t.resource.createdAt).getTime());
  return [...n, ...i];
}
export const D6 = $$a0;
export const R3 = $$s1;
export const T0 = $$l2;
export const TF = $$p3;
export const ds = $$_4;
export const eU = $$d5;
export const gV = $$m6;
export const kK = $$o7;
export const sb = $$E8;
export const t$ = $$f9;
export const tW = $$g10;