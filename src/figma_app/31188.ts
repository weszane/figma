import { FacetType, LibraryType, assetBindings } from "../figma_app/763686";
import { atom, setupCustomAtom } from "../figma_app/27355";
import s from "../vendor/149674";
import { logError } from "../905/714362";
import { fullscreenValue } from "../figma_app/455680";
import { Wh } from "../figma_app/615482";
import { r, I } from "../905/475511";
import { y as _$$y, d as _$$d } from "../905/387014";
import { V, Q } from "../905/236003";
import { fA, cx } from "../905/70197";
import { X1, _t } from "../905/722604";
import { PW } from "../figma_app/633080";
export let $$n2;
var o = s;
PW.RESPONSIVE_SET;
FacetType.RESPONSIVE_SET;
PW.CODE_LIBRARY;
FacetType.CODE_LIBRARY;
PW.CODE_FILE;
FacetType.CODE_FILE;
PW.CODE_COMPONENT;
FacetType.CODE_COMPONENT;
PW.MANAGED_STRING;
FacetType.MANAGED_STRING;
let f = {
  [FacetType.RESPONSIVE_SET]: {
    [LibraryType.LOCAL]: X1,
    [LibraryType.SUBSCRIBED]: _t
  },
  [FacetType.CODE_LIBRARY]: {
    [LibraryType.LOCAL]: V,
    [LibraryType.SUBSCRIBED]: Q
  },
  [FacetType.CODE_FILE]: {
    [LibraryType.LOCAL]: _$$y,
    [LibraryType.SUBSCRIBED]: _$$d
  },
  [FacetType.CODE_COMPONENT]: {
    [LibraryType.LOCAL]: r,
    [LibraryType.SUBSCRIBED]: I
  },
  [FacetType.MANAGED_STRING]: {
    [LibraryType.LOCAL]: fA,
    [LibraryType.SUBSCRIBED]: cx
  }
};
let $$E0 = {
  [PW.RESPONSIVE_SET]: {
    local: y(FacetType.RESPONSIVE_SET, LibraryType.LOCAL),
    subscribed: y(FacetType.RESPONSIVE_SET, LibraryType.SUBSCRIBED)
  },
  [PW.CODE_LIBRARY]: {
    local: y(FacetType.CODE_LIBRARY, LibraryType.LOCAL),
    subscribed: y(FacetType.CODE_LIBRARY, LibraryType.SUBSCRIBED)
  },
  [PW.CODE_FILE]: {
    local: y(FacetType.CODE_FILE, LibraryType.LOCAL),
    subscribed: y(FacetType.CODE_FILE, LibraryType.SUBSCRIBED)
  },
  [PW.CODE_COMPONENT]: {
    local: y(FacetType.CODE_COMPONENT, LibraryType.LOCAL),
    subscribed: y(FacetType.CODE_COMPONENT, LibraryType.SUBSCRIBED)
  },
  [PW.MANAGED_STRING]: {
    local: y(FacetType.MANAGED_STRING, LibraryType.LOCAL),
    subscribed: y(FacetType.MANAGED_STRING, LibraryType.SUBSCRIBED)
  }
};
function y(e, t) {
  let r = f[e][t];
  let n = Wh(() => atom({}));
  let s = setupCustomAtom(n, (e, t) => {
    if ("changed" in t) {
      let r = t.changed;
      return {
        ...e,
        ...r.reduce((e, t) => (e[t.assetId] = t, e), {})
      };
    }
    if ("removed" in t) {
      let r = new Set(t.removed);
      return o()(e, e => e && !r.has(e.assetId));
    }
    return "reset" in t ? {} : e;
  });
  let l = `assetByKeyAtom(${FacetType[e]}, ${LibraryType[t]})`;
  s.debugLabel = l;
  s.onMount = n => {
    var a;
    let s = () => {
      n({
        changed: assetBindings.getAllAssets(e, t).map(r).filter(e => null !== e)
      });
    };
    fullscreenValue.isReady() ? s() : fullscreenValue.onReady().then(s);
    a = e => {
      n(e);
    };
    b[e][t] = a;
    let o = () => {
      b[e][t] = null;
    };
    return () => {
      o();
      n({
        reset: !0
      });
    };
  };
  return s;
}
let b = {
  [FacetType.RESPONSIVE_SET]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null
  },
  [FacetType.CODE_LIBRARY]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null
  },
  [FacetType.CODE_FILE]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null
  },
  [FacetType.CODE_COMPONENT]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null
  },
  [FacetType.MANAGED_STRING]: {
    [LibraryType.LOCAL]: null,
    [LibraryType.SUBSCRIBED]: null
  }
};
class T {
  syncAddedOrChangedAssets(e, t, r) {
    if (t === LibraryType.SUBSCRIBED) {
      let n = f[e]?.[LibraryType.SUBSCRIBED];
      if (!n) {
        logError("design-systems", `No parser found for ${e} and ${t}`);
        return;
      }
      b[e]?.[LibraryType.SUBSCRIBED]?.({
        changed: r.map(n).filter(e => null !== e)
      });
    } else if (t === LibraryType.LOCAL) {
      let n = f[e]?.[LibraryType.LOCAL];
      if (!n) {
        logError("design-systems", `No parser found for ${e} and ${t}`);
        return;
      }
      b[e]?.[LibraryType.LOCAL]?.({
        changed: r.map(n).filter(e => null !== e)
      });
    } else logError("design-systems", `Invalid subscription status for AssetMirror: ${t}`);
  }
  syncRemovedAssets(e, t, r) {
    b[e]?.[t]?.({
      removed: r
    });
  }
  resetMirrorCache() {
    for (let e of Object.values(b)) for (let t of Object.values(e)) t?.({
      reset: !0
    });
  }
}
export function $$I1() {
  $$n2 = new T();
}
export const Mk = $$E0;
export const WY = $$I1;
export const ki = $$n2;