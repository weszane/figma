import { Tj } from "../figma_app/342207";
import { PanelType, AppStateTsApi } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { sitesViewSetterAtomFamily } from "../figma_app/115923";
import { x5 } from "../905/319777";
export function $$l1(e) {
  atomStoreManager.get(sitesViewSetterAtomFamily) === PanelType.CODE ? AppStateTsApi?.codeSelection().fullscreenCodeFileNodeId.set(e.guid) : AppStateTsApi?.codeSelection().selectedCodeFileNodeId.set(e.guid);
}
export function $$d0(e) {
  return {
    "--color-icon": e ? Tj.textDisabled : void 0
  };
}
export function $$c3(e) {
  return [...e].sort((e, t) => "file" === e.type && "folder" === t.type ? 1 : "folder" === e.type && "file" === t.type ? -1 : e.name.localeCompare(t.name));
}
export function $$u2(e) {
  if (!e) return "";
  let t = x5.find(t => e.endsWith(t));
  return (t ? e.substring(0, e.length - t.length) : e).replace(/[^a-zA-Z0-9-_]/g, "_") + (t || ".tsx");
}
export const Ql = $$d0;
export const nU = $$l1;
export const tu = $$u2;
export const w_ = $$c3;