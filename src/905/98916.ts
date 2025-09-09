import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { IT } from "../figma_app/566371";
import { ProjectFileCount, FolderUntrashedFilesAndSitesView } from "../figma_app/43951";
export function $$o1(e, t) {
  let [i] = IT(ProjectFileCount.Query(e ? {
    projectId: e
  } : null));
  return i.transform(e => {
    let i = t ? oA(e.project?.trashedWithFolderFiles) || [] : e.project?.untrashedFiles || [];
    let n = 0;
    let a = new Set();
    i.forEach(e => {
      e.fileRepoId ? a.has(e.fileRepoId) || (n++, a.add(e.fileRepoId)) : n++;
    });
    return n;
  });
}
export function $$l0(e) {
  return Rs(FolderUntrashedFilesAndSitesView({
    projectId: e
  }), {
    enabled: !!e
  }).transform(e => {
    let t = e.project?.untrashedFiles ?? [];
    let i = 0;
    let n = 0;
    let r = new Set();
    for (let e of t) {
      e.fileRepoId ? r.has(e.fileRepoId) || (i++, r.add(e.fileRepoId)) : i++;
      e.siteMount && "published" === e.siteMount.status && n++;
    }
    return {
      fileCount: i,
      publishedSiteCount: n
    };
  });
}
export const N = $$l0;
export const x = $$o1;