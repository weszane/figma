import { l as _$$l } from "../905/716947";
import { atom, createRemovableAtomFamily } from "../figma_app/27355";
import { createLoadingState, createLoadedState, createErrorState } from "../905/723791";
import { FileKeySourceEnum } from "../905/412913";
import { AssetAtomMap } from "../figma_app/31188";
import { openFileLibraryKeyAtom, openFileKeyAtom } from "../figma_app/516028";
import { O as _$$O } from "../905/566074";
import { deepEqual } from "../905/382883";
import { logError } from "../905/714362";
import { FComponentType } from "../figma_app/191312";
import { CodeComponentsInLibrary, LibraryAssetDataOfType } from "../figma_app/43951";
import { PrimaryWorkflowEnum as _$$PW } from "../905/497152";
import { publishedHubFileLibraryKeyAtom, libraryPublishingModeAtom, publishedHubFileIdAtom } from "../figma_app/825489";
import { propertyMappers } from "../905/395857";
import { isNotNullish } from "../figma_app/95419";
import x from "../vendor/239910";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { areFramesEqual } from "../figma_app/646357";
import { StagingStatusEnum, PrimaryWorkflowEnum as _$$PW2, LibrarySourceEnum } from "../figma_app/633080";
function _({
  libraryKey: e,
  assetType: t
}) {
  let i = propertyMappers[t];
  return I({
    libraryKey: e,
    assetType: t,
    livegraphAssetToLibraryAsset: i
  });
}
let A = {
  [_$$PW.RESPONSIVE_SET]: b(_$$PW.RESPONSIVE_SET),
  [_$$PW.CODE_COMPONENT]: b(_$$PW.CODE_COMPONENT)
};
let y = {
  [_$$PW.RESPONSIVE_SET]: v(_$$PW.RESPONSIVE_SET),
  [_$$PW.CODE_COMPONENT]: v(_$$PW.CODE_COMPONENT)
};
function b(e) {
  return atom(t => {
    let i = t(openFileLibraryKeyAtom);
    return i ? t(_({
      libraryKey: i,
      assetType: e
    })) : createLoadingState();
  });
}
function v(e) {
  return atom(t => {
    let i = t(publishedHubFileLibraryKeyAtom);
    return i ? t(_({
      libraryKey: i,
      assetType: e
    })) : createLoadingState();
  });
}
let I = createRemovableAtomFamily(({
  libraryKey: e,
  assetType: t,
  livegraphAssetToLibraryAsset: i
}) => atom(n => {
  if (!n(openFileLibraryKeyAtom)) return createLoadingState();
  let r = function (e) {
    switch (function (e) {
      switch (e) {
        case _$$PW.CODE_COMPONENT:
          return FComponentType.CODE_COMPONENT;
        case _$$PW.RESPONSIVE_SET:
          return FComponentType.RESPONSIVE_SET;
        case _$$PW.COMPONENT:
        case _$$PW.MODULE:
        case _$$PW.STATE_GROUP:
        case _$$PW.STYLE:
        case _$$PW.VARIABLE:
        case _$$PW.VARIABLE_OVERRIDE:
        case _$$PW.VARIABLE_SET:
        case _$$PW.CONSTRAINED_TEMPLATE:
        case _$$PW.CODE_LIBRARY:
        case _$$PW.CODE_FILE:
        case _$$PW.MANAGED_STRING:
          return null;
      }
    }(e)) {
      case FComponentType.CODE_COMPONENT:
        return e => CodeComponentsInLibrary.Query({
          libraryKey: e
        });
      case FComponentType.RESPONSIVE_SET:
        return e => LibraryAssetDataOfType.Query({
          libraryKey: e,
          assetType: FComponentType.RESPONSIVE_SET
        });
      default:
        return null;
    }
  }(t);
  if (!r) {
    logError("design-systems", "unsupported asset type for library asset query", {
      assetType: t
    }, {
      reportAsSentryError: !0
    });
    return createLoadedState({});
  }
  let s = n(r(e));
  switch (s.status) {
    case "loading":
      return createLoadingState();
    case "errors":
      return createErrorState(s.errors);
  }
  let o = s.data.libraryKeyToFile?.file;
  let d = s.data.libraryKeyToFile?.hubFile ?? o;
  if (!d) {
    logError("design-systems", "unexpected null file data", {
      libraryKey: e
    });
    return createLoadedState({});
  }
  let c = {};
  for (let t of d.libraryAssets) {
    let n = i(e, t);
    n && (c[n.key] = n);
  }
  return createLoadedState(c);
}), deepEqual);
var S = x;
let k = {
  [_$$PW.RESPONSIVE_SET]: N(AssetAtomMap[_$$PW.RESPONSIVE_SET].local, A[_$$PW.RESPONSIVE_SET]),
  [_$$PW.CODE_COMPONENT]: N(AssetAtomMap[_$$PW.CODE_COMPONENT].local, A[_$$PW.CODE_COMPONENT])
};
let R = {
  [_$$PW.RESPONSIVE_SET]: N(AssetAtomMap[_$$PW.RESPONSIVE_SET].local, y[_$$PW.RESPONSIVE_SET]),
  [_$$PW.CODE_COMPONENT]: N(AssetAtomMap[_$$PW.CODE_COMPONENT].local, y[_$$PW.CODE_COMPONENT])
};
function N(e, t, i = O, n = null) {
  return atom(s => {
    let o = s(t);
    if ("loaded" !== o.status) return o;
    let l = S()(Object.values(o.data).filter(isNotNullish), "sourceAssetId");
    let d = s(e);
    let c = new Set(Object.values(d).map(e => e.assetId));
    let u = {};
    let p = new Set();
    for (let e of Object.values(o.data)) {
      let t = e.sourceAssetId;
      c.has(t) || p.add([t, e.key]);
    }
    for (let e of Object.values(d)) {
      let t = s(n?.(e.assetId) ?? atom(null));
      let a = e.assetId;
      let o = l[a] ?? null;
      let d = i(e, o);
      u[a] = {
        libraryStatus: d,
        error: t,
        libraryAsset: o
      };
    }
    for (let [e, t] of p) u[e] = {
      libraryStatus: i(null, o.data[t] ?? null),
      error: null,
      libraryAsset: o.data[t] ?? null
    };
    return createLoadedState(u);
  });
}
function P(e, t) {
  return conditionalFeatureFlag("ds_user_facing_version_publishing", e.userFacingVersion !== t.userFacingVersion, e.version !== t.version) || areFramesEqual(e.containingFrame, t.containingFrame);
}
function O(e, t, i = P) {
  return e && e.isPublishable && !e.isSoftDeleted ? t ? i(e, t) ? StagingStatusEnum.CHANGED : StagingStatusEnum.CURRENT : StagingStatusEnum.NEW : t ? StagingStatusEnum.DELETED : StagingStatusEnum.NOT_STAGED;
}
let D = [_$$PW2.RESPONSIVE_SET, _$$PW2.CODE_COMPONENT];
let $$L0 = atom(e => {
  let t = {};
  let {
    libraryAssetAtoms,
    publishStatusAtoms,
    libraryKey,
    fileKey
  } = e(libraryPublishingModeAtom) === LibrarySourceEnum.HUBFILE ? {
    libraryAssetAtoms: y,
    publishStatusAtoms: R,
    libraryKey: e(publishedHubFileLibraryKeyAtom),
    fileKey: e(publishedHubFileIdAtom)
  } : {
    libraryAssetAtoms: A,
    publishStatusAtoms: k,
    libraryKey: e(openFileLibraryKeyAtom),
    fileKey: e(openFileKeyAtom)
  };
  for (let l of D) {
    if (!_$$O(l)) continue;
    let p = e(AssetAtomMap[l].local);
    let m = e(libraryAssetAtoms[l]);
    let h = e(publishStatusAtoms[l]);
    switch (h.status) {
      case "loading":
        return createLoadingState();
      case "errors":
        return createErrorState(h.errors);
      case "disabled":
        return createLoadedState({});
    }
    switch (m.status) {
      case "loading":
        return createLoadingState();
      case "errors":
        return createErrorState(m.errors);
      case "disabled":
        return createLoadedState({});
    }
    for (let [e, i] of Object.entries(h.data)) {
      if (!i) continue;
      let r = p[e];
      let a = i.libraryAsset;
      r ? t[e] = {
        ...r,
        status: i.libraryStatus,
        userFacingVersion: r.version,
        node_id: r.localGuid,
        file_key_source: FileKeySourceEnum.LOCAL_FILE,
        file_key: fileKey ?? "",
        library_key: libraryKey ?? _$$l("")
      } : t[e] = {
        type: l,
        status: i.libraryStatus,
        file_key_source: FileKeySourceEnum.LOCAL_FILE,
        file_key: fileKey ?? "",
        library_key: libraryKey ?? _$$l(""),
        userFacingVersion: a?.version ?? "",
        version: a?.version ?? "",
        name: a?.name ?? "",
        subscriptionStatus: "LOCAL",
        isPublishable: !1,
        keyForPublish: a?.key ?? "",
        node_id: a?.sourceAssetGuid ?? ""
      };
    }
  }
  return createLoadedState(t);
});
export const t = $$L0;