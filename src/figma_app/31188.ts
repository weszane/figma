import { PWo, Ocq, P5M } from "../figma_app/763686";
import { atom, setupCustomAtom } from "../figma_app/27355";
import s from "../vendor/149674";
import { logError } from "../905/714362";
import { Y5 } from "../figma_app/455680";
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
PWo.RESPONSIVE_SET;
PW.CODE_LIBRARY;
PWo.CODE_LIBRARY;
PW.CODE_FILE;
PWo.CODE_FILE;
PW.CODE_COMPONENT;
PWo.CODE_COMPONENT;
PW.MANAGED_STRING;
PWo.MANAGED_STRING;
let f = {
  [PWo.RESPONSIVE_SET]: {
    [Ocq.LOCAL]: X1,
    [Ocq.SUBSCRIBED]: _t
  },
  [PWo.CODE_LIBRARY]: {
    [Ocq.LOCAL]: V,
    [Ocq.SUBSCRIBED]: Q
  },
  [PWo.CODE_FILE]: {
    [Ocq.LOCAL]: _$$y,
    [Ocq.SUBSCRIBED]: _$$d
  },
  [PWo.CODE_COMPONENT]: {
    [Ocq.LOCAL]: r,
    [Ocq.SUBSCRIBED]: I
  },
  [PWo.MANAGED_STRING]: {
    [Ocq.LOCAL]: fA,
    [Ocq.SUBSCRIBED]: cx
  }
};
let $$E0 = {
  [PW.RESPONSIVE_SET]: {
    local: y(PWo.RESPONSIVE_SET, Ocq.LOCAL),
    subscribed: y(PWo.RESPONSIVE_SET, Ocq.SUBSCRIBED)
  },
  [PW.CODE_LIBRARY]: {
    local: y(PWo.CODE_LIBRARY, Ocq.LOCAL),
    subscribed: y(PWo.CODE_LIBRARY, Ocq.SUBSCRIBED)
  },
  [PW.CODE_FILE]: {
    local: y(PWo.CODE_FILE, Ocq.LOCAL),
    subscribed: y(PWo.CODE_FILE, Ocq.SUBSCRIBED)
  },
  [PW.CODE_COMPONENT]: {
    local: y(PWo.CODE_COMPONENT, Ocq.LOCAL),
    subscribed: y(PWo.CODE_COMPONENT, Ocq.SUBSCRIBED)
  },
  [PW.MANAGED_STRING]: {
    local: y(PWo.MANAGED_STRING, Ocq.LOCAL),
    subscribed: y(PWo.MANAGED_STRING, Ocq.SUBSCRIBED)
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
  let l = `assetByKeyAtom(${PWo[e]}, ${Ocq[t]})`;
  s.debugLabel = l;
  s.onMount = n => {
    var a;
    let s = () => {
      n({
        changed: P5M.getAllAssets(e, t).map(r).filter(e => null !== e)
      });
    };
    Y5.isReady() ? s() : Y5.onReady().then(s);
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
  [PWo.RESPONSIVE_SET]: {
    [Ocq.LOCAL]: null,
    [Ocq.SUBSCRIBED]: null
  },
  [PWo.CODE_LIBRARY]: {
    [Ocq.LOCAL]: null,
    [Ocq.SUBSCRIBED]: null
  },
  [PWo.CODE_FILE]: {
    [Ocq.LOCAL]: null,
    [Ocq.SUBSCRIBED]: null
  },
  [PWo.CODE_COMPONENT]: {
    [Ocq.LOCAL]: null,
    [Ocq.SUBSCRIBED]: null
  },
  [PWo.MANAGED_STRING]: {
    [Ocq.LOCAL]: null,
    [Ocq.SUBSCRIBED]: null
  }
};
class T {
  syncAddedOrChangedAssets(e, t, r) {
    if (t === Ocq.SUBSCRIBED) {
      let n = f[e]?.[Ocq.SUBSCRIBED];
      if (!n) {
        logError("design-systems", `No parser found for ${e} and ${t}`);
        return;
      }
      b[e]?.[Ocq.SUBSCRIBED]?.({
        changed: r.map(n).filter(e => null !== e)
      });
    } else if (t === Ocq.LOCAL) {
      let n = f[e]?.[Ocq.LOCAL];
      if (!n) {
        logError("design-systems", `No parser found for ${e} and ${t}`);
        return;
      }
      b[e]?.[Ocq.LOCAL]?.({
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