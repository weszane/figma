import { debug } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { k } from "../905/749197";
import { SceneGraphHelpers, ScrollBehavior } from "../figma_app/763686";
import { isSpecialNodeType } from "../905/266460";
import { isSpecialType } from "../figma_app/387100";
import { getFeatureFlags } from "../905/601108";
import { parsePxNumber } from "../figma_app/783094";
import { isRecordingEnabled } from "../figma_app/878298";
import { isValidWidgetType } from "../figma_app/364284";
import { K3 } from "../figma_app/678300";
import { vo } from "../figma_app/164212";
import { n as _$$n } from "../figma_app/583890";
import { indentWidth, indentWidthWithMargin } from "../figma_app/786175";
export class $$f3 {
  constructor(e, t) {
    this.sceneGraph = e;
    this.sceneGraphSelection = t;
    this.nodes = {};
    this.ancestorInfos = {};
    this.maskInfos = {};
  }
  getNode(e) {
    if (!this.nodes[e]) {
      let t = this.sceneGraph.get(e);
      t && (this.nodes[e] = t);
    }
    return this.nodes[e];
  }
  getAncestorInfo(e) {
    let t = this.ancestorInfos[e];
    if (t) return t;
    let r = this.getNode(e);
    if (debug(null != r, "getAncestorInfo called on invalid node"), r && r.parentGuid) {
      let n = this.getAncestorInfo(r.parentGuid);
      t = {
        isAncestorHidden: n.isAncestorHidden || !r.visible,
        isAncestorLocked: n.isAncestorLocked || r.locked,
        isAncestorSelected: n.isAncestorSelected || K3(this.sceneGraphSelection, e),
        isAncestorFixed: n.isAncestorFixed || "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" === r.scrollBehavior,
        childrenDisplayOrder: r.childrenDisplayOrder
      };
    } else t = {
      isAncestorHidden: !1,
      isAncestorLocked: !1,
      isAncestorSelected: !1,
      isAncestorFixed: !1,
      childrenDisplayOrder: k.DESIGN
    };
    this.ancestorInfos[e] = t;
    return t;
  }
  getMaskInfo(e) {
    let t = this.maskInfos[e];
    if (t) return t;
    let r = this.getNode(e);
    if (debug(null != r, "getMaskInfo called on invalid node"), "CANVAS" === r.type) this.maskInfos[e] = {
      level: 0,
      isMaskedAtLevels: "",
      isLastMaskedAtLevels: ""
    };else {
      let e = r.parentGuid;
      let t = e && this.getNode(e);
      let n = t ? this.getMaskInfo(e) : void 0;
      if (t && n) {
        let e = n.level;
        let r = n.isMaskedAtLevels;
        let i = t.fixedChildrenCount;
        let a = t.reversedChildrenGuids;
        let s = !1;
        let l = !1;
        for (let t = 0; t < a.length; t++) {
          let n = a[a.length - t - 1];
          let d = this.getNode(n);
          if (!d) continue;
          let c = d.mask;
          let u = s && (c || isSpecialNodeType(d.type) && !d.resizeToFit && !d.frameMaskDisabled || a.length - t === i);
          u && (s = !1);
          c && (s = d.visible);
          u && !l && (this.maskInfos[a[a.length - t]].isLastMaskedAtLevels += `[${e}]`);
          this.maskInfos[n] = {
            level: e + 1,
            isMaskedAtLevels: r + (s && !c ? `[${e}]` : ""),
            isLastMaskedAtLevels: ""
          };
          l = c;
        }
        s && !l && (this.maskInfos[a[0]].isLastMaskedAtLevels += `[${e}]`);
      }
    }
    return this.maskInfos[e];
  }
}
export function $$E1(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if ("object" === r.rowType) return r;
  }
  return null;
}
export function $$y4(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if ("object" === r.rowType) return r;
  }
  return null;
}
function b(e, t, r, n, i) {
  let {
    indentLevel,
    opts,
    pathFromRoot
  } = r;
  let l = {
    nodeGuid: t[n],
    indentLevel: indentLevel + 1,
    rowHeight: i,
    opts: {
      isDescendantOfSymbol: "SYMBOL" === e.type || opts.isDescendantOfSymbol,
      isDescendantOfInstanceExcludingSlotSublayers: ("INSTANCE" === e.type || opts.isDescendantOfInstanceExcludingSlotSublayers) && !e.isSlotReactive,
      isDescendantOfModule: "MODULE" === e.type || opts.isDescendantOfModule
    }
  };
  isRecordingEnabled() && (l.pathFromRoot = [...pathFromRoot, n]);
  return l;
}
function T(e, t, r, n, i, a) {
  let s = `${t}.${e.numSections}`;
  let o = {
    rowType: "section",
    top: e.top,
    level: r,
    height: _$$n,
    sectionType: t,
    sectionId: s,
    isDescendantOfSymbol: n,
    isDescendantOfInstanceExcludingSlotSublayers: i,
    isDescendantOfModule: a
  };
  e.allRowData.push(o);
  e.top += _$$n;
  e.numSections++;
  return o;
}
export function $$I0(e, t) {
  return !!isSpecialType(t.type) || "CMS_RICH_TEXT" === t.type || !!getFeatureFlags().bake_canvas && !!t.isMakeResponsiveSet;
}
export function $$S2(e) {
  let {
    sceneGraph,
    rootNodeGuids,
    showImmutableFrameSublayers,
    temporarilyExpandedInstanceLayers,
    topLevelObjectRowHeight,
    nestedObjectRowHeight,
    focusedNodes
  } = e;
  let m = {
    allRowData: [],
    numSections: 0,
    top: 0,
    topByGuid: Object.create(null),
    leftByGuid: Object.create(null),
    heightByGuid: Object.create(null),
    objectRowByGuid: Object.create(null),
    sectionById: Object.create(null),
    maskGuids: [],
    sceneGraph,
    showImmutableFrameSublayers,
    temporarilyExpandedInstanceLayers,
    nestedObjectRowHeight,
    topLevelObjectRowHeight
  };
  if (!function (e, t) {
    if (!t) return;
    let r = {
      isAncestorHidden: !1,
      isAncestorLocked: !1,
      isDescendantOfSymbol: !1,
      isDescendantOfInstanceExcludingSlotSublayers: !1,
      isDescendantOfModule: !1
    };
    if (t && t.length) for (let n = 0; n < t.length; n++) {
      let a = e.topLevelObjectRowHeight;
      let o = {
        nodeGuid: t[n],
        indentLevel: 0,
        rowHeight: a,
        opts: r
      };
      isRecordingEnabled() && (o.pathFromRoot = [n]);
      (function e(t, r) {
        let n;
        let {
          nodeGuid,
          indentLevel,
          rowHeight,
          opts,
          pathFromRoot
        } = r;
        let m = t.sceneGraph.get(nodeGuid);
        if (!m || "SECTION_OVERLAY" === m.type && !t.showImmutableFrameSublayers || m.isCodeComponent || m.isCodeFile || m.isCodeLibrary || SceneGraphHelpers && SceneGraphHelpers.isGhostNodeSubtree(m.guid) && getFeatureFlags().ce_al_perf_reparent_to_tlf) return;
        m.mask && t.maskGuids.push(m.guid);
        let f = null;
        if (t.allRowData.length > 0) {
          let e = $$y4(t.allRowData);
          e.nextNodeGuid = m.guid;
          f = e.guid;
        }
        let E = "WIDGET" === m.type && (m.widgetVersionId || m.widgetId && isValidWidgetType(m.widgetId));
        let S = $$I0(t.sceneGraph, m) && !t.showImmutableFrameSublayers || E;
        if ("SECTION" === m.type && 1 === m.uiOrderedChildren.length) {
          let e = t.sceneGraph.get(nodeGuid);
          n = !(e && "SECTION_OVERLAY" === e.type);
        } else n = m.uiOrderedChildren.length > 0 && !S;
        let v = {
          rowType: "object",
          guid: m.guid,
          isExpanded: m.isExpanded,
          isTemporarilyExpanded: m.isTemporarilyExpanded,
          hasChildren: n,
          top: t.top,
          level: indentLevel,
          height: rowHeight,
          prevNodeGuid: f,
          nextNodeGuid: null,
          isDescendantOfSymbol: opts.isDescendantOfSymbol,
          isDescendantOfInstanceExcludingSlotSublayers: opts.isDescendantOfInstanceExcludingSlotSublayers,
          isDescendantOfModule: opts.isDescendantOfModule
        };
        pathFromRoot && (v.recordingKey = `objectsPanel.row.${pathFromRoot.join(".")}`);
        t.allRowData.push(v);
        t.objectRowByGuid[m.guid] = v;
        t.topByGuid[nodeGuid] = t.top;
        t.heightByGuid[nodeGuid] = rowHeight;
        t.top += rowHeight;
        t.leftByGuid[nodeGuid] = parsePxNumber(indentWidth) + (indentLevel - 1) * parsePxNumber(indentWidthWithMargin);
        let A = m.isExpanded || m.isTemporarilyExpanded;
        A && m.uiOrderedChildren.length > 0 && (S || (m.fixedChildrenCount > 0 ? function (t, r, n) {
          let a = r.uiOrderedChildren;
          let o = t.nestedObjectRowHeight;
          let l = a.map(e => t.sceneGraph.get(e)).filter(isNotNullish).map((e, t) => ({
            node: e,
            index: t,
            scrollBehavior: e.scrollBehavior
          }));
          let d = t.top;
          let c = "SYMBOL" === r.type || n.opts.isDescendantOfSymbol;
          let u = ("INSTANCE" === r.type || n.opts.isDescendantOfInstanceExcludingSlotSublayers) && !r.isSlotReactive;
          let p = "MODULE" === r.type || n.opts.isDescendantOfModule;
          let _ = T(t, ScrollBehavior.FIXED, n.indentLevel + 1, c, u, p);
          l.filter(({
            scrollBehavior: e
          }) => "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" === e).forEach(({
            index: i
          }) => {
            e(t, b(r, l.map(e => e.node.guid), n, i, o));
          });
          let h = t.top;
          let m = T(t, ScrollBehavior.SCROLLS, n.indentLevel + 1, c, u, p);
          l.filter(({
            scrollBehavior: e
          }) => "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" !== e).forEach(({
            index: i
          }) => {
            e(t, b(r, l.map(e => e.node.guid), n, i, o));
          });
          let g = t.top;
          t.sectionById[_.sectionId] = {
            parentGuid: r.guid,
            top: d,
            height: h - d,
            type: _.sectionType
          };
          t.sectionById[m.sectionId] = {
            parentGuid: r.guid,
            top: h,
            height: g - h,
            type: m.sectionType
          };
        }(t, m, r) : function (t, r, n) {
          let i = r.uiOrderedChildren;
          let a = t.nestedObjectRowHeight;
          for (let s = 0; s < i.length; s++) e(t, b(r, i, n, s, a));
        }(t, m, r)));
        A && vo(m, t.sceneGraph) && !t.temporarilyExpandedInstanceLayers.includes(m.guid) && function (e, t, r) {
          let n = e.nestedObjectRowHeight;
          let i = {
            rowType: "layer-expansion",
            containingPrimaryInstanceGUID: t,
            top: e.top,
            level: r + 1,
            height: n
          };
          e.allRowData.push(i);
          e.top += n;
        }(t, m.guid, indentLevel);
      })(e, o);
    }
  }(m, focusedNodes?.size ? rootNodeGuids.filter(e => focusedNodes.has(e)) : rootNodeGuids), m.allRowData.length > 1) {
    let e = $$E1(m.allRowData);
    let t = $$y4(m.allRowData);
    e.prevNodeGuid = t.guid;
    t.nextNodeGuid = e.guid;
  }
  return {
    rowData: m.allRowData,
    topByGuid: m.topByGuid,
    leftByGuid: m.leftByGuid,
    heightByGuid: m.heightByGuid,
    sectionById: m.sectionById,
    totalHeight: m.top
  };
}
export const GY = $$I0;
export const OZ = $$E1;
export const Sk = $$S2;
export const nV = $$f3;
export const w6 = $$y4;