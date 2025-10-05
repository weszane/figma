import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef } from "react";
import { A as _$$A } from "../vendor/648136";
import { Y1 } from "../vendor/891888";
import { setupDragHandler } from "../905/97346";
import { atom, useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { KeyboardNavigationProvider } from "../figma_app/119475";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { Spacer } from "../905/470281";
import { renderBadgesLayout } from "../905/154591";
import { nK } from "../905/836986";
import { P } from "../905/625912";
import { TreeRow } from "../905/27174";
import { HA } from "../figma_app/618665";
import { c1 } from "../905/589717";
import { Pd, io } from "../905/440046";
let y = atom(new Set());
let b = atom(null);
let $$T1 = atom(null);
let I = atom(e => {
  let t = e(y);
  let r = e($$T1);
  if (!r) return [];
  let {
    nodeByGuidMap,
    currentRoot
  } = r;
  if (void 0 === nodeByGuidMap[currentRoot]) return [];
  let a = [];
  let s = (e, r) => {
    let i = nodeByGuidMap[e];
    if (!i) return;
    let o = t.has(e);
    a.push(function (e, t, r) {
      let n = e.id;
      let i = !e.children || 0 === e.children.length;
      return {
        id: n,
        name: e.name,
        indent: r,
        isExpanded: t,
        isLeaf: i,
        leftBadges: "SVG" === e.type || "IMAGE" === e.type ? [{
          type: "info",
          value: e.type
        }] : [{
          type: "type",
          value: e.type
        }],
        primaryId: n,
        secondaryId: "",
        longName: e.name,
        rightBadges: [],
        memoryFraction: null
      };
    }(i, o, r));
    o && i.children.forEach(e => s(e, r + 1));
  };
  s(currentRoot, 0);
  return a;
});
let S = memo(function ({
  id: e,
  primaryId: t,
  name: r,
  index: i,
  isSelected: a,
  style: s,
  isLeaf: o,
  isExpanded: l,
  indent: d,
  leftBadges: h,
  onSelect: g,
  toggleExpanded: f
}) {
  return jsxs(TreeRow, {
    keyboardNavigationPath: [i],
    isSelected: a,
    isLeaf: o,
    isExpanded: l,
    indent: d,
    style: s,
    select: () => g(e),
    toggleExpanded: t => f(e, t),
    children: [jsx(renderBadgesLayout, {
      badges: h
    }), jsx(nK, {
      id: t
    }), jsx("div", {
      title: r,
      className: cssBuilderInstance.ellipsis.noWrap.overflowHidden.$,
      children: r
    }), jsx(Spacer, {})]
  });
});
function v({
  style: e,
  data: {
    displayRows: t,
    currentNodeId: r,
    toggleExpanded: i,
    select: a
  },
  index: s
}) {
  if (!t || !t[s]) return null;
  let o = t[s];
  return o ? jsx(S, {
    ...o,
    onSelect: () => {
      a(o.id);
    },
    toggleExpanded: () => {
      i(o.id, !1);
    },
    style: e,
    index: s,
    isSelected: o.id === r
  }) : null;
}
export function $$A0({
  modalHistory: e
}) {
  let t = useAtomWithSubscription(HA);
  let r = useAtomWithSubscription(e.currentAtom);
  let [c, u] = useAtomValueAndSetter(b);
  let [p, _] = useAtomValueAndSetter($$T1);
  let m = Xr(y);
  let [S, A] = useState(200);
  let [, x] = setupDragHandler({
    onDrag(e) {
      A(window.innerHeight - e.clientY);
    }
  });
  let N = e => {
    m(t => {
      let r = new Set(t);
      r.has(e) ? r.$$delete(e) : r.add(e);
      return r;
    });
  };
  let C = useAtomWithSubscription(I);
  useEffect(() => {
    t && t.fetchMaterializedNodeProps().then(e => {
      _({
        currentRoot: e.data.rootId,
        nodeByGuidMap: e.data.nodeByGuidMap
      });
    });
  }, [r, t, _]);
  let w = useRef(null);
  let O = [];
  if (c && p) {
    let e = p.nodeByGuidMap[c];
    e && (O = Object.keys(e).map(t => function e(t, r) {
      return null == r ? {
        label: t,
        value: {
          type: "nonUserText",
          value: "null"
        },
        children: []
      } : "number" == typeof r ? {
        label: t,
        value: {
          type: "numeric",
          value: r
        },
        children: []
      } : "boolean" == typeof r ? {
        label: t,
        value: {
          type: "boolean",
          value: r
        },
        children: []
      } : "string" == typeof r ? c1.isValid(r) ? {
        label: t,
        value: {
          type: "genericGuid",
          value: c1.fromString(r)
        },
        children: []
      } : {
        label: t,
        value: {
          type: "nonUserText",
          value: r
        },
        children: []
      } : void 0 !== r.x && void 0 !== r.y && 2 === Object.keys(r).length ? {
        label: t,
        value: {
          type: "vector",
          value: r
        },
        children: []
      } : Array.isArray(r) ? {
        label: t,
        value: {
          type: "metadata",
          value: r.length
        },
        children: r.map((t, r) => e(`[${r}]`, t))
      } : "object" == typeof r ? {
        label: t,
        children: Object.entries(r).map(([t, r]) => e(t, r))
      } : {
        label: t,
        value: {
          type: "metadata",
          value: JSON.stringify(r)
        },
        children: []
      };
    }(t, e[t])));
  }
  return jsxs("div", {
    style: {
      height: `${S}px`,
      width: "100%",
      backgroundColor: "var(--color-bg)",
      display: "flex",
      position: "relative"
    },
    children: [jsx("div", {
      ...x({
        style: {
          cursor: "ns-resize",
          position: "absolute",
          left: 0,
          width: "100%",
          top: "-5px",
          height: "10px"
        }
      })
    }), jsx("div", {
      className: Pd,
      style: {
        width: "50%",
        height: "100%"
      },
      children: jsx(_$$A, {
        disableWidth: !0,
        children: ({
          height: e
        }) => jsx(KeyboardNavigationProvider, {
          children: jsx(Y1, {
            itemSize: 18,
            itemCount: C?.length || 0,
            height: e,
            ref: w,
            itemData: {
              displayRows: C,
              currentNode: c,
              toggleExpanded: N,
              select: u
            },
            width: "100%",
            children: v
          })
        })
      })
    }), jsx("div", {
      className: io,
      children: jsx(KeyboardNavigationProvider, {
        style: {
          width: "100%",
          height: "100%"
        },
        children: jsx("div", {
          style: {
            height: "100%",
            width: "100%"
          },
          children: jsx(P, {
            panel: "middle",
            items: O,
            diffItems: void 0,
            extraItems: void 0
          }, c || "none")
        })
      })
    })]
  });
}
export const Q = $$A0;
export const f = $$T1;