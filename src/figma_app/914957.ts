import { NC } from "../905/17179";
import { nF } from "../905/350402";
let $$a6 = NC("FULLSCREEN_HIDE_STYLE_PREVIEW");
let $$s2 = nF(e => {
  let t = e.getState().stylePreviewShown;
  t.isShown && !t.isCreating && e.dispatch($$a6());
});
let $$o3 = nF((e, t) => {
  let {
    rowTop,
    rowLeft,
    styleType,
    inheritStyleKeyField,
    styleNameInputPrefix,
    nodeId
  } = t;
  e.dispatch($$l1({
    rowTop,
    rowLeft,
    styleType,
    inheritStyleKeyField,
    styleNameInputPrefix,
    nodeId
  }));
});
let $$l1 = NC("SHOW_CREATE_STYLE_PREVIEW");
let $$d0 = NC("FULLSCREEN_SHOW_STYLE_PREVIEW");
let $$c5 = nF((e, t) => {
  e.dispatch($$d0(t));
});
let $$u4 = NC("STYLE_FILE_PUT_STYLE_SET");
NC("STYLE_FILE_GET_STYLE_SET");
export const Ev = $$d0;
export const FL = $$l1;
export const YG = $$s2;
export const Zs = $$o3;
export const nH = $$u4;
export const rk = $$c5;
export const sw = $$a6;