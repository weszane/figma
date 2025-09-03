import _require from "../2824/40443";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { x } from "../905/392802";
import { F } from "../905/672930";
import { YE } from "../figma_app/552876";
let n;
let d = 0;
let c = new Map();
let u = new Map();
let p = new Set();
export function $$_3(e, t) {
  return v({
    type: "FORMAT",
    sourceCode: e,
    parserName: t
  });
}
export function $$h10({
  entrypointsOrIdentifierToFileName: e,
  filesystem: t,
  tailwind: r,
  minify: n,
  shadcn: i = !1,
  noWrapper: a = !1,
  jsxDev: s = !1
}) {
  return v({
    type: "BUNDLE",
    entrypointsOrIdentifierToFileName: e,
    filesystem: t,
    tailwind: r,
    minify: n,
    shadcn: i,
    noWrapper: a,
    jsxDev: s
  });
}
export function $$m12() {
  return v({
    type: "INITIALIZE_LS",
    skipTypeAcquisition: !!(getFeatureFlags().bake_skip_ata && YE())
  });
}
export function $$g9(e) {
  return v({
    type: "UPDATE_FILES",
    files: e
  });
}
export function $$f1(e) {
  return v({
    type: "LINT",
    fileName: e
  });
}
export function $$E13(e, t, r) {
  return v({
    type: "AUTOCOMPLETE",
    fileName: e,
    position: t,
    explicit: r
  });
}
export function $$y8(e, t) {
  return v({
    type: "QUICK_INFO",
    fileName: e,
    position: t
  });
}
export function $$b11(e) {
  return v({
    type: "STATIC_ANALYZE",
    sourceCode: e
  });
}
export function $$T4(e, t) {
  return v({
    type: "ANALYZE_JSX_COMPONENTS",
    sourceCode: e,
    componentNames: t
  });
}
export function $$I5(e) {
  p.add(e);
}
export function $$S0(e) {
  p.$$delete(e);
}
function v(e) {
  let t = d++;
  let a = new Promise((e, r) => {
    c.set(t, e);
    u.set(t, r);
  });
  (function e(t) {
    let a = function () {
      if (!n) {
        let t = Fig.devtoolsWorkerURL;
        t && ((n = x(t)).onmessage = async t => {
          switch (t.data.type) {
            case "INITIALIZE_LS_RESULT":
              A(t.data.messageId, !0);
              break;
            case "FORMAT_RESULT":
              A(t.data.messageId, t.data.changes);
              break;
            case "BUNDLE_RESULT":
              A(t.data.messageId, t.data.bundle);
              break;
            case "UPDATE_FILES_RESULT":
              A(t.data.messageId, t.data.updatedFiles);
              break;
            case "LINT_RESULT":
              A(t.data.messageId, t.data.diagnostics);
              break;
            case "AUTOCOMPLETE_RESULT":
              A(t.data.messageId, t.data.completions);
              break;
            case "QUICK_INFO_RESULT":
              A(t.data.messageId, t.data.hoverData);
              break;
            case "STATIC_ANALYZE_RESULT":
              A(t.data.messageId, t.data.results);
              break;
            case "ANALYZE_JSX_COMPONENTS_RESULT":
              A(t.data.messageId, t.data.componentProps);
              break;
            case "ERROR_RESULT":
              !function (e, t) {
                let r = u.get(e);
                r && (r(t), c.$$delete(e), u.$$delete(e));
              }(t.data.messageId, Error(t.data.error));
              break;
            case "DEPENDENCY_TYPES_STATUS":
              !function (e) {
                for (let t of p) t(e);
              }(t.data);
              break;
            case "REFACTOR_RESULT":
              A(t.data.messageId, t.data.updatedSourceCode);
              break;
            case "RESOLVE_ASSET":
              {
                let r = await N(t.data.assetPath);
                e({
                  type: "RESOLVE_ASSET_RESULT",
                  messageId: t.data.messageId,
                  contents: r
                });
                break;
              }
            case "GET_SVG":
              {
                let {
                  svgForDomId
                } = await Promise.all([]).then(_require);
                let i = svgForDomId(t.data.id);
                e({
                  type: "GET_SVG_RESULT",
                  messageId: t.data.messageId,
                  svg: i
                });
                break;
              }
            case "GET_CODE_EDITING_SNIPPET_RESULT":
              A(t.data.messageId, t.data.codeSnippet);
              break;
            case "UPDATE_IMAGES_TO_ESM_IMPORTS_RESULT":
              A(t.data.messageId, t.data.result);
              break;
            case "OPTIMIZE_CODE_RESULT":
              A(t.data.messageId, t.data.reactCode);
              break;
            default:
              throwTypeError(t.data);
          }
        });
      }
      return n;
    }();
    if (!a) throw Error("Devtools worker not available");
    a.postMessage(t);
  })({
    ...e,
    messageId: t
  });
  return a;
}
function A(e, t) {
  let r = c.get(e);
  r && (r(t), c.$$delete(e), u.$$delete(e));
}
export function $$x7(e) {
  return v({
    type: "GET_CODE_EDITING_SNIPPET",
    selectedElementAndParents: e
  });
}
async function N(e) {
  if (e.endsWith(".png")) {
    let t = F();
    let r = e.slice(0, -4);
    let n = t.getImageByHash(r);
    if (n) return await n.getBytesAsync();
  }
  return new Uint8Array();
}
export function $$C2(...e) {
  return v({
    type: "UPDATE_IMAGES_TO_ESM_IMPORTS",
    args: e
  });
}
export function $$w6(e, t) {
  return v({
    type: "OPTIMIZE_CODE_REQUEST",
    reactCode: e,
    refactorJsx: t
  });
}
export const AF = $$S0;
export const Ac = $$f1;
export const B9 = $$C2;
export const IC = $$_3;
export const M5 = $$T4;
export const Nx = $$I5;
export const Py = $$w6;
export const Y3 = $$x7;
export const c2 = $$y8;
export const fM = $$g9;
export const pS = $$h10;
export const qs = $$b11;
export const sM = $$m12;
export const uH = $$E13;