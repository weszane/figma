import { parseQuerySimple } from "../905/634134";
import { fs } from "../figma_app/930338";
import { nS, Ac, Wk, aV } from "../figma_app/321395";
import { G4 } from "../figma_app/707808";
import { VR, FZ, CS, p7 } from "../figma_app/979714";
var l = Object.getPrototypeOf;
var d = Reflect.get;
var c = (e, t, r) => d(l(e), r, t);
var $$u2 = (e => (e.FILE = "file", e.WIDGET = "widget", e.PLUGIN = "plugin", e))($$u2 || {});
var $$p1 = (e => (e.FILE = "files", e.WIDGET = "widgets", e.PLUGIN = "plugins", e))($$p1 || {});
class _ extends nS {
  constructor(e, t) {
    super({
      ...e,
      urlSlug: fs(e.urlSlug)
    }, t);
  }
}
_.deserializeParams = e => ({
  ...e,
  apiResourceType: e.apiResourceType
});
_.serializeParams = e => e;
_.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    comment: t.comment,
    checkout: t.checkout,
    rating: t.rating
  };
};
let h = class extends _ {};
Ac(h);
h.displayName = "ResourceRoute";
h.path = "/community/:apiResourceType(file|plugin|widget)/:resourceId/:urlSlug?";
let $$m3 = Wk(h);
let g = class extends _ {};
Ac(g);
g.displayName = "ResourceHubResourceRoute";
g.path = aV(VR, h.path);
g.serializeParams = e => ({
  ...FZ(e),
  ...c(g, g, "serializeParams").call(void 0, e)
});
g.deserializeParams = e => ({
  ...CS(e),
  ...c(g, g, "deserializeParams").call(void 0, e)
});
g.parseQueryString = e => ({
  ...p7(e),
  ...c(g, g, "parseQueryString").call(void 0, e)
});
let $$f4 = g;
let E = class extends _ {
  constructor(e, t) {
    super({
      ...e,
      apiResourceType: "file"
    }, t);
  }
};
Ac(E);
E.displayName = "HubFileRoute";
E.path = "/community/:apiResourceType(file)/:resourceId/:urlSlug?";
E.serializeParams = e => c(E, E, "serializeParams").call(void 0, {
  ...e,
  apiResourceType: "file"
});
E.deserializeParams = e => ({
  ...c(E, E, "deserializeParams").call(void 0, e),
  apiResourceType: "file"
});
E.parseQueryString = e => {
  let t = parseQuerySimple(e);
  return {
    ...c(E, E, "parseQueryString").call(void 0, e),
    preview: (() => {
      let e = t.preview;
      if (void 0 !== e) return parseInt(e) === G4.DEFAULT ? G4.DEFAULT : e;
    })(),
    freemium_preview: t.freemium_preview
  };
};
export let $$y0 = E;
export const Tg = $$y0;
export const UF = $$p1;
export const Uo = $$u2;
export const Xu = $$m3;
export const jT = $$f4;