import { T as _$$T } from "../figma_app/886346";
import { B as _$$B } from "../figma_app/236342";
import { id } from "../905/648693";
import { deepEqual } from "../905/382883";
import { COMPONENT_PREFIX, getComponentInfoById, getTypeInfoCached, getComponentJSXName, isPartOfGroup, filterComponentProps } from "../figma_app/664063";
import { Pr } from "../figma_app/774411";
import { QP } from "../vendor/202832";
import { Xo, Ls, W7, jJ, wv, _A, Fj, O5 } from "../905/998346";
import { Hd, Qe, qM, tr, vE, Wo, xe } from "../905/791403";
import { GroupItemType } from "../905/223510";
import { getSingletonSceneGraph } from "../905/700578";
import { collectSymbolsAndStateGroups } from "../905/94678";
import { EventEmitter } from "../905/690073";
import { z } from "../vendor/835909";
export let $$i4 = {
  topLevelComponentProps: !0,
  tailwind: !0,
  strict: !1
};
export async function $$a2(e, t, r) {
  try {
    return await _$$T(e, {
      ...$$i4,
      transformUnhandledNodes: r.showUnhandled,
      componentInfoByJSXName: t,
      updateDerivedSymbolDataAfterDeserialization: r.headless
    });
  } catch {
    return {
      node: null,
      issues: []
    };
  }
}
let d = e => !!e && "object" == typeof e && "string" == typeof e.id;
export function $$c3(e) {
  let t = e.match(/```(jsx|tsx)([\s\S]*?)(```|$)/);
  return t ? t[2]?.trim() ?? "" : "";
}
async function u(e) {
  let t = await _$$B(e, {
    excludeLocations: !0
  });
  if (!t || 0 === t.length) return t;
  let r = function (e) {
    let t = e.lastIndexOf(">");
    return -1 !== t ? e.substring(0, t + 1) : e;
  }(e);
  if (!r || !r.endsWith(">")) return t;
  let n = await _$$B(r, {
    excludeLocations: !0
  });
  if (!n || 0 === n.length) return t;
  let i = 1;
  let a = e => {
    if (e && "object" == typeof e) for (let [t, r] of Object.entries(e)) if (t.startsWith("image")) {
      if (Array.isArray(r)) {
        if (r.every(d)) {
          let n = {
            id: i.toString()
          };
          e[t] = r.map(() => (i++, n));
        }
      } else d(r) ? (e[t] = {
        id: i.toString()
      }, i++) : a(r);
    } else a(r);
  };
  (function e(t, r, n) {
    let i = !0;
    if (!t || !r) return !1;
    for (let a = 0; a < t.length; a++) {
      let s = t[a];
      let d = r[a];
      if (!d || !s) {
        i = !1;
        break;
      }
      if ("string" == typeof d) {
        "string" != typeof s && (i = !1);
        i = s === d;
        continue;
      }
      if ("string" != typeof s) {
        if (s.type !== d.type || (e(s.children, d.children, n) || (i = !1), !d.props || !s.props)) {
          i = !1;
          continue;
        }
        for (let [t, r] of Object.entries(d.props)) if (id(r) && id(s.props[t])) e([s.props[t]], [r], n) || (i = !1);else if (Array.isArray(r) && Array.isArray(s.props[t])) {
          let a = s.props[t];
          for (let t = 0; t < r.length; t++) if (t >= a.length && (i = !1), id(r[t]) && id(a[t])) {
            let s = r[t];
            e([a[t]], [s], n) || (i = !1);
          } else deepEqual(a[t], r[t]) || (i = !1);
        } else "isPartial" === t ? i = s.props[t] === r : deepEqual(s.props[t], r) || (i = !1);
        i && n(d);
      }
    }
    return i;
  })(n, t, e => {
    if ("Image" === e.type || "Instance" === e.type || e.type.startsWith("Component")) {
      a(e.props);
      let t = e.props.sharedPluginData && "object" == typeof e.props.sharedPluginData ? e.props.sharedPluginData : {};
      e.props = {
        ...e.props,
        sharedPluginData: {
          ...t,
          isDone: "true"
        }
      };
    }
  });
  return t;
}
export async function $$p5(e) {
  let t = await u(e);
  return !t || 0 === t.length || t.some(e => !e) || t.some(e => !(void 0 !== e.type && "" !== e.type)) ? null : t;
}
function E(...e) {
  return QP(e.join(" "));
}
let y = {
  Unhandled: P,
  VStack: function ({
    props: e,
    children: t
  }) {
    return N({
      type: Hd,
      props: {
        ...e,
        direction: "vertical"
      },
      children: t
    });
  },
  HStack: function ({
    props: e,
    children: t
  }) {
    return N({
      type: Hd,
      props: {
        ...e,
        direction: "horizontal"
      },
      children: t
    });
  },
  Image: v,
  MobileSingleCol: Xo,
  DesktopSingleCol: Ls,
  DesktopTwoColWithLeftSidebar: W7,
  DesktopTwoColWithRightSidebar: jJ,
  div: O
};
let b = {
  AutoLayout: C,
  Unhandled: D,
  VStack: function ({
    props: e,
    children: t
  }) {
    return N({
      type: Qe,
      props: {
        ...e,
        direction: "vertical"
      },
      children: t
    });
  },
  HStack: function ({
    props: e,
    children: t
  }) {
    return N({
      type: Qe,
      props: {
        ...e,
        direction: "horizontal"
      },
      children: t
    });
  },
  Image: A,
  MobileSingleCol: wv,
  DesktopSingleCol: _A,
  DesktopTwoColWithLeftSidebar: Fj,
  DesktopTwoColWithRightSidebar: O5,
  div: R
};
let T = {
  Unhandled: P,
  Image: v,
  div: O,
  main: O,
  section: O,
  header: O,
  footer: O,
  article: O,
  aside: O,
  nav: O,
  ul: O,
  ol: O,
  li: O,
  span: x,
  p: x,
  h1: x,
  h2: x,
  h3: x,
  h4: x,
  h5: x,
  h6: x,
  a: x,
  b: x,
  i: x,
  u: x,
  s: x,
  strong: x
};
let I = {
  AutoLayout: C,
  Unhandled: D,
  Image: A,
  div: R,
  main: R,
  section: R,
  header: R,
  footer: R,
  article: R,
  aside: R,
  nav: R,
  ul: R,
  ol: R,
  li: R,
  span: x,
  p: x,
  h1: x,
  h2: x,
  h3: x,
  h4: x,
  h5: x,
  h6: x,
  a: x,
  b: x,
  i: x,
  u: x,
  s: x,
  strong: x
};
function S({
  type: e,
  props: t,
  children: r
}) {
  let n = [];
  let {
    description,
    w,
    aspect,
    className,
    sharedPluginData
  } = t;
  let d = 36;
  if ("string" == typeof w) {
    let e = qM("w", w);
    e && n.push(e);
    w in tr && (d = tr[w]);
  } else "number" == typeof w && (d = w, n.push(vE("w", w)));
  "video" === aspect ? n.push(vE("h", 9 * d / 16)) : n.push(vE("h", d));
  return {
    type: e,
    props: {
      name: description ?? "Image description",
      sharedPluginData: {
        ...(sharedPluginData ?? {}),
        isImage: "true",
        description
      },
      className: E("flex p-2 bg-[#eee]", ...n, className ?? "")
    },
    children: r ?? []
  };
}
function v({
  props: e,
  children: t
}) {
  return S({
    type: Hd,
    props: e,
    children: t
  });
}
function A({
  props: e,
  children: t
}) {
  return S({
    type: Qe,
    props: e,
    children: t
  });
}
function x({
  props: e,
  children: t
}) {
  return {
    type: "Text",
    props: {
      width: "fill-parent",
      ...e
    },
    children: t
  };
}
function N({
  type: e,
  props: t,
  children: r
}) {
  let {
    direction,
    className
  } = t;
  let a = "vertical" === direction;
  return {
    type: e,
    props: {
      sharedPluginData: {
        type: a ? "VStack" : "HStack"
      },
      className: E("flex items-start w-fit h-fit", a ? "flex-col" : "flex-row", "string" == typeof className ? className : "")
    },
    children: r
  };
}
function C({
  props: e,
  children: t
}) {
  return N({
    type: Qe,
    props: e,
    children: t
  });
}
function w({
  type: e,
  props: t,
  children: r
}) {
  let {
    name,
    className
  } = t;
  let a = "string" == typeof className ? className : "";
  let s = {
    className: E(Wo, xe(a), a)
  };
  name && "string" == typeof name && (s.name = name);
  return {
    type: e,
    props: s,
    children: r
  };
}
function O({
  props: e,
  children: t
}) {
  return w({
    type: Hd,
    props: e,
    children: t
  });
}
function R({
  props: e,
  children: t
}) {
  return w({
    type: Qe,
    props: e,
    children: t
  });
}
function L({
  type: e,
  props: t
}) {
  let {
    className,
    msg
  } = t;
  return {
    type: e,
    props: {
      className: E("flex justify-center items-center", ("string" == typeof className ? className : "") ?? "", "border bg-red-100 border-red-100")
    },
    children: [{
      type: "Text",
      props: {},
      children: [msg]
    }]
  };
}
function P({
  props: e,
  children: t
}) {
  return L({
    type: Hd,
    props: e,
    children: t
  });
}
function D({
  props: e,
  children: t
}) {
  return L({
    type: Qe,
    props: e,
    children: t
  });
}
let k = new Set(["AutoLayout", "Frame", "Rectangle", "Ellipse", "Text", "SVG", "Image", "Line", "Fragment", "Span", "Instance"]);
export async function $$M7(e, t, r, n) {
  return (await Promise.all(e.map(e => function e(t, r, n, i, a) {
    return "string" == typeof t ? r?.type === "Text" || r?.type === "Span" ? t.trim() : e({
      type: "Text",
      props: {
        width: "hug-contents",
        height: "hug-contents",
        ...(r?.props ?? {})
      },
      children: [t]
    }, r, n, i, a) : id(t) ? function (t, r, n, i, a) {
      if (!id(t)) return null;
      let {
        props
      } = t;
      let {
        type,
        children
      } = t;
      props && "class" in props && !("className" in props) && "string" == typeof props.$$class && (props.className = props.$$class, delete props.$$class);
      ("" === type || "React.Fragment" === type) && (l = "Fragment");
      props.children && (Array.isArray(props.children) && props.children.every(e => "string" == typeof e || id(e)) ? d = props.children : ("string" == typeof props.children || id(props.children)) && (d = [props.children]), delete props.children);
      d = (children ?? []).flat(10);
      let c = a.directGen ? a.useShareJSX ? I : T : a.useShareJSX ? b : y;
      if (type in c) {
        let t = c[type];
        if (t) return e(t({
          props,
          children
        }), r, n, i, a);
      }
      let u = (children ?? []).flat(10).map(r => e(r, t, n, i, a)).filter(Boolean);
      "Instance" === type && "string" == typeof props.component && n.getComponentInfoByJSXName(props.component) && (l = props.component, delete props.component);
      let p = type.toLowerCase().startsWith(COMPONENT_PREFIX.toLowerCase());
      if (a.useShareJSX) p && (props.sharedPluginData = {
        ...props.sharedPluginData,
        type
      }, n.getComponentInfoByJSXName(type));else {
        let e = n.customJSXElementToInstanceElement({
          type,
          props,
          children: u
        });
        if (e) {
          i?.trackComponentLookupSuccess();
          return e;
        }
      }
      if (!a.useShareJSX && !k.has(type)) return (i?.trackComponentLookupFailure(), a.showUnhandled) ? e({
        type: "Unhandled",
        props: {
          msg: `Unhandled node type: ${type}`,
          className: "string" == typeof props.className ? props.className : ""
        },
        children: []
      }, r, n, i, a) : null;
      if (a.useShareJSX && p || i?.trackPrimitiveUsage(), a.useShareJSX) return {
        type,
        props,
        children: u
      };
      {
        let {
          className,
          margin,
          ...r
        } = props ?? {};
        if (className && ("string" == typeof className || Array.isArray(className) && className.every(e => "string" == typeof e)) && !a.useShareJSX) for (let [t, n] of Object.entries(Pr(className, type))) r[t] = n;
        return {
          type,
          props: r,
          children: u
        };
      }
    }(t, r, n, i, a) : null;
  }(e, null, t, r, n)))).filter(e => !!e);
}
export function $$F8(e) {
  if (1 !== e.length) throw Error("Expected exactly one JSXElement");
  return e[0];
}
let U = ["Icons"];
export function $$V6({
  rootNodes: {
    includeSelection: e,
    dsKitKey: t,
    pageChildrenName: r,
    useAllPages: n
  } = {}
}) {
  let i = [];
  let a = getSingletonSceneGraph();
  if (t?.type === "1P_LIBRARY" || t?.type === "USER_LIBRARY") {
    let e = a.getInternalCanvas();
    e && i.push(e);
  }
  if (n) {
    let e = a.getInternalCanvas();
    a.getRoot().childrenNodes.forEach(t => {
      "CANVAS" === t.type && t.guid !== e?.guid && i.push(t);
    });
  } else {
    let e = a.getCurrentPage();
    let r = t?.type === "LOCAL" && t.pageId ? a.get(t.pageId) : e;
    r && i.push(r);
  }
  if (0 === i.length || i.some(e => !e || "CANVAS" !== e.type)) return [];
  let s = [];
  for (let t of i) if (t) {
    if (e && s.push(...t.directlySelectedNodes), r) for (let e of t.reversedChildrenNodes) {
      var o;
      var l;
      o = e.name;
      l = r;
      (o = o.replace(/[^0-9a-z]/gi, "").toLowerCase()) === (l = l.replace(/[^0-9a-z]/gi, "").toLowerCase()) && s.push(e);
    } else s.push(t);
  }
  return s;
}
function H(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
export class $$z0 {
  constructor({
    dsKitKey: e,
    publishedComponentToInsertResult: t,
    componentInfoByName: r,
    options: n
  }) {
    H(this, "dsKitKey", void 0);
    H(this, "publishedComponentToInsertResult", void 0);
    H(this, "componentInfoByName", void 0);
    H(this, "options", void 0);
    H(this, "getComponentTypeSortOrder", e => {
      switch (e) {
        case GroupItemType.BUILDING_BLOCK:
          return 0;
        case GroupItemType.NONE:
          return 1;
        case GroupItemType.GROUPED_COMPONENT:
          return 2;
        default:
          return 3;
      }
    });
    H(this, "getShareJsxComponentInfoByJSXName", () => Object.fromEntries(Object.entries(this.componentInfoByName).map(([e, t]) => t ? [t.jsxName, {
      guid: t.componentId
    }] : [e, void 0]).filter(e => void 0 !== e[1])));
    H(this, "getComponentInfoByJSXName", e => {
      let t = e.toLowerCase();
      if (!t.startsWith(COMPONENT_PREFIX.toLowerCase())) return null;
      if (t in this.componentInfoByName) return this.componentInfoByName[t];
      for (let [e, r] of Object.entries(this.publishedComponentToInsertResult)) if ("error" !== r.status && e.toLowerCase() === t) {
        let e = getComponentInfoById(r.guid, {
          enableTsArrays: this.options.enableTsArrays
        });
        if (e) {
          this.componentInfoByName[t] = e;
          return e;
        }
      }
      let r = function (e, t) {
        return e.map(e => {
          try {
            return getTypeInfoCached(e, {
              enableTsArrays: !!t.enableTsArrays
            });
          } catch (r) {
            t.onError(r, {
              nodeId: e.guid
            });
          }
        }).filter(Boolean);
      }(function (e, t) {
        let r = $$V6(t);
        return collectSymbolsAndStateGroups([...r], {
          followInstances: !1
        }).filter(t => e.toLowerCase() === getComponentJSXName(t.name).toLowerCase());
      }(t, {
        rootNodes: {
          dsKitKey: this.dsKitKey,
          useAllPages: this.options.useAllComponents
        }
      }), this.options);
      for (let e of (0 === Object.keys(this.publishedComponentToInsertResult).length && r.sort((e, t) => this.getComponentTypeSortOrder(e.componentType) - this.getComponentTypeSortOrder(t.componentType)), r)) if (function (e, t) {
        if (function (e) {
          for (let t of U) if (isPartOfGroup(e, t)) return t;
          return null;
        }(e.componentGroupPath)) return null;
        if (Object.entries(t).length > 0) {
          let r = t[e.jsxName];
          if (!r || "error" === r.status || !(r.key === e.key && r.version === e.version)) return null;
        }
        return {
          type: "SIMPLE",
          name: e.jsxName,
          typeInfo: e
        };
      }(e, this.publishedComponentToInsertResult)) {
        this.componentInfoByName[t] = e;
        return e;
      }
      this.componentInfoByName[t] = null;
      return null;
    });
    H(this, "customJSXElementToInstanceElement", e => {
      let t = this.getComponentInfoByJSXName(e.type);
      if (!t) return null;
      let {
        type,
        props,
        children
      } = e;
      try {
        let e = t.defaultNodeId;
        let r = filterComponentProps({
          ...props,
          children
        }, t, this.getComponentInfoByJSXName, {
          enableTsArrays: this.options.enableTsArrays
        });
        return {
          type: "Instance",
          props: {
            componentId: e,
            componentProps: r.componentProps,
            componentPropsNested: r.componentPropsNested,
            nestedInstancesVisibility: r.nestedInstancesVisibility,
            sharedPluginData: Object.fromEntries(Object.entries({
              ...r.sharedPluginData,
              type: t.jsxName
            }).map(([e, t]) => "string" != typeof t ? [e, JSON.stringify(t)] : [e, t]))
          },
          children: []
        };
      } catch (e) {
        this.options.onError(e, {
          type,
          props
        });
      }
      return null;
    });
    this.dsKitKey = e;
    this.publishedComponentToInsertResult = t;
    this.componentInfoByName = r ?? {};
    this.options = n;
  }
}
function Y(e, t, r) {
  t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r;
  return e;
}
z.object({
  runtimeDuration: z.number(),
  firstByteReceivedAtOffset: z.number(),
  jsxStreamDuration: z.number(),
  numComponents: z.number(),
  componentLookupSuccesses: z.number(),
  primitiveComponents: z.number(),
  componentLookupFailures: z.number(),
  numImages: z.number(),
  imageFailures: z.number(),
  imageSuccesses: z.number(),
  imageBlocked: z.number(),
  firstImageLoadedAtOffset: z.number(),
  lastStreamByteReceivedAtOffset: z.number(),
  imageDurations: z.array(z.object({
    start: z.number(),
    end: z.number(),
    duration: z.number(),
    status: z.enum(["success", "failure", "blocked"])
  }))
});
export class $$$1 {
  start() {
    this.startTime = Date.now();
  }
  trackFirstByteReceived() {
    -1 === this.instrumentationData.firstByteReceivedAtOffset && (this.instrumentationData.firstByteReceivedAtOffset = Date.now() - this.startTime);
  }
  resetComponentStats() {
    this.instrumentationData.numComponents = 0;
    this.instrumentationData.componentLookupSuccesses = 0;
    this.instrumentationData.componentLookupFailures = 0;
    this.instrumentationData.primitiveComponents = 0;
    this.imageProgressEmitter.trigger("statusChanged");
  }
  trackComponentLookup(e = 1) {
    this.instrumentationData.jsxStreamDuration = Date.now() - this.instrumentationData.firstByteReceivedAtOffset - this.startTime;
    this.instrumentationData.numComponents += e;
  }
  trackPrimitiveUsage() {
    this.instrumentationData.primitiveComponents += 1;
    this.instrumentationData.jsxStreamDuration = Date.now() - this.instrumentationData.firstByteReceivedAtOffset - this.startTime;
  }
  trackComponentLookupSuccess(e = 1) {
    this.trackComponentLookup(e);
    this.instrumentationData.componentLookupSuccesses += e;
  }
  trackComponentLookupFailure(e = 1) {
    this.trackComponentLookup(e);
    this.instrumentationData.componentLookupFailures += e;
  }
  trackLastStreamByteReceived() {
    this.instrumentationData.lastStreamByteReceivedAtOffset = Date.now() - this.startTime;
    this.instrumentationData.jsxStreamDuration = this.instrumentationData.lastStreamByteReceivedAtOffset - this.instrumentationData.firstByteReceivedAtOffset;
  }
  trackFinished(e) {
    this.instrumentationData.runtimeDuration = Date.now() - this.startTime;
    let t = {
      type: this.type,
      status: e
    };
    let r = [{
      metric: "first_draft.client.runtime_duration",
      value: this.instrumentationData.runtimeDuration,
      tags: t
    }];
    -1 !== this.instrumentationData.firstByteReceivedAtOffset && (r.push({
      metric: "first_draft.client.num_components",
      value: this.instrumentationData.numComponents,
      tags: t
    }, {
      metric: "first_draft.client.component_lookup_failures",
      value: this.instrumentationData.componentLookupFailures,
      tags: t
    }, {
      metric: "first_draft.client.first_byte_received_at_offset",
      value: this.instrumentationData.firstByteReceivedAtOffset,
      tags: t
    }, {
      metric: "first_draft.client.jsx_stream_duration",
      value: this.instrumentationData.jsxStreamDuration,
      tags: t
    }, {
      metric: "first_draft.client.num_images",
      value: this.instrumentationData.numImages,
      tags: t
    }, {
      metric: "first_draft.client.last_stream_byte_received_at_offset",
      value: this.instrumentationData.lastStreamByteReceivedAtOffset,
      tags: t
    }), this.instrumentationData.numImages > 0 && r.push({
      metric: "first_draft.client.image_failures",
      value: this.instrumentationData.imageFailures,
      tags: t
    }, {
      metric: "first_draft.client.image_successes",
      value: this.instrumentationData.imageSuccesses,
      tags: t
    }, {
      metric: "first_draft.client.image_blocked",
      value: this.instrumentationData.imageBlocked,
      tags: t
    }, {
      metric: "first_draft.client.first_image_loaded_at_offset",
      value: this.instrumentationData.firstImageLoadedAtOffset,
      tags: t
    }));
    this.reportMetrics(r);
  }
  logImageLoadBlocked() {
    let e = Date.now();
    this.instrumentationData.numImages++;
    this.instrumentationData.imageBlocked++;
    this.imageProgressEmitter.trigger("statusChanged");
    this.instrumentationData.imageDurations.push({
      start: this.startTime,
      end: e,
      duration: e - this.startTime,
      status: "blocked"
    });
  }
  async logImageLoad(e) {
    let t = "success";
    let r = Date.now() - this.startTime;
    try {
      this.instrumentationData.numImages++;
      this.imageProgressEmitter.trigger("statusChanged");
      await e();
    } catch (e) {
      t = "failure";
      return e;
    } finally {
      let e = Date.now() - this.startTime;
      this.instrumentationData.imageDurations.push({
        start: r,
        end: e,
        duration: e - r,
        status: t
      });
      -1 === this.instrumentationData.firstImageLoadedAtOffset && (this.instrumentationData.firstImageLoadedAtOffset = e);
      "success" === t ? this.instrumentationData.imageSuccesses++ : this.instrumentationData.imageFailures++;
      this.imageProgressEmitter.trigger("statusChanged");
    }
  }
  constructor(e, t) {
    Y(this, "type", void 0);
    Y(this, "startTime", void 0);
    Y(this, "instrumentationData", void 0);
    Y(this, "reportMetrics", void 0);
    Y(this, "imageProgressEmitter", void 0);
    this.type = e;
    this.startTime = 0;
    this.instrumentationData = {
      runtimeDuration: -1,
      firstByteReceivedAtOffset: -1,
      jsxStreamDuration: -1,
      numComponents: 0,
      primitiveComponents: 0,
      componentLookupSuccesses: 0,
      componentLookupFailures: 0,
      numImages: 0,
      imageFailures: 0,
      imageSuccesses: 0,
      imageBlocked: 0,
      firstImageLoadedAtOffset: -1,
      lastStreamByteReceivedAtOffset: -1,
      imageDurations: []
    };
    this.imageProgressEmitter = new EventEmitter("imageProgressEmitter");
    this.reportMetrics = t;
  }
}
export const yT = $$z0;
export const sw = $$$1;
export const _1 = $$a2;
export const eb = $$c3;
export const RP = $$i4;
export const Kf = $$p5;
export const __ = $$V6;
export const BW = $$M7;
export const JF = $$F8;