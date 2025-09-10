import { useMemo, useLayoutEffect } from "react";
import { customHistory } from "src/905/612521";
import { setupResourceAtomHandler } from "src/figma_app/566371";
import { parseQuerySimple } from "src/905/634134";
import { C as _$$C } from "src/905/237873";
import { S, N } from "src/905/872825";
import { zq } from "src/figma_app/598412";
import { pO, nS, Ac, Wk, aV } from "src/figma_app/321395";
import { H, e as _$$e } from "src/figma_app/324237";
import { Z } from "src/905/942203";
import { k } from "src/905/22009";
import { L as _$$L } from "src/905/178090";
import { LJ, gT, Tr, zU } from "src/figma_app/930386";
import { Zp } from "src/figma_app/188671";
import { VR, FZ, CS, p7 } from "src/figma_app/979714";
import { zs, OU, _4 } from "src/figma_app/773663";
var y = Object.getPrototypeOf;
var b = Reflect.get;
var T = (e, t, r) => b(y(e), r, t);
export function $$I3(e, t) {
  let r;
  let n = decodeURIComponent(e || customHistory.location.pathname);
  try {
    let e = pO($$N0)(n);
    if (!e) return null;
    r = e.params;
  } catch (e) {
    return null;
  }
  let a = $$x2.parseQueryString(t || customHistory.location.search);
  let s = r.categorySlug;
  let l = r.tagSlug;
  let {
    resourceType,
    editorType
  } = zs(a.editor_type, a.resource_type);
  let h = {
    category: s,
    resourceType,
    editor_type: editorType,
    price: a.price || _$$C.ALL,
    creators: Z.ALL,
    sort_by: H(),
    tags: l ? [l] : []
  };
  let m = a.sort_by;
  m && [_$$e.Browse.ALL_TIME, _$$e.Browse.PUBLISHED_AT, _$$e.Browse.POPULAR, _$$e.Browse.RANDOM].includes(m) && (h.sort_by = m);
  let g = a.creators;
  g && [Z.FIGMA_PARTNER, Z.FOLLOWING].includes(g) && (h.creators = g);
  return h;
}
export function $$S4(e) {
  let t = S(e.category, LJ);
  if (void 0 === t) return "/community";
  let {
    resourceType,
    editorType
  } = zs(e.editor_type, e.resourceType);
  return new $$N0({
    categorySlug: t,
    tagSlug: e.tags[0]
  }, {
    resource_type: resourceType,
    editor_type: editorType,
    price: e.price,
    sort_by: e.sort_by,
    creators: e.creators
  }).href;
}
class v extends nS {}
v.deserializeParams = e => {
  let t = zq();
  let r = L(e.categorySlug, t);
  if (void 0 === r) throw Error(`CategoryRoute: Invalid category slug ${e.categorySlug}`);
  return {
    ...e,
    categorySlug: r
  };
};
v.serializeParams = e => e;
v.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    resource_type: S(t.resource_type, _$$L.BrowseResourceTypes),
    editor_type: S(t.editor_type, k.Editors),
    price: S(t.price, _$$C.Price),
    sort_by: S(t.sort_by, _$$e.Browse),
    creators: S(t.creators, Z.Browse)
  };
};
let A = class extends v {};
Ac(A);
A.displayName = "CategoryRoute";
A.path = "/community/:categorySlug/:tagSlug?";
export let $$x2 = A;
export class $$N0 extends Wk($$x2) {
  constructor(e, t = {}, r) {
    let n = zq();
    let i = {
      ...e
    };
    if (e.categorySlug) {
      let t = L(e.categorySlug, n);
      t && (i.categorySlug = t);
    }
    super(i, t, r);
  }
}
let C = class extends v {};
Ac(C);
C.displayName = "ResourceHubCategoryRoute";
C.path = aV(VR, $$x2.path);
C.serializeParams = e => ({
  ...FZ(e),
  ...T(C, C, "serializeParams").call(void 0, e)
});
C.deserializeParams = e => ({
  ...CS(e),
  ...T(C, C, "deserializeParams").call(void 0, e)
});
C.parseQueryString = e => ({
  ...p7(e),
  ...T(C, C, "parseQueryString").call(void 0, e)
});
let $$w1 = C;
let $$O5 = Array.from(Object.values(LJ)).filter(e => e !== LJ.make).map(e => {
  let t = L(e, zq());
  return t ? new $$N0({
    categorySlug: t
  }).href : null;
}).filter(e => null !== e);
export function $$R6(e) {
  let {
    categorySlug,
    tagSlug
  } = e.params;
  let {
    editor_type,
    resource_type
  } = e.search;
  let l = zq();
  let [c] = setupResourceAtomHandler(Zp({
    categorySlug,
    tagSlug,
    locale: l
  }));
  let u = useMemo(() => "loaded" === c.status ? c.data.editor_types : [], [c.status, c.data]);
  useLayoutEffect(() => {
    if (u.length > 0 && (!editor_type || !u.includes(editor_type))) {
      let t = u[0];
      customHistory.replace(e.copyWith({}, {
        editor_type: t,
        resource_type: resource_type && OU(t, resource_type, {
          anchorOn: "editorType"
        }).resourceType
      }).href);
    }
  }, [e, u, editor_type, resource_type]);
  _4(e);
}
function L(e, t) {
  if (e) {
    if (t && t in gT) {
      if (N(e, LJ)) return Tr(e, t) || e;
      let r = zU(e, t);
      if (r && N(r, LJ)) return e;
    } else if (N(e, LJ)) return e;
  }
}
export const $E = $$N0;
export const Dv = $$w1;
export const IE = $$x2;
export const J5 = $$I3;
export const iB = $$S4;
export const m5 = $$O5;
export const pj = $$R6;
