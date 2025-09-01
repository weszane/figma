import { uo } from "../905/98702";
import { Xw } from "../905/584989";
import { FResourceCategoryType } from "../figma_app/191312";
import { G } from "../figma_app/66216";
let o = {};
function l(e, t, i) {
  e || i.dispatch(Xw({
    teamId: t
  }));
}
export async function $$d0(e, t, i) {
  let {
    shouldFetchTeamUsers = !0
  } = i || {};
  e.team_id && shouldFetchTeamUsers && l(e.parent_org_id || null, e.team_id, t);
  let d = `file-${e.key}`;
  if (!o[d]) {
    let i = await G.getRoles({
      resourceType: FResourceCategoryType.FILE,
      resourceId: e.key
    });
    i.data.meta && (t.dispatch(uo({
      roles: i.data.meta
    })), o[d] = !0);
  }
}
export async function $$c2(e, t) {
  let i = `folder-${e}`;
  if (!o[i]) {
    let r = await G.getRoles({
      resourceType: FResourceCategoryType.FOLDER,
      resourceId: e
    });
    r.data.meta && (t.dispatch(uo({
      roles: r.data.meta
    })), o[i] = !0);
  }
}
export async function $$u3(e, t) {
  let i = `team-${e}`;
  if (!o[i]) {
    let r = await G.getRoles({
      resourceType: FResourceCategoryType.TEAM,
      resourceId: e
    });
    r.data.meta && (t.dispatch(uo({
      roles: r.data.meta
    })), o[i] = !0);
  }
}
export async function $$p1(e, t, i) {
  e.team_id && l(t, e.team_id, i);
  let r = `repo-${e.id}`;
  if (!o[r]) {
    let t = await G.getRoles({
      resourceType: FResourceCategoryType.FILE_REPO,
      resourceId: e.id
    });
    t.data.meta && (i.dispatch(uo({
      roles: t.data.meta
    })), o[r] = !0);
  }
}
export const YO = $$d0;
export const sh = $$p1;
export const uA = $$c2;
export const xN = $$u3;