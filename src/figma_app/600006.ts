import { parseQuerySimple } from "../905/634134";
import { C } from "../905/237873";
import { S } from "../905/872825";
import { nS, Ac, Wk, aV } from "../figma_app/321395";
import { e as _$$e } from "../figma_app/324237";
import { Z } from "../905/942203";
import { editorUtilities } from "../905/22009";
import { ResourceTypes, ResourceTypeSubset } from "../905/178090";
import { VR, FZ, CS } from "../figma_app/979714";
class p extends nS {}
let _ = class extends p {
  constructor(e, t) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypes.SearchResourceTypes.MIXED,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
      price: t.price ?? C.ALL,
      sort_by: t.sort_by ?? _$$e.Search.RELEVANCY,
      creators: t.creators ?? Z.Search.ALL
    });
  }
};
Ac(_);
_.displayName = "SearchRoute";
_.path = "/community/search";
_.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    query: t.query ?? "",
    resource_type: S(t.resource_type, ResourceTypes.SearchResourceTypes),
    editor_type: S(t.editor_type, editorUtilities.Editors),
    price: S(t.price, C.Price),
    sort_by: S(t.sort_by, _$$e.Search),
    creators: S(t.creators, Z.Search)
  };
};
let $$h2 = Wk(_);
let m = class extends p {
  constructor(e, t) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypeSubset.FILES,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL,
      price: t.price ?? C.ALL
    });
  }
};
Ac(m);
m.displayName = "ResourceHubSearchRoute";
m.path = aV(VR, _.path);
m.serializeParams = FZ;
m.deserializeParams = CS;
m.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    query: t.query ?? "",
    resource_type: S(t.resource_type, ResourceTypeSubset),
    editor_type: S(t.editor_type, editorUtilities.Editors),
    price: S(t.price, C.Price)
  };
};
let $$g1 = m;
let f = class extends p {
  constructor(e, t) {
    super(e, {
      ...t,
      resource_type: t.resource_type ?? ResourceTypeSubset.FILES,
      editor_type: t.editor_type ?? editorUtilities.Editors.ALL
    });
  }
};
Ac(f);
f.displayName = "ResourceHubInternalSearchRoute";
f.path = aV(VR, "/internal/search");
f.serializeParams = FZ;
f.deserializeParams = CS;
f.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    query: t.query ?? "",
    resource_type: S(t.resource_type, ResourceTypeSubset),
    editor_type: S(t.editor_type, editorUtilities.Editors)
  };
};
export let $$E0 = f;
export const IQ = $$E0;
export const bP = $$g1;
export const n6 = $$h2;