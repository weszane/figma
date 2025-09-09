import { useState, useEffect } from "react";
import { getComponentInfoById } from "../figma_app/664063";
import { z_ } from "../figma_app/338442";
import { getFeatureFlags } from "../905/601108";
import { U } from "../figma_app/901889";
import { useCurrentFileKey } from "../figma_app/516028";
import { u as _$$u } from "../figma_app/443973";
import { generateUUIDv4 } from "../905/871474";
import { XHR } from "../905/910117";
import { T1 } from "../figma_app/545293";
import { B, t as _$$t } from "../figma_app/325988";
async function _(e) {
  let {
    node,
    file_key
  } = e;
  let n = {
    session_id: null,
    search_id: generateUUIDv4(),
    node_id: e.node.guid
  };
  try {
    let e = T1(node);
    if (!e) throw Error("Failed to export thumbnail");
    return {
      fragments: (await XHR.post("/api/auto_suggest_props/fragment_search", {
        input: {
          type: "image",
          value: e
        },
        file_key,
        tracking_metadata: n
      })).data.meta.results.map(e => ({
        ...e,
        type: "fig-file-fragment"
      }))
    };
  } catch (e) {
    return;
  }
}
async function m(e, t, r, n, a) {
  let s = performance.now();
  if (!a) {
    console.error("Could not find the open file ");
    return {};
  }
  let o = r.get(e);
  if (!o) {
    console.error("Could not find component in scene graph: ", e);
    return {};
  }
  let l = r.get(t);
  if (!l) {
    console.error("Could not find selected node in scene graph: ", t);
    return {};
  }
  let d = B(l);
  let c = await _({
    type: "input-selection",
    node: d,
    file_key: a,
    name: d.name
  });
  if (!c || 0 === c.fragments.length) {
    console.error("No fragment search results");
    return Promise.resolve({});
  }
  let u = Array.from(new Map(c.fragments.map(e => [`${e.file_key}_${e.node_id}`, e])).values());
  let p = getComponentInfoById(o.guid, {
    enableTsArrays: !1
  });
  if (!p) {
    console.error("Could not find selected component");
    return Promise.resolve({});
  }
  let m = p.key;
  let g = [];
  u.forEach(e => {
    e.component_usages?.forEach(e => {
      if (e.key === m) {
        let n = r.get(t);
        let i = e.stateComponentKey && n ? _$$t(e.stateComponentKey, n, r) : null;
        let a = {};
        let s = i?.variantProperties();
        s && Object.entries(s).forEach(([e, t]) => {
          a[e] = t;
        });
        Object.entries(e.props).forEach(([e, t]) => {
          let r = function (e) {
            let t = e.split("#");
            return 2 !== t.length ? e : t.reverse().join("#");
          }(e);
          let n = p?.parsedDefs.find(e => e.rawProp === r);
          a[r] = n ? function (e, t) {
            switch (t) {
              case "BOOLEAN":
                return "true" === e;
              case "NUMBER":
                return parseFloat(e);
              default:
                return e;
            }
          }(t, n.def.type) : t;
        });
        g.push(a);
      }
    });
  });
  let f = function (e) {
    let t = {};
    e.forEach(e => {
      Object.entries(e).forEach(([e, r]) => {
        t[e] || (t[e] = new Map());
        let n = t[e].get(r) || 0;
        t[e].set(r, n + 1);
      });
    });
    let r = {};
    for (let e in t) {
      let n = t[e] ? Array.from(t[e].entries()).reduce((e, t) => t[1] > e[1] ? t : e)[0] : void 0;
      n && (r[e] = n);
    }
    return r;
  }(g);
  return (n("autosuggest_props_fs_perf", {
    totalMs: Math.round(performance.now() - s),
    numFragments: c.fragments.length,
    numMatchingComponents: g.length,
    matchingComponentsUsedProps: JSON.stringify(g),
    suggestedProps: JSON.stringify(f),
    componentKey: p.key
  }), 0 === Object.keys(f).length) ? Promise.resolve({}) : {
    componentProps: f
  };
}
let g = {};
export function $$f1(e, t, r, c) {
  let u = useCurrentFileKey();
  let p = U();
  let [_, h] = useState(g);
  let [f, y] = useState(!1);
  useEffect(() => {
    if (!r || !c) {
      y(!1);
      return;
    }
    h(g);
    y(!0);
    let n = new AbortController();
    (function (e, t, r, n, i, s) {
      let o;
      switch ($$E0()) {
        case z_.GPT:
          o = _$$u(t, e, r, n, i);
          break;
        case z_.FS:
          o = m(t, e, r, i, s);
          break;
        default:
          o = Promise.resolve({});
      }
      return o;
    })(e, t, c, n.signal, p, u ?? void 0).then(e => {
      if (!n.signal.aborted) {
        h(e);
        let r = c.get(t);
        let n = r ? getComponentInfoById(r.guid, {
          enableTsArrays: !1
        }) : null;
        0 === Object.keys(e).length && p("autosuggest_props_no_suggestions", {
          fileKey: u,
          componentKey: n?.key,
          guid: r?.guid,
          method: getFeatureFlags().anticipation_props_fs ? z_.FS : z_.GPT
        });
      }
    }).catch(e => {
      "AbortError" !== e.name && console.error(`Error getting results: ${e}`);
    }).$$finally(() => {
      n.signal.aborted || y(!1);
    });
    return () => {
      n && n.abort();
    };
  }, [r, e, t]);
  return {
    autosuggestedValues: _,
    isLoading: f
  };
}
export function $$E0() {
  return getFeatureFlags().anticipation_props_fs ? z_.FS : z_.GPT;
}
export const p3 = $$E0;
export const V2 = $$f1;