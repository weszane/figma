import { throwTypeError } from "../figma_app/465776";
import { localStorageRef } from "../905/657224";
import { my } from "../figma_app/976749";
import { FPublisherType } from "../figma_app/191312";
import { ResourceType } from "../figma_app/45218";
import { FEditorType, isDesignOrIllustration } from "../figma_app/53721";
import { $A, dB, vt } from "../905/862883";
import { getPluginVersion } from "../figma_app/300692";
export function $$u5() {
  let e = my();
  return e === FEditorType.Whiteboard ? $A.FigJam : isDesignOrIllustration(e) ? $A.Design : e === FEditorType.DevHandoff ? $A.Handoff : e === FEditorType.Slides ? $A.Slides : e === FEditorType.Cooper ? $A.Cooper : null;
}
let $$p12 = "recent-widgets-figjam";
let $$_2 = "recent-plugins-figjam";
let $$h7 = "recent-widgets-figma-design";
let $$m11 = "recent-plugins-figma-design";
let $$g8 = "recent-plugins-slides";
let $$f3 = "recent-face-stamps-figjam";
let $$E0 = "recent-whiteboard-tools-figjam";
export function $$y1(e, t) {
  if (e === $A.FigJam) switch (t) {
    case ResourceType.PLUGIN:
      return $$_2;
    case ResourceType.WIDGET:
      return $$p12;
    case ResourceType.HUB_FILE:
      return "recent-templates-figjam";
    case dB.FACE_STAMP:
      return $$f3;
    case dB.WHITEBOARD_TOOL:
      return $$E0;
    default:
      return null;
  }
  if (e === $A.Design) switch (t) {
    case ResourceType.PLUGIN:
      return $$m11;
    case ResourceType.WIDGET:
      return $$h7;
    default:
      return null;
  }
  if (e === $A.Handoff) return t === ResourceType.PLUGIN ? "recent-plugins-handoff" : null;
  if (e === $A.Slides) switch (t) {
    case ResourceType.HUB_FILE:
      return "recent-templates-piper";
    case ResourceType.PLUGIN:
      return $$g8;
    default:
      return null;
  }
  return e === $A.Cooper && t === ResourceType.PLUGIN ? "recent-plugins-cooper" : null;
}
export function $$b9(e, t) {
  if (!localStorageRef) return [];
  let r = [];
  let n = $$y1(e, t);
  let a = n && localStorageRef.getItem(n);
  try {
    r = a && JSON.parse(a) || [];
  } catch (e) {}
  return r.map(e => ({
    ...e,
    type: e.type || vt.CommunityResource
  }));
}
export function $$T10(e) {
  let t = getPluginVersion(e);
  let r = e.community_publishers.accepted.map(e => ({
    isPending: !1,
    profile: {
      id: e.id,
      profileHandle: e.profile_handle,
      user: null,
      team: null,
      org: null,
      [e.entity_type]: {
        name: e.name
      }
    },
    role: FPublisherType.CREATOR
  }));
  t.community_publishers = r;
  return t;
}
export function $$I6(e) {
  switch (e.type) {
    case vt.CommunityResource:
      return e.id;
    case vt.TeamTemplate:
      return e.key;
    default:
      throwTypeError(e);
  }
}
export function $$S4(e) {
  return $$b9(e, ResourceType.HUB_FILE).length;
}
export const JG = $$E0;
export const Jl = $$y1;
export const S7 = $$_2;
export const SO = $$f3;
export const TI = $$S4;
export const U_ = $$u5;
export const X2 = $$I6;
export const YN = $$h7;
export const a7 = $$g8;
export const gJ = $$b9;
export const ul = $$T10;
export const vY = $$m11;
export const xk = $$p12;