import _require from "../2824/40443";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager } from "../figma_app/27355";
import o from "lodash-es/snakeCase";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { Timer } from "../905/609396";
import { F } from "../905/302958";
import { ze } from "../figma_app/516028";
import { FEditorType } from "../figma_app/53721";
import { B9, Py } from "../figma_app/346422";
import { hB } from "../figma_app/609511";
import { O } from "../905/207358";
var l = o;
let A = atom(!1);
export async function $$y0(e, t, n, r) {
  if (!getFeatureFlags().sites && !getFeatureFlags().bake) throw Error("HTML Serializer not available");
  let o = new Timer();
  o.start();
  try {
    let u = new Map();
    let p = getFeatureFlags().d2r_refactor ?? !1;
    let _ = {
      convertToTailwindCSS: !0,
      useFigmaComponents: getFeatureFlags().componetize_dtr,
      imageAssetsOptions: {
        transformer: B9,
        assets: u
      },
      optimizeCode: e => Py(e, p),
      additionalNodes: t,
      containingBreakpointFrame: n
    };
    let {
      designToReact
    } = await Promise.all([]).then(_require);
    let {
      files,
      stats
    } = await designToReact(e, async e => {
      let t = await hB({
        compactDOM: !0,
        assets: u,
        isMcpGeneration: atomStoreManager.get(A)
      });
      return await t.serializeHTML(e.guid);
    }, {
      ..._,
      ...r
    }, e => {
      console.warn(e);
    });
    let E = {};
    try {
      let [e] = files.filter(e => "assets.json" === e.name);
      e && "string" == typeof e.contents && (E = JSON.parse(e.contents));
    } catch (e) {
      console.error("Error parsing assets.json:", e);
    }
    for (let e of Object.keys(E)) {
      let t = u.get(e);
      if (!t) {
        console.error(`Asset ${e} not found in assets map`);
        continue;
      }
      files.push({
        name: e,
        contents: t
      });
    }
    getFeatureFlags().tarball_dtr && b(files, l()(e.name) + ".zip");
    let x = await Promise.all(files.filter(e => "assets.json" !== e.name).map(async e => {
      if ("string" == typeof e.contents) return {
        name: e.name,
        contents: e.contents,
        buffer: null,
        variableNameInAssetImport: null
      };
      let t = E[e.name];
      let i = new Uint8Array(await e.contents.arrayBuffer());
      return t && i ? {
        name: e.name,
        contents: null,
        buffer: i,
        variableNameInAssetImport: t
      } : null;
    }));
    let S = {
      files: []
    };
    for (let e of x) e && S.files.push(e);
    let w = o.getElapsedTime();
    o.stop();
    let C = debugState.getState().selectedView;
    analyticsEventManager.trackDefinedEvent("design_to_react.code_generation_time", {
      selectedFileKey: atomStoreManager.get(ze) ?? void 0,
      selectedNodeId: e.guid,
      isFigmake: "editorType" in C && C.editorType === FEditorType.Figmake,
      elapsedTimeMs: w,
      raisedError: !1,
      ...stats
    });
    return S;
  } catch (n) {
    let t = o.getElapsedTime();
    o.stop();
    let i = debugState.getState().selectedView;
    analyticsEventManager.trackDefinedEvent("design_to_react.code_generation_time", {
      selectedFileKey: atomStoreManager.get(ze) ?? void 0,
      selectedNodeId: e.guid,
      isFigmake: "editorType" in i && i.editorType === FEditorType.Figmake,
      elapsedTimeMs: t,
      raisedError: !0
    });
    return n;
  }
}
async function b(e, t) {
  let i = await O(e);
  let n = URL.createObjectURL(i);
  let r = document.createElement("a");
  r.href = n;
  r.download = t;
  document.body.appendChild(r);
  r.click();
  document.body.removeChild(r);
  URL.revokeObjectURL(n);
}
export async function $$v1(e) {
  let t = getSingletonSceneGraph().getCurrentPage().childrenNodes.filter(e => "SECTION" === e.type);
  if (0 === t.length) {
    e(F.enqueue({
      message: "No top-level sections found.",
      error: !0
    }));
    return null;
  }
  let i = new Map();
  let a = [];
  if (t.forEach(e => {
    let t = e.name;
    let n = e.childrenNodes.filter(e => e.name.includes("[CODEGEN]"));
    if (0 === n.length) {
      a.push(`No [CODEGEN] frame in section "${t}"`);
      return;
    }
    if (n.length > 1) {
      a.push(`Multiple [CODEGEN] frames in section "${t}".`);
      return;
    }
    let r = n[0];
    i.set(t, r);
  }), a.length > 0) {
    e(F.enqueue({
      message: `Failed to export designs: ${a.join("; ")}`,
      error: !0
    }));
    return null;
  }
  let s = 0;
  let o = i.size;
  e(F.enqueue({
    message: `Exporting ${o} designs`,
    error: !1
  }));
  let l = await Promise.all(Array.from(i.entries()).map(async ([t, i]) => {
    try {
      let r = i.name;
      let a = r.replace("[CODEGEN]", "").trim();
      0 === a.length && (a = "Component", console.warn(`[CODEGEN] Frame in section "${t}" has no name.`));
      permissionScopeHandler.system("bulk-export-designs-to-react", () => {
        i.name = a;
      });
      let l = await $$y0(i);
      i.name !== r && permissionScopeHandler.system("bulk-export-designs-to-react", () => {
        i.name = r;
      });
      s++;
      e(F.enqueue({
        message: `Exported ${s}/${o} designs`,
        error: !1
      }));
      return {
        section: t,
        files: l
      };
    } catch (i) {
      console.error(`Error generating code for ${t}:`, i);
      s++;
      e(F.enqueue({
        message: `Exported ${s}/${o} designs`,
        error: !1
      }));
      return {
        section: t,
        error: String(i)
      };
    }
  }));
  let d = l.filter(e => !("error" in e));
  let c = l.filter(e => "error" in e);
  if (c.length > 0) {
    let t = c.map(e => `${e.section}: ${e.error}`).join("; ");
    if (e(F.enqueue({
      message: `Errors exporting: ${t}`,
      error: !0,
      timeoutOverride: 1 / 0
    })), 0 === d.length) return;
  }
  try {
    let t = d.flatMap(e => e.files.files.map(({
      name: t,
      contents: i,
      buffer: n
    }) => {
      if (null !== i) return {
        name: `./${e.section}/${t}`,
        contents: i
      };
      {
        let i = t.endsWith("svg") ? "image/svg+xml" : "image/png";
        return {
          name: `./${e.section}/${t}`,
          contents: null === n ? new Blob() : new Blob([n], {
            type: i
          })
        };
      }
    }));
    await b(t, `d2r-export-${Date.now()}.zip`);
    e(F.enqueue({
      message: `Exported ${d.length} component${1 !== d.length ? "s" : ""}`,
      error: !1
    }));
  } catch (t) {
    console.error("Error exporting designs to React:", t);
    e(F.enqueue({
      message: `Error exporting designs: ${String(t)}`,
      error: !0
    }));
  }
}
export const Ts = $$y0;
export const qV = $$v1;
