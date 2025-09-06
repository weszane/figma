import { useSelector } from "../vendor/514228";
import { useAtomWithSubscription } from "../figma_app/27355";
import { OC } from "../figma_app/386952";
import { iZ } from "../905/372672";
import { FFileType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { Q7 } from "../905/98947";
var $$c3 = (e => (e.FILE = "file", e.TEAM = "team", e.PROJECT = "project", e.NONE = "none", e))($$c3 || {});
export function $$u1() {
  let e = useAtomWithSubscription(OC);
  let t = M4.File.useValue(e.fileKey);
  let a = M4.Team.useValue(e.teamId);
  let o = M4.Folder.useValue(e.folderId);
  let r = useSelector(e => e.roles);
  switch (e.view) {
    case "fullscreen":
      if (!t.data) return;
      return {
        resourceType: "file",
        name: t.data.name,
        resource: t.data
      };
    case "folder":
      if (!o.data) return;
      return {
        resourceType: "project",
        name: o.data.name,
        resource: o.data,
        members: Object.values(r.byFolderId[e.folderId] || {})
      };
    case "team":
      if (!a.data) return;
      return {
        resourceType: "team",
        name: a.data.name,
        resource: a.data,
        members: Object.values(r.byTeamId[e.teamId] || {})
      };
    case "prototype":
      if (!e.file) return;
      return {
        resourceType: "file",
        name: e.file.name,
        resource: e.file
      };
    default:
      return;
  }
}
export function $$m2(e, t) {
  if (t) return {
    "data-editor-theme": FFileType.WHITEBOARD
  };
  switch (e) {
    case FFileType.SLIDES:
      return {
        "data-editor-theme": "piper"
      };
    case FFileType.SITES:
      return {
        "data-editor-theme": "seascape"
      };
    case FFileType.FIGMAKE:
      return {
        "data-editor-theme": "bake-filebrowser"
      };
    default:
      return {
        "data-editor-theme": e
      };
  }
}
export function $$_0() {
  let e = useAtomWithSubscription(Q7);
  let t = iZ();
  return e || t?.email?.split("@")[0];
}
export const K2 = $$_0;
export const R6 = $$u1;
export const pV = $$m2;
export const q2 = $$c3;