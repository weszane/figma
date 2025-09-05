import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { resourceUtils } from "../905/989992";
import { debugState } from "../905/407919";
import { WB } from "../905/761735";
import { uo } from "../figma_app/78808";
import { q0, Am } from "../905/70982";
import { uo as _$$uo, nF } from "../905/466026";
import { OH } from "../figma_app/314264";
import { gB$, wZi } from "../figma_app/43951";
import { YN } from "../figma_app/349248";
import { IT } from "../905/713695";
import { f as _$$f } from "../905/289690";
import { Ip } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { YV, td } from "../figma_app/181241";
import { WU } from "../figma_app/35887";
let b = new class {
  constructor() {
    this.RecentPrototypesSchemaValidator = YV("RecentPrototypesSchemaValidator", e => e.object({
      recent_prototypes: Ip.ignore(),
      recent_prototype_repos: Ip.ignore(),
      org_drafts_owners: e.array(WU)
    }), null, !1);
  }
  getRecentPrototypes(e) {
    return this.RecentPrototypesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/recent_prototypes", td.toAPIParameters({
      ...e,
      fuid: getInitialOptions().user_data?.id
    })));
  }
}();
let T = null;
export async function $$I1(e) {
  if (!T) return;
  let t = [];
  let r = {};
  let n = [];
  for (let i of T ?? []) i?.file?.key && e.includes(i.file.key) && (t.push({
    key: i.file.key,
    parent_org_id: i.file.parentOrgId,
    team_id: i.file.teamId,
    folder_id: i.file.folderId
  }), r[i.id] = null, n.push(i.file.key));
  let i = _$$f.removeRecentFiles({
    fileKeys: n
  });
  let a = WB().optimisticallyDelete({
    RecentFile2: r
  }, i);
  OH("File RecentFiles Removed", t);
  await a;
}
export let $$S3 = function () {
  let e = useDispatch();
  useEffect(() => function (e) {
    b.getRecentPrototypes({
      isGlobal: !0,
      includeRepo: !0
    }).then(({
      data: t
    }) => {
      e(q0());
      let {
        recent_prototypes,
        recent_prototype_repos
      } = t.meta;
      for (let t of recent_prototypes) e(Am({
        prototype: t
      }));
      e(_$$uo({
        repos: recent_prototype_repos
      }));
    }).catch(e => {});
  }(e), [e]);
  let t = useSelector(e => e.recentPrototypes);
  return useMemo(() => {
    let e = t.filter(e => !e.trashed);
    return resourceUtils.from({
      status: "loaded",
      data: e,
      errors: []
    });
  }, [t]);
};
export function $$v2({
  _editorTypeRaw: e
} = {}) {
  let t = "string" == typeof e;
  let [r] = IT(t ? gB$.Query({
    _editorTypeRaw: e
  }) : wZi.Query({}));
  let i = useMemo(() => r.transform(e => "recentFiles2ByEditorType" in e.currentUser ? e.currentUser.recentFiles2ByEditorType : e.currentUser.recentFiles2), [r]);
  "loaded" === i.status && (T = i.data);
  useEffect(() => {
    "loaded" === i.status && $$A0(YN(i.data));
  }, [i]);
  return useMemo(() => i.transform(e => YN(e).recent_files), [i]);
}
export function $$A0(e) {
  let t = e.recent_repos.map(e => e.files).reduce((e, t) => e.concat(t), []);
  debugState.dispatch(uo({
    files: e.recent_files.concat(t),
    subscribeToRealtime: !1
  }));
  debugState.dispatch(nF({
    recent_repos: e.recent_repos,
    subscribeToRealtime: !1
  }));
}
export const Wn = $$A0;
export const yN = $$I1;
export const ql = $$v2;
export const O8 = $$S3;