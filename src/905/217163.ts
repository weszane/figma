import { resourceUtils } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { jN, X$ } from "../905/612685";
import { iAs } from "../figma_app/43951";
export function $$o0({
  libraryKey: e,
  disabled: t,
  nodeId: i,
  mainComponent: a,
  stateGroupId: o,
  isDevHandoff: d,
  isDevModeVarsTable: c,
  devModeVarsTableSelection: u,
  isDevModeOverview: p,
  devModeFocusId: m,
  isDevModeComponentBrowser: h,
  componentKey: g
}) {
  let f = Rs(iAs({
    libraryKey: e ?? ""
  }), {
    enabled: !t && !!e
  });
  return resourceUtils.useTransform(f, e => $$l1({
    data: e,
    nodeId: i,
    stateGroupId: o,
    isDevHandoff: d,
    isDevModeOverview: p,
    isDevModeVarsTable: c,
    devModeVarsTableSelection: u,
    devModeFocusId: m,
    mainComponent: a,
    isDevModeComponentBrowser: h,
    componentKey: g
  }));
}
export function $$l1({
  data: e,
  nodeId: t,
  stateGroupId: i,
  isDevHandoff: n,
  isDevModeVarsTable: r,
  devModeVarsTableSelection: s,
  isDevModeOverview: o,
  devModeFocusId: l,
  mainComponent: d,
  isDevModeComponentBrowser: c,
  componentKey: u
}) {
  let p = e.libraryKeyToFile;
  return p ? p.fileCanAccess ? {
    type: "team",
    link: jN({
      file: {
        key: p.fileCanAccess.key
      },
      nodeId: t,
      mainComponent: d,
      stateGroupId: i,
      isDevHandoff: n,
      isDevModeOverview: o,
      isDevModeVarsTable: r,
      devModeVarsTableSelection: s,
      devModeFocusId: l,
      isDevModeComponentBrowser: c,
      componentKey: u
    })
  } : p.hubFile ? {
    type: "community",
    link: X$(p.hubFile.id)
  } : void 0 : void 0;
}
export const b = $$o0;
export const c = $$l1;