import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resourceUtils } from "../905/989992";
import { debugState } from "../905/407919";
import { getCurrentLiveGraphClient } from "../905/761735";
import { batchPutFileAction } from "../figma_app/78808";
import { prototypeResetRecents, recentPrototypePost } from "../905/70982";
import { batchPutRepos, initRecentRepos } from "../905/466026";
import { trackMultipleFileEvent } from "../figma_app/314264";
import { FileBrowserRecentFilesByEditorTypeView, FileBrowserRecentFilesView } from "../figma_app/43951";
import { mapRecentFilesAndRepos } from "../figma_app/349248";
import { setupResourceAtomHandler } from "../905/713695";
import { f as _$$f } from "../905/289690";
import { Ip } from "../905/239603";
import { getInitialOptions } from "../figma_app/169182";
import { createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { OrganizationUserSchemaAlias } from "../figma_app/35887";
let b = new class {
  constructor() {
    this.RecentPrototypesSchemaValidator = createMetaValidator("RecentPrototypesSchemaValidator", e => e.object({
      recent_prototypes: Ip.ignore(),
      recent_prototype_repos: Ip.ignore(),
      org_drafts_owners: e.array(OrganizationUserSchemaAlias)
    }), null, !1);
  }
  getRecentPrototypes(e) {
    return this.RecentPrototypesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/recent_prototypes", APIParameterUtils.toAPIParameters({
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
  let a = getCurrentLiveGraphClient().optimisticallyDelete({
    RecentFile2: r
  }, i);
  trackMultipleFileEvent("File RecentFiles Removed", t);
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
      e(prototypeResetRecents());
      let {
        recent_prototypes,
        recent_prototype_repos
      } = t.meta;
      for (let t of recent_prototypes) e(recentPrototypePost({
        prototype: t
      }));
      e(batchPutRepos({
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
  let [r] = setupResourceAtomHandler(t ? FileBrowserRecentFilesByEditorTypeView.Query({
    _editorTypeRaw: e
  }) : FileBrowserRecentFilesView.Query({}));
  let i = useMemo(() => r.transform(e => "recentFiles2ByEditorType" in e.currentUser ? e.currentUser.recentFiles2ByEditorType : e.currentUser.recentFiles2), [r]);
  "loaded" === i.status && (T = i.data);
  useEffect(() => {
    "loaded" === i.status && $$A0(mapRecentFilesAndRepos(i.data));
  }, [i]);
  return useMemo(() => i.transform(e => mapRecentFilesAndRepos(e).recent_files), [i]);
}
export function $$A0(e) {
  let t = e.recent_repos.map(e => e.files).reduce((e, t) => e.concat(t), []);
  debugState.dispatch(batchPutFileAction({
    files: e.recent_files.concat(t),
    subscribeToRealtime: !1
  }));
  debugState.dispatch(initRecentRepos({
    recent_repos: e.recent_repos,
    subscribeToRealtime: !1
  }));
}
export const Wn = $$A0;
export const yN = $$I1;
export const ql = $$v2;
export const O8 = $$S3;