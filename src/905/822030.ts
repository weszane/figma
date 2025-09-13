import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, memo, useCallback, useMemo, useRef, useContext } from "react";
import { ButtonPrimitive } from "../905/632989";
import { J } from "../905/614223";
import { r as _$$r } from "../905/249071";
import { M as _$$M } from "../905/512402";
import { defaultSessionLocalIDString } from "../905/871411";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import u from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { aR, lE } from "../905/945781";
var p = u;
let _ = "overlay_highlight--added--28SgH";
let A = "overlay_highlight--removed--9BsT-";
let y = "overlay_highlight--edited---lnVX";
let b = "overlay_highlight--interactive--f4-mM";
let v = "overlay_highlight--invisible--GGcha";
let I = parsePxNumber("2px");
let E = parsePxNumber("1px");
let x = parsePxNumber("8px");
let S = parsePxNumber("16px");
let w = createContext(null);
export function $$C0({
  children: e,
  value: t
}) {
  return jsx(w.Provider, {
    value: t,
    children: e
  });
}
let T = (e, t = "") => {
  switch (e) {
    case "added":
      return getI18nString("dev_handoff.compare_changes.overlay.added", {
        layerName: t
      });
    case "removed":
      return getI18nString("dev_handoff.compare_changes.overlay.removed", {
        layerName: t
      });
    case "changed":
      return getI18nString("dev_handoff.compare_changes.overlay.changed", {
        layerName: t
      });
  }
};
let k = memo(function ({
  node: e,
  rect: t,
  borderStyle: i,
  borderSize: o,
  renderTag: l,
  renderOverlay: d,
  tagValue: c,
  interactive: u,
  invisible: m,
  onBoxClicked: g,
  onBoxHovered: f,
  recordingKey: w
}) {
  let C = e.value;
  let k = 1 === o ? E : I;
  let R = !!c;
  let N = R ? S : x;
  let P = R && c > 99;
  let O = R ? c > 99 ? "99+" : c : void 0;
  let D = useCallback(t => {
    t.stopPropagation();
    g?.(e);
  }, [g, e]);
  let L = useHandleMouseEvent(w, "click", D);
  let F = useCallback(() => {
    f?.(C);
  }, [C, f]);
  let M = useCallback(() => {
    f?.(null);
  }, [f]);
  let j = T(C.state, C.name);
  return jsxs(Fragment, {
    children: [jsx(ButtonPrimitive, {
      className: p()("overlay_highlight--highlight--x-16k", {
        "overlay_highlight--thin--t8yeW": 1 === o,
        "overlay_highlight--dashed--Z34AW": 0 === i,
        "overlay_highlight--solid--XkPFI": 1 === i,
        "overlay_highlight--none--poZGj": 2 === i,
        [_]: "added" === C.state,
        [A]: "removed" === C.state,
        [y]: "changed" === C.state,
        [b]: u,
        [v]: m
      }),
      style: {
        transform: `translate(${t.x - k}px, ${t.y - k}px)`,
        width: t.width,
        height: t.height
      },
      htmlAttributes: {
        onMouseEnter: F,
        onMouseLeave: M,
        tabIndex: u ? 0 : -1
      },
      "aria-label": j,
      onClick: L,
      children: d && jsx("div", {
        className: "overlay_highlight--highlightOverlay--QsoQT"
      })
    }), l && C.state && jsx(J, {
      mode: "added" !== C.state ? "light" : "dark",
      children: jsx(ButtonPrimitive, {
        onClick: L,
        htmlAttributes: {
          onMouseEnter: F,
          onMouseLeave: M,
          tabIndex: -1
        },
        className: p()("overlay_highlight--actionTag--osNjG", {
          [_]: "added" === C.state,
          [A]: "removed" === C.state,
          [y]: "changed" === C.state,
          "overlay_highlight--large--DPhJK": R,
          "overlay_highlight--wideText--lXSz9": P,
          [b]: u,
          [v]: m
        }),
        style: {
          transform: `translate(${t.x - N / 2 - E}px, ${t.y - N / 2 - E}px)`
        },
        children: O
      })
    })]
  });
});
var R = (e => (e[e.DASHED = 0] = "DASHED", e[e.SOLID = 1] = "SOLID", e[e.NONE = 2] = "NONE", e))(R || {});
var N = (e => (e[e.WIDE = 0] = "WIDE", e[e.THIN = 1] = "THIN", e))(N || {});
let P = e => e.beforeNodeId + ":" + e.afterNodeId;
let O = e => !e.parent && !e.value;
let D = e => !e.parent || O(e.parent) || !!e.parent.value?.isRootFrame;
let L = e => e.descendantsCount > 0 ? e.descendantsCount : void 0;
let F = e => e.value && !e.value.isSelected && !!e.parent?.value?.directParentToSelection;
let M = (e, t, i) => {
  if (!e.value) return !1;
  let n = e.value;
  return !t || n.isSelected || n.ancestorOfSelectedNode || i || D(e) || F(e);
};
let j = (e, t) => {
  let i = e.transformRect(new _$$r(new _$$M(t.x, t.y), new _$$M(t.width, t.height)));
  return {
    x: i.left(),
    y: i.top(),
    width: i.width(),
    height: i.height()
  };
};
let U = (e, t) => t && t === e.value?.state;
function B({
  node: e,
  onBoxClicked: t,
  onBoxHovered: i,
  selectedNodeId: a,
  expandedLayers: s,
  transform: o,
  ignoreState: l,
  interactive: u,
  hoveredNodeIdAtom: p,
  recordingKey: m
}) {
  let g = O(e);
  let _ = U(e, l);
  let A = !!(e.value && e.value.isSelected);
  let y = useMemo(() => atom(t => {
    let i = t(p);
    return !!(e.value && G(e.value, i));
  }), [e, p]);
  let b = useAtomWithSubscription(y);
  let v = !_ && (e.value?.ancestorOfSelectedNode || A || !!e.value?.isRootFrame || g);
  let I = !!a && a !== defaultSessionLocalIDString;
  let E = useMemo(() => {
    if (aR(e) && e.value.rect) {
      let t = e.value;
      let i = e.value.rect;
      let n = D(e);
      let r = F(e);
      let a = !!e.parent?.value?.isSelected;
      let s = A ? 1 : b || r || a || t.ancestorOfSelectedNode || n && !t.ancestorOfSelectedNode ? 0 : 2;
      let l = A || b ? 0 : 1;
      let d = !A && !v && (a || b || n && !I);
      let c = b && !A && !v;
      let p = j(o, i);
      let m = u && (b || A);
      if (!_) return {
        rect: p,
        renderTag: d,
        borderStyle: s,
        borderSize: l,
        renderOverlay: c,
        tagValue: L(t),
        invisible: m,
        node: e
      };
    }
  }, [e, I, v, A, o, b, u, _]);
  return jsxs(Fragment, {
    children: [E && jsx(k, {
      borderSize: E.borderSize,
      borderStyle: E.borderStyle,
      interactive: u,
      invisible: E.invisible,
      isSelected: A,
      node: E.node,
      onBoxClicked: t,
      onBoxHovered: i,
      recordingKey: generateRecordingKey(m, P(E.node.value)),
      rect: E.rect,
      renderOverlay: E.renderOverlay,
      renderTag: E.renderTag,
      tagValue: E.tagValue
    }, P(E.node.value) + ":" + u ? "active" : "inactive"), v && e.children && e.children.map(r => r.value && M(r, I, !!e.value?.isSelected) && jsx(B, {
      expandedLayers: s,
      hoveredNodeIdAtom: p,
      ignoreState: l,
      interactive: u,
      node: r,
      onBoxClicked: t,
      onBoxHovered: i,
      recordingKey: m,
      selectedNodeId: a,
      transform: o
    }, P(r.value)))]
  });
}
let V = ({
  box: e,
  isSelected: t
}) => ({
  ...e,
  ancestorOfSelectedNode: !1,
  directParentToSelection: !1,
  isSelected: t,
  descendantsCount: 0
});
let G = (e, t) => !!t && t !== defaultSessionLocalIDString && !!e && (t === e.afterNodeId || t === e.beforeNodeId);
let z = (e, t) => !!t && t !== defaultSessionLocalIDString && !!e && (t === e.afterNodeId || t === e.beforeNodeId);
function H(e) {
  let {
    rootBox,
    expandedLayers,
    selectedNodeId,
    transform,
    ignoreState,
    hoveredNodeIdAtom,
    recordingKey
  } = e;
  let u = useAtomWithSubscription(hoveredNodeIdAtom);
  let p = useMemo(() => {
    if (!rootBox || !u) return;
    let e = lE(rootBox, e => G(e, u) && !z(e, selectedNodeId));
    return e && {
      value: e,
      children: void 0
    };
  }, [rootBox, u, selectedNodeId]);
  let m = useMemo(() => {
    if (!rootBox || !selectedNodeId) return;
    let e = lE(rootBox, e => z(e, selectedNodeId));
    return e && {
      value: e,
      children: void 0
    };
  }, [rootBox, selectedNodeId]);
  return jsxs(Fragment, {
    children: [m && jsx(B, {
      node: m,
      selectedNodeId,
      expandedLayers,
      transform,
      ignoreState,
      interactive: !1,
      hoveredNodeIdAtom,
      recordingKey
    }), p && jsx(B, {
      node: p,
      selectedNodeId,
      expandedLayers,
      transform,
      ignoreState,
      interactive: !1,
      hoveredNodeIdAtom,
      recordingKey
    })]
  });
}
let W = memo(function (e) {
  let {
    rootBox,
    expandedLayers,
    onBoxClicked,
    onBoxHovered,
    selectedNodeId,
    transform,
    ignoreState,
    interactive,
    hoveredNodeIdAtom,
    recordingKey
  } = e;
  let m = useMemo(() => rootBox ? function e(t, i, n, r) {
    let a = !!t.value && (t.value.afterNodeId === i || t.value.beforeNodeId === i);
    let s = {
      parent: r,
      value: t.value ? V({
        box: t.value,
        isSelected: a
      }) : void 0
    };
    s.children = t.children ? t.children?.map(t => {
      let r = e(t, i, n, s);
      r.value && (!n || r.value.state !== n) && s.value && (s.value.descendantsCount += r.value.descendantsCount + 1);
      r.value?.ancestorOfSelectedNode && s.value && (s.value.ancestorOfSelectedNode = !0);
      r.value?.isSelected && s.value && (s.value.directParentToSelection = !0, s.value.ancestorOfSelectedNode = !0);
      return r;
    }) : void 0;
    return s;
  }(rootBox, selectedNodeId, ignoreState) : void 0, [rootBox, selectedNodeId, ignoreState]);
  let g = useRef(void 0);
  let f = useCallback(e => {
    g.current = e;
  }, []);
  let _ = useCallback(() => {
    void 0 !== g.current && (onBoxHovered?.(g.current), g.current = void 0);
  }, [onBoxHovered]);
  return jsxs("div", {
    className: "overlay_highlight--overlayContainer--XMr11",
    role: "group",
    onMouseMove: _,
    children: [interactive && m && jsx(B, {
      expandedLayers,
      hoveredNodeIdAtom,
      ignoreState,
      interactive: !0,
      node: m,
      onBoxClicked,
      onBoxHovered: f,
      recordingKey: generateRecordingKey(recordingKey, "overlays", "highlight"),
      selectedNodeId,
      transform
    }), jsx(H, {
      rootBox: m,
      expandedLayers,
      selectedNodeId,
      transform,
      ignoreState,
      hoveredNodeIdAtom,
      recordingKey: generateRecordingKey(recordingKey, "overlays", "highlight", "hovered-or-selected")
    })]
  });
});
export function $$K1(e) {
  let t = useContext(w);
  return t ? jsx(W, {
    ...e,
    ...t
  }) : null;
}
export const H1 = $$C0;
export const q1 = $$K1;