import { COMPONENT_PREFIX, getComponentJSXName } from "../figma_app/664063";
import { id } from "../905/648693";
import { ServiceCategories as _$$e } from "../905/165054";
import { XJn, NfO } from "../figma_app/763686";
import { UN } from "../905/700578";
import { debugState } from "../905/407919";
import { $D } from "../905/11";
import { getRequest, XHRError, XHR } from "../905/910117";
import { U2 } from "../figma_app/193867";
import { n as _$$n } from "../905/347702";
import { Q$ } from "../9410/483857";
export function $$m0(e) {
  let t = new Set([]);
  let i = [...e];
  for (; i.length;) {
    let e = i.pop();
    if (e) {
      for (let a of (e.type.startsWith(COMPONENT_PREFIX) && t.add(e.type), e.children)) id(a) && i.push(a);
      for (let t of Object.values(e.props)) if ("string" != typeof t) {
        if (id(t)) i.push(t);else if (Array.isArray(t)) for (let e of t) id(e) && i.push(e);
      }
    }
  }
  return t;
}
async function f(e, t, i) {
  if (t?.type === "LOCAL") throw Error("Can only insert library components");
  if (!i) {
    $D(_$$e.AI_GENERATION, Error("[First Draft] Attempted to insert component without kitContents"));
    return {
      status: "error"
    };
  }
  let n = function (e, t) {
    let i = t.toLowerCase();
    if (e.components[i]) {
      let t = e.components[i];
      return {
        assetType: "component",
        key: t.key,
        version: t.version
      };
    }
    if (e.state_groups[i]) {
      let t = e.state_groups[i];
      return {
        assetType: "state_group",
        key: t.key,
        version: t.version
      };
    }
    return null;
  }(i, e);
  if (!n) return {
    status: "error"
  };
  let {
    assetType,
    key,
    version
  } = n;
  if ("component" === assetType) {
    let t = XJn.getComponentByKeyAndVersion(key, version);
    if (t) return {
      status: "success",
      key,
      version,
      jsxName: getComponentJSXName(e),
      guid: t
    };
  }
  if ("state_group" === assetType) {
    let t = XJn.getStateGroupByKeyAndVersion(key, version);
    if (t) return {
      status: "success",
      key,
      version,
      jsxName: getComponentJSXName(e),
      guid: t
    };
  }
  try {
    let e = debugState?.getState().fileVersion || 0;
    let t = await getRequest(`/api/file_proxy/${assetType}/${key}/version/${version}/canvas`, {
      fv: e.toString()
    }, {
      responseType: "arraybuffer"
    });
    let i = new Uint8Array(t.response);
    let n = NfO.deserializeProductComponentFromBuffer(key, i);
    let a = UN().get(n);
    if (!a) throw Error("Deserialized component not found in scene graph");
    return {
      status: "success",
      key,
      version,
      jsxName: getComponentJSXName(a.name),
      guid: n
    };
  } catch (e) {
    if (e instanceof XHRError && e.status >= 400) return {
      status: "error"
    };
    throw e;
  }
}
let g = _$$n(async function (e, t) {
  let i = U2(debugState?.getState().selectedView);
  let r = await XHR.post(`/api/first_draft/kit_contents/${e.key}`, {
    jsx_names: t,
    file_key: i
  });
  return r?.data?.meta ?? null;
});
export async function $$_1({
  dsKitKey: e,
  jsxJSON: t,
  componentNameToInsertResult: i
}) {
  if ("LOCAL" === e.type) return;
  let r = $$m0(t);
  let n = new Set();
  for (let e of r) e in i || n.add(e);
  if (0 === n.size) return;
  let a = await g(e, Array.from(n));
  let s = a?.components ?? {};
  let o = Q$(s);
  let l = a?.state_groups ?? {};
  let d = {
    components: o,
    state_groups: Q$(l)
  };
  await Promise.all(Array.from(n).map(async t => {
    let r = await f(t, e, d);
    "success" === r.status && (i[r.jsxName] = r);
    return r;
  }));
}
export const fv = $$m0;
export const pK = $$_1;