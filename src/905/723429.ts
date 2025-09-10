import _require from "../2824/40443";
import { W } from "../figma_app/304955";
import { ServiceCategories as _$$e } from "../905/165054";
import { VariablesBindings, VariableResolvedDataType, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { gP } from "../figma_app/594947";
import { generateUUIDv4 } from "../905/871474";
import { getI18nString } from "../905/303541";
import { Ay } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { Eu, $x, tc } from "../figma_app/275370";
import { z8 } from "../figma_app/862289";
import { nM, NJ } from "../figma_app/570630";
import { B } from "../905/107177";
import { hV } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { MH, dM, cM } from "../figma_app/803787";
import { MH as _$$MH } from "../figma_app/141508";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { Ag } from "../figma_app/407767";
import { hB } from "../figma_app/609511";
import { B9, Py } from "../figma_app/346422";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { analyticsEventManager } from "../905/449184";
import { Om, jb, tI, Zc, Ul } from "../905/127813";
let k = new class {
  constructor() {
    this.selectComponentsSchemaValidator = createNoOpValidator();
  }
  selectComponents(e) {
    return this.selectComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/make/select_components", APIParameterUtils.toAPIParameters(e)));
  }
}();
function N(e, t, i) {
  let n = debugState.getState().openFile?.key;
  let r = debugState.getState().user?.id;
  n && r && analyticsEventManager.trackDefinedEvent("ds_import.extraction_funnel", {
    fileKey: n,
    userId: r,
    funnelEvent: t,
    queryId: e,
    errorMessage: i
  });
}
let P = {
  maximumFractionDigits: 2,
  useGrouping: !1
};
async function O(e, t, i) {
  let n = (await Eu()).map(e => e.component_key).filter(e => !!e);
  let a = function () {
    let e = debugState.getState();
    let t = Object.values(MH(e));
    let i = Object.values(dM(e)).map(e => e.default_state_key);
    let n = getSingletonSceneGraph();
    let r = {};
    t.forEach(e => {
      try {
        let t = n.get(e.node_id);
        if (!t) return;
        let a = t.assetKeyForPublish;
        if (!a) return;
        e.containing_frame?.containingStateGroup ? r[a] = {
          name: `${e.containing_frame.containingStateGroup.name}. Type: ${t.name}`,
          isState: !0,
          node: t,
          isDefaultState: i.includes(a)
        } : r[a] = {
          name: t.name,
          isState: !1,
          node: t,
          isDefaultState: !1
        };
      } catch (e) {
        console.error(e);
      }
    });
    return r;
  }();
  0 === n.length && (n = [...Object.entries(a).filter(([e, t]) => t.isDefaultState).map(([e, t]) => e).sort(() => Math.random() - .5), ...Object.entries(a).filter(([e, t]) => !t.isState).map(([e, t]) => e).sort(() => Math.random() - .5), ...Object.entries(a).filter(([e, t]) => t.isState && !t.isDefaultState).map(([e, t]) => e).sort(() => Math.random() - .5)].slice(0, 250));
  let s = n.map(e => a[e] ? a[e]?.name : null).filter(e => !!e);
  let o = (await k.selectComponents({
    componentNames: s,
    type: "variables",
    libraryKey: t,
    fileKey: e
  })).data.meta.component_names;
  let l = (await k.selectComponents({
    componentNames: s,
    type: "typography",
    libraryKey: t,
    fileKey: e
  })).data.meta.component_names;
  let u = n.filter(e => {
    let t = a[e];
    return t && o?.includes(t.name);
  });
  let p = n.filter(e => {
    let t = a[e];
    return t && l?.includes(t.name);
  });
  if (0 === u.length && 0 === p.length) return {
    componentReacts: [],
    variableComponentKeys: [],
    typographyComponentKeys: []
  };
  let m = [];
  await Promise.all(Object.entries(a).map(async ([n, a]) => {
    if (o?.includes(a.name) || l?.includes(a.name)) try {
      let e = await L(a.node);
      if (!e) return;
      m.push({
        componentKey: n,
        name: a.name,
        code: e.toString()
      });
    } catch (a) {
      reportError(_$$e.MAKE, a, {
        extra: {
          componentKey: n,
          fileKey: e,
          libraryKey: t,
          queryId: i
        }
      });
      N(i, "recoverable_error", `component react gen failure ${a instanceof Error ? a.message : String(a)}`);
    }
  }));
  return {
    componentReacts: m,
    variableComponentKeys: u,
    typographyComponentKeys: p
  };
}
async function D(e) {
  let t = function () {
    let e = getSingletonSceneGraph();
    let t = e.getRoot();
    let i = [];
    hV(t, t => {
      if (t.isInternalOnlyNode || t.isState || B(t) || t.isStateGroup) return "skip";
      if ("FRAME" !== t.type) return;
      if (!function e(t, i) {
        return "CANVAS" === t.type || null !== t.parentNode && 0 !== i && e(t.parentNode, i - 1);
      }(t, 5)) return "skip";
      if (!M(t) && !j(t, F) || !t.parentNode?.isProbablyContainerFrame() || t.isProbablyContainerFrame() || 0 !== t.findAllWithCriteriaGUIDs({
        types: ["SYMBOL", "STATE_GROUP", "STATE", "FRAME"]
      }).filter(t => {
        let i = e.get(t);
        return i.isState || B(i) || i.isStateGroup;
      }).length) return;
      let n = Ag({
        scene: e,
        root: t,
        includeNestedComponents: !0,
        includeComponentProps: !1
      }).map(e => e.type === PrimaryWorkflowEnum.COMPONENT ? e.key : e.stateComponentKey);
      i.push({
        node: t,
        childComponentCount: n.length,
        uniqueChildComponentCount: new Set(n).size
      });
      return "skip";
    });
    i.sort((e, t) => {
      let i = j(e.node, F);
      if (i !== j(t.node, F)) return i ? -1 : 1;
      let n = M(e.node);
      if (n !== M(t.node)) return n ? -1 : 1;
      let r = j(e.node, ["dark"]);
      return r !== j(t.node, ["dark"]) ? r ? 1 : -1 : e.uniqueChildComponentCount !== t.uniqueChildComponentCount ? t.uniqueChildComponentCount - e.uniqueChildComponentCount : 0;
    });
    return i.slice(0, 3).map(e => e.node);
  }();
  let i = [];
  await Promise.all(t.map(async t => {
    try {
      let e = await L(t);
      if (!e) return;
      i.push({
        guid: t.guid,
        code: e.toString()
      });
    } catch (t) {
      reportError(_$$e.MAKE, t, {
        extra: {
          queryId: e
        }
      });
      N(e, "recoverable_error", `Example react gen failure ${t instanceof Error ? t.message : String(t)}`);
    }
  }));
  return i;
}
async function L(e) {
  let t = new Map();
  let {
    designToReact
  } = await Promise.all([]).then(_require);
  let r = await hB({
    compactDOM: !0,
    assets: t
  });
  let a = getFeatureFlags().d2r_refactor_make ?? !1;
  let s = await designToReact(e, e => r.serializeHTML(e.guid), {
    convertToTailwindCSS: !0,
    imageAssetsOptions: {
      transformer: B9,
      assets: t
    },
    optimizeCode: e => a ? Py(e, !0) : Promise.resolve(e)
  });
  let l = s.files.filter(e => "index.tsx" === e.name)[0]?.contents;
  return l?.toString() || null;
}
let F = ["example", "sample", "demo", "usage"];
function M(e) {
  for (let t of e.childrenNodes) if (F.some(e => t.textContent?.toLowerCase().includes(e))) return !0;
  return null !== e.parentNode && "CANVAS" !== e.parentNode.type && M(e.parentNode);
}
function j(e, t) {
  return !!t.some(t => e.name.toLowerCase().includes(t)) || null !== e.parentNode && "CANVAS" !== e.parentNode.type && j(e.parentNode, t);
}
var $$B0 = (e => (e.STYLES = "styles", e.EXAMPLES = "examples", e.CSS = "css", e))($$B0 || {});
export let $$V2 = async ({
  onTasksUpdate: e
}) => {
  await z(e);
};
export class $$G1 extends Error {
  constructor(e) {
    super(e);
    this.name = "MissingExamplesError";
  }
}
async function z(e) {
  let t = debugState.getState().openFile?.key;
  let i = debugState.getState().openFile?.libraryKey;
  if (!t || !i) return;
  let y = generateUUIDv4();
  let b = gP("make_large_paste_threshold").get("sizeBytes", 25e4);
  let x = atomStoreManager.get(Om);
  let S = atomStoreManager.get(jb);
  let w = [{
    taskId: "styles",
    state: x ? z8.SUCCEEDED : z8.INCOMPLETE
  }, {
    taskId: "examples",
    state: S.length > 0 || atomStoreManager.get(tI) ? z8.SUCCEEDED : z8.INCOMPLETE
  }, {
    taskId: "css",
    state: z8.INCOMPLETE
  }];
  e && e(w);
  N(y, "start");
  try {
    if (!x) {
      let e = function () {
        let e = getSingletonSceneGraph();
        let t = debugState.getState();
        let i = [...(VariablesBindings?.getSubscribedVariablesInfo() || []), ...(VariablesBindings?.getLocalVariablesInfo() || [])];
        let n = {};
        i.forEach(e => {
          n[e.id] = e;
        });
        let r = [];
        i.forEach(e => {
          if (e.resolvedType !== VariableResolvedDataType.COLOR) return;
          let t = null;
          let i = e;
          for (; null === t;) {
            let e = VariablesBindings?.getVariableSetDefaultMode(i.setID);
            if (!e) return;
            let r = i.modeValues[e]?.value;
            if (!r) return;
            if ("string" == typeof r) {
              if (!(i = n[r])) return;
            } else t = r;
          }
          let s = Math.round(255 * Number(t.r));
          let o = Math.round(255 * Number(t.g));
          let l = Math.round(255 * Number(t.b));
          let d = t.a.toFixed(2);
          r.push(`${e.name} : rgba(${s}, ${o}, ${l}, ${d})`);
        });
        let s = Object.values(cM(t)).filter(e => !e.deletedFromSceneGraph && "FILL" === e.style_type).map(e => e.node_id);
        [...new Set([...s, ..._$$MH(t)])].map(t => e.get(t)).filter(e => !!e && "FILL" === e.styleType).forEach(e => {
          let t = e.fills[0]?.color;
          if (!t) return;
          let i = Math.round(255 * Number(t.r));
          let n = Math.round(255 * Number(t.g));
          let a = Math.round(255 * Number(t.b));
          let s = t.a.toFixed(2);
          r.push(`${e.name} : rgba(${i}, ${n}, ${a}, ${s})`);
        });
        return r = [...new Set(r)];
      }();
      await $x({
        type: tc.RAW_VARIABLES,
        blob: JSON.stringify(e)
      });
      N(y, "create_raw_variables");
      let n = function () {
        let e = getSingletonSceneGraph();
        let t = debugState.getState();
        let i = cM(t);
        let n = [];
        let r = Object.values(i).filter(e => !e.deletedFromSceneGraph && "TEXT" === e.style_type).map(e => e.node_id);
        [...new Set([...r, ..._$$MH(t)])].map(t => e.get(t)).filter(e => !!e && "TEXT" === e.type).forEach(e => {
          n.push({
            name: e.name,
            fontFamily: e.fontName.family,
            fontWeight: e.fontName.style,
            fontSize: e.fontSize,
            lineHeight: function (e) {
              if ("mixed" === e) return "mixed";
              switch (e.units) {
                case "RAW":
                default:
                  return e.value.toString();
                case "PERCENT":
                  return Number(e.value).toLocaleString("en", {
                    ...P,
                    style: "percent"
                  });
                case "PIXELS":
                  return `${e.value.toLocaleString("en", {
                    ...P
                  })}px`;
              }
            }(e.lineHeightOrMixed),
            postscript: e.fontName.postscript
          });
        });
        return n;
      }();
      await $x({
        type: tc.RAW_TEXT_STYLES,
        blob: JSON.stringify(n)
      });
      N(y, "create_raw_text_styles");
      let {
        componentReacts,
        variableComponentKeys,
        typographyComponentKeys
      } = await O(t, i, y);
      if (0 === variableComponentKeys.length && 0 === typographyComponentKeys.length) throw Error("No relevant components found");
      componentReacts.forEach(async e => {
        let t = e.componentKey;
        await $x({
          type: tc.COMPONENT,
          blob: JSON.stringify({
            name: e.name,
            code: e.code
          }),
          key: t
        });
      });
      await $x({
        type: tc.COMPONENTS_LIST_VARIABLES,
        components_list: variableComponentKeys
      });
      await $x({
        type: tc.COMPONENTS_LIST_TYPOGRAPHY,
        components_list: typographyComponentKeys
      });
      N(y, "create_components");
      x = {
        rawVariables: e,
        rawTextStyles: n,
        componentReacts,
        variableComponentKeys,
        typographyComponentKeys
      };
      atomStoreManager.set(Om, x);
    }
    w = w.map(e => ("styles" === e.taskId && (e.state = z8.SUCCEEDED), e));
    e && e(w);
    let r = [];
    if (0 !== S.length || atomStoreManager.get(tI)) S.length > 0 ? (atomStoreManager.set(Zc, !0), w = w.map(e => ("examples" === e.taskId && (e.state = z8.SUCCEEDED), e))) : w = w.map(e => ("examples" === e.taskId && (e = {
      ...e,
      state: z8.FAILED,
      error: new $$G1(getI18nString("figmake.design_system_imports.library_extraction_theming_progress.step.examples.error"))
    }), e));else {
      if ((r = await D(y)).forEach(async e => {
        let t = e.guid;
        await $x({
          type: tc.FRAGMENT,
          blob: e.code,
          key: t
        });
      }), r = H(r, b), w = w.map(e => {
        if ("examples" === e.taskId) {
          if (r.length > 0) e.state = z8.SUCCEEDED;else if (getFeatureFlags().bake_ds_import_library_guidelines) {
            atomStoreManager.set(Zc, !0);
            return new $$G1(getI18nString("figmake.design_system_imports.library_extraction_theming_progress.step.examples.error"));
          }
        }
        return e;
      }), atomStoreManager.set(jb, r), N(y, "create_fragments"), getFeatureFlags().bake_ds_import_library_guidelines && atomStoreManager.get(Zc)) {
        atomStoreManager.set(Zc, !1);
        e && e(w);
        return;
      }
      atomStoreManager.set(Zc, !1);
    }
    e && e(w);
    let c = H(x.variableComponentKeys.map(e => {
      let t = x?.componentReacts.find(t => t.componentKey === e);
      return t ? {
        name: t.name,
        code: t.code
      } : null;
    }).filter(e => null !== e), b);
    let u = H(x.typographyComponentKeys.map(e => {
      let t = x?.componentReacts.find(t => t.componentKey === e);
      return t ? {
        name: t.name,
        code: t.code
      } : null;
    }).filter(e => null !== e), b);
    let p = await Ay.shared.extractLibraryCss({
      variables: x.rawVariables,
      textStyles: x.rawTextStyles,
      componentsForVariables: c,
      componentsForTypography: u,
      fragments: r
    }, _$$Ay());
    await $x({
      type: tc.GENERATED_VARIABLES,
      blob: p.cssVariables
    });
    await $x({
      type: tc.GENERATED_TYPOGRAPHY,
      blob: p.typography
    });
    await $x({
      type: tc.GLOBAL_CSS,
      blob: p.globalCss
    });
    permissionScopeHandler.user("create-new-code-file", () => {
      let e = atomStoreManager.get(nM);
      let t = W(e, NJ, Ul);
      t ? t.sourceCode = p.globalCss : Fullscreen?.createNewCodeFile(Ul, p.globalCss, null, !1);
    });
    w = w.map(e => ("css" === e.taskId && (e.state = z8.SUCCEEDED), e));
    e && e(w);
    N(y, "success");
  } catch (t) {
    for (let e = 0; e < w.length; e++) {
      let i = w[e];
      if (i && i?.state === z8.INCOMPLETE) {
        w[e] = {
          ...i,
          state: z8.FAILED,
          error: t
        };
        break;
      }
    }
    e && e(w);
    reportError(_$$e.MAKE, t);
    N(y, "error", t instanceof Error ? t.message : String(t));
    return t;
  }
}
function H(e, t) {
  let i = e.reduce((e, t) => e + t.code.length, 0);
  if (i <= t) return e;
  let n = [...e].sort((e, t) => t.code.length - e.code.length);
  let r = i;
  let a = 0;
  for (; r > t && a < n.length;) {
    r -= n[a]?.code.length ?? 0;
    a++;
  }
  return n.slice(a);
}
export const mp = $$B0;
export const Qc = $$G1;
export const Iq = $$V2;
