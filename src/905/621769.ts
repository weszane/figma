import { isInvalidValue } from "../905/216495";
import { computeBackingGUIDs } from "../905/92359";
import { getPublishedNodeId } from "../figma_app/97042";
export function $$s0(e, t, i) {
  let s = t.get(e);
  if (!s) return {
    backingLibraryKey: null,
    backingNodeId: null
  };
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = computeBackingGUIDs(new Set([(s?.type === "INSTANCE" ? s?.symbolId : s?.guid) ?? ""]), t);
  let d = null;
  let c = null;
  if (isInvalidValue(backingSymbolGUID) || null === backingSymbolGUID || (d = t.get(backingSymbolGUID)), isInvalidValue(backingStateGroupGUID) || null === backingStateGroupGUID || (c = t.get(backingStateGroupGUID)), "INSTANCE" === s.type && s.symbolId) {
    let e = t.get(s.symbolId);
    if (e?.isState) {
      let e = c?.sourceLibraryKey;
      return {
        backingNodeId: getPublishedNodeId(c),
        backingComponentKey: d?.assetKeyForPublish ?? void 0,
        backingStateGroupKey: c?.stateGroupKey ?? c?.assetKeyForPublish ?? void 0,
        backingLibraryKey: "" !== e ? e : i
      };
    }
    {
      let e = d?.sourceLibraryKey;
      return {
        backingNodeId: getPublishedNodeId(d),
        backingComponentKey: d?.assetKeyForPublish ?? void 0,
        backingLibraryKey: "" !== e ? e : i
      };
    }
  }
  return "SYMBOL" === s.type ? s.isState ? {
    backingNodeId: getPublishedNodeId(s.parentNode),
    backingComponentKey: s.parentNode?.assetKeyForPublish ?? void 0,
    backingLibraryKey: s.parentNode?.sourceLibraryKey && s.parentNode?.sourceLibraryKey !== "" ? s.parentNode?.sourceLibraryKey : i
  } : {
    backingNodeId: getPublishedNodeId(s),
    backingComponentKey: s.assetKeyForPublish ?? void 0,
    backingLibraryKey: "" !== s.sourceLibraryKey ? s.sourceLibraryKey : i
  } : s.isStateGroup ? {
    backingNodeId: getPublishedNodeId(s),
    backingComponentKey: s.assetKeyForPublish ?? void 0,
    backingLibraryKey: "" !== s.sourceLibraryKey ? s.sourceLibraryKey : i
  } : {
    backingLibraryKey: null,
    backingNodeId: null
  };
}
export const K = $$s0;