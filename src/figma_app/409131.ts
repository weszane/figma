import { useMemo } from "react";
import { TemplateType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { createRemovableAtomFamily, atom, useAtomWithSubscription } from "../figma_app/27355";
import { useMemoShallow } from "../905/19536";
import { resourceUtils } from "../905/989992";
import { ResourceStatus } from "../905/957591";
import { logInfo } from "../905/714362";
import { tS } from "../figma_app/516028";
import { J4 } from "../figma_app/349248";
import { arraysEqual } from "../figma_app/656233";
import { x8 } from "../905/888985";
import { _f } from "../905/760682";
import { LibraryModuleData, LibraryModuleDataByLibraryKey } from "../figma_app/43951";
let f = createRemovableAtomFamily(e => x8({
  fileKey: e
}));
createRemovableAtomFamily(e => atom(t => {
  let r = {};
  for (let n of e) r[n] = t(LibraryModuleData.Query({
    fileKey: n
  }));
  return r;
}), arraysEqual);
let E = createRemovableAtomFamily(e => atom(t => {
  let r = {};
  for (let n of e) r[n] = t(LibraryModuleDataByLibraryKey.Query({
    libraryKey: n
  }));
  return r;
}), _f);
let y = "all_sources";
export function $$b1(e, t) {
  let r = E(e);
  let n = useAtomWithSubscription(r);
  return useMemoShallow(() => {
    let e = resourceUtils.all(Object.values(n));
    return "loaded" !== e.status ? e.transform(() => ({})) : resourceUtils.loaded(Object.fromEntries(Object.entries(n).map(([e, r]) => [e, function (e, t = y) {
      if (e?.status !== "loaded") {
        logInfo("Modules", `Library atom value status not loaded: ${e?.status}`);
        return [];
      }
      let r = e.data.libraryKeyToFile;
      if (r?.status !== ResourceStatus.Loaded || !r.data) {
        logInfo("Modules", "libraryKeyToFile not loaded");
        return [];
      }
      let {
        file,
        hubFile
      } = r.data;
      if (!file?.modules?.length && !hubFile?.modules_v2?.length) {
        logInfo("Modules", `${file ? "File" : "Hub File"} modules not loaded`);
        return [];
      }
      let a = [];
      if (file?.modules?.length) {
        let e = file.modules.map(e => J4(e, {
          type: "teamTemplate",
          file
        })).filter($$I0).filter(e => t === y || e.moduleSource === t);
        a = a.concat(e);
      }
      if (hubFile?.modules_v2?.length) {
        let e = hubFile.modules_v2.map(e => J4(e, {
          type: "hubFile",
          file: hubFile
        }));
        a = a.concat(e);
      }
      return S(a, t);
    }(r, t)])));
  }, [n, t]);
}
export function $$T2() {
  let e = tS();
  let t = useMemo(() => e ? f(e) : atom(null), [e]);
  let r = useAtomWithSubscription(t);
  return useMemo(() => function (e, t = y) {
    if (e?.status !== "loaded") return [];
    let r = e.data.file;
    return r ? S(r.modules.map(e => J4(e, {
      type: "team",
      file: r
    })), t) : [];
  }(null != r ? resourceUtils.from(r) : void 0), [r]);
}
export function $$I0(e) {
  if (!getFeatureFlags().dse_module_publish) return !1;
  switch (e.moduleSource) {
    case TemplateType.EDITOR_TEMPLATE:
      return !1;
    case TemplateType.SLIDES_TEMPLATE:
      return !0;
    case TemplateType.SITES_TEMPLATE:
      return !!getFeatureFlags().sites;
    case TemplateType.LITE_TEMPLATE:
      return !!getFeatureFlags().cooper;
  }
}
function S(e, t) {
  return e.filter(e => (t === y || e.moduleSource === t) && $$I0(e));
}
export const RX = $$I0;
export const uW = $$b1;
export const Ns = $$T2;