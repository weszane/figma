import { tKW } from "../figma_app/763686";
import { uz, p, Ap, LK, NU } from "../905/359509";
import { K6 } from "../905/515076";
import { debugState } from "../905/407919";
import { NW, xC, DM } from "../figma_app/300692";
import { nT } from "../figma_app/53721";
import { X } from "../905/661977";
export let $$c0 = {
  scaledWeb: "rem",
  scaledIOS: "pt",
  scaledAndroid: "dp",
  scaledAndroidText: "sp",
  pixel: "px"
};
export function $$u3(e, t) {
  let i = function (e, {
    searchLocalPlugins: t,
    searchPublishedPlugins: i
  }) {
    let n = function () {
      let e = debugState.getState().localPlugins;
      return NW(nT.DevHandoff, e);
    }();
    let r = function () {
      let e = debugState.getState().publishedPlugins;
      return xC(nT.DevHandoff, e);
    }();
    return DM({
      idToSearch: e,
      localExtensionsByFileId: t ? n : void 0,
      publishedExtensions: i ? r : void 0
    });
  }(e.id, {
    searchLocalPlugins: "local-plugin" === e.type,
    searchPublishedPlugins: "published-plugin" === e.type
  });
  return $$p2(e, i, t);
}
export function $$p2(e, t, i) {
  return i === tKW.PIXEL ? $$c0.pixel : $$m1(e, t);
}
export function $$m1(e, t, i) {
  let {
    id,
    type,
    pluginLanguage
  } = e;
  if ("first-party" !== type && t) {
    let e = X(t, pluginLanguage);
    let i = K6(t, e);
    if (i) return i.scaledUnit;
  }
  switch (id) {
    case uz:
      return $$c0.scaledWeb;
    case p:
    case Ap:
      return $$c0.scaledIOS;
    case LK:
    case NU:
      if (i?.isTextProperty) return $$c0.scaledAndroidText;
      return $$c0.scaledAndroid;
    default:
      return $$c0.scaledWeb;
  }
}
export const kn = $$c0;
export const Uh = $$m1;
export const ip = $$p2;
export const $o = $$u3;