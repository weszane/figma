import _require from "../2824/40443";
import { sj, Ep, _0, s8, n2, pD, k9, NB, Zw, fJ } from "../figma_app/728005";
import { ServiceCategories as _$$e } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import l from "lodash-es/camelCase";
import c from "../vendor/77708";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { xg } from "../figma_app/677646";
import { GS } from "../figma_app/314264";
import { zb } from "../905/902840";
import { uA } from "../figma_app/781512";
import { B9, Py } from "../figma_app/346422";
import { hB } from "../figma_app/609511";
import { pe, lk, Pq, f as _$$f, Lw } from "../figma_app/342355";
import { Q } from "../905/938332";
import { w6 } from "../905/372596";
import { l as _$$l } from "../905/882689";
var d = l;
var u = c;
export async function $$A0(e, t, l, c, p) {
  let {
    designToReact
  } = await Promise.all([]).then(_require);
  let C = atomStoreManager.get(pe);
  let O = atomStoreManager.get(lk);
  let R = atomStoreManager.get(Pq);
  let L = atomStoreManager.get(_$$f);
  let P = new Map();
  let D = {
    transformer: B9,
    assets: P
  };
  let k = new Set();
  let M = c();
  let F = !0;
  let j = {};
  let U = {};
  let B = new Set();
  let G = new Set();
  let V = {};
  function H(t, r) {
    F = !1;
    Object.assign(j, t);
    Object.assign(U, r);
    Object.keys(j).forEach(e => {
      B.add(e);
    });
    Object.keys(U).forEach(e => {
      G.add(e);
    });
    Q(e, B, debugState);
  }
  if (Lw()) {
    let [e, t] = await M;
    H(e, t);
    V = U ? Object.fromEntries(Object.entries(U).map(([e, t]) => [e, {
      "data-codebase-suggestions": JSON.stringify(t)
    }])) : {};
  }
  let z = function (e) {
    try {
      let t = function (e, a) {
        let s = e.annotations.filter(e => e.label);
        s.length > 0 && s.forEach(t => {
          let s = t.categoryId ? r?.find(e => e.id === t.categoryId) : null;
          let o = s ? `data-${uA(s).trim().replace(/[^a-zA-Z0-9\-\.:_]/g, "-").replace(/\-+/g, "-").replace(/^\-+|\-+$/g, "")}-annotations` : "data-annotations";
          let l = zb(t.label);
          n.push({
            name: o,
            value: l,
            nodeIds: [e.guid, ...a],
            mergeFn: i
          });
        });
        e.childrenNodes.forEach(r => t(r, [e.guid, ...a]));
      };
      let r = e.sceneGraph.getRoot().annotationCategories;
      let n = [];
      let i = e => e.join(" | ");
      t(e, []);
      return n;
    } catch (t) {
      console.error("Error extracting annotations", t);
      reportError(_$$e.DEVELOPER_TOOLS, t, {
        extra: {
          rootNode: e?.guid
        }
      });
      return [];
    }
  }(e);
  let W = getFeatureFlags().d2r_refactor_mcp ?? !1;
  let K = performance.now();
  let {
    files
  } = await designToReact(e, async e => {
    let t = performance.now();
    let r = await hB({
      assets: P,
      compactDOM: !0,
      isMcpGeneration: !0,
      shouldOutputVariables: getFeatureFlags().dt_mcp_inline_variables ?? !1,
      codeSyntaxLanguage: l
    });
    let i = await r.serializeHTML(e.guid);
    w6("html_serialization", performance.now() - t, sj);
    let [a, o] = await M;
    F && H(a, o);
    return i;
  }, {
    markupImageOption: C,
    imageAssetsOptions: D,
    convertToTailwindCSS: O,
    inlineStyleProperties: !O,
    useFigmaComponents: !0,
    useFigmaComponentForNode: e => !B.has(e) && !G.has(e),
    variantSerializationMode: "used",
    disableExtractFrames: !0,
    disableSvgImports: !0,
    optimizeCode: e => {
      if (W) {
        let t = performance.now();
        let r = Py(e, !0);
        r.then(() => {
          w6("code_optimization", performance.now() - t, sj);
        });
        return r;
      }
      return Promise.resolve(e);
    },
    domNodeToReactStr: ({
      attributes: e
    }) => {
      let t = e?.getNamedItem("id")?.value;
      if (!t) return null;
      let r = xg(t);
      if (!r) return null;
      let n = getSingletonSceneGraph().getFromDeveloperFriendlyId(r);
      if (!n || !N(n)) return null;
      let i = j[n.guid];
      if (i) {
        let t = function e(t, r, n) {
          if (!t.visible) return [];
          let i = N(t) ? r[t.guid] : null;
          if (i?.snippet) {
            i?.snippetImports ? i.snippetImports.forEach(e => {
              n.add(e);
            }) : i.source && n.add(`import ${i.componentName} from "${i.source}"`);
            return [i.snippet];
          }
          {
            let o = [];
            for (let i of t.childrenNodes) {
              let t = e(i, r, n);
              o.push(...t);
            }
            if (i) {
              var a;
              var s;
              let e = "";
              try {
                a = t.componentProperties();
                e = Object.entries(a).map(([e, t]) => {
                  let r = d()(e.split("#")[0]);
                  let n = "string" == typeof t.value ? `"${t.value}"` : `{${t.value}}`;
                  return `${r}=${n}`;
                }).join(" ");
              } catch (e) {}
              let r = [];
              let l = i.componentName || (s = t.name, u()(d()(s)));
              i.source && n.add(`import ${l} from "${i.source}"`);
              o.length > 0 ? (r.push(w({
                componentName: l,
                props: e,
                hasChildren: !0
              })), r.push(...o), r.push(w({
                componentName: l,
                props: "",
                isClosingTag: !0
              }))) : r.push(w({
                componentName: l,
                props: e
              }));
              return r;
            }
            return o;
          }
        }(n, j, k);
        if (t.length > 0) {
          let r = Array.from(e).filter(e => "class" !== e.name).map(e => `${e.name}="${e.value}"`).concat(i.label ? [`data-snippet-language="${i.label}"`] : []).join(" ");
          return `<CodeConnectSnippet ${r}>${t.join("\n")}</CodeConnectSnippet>`;
        }
      }
      return null;
    },
    attributes: V,
    attributesWithFallback: z
  });
  w6("design_to_react", performance.now() - K, sj);
  let $ = files.find(e => "index.tsx" === e.name)?.contents;
  if (!$ || "string" != typeof $) throw Error("No index.tsx string file found");
  $ = $.replace(/id="node-(\d+)_(\d+)"/g, (e, t, r) => `data-node-id="${t}:${r}"`);
  $ = await x($, C, P, p, L, R);
  k.size > 0 && ($ = `${[...k].join("\n")}

${$}`);
  let X = performance.now();
  let q = _$$l(e, l, getFeatureFlags().dt_mcp_inline_variables ?? !1);
  w6("variables_and_styles", performance.now() - X, sj);
  let J = [{
    type: "text",
    text: $
  }];
  if (O && J.push({
    type: "text",
    text: Ep
  }), J.push({
    type: "text",
    text: 'Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.'
  }), Object.keys(q).length > 0) {
    let e = getFeatureFlags().dt_mcp_inline_variables ? "styles" : "variables";
    J.push({
      type: "text",
      text: `These ${e} are contained in the design: ${Object.entries(q).map(([e, t]) => `${e}: ${t}`).join(", ")}.`
    });
  }
  j && Object.keys(j).length > 0 && J.push({
    type: "text",
    text: _0
  });
  U && Object.keys(U).length > 0 && J.push({
    type: "text",
    text: s8
  });
  "local" === C && J.push({
    type: "text",
    text: n2
  });
  z.length > 0 && J.push({
    type: "text",
    text: pD
  });
  "write-to-disk" === C && (p || L) && J.push({
    type: "text",
    text: k9(p || L)
  });
  J.push({
    type: "text",
    text: NB
  });
  GS("mcp.d2r_output_size", debugState.getState().openFile?.key || "", debugState.getState(), {
    length: $.length,
    numDivs: $.split("<div").length - 1,
    numNodes: t,
    isTailwind: atomStoreManager.get(lk)
  });
  return [{
    content: J
  }, {
    codeConnectMapping: j
  }];
}
async function x(e, t, r, i, a, s) {
  if ("local" === t) {
    let t = performance.now();
    Zw(r);
    let i = C(e, fJ);
    w6("image_assets_update", performance.now() - t, sj);
    return i;
  }
  if ("write-to-disk" === t) {
    let t = performance.now();
    let o = i || a;
    if (!o) throw Error("Path for asset writes is required for write-to-disk option");
    let l = o.endsWith("/") ? o.slice(0, -1) : o;
    await O(r, l, s);
    let d = C(e, l);
    w6("image_write_to_disk", performance.now() - t, sj);
    return d;
  }
  return e;
}
function N(e) {
  return "INSTANCE" === e.type || "SYMBOL" === e.type;
}
function C(e, t) {
  return e.replace(/import\s+(\w+)\s+from\s+['"]figma:asset\/([^'"]+)\.png['"];/g, (e, r, n) => `const ${r} = "${t}/${n}.png";`).replace(/import\s+(\w+)\s+from\s+['"]figma:asset\/([^'"]+)\.svg['"];/g, (e, r, n) => `const ${r} = "${t}/${n}.svg";`);
}
function w({
  componentName: e,
  props: t,
  hasChildren: r = !1,
  isClosingTag: n = !1
}) {
  return n ? `</${e}>` : "" === t ? r ? `<${e}>` : `<${e} />` : r ? `<${e} ${t}>` : `<${e} ${t} />`;
}
async function O(e, t, r) {
  if (desktopAPIInstance && e.size > 0) for (let [n, i] of e.entries()) {
    let e = new Uint8Array(await i.arrayBuffer());
    let a = `${t}/${n}`;
    try {
      await desktopAPIInstance.writeFileToPath(a, e, r);
    } catch (e) {
      throw Error(`Failed to write asset ${n} to disk at path ${a}: ${e.message}`);
    }
  }
}
export const t2 = $$A0;