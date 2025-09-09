import { jsx, jsxs } from "react/jsx-runtime";
import { Component, PureComponent } from "react";
import { useDispatch } from "react-redux";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { getSingletonSceneGraph } from "../905/700578";
import { parsePxInt, parsePxNumber } from "../figma_app/783094";
import { DV } from "../figma_app/930338";
import { o as _$$o } from "../905/605383";
import { j7 } from "../905/929976";
import { fullscreenValue } from "../figma_app/455680";
import { clearSelection, addToSelection } from "../figma_app/741237";
import { Gj } from "../figma_app/646357";
import { FEditorType } from "../figma_app/53721";
import { PW } from "../figma_app/633080";
import { sp } from "../figma_app/678300";
import { K, h as _$$h } from "../905/275787";
import { er } from "../905/753512";
import { lX } from "../figma_app/588397";
import { FX, rz } from "../figma_app/475869";
let I = "component_tiles--margin24--vBPYF";
let E = "component_tiles--stickySection--aI9lh";
let x = parsePxInt(FX);
let S = parsePxNumber(rz);
export class $$w2 extends Component {
  render() {
    let e = new Map();
    let t = new Map();
    this.props.items.forEach(i => {
      let n = i.containing_frame || {};
      let r = n.pageId || "NO_PAGE";
      let a = n.pageName || "";
      t.set(r, a);
      let s = e.get(r);
      s ? s.push(i) : e.set(r, [i]);
    });
    let i = DV(Array.from(e.keys()), e => t.get(e) ?? "");
    let r = i.length > 1;
    return jsx("div", {
      children: i.map(i => {
        let a = e.get(i) || [];
        let s = t.get(i) || "";
        let o = r && !!s;
        return jsx(C, {
          className: o ? "component_tiles--stickySectionPage--VcqIa component_tiles--stickySection--aI9lh" : E,
          showTitle: o,
          headerText: s,
          children: jsx(R, {
            ...this.props,
            items: a
          })
        }, i);
      })
    });
  }
}
$$w2.displayName = "LibraryItemTilesByPage";
class C extends PureComponent {
  render() {
    return jsxs("div", {
      className: `${I} ${this.props.className || E}`,
      children: [this.props.showTitle && jsx("h3", {
        className: "component_tiles--stickySectionHeader--Ae970 ellipsis--ellipsis--Tjyfa",
        children: this.props.headerText
      }), this.props.children]
    });
  }
}
function T(e) {
  switch (e.type) {
    case PW.CODE_COMPONENT:
    case PW.RESPONSIVE_SET:
      return e.containingFrame;
    default:
      return e.containing_frame;
  }
}
function k(e) {
  switch (e.type) {
    case PW.CODE_COMPONENT:
    case PW.RESPONSIVE_SET:
      return e.assetId;
    default:
      return e.node_id;
  }
}
C.displayName = "StickySection";
class R extends PureComponent {
  constructor() {
    super(...arguments);
    this.CHUNK_SIZE = 5;
  }
  render() {
    let e = {};
    let t = [];
    for (let i of this.props.items) {
      let n = T(i);
      n && n.nodeId && n.nodeId !== k(i) ? (e[n.nodeId] = e[n.nodeId] || [], e[n.nodeId].push(i)) : t.push(i);
    }
    sortByPropertyWithOptions(t, "name");
    let i = Object.keys(e);
    i.sort((t, i) => {
      let n = T(e[t][0])?.name || "";
      let r = T(e[i][0])?.name || "";
      return n.toLowerCase() < r.toLowerCase() ? -1 : 1;
    });
    let r = i.join(",");
    return jsxs("div", {
      className: I,
      children: [t.length > 0 && jsx($$D1, {
        ...this.props,
        items: t
      }), jsx(_$$o, {
        chunkSize: this.CHUNK_SIZE,
        listKey: r,
        children: i.map(t => {
          let i = e[t];
          sortByPropertyWithOptions(i, "name");
          let r = i[0];
          return r ? jsx(N, {
            title: T(r)?.name || "",
            children: jsx($$D1, {
              ...this.props,
              items: i
            })
          }, t) : null;
        })
      })]
    });
  }
}
R.displayName = "LibraryItemTilesByFrame";
class N extends Component {
  render() {
    return jsxs("div", {
      className: "component_tiles--section--qMua7",
      children: [jsx("div", {
        className: "component_tiles--tallSectionHeader--75qCx ellipsis--ellipsis--Tjyfa",
        children: this.props.title
      }), this.props.children]
    });
  }
}
N.displayName = "LibrarySection";
let P = (e, t) => {
  let i = Math.floor(e / 100);
  return (e + 2 - (i - 1) * x - 2 * t) / i;
};
let O = (e, t, i, n) => {
  let r = e - 2 * n;
  let a = Math.round((r + i) / (t + i));
  let s = a - 1;
  return i + (r - (a * t + s * i)) / s;
};
export function $$D1(e) {
  let t = e.showLibraryModalUiRefresh ?? !1;
  let i = useDispatch();
  let r = er();
  let s = O(e.width, 64, 8, S);
  let l = async (t, n) => {
    n.preventDefault();
    n.stopPropagation();
    i(j7({
      type: K.LIBRARY_MODAL,
      data: {
        component: t,
        position: {
          top: n.clientY,
          left: n.clientX
        }
      }
    }));
    e.sceneGraphSelection && e.sceneGraph && !sp(e.sceneGraph, e.sceneGraphSelection, t.node_id) && (clearSelection(), await getSingletonSceneGraph().setCurrentPageFromNodeAsync(t.node_id), addToSelection([t.node_id]), fullscreenValue.commit());
  };
  let d = null;
  let v = !1;
  e.dropdownShown && e.dropdownShown.type === K.LIBRARY_MODAL && (d = e.dropdownShown.data.component);
  let E = "fullscreen" === e.selectedView.view && e.selectedView.editorType === FEditorType.Whiteboard;
  let x = [];
  let w = e.ui3Compact ? 64 : t ? 56 : P(e.width, 24);
  for (let t of e.items) {
    let i = !!(d && d.node_id === k(t));
    v = v || i;
    E ? x.push(jsx(lX, {
      recordingNodePath: k(t),
      item: t,
      width: w,
      height: w,
      showName: !1,
      shouldHideDescription: !0,
      isFigJam: !0,
      noBackground: !0
    }, Gj(t))) : x.push(jsx(lX, {
      buttonProps: {
        onContextMenu: e => {
          l(t, e);
        },
        onItemClick: e.onItemClick
      },
      displayType: e.ui3Compact ? "grid-compact" : "grid",
      draggable: {
        sourceForTracking: e.sourceForTracking || ""
      },
      gutterWidth: e.ui3Compact ? s : void 0,
      height: w,
      isFigJam: !1,
      item: t,
      recordingNodePath: k(t),
      shouldHideTooltip: i,
      showName: !0,
      width: w
    }, Gj(t)));
  }
  let C = e.ui3Compact ? "component_tiles--componentTilesCompact--7vcle component_tiles--componentTiles_v2--9-itI" : t ? "component_tiles--componentTiles_v2--9-itI" : "component_tiles--componentTiles--axRNc";
  let T = e.ui3Compact ? {
    marginLeft: `-${s}px`
  } : void 0;
  let R = e.items.map(e => e.type === PW.COMPONENT ? e.component_key : e.key).join(",");
  return jsxs("div", {
    className: `${I} ${e.className ? e.className : ""}`,
    children: [jsx("div", {
      className: t || e.ui3Compact ? "component_tiles--componentContainer_v2--cgysm" : "component_tiles--componentContainer--BZZuQ",
      children: jsx(_$$o, {
        chunkSize: 50,
        listKey: R,
        className: C,
        style: T,
        children: E ? jsx("div", {
          className: "component_tiles--figjamManageLibrariesGridContainer--9go35",
          children: x
        }) : x
      })
    }), v && jsx(_$$h, {
      hideForLocalComponents: !e.isFilePublished,
      dropdownShown: e.dropdownShown,
      selectedView: e.selectedView,
      usePortal: r
    })]
  });
}
export let $$L0 = 64;
export const $z = $$L0;
export const We = $$D1;
export const ev = $$w2;
