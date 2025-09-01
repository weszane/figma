import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createElement, memo, useEffect, useLayoutEffect } from "react";
import { d4, bN, Pj } from "../vendor/514228";
import { c2 } from "../905/382883";
import { qE } from "../figma_app/492908";
import { m1T, glU, Egt, VDs } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Xr } from "../figma_app/27355";
import u from "classnames";
import { Ay } from "../figma_app/778880";
import { tx, t as _$$t } from "../905/303541";
import { j7 } from "../905/929976";
import { K9 } from "../figma_app/8833";
import { E3 } from "../figma_app/976749";
import { Y5 } from "../figma_app/455680";
import { wr, Dh } from "../figma_app/741237";
import { QZ } from "../figma_app/62612";
import { W } from "../905/898204";
import { f as _$$f } from "../905/299537";
import { l as _$$l } from "../905/600666";
import { iT, EO, l0, xR } from "../figma_app/536669";
import { E as _$$E } from "../905/602035";
import { X } from "../905/510602";
import { s as _$$s } from "../figma_app/154255";
import { rp, d2, Dm } from "../905/845277";
import { x as _$$x } from "../905/97817";
import { rH } from "../figma_app/404319";
var p = u;
let $$R0 = {
  alwaysPan: !1,
  noPanViewportMultiplier: .9,
  panJustEnoughViewportMultiplier: 1.5
};
let $$L4 = {
  jumpOnAbort: !0
};
function P(e) {
  let t = qE(e.headerLevel, 2, 6);
  return e.header ? jsxs(Fragment, {
    children: [jsx("div", {
      role: "heading",
      "aria-level": t,
      id: e.header.headerId,
      children: e.header.label
    }), e.children]
  }) : jsx(Fragment, {
    children: e.children
  });
}
export function $$D3({
  nodeId: e,
  accessibilityScope: t,
  isDebugMode: r,
  navigate: i,
  suppressIds: s
}) {
  let o = W(e, t);
  let l = d4(e => e.mirror.appModel.showComments);
  if (!o) return null;
  let d = o.childIds.length;
  let c = o.childIds.map((e, a) => jsx(M, {
    accessibilityScope: t,
    headingLevel: 1,
    isDebugMode: r,
    navigate: i,
    nodeId: e,
    parent: void 0,
    setPosition: a + 1,
    setSize: d,
    suppressIds: s
  }, e));
  return jsx($$k1, {
    nodeId: e,
    commentsShown: l,
    isDebugMode: r,
    navigate: i,
    children: c
  });
}
export function $$k1({
  children: e,
  commentsShown: t,
  nodeId: r,
  isDebugMode: i,
  navigate: a
}) {
  return jsxs(Fragment, {
    children: [e, t ? jsx(U, {
      guid: r,
      navigate: a,
      isDebugMode: i,
      parentTransformProperties: "canvas",
      isTopLevel: !0,
      parentAbsoluteTransform: void 0,
      intermediateTransformProperties: void 0,
      parentDimensions: void 0
    }) : null]
  });
}
function M({
  accessibilityScope: e,
  nodeId: t,
  ...r
}) {
  let n = W(t, e);
  if (!n) return null;
  let {
    childIds,
    ...s
  } = n;
  return createElement(F, {
    ...r,
    ...s,
    nodeId: t,
    childIds,
    accessibilityScope: e
  });
}
let F = memo(({
  childIds: e,
  ...t
}) => {
  let {
    accessibilityScope,
    isDebugMode,
    navigate,
    nodeId,
    headingLevel,
    suppressIds,
    type,
    absoluteTransform,
    dimensions,
    transformProperties
  } = t;
  let _ = iT(type) ? headingLevel + 1 : headingLevel;
  let h = e.length;
  return jsx($$j2, {
    ...t,
    size: h,
    children: e.map((e, t) => jsx(M, {
      accessibilityScope,
      headingLevel: _,
      isDebugMode,
      navigate,
      nodeId: e,
      parent: {
        dimensions,
        transformProperties,
        absoluteTransform,
        guid: nodeId
      },
      setPosition: t + 1,
      setSize: h,
      suppressIds
    }, e))
  });
}, function ({
  directTextContent: e,
  innerTextContent: t,
  tableCells: r,
  transformProperties: n,
  childIds: i,
  stampFrequencies: o,
  accessibleLabel: l,
  absoluteTransform: d,
  dimensions: c,
  parent: u,
  ...p
}, {
  directTextContent: _,
  innerTextContent: h,
  tableCells: m,
  transformProperties: g,
  childIds: f,
  stampFrequencies: E,
  accessibleLabel: y,
  absoluteTransform: b,
  dimensions: T,
  parent: I,
  ...S
}) {
  return bN(p, S) && bN(c, T) && bN(d, b) && bN(n, g) && bN(o, E) && bN(l, y) && bN(i, f) && bN(u?.absoluteTransform, I?.absoluteTransform) && bN(u?.dimensions, I?.dimensions) && bN(u?.transformProperties, I?.transformProperties) && c2(e, _) && c2(t, h) && c2(r, m);
});
export function $$j2({
  children: e,
  setSize: t = 1,
  setPosition: r = 1,
  headingLevel: s = 2,
  author: o,
  transformProperties: u,
  directTextContent: T,
  innerTextContent: x,
  tableCells: w,
  headerLabel: D,
  guid: k,
  isDebugMode: M,
  navigate: F,
  ariaRole: j,
  name: B,
  shapeType: G,
  size: V,
  type: H,
  nodeId: z,
  suppressIds: W,
  stampFrequencies: K,
  accessibleLabel: Y,
  contentsHidden: $,
  dimensions: X,
  absoluteTransform: q,
  parent: J
}) {
  let Z;
  let Q = Pj();
  let ee = Q.getState().comments.showResolved;
  let et = d4(e => e.mirror.appModel.showComments);
  let er = Q.getState().mirror.sceneGraph;
  let en = iT(H) ? s + 1 : s;
  let ei = E3();
  let ea = _$$E({
    type: H,
    shapeType: G,
    ariaRole: j,
    name: B,
    setData: {
      size: t,
      i: r,
      headerLevel: s
    },
    numChildren: V,
    stampFrequencies: K,
    accessibleLabel: Y,
    contentsHidden: $,
    editorType: ei
  });
  let es = !J;
  if (getFeatureFlags().a11y_design_dom_mirror) Z = es ? EO(X, q) : EO(X, q, J.dimensions, J.absoluteTransform);else {
    let e = es ? "canvas" : J.transformProperties;
    Z = l0(u, e);
  }
  let eo = rp(T, d2.SEMANTIC);
  let el = rp(x, d2.SEMANTIC);
  let ed = Dm(er, z, w);
  let ec = D ? {
    label: D,
    headerId: `sectionHeaderFor-${k}`
  } : null;
  let eu = d4(e => {
    let t = Object.keys(e.mirror.sceneGraphSelection);
    return (e.mirror.appModel.activeCanvasEditModeType !== m1T.TEXT && 1 === t.length ? t[0] : "") === k;
  });
  let {
    groupCommentNodeId,
    groupCommentTransformProperties,
    groupSize
  } = function (e, t) {
    let r;
    let n;
    let i;
    let a = t.get(e)?.parentGuid;
    let s = a ? t.get(a) : void 0;
    for (; s?.resizeToFit;) {
      r = s.guid ?? e;
      let n = s.parentGuid;
      s = n ? t.get(n) : void 0;
    }
    if (r) {
      let t = glU.getSortedChildGuids(r);
      t.length > 0 && t[t.length - 1] === e ? (i = t.length, n = xR(Egt.getNodeTransformProperties(r))) : r = void 0;
    }
    return {
      groupCommentNodeId: r,
      groupCommentTransformProperties: n,
      groupSize: i
    };
  }(k, er);
  !function (e, t, r, n, a, s, o, l, d) {
    let u = Xr(_$$f);
    let p = E3();
    useEffect(() => {
      e && u({
        type: "SET_CURRENTLY_SELECTED_NODE",
        payload: {
          nodeId: d,
          ariaLabel: _$$E({
            type: t,
            shapeType: r,
            name: n,
            accessibleLabel: a,
            setData: {
              size: s,
              i: o,
              headerLevel: l
            },
            editorType: p
          })
        }
      });
    }, [a, l, o, e, n, d, r, s, t, u, p]);
  }(eu, H, G, B, Y, t, r, s, z);
  let em = _$$s();
  useLayoutEffect(() => {
    if (W) return;
    let e = document.getElementById(k);
    e && (eu && !VDs.getExpectingTextInput() ? (e.setAttribute("tabindex", "0"), em.suppressed || e.focus()) : (e.setAttribute("tabindex", "-1"), e.blur()));
  }, [em, k, eu, W]);
  let [eg, ef] = _$$l(M ? [J, o, u, T, x, D, k, eu, j, B, G, H, z, W] : []);
  return jsxs(Fragment, {
    children: [jsxs("div", {
      ref: ef,
      "aria-label": ea,
      className: p()(rH, M && eg),
      contentEditable: Ay.windows && eu ? "true" : void 0,
      "data-fullscreen-intercept-dangerously-include-tab": !0,
      "data-guid": W ? k : void 0,
      id: W ? void 0 : k,
      onContextMenu: e => {
        Q.dispatch(j7({
          type: K9,
          data: {
            clientX: e.clientX,
            clientY: e.clientY
          }
        }));
        e.preventDefault();
      },
      onFocus: e => {
        e.target !== e.currentTarget || e.relatedTarget === e.currentTarget || eu || (wr(), Dh([k]), Y5.commit(), F(QZ({
          nodeId: k,
          ...$$R0
        }), $$L4));
      },
      role: j,
      style: Z,
      tabIndex: -1,
      children: [jsxs(P, {
        header: ec,
        headerLevel: en,
        children: [el.length > 0 ? el : null, eo.length > 0 ? eo : null, null != o && tx("fullscreen.accessibility.author", {
          authorName: o
        }), ed.length > 0 ? ed : null, e]
      }), et ? jsx(U, {
        guid: k,
        navigate: F,
        isDebugMode: M,
        parentTransformProperties: u,
        showResolved: ee,
        intermediateTransformProperties: void 0,
        parentAbsoluteTransform: q,
        parentDimensions: X
      }) : null]
    }), et && groupCommentNodeId ? jsx(U, {
      guid: groupCommentNodeId,
      navigate: F,
      isDebugMode: M,
      parentTransformProperties: "canvas",
      intermediateTransformProperties: groupCommentTransformProperties ?? u,
      showResolved: ee,
      groupSize,
      parentAbsoluteTransform: void 0,
      parentDimensions: void 0
    }) : null]
  });
}
function U({
  guid: e,
  isDebugMode: t,
  navigate: r,
  isTopLevel: i,
  groupSize: a,
  parentTransformProperties: s,
  intermediateTransformProperties: o,
  showResolved: l,
  parentAbsoluteTransform: d,
  parentDimensions: c
}) {
  let u = _$$x(e, l);
  let p = jsx(X, {
    threads: u,
    navigate: r,
    isDebugMode: t,
    parentTransformProperties: s,
    intermediateTransformProperties: o,
    parentAbsoluteTransform: d,
    parentDimensions: c
  });
  if (!u || 0 === u.length) return null;
  if (i) return jsxs("div", {
    role: "region",
    "aria-labelledby": "canvas-comments-heading",
    children: [jsx("h2", {
      id: "canvas-comments-heading",
      children: tx("fullscreen.accessibility_dom.unattached_comments")
    }), p]
  });
  if (!a) return p;
  {
    let e = _$$t("fullscreen.accessibility_dom.grouped_comments", {
      groupSize: a
    });
    return jsx("div", {
      role: "group",
      "aria-label": e,
      children: p
    });
  }
}
export const B5 = $$R0;
export const Z3 = $$k1;
export const cH = $$j2;
export const cU = $$D3;
export const tp = $$L4;