import { useState, useEffect, useCallback } from "react";
import { FirstDraftHelpers, VariablesBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useStableMemo } from "../905/19536";
import { permissionScopeHandler } from "../905/189185";
import { x$, i6, v2 } from "../905/188715";
import { Au, g5, iR } from "../figma_app/193952";
import { debugState } from "../905/407919";
import { au, pX, _ as _$$_, LQ } from "../figma_app/445976";
import { rZ } from "../905/971098";
import { getFileKeyFromSelectedView } from "../figma_app/193867";
import { createFigmaPluginScope } from "../905/629114";
import { getNodeParentPath, getNestedImageNodes, IMAGE_NAME_FORMAT, extractModifiersFromProp, getComponentInfoById } from "../figma_app/664063";
import { lS } from "../905/296461";
import { E$ } from "../905/209596";
import { k_, ZO, Cr } from "../figma_app/612859";
import { Gh } from "../figma_app/707567";
let c = ["Frame", "Vector", "Rectangle", "Ellipse", "Line"];
let u = / \d{3,}$/;
let p = {
  key: "CLEAN_NUMERICAL_SUFFIXES",
  name: "Clean layer name numerical suffixes",
  severity: x$.WARNING,
  warning: "Layer names should not have large/unmeaningful numerical suffixes. If autofix does not work, there are likely overrides the offending instance sublayer names, which need to be fixed manually.",
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => {
    let t = new Set();
    let i = getSingletonSceneGraph();
    let n = [e];
    for (; n.length > 0;) {
      let e = n.pop();
      if (e) {
        if (c.some(t => e.name.startsWith(t)) && e.name.match(u)) {
          if ("INSTANCE" === e.type && e.symbolId) {
            let n = i.get(e.symbolId);
            n && n.name.match(u) ? t.add(n.guid) : t.add(e.guid);
          } else if (e.isInstanceSublayer) {
            let i = e.parentNode;
            for (; i && "INSTANCE" !== i.type;) i = i.parentNode;
            i && i.symbolId ? t.add(i.symbolId) : t.add(e.guid);
          } else t.add(e.guid);
        }
        n.push(...e.childrenNodes);
      }
    }
    return {
      guids: [...t],
      meta: [...t]
    };
  },
  fix: (e, t) => {
    if (!t) return !1;
    let i = getSingletonSceneGraph();
    let n = t.map(e => i.get(e));
    permissionScopeHandler.user("first-draft-clean-numerical-suffixes", () => {
      for (let e of n) {
        let t = [e];
        for (; t.length > 0;) {
          let e = t.pop();
          e && "INSTANCE" !== e.type && (c.some(t => e.name.startsWith(t)) && e.name.match(u) && (e.name = e.name.replace(/ \d+$/, "")), t.push(...e.childrenNodes));
        }
      }
    });
    return !0;
  }
};
let m = {
  key: "CONCISE_COMPONENT_NAMES",
  name: "Shorten component names to reduce LLM misspellings",
  severity: x$.ERROR,
  warning: "Component names should not have long confusing names with many/repeating words, LLMs may skip a word or pluralize it incorrectly.",
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => e.name.length > 63 ? {
    guids: [e.guid],
    meta: [e.guid]
  } : {
    guids: []
  }
};
let h = {
  key: "CONSUME_LOCAL_NONDELETED_VARIABLES",
  name: "Variables consumed should be local and not deleted",
  severity: x$.WARNING,
  warning: "All variables directly consumed should be local and not deleted.",
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => FirstDraftHelpers.lintLocalNondeletedVariables(e.guid)
};
let f = {
  key: "CORNER_RADIUS_SHOULD_USE_CUSTOMIZABLE_VARIABLES",
  name: "Corner radii should alias customizable variables",
  severity: x$.WARNING,
  warning: 'Customizable variables prefix their name with "tokens" and belong to the "Presets" collection',
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => {
    let t = new Set();
    let i = Au(e.guid, ["INSTANCE", "FRAME", "RECTANGLE"]);
    "SYMBOL" === e.type && i.push(e);
    i.forEach(e => {
      if (e.cornerRadius <= 0) return;
      let i = e.rectangleCornerRadiiIndependent && e.boundVariables.cornerRadius || e.boundVariables.bottomLeftRadius || e.boundVariables.bottomRightRadius || e.boundVariables.topLeftRadius || e.boundVariables.topRightRadius;
      i && FirstDraftHelpers.getCustomizableVariableName(e.guid, i.id) || t.add(e.guid);
    });
    return {
      guids: [...t],
      meta: [...t]
    };
  }
};
let v = {
  key: "EXAMPLES_USE_PROPER_LAYOUTS",
  name: "Examples should be use proper layouts.",
  severity: x$.WARNING,
  warning: "Violations are examples that do not use proper layouts",
  category: i6.EXAMPLES,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: async ({
    kitKey: e,
    buildingBlocks: t
  }) => {
    let i = getFileKeyFromSelectedView(debugState.getState().selectedView);
    if (!i) return {
      guids: []
    };
    let n = rZ(i).find(t => t.dsKitKey.pageId === e.pageId)?.name;
    if (!n) return {
      guids: []
    };
    let a = [];
    let s = e.pageId;
    for (let e of FirstDraftHelpers.getLocalExamples(s, t)) (await au(n, e.nodeId)) || a.push(e.nodeId);
    return {
      guids: a,
      meta: {
        invalidExampleGuids: a
      }
    };
  }
};
let E = {
  key: "EXAMPLES_USE_VALID_BLOCKS",
  name: "Examples should only have building blocks as primary instances.",
  severity: x$.WARNING,
  warning: "Violations are examples that have non-building block primary instances. Autofix will move these to an `Invalid examples` section",
  category: i6.EXAMPLES,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: ({
    kitKey: e,
    buildingBlocks: t
  }) => {
    let i = e.pageId;
    if (!i) return Promise.resolve({
      guids: []
    });
    let n = FirstDraftHelpers.getLocalInvalidExamplesForLinting(i, t);
    let s = n.map(e => e.nodeId);
    let o = n.reduce((e, t) => [...e, ...t.invalidPrimaryInstanceGuids], []);
    let l = getSingletonSceneGraph();
    return Promise.resolve({
      guids: s,
      meta: {
        exampleGuids: s,
        backingComponentNames: Array.from(new Set(o.map(e => {
          let t = l.get(e);
          if (!t || !t.symbolId) return null;
          let i = l.get(t.symbolId);
          return i?.name ?? null;
        }).filter(e => null !== e))).filter(e => null !== e)
      }
    });
  },
  fix: (e, t) => {
    if (!t) return !1;
    let i = createFigmaPluginScope();
    let n = i.createSection();
    for (let e of (n.name = "Invalid examples", t.exampleGuids)) {
      let t = i.getNodeById(e);
      t && "FRAME" === t.type && n.appendChild(t);
    }
    return !0;
  }
};
let S = {
  key: "TEXT_NODES_EXPOSED_AS_COMPONENT_PROPS",
  name: "Text nodes should be exposed as component props",
  severity: x$.WARNING,
  warning: "Text nodes should be exposed as component props if they are to be varied by the model",
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => {
    let t = new Set();
    for (let i of Au(e.guid, ["TEXT"])) i.componentPropertyReferences()?.characters || i.name.startsWith("_") || t.add(i.guid);
    return {
      guids: [...t],
      meta: {}
    };
  }
};
let w = {
  key: "NESTED_INSTANCES_EXPOSED_AS_COMPONENT_PROPS",
  name: "Nested instances should be exposed as component props",
  severity: x$.WARNING,
  warning: "Nested instances should be exposed as component props if they are to be varied by the model",
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => {
    let t = new Set();
    for (let i of Au(e.guid, ["INSTANCE"]).filter(e => Object.keys(e.componentProperties()).length > 0)) i.isBubbled || i.name.startsWith("_") || i.componentPropertyReferences()?.mainComponent || t.add(i.guid);
    return {
      guids: [...t],
      meta: [...t]
    };
  },
  fix: (e, t) => {
    if (!t) return !1;
    let i = getSingletonSceneGraph();
    let n = t.map(e => i.get(e));
    permissionScopeHandler.user("first-draft-fix-nested-instances-exposed", () => {
      for (let e of n) e && "INSTANCE" === e.type && !e.isBubbled && e.setPropsAreBubbled(!0);
    });
    return !0;
  }
};
let $$C = {
  key: "OPTIONAL_NON_INSTANCE_PROPS_HAVE_VISIBLE_PROPS",
  name: "Optional text props should have corresponding visible props",
  severity: x$.WARNING,
  warning: "Optional props that are not instance should have corresponding visible props in order to be properly hidden if not used.",
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => {
    let t = new Set();
    let i = {};
    let n = e.componentPropertyDefinitions();
    for (let r of Object.entries(n).filter(([e, t]) => e.split("#")[0]?.endsWith("?") && "TEXT" === t.type).map(([e, t]) => e)) {
      let a = r.split("#")[0]?.slice(0, -1) + "Visible";
      if (!Object.keys(n).some(e => e.startsWith(a))) {
        t.add(e.guid);
        let n = Au(e.guid, ["TEXT"]).filter(e => {
          let t = e.componentPropertyReferences();
          return t.characters && t.characters === r;
        });
        i[r] = {
          visiblePropName: a,
          refNodes: n
        };
      }
    }
    return {
      guids: [...t],
      meta: i
    };
  },
  fix: (e, t) => {
    if (!t) return !1;
    let i = getSingletonSceneGraph().get(e.guid);
    return !!i && (permissionScopeHandler.user("first-draft-fix-optional-non-instance-props-have-visible-props", () => {
      for (let [e, {
        visiblePropName: n,
        refNodes: r
      }] of Object.entries(t).reverse()) {
        let e = i.addComponentPropertyDefinition(n, "BOOL", !0, void 0);
        for (let t of r) t.setComponentPropertyReferences({
          ...t.componentPropertyReferences(),
          visible: e
        });
      }
    }), !0);
  }
};
let T = {
  key: "INSTANCE_SWAP_WITH_EXPOSED_PROPS",
  name: "Instance swaps should not be exposed as component props",
  severity: x$.WARNING,
  warning: "Nested instances used for grouped instance swaps should not have their properties exposed as nested instance props",
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => {
    let t = new Set();
    g5(e.guid).forEach(e => {
      if (e.componentPropertyReferences()?.mainComponent) {
        let i = e.mainComponent;
        if (i) {
          let n = getNodeParentPath(i.guid);
          iR(n) && e.isBubbled && t.add(e.guid);
        }
      }
    });
    return {
      guids: [...t],
      meta: [...t]
    };
  },
  fix: (e, t) => {
    if (!t) return !1;
    let i = getSingletonSceneGraph();
    let n = t.map(e => i.get(e));
    permissionScopeHandler.user("first-draft-fix-instance-swap-with-exposed-props", () => {
      for (let e of n) e && "INSTANCE" === e.type && e.isBubbled && e.setPropsAreBubbled(!1);
    });
    return !0;
  }
};
let k = {
  key: "FILLS_SHOULD_USE_CUSTOMIZABLE_VARIABLES",
  name: "All fills should alias customizable variables",
  severity: x$.WARNING,
  warning: 'Customizable variables prefix their name with "tokens" and belong to the "Presets" collection',
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => {
    let t = new Set();
    let i = {};
    Au(e.guid, ["FRAME", "INSTANCE", "COMPONENT", "COMPONENT_SET", "BOOLEAN_OPERATION", "RECTANGLE", "ELLIPSE", "POLYGON", "STAR", "TEXT", "VECTOR", "LINE"]).concat(e).forEach(e => {
      let n = e.fills;
      if (n && 0 !== n.length) for (let a of n) {
        if ("SOLID" !== a.type || !a.visible) continue;
        let n = a.colorVar?.value?.alias?.guid;
        if (!n) {
          t.add(e.guid);
          i[e.guid] = "No colorVar alias guid found on fill";
          continue;
        }
        let s = `VariableID:${n?.sessionID}:${n?.localID}`;
        FirstDraftHelpers.getCustomizableVariableName(e.guid, s) || (t.add(e.guid), i[e.guid] = "No variable name found for colorVar alias guid");
      }
    });
    return {
      guids: [...t],
      meta: i
    };
  }
};
let N = {
  key: "FONTS_SHOULD_USE_CUSTOMIZABLE_VARIABLES",
  name: "Text nodes should use styles that consume customizable variables",
  severity: x$.WARNING,
  warning: `Customizable variables prefix their name with "${lS}" and belong to the "Presets" collection`,
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => {
    let t = new Set();
    let i = {};
    let n = Au(e.guid, ["TEXT"]);
    let s = getSingletonSceneGraph();
    for (let e of n) {
      let n = FirstDraftHelpers.inheritedTextStyleGuid(e.guid);
      if (!n) {
        t.add(e.guid);
        continue;
      }
      let a = s.get(n);
      if (!a) {
        t.add(e.guid);
        i[e.guid] = "No style found for text node";
        continue;
      }
      if (!("fontFamily" in a.boundVariablesForStyle) || !("fontStyle" in a.boundVariablesForStyle)) {
        t.add(e.guid);
        i[e.guid] = "No fontFamily or fontStyle variables bound to style used by text node";
        continue;
      }
      let o = a.boundVariablesForStyle.fontFamily;
      let l = a.boundVariablesForStyle.fontStyle;
      let d = FirstDraftHelpers.getCustomizableVariableName(e.guid, o.id);
      let c = FirstDraftHelpers.getCustomizableVariableName(e.guid, l.id);
      if (!d || !c) {
        t.add(e.guid);
        i[e.guid] = "No variable name found for fontFamily or fontStyle variables";
        continue;
      }
    }
    return {
      guids: [...t],
      meta: i
    };
  }
};
let $$O = {
  key: "OVERLAPPING_NODES_WITH_IMAGES",
  name: "Overlapping nodes with images are subject to color theming",
  warning: "Overlapping nodes with images should be children of the image to escape color theming and remain the same color",
  severity: x$.WARNING,
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => {
    let t = getNestedImageNodes(e);
    let i = t.map(e => e.guid);
    let n = new Set();
    let r = [];
    let a = e.childrenNodes;
    for (; a.length > 0;) {
      let e = a.pop();
      !(!e || i.includes(e.guid)) && (r.push(e), "childrenNodes" in e && "INSTANCE" !== e.type && a.push(...e.childrenNodes));
    }
    let s = new Set();
    for (let i of t) {
      let t = i.parentNode;
      for (; t && t.guid !== e.guid;) {
        s.add(t.guid);
        t = t.parentNode;
      }
    }
    for (let e of r.filter(e => !s.has(e.guid))) {
      let i = e.absoluteBoundingBox;
      for (let e of t) {
        if (n.has(e.guid)) continue;
        let t = e.absoluteBoundingBox;
        E$({
          x: t.x,
          y: t.y,
          width: t.w,
          height: t.h
        }, {
          x: i.x,
          y: i.y,
          width: i.w,
          height: i.h
        }) && n.add(e.guid);
      }
    }
    return {
      guids: Array.from(n),
      meta: {}
    };
  }
};
let D = {
  key: "NESTED_INSTANCES_WITH_IMAGES_WITHOUT_PROPS",
  name: "Nested instances containing images without other props should be detached",
  warning: "Nested instances containing images without other props should be detached, since we can't bubble the image props otherwise",
  severity: x$.WARNING,
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => {
    let t = Au(e.guid, ["INSTANCE"]).filter(e => {
      let t = Au(e.guid, ["FRAME", "INSTANCE"]).filter(e => IMAGE_NAME_FORMAT.test(e.name)).filter(t => t.guid !== e.guid);
      let i = e.componentProperties();
      return t.length > 0 && (!i || 0 === Object.keys(i).length);
    }).map(e => e.guid);
    return {
      guids: t,
      meta: {
        guids: t
      }
    };
  },
  fix: (e, t) => !!t && !!t.guids && (permissionScopeHandler.user("first-draft-detach-nested-instances-with-images-without-props", () => {
    t.guids.forEach(e => {
      let t = getSingletonSceneGraph().get(e);
      if (!t) return !1;
      t.detachInstance();
    });
  }), !0)
};
let L = {
  key: "NESTED_INSTANCE_REFERENCES_NON_EXISTENT_PROPS",
  name: "A nested instance in this component references a non-existent prop",
  severity: x$.WARNING,
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: e => {
    let t = new Set();
    let i = {};
    for (let n of Au(e.guid, ["INSTANCE"])) {
      if (!n.isPrimaryInstance) continue;
      let e = n.name;
      let r = extractModifiersFromProp(e);
      let a = r.pick || r.omit || [];
      if (0 === a.length) continue;
      let o = new Set();
      let l = getComponentInfoById(n.symbolId ?? "", {
        enableTsArrays: !!getFeatureFlags().first_draft_ts_arrays
      });
      if (l) {
        for (let e of l.parsedDefs) "key" in e.devFriendlyProp && o.add(e.devFriendlyProp.key);
        for (let e of a) o.has(e) || (t.add(n.guid), i[n.guid] = i[n.guid] || [], i[n.guid].push(e));
      }
    }
    return {
      guids: Array.from(t),
      meta: i
    };
  }
};
let M = {
  key: "PRESETS_ENOUGH_MODES",
  name: "Enough modes in Presets",
  warning: `There should be at least ${k_} modes in the Presets collection`,
  severity: x$.ERROR,
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: () => {
    let e = pX();
    if (!e) return Promise.resolve({
      guids: []
    });
    let t = e.modes.length;
    return 1 === t || t >= k_ ? Promise.resolve({
      guids: []
    }) : Promise.resolve({
      guids: [e.nodeId],
      meta: e.nodeId
    });
  }
};
let j = {
  key: "PRESET_VARIABLE_NAMES",
  name: "Preset variable names",
  warning: "NOTE: Please refresh the file to ensure that your client is using the most up to date rules. Presets must contain variables with the expected, hard-coded names for this kit. Otherwise theming and presets will fail.",
  severity: x$.WARNING,
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: ({
    firstPartyKitInfo: e
  }) => {
    if (!e) return Promise.resolve({
      guids: []
    });
    let t = pX();
    if (!t) return Promise.resolve({
      guids: []
    });
    let i = new Set(VariablesBindings.getLocalVariablesInfo().filter(e => e.setID === t.nodeId && !e.isSoftDeleted).map(e => e.name));
    let n = [];
    if (e.name.toLowerCase().includes("website")) {
      for (let e of Object.values(ZO)) i.has(e) || n.push(e);
      return 0 === n.length ? Promise.resolve({
        guids: []
      }) : Promise.resolve({
        guids: [t.nodeId],
        meta: {
          missingNames: n
        }
      });
    }
    if (e.name.toLowerCase().includes("mobile")) {
      for (let e of Object.values(Cr)) i.has(e) || n.push(e);
      return 0 === n.length ? Promise.resolve({
        guids: []
      }) : Promise.resolve({
        guids: [t.nodeId],
        meta: {
          missingNames: n
        }
      });
    }
    return Promise.resolve({
      guids: []
    });
  }
};
let U = {
  key: "SINGLE_PRESET_COLLECTION",
  name: "Single preset collection",
  severity: x$.ERROR,
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: () => {
    let e = _$$_();
    return e && 1 !== e.length ? Promise.resolve({
      guids: e.map(e => e.nodeId)
    }) : Promise.resolve({
      guids: []
    });
  },
  fix: e => {
    let t = _$$_().reduce((e, t) => (e[t.nodeId] = t.name, e), {});
    let i = Object.keys(t);
    permissionScopeHandler.user("first-draft-choose-single-preset", () => {
      for (let e of i.slice(1)) {
        let n = t[e];
        VariablesBindings.editVariableSetName(e, `${n} ${i.indexOf(e)}`);
      }
    });
    return !0;
  }
};
let B = {
  key: "AUTOLAYOUT_SPACING_SHOULD_USE_CUSTOMIZABLE_VARIABLES",
  name: "Autolayout spacing should alias customizable variables",
  severity: x$.WARNING,
  warning: 'Customizable variables prefix their name with "tokens" and belong to the "Presets" collection',
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: e => {
    let t = new Set();
    let i = {};
    let n = Au(e.guid, ["INSTANCE", "FRAME"]).filter(e => "NONE" !== e.stackMode);
    "SYMBOL" === e.type && n.push(e);
    let a = {
      stackTopPadding: "paddingTop",
      stackRightPadding: "paddingRight",
      stackBottomPadding: "paddingBottom",
      stackLeftPadding: "paddingLeft"
    };
    n.forEach(e => {
      if (e.stackSpacing > 0) {
        let n = e.boundVariables.itemSpacing;
        n ? FirstDraftHelpers.getCustomizableVariableName(e.guid, n.id) || (t.add(e.guid), i[e.guid] = "itemSpacing variable is not a customizable variable") : (t.add(e.guid), i[e.guid] = "No itemSpacing variable bound to node");
      }
      for (let n in a) {
        if (e[n] <= 0) continue;
        let s = a[n];
        let o = e.boundVariables[s];
        o ? FirstDraftHelpers.getCustomizableVariableName(e.guid, o.id) || (t.add(e.guid), i[e.guid] = `${s} variable is not a customizable variable`) : (t.add(e.guid), i[e.guid] = `No ${s} variable bound to node`);
      }
    });
    return {
      guids: [...t],
      meta: i
    };
  }
};
let V = {
  key: "UNIQUE_BUILDING_BLOCK_NAMES",
  name: "Building blocks should have distinct names",
  severity: x$.ERROR,
  category: i6.STRUCTURE,
  supportedKitTypes: [v2.FIRST_PARTY, v2.FROM_MAKE_KIT],
  detect: ({
    buildingBlocks: e
  }) => {
    let t = {};
    for (let i of e) {
      let e = i.name;
      t[e] || (t[e] = []);
      t[e].push(i.componentId);
    }
    let i = Object.entries(t).filter(([e, t]) => t.length > 1).reduce((e, [t, i]) => (e[t] = i, e), {});
    return Promise.resolve({
      guids: Object.entries(i).flatMap(([e, t]) => t),
      meta: i
    });
  },
  fix: (e, t) => {
    if (!t) return !1;
    let i = getSingletonSceneGraph();
    permissionScopeHandler.user("first-draft-fix-block-name-collisions", () => {
      for (let [e, n] of Object.entries(t)) for (let t of n.slice(1)) {
        let r = i.get(t);
        r && (r.name = `${e} ${n.indexOf(t)}`);
      }
    });
    return !0;
  }
};
let G = {
  key: "UNIQUE_VARIABLE_NAMES",
  name: "Unique variable names",
  warning: "Variable names should be unique within the Presets collection",
  severity: x$.WARNING,
  category: i6.THEME,
  supportedKitTypes: [v2.FIRST_PARTY],
  detect: () => {
    let e = pX();
    if (!e) return Promise.resolve({
      guids: [],
      meta: {}
    });
    let t = Object.entries(VariablesBindings.getLocalVariablesInfo().filter(t => t.setID === e.nodeId && !t.isSoftDeleted).reduce((e, t) => (e[t.name] || (e[t.name] = []), e[t.name].push(t.id), e), {})).filter(([e, t]) => t.length > 1).reduce((e, [t, i]) => (e[t] = i, e), {});
    return Promise.resolve({
      guids: Object.entries(t).flatMap(([e, t]) => t),
      meta: t
    });
  },
  fix: (e, t) => !!t && (permissionScopeHandler.user("first-draft-fix-variable-name-collisions", () => {
    for (let [e, i] of Object.entries(t)) for (let t of i.slice(1)) VariablesBindings.renameVariable(t, `${e} ${i.indexOf(t)}`);
  }), !0)
};
let z = [f, $$O, B, k, N, S, w, L, p, D, $$C, h, m, T];
let H = [V, U, G, M, j, E, v];
export function $$K1(e) {
  return e ? e.system.some(e => e.output.guids.length > 0) || e.component.some(e => Object.values(e.output).some(e => e.guids.length > 0)) ? "error" : "success" : "not_applicable";
}
let Y = [];
export function $$q0(e, t = Y) {
  let i = e?.pageId;
  e = useStableMemo(e);
  t = useStableMemo(t);
  let l = getSingletonSceneGraph();
  let [d, c] = useState(null);
  let [u, p] = useState(null);
  useEffect(() => {
    (async () => {
      if (i) try {
        let e = await Gh.getFirstDraftAllKits();
        let t = FirstDraftHelpers.getKitKey(i);
        let n = e.data.meta.kits.find(e => e.key === t);
        n && c({
          name: n?.name,
          key: n?.key
        });
      } catch (e) {
        console.error("Error fetching first party kits for linting", e);
      }
    })();
  }, [i]);
  let m = useCallback(async () => {
    if (!e || !getFeatureFlags().first_draft_publish_ux && !getFeatureFlags().first_draft_make_kit) return null;
    let i = await LQ(e.pageId);
    let n = i.map(e => e.componentId).map(e => l.get(e)).filter(e => !!e);
    let r = {
      system: [],
      component: []
    };
    for (let e of z) {
      if (t.includes(e.severity)) continue;
      let i = {};
      for (let t of n) {
        if (!t) continue;
        let {
          guids,
          meta
        } = e.detect(t);
        guids.length > 0 && (i[t.guid] = {
          meta,
          guids
        });
      }
      r.component.push({
        rule: e,
        output: i
      });
    }
    for (let n of H) {
      if (t.includes(n.severity)) continue;
      let {
        guids,
        meta
      } = await n.detect({
        kitKey: e,
        buildingBlocks: i,
        firstPartyKitInfo: d ?? void 0
      });
      guids.length > 0 && r.system.push({
        rule: n,
        output: {
          meta,
          guids
        }
      });
    }
    p(r);
  }, [e, d, t, l]);
  useEffect(() => {
    m();
  }, [m]);
  return {
    result: u,
    validate: m
  };
}
export const C = $$q0;
export const O = $$K1;