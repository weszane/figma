import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState, useCallback, useRef, PureComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clamp } from "../figma_app/492908";
import { setupDragHandler } from "../905/97346";
import { SceneGraphHelpers, PluginHelpers, figmaScopeBindings } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { useDebounce } from 'use-debounce';
import { NY, ux } from "../figma_app/851625";
import { parsePxInt } from "../figma_app/783094";
import { l as _$$l } from "../905/745972";
import { P8 } from "../905/270781";
import { Bn } from "../905/879323";
import { Dm } from "../figma_app/8833";
import { getCurrentFileType } from "../figma_app/976749";
import { Z } from "../905/224161";
import { dB } from "../905/640017";
import { UK } from "../figma_app/740163";
import { expandNodeToRoot, clearSelection } from "../figma_app/741237";
import { useCurrentFileKey } from "../figma_app/516028";
import { getSelectedView } from "../figma_app/386952";
import { getObservableOrFallback } from "../figma_app/84367";
import { nt } from "../9314/278494";
import { Xt } from "../figma_app/889655";
import { G2 } from "../figma_app/314591";
import { multiValueMapAtom } from "../905/755472";
import { lu } from "../905/545842";
import { O as _$$O } from "../905/51985";
import { J as _$$J } from "../9831/379831";
import { LdP, tui } from "../figma_app/27776";
function O(e, t) {
  useEffect(() => {
    let l = l => {
      70 === l.keyCode && l.ctrlKey && l.altKey && l.metaKey && t(!e && !!getFeatureFlags().internal_only_debug_tools);
    };
    document.addEventListener("keydown", l);
    return () => {
      document.removeEventListener("keydown", l);
    };
  }, [e, t]);
}
export function $$L0() {
  let e = getObservableOrFallback(UK().showFigmaScope);
  let {
    setIsOpen,
    setClosed
  } = useMemo(() => {
    let e = e => UK().showFigmaScope.set(e);
    return {
      setIsOpen: e,
      setClosed: () => e(!1)
    };
  }, []);
  O(e, setIsOpen);
  return e ? jsx(F, {
    onClose: setClosed
  }) : null;
}
export function $$M1() {
  let [e, t] = useState(!1);
  let l = useCallback(() => {
    t(!1);
  }, [t]);
  O(e, t);
  return e ? jsx(I, {
    onClose: l,
    appSelection: void 0,
    setAppSelection: void 0
  }) : null;
}
function F({
  onClose: e
}) {
  let t = useDispatch();
  let l = useSelector(J);
  let a = useCallback(e => {
    let l = e.guids[0];
    l && ("canvas" === e.selectionType && SceneGraphHelpers && SceneGraphHelpers.setSelectedNodeAndCanvas(l, !1) && (expandNodeToRoot(l), PluginHelpers && PluginHelpers.scrollAndZoomIntoView(e.guids)), "local_style" === e.selectionType && (clearSelection(), t(Bn({
      type: e.styleType,
      styleIds: new Set(e.guids),
      folderNames: new Set()
    }))));
  }, [t]);
  return jsx(I, {
    onClose: e,
    appSelection: l,
    setAppSelection: a
  });
}
function I({
  onClose: e,
  appSelection: t,
  setAppSelection: l
}) {
  let c = getSelectedView();
  let m = useCurrentFileKey();
  let f = getObservableOrFallback(figmaScopeBindings.sceneGeneration());
  let [w] = useDebounce(f, 500, {
    trailing: !0
  });
  let b = Xr(lu);
  let E = useSelector(e => {
    if ("prototype" === c.view) return !0;
    try {
      return null != e.mirror.sceneGraph.getCurrentPage();
    } catch (e) {
      return !1;
    }
  });
  let S = "prototype" === c.view;
  let O = useSelector(e => e.mirror.appModel.pagesList);
  let L = useAtomWithSubscription(multiValueMapAtom);
  useEffect(() => {
    if (E) {
      let e = new G2({
        name: "Current file",
        sensitiveTextPolicy: "show",
        type: S ? "viewer" : "editor",
        pagesList: O
      });
      e.setNodeWarnings(L);
      b(NY({
        primaryResource: e
      }));
    } else b(ux());
  }, [w, b, S, E, m, O, L]);
  let M = dB();
  let F = useRef(null);
  Z("legacy" === M ? "light" : M, F, c);
  let I = getCurrentFileType();
  let {
    windowInnerHeight
  } = _$$l();
  let [P, K] = useState(window.innerHeight / 2);
  let Y = useMemo(() => windowInnerHeight - clamp(P, parsePxInt("design" === I ? LdP : tui), windowInnerHeight - 32), [P, I, windowInnerHeight]);
  let B = Xr(_$$O);
  useEffect(() => {
    B(Y);
  }, [B, Y]);
  let [, U] = setupDragHandler({
    onDrag(e) {
      K(e.clientY);
    }
  });
  return E ? jsx(D, {
    children: jsxs("div", {
      style: {
        zIndex: 8,
        height: Y,
        color: "#000",
        position: "relative"
      },
      ref: F,
      className: Dm,
      tabIndex: -1,
      children: [jsx("div", {
        ...U({
          style: {
            cursor: "ns-resize",
            position: "absolute",
            left: 0,
            right: 0,
            top: "-3px",
            height: "5px"
          }
        })
      }), jsx(_$$J, {
        embedded: !0,
        onClose: e,
        appSelection: t,
        setAppSelection: l
      })]
    })
  }) : null;
}
class D extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: !1
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: !0
    };
  }
  componentDidCatch(e) {
    console.error(e);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
let J = P8([Xt, nt], (e, t) => {
  let l = Object.keys(e);
  if (l.length > 0) return {
    selectionType: "canvas",
    guids: l.sort()
  };
  if (t) {
    let e = Array.from(t.styleIds);
    if (e.length > 0) return {
      selectionType: "local_style",
      guids: e.sort(),
      styleType: t.type
    };
  }
});
export const EmbeddedFigmaScopeViewForEditorEnabled = $$L0;
export const EmbeddedFigmaScopeViewForViewerEnabled = $$M1;
