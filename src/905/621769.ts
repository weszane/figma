import { gl } from "../905/216495";
import { nD } from "../905/92359";
import { te } from "../figma_app/97042";
export function $$s0(e, t, i) {
  let s = t.get(e);
  if (!s) return {
    backingLibraryKey: null,
    backingNodeId: null
  };
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = nD(new Set([(s?.type === "INSTANCE" ? s?.symbolId : s?.guid) ?? ""]), t);
  let d = null;
  let c = null;
  if (gl(backingSymbolGUID) || null === backingSymbolGUID || (d = t.get(backingSymbolGUID)), gl(backingStateGroupGUID) || null === backingStateGroupGUID || (c = t.get(backingStateGroupGUID)), "INSTANCE" === s.type && s.symbolId) {
    let e = t.get(s.symbolId);
    if (e?.isState) {
      let e = c?.sourceLibraryKey;
      return {
        backingNodeId: te(c),
        backingComponentKey: d?.assetKeyForPublish ?? void 0,
        backingStateGroupKey: c?.stateGroupKey ?? c?.assetKeyForPublish ?? void 0,
        backingLibraryKey: "" !== e ? e : i
      };
    }
    {
      let e = d?.sourceLibraryKey;
      return {
        backingNodeId: te(d),
        backingComponentKey: d?.assetKeyForPublish ?? void 0,
        backingLibraryKey: "" !== e ? e : i
      };
    }
  }
  return "SYMBOL" === s.type ? s.isState ? {
    backingNodeId: te(s.parentNode),
    backingComponentKey: s.parentNode?.assetKeyForPublish ?? void 0,
    backingLibraryKey: s.parentNode?.sourceLibraryKey && s.parentNode?.sourceLibraryKey !== "" ? s.parentNode?.sourceLibraryKey : i
  } : {
    backingNodeId: te(s),
    backingComponentKey: s.assetKeyForPublish ?? void 0,
    backingLibraryKey: "" !== s.sourceLibraryKey ? s.sourceLibraryKey : i
  } : s.isStateGroup ? {
    backingNodeId: te(s),
    backingComponentKey: s.assetKeyForPublish ?? void 0,
    backingLibraryKey: "" !== s.sourceLibraryKey ? s.sourceLibraryKey : i
  } : {
    backingLibraryKey: null,
    backingNodeId: null
  };
}
export const K = $$s0;