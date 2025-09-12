import { createActionCreator } from "../905/73481";
let $$i5 = createActionCreator("SEARCH_SELECTED");
let $$a0 = createActionCreator("SEARCH_START_SESSION");
let $$s6 = createActionCreator("SEARCH_END_SESSION");
let $$o3 = createActionCreator("SEARCH_RESTORE_SESSION");
let $$l4 = createActionCreator("SEARCH_SESSION_SEE_MORE_CLICK");
let $$d8 = createActionCreator("SEARCH_SESSION_ENTERED_SEARCH_VIEW");
let $$c1 = createActionCreator("SEARCH_SESSION_ENTERED_SEARCH_VIEW_VIA_ENTER");
let $$u7 = createActionCreator("SEARCH_INCREMENT_QUERY_COUNT");
export function $$p2() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;
}
export const Dy = $$a0;
export const Je = $$c1;
export const MZ = $$p2;
export const NR = $$o3;
export const Pj = $$l4;
export const W0 = $$i5;
export const ky = $$s6;
export const pY = $$u7;
export const r0 = $$d8;