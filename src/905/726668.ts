import { useMemo, useRef } from "react";
import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { resourceUtils } from "../905/989992";
import l from "../vendor/239910";
import { Rs, p as _$$p } from "../figma_app/288654";
import { logError } from "../905/714362";
import { o27 } from "../figma_app/43951";
var d = l;
export function $$m1(e, {
  enabled: t = !0
} = {}) {
  let i = Rs(o27, {
    libraryKey: e
  }, {
    enabled: t
  });
  return useMemo(() => i.transform(g), [i]);
}
export function $$h0(e, {
  enabled: t = !0
} = {}) {
  let i = useMemo(() => e.map(e => ({
    libraryKey: e
  })), [e]);
  let a = _$$p(o27, i, {
    enabled: t
  });
  let s = useRef(new Set([]));
  return useMemo(() => resourceUtils.all(a.map(e => e.result)).transform(e => {
    let t = e.map(e => g(e, s.current)).filter(isNotNullish);
    return d()(t, e => e.libraryKey);
  }), [a]);
}
function g(e, t) {
  if (!e.libraryKeyToFile) return null;
  let {
    file,
    hubFile,
    libraryKey
  } = e.libraryKeyToFile;
  let o = _$$l(libraryKey);
  return hubFile?.currentHubFileVersion ? {
    libraryKey: o,
    isHubFile: !0,
    name: hubFile.currentHubFileVersion.name,
    thumbnailUrl: hubFile.thumbnailUrl
  } : file ? {
    libraryKey: o,
    isHubFile: !1,
    name: file.name,
    thumbnailUrl: file.thumbnailUrl,
    thumbnailUrlOverride: file.thumbnailUrlOverride,
    thumbnailGuid: file.thumbnailGuid
  } : (t?.has(libraryKey) || (e.libraryKeyToFile && getFeatureFlags().dse_lk_library_metadata_sentry && logError("designSystems", "Unexpectedly failed to access library by key", {
    libraryKey
  }, {
    reportAsSentryError: !0
  }), t?.add(libraryKey)), null);
}
export const V = $$h0;
export const e = $$m1;