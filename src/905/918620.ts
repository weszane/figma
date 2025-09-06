import { useMemo, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { AD } from "../905/871411";
import { selectWithShallowEqual } from "../905/103090";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { L8 } from "../905/760074";
import { Ad } from "../figma_app/2023";
import { aNI, d0w, kQI, Hhe } from "../figma_app/43951";
import { s5 } from "../figma_app/193867";
import { Nf } from "../figma_app/357047";
export function $$h0({
  fileKey: e,
  file: t
}) {
  let i = t ? {
    fileKey: e,
    teamId: t.team_id,
    projectId: t.folder_id,
    repoId: t.file_repo_id,
    currentOrgId: t.parent_org_id || null
  } : {
    fileKey: e,
    teamId: null,
    projectId: null,
    repoId: null,
    currentOrgId: null
  };
  let r = Rs(aNI, i, {
    enabled: !!t
  });
  let a = Rs(d0w, {
    fileKey: e
  });
  let s = useMemo(() => Ad(r, a), [r, a]);
  useEffect(() => {
    "errors" === s.status && console.error("Loading FilePermissions from LiveGraph: ", s.errors);
  }, [s]);
  return s;
}
export function $$g1(e) {
  let t = null;
  "string" == typeof e ? t = e : e && (t = e.team_id);
  let i = !!t;
  let n = Rs(kQI, {
    id: t || ""
  }, {
    enabled: i
  });
  return "loaded" === n.status && !!n.data.team?.hasPermission;
}
export function $$f3({
  fileKey: e
}) {
  let t = Rs(Hhe, {
    fileKey: e
  });
  return ("loaded" === t.status ? oA(t.data?.file?.resourceConnectionSharingGroupUsers) : void 0) ?? void 0;
}
export function $$_2() {
  return useSelector(e => {
    if (e.mirror?.appModel?.pagesList?.length > 1) {
      let t = e.mirror.sceneGraph.get(Nf(e.mirror.appModel));
      if (t) return t.name;
    }
  });
}
export function $$A5() {
  return selectWithShallowEqual(e => {
    let t = s5(e.selectedView);
    if (t && t !== AD) {
      let i = e.mirror?.sceneGraph.get(t);
      return {
        id: t,
        name: i?.name
      };
    }
    return null;
  });
}
export function $$y4(e, t) {
  return useSelector(i => {
    if (!e || !t) return null;
    let n = L8(e, i.repos);
    let r = n ? n.team_id : e.team_id;
    return r && i.teamUserByTeamId?.[r]?.[t] || null;
  });
}
export const $S = $$h0;
export const $Y = $$g1;
export const B1 = $$_2;
export const h1 = $$f3;
export const mu = $$y4;
export const wD = $$A5;