import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, memo } from "react";
import { lQ } from "../905/934246";
import { ButtonPrimitive } from "../905/632989";
import { s as _$$s } from "../905/403855";
import { r as _$$r } from "../905/619088";
import { AppStateTsApi, HandoffBindingsCpp, StylesBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import h from "classnames";
import { debugState } from "../905/407919";
import { selectWithShallowEqual } from "../905/103090";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { O as _$$O } from "../figma_app/140784";
import { $R } from "../figma_app/883490";
import { trackDefinedFileEvent } from "../figma_app/314264";
import { UK } from "../figma_app/740163";
import { removeFromSelection, addToSelection, selectNodesInRange, updateHoveredNode, currentSessionLocalIDString } from "../figma_app/741237";
import { useSceneGraphSelector } from "../figma_app/722362";
import { S as _$$S } from "../figma_app/106763";
import { getObservableOrFallback } from "../figma_app/84367";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { assetTypeEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { m as _$$m } from "../905/70820";
import { J as _$$J } from "../905/273120";
import { Bf } from "../figma_app/249941";
import { nM, wH, yo, HR, sz, bx, BT, M4, Mh, GE, RK, V3, MS, hR, vN, tD, rq, aw, Hn, hz, yL, P_, bT, ZE, Ym, ye, Re, UZ } from "../905/348522";
import { A as _$$A } from "../6828/523860";
import { A as _$$A2 } from "../6828/85206";
var m = h;
export let $$F0 = atom(new Map());
function j(e) {
  let {
    isHovered,
    selection
  } = selectWithShallowEqual(t => ({
    isHovered: t.mirror.appModel.hoveredNode === e.guid,
    selection: t.mirror.sceneGraphSelection
  }));
  let [a, s] = useState(!1);
  let o = useRef(null);
  useEffect(() => {
    o.current && e.isSelected && o.current.scrollIntoView({
      block: "nearest"
    });
  }, [e.isSelected]);
  let l = "SYMBOL" === e.type || "INSTANCE" === e.type || e.isInstanceSublayer || e.isSymbolSublayer || $$B3.includes(e.type);
  let c = [nM, e._className];
  e.isSelected && c.push(wH);
  isHovered && c.push(yo);
  l && c.push(HR);
  e.isExpanded(e.guid) && c.push(sz);
  e.isAncestorSelected && c.push(bx);
  0 !== e.indentation && c.push(BT);
  let u = Array.from({
    length: e.indentation
  }, (e, t) => t + 1);
  return jsxs("div", {
    ref: o,
    className: m()(c),
    "data-fullscreen-intercept": !0,
    onContextMenu: t => e.openContextMenu(t, e.guid),
    onDoubleClick: t => e.isExpandable && e.toggleExpanded(t, e.guid),
    onMouseDown: t => {
      _$$S("html_tree");
      e.didSelectRow(e.guid);
      let n = Object.keys(selection);
      if (atomStoreManager.set(_$$m, null), AppStateTsApi?.editorState().focusedAnnotationId.set(null), t.metaKey) {
        var i;
        selection[i = e.guid] ? removeFromSelection([i]) : addToSelection([i]);
      } else t.shiftKey && n.length > 0 ? selectNodesInRange(n[n.length - 1], e.guid) : HandoffBindingsCpp.selectAndPanToNode(e.guid);
    },
    onMouseEnter: () => {
      s(!0);
      updateHoveredNode(e.guid);
    },
    onMouseLeave: () => {
      s(!1);
      updateHoveredNode(currentSessionLocalIDString);
    },
    role: "button",
    tabIndex: 0,
    children: [jsxs("div", {
      className: M4,
      children: [u.map(e => jsx("div", {
        className: Mh
      }, e)), e.children]
    }), jsx(K, {
      name: e.name,
      guid: e.guid,
      isRowHovered: a
    })]
  });
}
export function $$U2(e) {
  return jsx(SvgComponent, {
    onMouseDown: e.visible ? t => {
      t.preventDefault();
      t.stopPropagation();
      e.onMouseDown?.(t);
    } : void 0,
    className: m()(GE, e.visible && RK),
    svg: e.expanded ? _$$A : _$$A2,
    dataTestId: `devHandoffLayersRow.toggle-${e.name}`
  });
}
export let $$B3 = ["TABLE", "TABLE_CELL", "WASHI_TAPE", "STAMP", "STICKY", "SHAPE_WITH_TEXT", "WIDGET"];
export function $$G5(e, t) {
  let r = e?.type ?? assetTypeEnum.NOT_ASSET;
  let n = !!(r & (assetTypeEnum.ASSET_IMAGE | assetTypeEnum.ASSET_ICON));
  return t ? n : !!(r & assetTypeEnum.ASSET_IMAGE);
}
function V(e) {
  return "SYMBOL" === e || "INSTANCE" === e;
}
export function $$H4({
  node: e,
  showIcons: t,
  assetInfo: r
}) {
  return r && $$G5(r, t) ? jsx(Q, {
    guid: e.guid,
    assetInfo: r,
    hasEnabledStaticImagePaint: e.hasEnabledStaticImagePaint
  }) : jsx(Bf, {
    className: m()(V3, MS, {
      [hR]: $$B3.includes(e.type)
    }),
    guid: e.guid,
    useUI3Icon: !0
  });
}
function z({
  guid: e
}) {
  let t = useAtomWithSubscription($$F0).get(e);
  if (!t) return null;
  let r = t.state;
  return "added" === r ? jsx("div", {
    className: vN
  }) : "changed" === r ? jsx("div", {
    className: tD
  }) : "removed" === r ? jsx("div", {
    className: rq
  }) : null;
}
function W(e) {
  return jsxs(j, {
    ...e,
    _className: e.hasChildren ? aw : void 0,
    children: [jsx($$U2, {
      visible: e.isExpandable && e.hasChildren,
      expanded: e.isExpanded(e.guid),
      onMouseDown: t => e.toggleExpanded(t, e.guid),
      name: e.name
    }), jsx(Bf, {
      className: V3,
      guid: e.guid,
      useUI3Icon: !0
    }), jsxs("span", {
      className: Hn,
      children: [e.name, " ", e.showGuids && ` (${e.guid})`]
    }), jsx(z, {
      guid: e.guid
    })]
  });
}
function K({
  isRowHovered: e,
  guid: t,
  name: r
}) {
  let i = useDeepEqualSceneValue((e, t) => e.get(t)?.isLockedInDevMode, t);
  return i || e ? jsx(ButtonPrimitive, {
    actionOnPointerDown: !0,
    onClick: () => {
      let e = getSingletonSceneGraph().get(t);
      e && permissionScopeHandler.user("set-locked-in-dev-mode", () => {
        e.isLockedInDevMode = !e.isLockedInDevMode;
        let t = debugState.getState();
        let r = t.openFile?.key;
        r && trackDefinedFileEvent("dev_mode.set_node_locked", r, t, {
          locked: e.isLockedInDevMode,
          nodeId: e.guid,
          nodeType: e.type,
          isLockedInDesignMode: e.locked,
          opacity: e.opacity,
          fillOpacity: e.fills[0]?.opacity
        });
      });
    },
    "aria-label": getI18nString("dev_handoff.layers_panel.locked_tooltip"),
    className: hz,
    "aria-pressed": i,
    htmlAttributes: {
      "data-testid": `devHandoffLayersRow.lockIcon-${r}`,
      "data-tooltip": getI18nString("dev_handoff.layers_panel.locked_tooltip"),
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip-show-right": !0
    },
    children: i ? jsx(_$$s, {}) : jsx(_$$r, {})
  }) : null;
}
function Y(e) {
  return jsxs(j, {
    ...e,
    _className: aw,
    children: [jsx($$U2, {
      visible: e.isExpandable && e.hasChildren,
      expanded: e.isExpanded(e.guid),
      onMouseDown: t => e.toggleExpanded(t, e.guid),
      name: e.name
    }), jsx(Bf, {
      className: V3,
      guid: e.guid,
      useUI3Icon: !0
    }), jsxs("span", {
      className: Hn,
      children: [e.name, " ", e.showGuids && ` (${e.guid})`]
    }), jsx(z, {
      guid: e.guid
    })]
  });
}
function $(e) {
  var t;
  var r;
  let i;
  let a = useSceneGraphSelector();
  let s = e.inheritedTextStyle;
  if (s) {
    let e = StylesBindings.getStyleNodeId(s.key, s.version);
    i = a.get(e)?.name;
  }
  let o = e.isInstanceSublayer ? (t = e.name, r = e.textContent, t === r?.trim().replace(/\s+/gm, " ")) : e.autoRename;
  return jsxs(j, {
    ...e,
    _className: yL,
    children: [jsx($$U2, {
      visible: !1,
      expanded: !1,
      name: e.name
    }), jsx(Bf, {
      className: V3,
      guid: e.guid,
      useUI3Icon: !0
    }), o ? e.showGuids ? jsx("span", {
      className: Hn,
      children: e.guid
    }) : null : jsxs("span", {
      className: Hn,
      children: [e.name, " ", e.showGuids && ` (${e.guid})`]
    }), jsx("span", {
      className: P_,
      children: e.textContent
    }), jsxs("span", {
      className: bT,
      children: [" \xb7 ", i]
    }), jsx(z, {
      guid: e.guid
    })]
  });
}
function X(e) {
  return jsxs(Fragment, {
    children: [jsx(Bf, {
      className: m()(V3, MS, {
        [hR]: !e.figJam
      }),
      guid: e.guid,
      useUI3Icon: !0
    }), jsxs("span", {
      className: m()(Hn, MS),
      children: [e.name, e.showGuids && ` (${e.guid})`]
    })]
  });
}
function q(e) {
  let t = e.guid;
  return jsxs(j, {
    ...e,
    children: [jsx($$U2, {
      visible: e.isExpandable && e.hasChildren,
      expanded: e.isExpanded(t),
      onMouseDown: r => e.toggleExpanded(r, t),
      name: e.name
    }), jsx(X, {
      guid: t,
      name: e.name,
      showGuids: e.showGuids
    }), jsx(z, {
      guid: e.guid
    })]
  });
}
function J(e) {
  let t = e.guid;
  return jsxs(j, {
    ...e,
    children: [jsx($$U2, {
      visible: !1,
      expanded: !1,
      onMouseDown: lQ,
      name: e.name
    }), jsx(X, {
      guid: t,
      name: e.name,
      showGuids: e.showGuids,
      figJam: !0
    }), jsx(z, {
      guid: e.guid
    })]
  });
}
function Z(e) {
  let {
    assetInfo
  } = e;
  return assetInfo ? jsx(ee, {
    ...e,
    assetInfo
  }) : jsx(W, {
    ...e
  });
}
function Q({
  guid: e,
  assetInfo: t,
  hasEnabledStaticImagePaint: r
}) {
  let i = t.type & assetTypeEnum.ASSET_IMAGE || r;
  let a = _$$O({
    assetId: e,
    thumbnailVersion: t.thumbnailVersion,
    width: 64,
    height: 64,
    scale: 2
  });
  return jsx(_$$J, {
    className: m()(ZE, i ? Ym : ye),
    style: a.backgroundStyle,
    src: a.url
  });
}
function ee(e) {
  let {
    assetInfo
  } = e;
  return jsxs(j, {
    ...e,
    _className: Re,
    children: [getFeatureFlags().dt_insp_impr_assets ? jsx($$U2, {
      visible: e.isExpandable && e.hasChildren,
      expanded: e.isExpanded(e.guid),
      onMouseDown: t => e.toggleExpanded(t, e.guid),
      name: e.name
    }) : jsx($$U2, {
      visible: !1,
      expanded: !1,
      name: e.name
    }), jsx(Q, {
      guid: e.guid,
      assetInfo,
      hasEnabledStaticImagePaint: e.hasEnabledStaticImagePaint
    }), jsx(Fragment, {
      children: V(e.type) ? jsx(X, {
        guid: e.guid,
        name: e.name,
        showGuids: e.showGuids
      }) : jsxs(Fragment, {
        children: [jsxs("span", {
          className: Hn,
          children: [e.name, " ", e.showGuids && ` (${e.guid})`]
        }), jsx("span", {
          className: UZ,
          children: jsx($R, {
            assetInfo,
            dataTestId: "layerPanelAsset"
          })
        })]
      })
    })]
  });
}
export let $$et1 = memo(e => {
  let t = getObservableOrFallback(UK().showGuids);
  let r = getObservableOrFallback(AppStateTsApi.devHandoffState().automaticIconDetection);
  let i = e.isAncestorAsset ? void 0 : e.assetInfo;
  let a = useSceneGraphSelector().get(e.guid);
  if (!a) return null;
  let s = a.devToolsOrderedVisibleChildren;
  let o = function (e, t, r) {
    return $$B3.includes(e.type) ? J : r && $$G5(r, t) ? Z : V(e.type) ? q : "FRAME" === e.type && e.isStack ? Y : "TEXT" === e.type ? $ : W;
  }(a, r, i);
  if (!o) return null;
  let l = s.length > 0 && (!!getFeatureFlags().dt_insp_impr_assets || !(i && $$G5(i, r)));
  return jsx(o, {
    absoluteBoundingBox: a.absoluteBoundingBox,
    assetInfo: i,
    autoRename: a.autoRename,
    didSelectRow: e.didSelectRow,
    guid: a.guid,
    hasChildren: l,
    hasEnabledStaticImagePaint: a.hasEnabledStaticImagePaint,
    indentation: e.indentation,
    inheritedTextStyle: a.inheritedTextStyle,
    isAncestorAsset: e.isAncestorAsset,
    isAncestorSelected: e.isAncestorSelected,
    isExpandable: !e.isRoot && l,
    isExpanded: e.isExpanded,
    isInstanceSublayer: a.isInstanceSublayer,
    isSelected: e.isSelected,
    isSymbolSublayer: a.isSymbolSublayer,
    name: a.name,
    openContextMenu: e.openContextMenu,
    showGuids: t,
    stackMode: a.inferredAutoLayoutResult ? a.inferredAutoLayoutResult.stackMode : a.stackMode,
    textContent: a.textContent,
    toggleExpanded: e.toggleExpanded,
    type: a.type
  });
});
export const Ib = $$F0;
export const O5 = $$et1;
export const Zy = $$U2;
export const q1 = $$B3;
export const rI = $$H4;
export const vY = $$G5;