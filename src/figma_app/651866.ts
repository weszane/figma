import _require from "../5973/625973";
import { ComponentPropsAiCPPBindings, Fullscreen, TextModificationAction } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { hV } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { R } from "../905/531474";
var $$n4;
export function $$d3(e, t) {
  return e && e.isAlive && e.visible ? "TEXT" === e.type && e.visible ? {
    textNodes: [{
      node: e,
      isLockedInCanvas: t || e.locked
    }],
    imageNodes: []
  } : e.childrenNodes.reduce((e, r) => {
    if (!r.isAlive) return e;
    if ("TEXT" === r.type && r.visible) {
      let n = {
        node: r,
        isLockedInCanvas: t || r.locked
      };
      e.textNodes.push(n);
    } else if (R(r)) {
      let n = {
        node: r,
        isLockedInCanvas: t || r.locked
      };
      e.imageNodes.push(n);
    } else if (r.childrenNodes && r.visible) {
      let n = $$d3(r, t || r.locked);
      e.textNodes.push(...n.textNodes);
      e.imageNodes.push(...n.imageNodes);
    }
    return e;
  }, {
    textNodes: [],
    imageNodes: []
  }) : {
    textNodes: [],
    imageNodes: []
  };
}
export function $$c2(e) {
  if (0 === e.length) return {
    numTextLayers: 0,
    totalNumCharacters: 0
  };
  let t = 0;
  let r = 0;
  let n = new Set(e.map(e => e.guid));
  for (let i of e) hV(i, e => {
    if (e.guid !== i.guid && n.has(e.guid)) return "stop";
    "TEXT" === e.type && (t++, r += e.textContent.length);
  });
  return {
    numTextLayers: t,
    totalNumCharacters: r
  };
}
export function $$u0(e, t, r) {
  let n;
  if (!e) return {
    status: 2,
    commitId: void 0
  };
  let s = !1;
  let o = !0;
  let l = e.textNodes;
  let d = Object.values(t);
  return (permissionScopeHandler.ai("content-fill", () => {
    l.filter((e, t) => !r.has(t)).forEach((e, t) => {
      if (e.isLockedInCanvas) return;
      let r = d[t];
      if (!r) return;
      let a = ComponentPropsAiCPPBindings.setTextContentOnTextNode(e.node.guid, r);
      if (a) {
        if (!Fullscreen) throw Error("Fullscreen is not available");
        Fullscreen.requestNextCommitMergeWithPrevious(TextModificationAction.CONTENT_FILL_INSERT_AND_GENERATE);
        n = Fullscreen.commit();
      } else !1 === a && (s = !0);
      o = o && !a;
    });
  }), s) ? {
    status: 1,
    commitId: n
  } : o ? {
    status: 3,
    commitId: n
  } : {
    status: 0,
    commitId: n
  };
}
export function $$p6(e) {
  return function (e) {
    if (0 === e.length) return [];
    let t = [];
    for (let r = 0; r < e[0].length; r++) t.push({
      textNodes: [],
      imageNodes: []
    });
    e.forEach(e => {
      e.forEach((e, r) => {
        t[r].textNodes.push(...e.textNodes);
      });
    });
    return t;
  }(e.map(e => {
    let t = [];
    e.childrenNodes.forEach(r => {
      t.push($$d3(r, r.locked || e.locked));
    });
    return t;
  }));
}
export function $$_5(e, t) {
  return 0 === e.length ? 0 : t ? e[0].childrenNodes.filter(e => ("INSTANCE" === e.type || "FRAME" === e.type || "TEXT" === e.type) && "AUTO" === e.stackPositioning).length : e.length;
}
function h(e) {
  if ("TEXT" !== e.type) return !1;
  let t = e.textContent.trim();
  return 0 !== t.length && (t.length > 1 || ![33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 93, 94, 95, 95, 96, 123, 124, 125, 126, 183, 903, 8213, 8226, 8231, 8901, 8967, 9087, 9144, 9145, 9472, 9473, 9474, 9475, 9479, 9482, 9550, 9551, 9552, 9553, 9588, 9590, 9592, 9593, 9594, 9597, 9599, 12539, 65074, 65097, 65098, 65099, 65100, 65101, 65102, 65103, 65372].includes(t.charCodeAt(0)));
}
export function $$m8(e) {
  if (0 === e.length) return null;
  let t = e[0];
  let r = "TEXT_LAYER_";
  let n = new Set();
  t.textNodes.forEach((e, t) => {
    h(e.node) || n.add(t);
  });
  return {
    fieldsToUserInstructions: t.textNodes.filter(e => h(e.node)).map((e, t) => ({
      defId: e.node.guid,
      fieldName: `${r}${t}`,
      instructions: ""
    })),
    fieldsToValues: e.map(e => ({
      fields: e.textNodes.filter(e => h(e.node)).map((e, t) => ({
        defId: e.node.guid,
        fieldName: `${r}${t}`,
        value: e.node.textContent
      }))
    })),
    nodesToSkip: n
  };
}
export function $$g1(e) {
  for (let t of e) for (let e of t.textNodes) if (ComponentPropsAiCPPBindings.nodeHasMissingFonts(e.node.guid)) return !0;
  return !1;
}
export async function $$f7(e) {
  if (0 !== e.length && e[0]) {
    let t = await E(e[0]);
    let r = e.map(e => e.guid);
    if (r) for (let e of r) {
      let r = RegExp(`<Text id="${e}">[^<]*</Text>`, "g");
      t = t.replace(r, `<Text id="${e}"></Text>`);
    }
    return t;
  }
}
async function E(e) {
  let t = getSingletonSceneGraph().get(e.findContainingTopLevelFrameOrSelf());
  return t ? (await Promise.all([]).then(_require)).serializeJSX(t, {
    includeIDs: !0,
    excludeImageData: !0,
    excludeVectorData: !0,
    includeNames: !0,
    ignoreFetchingComponentData: !0,
    includeNodeTypes: ["RECTANGLE", "ROUNDED_RECTANGLE", "TEXT", "FRAME", "GROUP", "INSTANCE", "STICKY"],
    fieldGroups: ["layout", "text"],
    fieldGroupFilters: {
      layout: ["x", "y", "width", "height", "position", "flex"],
      text: ["fontSize", "textDecoration"]
    },
    strict: !1,
    includeInstanceSublayers: !0,
    ignoreDeveloperFriendlyIds: !0,
    maxSerializeTimeMs: 5e3
  }).jsxStr : Promise.resolve("");
}
!function (e) {
  e[e.SUCCESS = 0] = "SUCCESS";
  e[e.MISSING_FONT = 1] = "MISSING_FONT";
  e[e.EMPTY_NODE = 2] = "EMPTY_NODE";
  e[e.FAILED = 3] = "FAILED";
}($$n4 || ($$n4 = {}));
export const $7 = $$u0;
export const Ao = $$g1;
export const CN = $$c2;
export const Rf = $$d3;
export const Sy = $$n4;
export const Wz = $$_5;
export const wR = $$p6;
export const xb = $$f7;
export const yq = $$m8;