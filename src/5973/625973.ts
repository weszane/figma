import { createErrorAccumulator } from '../905/18160';
import { B as _$$B } from '../905/94678';
import { toMatrix2x3, toArray2x3 } from '../905/117560';
import { sha1BytesFromHex, bytesToHex, sha1Hex, sha1HexFromString } from '../905/125019';
import { c as _$$c } from '../905/154079';
import { permissionScopeHandler, zk } from '../905/189185';
import { _6, dL, fg, M1, uw, y4, zA } from '../905/321541';
import { bG, rw } from '../905/333600';
import { Aw, LV, Mn, Ug } from '../905/340677';
import { deepEqual } from '../905/382883';
import { DI, JQ } from '../905/389786';
import { getGradientTransformMatrix, getLinearGradientPoints, getRadialGradientPoints } from '../905/409381';
import { $2, loadNonPluginFont, waitForAllFontsLoaded, getClosestFontName } from '../905/426868';
import { SceneNode } from '../905/499575';
import { Cv, fx, pu, sJ, u0, x_, y$ } from '../905/532366';
import { yX } from '../905/642476';
import { id as _$$id, Bj, fW } from '../905/648693';
import { iN as _$$iN, Hn, Kx, VS } from '../905/696699';
import { getSingletonSceneGraph } from '../905/700578';
import { nl as _$$nl, hA, U3 } from '../905/722575';
import { k as _$$k } from '../905/749197';
import { f as _$$f } from '../905/797463';
import { S as _$$S, V as _$$V, parseJSX } from '../905/802325';
import { defaultSessionLocalIDString, sessionLocalIDToString, parseSessionLocalID } from '../905/871411';
import { nodeProperties, getResolvedTypeName, textStyleProperties } from '../905/929949';
import { parseFontStyle, getFontStyleName } from '../905/946258';
import { n as _$$n } from '../905/992140';
import { tV as _$$tV, ao, D1, KQ, sU, UD, Y_ } from '../905/998509';
import { O as _$$O, S as _$$S2 } from '../3383/83383';
import { h as _$$h, iz as _$$iz, rt as _$$rt, c1, jd, KY, qK, s$, v6 } from '../figma_app/17669';
import { MaterializeInvisibleChildrenBindings } from '../figma_app/175377';
import { Hc, kX, mu } from '../figma_app/197743';
import { StyleIdHandler, VariableIdHandler } from '../figma_app/243058';
import { Ji, MT } from '../figma_app/387100';
import { throwTypeError } from '../figma_app/465776';
import { CUSTOM_IMAGE_TYPE_STR, getComponentInfoById, getInstanceIdsForDef, getInstanceNodeProps, getTypeInfoCached, toCamelCase, toTitleCase, usagePropsToRawProps } from '../figma_app/664063';
import { TrackType, Confirmation, LayoutSizingMode, AssistantTools, VariableResolvedDataType, LayoutSizingType, TextOverflowType, SourceType } from '../figma_app/763686';
import { QW, si } from '../figma_app/941074';
import { z as _$$z } from '../vendor/835909';
let n;
function l(e, t, i) {
  return e && t ? function (e, t) {
    let i = MaterializeInvisibleChildrenBindings?.openScope(e.id, e.sceneGraph.scene);
    try {
      return t();
    } finally {
      i != null && MaterializeInvisibleChildrenBindings?.closeScope(i);
    }
  }(t, i) : i();
}
function d(e) {
  return e?.isStateGroup ? e : e?.type === 'SYMBOL' ? e.parentNode?.isStateGroup ? e.parentNode : e : null;
}
let c = 'Component';
let f = 'ComponentDefinitionRef';
let h = 'ComponenentSetDefinitionRef';
function m(e) {
  return e.startsWith(c) && e !== f;
}
function g(e) {
  let t = d(e);
  if (t) {
    return function (e) {
      let t = toTitleCase(e, c);
      return f === t ? 'ComponentDefinitionRef2' : t;
    }(t.name);
  }
  throw new Error('Node is not a Component or ComponentSet');
}
function y(e, t) {
  let i = t.getCurrentPage();
  let n = t.getInternalCanvas();
  if (i && n) {
    for (let r of _$$B([i, n], {
      followInstances: !0
    })) {
      if (g(r).toLowerCase() === e.toLowerCase()) return b(r.guid, t);
    }
  }
  return null;
}
function b(e, t) {
  let i = t.get(e);
  if (i) {
    if (i.isLooseComponent) return i;
    if (i.isStateGroup) return i.defaultVariant ? i.defaultVariant : null;
  }
  return null;
}
function S({
  name: e,
  usedNames: t
}) {
  if (!t.has(e)) return e;
  let i = e.match(/^(.*?)(\d*)$/);
  let n = i ? i[1] ?? '' : e;
  let r = 1;
  t.forEach(e => {
    if (e.startsWith(n)) {
      let t = parseInt(e.slice(n.length), 10);
      !isNaN(t) && t > r && (r = t);
    }
  });
  return `${n}${r + 1}`;
}
function A(e) {
  return e.nodeType === 'FRAME' || e.nodeType === 'SYMBOL';
}
export function $$C37({
  nodeShim: e,
  declarativeNode: t,
  oldDeclarativeNode: i,
  offset: n
}) {
  t && !e.isGroup && e.type !== 'BOOLEAN_OPERATION' && ['x', 'y'].forEach(r => {
    let o = t.layoutMetadata?.[r];
    typeof o == 'number' && void 0 !== n && (o += n[r]);
    let a = i ? i?.layoutMetadata?.[r] : void 0;
    typeof o == 'number' && o !== a && e.writeProperty(r, o);
  });
}
export function $$w36({
  nodeShim: e,
  declarativeNode: t,
  oldDeclarativeNode: i,
  newParentDirection: n,
  oldParentDirection: r
}) {
  t && (i || (i = null), (t.layoutMetadata?.width !== i?.layoutMetadata?.width || t.layoutMetadata?.height !== i?.layoutMetadata?.height || t.layoutMetadata?.fallbackWidthIfHug !== i?.layoutMetadata?.fallbackWidthIfHug || t.layoutMetadata?.fallbackHeightIfHug !== i?.layoutMetadata?.fallbackHeightIfHug || n !== r || t.layoutMetadata?.direction !== i?.layoutMetadata?.direction) && function (e, t, i) {
    if (!e) return;
    let n = e.layoutMetadata?.width;
    let r = e.layoutMetadata?.height;
    let o = t.isGroup || t.type === 'BOOLEAN_OPERATION';
    if (e.nodeType === 'TEXT' && (n === 'hug-contents' && r === 'hug-contents' ? t.writeProperty('textAutoResize', 'WIDTH_AND_HEIGHT') : n !== 'hug-contents' && r === 'hug-contents' ? t.writeProperty('textAutoResize', 'HEIGHT') : t.writeProperty('textAutoResize', 'NONE')), !o && (typeof n == 'number' || typeof r == 'number')) {
      A(e) && (typeof n == 'number' && (e.layoutMetadata?.direction === 'horizontal' && t.writeProperty('stackPrimarySizing', 'FIXED'), e.layoutMetadata?.direction === 'vertical' && t.writeProperty('stackCounterSizing', 'FIXED'), e.props.stackMode === 'GRID' && t.writeProperty('stackPrimarySizing', 'FIXED')), typeof r == 'number' && (e.layoutMetadata?.direction === 'horizontal' && t.writeProperty('stackCounterSizing', 'FIXED'), e.layoutMetadata?.direction === 'vertical' && t.writeProperty('stackPrimarySizing', 'FIXED'), e.props.stackMode === 'GRID' && t.writeProperty('stackCounterSizing', 'FIXED')));
      let i = e.nodeType === 'LINE' ? 0 : 0.01;
      let o = typeof n == 'number' ? n : t.getSize().width || 0.01;
      let a = typeof r == 'number' ? r : t.getSize().height || i;
      t.resize(o, a);
    }
    try {
      n === 'fill-parent' ? t.writeProperty('stackHorizontalLayoutSize', LayoutSizingMode.FILL_CONTAINER) : n === 'hug-contents' && A(e) && t.writeProperty('stackHorizontalLayoutSize', LayoutSizingMode.HUG_CONTENT);
    } catch {
      n === 'fill-parent' ? i === 'HORIZONTAL' ? t.writeProperty('stackChildPrimaryGrow', 1) : i === 'VERTICAL' && (t.writeProperty('stackChildAlignSelf', 'STRETCH'), A(e) && t.writeProperty('stackPrimarySizing', 'FIXED')) : n === 'hug-contents' && A(e) && (e.props.stackMode === 'HORIZONTAL' ? t.writeProperty('stackPrimarySizing', 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE') : e.props.stackMode === 'VERTICAL' && t.writeProperty('stackCounterSizing', 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'));
    }
    try {
      r === 'fill-parent' ? t.writeProperty('stackVerticalLayoutSize', LayoutSizingMode.FILL_CONTAINER) : r === 'hug-contents' && A(e) && t.writeProperty('stackVerticalLayoutSize', LayoutSizingMode.HUG_CONTENT);
    } catch {
      r === 'fill-parent' ? i === 'VERTICAL' ? t.writeProperty('stackChildPrimaryGrow', 1) : i === 'HORIZONTAL' && (t.writeProperty('stackChildAlignSelf', 'STRETCH'), A(e) && t.writeProperty('stackPrimarySizing', 'FIXED')) : r === 'hug-contents' && A(e) && (e.props.stackMode === 'HORIZONTAL' ? t.writeProperty('stackCounterSizing', 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE') : e.props.stackMode === 'VERTICAL' && t.writeProperty('stackPrimarySizing', 'RESIZE_TO_FIT_WITH_IMPLICIT_SIZE'));
    }
  }(t, e, n));
}
export function $$R33({
  nodeShim: e,
  declarativeNode: t,
  oldDeclarativeNode: i
}) {
  let n;
  let r;
  if (t && !(e.numAutoPositionedChildren > 0) && (i || (i = null), t.layoutMetadata?.width === 'hug-contents' && typeof t.layoutMetadata?.fallbackWidthIfHug == 'number' && t.layoutMetadata?.fallbackWidthIfHug !== i?.layoutMetadata?.fallbackWidthIfHug && (n = t.layoutMetadata.fallbackWidthIfHug), t.layoutMetadata?.height === 'hug-contents' && typeof t.layoutMetadata?.fallbackHeightIfHug == 'number' && t.layoutMetadata?.fallbackHeightIfHug !== i?.layoutMetadata?.fallbackHeightIfHug && (r = t.layoutMetadata?.fallbackHeightIfHug), n || r)) {
    let t = e.getSize();
    e.resize(n ?? t.width, r ?? t.height);
    n && e.writeProperty('stackHorizontalLayoutSize', LayoutSizingMode.HUG_CONTENT);
    r && e.writeProperty('stackVerticalLayoutSize', LayoutSizingMode.HUG_CONTENT);
  }
}
export function $$P32({
  nodeShim: e,
  declarativeNode: t,
  oldDeclarativeNode: i
}) {
  if (!t || e.isGroup || e.type === 'BOOLEAN_OPERATION') return;
  i || (i = null);
  let {
    height,
    width,
    x,
    xConstraint,
    y,
    yConstraint
  } = t.layoutMetadata;
  let d = !e.parent?.isLayoutContainer || t.props.stackPositioning === 'ABSOLUTE';
  d && width === 'fill-parent' && xConstraint?.type !== 'scale' && xConstraint?.type !== 'left-right' && (o = (x || 0) + (xConstraint?.offset || 0), xConstraint?.type === 'right' && (o = -x), a = {
    type: 'left-right',
    leftOffset: x,
    rightOffset: -x
  });
  d && height === 'fill-parent' && yConstraint?.type !== 'scale' && yConstraint?.type !== 'top-bottom' && (l = (y || 0) + (yConstraint?.offset || 0), yConstraint?.type === 'bottom' && (l = -y), s = {
    type: 'top-bottom',
    topOffset: y,
    bottomOffset: -y
  });
  deepEqual(xConstraint, i?.layoutMetadata?.xConstraint) && deepEqual(yConstraint, i?.layoutMetadata?.yConstraint) || function ({
    xConstraint: e,
    yConstraint: t,
    x: i,
    y: n,
    node: r
  }) {
    let o;
    let a;
    let l;
    let s;
    let d = 'MIN';
    let u = 'MIN';
    let p = () => (o || (o = r.getSize()), o);
    let c = () => (a || (a = r.getParentSizeForConstraints()), a);
    let {
      forceWidth,
      forceHeight
    } = function (e, t, i) {
      let n;
      let r;
      if (e) {
        switch (e.type) {
          case 'left-right':
            typeof e.leftOffset == 'number' && typeof e.rightOffset == 'number' && (n = i().width - e.leftOffset - e.rightOffset);
            break;
          case 'scale':
            if (typeof e.leftOffsetPercent == 'number' && typeof e.rightOffsetPercent == 'number') {
              let t = e.leftOffsetPercent + e.rightOffsetPercent;
              n = i().width * ((100 - t) / 100);
            }
        }
      }
      if (t) {
        switch (t.type) {
          case 'top-bottom':
            typeof t.topOffset == 'number' && typeof t.bottomOffset == 'number' && (r = i().height - t.topOffset - t.bottomOffset);
            break;
          case 'scale':
            if (typeof t.topOffsetPercent == 'number' && typeof t.bottomOffsetPercent == 'number') {
              let e = t.topOffsetPercent + t.bottomOffsetPercent;
              r = i().height * ((100 - e) / 100);
            }
        }
      }
      return {
        forceWidth: n,
        forceHeight: r
      };
    }(e, t, c);
    if ((void 0 !== forceWidth || void 0 !== forceHeight) && (r.resize(forceWidth ?? p().width, forceHeight ?? p().height), o = r.getSize()), e) {
      switch (e.type) {
        case 'left':
          typeof e.offset == 'number' && (l = e.offset);
          break;
        case 'right':
          typeof e.offset == 'number' && (d = 'MAX', l = c().width - e.offset - p().width);
          break;
        case 'center':
          typeof e.offset == 'number' && (d = 'CENTER', l = c().width / 2 - p().width / 2 + e.offset);
          break;
        case 'left-right':
          typeof e.leftOffset == 'number' && typeof e.rightOffset == 'number' && (d = 'STRETCH', l = e.leftOffset);
          break;
        case 'scale':
          typeof e.leftOffsetPercent == 'number' && typeof e.rightOffsetPercent == 'number' && (d = 'SCALE', l = c().width * e.leftOffsetPercent / 100);
      }
    } else {
      void 0 !== i && (l = i);
    }
    if (t) {
      switch (t.type) {
        case 'top':
          typeof t.offset == 'number' && (s = t.offset);
          break;
        case 'bottom':
          typeof t.offset == 'number' && (u = 'MAX', s = c().height - t.offset - p().height);
          break;
        case 'center':
          typeof t.offset == 'number' && (u = 'CENTER', s = c().height / 2 - p().height / 2 + t.offset);
          break;
        case 'top-bottom':
          typeof t.topOffset == 'number' && typeof t.bottomOffset == 'number' && (u = 'STRETCH', s = t.topOffset);
          break;
        case 'scale':
          typeof t.topOffsetPercent == 'number' && typeof t.bottomOffsetPercent == 'number' && (u = 'SCALE', s = c().height * t.topOffsetPercent / 100);
      }
    } else {
      void 0 !== n && (s = n);
    }
    void 0 !== l && r.writeProperty('x', l);
    void 0 !== s && r.writeProperty('y', s);
    r.writeProperty('verticalConstraint', u);
    r.writeProperty('horizontalConstraint', d);
  }({
    xConstraint,
    yConstraint,
    x,
    y,
    node: e
  });
}
async function k(e, t) {
  for (let [i, n] of Object.entries(e)) {
    await t({
      key: i,
      value: n
    });
  }
}
function j(e, t) {
  return `family=${e.family}, style=${e.style}, weight=${t}`;
}
function L(e) {
  return e?.family !== void 0 && e?.style !== void 0;
}
async function D({
  declarativeNode: e
}) {
  let t = function (e) {
    let t = [];
    let i = [e];
    let n = new Set();
    for (; i.length > 0;) {
      let e = i.pop();
      if (!e) continue;
      let r = L(e.textMetadata?.style?.fontName) ? e.textMetadata?.style?.fontName : void 0;
      if (r && e.textMetadata?.style?.fontWeight) {
        let i = j(r, e.textMetadata.style.fontWeight);
        n.has(i) || (n.add(i), t.push({
          fontName: r,
          weight: e.textMetadata.style.fontWeight
        }));
      }
      if (e.textMetadata?.ranges) {
        for (let i of e.textMetadata.ranges) {
          let e = L(i.style.fontName) ? i.style.fontName : void 0;
          if (e && i.style.fontWeight) {
            let r = j(e, i.style.fontWeight);
            n.has(r) || (n.add(r), t.push({
              fontName: e,
              weight: i.style.fontWeight
            }));
          }
        }
      }
      e.childrenMetadata?.children && i.push(...e.childrenMetadata.children);
    }
    return t;
  }(e);
  let i = {
    loadedFonts: {},
    fontFallbacks: {}
  };
  await Promise.all(t.map(async e => {
    let {
      fontName,
      weight
    } = e;
    try {
      await loadNonPluginFont(fontName);
      i.loadedFonts[fontName.family] = i.loadedFonts[fontName.family] || {};
      i.loadedFonts[fontName.family][fontName.style] = !0;
      return;
    } catch {}
    let r = getClosestFontName(fontName.family, weight, fontName.style.includes('Italic'));
    i.fontFallbacks[fontName.family] = i.fontFallbacks[fontName.family] || {};
    try {
      let e = r ?? {
        style: fontName.style,
        family: 'Inter'
      };
      await loadNonPluginFont(e);
      i.fontFallbacks[fontName.family][fontName.style] = e;
      return;
    } catch {}
    i.fontFallbacks[fontName.family][fontName.style] = null;
  }));
  return i;
}
async function V() {
  $2();
}
async function M({
  textMetadata: e,
  oldTextMetadata: t,
  nodeShim: i
}) {
  if (!(!e || deepEqual(t, e)) && (i = i.getTextSublayerOrSelf(), e.style && (await k(e.style, async ({
    key: e,
    value: n
  }) => {
    let r = t?.style?.[e];
    if (!deepEqual(r, n)) {
      switch (e) {
        case 'fills':
        case 'fillStyleId':
        case 'fontWeight':
          break;
        case 'fontName':
          n && L(n) && i.writeProperty('fontName', n);
          break;
        case 'fontSize':
          n && i.writeProperty('fontSize', n);
          break;
        case 'textCase':
          n && i.writeProperty('textCase', n);
          break;
        case 'textDecoration':
          n && i.writeProperty('textDecoration', n);
          break;
        case 'letterSpacing':
          n && i.writeProperty('letterSpacing', n);
          break;
        case 'lineHeight':
          n && i.writeProperty('lineHeight', n);
          break;
        case 'maxLines':
          void 0 !== n && i.writeProperty('maxLines', n);
          break;
        case 'textTruncation':
          n && i.writeProperty('textTruncation', n);
          break;
        case 'hyperlink':
          (n || n === null) && i.writeProperty('hyperlink', n);
          break;
        case 'listOptions':
          n && i.writeCustomProperty({
            key: 'lineType',
            value: n
          });
          break;
        case 'boundVariables':
          n && i.writeProperty('boundVariables', n);
          break;
        case 'textStyleId':
          n && i.writeProperty('inheritedTextStyle', n);
          break;
        default:
          throwTypeError(e);
      }
    }
  })), typeof e.characters == 'string' && e.characters !== t?.characters && i.writeCustomProperty({
    key: 'characters',
    value: e.characters
  }), e.ranges)) {
    for (let n = 0; n < e.ranges.length; n++) {
      let r = e.ranges[n];
      let o = t?.ranges?.[n];
      !deepEqual(o, r) && r && (await i.writeTextRange(r));
    }
  }
}
function F(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class X {
  getIndices(e) {
    let t = [];
    let i = {
      x: this.bounds.x + this.bounds.width / 2,
      y: this.bounds.y + this.bounds.height / 2
    };
    let n = e.y < i.y;
    let r = e.x < i.x;
    let o = e.x + e.width > i.x;
    let a = e.y + e.height > i.y;
    n && o && t.push(0);
    r && n && t.push(1);
    r && a && t.push(2);
    o && a && t.push(3);
    return t;
  }
  split() {
    let e = this.bounds.width / 2;
    let t = this.bounds.height / 2;
    let i = this.bounds.x;
    let n = this.bounds.y;
    for (let r of [{
      x: i + e,
      y: n
    }, {
      x: i,
      y: n
    }, {
      x: i,
      y: n + t
    }, {
      x: i + e,
      y: n + t
    }]) {
      let i = new X({
        bounds: {
          x: r.x,
          y: r.y,
          width: e,
          height: t
        },
        maxObjects: this.maxObjects,
        maxLevels: this.maxLevels,
        level: this.level + 1
      });
      this.nodes.push(i);
    }
  }
  insert(e) {
    if (this.nodes.length) {
      for (let t of this.getIndices(e)) {
        let i = this.nodes[t];
        i && i.insert(e);
      }
      return;
    }
    if (this.rects.push(e), this.rects.length > this.maxObjects && this.level < this.maxLevels) {
      for (let e of (this.nodes.length || this.split(), this.rects)) {
        for (let t of this.getIndices(e)) {
          let i = this.nodes[t];
          i && i.insert(e);
        }
      }
      this.rects = [];
    }
  }
  retrieve(e) {
    let t = this.getIndices(e);
    let i = this.rects;
    if (this.nodes.length) {
      for (let n of t) {
        let t = this.nodes[n];
        t && (i = i.concat(t.retrieve(e)));
      }
    }
    return i;
  }
  clear() {
    for (let e of (this.rects = [], this.nodes)) e.clear();
    this.nodes = [];
  }
  toDebugString() {
    let e = '  '.repeat(this.level);
    let t = this.nodes.map(e => e.toDebugString()).join('\n');
    let i = this.rects.map(e => B(e)).join(', ');
    return `${e}QuadTree: [bounds: ${B(this.bounds)}]
  ${e}rects: ${i}
  ${e}nodes:

${t}`;
  }
  constructor(e) {
    F(this, 'bounds', void 0);
    F(this, 'nodes', []);
    F(this, 'rects', []);
    F(this, 'maxObjects', void 0);
    F(this, 'maxLevels', void 0);
    F(this, 'level', void 0);
    this.bounds = e.bounds;
    this.maxObjects = e.maxObjects ?? 10;
    this.maxLevels = e.maxLevels ?? 4;
    this.level = e.level ?? 0;
  }
}
function B(e) {
  return `Rect(x: ${e.x}, y: ${e.y}, w: ${e.width}, h: ${e.height})`;
}
function J(e) {
  return e.reduce((e, t) => {
    let i = t.absoluteBoundingBox;
    return i ? yX(e, {
      x: i.x,
      y: i.y,
      width: i.w,
      height: i.h
    }) : e;
  }, {
    x: 1 / 0,
    y: 1 / 0,
    width: -1 / 0,
    height: -1 / 0
  });
}
function H(e) {
  return 'childrenNodes' in e ? e.childrenDisplayOrder === _$$k.DOM || !e.absoluteRenderBounds || e.type === 'BOOLEAN_OPERATION' || e.isStateGroup ? e.childrenNodes : function (e) {
    let t = e.absoluteRenderBounds;
    if (!t) return [];
    let i = e.childrenNodes;
    if (i.length > 500) return [i];
    let n = {};
    for (let [e, t] of i.entries()) {
      if (n[t.guid] = e, t.mask) return [i];
    }
    let r = Object.fromEntries(i.map(e => [e.guid, []]));
    let o = new X({
      bounds: {
        x: t.x,
        y: t.y,
        width: t.w,
        height: t.h
      },
      maxObjects: 10,
      maxLevels: 4
    });
    for (let e of i) {
      let t = e.absoluteRenderBounds;
      t && o.insert({
        x: t.x,
        y: t.y,
        width: t.w,
        height: t.h,
        guid: e.guid
      });
    }
    for (let e of i) {
      let t = e.absoluteRenderBounds ?? (e.mask ? e.absoluteBoundingBox : void 0);
      if (t) {
        let i = {
          x: t.x,
          y: t.y,
          width: t.w,
          height: t.h
        };
        let n = o.retrieve(i);
        r[e.guid] = n.filter(e => function (e, t) {
          let i = e.x < t.x + t.width && e.x + e.width > t.x;
          let n = e.y < t.y + t.height && e.y + e.height > t.y;
          return i && n;
        }(i, e)).map(e => e.guid);
      }
    }
    let a = {};
    let l = [];
    for (let e of i) {
      if (!a[e.guid]) {
        let t = new Set();
        let i = [e.guid];
        for (; i.length > 0;) {
          let e = i.pop();
          if (!a[e]) {
            for (let n of (a[e] = !0, t.add(e), r[e])) a[n] || i.push(n);
          }
        }
        l.push(t);
      }
    }
    return l.map(e => {
      let t = [];
      for (let i of e) {
        t.push({
          guid: i,
          idx: n[i]
        });
      }
      return t.sort((e, t) => e.idx - t.idx).map(({
        idx: e
      }) => i[e]);
    });
  }(e).sort((e, t) => {
    let i = J(e);
    let n = J(t);
    return Math.abs(i.y - n.y) > 0.1 ? i.y - n.y : Math.abs(i.x - n.x) > 0.1 ? i.x - n.x : 0;
  }).flat() : [];
}
function $(e) {
  return 'childrenNodes' in e ? e.childrenDisplayOrder === _$$k.DOM ? e.childrenNodes : e.reversedChildrenNodes : [];
}
function W(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$K15 {
  writeComponentProps(e) {
    if (this.type !== 'INSTANCE') return;
    e.componentId && this.writeCustomProperty({
      key: 'componentId',
      value: e.componentId
    });
    e.sharedPluginData && this.writeCustomProperty({
      key: 'sharedPluginData',
      value: e.sharedPluginData
    });
    e.componentProps && this.writeCustomProperty({
      key: 'componentProperties',
      value: e.componentProps
    });
    let t = this.getTSSceneNodeOrThrow();
    let i = !1;
    if (e.nestedInstancesVisibility) {
      for (let [n, r] of Object.entries(e.nestedInstancesVisibility)) {
        let e = t.getMatchingInstanceSublayer(n);
        if (!e) continue;
        let o = e.visible;
        this.runtime.editScope('figma-jsx-writeComponentProps', () => {
          e.visible = r;
        });
        i = i || !o && r;
      }
    }
    if (i && t.materializeDescendants(), e.componentPropsNested) {
      for (let [i, n] of Object.entries(e.componentPropsNested)) {
        let e = t.getMatchingInstanceSublayer(i);
        e && e.isVisibleInInstance && new $$K15({
          guid: e.guid,
          runtime: this.runtime
        }).writeComponentProps(n);
      }
    }
  }
  writeProperty(e, t) {
    this.runtime.safeWriteProperty(() => this.runtime.editScope('figma-jsx-writeProperty', () => {
      let i = this.getTSSceneNodeOrThrow();
      switch (e) {
        case 'fontName':
          {
            let e = this.runtime.getSafeFontNameOrNull(t);
            e && (i.fontName = e);
            break;
          }
        case 'hyperlink':
          (t || t === null) && i.setRangeHyperlink(0, -1, t);
          break;
        case 'cornerRadius':
          typeof t == 'number' && i.setCornerRadiusAndClobber(t);
          break;
        case 'boundVariables':
          if (typeof t == 'object') {
            for (let [e, n] of Object.entries(t)) nodeProperties.includes(e) && n && typeof n == 'object' && 'type' in n && 'id' in n && n.type === 'VARIABLE_ALIAS' && typeof n.id == 'string' && i.setBoundVariable(e, n.id);
          }
          break;
        case 'gridRowAnchorIndex':
          typeof t == 'number' && i.setGridChildPosition(t, i.gridColumnAnchorIndex);
          break;
        case 'gridColumnAnchorIndex':
          typeof t == 'number' && i.setGridChildPosition(i.gridRowAnchorIndex, t);
          break;
        case 'stackPositioning':
          typeof t == 'string' && this.parent?.isLayoutContainer && (i.stackPositioning = t);
          break;
        default:
          i[e] = t;
      }
    }));
  }
  writeCustomProperty({
    key: e,
    value: t
  }) {
    this.runtime.safeWriteProperty(() => this.runtime.editScope('figma-jsx-writeCustomProperty', () => {
      let i = this.getTSSceneNodeOrThrow();
      switch (e) {
        case 'characters':
          typeof t == 'string' && (i.characters = t, i.update());
          break;
        case 'componentId':
          if (typeof t == 'string') {
            let e = this.runtime.getScene().get(t);
            e && (i.swapComponent(e), i.updateIfIsNestedInstance());
          }
          break;
        case 'componentProperties':
          typeof t == 'object' && i.setProperties(t, !0, Confirmation.YES);
          break;
        case 'sharedPluginData':
          if (typeof t == 'object') {
            for (let [e, n] of Object.entries(t)) {
              if (typeof n != 'string') {
                console.warn(`Attempting to set non-string sharedPluginData: ${e}=${JSON.stringify(n)}`);
                continue;
              }
              i.setSharedPluginData('jsx', e, n);
            }
          }
          break;
        case 'vectorNetwork':
          t && _$$iN(i, t);
          break;
        case 'flipVertical':
          {
            let e = i.relativeTransform;
            i.relativeTransform = {
              ...e,
              m11: (t ? -1 : 1) * e.m11
            };
            break;
          }
        case 'flipHorizontal':
          {
            let e = i.relativeTransform;
            i.relativeTransform = {
              ...e,
              m00: (t ? -1 : 1) * e.m00
            };
            break;
          }
        case 'lineType':
          t && i.setRangeLineType(0, -1, t);
          break;
        case 'overrides':
          t && this.applyOverrides(t);
          break;
        case 'gridRows':
          if (t) {
            for (let [e, n] of (i.stackCounterSizing = 'FIXED', i.stackPrimarySizing = 'FIXED', i.stackMode = 'GRID', i.setGridRowCount(t.length), t.entries())) {
              i.setGridTrackSize('row', e, n.trackSize.maxSizing.value);
              i.setGridTrackType('row', e, n.trackSize.maxSizing.type);
            }
          }
          break;
        case 'gridColumns':
          if (t) {
            for (let [e, n] of (i.stackCounterSizing = 'FIXED', i.stackPrimarySizing = 'FIXED', i.stackMode = 'GRID', i.setGridColumnCount(t.length), t.entries())) {
              i.setGridTrackSize('column', e, n.trackSize.maxSizing.value);
              i.setGridTrackType('column', e, n.trackSize.maxSizing.type);
            }
          }
          break;
        case 'transformMatrix':
          if (t) {
            let {
              m00,
              m01,
              m10,
              m11
            } = t;
            i.relativeTransform = {
              m00,
              m01,
              m02: 0,
              m10,
              m11,
              m12: 0
            };
          }
          break;
        default:
          throwTypeError(e);
      }
    }));
  }
  async writeTextRange(e) {
    let {
      start,
      end,
      style
    } = e;
    let r = this.getTSSceneNodeOrThrow();
    await k(style, async ({
      key: e,
      value: n
    }) => this.runtime.safeWritePropertyAsync(async () => {
      switch (e) {
        case 'textTruncation':
        case 'maxLines':
        case 'fontWeight':
          break;
        case 'fontName':
          {
            if (!n) break;
            n.family = n.family ?? r.fontName?.family;
            n.style = n.style ?? r.fontName?.style;
            let e = L(n) ? n : void 0;
            if (e) {
              let n = await this.runtime.getOrLoadFontName(e);
              n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
                r.setRangeFontName(start, end, n);
              });
            }
            break;
          }
        case 'fontSize':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeFontSize(start, end, n);
          });
          break;
        case 'textCase':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeTextCase(start, end, n);
          });
          break;
        case 'textDecoration':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeTextDecoration(start, end, n);
          });
          break;
        case 'letterSpacing':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeLetterSpacing(start, end, n);
          });
          break;
        case 'lineHeight':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeLineHeight(start, end, n);
          });
          break;
        case 'fills':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeFillPaints(start, end, n);
          });
          break;
        case 'fillStyleId':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeInheritedFillStyle(start, end, n);
          });
          break;
        case 'textStyleId':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeInheritedTextStyle(start, end, n);
          });
          break;
        case 'hyperlink':
          (n || n === null) && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeHyperlink(start, end, n);
          });
          break;
        case 'listOptions':
          n && this.runtime.editScope('figma-jsx-writeTextRange', () => {
            r.setRangeLineType(start, end, n);
          });
          break;
        case 'boundVariables':
          if (n) {
            for (let [e, o] of Object.entries(n)) {
              if (['fontFamily', 'fontWeight'].includes(e)) {
                let n = r.resolveVariable(o.id);
                let a = r.getRangeFontName(start, end);
                let l = r.getRangeFontWeight(start, end);
                if (a !== 'mixed' && l !== 'mixed' && n) {
                  let t = e === 'fontFamily' && n.resolvedType === VariableResolvedDataType.STRING ? n.value : a.family;
                  let i = e === 'fontWeight' && n.resolvedType === VariableResolvedDataType.FLOAT ? n.value : l;
                  let r = getClosestFontName(t, i, a.style.includes('Italic'));
                  r && (await this.runtime.getOrLoadFontName(r));
                }
              }
              this.runtime.editScope('figma-jsx-writeTextRange', () => {
                r.setRangeBoundVariable(start, end, e, o.id);
              });
              ['fontFamily', 'fontWeight'].includes(e) && r.update();
            }
          }
          break;
        default:
          throwTypeError(e);
      }
    }));
    r.update();
  }
  applyOverrides(e) {
    let t = this.getTSSceneNodeOrThrow();
    for (let [i, n] of (t.resetOverrides(), Object.entries(e))) {
      let e = i.split(';');
      let r = t.getSublayerByOverridePath(e);
      let o = r ? this.runtime.getScene().get(r) : null;
      if (!o) continue;
      let a = new $$K15({
        guid: o.guid,
        runtime: this.runtime
      });
      if (n.props) {
        for (let [e, t] of Object.entries(n.props)) a.writeProperty(e, t);
      }
      n.textMetadata && (o.update(), M({
        textMetadata: n.textMetadata,
        oldTextMetadata: null,
        nodeShim: a
      }));
    }
  }
  get type() {
    return this.getTSSceneNodeOrThrow().type;
  }
  get isGroup() {
    return this.getTSSceneNodeOrThrow().isGroup;
  }
  get isStack() {
    return this.getTSSceneNodeOrThrow().isStack;
  }
  get isLayoutContainer() {
    return this.getTSSceneNodeOrThrow().isLayoutContainer;
  }
  get parent() {
    let e = this.getTSSceneNodeOrThrow().parentGuid;
    return e ? new $$K15({
      guid: e,
      runtime: this.runtime
    }) : null;
  }
  get children() {
    return this.getTSSceneNodeOrThrow().childrenGuids.map(e => new $$K15({
      guid: e,
      runtime: this.runtime
    }));
  }
  get childrenLayerOrdered() {
    return $(this.getTSSceneNodeOrThrow()).map(e => new $$K15({
      guid: e.guid,
      runtime: this.runtime
    }));
  }
  get childrenVisuallyOrdered() {
    return H(this.getTSSceneNodeOrThrow()).map(e => new $$K15({
      guid: e.guid,
      runtime: this.runtime
    }));
  }
  get numAutoPositionedChildren() {
    return this.getTSSceneNodeOrThrow().childrenNodes.filter(e => e.stackPositioning === 'AUTO').length;
  }
  get isNodeAlive() {
    let e = this.getTSSceneNode();
    return !!e && e.isAlive;
  }
  getSize() {
    let e = this.getTSSceneNodeOrThrow();
    e.update();
    let t = e.size;
    return {
      width: t.x,
      height: t.y
    };
  }
  getParentSizeForConstraints() {
    let e = this.getTSSceneNodeOrThrow();
    e.update();
    let t = Ji(e);
    if (!t) throw new Error('Containing parent not found');
    let i = t.size;
    return {
      width: i.x,
      height: i.y
    };
  }
  resize(e, t) {
    let i = this.getTSSceneNodeOrThrow();
    this.runtime.editScope('figma-jsx-resize', () => {
      i.update();
      i.resizeWithConstraints(e, t);
    });
  }
  insertChild(e, t) {
    let i = this.getTSSceneNodeOrThrow();
    let n = this.runtime.getScene().get(t);
    let r = i.isGroup;
    this.runtime.editScope('figma-jsx-insertChild', () => {
      try {
        i.resizeToFit = !1;
        i.insertChild(n, e, {
          skipValidation: !0
        });
      } finally {
        r && (i.resizeToFit = !0);
      }
    });
  }
  removeNode() {
    this.runtime.editScope('figma-jsx-removeNode', () => {
      this.runtime.removeNode(this.guid);
    });
  }
  getTextSublayerOrSelf() {
    let e = this.getTSSceneNodeOrThrow();
    return e.textSublayer ? new $$K15({
      guid: e.textSublayer.guid,
      runtime: this.runtime
    }) : this;
  }
  getTSSceneNode() {
    if (!this.sceneNodeCached) {
      let e = this.runtime.getScene().get(this.guid) ?? null;
      e && this.runtime.recorder && (e = this.runtime.recorder.createProxy(e));
      this.sceneNodeCached = e;
    }
    return this.sceneNodeCached;
  }
  getTSSceneNodeOrThrow() {
    let e = this.getTSSceneNode();
    if (!e) throw new Error(`node not found: ${this.guid}`);
    return e;
  }
  constructor({
    guid: e,
    runtime: t
  }) {
    W(this, 'guid', void 0);
    W(this, 'runtime', void 0);
    W(this, 'sceneNodeCached', null);
    this.guid = e;
    this.runtime = t;
  }
}
function q(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export class $$Y13 {
  safeWriteProperty(e) {
    this.errorGuard.guard(e);
  }
  async safeWritePropertyAsync(e) {
    return this.errorGuard.guardAsync(e);
  }
  editScope(e, t) {
    if (this.editScopeIsActive) return t();
    let i = () => {
      try {
        this.editScopeIsActive = !0;
        return t();
      } finally {
        this.editScopeIsActive = !1;
      }
    };
    return this.outerEditScopeLabel ? permissionScopeHandler(this.outerEditScopeType, this.outerEditScopeLabel, () => permissionScopeHandler(SourceType.SYSTEM, e, () => i())) : permissionScopeHandler(SourceType.SYSTEM, e, () => i());
  }
  getSafeFontNameOrNull(e) {
    return this.resourceStatus.loadedFonts[e.family]?.[e.style] ? e : this.resourceStatus.fontFallbacks[e.family]?.[e.style] ?? null;
  }
  trackInstanceIdTouched(e) {
    this.instanceIdsTouched.add(e);
  }
  getInstanceIdsTouched() {
    return Array.from(this.instanceIdsTouched);
  }
  async getOrLoadFontName(e) {
    let t = this.getSafeFontNameOrNull(e);
    if (t) return t;
    try {
      await loadNonPluginFont(e);
      this.resourceStatus.loadedFonts[e.family] = this.resourceStatus.loadedFonts[e.family] || {};
      this.resourceStatus.loadedFonts[e.family][e.style] = !0;
      return e;
    } catch {
      return null;
    }
  }
  createNode(e, t = TrackType.TRACK) {
    if (!e || typeof e != 'object') throw new Error('invalid node passed to createNode');
    let i = e.nodeType;
    return this.createNodeFromType(i, e.requiredProps, t);
  }
  createNodeFromType(e, t, i = TrackType.TRACK) {
    let n = this.recorder;
    let r = e => {
      let t = this.scene.createNode(e, {
        tracking: i
      });
      n && (n.recordCreateNode(t, e), t = n.createProxy(t));
      return t;
    };
    return this.editScope('figma-jsx-createNode', () => {
      let i;
      switch (e) {
        case 'GROUP':
          (i = r(e)).isCullingDisabledForGroup = !0;
          break;
        case 'BOOLEAN_OPERATION':
          if (i = r(e), !t.booleanOperation) throw new Error('BOOLEAN_OPERATION nodes must have a booleanOperation');
          i.booleanOperation = t.booleanOperation;
          break;
        case 'CANVAS':
        case 'ELLIPSE':
        case 'LINE':
        case 'REGULAR_POLYGON':
        case 'SLICE':
        case 'STAR':
        case 'TEXT':
        case 'VECTOR':
        case 'FRAME':
        case 'SECTION':
        case 'SYMBOL':
        case 'STICKY':
        case 'SLIDE':
          i = r(e);
          break;
        case 'RECTANGLE':
        case 'ROUNDED_RECTANGLE':
          i = r('ROUNDED_RECTANGLE');
          break;
        case 'INSTANCE':
          {
            if (!t.componentId) throw new Error('INSTANCE nodes must have a componentId');
            if (n) throw new Error('INSTANCE nodes cannot be recorded');
            let e = this.scene.get(t.componentId);
            if (e?.type !== 'SYMBOL') throw new Error(`Invalid component Id: ${t.componentId}`);
            let r = e.createInstance();
            if (!r) throw new Error(`Failed to create instance for componentId: ${t.componentId}`);
            i = r;
            break;
          }
        case 'NONE':
          throw new Error(`Attempting to create node with type=${e}`);
        default:
          throw new Error(`Creating ${e} node not yet supported`);
      }
      MT(e) && i.update();
      return new $$K15({
        guid: i.guid,
        runtime: this
      });
    });
  }
  removeNode(e) {
    let t = this.scene.get(e);
    if (t) {
      if (this.serializerOptions?.reconcileById) {
        if (this.reparentedNodeIds.has(e)) return;
        this.removedNodeIds.add(e);
        let i = this.scene.getCurrentPage();
        i && i.appendChild(t);
      } else {
        t.removeSelfAndChildren();
      }
    }
  }
  cleanUpRemovedNodes() {
    this.serializerOptions?.reconcileById && (this.editScope('figma-jsx-cleanUpRemovedNodes', () => {
      for (let e of this.removedNodeIds) this.scene.get(e)?.removeSelfAndChildren();
    }), this.removedNodeIds.clear());
  }
  reparentNodeIfExists(e, t, i) {
    let n = e.debuggingMetadata?.originalId;
    if (!n) return null;
    let r = this.scene.get(n);
    if (!r) return null;
    let o = t.children.findIndex(e => e.guid === n);
    (r.parentGuid !== t.guid || o !== i) && t.insertChild(i, n);
    this.unmarkNodeAsRemoved(n);
    this.reparentedNodeIds.add(n);
    return new $$K15({
      guid: r.guid,
      runtime: this
    });
  }
  getScene() {
    return this.scene;
  }
  getExistingDeclarativeNode(e) {
    return this.existingDeclarativeNodes?.get(e);
  }
  unmarkNodeAsRemoved(e) {
    this.removedNodeIds.$$delete(e);
  }
  constructor({
    resourceStatus: e,
    recorder: t = null,
    outerEditScopeType: i = SourceType.USER,
    outerEditScopeLabel: n,
    scene: r,
    serializerOptions: o,
    existingDeclarativeNodes: a
  }) {
    q(this, 'resourceStatus', void 0);
    q(this, 'errorGuard', void 0);
    q(this, 'instanceIdsTouched', new Set());
    q(this, 'editScopeIsActive', !1);
    q(this, 'outerEditScopeLabel', void 0);
    q(this, 'outerEditScopeType', void 0);
    q(this, 'scene', void 0);
    q(this, 'serializerOptions', void 0);
    q(this, 'removedNodeIds', new Set());
    q(this, 'existingDeclarativeNodes', void 0);
    q(this, 'reparentedNodeIds', new Set());
    q(this, 'recorder', void 0);
    q(this, 'generationRequests', []);
    this.errorGuard = createErrorAccumulator();
    this.resourceStatus = e;
    this.outerEditScopeType = i;
    this.outerEditScopeLabel = n;
    this.recorder = t;
    this.scene = r;
    this.serializerOptions = o;
    this.existingDeclarativeNodes = a;
  }
}
async function Z({
  declarativeNode: e,
  oldDeclarativeNode: t,
  oldRootXY: i,
  newParentDirection: n,
  oldParentDirection: r,
  nodeShim: o,
  parentNodeShim: a,
  indexInParent: l,
  runtime: s,
  serializerOptions: d,
  newNodeIds: u,
  appliedNormalization: p = 'unapplied'
}) {
  if (!e) return null;
  let c = e => !d.modifiableIds || !!e && (d.modifiableIds.includes(e) || u.has(e));
  if (o && !c(o.guid)) return o;
  let f = () => {
    if (d?.reconcileById && e && e.debuggingMetadata?.originalId) {
      let t = e.debuggingMetadata?.originalId;
      let i = s.getExistingDeclarativeNode(t);
      if (t && i && h(i, e)) {
        let t = s.reparentNodeIfExists(e, a, l);
        if (t) return t;
      }
    }
    if (c(a.guid)) {
      let t = s.createNode(e);
      d.orderChildrenByXY ? a.insertChild(l, t.guid) : a.insertChild(Math.max(a.children.length - l, 0), t.guid);
      u.add(t.guid);
      return t;
    }
    return null;
  };
  function h(e, t) {
    let i = e.nodeType !== t.nodeType;
    let n = t.nodeType === 'INSTANCE' && e.nodeType === 'INSTANCE' && t.requiredProps.componentId !== e.requiredProps.componentId;
    let r = d?.reconcileById && e.debuggingMetadata?.originalId !== t.debuggingMetadata?.originalId;
    return !i && !n && !r;
  }
  let m = e => {
    e && c(e.guid) && e.removeNode();
  };
  if (!t && !e) return null;
  if (t || (t = null), !t && o && m(o), t && !e) {
    m(o);
    return null;
  }
  if (!t && e && (o = f()), !e || (!t || e?.deserializeMetadata.isUnknownNode || h(t, e) || (t = null, m(o), o = f()), !o && !(o = f()))) return null;
  let g = d.orderChildrenByXY ? o.childrenVisuallyOrdered : o.childrenLayerOrdered;
  (!e.deserializeMetadata?.isUnknownNode || e.deserializeMetadata?.isUnknownNode && !t) && ($$Q41({
    declarativeNode: e,
    oldDeclarativeNode: t,
    nodeShim: o,
    runtime: s
  }), await s.safeWritePropertyAsync(async () => M({
    textMetadata: e.textMetadata,
    oldTextMetadata: t ? t.textMetadata : null,
    nodeShim: o
  })));
  s.safeWriteProperty(() => {
    $$w36({
      nodeShim: o,
      declarativeNode: e,
      oldDeclarativeNode: t,
      newParentDirection: n,
      oldParentDirection: r
    });
  });
  let y = {
    nodeShim: o,
    declarativeNode: e,
    oldDeclarativeNode: t
  };
  let b = !(o.isGroup || o.type === 'BOOLEAN_OPERATION');
  d.normalizeRootXY && (p === 'unapplied' ? y = void 0 : p === 'shouldApply' && (y = {
    nodeShim: o,
    declarativeNode: e,
    oldDeclarativeNode: t,
    offset: i
  }));
  let S = p === 'applied' || b ? 'applied' : 'shouldApply';
  void 0 !== y && s.safeWriteProperty(() => {
    $$C37(y);
  });
  s.safeWriteProperty(() => {
    $$P32({
      declarativeNode: e,
      nodeShim: o,
      oldDeclarativeNode: t
    });
  });
  e.nodeType === 'FRAME' && o.numAutoPositionedChildren === 0 && s.safeWriteProperty(() => {
    $$R33({
      nodeShim: o,
      declarativeNode: e,
      oldDeclarativeNode: t
    });
  });
  let T = 0;
  let z = 0;
  let x = e.childrenMetadata?.children ?? [];
  let I = t?.childrenMetadata?.children ?? [];
  for (let a = 0; a < x.length; a++) {
    let l = x[a];
    let p = I[a];
    for (; !c(g[z]?.guid) && z < g.length;) {
      T++;
      z++;
    }
    (await Z({
      declarativeNode: l,
      oldDeclarativeNode: p,
      oldRootXY: i,
      newParentDirection: e.props.stackMode ?? n,
      oldParentDirection: t?.props?.stackMode ?? r,
      indexInParent: T,
      nodeShim: g[z] ?? null,
      parentNodeShim: o,
      runtime: s,
      serializerOptions: d,
      appliedNormalization: S,
      newNodeIds: u
    })) && T++;
    z++;
  }
  if (o.type !== 'INSTANCE' && !MT(o.type) && !e?.deserializeMetadata.isUnknownNode && g.length > z) {
    let e = g.length - z;
    for (; e > 0;) {
      m(g.pop() ?? null);
      e--;
    }
  }
  if (e.nodeType === 'GROUP' || e.nodeType === 'BOOLEAN_OPERATION') {
    if (o.children.length === 0) {
      m(o);
      return null;
    }
    let t = e => d.orderChildrenByXY ? o.childrenVisuallyOrdered[e] : o.childrenLayerOrdered[e];
    let n = 0;
    for (let e = 0; e < x.length; e++) {
      let r = x[e];
      let o = I[e];
      for (; !c(t(n)?.guid) && n < g.length;) n++;
      let a = t(n);
      if (!a) {
        n++;
        continue;
      }
      let l = d.normalizeRootXY && p !== 'applied' ? i : void 0;
      s.safeWriteProperty(() => {
        $$C37({
          nodeShim: a,
          declarativeNode: r,
          oldDeclarativeNode: o,
          offset: l
        });
      });
      s.safeWriteProperty(() => {
        $$P32({
          nodeShim: a,
          declarativeNode: r,
          oldDeclarativeNode: o
        });
      });
      n++;
    }
    e.nodeType === 'GROUP' && o.writeProperty('isCullingDisabledForGroup', !1);
  }
  s.generationRequests.push(...Object.entries(e.deserializeMetadata.generationRequests ?? {}).flatMap(([e, t]) => t.map(t => ({
    type: e,
    guid: o.guid,
    ...t
  }))));
  return o;
}
export function $$Q41({
  declarativeNode: e,
  oldDeclarativeNode: t,
  nodeShim: i,
  runtime: n
}) {
  let r = ['transformMatrix', 'flipHorizontal', 'flipVertical'];
  for (let n of r) {
    deepEqual(t?.customProperties?.[n], e.customProperties[n]) || i.writeCustomProperty({
      key: n,
      value: e.customProperties[n]
    });
  }
  for (let [n, o] of Object.entries(e.customProperties).filter(([e]) => !r.includes(e))) {
    deepEqual(t?.customProperties?.[n], o) || i.writeCustomProperty({
      key: n,
      value: o
    });
  }
  for (let [r, o] of (deepEqual(t?.componentProps, e.componentProps) || (i.type === 'INSTANCE' && n.trackInstanceIdTouched(i.guid), i.writeComponentProps(e.componentProps)), Object.entries(e.props))) deepEqual(t?.props?.[r], o) || i.writeProperty(r, o);
}
async function ee({
  nodeId: e,
  declarativeNode: t,
  oldDeclarativeNode: i,
  serializerOptions: n,
  editScopeType: r,
  outerEditScopeLabel: o
}) {
  let a = n.scene;
  let s = null;
  try {
    let d = await D({
      declarativeNode: t
    });
    let u = n.reconcileById && i ? function (e) {
      let t = [e];
      let i = new Map();
      for (; t.length > 0;) {
        let e = t.pop();
        e && (e.debuggingMetadata?.originalId && i.set(e.debuggingMetadata.originalId, e), e.childrenMetadata?.children && t.push(...e.childrenMetadata.children));
      }
      return i;
    }(i) : new Map();
    s = new $$Y13({
      resourceStatus: d,
      outerEditScopeType: r ?? zk.USER,
      outerEditScopeLabel: o,
      scene: a,
      serializerOptions: n,
      existingDeclarativeNodes: u
    });
    let p = e ? a.get(e) : null;
    let c = n.parentNodeId ? a.get(n.parentNodeId) : p ? p.parentNode : a.getCurrentPage();
    if (!c) throw new Error('Could not find parent node');
    let f = void 0 !== n.indexInParent ? n.indexInParent : e && p ? p.parentNode?.childrenGuids.indexOf(e) : c.childrenGuids.length;
    if (void 0 === f) throw new Error('Could not find index in parent');
    let h = e ? new $$K15({
      guid: e,
      runtime: s
    }) : null;
    let m = new $$K15({
      guid: c.guid,
      runtime: s
    });
    let g = c.stackMode;
    let y = {
      declarativeNode: t,
      oldDeclarativeNode: i,
      oldRootXY: {
        x: p?.x || 0,
        y: p?.y || 0
      },
      nodeShim: h,
      parentNodeShim: m,
      indexInParent: f,
      runtime: s,
      newParentDirection: g,
      oldParentDirection: g,
      serializerOptions: n,
      newNodeIds: new Set()
    };
    h = await l(n.materializeInvisibleChildren, p, () => Z(y));
    let b = s.generationRequests;
    if (!h) {
      return {
        outputNode: null,
        generationRequests: b
      };
    }
    await waitForAllFontsLoaded();
    let S = a.get(h.guid);
    if (S?.update(), n.updateDerivedSymbolDataAfterDeserialization) {
      let e = s.getInstanceIdsTouched();
      e.length > 0 && a.updateDerivedSymbolDataOnPrimaryInstances(e);
    }
    return {
      outputNode: S,
      generationRequests: b
    };
  } finally {
    V();
    s?.cleanUpRemovedNodes();
  }
}
let ei = function (e) {
  return e;
};
let en = _$$z.object({
  id: _$$z.string().optional()
});
let er = ei({
  name: 'ID',
  includeInTailwind: !0,
  fieldGroups: new Set([]),
  outputSchema: () => en,
  defaults: () => ({}),
  serialize: ({
    guid: e
  }, t) => {
    if (t.ignoreDeveloperFriendlyIds) {
      return {
        id: e
      };
    }
    let i = t.scene.developerFriendlyIdFromGuid(e);
    return {
      id: i?.toString()
    };
  },
  deserialize: ({
    params: {
      id: e
    }
  }) => {
    if (typeof e == 'string') {
      return {
        debuggingMetadata: {
          originalId: e
        }
      };
    }
  }
});
class eo {
  append(e) {
    this.data.push(e);
    return this;
  }
  codefence(e, t = 'jsx') {
    this.data.push('```');
    this.data.push(t);
    this.data.push('\n');
    this.data.push(e());
    this.data.push('\n');
    this.data.push('```');
    return this;
  }
  newline() {
    this.data.push('\n');
    return this;
  }
  toString(e = '') {
    return this.data.join(e);
  }
  constructor() {
    !function (e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    }(this, 'data', []);
  }
}
function ea(e, t) {
  return e.split('\n').map(e => `${t}${e}`).join('\n');
}
function el(e) {
  return `  return (
${ea(e, '  '.repeat(2))}
  )`;
}
function es(e) {
  let t = e.replace(/\n/g, '').replace(/\{/g, '{\n').replace(/\}/g, '\n}').replace(/; /g, '\n').split('\n');
  let i = 0;
  let n = new eo();
  for (let e of t) {
    e.includes('}') && i--;
    n.append(`${'  '.repeat(Math.max(0, i))}${e}`);
    e.includes('{') && i++;
  }
  return n.toString('\n');
}
function ed(e) {
  let t = e.type === 'DERIVED_BOOLEAN' ? e.devFriendlyProp : e;
  let i = t.key;
  return 'index' in t ? t.nonArrayKey : e.type === 'DERIVED_BOOLEAN' ? `!!${i}` : i;
}
let ep = _$$z.object({
  componentProps: _$$z.record(_$$z.string(), _$$z.any()).optional()
});
let ec = ei({
  name: 'Instances',
  includeInTailwind: !0,
  fieldGroups: new Set([]),
  outputSchema: () => ep,
  defaults: () => ({}),
  serialize: (e, t, i) => {
    if (e.type !== 'INSTANCE' || !e.symbolId || t.ignoreComponentProps) return;
    let n = function (e, t) {
      let i = {
        ...e
      };
      let n = [];
      for (Object.entries(i).forEach(([e, t]) => {
        n.push({
          obj: t,
          key: e,
          parent: i
        });
      }); n.length > 0;) {
        let {
          obj,
          key,
          parent
        } = n.shift();
        if (typeof obj == 'object' && obj !== null) {
          if ('type' in obj && obj.type === 'VARIABLE_ALIAS') {
            let n = t.variableAliasToJSXExpressionContainer(obj);
            n && (parent[key] = n);
          } else {
            Object.entries(obj).forEach(([t, i]) => {
              typeof i == 'object' && i !== null && n.push({
                obj: i,
                key: t,
                parent: obj
              });
            });
          }
        }
      }
      return i;
    }(getInstanceNodeProps(e, {
      enableTsArrays: !1,
      includeCustomImageAndIconProps: !!t.useCustomGroupAndImageFormatForFirstDraft,
      includeDefaultValues: !0,
      includeVariables: t.includeVariables,
      noTypeInfoCache: t.noTypeInfoCache,
      bubbleInstanceSwapProps: !0,
      exposeAllNestedInstances: !0
    }), i);
    if (t.serializeAsComponentDefinition) {
      let n = '';
      let r = e.componentPropertyReferences()?.mainComponent;
      let o = i.getRootComponentTypeInfo()?.parsedDefs.find(t => {
        if (t.def.type === 'NESTED_INSTANCE') {
          for (let n of getInstanceIdsForDef(i.getRootComponentTypeInfo()?.componentId ?? '', t, {
            exposeAllNestedInstances: !0
          })) {
            if (n === e.guid) return !0;
          }
        }
        return r && t.rawProp === r;
      });
      if (o && 'key' in o.devFriendlyProp && (n = ed(o.devFriendlyProp)), n) {
        if (t.topLevelComponentProps) {
          return {
            componentProps: {},
            spreadAttribute: {
              type: 'JSXSpreadAttribute',
              argument: n
            }
          };
        }
        {
          let e = new eo();
          e.append(n);
          return {
            componentProps: {
              type: 'JSXExpressionContainer',
              expression: e.toString()
            }
          };
        }
      }
    }
    let r = {};
    Object.keys(n).length && (r.componentProps = n);
    return r;
  },
  deserialize: ({
    params: e,
    options: t,
    context: i,
    declarativeNodeRequiredProps: {
      componentId: n
    },
    elem: r
  }) => {
    let o = t.topLevelComponentProps ? e : e.componentProps;
    return typeof o == 'object' && n ? {
      componentProps: function (e, t, i) {
        let n = {
          ...e
        };
        let r = [];
        for (Object.entries(n).forEach(([e, t]) => {
          r.push({
            obj: t,
            key: e,
            parent: n
          });
        }); r.length > 0;) {
          let {
            obj,
            key,
            parent
          } = r.shift();
          if (typeof obj == 'object' && obj !== null) {
            if (Bj(obj)) {
              let r = t.jsxExpressionContainerToVariableAlias(obj, i);
              r && (parent[key] = r);
            } else {
              Object.entries(obj).forEach(([t, i]) => {
                typeof i == 'object' && i !== null && r.push({
                  obj: i,
                  key: t,
                  parent: obj
                });
              });
            }
          }
        }
        return n;
      }(usagePropsToRawProps(o, n, e => {
        let n = i.findComponentIdFromJSXName(e);
        return n ? getComponentInfoById(n, {
          enableTsArrays: !1,
          noTypeInfoCache: t.noTypeInfoCache,
          exposeAllNestedInstances: !0,
          bubbleInstanceSwapProps: !0
        }) : null;
      }, {
        exposeAllNestedInstances: !0
      }), i, r)
    } : {};
  }
});
let ef = _$$z.object({
  name: _$$z.string().optional()
});
function eh(e) {
  if (e.type === 'TEXT' && e.name === e.characters) return {};
  let t = ey[e.type];
  let i = e.name.replace(/\d/g, '').replace(/\s/g, '');
  return t && t.includes(i) ? {} : {
    name: e.name
  };
}
function em({
  params: e
}) {
  if (typeof e.name == 'string') {
    return {
      props: {
        name: e.name
      }
    };
  }
}
let eg = ei({
  name: 'Name',
  includeInTailwind: !0,
  fieldGroups: new Set([]),
  outputSchema: () => ef,
  defaults: () => ({}),
  serialize: (e, t) => {
    if (e.type === 'INSTANCE') {
      let t = e.mainComponent ? d(e.mainComponent) : null;
      if (e.name === t?.name) return {};
    }
    return (e.type !== 'SYMBOL' || !t.serializeAsComponentDefinition) && (e.isState || t.includeNames) ? eh(e) : {};
  },
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }) => t.includes('name') ? eh(e) : {},
  deserialize: em,
  deserializeOverrides: em
});
let ey = {
  TEXT: ['Text'],
  FRAME: ['Frame'],
  VECTOR: ['Vector'],
  BOOLEAN_OPERATION: ['Union', 'Subtract', 'Intersect', 'Exclude'],
  STAR: ['Star'],
  LINE: ['Line'],
  ELLIPSE: ['Ellipse'],
  RECTANGLE: ['Rectangle'],
  ROUNDED_RECTANGLE: ['Rectangle'],
  REGULAR_POLYGON: ['Polygon'],
  SLICE: ['Slice'],
  GROUP: ['Group']
};
let eI = _$$z.union([_$$z.number(), _$$z.object({
  vertical: _$$z.number().or(M1),
  horizontal: _$$z.number().or(M1),
  top: _$$z.number().or(M1),
  left: _$$z.number().or(M1),
  bottom: _$$z.number().or(M1),
  right: _$$z.number().or(M1),
  type: _$$z.literal('JSXExpressionContainer'),
  expression: _$$z.string()
}).partial()]).optional().describe('Determines the padding between the border of the frame and its children.');
function eE(e, t, i) {
  let n = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.paddingTop : void 0) ?? i.maybeNormalizePxValue(e.stackTopPadding, 'y');
  let r = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.paddingLeft : void 0) ?? i.maybeNormalizePxValue(e.stackLeftPadding, 'x');
  let o = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.paddingRight : void 0) ?? i.maybeNormalizePxValue(e.stackRightPadding, 'x');
  let a = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.paddingBottom : void 0) ?? i.maybeNormalizePxValue(e.stackBottomPadding, 'y');
  return t.normalizePxToRange01 || (n !== r || r !== o || o !== a || a !== n) && (typeof n != 'object' || typeof r != 'object' || typeof o != 'object' || typeof a != 'object' || n.expression !== r.expression || r.expression !== o.expression || o.expression !== a.expression || a.expression !== n.expression) ? {
    padding: {
      top: n,
      left: r,
      right: o,
      bottom: a
    }
  } : {
    padding: n
  };
}
function eN({
  padding: e,
  context: t,
  elem: i
}) {
  let n = {};
  let r = {};
  if (void 0 !== e) {
    if (typeof e == 'number') {
      n.stackTopPadding = t.maybeDenormalizePxValue(e, 'y');
      n.stackLeftPadding = t.maybeDenormalizePxValue(e, 'x');
      n.stackRightPadding = t.maybeDenormalizePxValue(e, 'x');
      n.stackBottomPadding = t.maybeDenormalizePxValue(e, 'y');
    } else if (Bj(e)) {
      let n = t.jsxExpressionContainerToVariableAlias(e, i);
      r.paddingTop = n;
      r.paddingLeft = n;
      r.paddingRight = n;
      r.paddingBottom = n;
    } else {
      if ('vertical' in e) {
        if (typeof e?.vertical == 'number') {
          n.stackTopPadding = t.maybeDenormalizePxValue(e.vertical, 'y');
          n.stackBottomPadding = t.maybeDenormalizePxValue(e.vertical, 'y');
        } else if (Bj(e.vertical)) {
          let n = t.jsxExpressionContainerToVariableAlias(e.vertical, i);
          r.paddingTop = n;
          r.paddingBottom = n;
        }
      }
      if ('horizontal' in e) {
        if (typeof e?.horizontal == 'number') {
          n.stackLeftPadding = t.maybeDenormalizePxValue(e.horizontal, 'x');
          n.stackRightPadding = t.maybeDenormalizePxValue(e.horizontal, 'x');
        } else if (Bj(e.horizontal)) {
          let n = t.jsxExpressionContainerToVariableAlias(e.horizontal, i);
          r.paddingLeft = n;
          r.paddingRight = n;
        }
      }
      'top' in e && (typeof e?.top == 'number' ? n.stackTopPadding = t.maybeDenormalizePxValue(e.top, 'y') : Bj(e.top) && (r.paddingTop = t.jsxExpressionContainerToVariableAlias(e.top, i)));
      'left' in e && (typeof e?.left == 'number' ? n.stackLeftPadding = t.maybeDenormalizePxValue(e.left, 'x') : Bj(e.left) && (r.paddingLeft = t.jsxExpressionContainerToVariableAlias(e.left, i)));
      'right' in e && (typeof e?.right == 'number' ? n.stackRightPadding = t.maybeDenormalizePxValue(e.right, 'x') : Bj(e.right) && (r.paddingRight = t.jsxExpressionContainerToVariableAlias(e.right, i)));
      'bottom' in e && (typeof e?.bottom == 'number' ? n.stackBottomPadding = t.maybeDenormalizePxValue(e.bottom, 'y') : Bj(e.bottom) && (r.paddingBottom = t.jsxExpressionContainerToVariableAlias(e.bottom, i)));
    }
  }
  return {
    props: n,
    boundVariables: r
  };
}
let ev = _$$z.object({
  vertical: _$$z.number().or(_$$z.literal('auto')).or(M1),
  horizontal: _$$z.number().or(_$$z.literal('auto')).or(M1),
  type: _$$z.literal('JSXExpressionContainer'),
  expression: _$$z.string()
}).partial();
let eO = _$$z.object({
  flex: _$$z.enum(['vertical', 'horizontal']).optional().describe('Enables auto-layout for this frame and determines whether children are laid out horizontally or vertically. If not defined, then all children are absolutely positioned.'),
  padding: eI,
  spacing: _$$z.union([_$$z.literal('auto'), _$$z.number(), ev]).optional().describe('Determines distance between children of this frame. A single number value or "auto" controls both horizontal and vertical gap. "auto" spacing is the same as `justify-content: space-between` in css.'),
  wrap: _$$z.boolean().optional().describe('Determines whether children that overflow the bounds of this frame will wrap to a new line. Only applicable when `flex` is set to "horizontal"'),
  horizontalAlignItems: _$$z.enum(['start', 'end', 'center']).optional().describe('Determines how the children in this frame should be aligned in the horizontal direction.'),
  verticalAlignItems: _$$z.enum(['start', 'end', 'center', 'baseline']).optional().describe('Determines how the children in this frame should be aligned in the vertical direction. "baseline" can only be set on horizontal auto-layout frames, and aligns all children along the text baseline.')
}).describe('Fields that control how children are laid out in an auto-layout frame. Only when `flex` is defined will the other fields here take effect.');
let eA = _$$z.object({
  direction: _$$z.enum(['vertical', 'horizontal']).optional().describe('Determines whether children are laid out horizontally or vertically.  Defaults to `vertical`')
}).merge(eO.omit({
  flex: !0
}));
function eC(e, t, i, n) {
  if (!e.isStack) return;
  let r = {};
  e.stackMode === 'HORIZONTAL' ? (r.flex = 'horizontal', r.wrap = e.stackWrap === 'WRAP', r.wrap && (r.spacing = {
    horizontal: i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.itemSpacing : void 0) ?? i.maybeNormalizePxValue(e.stackSpacing, 'x'),
    vertical: i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.counterAxisSpacing : void 0) ?? i.maybeNormalizePxValue(e.stackCounterSpacing, 'y')
  }, e.stackCounterAlignContent === 'SPACE_BETWEEN' && (r.spacing.vertical = 'auto'), (e.stackPrimaryAlignItems === 'SPACE_BETWEEN' || e.stackPrimaryAlignItems === 'SPACE_EVENLY') && (r.spacing.horizontal = 'auto'), (r.spacing.horizontal === r.spacing.vertical || typeof r.spacing.horizontal == 'object' && typeof r.spacing.vertical == 'object' && r.spacing.horizontal?.expression === r.spacing.vertical?.expression) && (r.spacing = r.spacing.horizontal))) : e.stackMode === 'VERTICAL' && (r.flex = 'vertical');
  e.stackWrap !== 'WRAP' && typeof e.stackSpacing == 'number' && (e.stackPrimaryAlignItems === 'SPACE_BETWEEN' || e.stackPrimaryAlignItems === 'SPACE_EVENLY' ? r.spacing = 'auto' : r.spacing = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.itemSpacing : void 0) ?? i.maybeNormalizePxValue(e.stackSpacing, e.stackMode === 'HORIZONTAL' ? 'x' : 'y'));
  let o = e.stackMode === 'HORIZONTAL' ? 'horizontalAlignItems' : 'verticalAlignItems';
  switch (e.stackPrimaryAlignItems) {
    case 'MIN':
      r[o] = 'start';
      break;
    case 'MAX':
      r[o] = 'end';
      break;
    case 'CENTER':
      r[o] = 'center';
      break;
    case 'SPACE_EVENLY':
    case 'SPACE_BETWEEN':
      r[o] = void 0;
      break;
    default:
      throwTypeError(e.stackPrimaryAlignItems);
  }
  let a = e.stackMode === 'HORIZONTAL' ? 'verticalAlignItems' : 'horizontalAlignItems';
  switch (e.stackCounterAlignItems) {
    case 'MIN':
      r[a] = 'start';
      break;
    case 'MAX':
      r[a] = 'end';
      break;
    case 'CENTER':
      r[a] = 'center';
      break;
    case 'BASELINE':
      a === 'verticalAlignItems' ? r[a] = 'baseline' : r[a] = 'end';
      break;
    default:
      throwTypeError(e.stackCounterAlignItems);
  }
  return (Object.assign(r, eE(e, t, i)), n && (r = function (e, t) {
    let i = {};
    e.flex === 'horizontal' && t.includes('stack-wrap') && (i.wrap = e.wrap);
    (t.includes('stack-spacing') || t.includes('stack-primary-align-items') || t.includes('stack-counter-align-content')) && (i.spacing = e.spacing);
    t.includes('stack-primary-align-items') && (i.flex === 'horizontal' ? i.horizontalAlignItems = e.horizontalAlignItems : i.verticalAlignItems = e.verticalAlignItems);
    t.includes('stack-counter-align-items') && (i.flex === 'horizontal' ? i.verticalAlignItems = e.verticalAlignItems : i.horizontalAlignItems = e.horizontalAlignItems);
    (t.includes('stack-padding-top') || t.includes('stack-padding-bottom') || t.includes('stack-padding-left') || t.includes('stack-padding-right')) && (i.padding = e.padding);
    return i;
  }(r, n)), t.tailwind) ? function (e) {
    let {
      flex,
      wrap,
      horizontalAlignItems,
      verticalAlignItems,
      padding,
      spacing
    } = e;
    let l = [];
    if (flex && (flex === 'vertical' ? l.push('flex-col') : flex === 'horizontal' && l.push('flex')), spacing && (typeof spacing == 'number' ? l.push(`gap-${_$$h(spacing)}`) : spacing === 'auto' ? (l.push('justify-between'), wrap && l.push('content-between')) : typeof spacing == 'object' && 'horizontal' in spacing && (typeof spacing.horizontal == 'number' ? l.push(`gap-x-${_$$h(spacing.horizontal)}`) : spacing.horizontal === 'auto' && flex === 'horizontal' && l.push('justify-between'), typeof spacing.vertical == 'number' ? l.push(`gap-y-${_$$h(spacing.vertical)}`) : spacing.vertical === 'auto' && (flex === 'vertical' ? l.push('justify-between') : wrap && l.push('content-between')))), wrap && l.push('flex-wrap'), horizontalAlignItems && horizontalAlignItems !== 'start' && l.push(`${flex === 'horizontal' ? 'justify' : 'items'}-${horizontalAlignItems}`), verticalAlignItems && verticalAlignItems !== 'start' && l.push(`${flex === 'horizontal' ? 'items' : 'justify'}-${verticalAlignItems}`), padding) {
      if (typeof padding == 'number') {
        l.push(`p-${_$$h(padding)}`);
      } else if (typeof padding == 'object' && !Bj(padding) && void 0 !== padding.top && void 0 !== padding.bottom && void 0 !== padding.left && void 0 !== padding.right && !Bj(padding.top) && !Bj(padding.bottom) && !Bj(padding.left) && !Bj(padding.right)) {
        let {
          top,
          left,
          right,
          bottom
        } = padding;
        top === bottom ? top > 0 && l.push(`py-${_$$h(top)}`) : (top > 0 && l.push(`pt-${_$$h(top)}`), bottom > 0 && l.push(`pb-${_$$h(bottom)}`));
        left === right ? left > 0 && l.push(`px-${_$$h(left)}`) : (left > 0 && l.push(`pl-${_$$h(left)}`), right > 0 && l.push(`pr-${_$$h(right)}`));
      }
    }
    return {
      className: l.join(' ')
    };
  }(r) : t.flavor === 'flow' ? function (e) {
    let {
      flex = 'horizontal',
      padding,
      spacing,
      wrap,
      horizontalAlignItems,
      verticalAlignItems
    } = e;
    return {
      direction: flex,
      padding,
      spacing,
      wrap,
      horizontalAlignItems,
      verticalAlignItems
    };
  }(r) : r;
}
function ew({
  params: e,
  options: t,
  context: i,
  elem: n,
  deserializingOverrides: r
}) {
  t.tailwind ? e = function (e) {
    let {
      className
    } = e;
    let i = {};
    let n = {};
    let r = {};
    for (let {
      classParts,
      isNegative
    } of (i.flex = className?.includes('flex') ? className.includes('flex-col') ? 'vertical' : 'horizontal' : void 0, mu(className))) {
      let t = classParts[0];
      if (t) {
        if (t === 'flex') {
          switch (classParts[1]) {
            case 'nowrap':
              i.wrap = !1;
              break;
            case 'wrap':
              i.wrap = !0;
          }
        } else if (t === 'justify') {
          switch (classParts[1]) {
            case 'start':
            case 'end':
            case 'center':
              i.flex === 'horizontal' ? i.horizontalAlignItems = classParts[1] : i.flex === 'vertical' && (i.verticalAlignItems = classParts[1]);
              break;
            case 'between':
              i.flex && (r[i.flex] = 'auto');
          }
        } else if (t === 'items') {
          switch (classParts[1]) {
            case 'start':
            case 'end':
            case 'center':
              i.flex === 'vertical' ? i.horizontalAlignItems = classParts[1] : i.flex === 'horizontal' && (i.verticalAlignItems = classParts[1]);
          }
        } else if (t === 'content') {
          classParts[1] === 'between' && (r.vertical = 'auto');
        } else if (['p', 'pt', 'pb', 'pl', 'pr', 'py', 'px'].includes(t)) {
          let r = () => {
            let t = pu[classParts[1]] ?? Hc(classParts[1]) ?? 0;
            return isNegative ? -1 * t : t;
          };
          switch (t) {
            case 'p':
              i.padding = r();
              break;
            case 'pt':
              n.top = r();
              break;
            case 'pb':
              n.bottom = r();
              break;
            case 'pl':
              n.left = r();
              break;
            case 'pr':
              n.right = r();
              break;
            case 'py':
              n.top = r();
              n.bottom = r();
              break;
            case 'px':
              n.left = r();
              n.right = r();
          }
        } else if (t === 'gap') {
          let t = (() => {
            let t = classParts.length - 1;
            let i = pu[classParts[t]] ?? Hc(classParts[t]) ?? void 0;
            return void 0 === i ? i : isNegative ? -1 * i : i;
          })();
          if (void 0 !== t) {
            if (classParts.length === 2) {
              i.spacing = t;
            } else {
              switch (classParts[1]) {
                case 'x':
                  r.horizontal = t;
                  break;
                case 'y':
                  r.vertical = t;
              }
            }
          }
        }
      }
    }
    Object.keys(n).length > 0 && (i.padding = n);
    Object.keys(r).length > 0 && (r.vertical === 'auto' && void 0 === r.horizontal ? i.spacing = 'auto' : r.horizontal === r.vertical ? i.spacing = r.horizontal : i.spacing = r);
    return i;
  }(e) : t.flavor === 'flow' && (e = function (e) {
    let {
      direction = 'horizontal',
      padding,
      spacing,
      wrap,
      horizontalAlignItems,
      verticalAlignItems
    } = e;
    return {
      flex: direction,
      padding,
      spacing,
      wrap,
      horizontalAlignItems,
      verticalAlignItems
    };
  }(e));
  let {
    flex,
    wrap,
    horizontalAlignItems,
    verticalAlignItems,
    padding,
    spacing
  } = e;
  let p = r ? {} : {
    stackMode: 'NONE'
  };
  if (!r && !flex) {
    return {
      props: p
    };
  }
  let c = {};
  let f = {};
  flex === 'horizontal' ? (p.stackMode = 'HORIZONTAL', p.stackWrap = wrap ? 'WRAP' : 'NO_WRAP', f.direction = 'horizontal') : flex === 'vertical' && (p.stackMode = 'VERTICAL', f.direction = 'vertical');
  let h = flex === 'horizontal' ? horizontalAlignItems : verticalAlignItems;
  h === 'start' ? p.stackPrimaryAlignItems = 'MIN' : h === 'end' ? p.stackPrimaryAlignItems = 'MAX' : h === 'center' && (p.stackPrimaryAlignItems = 'CENTER');
  let m = flex === 'horizontal' ? verticalAlignItems : horizontalAlignItems;
  m === 'start' ? p.stackCounterAlignItems = 'MIN' : m === 'end' ? p.stackCounterAlignItems = 'MAX' : m === 'center' ? p.stackCounterAlignItems = 'CENTER' : m === 'baseline' && (p.stackCounterAlignItems = 'BASELINE');
  let {
    props,
    boundVariables
  } = eN({
    padding,
    context: i,
    elem: n
  });
  Object.assign(p, props);
  Object.assign(c, boundVariables);
  let b = flex === 'horizontal' && !!wrap;
  if (typeof spacing == 'number') {
    p.stackSpacing = i.maybeDenormalizePxValue(spacing, flex === 'horizontal' ? 'x' : 'y');
    b && (p.stackCounterSpacing = i.maybeDenormalizePxValue(spacing, 'y'));
  } else if (spacing === 'auto') {
    p.stackPrimaryAlignItems = 'SPACE_BETWEEN';
    b && (p.stackCounterAlignContent = 'SPACE_BETWEEN');
  } else if (Bj(spacing)) {
    let e = i.jsxExpressionContainerToVariableAlias(spacing, n);
    c.itemSpacing = e;
    b && (c.counterAxisSpacing = e);
  } else if (flex === 'horizontal' && typeof spacing == 'object' && (b && 'vertical' in spacing && (typeof spacing?.vertical == 'number' ? p.stackCounterSpacing = i.maybeDenormalizePxValue(spacing.vertical, 'y') : spacing?.vertical === 'auto' ? p.stackCounterAlignContent = 'SPACE_BETWEEN' : Bj(spacing.vertical) && (c.counterAxisSpacing = i.jsxExpressionContainerToVariableAlias(spacing.vertical, n))), 'horizontal' in spacing && (typeof spacing?.horizontal == 'number' ? p.stackSpacing = i.maybeDenormalizePxValue(spacing.horizontal, 'x') : spacing?.horizontal === 'auto' ? p.stackPrimaryAlignItems = 'SPACE_BETWEEN' : Bj(spacing.horizontal) && (c.itemSpacing = i.jsxExpressionContainerToVariableAlias(spacing.horizontal, n))), Bj(spacing))) {
    let e = i.jsxExpressionContainerToVariableAlias(spacing, n);
    c.itemSpacing = e;
    c.counterAxisSpacing = e;
  }
  return {
    props: Object.keys(c).length > 0 ? {
      ...p,
      boundVariables: c
    } : p,
    layoutMetadata: f
  };
}
let eR = ei({
  name: 'AutoLayout',
  includeInTailwind: !0,
  fieldGroups: new Set(['layout']),
  outputSchema: e => e.tailwind ? zA : e.flavor === 'flow' ? eA : eO,
  defaults: ({
    nodeInfo: e,
    options: t
  }) => {
    if (!t.tailwind) {
      if (t.flavor === 'flow') {
        return {
          direction: 'horizontal',
          padding: 0,
          spacing: 0,
          wrap: !1,
          horizontalAlignItems: 'start',
          verticalAlignItems: 'start'
        };
      }
      if (e.isAutoLayout) {
        return {
          padding: 0,
          spacing: 0,
          verticalAlignItems: 'start',
          horizontalAlignItems: 'start',
          wrap: !1
        };
      }
    }
    return {};
  },
  serializeNodeInfoForDefaults: e => ({
    isAutoLayout: e.isStack
  }),
  deserializeNodeInfoForDefaults: (e, t) => t.flavor === 'flow' ? {
    isAutoLayout: !0
  } : 'flex' in e ? {
    isAutoLayout: !!e.flex
  } : 'className' in e && e.className ? {
    isAutoLayout: e.className.includes('flex')
  } : {},
  serialize: (e, t, i) => eC(e, t, i, null),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => eC(e, i, n, t),
  deserialize: ({
    params: e,
    options: t,
    context: i,
    elem: n
  }) => ew({
    params: e,
    options: t,
    context: i,
    elem: n,
    deserializingOverrides: !1
  }),
  deserializeOverrides: ({
    params: e,
    options: t,
    context: i,
    elem: n
  }) => ew({
    params: e,
    options: t,
    context: i,
    elem: n,
    deserializingOverrides: !0
  })
});
let eP = ['FRAME', 'SYMBOL', 'INSTANCE'];
let ek = _$$z.object({
  overflow: _$$z.enum(['hidden', 'visible']).optional()
});
function ej(e) {
  return eP.includes(e.type) ? {
    overflow: e.frameMaskDisabled ? 'visible' : 'hidden'
  } : {};
}
function eL({
  params: e
}) {
  if (typeof e.overflow == 'string') {
    return {
      props: {
        frameMaskDisabled: e.overflow === 'visible'
      }
    };
  }
}
let eD = ei({
  name: 'Clipping',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => ek,
  defaults: ({
    nodeType: e
  }) => eP.includes(e) ? {
    overflow: 'hidden'
  } : {},
  serialize: e => ej(e),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }) => t.includes('is-frame-clipping-disabled') ? ej(e) : {},
  deserialize: eL,
  deserializeOverrides: eL
});
let eV = _$$z.object({
  x: _$$z.union([_$$z.number(), _$$z.object({
    type: _$$z.union([_$$z.literal('left'), _$$z.literal('right'), _$$z.literal('center')]),
    offset: _$$z.number()
  }), _$$z.object({
    type: _$$z.literal('left-right'),
    leftOffset: _$$z.number(),
    rightOffset: _$$z.number()
  }), _$$z.object({
    type: _$$z.literal('scale'),
    leftOffsetPercent: _$$z.number(),
    rightOffsetPercent: _$$z.number()
  })]).optional().describe('The x position of the node. This field is ignored if the node is a direct child of an auto-layout frame and is not absolutely positioned. Group nodes do not have an `x` field because they are always positioned and sized to fit their children.'),
  y: _$$z.union([_$$z.number(), _$$z.object({
    type: _$$z.union([_$$z.literal('top'), _$$z.literal('bottom'), _$$z.literal('center')]),
    offset: _$$z.number()
  }), _$$z.object({
    type: _$$z.literal('top-bottom'),
    topOffset: _$$z.number(),
    bottomOffset: _$$z.number()
  }), _$$z.object({
    type: _$$z.literal('scale'),
    topOffsetPercent: _$$z.number(),
    bottomOffsetPercent: _$$z.number()
  })]).optional().describe('The y position of the node. This field is ignored if the node is a direct child of an auto-layout frame and is not absolutely positioned. Group nodes do not have an `y` field because they are always positioned and sized to fit their children.'),
  position: _$$z.literal('absolute').optional().describe('For a direct child of an auto-layout frame, setting the value of this field to `absolute` will take the child out of auto-layout flow and allows explicitly setting `x` and `y`. This field is ignored if the node is not a direct child of an auto-layout frame.'),
  length: _$$z.union([_$$z.literal('fill-parent'), _$$z.number()]).optional().describe('For Line nodes only. For direct children of an auto-layout frame, the length can also be set to "fill-parent".'),
  width: _$$z.union([_$$z.literal('fill-parent'), _$$z.literal('hug-contents'), _$$z.number(), M1]).optional().describe('Defines the width of the node. For auto-layout frames, the width defaults to "hug-contents". For direct children of an auto-layout frame, the width can also be set to "fill-parent". This field will be ignored if the `x` field has a `left-right` or `scale` constraint, which already controls the width.'),
  height: _$$z.union([_$$z.literal('fill-parent'), _$$z.literal('hug-contents'), _$$z.number(), M1]).optional().describe('Defines the height of the node. For auto-layout frames, the height defaults to "hug-contents". For direct children of an auto-layout frame, the height can also be set to "fill-parent". This field will be ignored if the `y` field has a `top-bottom` or `scale` constraint, which already controls the height.'),
  fallbackWidthIfHug: _$$z.number().optional(),
  fallbackHeightIfHug: _$$z.number().optional(),
  flipHorizontal: _$$z.boolean().optional(),
  flipVertical: _$$z.boolean().optional(),
  maxWidth: _$$z.union([_$$z.number(), M1]).nullable().optional().describe('The maximum width of the node. Only applies to an auto-layout frame and its direct children.'),
  minWidth: _$$z.union([_$$z.number(), M1]).nullable().optional().describe('The minimum width of the node. Only applies to an auto-layout frame and its direct children.'),
  maxHeight: _$$z.union([_$$z.number(), M1]).nullable().optional().describe('The maximum height of the node. Only applies to an auto-layout frame and its direct children.'),
  minHeight: _$$z.union([_$$z.number(), M1]).nullable().optional().describe('The minimum height of the node. Only applies to an auto-layout frame and its direct children.'),
  gridRowStart: _$$z.number().$$int().nonnegative().optional().describe('Determines the starting row index for this node within the parent grid. Only applies to direct children of a grid-layout frame.'),
  gridRowSpan: _$$z.number().$$int().positive().optional().describe('Determines the number of rows this node spans within the parent grid. Only applies to direct children of a grid-layout frame.'),
  gridColumnStart: _$$z.number().$$int().nonnegative().optional().describe('Determines the starting column index for this node within the parent grid. Only applies to direct children of a grid-layout frame.'),
  gridColumnSpan: _$$z.number().$$int().positive().optional().describe('Determines the number of columns this node spans within the parent grid. Only applies to direct children of a grid-layout frame.')
});
let eM = zA.merge(eV.pick({
  x: !0,
  y: !0,
  flipHorizontal: !0,
  flipVertical: !0
}));
let e_ = ei({
  name: 'PositionSize',
  includeInTailwind: !0,
  fieldGroups: new Set(['layout']),
  outputSchema: e => e.tailwindOnly ? zA : e.tailwind ? eM : e.flavor === 'flow' ? eV : eV.omit({
    gridRowStart: !0,
    gridRowSpan: !0,
    gridColumnStart: !0,
    gridColumnSpan: !0
  }),
  defaults: ({
    nodeType: e,
    nodeInfo: t,
    options: i
  }) => {
    if (i.tailwind) return {};
    let n = {
      minWidth: null,
      minHeight: null,
      maxWidth: null,
      maxHeight: null
    };
    return e === 'TEXT' ? {
      ...n,
      width: i.flavor === 'flow' ? 'fill-parent' : 'hug-contents',
      height: 'hug-contents'
    } : e === 'FRAME' && (t.isAutoLayout || i.flavor === 'flow') ? {
      ...n,
      width: 'hug-contents',
      height: 'hug-contents'
    } : n;
  },
  serialize: (e, t, i) => {
    if (!e.size) return;
    let n = function (e, t, i) {
      let n = i.isSerializationRoot(e);
      function r(e, t) {
        return n ? e : i.maybeNormalizePxValue(e, t);
      }
      if (t.normalizeRootXY && n) return {};
      if (t.forceAbsolutePosition) {
        return {
          x: r(e.x, 'x'),
          y: r(e.y, 'y')
        };
      }
      let o = e.parentNode?.isStackOrFixedSizeContainer && e.parentNode?.isLayoutContainer;
      if (o && e.stackPositioning === 'AUTO') return {};
      let a = {};
      if ((o || t.flavor === 'flow' && !e.parentNode?.isGroup && e.parentNode?.type !== 'BOOLEAN_OPERATION') && (a.position = 'absolute'), e.isGroup || e.type === 'BOOLEAN_OPERATION') return a;
      let l = Ji(e);
      if (!l || !eB(e, l)) {
        let n = e.x;
        let o = e.y;
        if (t.normalizeRootXY && !l) {
          let t = e.parentNode;
          for (; t && t.type !== 'CANVAS';) {
            if (t && i.isSerializationRoot(t)) {
              n -= t.x;
              o -= t.y;
              break;
            }
            t = t?.parentNode ?? null;
          }
        }
        a.x = r(n, 'x');
        a.y = r(o, 'y');
        return a;
      }
      let {
        horizontalConstraint,
        verticalConstraint
      } = e;
      if (horizontalConstraint) {
        switch (horizontalConstraint) {
          case 'MIN':
            a.x = r(e.x, 'x');
            break;
          case 'MAX':
            a.x = {
              type: 'right',
              offset: r(l.size.x - e.x - e.size.x, 'x')
            };
            break;
          case 'CENTER':
            a.x = {
              type: 'center',
              offset: r(e.x + e.size.x / 2 - l.size.x / 2, 'x')
            };
            break;
          case 'STRETCH':
            a.x = {
              type: 'left-right',
              leftOffset: r(e.x, 'x'),
              rightOffset: r(l.size.x - e.x - e.size.x, 'x')
            };
            break;
          case 'SCALE':
            let u = 100 * e.x / l.size.x;
            let p = 100 - e.size.x / l.size.x * 100 - u;
            a.x = {
              type: 'scale',
              leftOffsetPercent: u,
              rightOffsetPercent: p
            };
            break;
          case 'FIXED_MIN':
          case 'FIXED_MAX':
            a.x = e.x;
            break;
          default:
            throwTypeError(horizontalConstraint);
        }
      }
      if (verticalConstraint) {
        switch (verticalConstraint) {
          case 'MIN':
            a.y = r(e.y, 'y');
            break;
          case 'MAX':
            a.y = {
              type: 'bottom',
              offset: r(l.size.y - e.y - e.size.y, 'y')
            };
            break;
          case 'CENTER':
            a.y = {
              type: 'center',
              offset: r(e.y + e.size.y / 2 - l.size.y / 2, 'y')
            };
            break;
          case 'STRETCH':
            a.y = {
              type: 'top-bottom',
              topOffset: r(e.y, 'y'),
              bottomOffset: r(l.size.y - e.y - e.size.y, 'y')
            };
            break;
          case 'SCALE':
            let c = 100 * e.y / l.size.y;
            let f = 100 - e.size.y / l.size.y * 100 - c;
            a.y = {
              type: 'scale',
              topOffsetPercent: c,
              bottomOffsetPercent: f
            };
            break;
          case 'FIXED_MIN':
          case 'FIXED_MAX':
            a.y = e.y;
            break;
          default:
            throwTypeError(verticalConstraint);
        }
      }
      return a;
    }(e, t, i);
    Object.assign(n, function (e, t, i) {
      if (t.flavor !== 'flow' || !e.isGridChild) return {};
      let {
        gridRowAnchorIndex,
        gridRowSpan,
        gridColumnAnchorIndex,
        gridColumnSpan
      } = e;
      return {
        gridRowStart: gridRowAnchorIndex,
        gridRowSpan,
        gridColumnStart: gridColumnAnchorIndex,
        gridColumnSpan
      };
    }(e, t, 0));
    let r = e.isGroup || e.type === 'BOOLEAN_OPERATION';
    if (e.isInstance) return t.tailwind ? eF(n, !!t.tailwindOnly) : n;
    let o = Ji(e);
    if (e.type === 'LINE') return (o && e.stackHorizontalLayoutSize === LayoutSizingMode.FILL_CONTAINER ? n.length = 'fill-parent' : r || (n.length = i.maybeNormalizePxValue(e.size.x, 'x')), t.tailwind) ? eF(n, !!t.tailwindOnly) : n;
    let a = eB(e, o);
    let l = e.childrenNodes.filter(e => e.stackPositioning === 'AUTO').length;
    let {
      horizontalConstraint,
      stackHorizontalLayoutSize,
      verticalConstraint,
      stackVerticalLayoutSize,
      relativeTransform
    } = e;
    a && (horizontalConstraint === 'STRETCH' || horizontalConstraint === 'SCALE') ? (horizontalConstraint === 'STRETCH' || horizontalConstraint === 'SCALE') && t.forceAbsoluteSize && (n.width = i.maybeNormalizePxValue(e.size.x, 'x')) : o && stackHorizontalLayoutSize === LayoutSizingMode.FILL_CONTAINER ? t.forceAbsoluteSize ? n.width = i.maybeNormalizePxValue(e.size.x, 'x') : n.width = 'fill-parent' : e.type === 'TEXT' && e.textAutoResize === 'WIDTH_AND_HEIGHT' ? t.forceAbsoluteSize ? n.width = i.maybeNormalizePxValue(e.size.x, 'x') : n.width = 'hug-contents' : stackHorizontalLayoutSize === LayoutSizingMode.HUG_CONTENT ? (t.forceAbsoluteSize ? n.width = i.maybeNormalizePxValue(e.size.x, 'x') : n.width = 'hug-contents', l === 0 && (t.ignoreHugContentsOnEmptyFrames ? n.width = i.maybeNormalizePxValue(e.size.x, 'x') : n.fallbackWidthIfHug = i.maybeNormalizePxValue(e.size.x, 'x'))) : r || (t.forceAbsoluteSize ? n.width = i.maybeNormalizePxValue(e.size.x, 'x') : n.width = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.width : void 0) ?? i.maybeNormalizePxValue(e.size.x, 'x'));
    a && (verticalConstraint === 'STRETCH' || verticalConstraint === 'SCALE') ? (horizontalConstraint === 'STRETCH' || horizontalConstraint === 'SCALE') && t.forceAbsoluteSize && (n.height = i.maybeNormalizePxValue(e.size.y, 'y')) : o && stackVerticalLayoutSize === LayoutSizingMode.FILL_CONTAINER ? t.forceAbsoluteSize ? n.height = i.maybeNormalizePxValue(e.size.y, 'y') : n.height = 'fill-parent' : e.type === 'TEXT' && (e.textAutoResize === 'WIDTH_AND_HEIGHT' || e.textAutoResize === 'HEIGHT') ? t.forceAbsoluteSize ? n.height = i.maybeNormalizePxValue(e.size.y, 'y') : n.height = 'hug-contents' : stackVerticalLayoutSize === LayoutSizingMode.HUG_CONTENT ? (t.forceAbsoluteSize ? n.height = i.maybeNormalizePxValue(e.size.y, 'y') : n.height = 'hug-contents', l === 0 && (t.ignoreHugContentsOnEmptyFrames ? n.height = i.maybeNormalizePxValue(e.size.y, 'y') : n.fallbackHeightIfHug = i.maybeNormalizePxValue(e.size.y, 'y'))) : r || (t.forceAbsoluteSize ? n.height = i.maybeNormalizePxValue(e.size.y, 'y') : n.height = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.height : void 0) ?? i.maybeNormalizePxValue(e.size.y, 'y'));
    let f = Math.atan2(relativeTransform.m10, relativeTransform.m00);
    let h = Math.cos(-f);
    let m = Math.sin(-f);
    let g = relativeTransform.m00 * h - relativeTransform.m10 * m;
    let y = relativeTransform.m01 * m + relativeTransform.m11 * h;
    return (g < 0 && (n.flipHorizontal = !0), y < 0 && (n.flipVertical = !0), typeof e.minWidth == 'number' && (n.minWidth = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.minWidth : void 0) ?? i.maybeNormalizePxValue(e.minWidth, 'x')), typeof e.maxWidth == 'number' && (n.maxWidth = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.maxWidth : void 0) ?? i.maybeNormalizePxValue(e.maxWidth, 'x')), typeof e.minHeight == 'number' && (n.minHeight = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.minHeight : void 0) ?? i.maybeNormalizePxValue(e.minHeight, 'y')), typeof e.maxHeight == 'number' && (n.maxHeight = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.maxHeight : void 0) ?? i.maybeNormalizePxValue(e.maxHeight, 'y')), t.tailwind) ? eF(n, !!t.tailwindOnly) : n;
  },
  deserialize: ({
    params: e,
    options: t,
    context: i,
    elem: n,
    depth: r
  }) => {
    let o = e;
    t.tailwind && (o = function (e) {
      let {
        className,
        x,
        y,
        flipHorizontal,
        flipVertical
      } = e;
      let a = {
        x,
        y,
        flipHorizontal,
        flipVertical
      };
      for (let {
        classParts,
        isNegative
      } of mu(className)) {
        let t = classParts[0];
        if (t) {
          if (t === 'absolute') {
            a.position = 'absolute';
          } else if (['top', 'left', 'bottom', 'right'].includes(t)) {
            let n = () => {
              let t = classParts.length - 1;
              let n = pu[classParts[t]] ?? Hc(classParts[t]) ?? 0;
              return isNegative ? -1 * n : n;
            };
            switch (t) {
              case 'left':
              case 'right':
                if (a.x) {
                  if (typeof a.x == 'object') {
                    let e = a.x;
                    a.x = {
                      type: 'left-right',
                      leftOffset: e.type === 'left' ? e.offset : n(),
                      rightOffset: e.type === 'right' ? e.offset : n()
                    };
                  }
                } else {
                  a.x = {
                    type: t,
                    offset: n()
                  };
                }
                break;
              case 'top':
              case 'bottom':
                if (a.y) {
                  if (typeof a.y == 'object') {
                    let e = a.y;
                    a.y = {
                      type: 'top-bottom',
                      topOffset: e.type === 'top' ? e.offset : n(),
                      bottomOffset: e.type === 'bottom' ? e.offset : n()
                    };
                  }
                } else {
                  a.y = {
                    type: t,
                    offset: n()
                  };
                }
            }
          } else if (['w', 'h'].includes(t)) {
            let i = () => classParts[1] === 'full' ? 'fill-parent' : classParts[1] === 'fit' ? 'hug-contents' : pu[classParts[1]] ?? Hc(classParts[1]) ?? void 0;
            if (t === 'w') {
              let e = i();
              void 0 !== e && (a.width = e);
            } else if (t === 'h') {
              let e = i();
              void 0 !== e && (a.height = e);
            }
          } else if (['min', 'max'].includes(t)) {
            let i = () => {
              let t = classParts.length - 1;
              return classParts[0] === 'max' && classParts[1] === 'w' && y$[classParts[t]] ? y$[classParts[t]] : pu[classParts[t]] ?? Hc(classParts[t]) ?? void 0;
            };
            if (t === 'min') {
              if (classParts[1] === 'w') {
                let e = i();
                void 0 !== e && (a.minWidth = e);
              } else if (classParts[1] === 'h') {
                let e = i();
                void 0 !== e && (a.minHeight = e);
              }
            } else if (t === 'max') {
              if (classParts[1] === 'w') {
                let e = i();
                void 0 !== e && (a.maxWidth = e);
              } else if (classParts[1] === 'h') {
                let e = i();
                void 0 !== e && (a.maxHeight = e);
              }
            }
          }
        }
      }
      a.width || (a.width = 'hug-contents');
      a.height || (a.height = 'hug-contents');
      return a;
    }(e));
    let {
      length,
      width,
      height,
      fallbackWidthIfHug,
      fallbackHeightIfHug,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      flipVertical,
      flipHorizontal
    } = o;
    let {
      props,
      layoutMetadata
    } = function ({
      normalizedParams: e,
      context: t,
      depth: i
    }) {
      let {
        x,
        y,
        position
      } = e;
      let a = {
        stackPositioning: 'AUTO'
      };
      let l = {};
      typeof x == 'number' ? l.x = i === 0 ? x : t.maybeDenormalizePxValue(x, 'x') : typeof x == 'object' && (l.xConstraint = i === 0 ? x : eX(x, t));
      typeof y == 'number' ? l.y = i === 0 ? y : t.maybeDenormalizePxValue(y, 'y') : typeof y == 'object' && (l.yConstraint = i === 0 ? y : eX(y, t));
      position === 'absolute' && (a.stackPositioning = 'ABSOLUTE');
      return {
        props: a,
        layoutMetadata: l
      };
    }({
      normalizedParams: o,
      context: i,
      depth: r
    });
    let {
      props: _props
    } = function ({
      normalizedParams: e
    }) {
      let {
        gridRowStart,
        gridRowSpan,
        gridColumnStart,
        gridColumnSpan
      } = e;
      let o = {
        gridRowSpan: 1,
        gridColumnSpan: 1
      };
      typeof gridRowStart == 'number' && (o.gridRowAnchorIndex = gridRowStart);
      typeof gridRowSpan == 'number' && (o.gridRowSpan = gridRowSpan);
      typeof gridColumnStart == 'number' && (o.gridColumnAnchorIndex = gridColumnStart);
      typeof gridColumnSpan == 'number' && (o.gridColumnSpan = gridColumnSpan);
      return {
        props: o
      };
    }({
      normalizedParams: o,
      context: i,
      depth: r
    });
    Object.assign(props, _props);
    let T = {};
    let z = {};
    layoutMetadata.xConstraint?.type === 'left-right' || layoutMetadata.xConstraint?.type === 'scale' || (void 0 !== width ? typeof width == 'number' ? layoutMetadata.width = i.maybeDenormalizePxValue(width, 'x') : typeof width == 'string' ? layoutMetadata.width = width : typeof width == 'object' && (T.width = i.jsxExpressionContainerToVariableAlias(width, n)) : void 0 !== length && (layoutMetadata.width = typeof length == 'number' ? i.maybeDenormalizePxValue(length, 'x') : length));
    t.ignoreHugContentsOnEmptyFrames || (void 0 !== fallbackWidthIfHug && (layoutMetadata.fallbackWidthIfHug = i.maybeDenormalizePxValue(fallbackWidthIfHug, 'x')), void 0 !== fallbackHeightIfHug && (layoutMetadata.fallbackHeightIfHug = i.maybeDenormalizePxValue(fallbackHeightIfHug, 'y')));
    layoutMetadata.yConstraint?.type === 'top-bottom' || layoutMetadata.yConstraint?.type === 'scale' || void 0 === height || (typeof height == 'number' ? layoutMetadata.height = i.maybeDenormalizePxValue(height, 'y') : typeof height == 'string' ? layoutMetadata.height = height : typeof height == 'object' && (T.height = i.jsxExpressionContainerToVariableAlias(height, n)));
    void 0 !== minWidth && (Bj(minWidth) ? T.minWidth = i.jsxExpressionContainerToVariableAlias(minWidth, n) : props.minWidth = typeof minWidth == 'number' ? i.maybeDenormalizePxValue(minWidth, 'x') : minWidth);
    void 0 !== minHeight && (Bj(minHeight) ? T.minHeight = i.jsxExpressionContainerToVariableAlias(minHeight, n) : props.minHeight = typeof minHeight == 'number' ? i.maybeDenormalizePxValue(minHeight, 'y') : minHeight);
    void 0 !== maxWidth && (Bj(maxWidth) ? T.maxWidth = i.jsxExpressionContainerToVariableAlias(maxWidth, n) : props.maxWidth = typeof maxWidth == 'number' ? i.maybeDenormalizePxValue(maxWidth, 'x') : maxWidth);
    void 0 !== maxHeight && (Bj(maxHeight) ? T.maxHeight = i.jsxExpressionContainerToVariableAlias(maxHeight, n) : props.maxHeight = typeof maxHeight == 'number' ? i.maybeDenormalizePxValue(maxHeight, 'y') : maxHeight);
    void 0 !== flipVertical && (z.flipVertical = !!flipVertical);
    void 0 !== flipHorizontal && (z.flipHorizontal = !!flipHorizontal);
    return {
      props: Object.keys(T).length > 0 ? {
        ...props,
        boundVariables: T
      } : props,
      layoutMetadata,
      customProperties: z
    };
  }
});
function eF(e, t) {
  let {
    x,
    y,
    position,
    length,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    flipHorizontal,
    flipVertical
  } = e;
  let h = [];
  let m = {};
  position === 'absolute' && h.push('absolute');
  void 0 !== x && (typeof x == 'number' ? h.push(s$('left', x)) : typeof x == 'object' && (x.type === 'right' ? h.push(s$('right', x.offset)) : x.type === 'left-right' ? (h.push(s$('left', x.leftOffset)), h.push(s$('right', x.rightOffset))) : m.x = x));
  void 0 !== y && (typeof y == 'number' ? h.push(s$('top', y)) : typeof y == 'object' && (y.type === 'bottom' ? h.push(s$('bottom', y.offset)) : y.type === 'top-bottom' ? (h.push(s$('top', y.topOffset)), h.push(s$('bottom', y.bottomOffset))) : m.y = y));
  void 0 !== length && (typeof length == 'number' ? h.push(`w-${_$$h(length)}`) : length === 'fill-parent' && h.push('w-full'));
  void 0 !== width && (typeof width == 'number' ? h.push(`w-${_$$h(width)}`) : width === 'fill-parent' && h.push('w-full'));
  void 0 !== height && (typeof height == 'number' ? h.push(`h-${_$$h(height)}`) : height === 'fill-parent' && h.push('h-full'));
  minWidth && typeof minWidth == 'number' && h.push(`min-w-${_$$h(minWidth)}`);
  maxWidth && typeof maxWidth == 'number' && h.push(`max-w-${_$$h(maxWidth)}`);
  minHeight && typeof minHeight == 'number' && h.push(`min-h-${_$$h(minHeight)}`);
  maxHeight && typeof maxHeight == 'number' && h.push(`max-h-${_$$h(maxHeight)}`);
  let g = {
    className: h.join(' ')
  };
  return t ? g : {
    ...g,
    ...m,
    flipHorizontal,
    flipVertical
  };
}
function eX(e, t) {
  if (void 0 === e) return e;
  if (typeof e == 'number') return t.maybeDenormalizePxValue(e, 'x');
  if (typeof e == 'object') {
    switch (e.type) {
      case 'left':
      case 'right':
      case 'top':
      case 'bottom':
      case 'center':
        return {
          ...e,
          offset: t.maybeDenormalizePxValue(e.offset, 'x')
        };
      case 'left-right':
        return {
          ...e,
          leftOffset: t.maybeDenormalizePxValue(e.leftOffset, 'x'),
          rightOffset: t.maybeDenormalizePxValue(e.rightOffset, 'x')
        };
      case 'top-bottom':
        return {
          ...e,
          topOffset: t.maybeDenormalizePxValue(e.topOffset, 'y'),
          bottomOffset: t.maybeDenormalizePxValue(e.bottomOffset, 'y')
        };
      case 'scale':
        break;
      default:
        throwTypeError(e);
    }
  }
  return e;
}
function eB(e, t) {
  let i = t?.isStackOrFixedSizeContainer && t?.isLayoutContainer;
  if (!t) return !1;
  let n = e.parentNode;
  for (; n && n.guid !== t.guid && n.parentGuid !== t.guid;) n = n.parentNode;
  let r = e.stackPositioning === 'ABSOLUTE' || n?.isGroup && n.stackPositioning === 'ABSOLUTE';
  return t && !t.isSection && (!i || r);
}
let eG = _$$z.object({
  hidden: _$$z.boolean().or(M1).optional()
});
function eJ(e, t, i) {
  if (t.includeVariables) {
    let t = e.boundVariables.visible;
    if (t) {
      let e = i.variableAliasToJSXExpressionContainer(t);
      if (e) {
        return {
          hidden: {
            ...e,
            expression: `!${e.expression}`
          }
        };
      }
    }
  }
  return {
    hidden: !e.visible
  };
}
function eH({
  params: e,
  elem: t,
  context: i
}) {
  if (Bj(e.hidden)) {
    let n = e.hidden.expression.replace(/^!/, '');
    let r = i.jsxExpressionContainerToVariableAlias({
      ...e.hidden,
      expression: n
    }, t);
    if (!r) return;
    return {
      props: {
        boundVariables: {
          visible: r
        }
      }
    };
  }
  if (typeof e.hidden == 'boolean') {
    return {
      props: {
        visible: !e.hidden
      }
    };
  }
}
let e$ = ei({
  name: 'Visible',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => eG,
  defaults: () => ({
    hidden: !1
  }),
  serialize: (e, t, i) => {
    if (t.serializeAsComponentDefinition) {
      let t = e.componentPropertyReferences();
      if (t && 'visible' in t) {
        let e = t.visible;
        let n = i.getRootComponentTypeInfo();
        let r = n && n.parsedDefs.find(t => t.rawProp === e);
        if (r) {
          let e = (r.devFriendlyProp.type === 'DERIVED_BOOLEAN' ? r.devFriendlyProp.devFriendlyProp : r.devFriendlyProp).key;
          return {
            hidden: {
              type: 'JSXExpressionContainer',
              expression: `!${e}`
            }
          };
        }
      }
    }
    return eJ(e, t, i);
  },
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => {
    let r = i.includeVariables && e.boundVariables.visible;
    return t.includes('visible') || r ? eJ(e, i, n) : {};
  },
  deserialize: eH,
  deserializeOverrides: eH
});
let eU = _$$z.object({
  rotation: _$$z.number().optional().describe('In degrees. Expects values from -180 to 180. The rotation is with respect to the top-left of the object. Therefore, it is independent from the position of the object.')
});
let eW = ei({
  name: 'Rotation',
  includeInTailwind: !1,
  fieldGroups: new Set(['layout']),
  outputSchema: () => eU,
  defaults: () => ({
    rotation: 0
  }),
  serialize: ({
    rotation: e
  }) => ({
    rotation: e
  }),
  deserialize: ({
    params: e
  }) => {
    if (!('rotation' in e) || void 0 === e.rotation) return;
    let {
      rotation
    } = e;
    return {
      props: {
        rotation
      }
    };
  }
});
let eq = _$$z.object({
  blendMode: U3.optional()
});
function eY(e) {
  return {
    blendMode: _$$nl(e.blendMode)
  };
}
function eZ({
  params: e
}) {
  if (void 0 !== e.blendMode) {
    return {
      props: {
        blendMode: hA(e.blendMode)
      }
    };
  }
}
let eQ = ei({
  name: 'BlendMode',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => eq,
  defaults: () => ({
    blendMode: 'pass-through'
  }),
  serialize: e => eY(e),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }) => t.includes('blend-mode') ? eY(e) : {},
  deserialize: eZ,
  deserializeOverrides: eZ
});
let e6 = e => void 0 !== e;
function e4(e, t) {
  return Math.abs(e - t) < 0.001 ? t : e;
}
function e5(e) {
  return {
    excludeImageData: !!e.excludeImageData,
    imagePlaceholderHex: e.imagePlaceholderHex ?? '#FFF',
    imagePlaceholderRef: e.imagePlaceholderRef,
    onlyIncludeTopPaint: !!e.onlyIncludeTopPaint,
    includeVariables: !!e.includeVariables
  };
}
let e3 = {
  blendMode: 'normal',
  opacity: 1,
  rotation: 0
};
function e9(e) {
  Object.keys(e).forEach(t => {
    e[t] === e3[t] && delete e[t];
    void 0 === e[t] && delete e[t];
  });
  return e;
}
let e7 = {
  opacity: 1,
  blendMode: 'NORMAL',
  rotation: 0
};
function te(e) {
  Object.keys(e).forEach(t => {
    e[t] === e7[t] && delete e[t];
    void 0 === e[t] && delete e[t];
  });
  return e;
}
function tt(e, t) {
  if (t.imagePlaceholderRef) {
    return te({
      type: 'IMAGE',
      image: {
        hash: sha1BytesFromHex(t.imagePlaceholderRef)
      },
      imageScaleMode: 'FILL'
    });
  }
  let i = typeof t.imagePlaceholderHex == 'function' ? t.imagePlaceholderHex(e.type === 'image-generation' ? e.caption : void 0) : t.imagePlaceholderHex;
  return te({
    type: 'SOLID',
    color: QW(i),
    opacity: 1,
    blendMode: hA(e.blendMode)
  });
}
let ti = (e, t, i, n) => {
  let r = e.filter(e => e.visible && e.opacity !== 0);
  if (r.length === 0) return [];
  let o = r[r.length - 1];
  if (o && o.type === 'SOLID' && (r.length === 1 && o.blendMode === 'NORMAL' || t.onlyIncludeTopPaint)) {
    if (t.includeVariables) {
      let e = i.variableDataToJSXExpressionContainer(o.colorVar);
      if (e) return e;
    }
    return si(o.color, o.opacity);
  }
  let a = r.map((e, r) => {
    let o = n?.find(e => e.type !== 'vector' && e.paintIndex === r);
    return function (e, t, i, n) {
      if (e.type) {
        if (e.type === 'SOLID') {
          let n = si(e.color);
          if (!n) return;
          let r = t.includeVariables ? i.variableDataToJSXExpressionContainer(e.colorVar) : void 0;
          return e9({
            type: 'solid',
            color: r ?? n,
            blendMode: _$$nl(e.blendMode),
            opacity: r ? void 0 : e.opacity
          });
        }
        if (e.type.includes('GRADIENT')) {
          return e9({
            type: e.type.toLowerCase().replace('_', '-'),
            gradientStops: (e.stopsVar && e.stopsVar.length > 0 ? e.stopsVar : e.stops)?.map(e => {
              let n = t.includeVariables && 'colorVar' in e ? i.variableDataToJSXExpressionContainer(e.colorVar) : void 0;
              let r = e.color ? si(e.color) : void 0;
              let o = n ?? r;
              return o && void 0 !== e.position ? {
                color: o,
                position: e.position
              } : null;
            }).filter(e => e !== null) ?? [],
            gradientHandlePositions: e.type === 'GRADIENT_LINEAR' ? getLinearGradientPoints(e.transform) : getRadialGradientPoints(e.transform),
            blendMode: _$$nl(e.blendMode),
            opacity: e.opacity
          });
        }
        if (e.type === 'IMAGE') {
          let i;
          if (n) {
            i = {
              type: 'image-generation',
              caption: n
            };
          } else {
            if (!e.image || !e.image.hash) {
              let e = typeof t.imagePlaceholderHex == 'function' ? t.imagePlaceholderHex(void 0) : t.imagePlaceholderHex;
              if (e) {
                let t = QW(e);
                if (t) {
                  return {
                    type: 'solid',
                    color: si(t)
                  };
                }
              }
              return;
            }
            i = {
              type: 'image',
              imageRef: t.excludeImageData ? 'unknown' : bytesToHex(e.image.hash)
            };
          }
          i.blendMode = _$$nl(e.blendMode);
          i.opacity = e.opacity;
          i.rotation = e.rotation;
          e.paintFilter && (i.filters = {
            exposure: e.paintFilter.exposure,
            contrast: e.paintFilter.contrast,
            vibrance: e.paintFilter.vibrance,
            temperature: e.paintFilter.temperature,
            tint: e.paintFilter.tint,
            highlights: e.paintFilter.highlights,
            shadows: e.paintFilter.shadows
          });
          e.imageScaleMode && (i.scaleMode = function (e) {
            switch (e) {
              case 'STRETCH':
                return 'crop';
              case 'TILE':
                return 'tile';
              case 'FIT':
                return 'fit';
              case 'FILL':
                return 'fill';
            }
          }(e.imageScaleMode));
          e.imageScaleMode === 'STRETCH' && e.transform && (i.imageTransform = toArray2x3(e.transform));
          e.imageScaleMode === 'TILE' && e.scale && (i.scalingFactor = e.scale);
          return e9(i);
        }
      }
    }(e, t, i, o?.caption);
  }).filter(e6);
  return a.length === 1 && a[0]?.type === 'image-generation' ? `image(${a[0]?.caption})` : a;
};
let tn = ({
  prop: e,
  options: t,
  context: i,
  element: n
}) => {
  if (typeof e == 'string') {
    let t = /^image\(([^)]+)\)$/i.exec(e);
    e = t ? [{
      type: 'image-generation',
      caption: t[1]
    }] : [{
      type: 'solid',
      color: e
    }];
  }
  if (Array.isArray(e)) {
    let r = [];
    let o = new Map();
    for (let a of e) {
      let {
        paint,
        imageGenerationRequest
      } = function ({
        paint: e,
        options: t,
        context: i,
        element: n
      }) {
        if (e.type === 'solid') {
          let r = typeof e.color == 'string' ? QW(e.color) : e.color;
          if (!r) return {};
          if (Bj(r)) {
            if (!t.includeVariables) return {};
            let o = i.jsxExpressionContainerToVariableData(r, n);
            return o ? {
              paint: te({
                type: 'SOLID',
                colorVar: o,
                blendMode: hA(e.blendMode)
              })
            } : {};
          }
          {
            let t = Math.min(e.opacity ?? 1, r.a);
            r.a = 1;
            return {
              paint: te({
                type: 'SOLID',
                color: r,
                opacity: t,
                blendMode: hA(e.blendMode)
              })
            };
          }
        }
        if (e.type === 'gradient-angular' || e.type === 'gradient-linear' || e.type === 'gradient-radial' || e.type === 'gradient-diamond') {
          let r = e.gradientStops.map(e => {
            let r = typeof e.color == 'string' ? QW(e.color) : e.color;
            if (r) {
              let o;
              if (Bj(r)) {
                if (!t.includeVariables) return;
                let o = i.jsxExpressionContainerToVariableData(r, n);
                if (!o) return;
                return {
                  colorVar: o,
                  color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                  },
                  position: e.position
                };
              }
              return {
                color: (o = {
                  color: r,
                  position: e.position
                }).color,
                colorVar: {
                  value: {
                    colorValue: o.color
                  },
                  dataType: 'COLOR',
                  resolvedDataType: 'COLOR'
                },
                position: o.position
              };
            }
          }).filter(e => void 0 !== e);
          let o = r.map(e => ({
            color: e.color,
            position: e.position
          }));
          return {
            paint: te({
              type: e.type.toUpperCase().replace('-', '_'),
              transform: toMatrix2x3(getGradientTransformMatrix(e.type, e.gradientHandlePositions)),
              stopsVar: r,
              stops: o,
              opacity: e.opacity,
              blendMode: hA(e.blendMode)
            })
          };
        }
        if (e.type === 'image') {
          let i;
          if (void 0 !== e.imageRef && e.imageRef !== 'unknown') {
            try {
              i = sha1BytesFromHex(e.imageRef);
            } catch {}
          }
          return void 0 === i ? {
            paint: tt(e, t)
          } : {
            paint: te({
              type: 'IMAGE',
              image: {
                hash: i
              },
              imageShouldColorManage: !0,
              opacity: e.opacity,
              rotation: e.scaleMode != 'crop' ? e.rotation : void 0,
              scale: e.scaleMode == 'tile' ? e.scalingFactor : void 0,
              blendMode: hA(e.blendMode),
              imageScaleMode: function (e) {
                switch (e) {
                  case 'fill':
                    break;
                  case 'fit':
                    return 'FIT';
                  case 'tile':
                    return 'TILE';
                  case 'crop':
                    return 'STRETCH';
                }
                return 'FILL';
              }(e.scaleMode),
              transform: e.imageTransform && e.imageTransform.length === 2 && e.imageTransform[0]?.length === 3 && e.imageTransform[1]?.length === 3 ? toMatrix2x3(e.imageTransform) : void 0,
              paintFilter: e.filters
            })
          };
        }
        return e.type === 'image-generation' ? {
          paint: tt(e, t),
          imageGenerationRequest: e.caption
        } : {};
      }({
        paint: a,
        options: t,
        context: i,
        element: n
      });
      paint && (r.push(paint), imageGenerationRequest && o.set(r.length - 1, imageGenerationRequest));
    }
    return {
      paints: r,
      imageGenerationRequests: o
    };
  }
  if (t.includeVariables && Bj(e)) {
    let t = i.jsxExpressionContainerToVariableData(e, n);
    return t ? {
      paints: [{
        type: 'SOLID',
        colorVar: t
      }],
      imageGenerationRequests: new Map()
    } : {
      paints: [],
      imageGenerationRequests: new Map()
    };
  }
  return {
    paints: [],
    imageGenerationRequests: new Map()
  };
};
let to = _$$z.object({
  fill: y4.optional()
});
let ta = zA.merge(to);
function tl(e, t, i) {
  let {
    fills
  } = e = MT(e.type) ? e.immutableFrameShape ?? e : e;
  if (!fills) return;
  if (t.includeStyles && e.inheritedFillStyle) {
    let t = e.sceneGraph.getStyleNodeByRef(e.inheritedFillStyle);
    if (t) {
      return {
        spreadAttribute: i.styleToJSXSpreadAttribute(t)
      };
    }
  }
  let r = t.assetGenerationRequests?.filter(t => t.guid === e.guid && t.type === 'fill') || [];
  let o = {
    fill: ti(fills, e5({
      ...t,
      onlyIncludeTopPaint: !!t.onlyIncludeTopPaint || !!t.tailwindOnly
    }), i, r)
  };
  return t.tailwind ? tu(o, e.type, !!t.tailwindOnly) : o;
}
function ts({
  params: e,
  options: t,
  nodeType: i,
  context: n,
  styles: r,
  elem: o
}) {
  let a = e;
  t.tailwind && (a = tp(e, i));
  let l = r.find(e => e.styleType === 'FILL');
  if (l) {
    return {
      props: {
        inheritedFillStyle: {
          key: l.styleKeyForPublish,
          version: l.getStyleVersion()
        }
      }
    };
  }
  let {
    fill
  } = a;
  if (!fill) {
    return t.tailwind ? {
      props: {
        fills: []
      }
    } : {};
  }
  let {
    paints,
    imageGenerationRequests
  } = tn({
    prop: fill,
    options: e5(t),
    context: n,
    element: o
  });
  let p = {
    fills: paints
  };
  let c = {
    generationRequests: {
      fill: [...imageGenerationRequests.entries()].map(([e, t]) => ({
        paintIndex: e,
        caption: t
      }))
    }
  };
  t.namesFromImageGenerationRequests && c.generationRequests?.fill?.length && c.generationRequests.fill[0]?.caption && (p.name = c.generationRequests.fill[0].caption);
  return {
    props: p,
    deserializeMetadata: c
  };
}
let td = ei({
  name: 'Fill',
  includeInTailwind: !0,
  fieldGroups: new Set(['rendering']),
  outputSchema: e => {
    let t = to;
    e.tailwindOnly ? t = zA : e.tailwind && (t = ta);
    !e.includeAssetGenerationRequests && 'fill' in t.shape && (t = t.omit({
      fill: !0
    }).extend({
      fill: uw.optional()
    }));
    return t;
  },
  defaults: ({
    nodeType: e,
    options: t
  }) => t.tailwind ? {} : e === 'TEXT' ? {
    fill: '#000'
  } : {
    fill: []
  },
  serialize: (e, t, i) => tl(e, t, i),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => t.includes('fill-paint-data') ? tl(e, i, n) : {},
  deserialize: ts,
  deserializeOverrides: e => (e.options.tailwind && e.context.trackDeserializeIssue({
    message: 'Tailwind not currently supported for paint overrides',
    context: {
      jsxElement: e.elem
    },
    location: e.elem.parsedLocations?.attributes.overrides ?? e.elem.parsedLocations?.opening
  }), ts({
    ...e,
    nodeType: 'NONE'
  }))
});
function tu(e, t, i) {
  let {
    fill
  } = e;
  return fill ? typeof fill == 'string' ? t === 'TEXT' && fill === '#000' ? {} : function (e, t) {
    let i = QW(e);
    if (i) {
      let e = si({
        r: i.r,
        g: i.g,
        b: i.b,
        a: 1
      });
      let n = JQ(i.a);
      return {
        className: `${t === 'TEXT' ? 'text' : 'bg'}-${_$$iz(e)}${n}`
      };
    }
    return {};
  }(fill, t) : Array.isArray(fill) && fill.length >= 1 ? i ? {} : {
    fill
  } : {} : {};
}
function tp(e, t) {
  let {
    className,
    fill
  } = e;
  let r = {};
  if (fill) {
    return {
      fill
    };
  }
  for (let {
    classParts
  } of mu(className)) {
    let t = classParts[0];
    if (t && ['bg', 'text'].includes(t)) {
      let t = c1(classParts);
      t && (typeof t == 'string' ? r.fill = t : typeof t == 'object' && 'a' in t && (r.fill = [{
        type: 'solid',
        color: t,
        opacity: t.a
      }]));
    }
  }
  r.fill || t !== 'TEXT' || (r.fill = [{
    type: 'solid',
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    opacity: 1
  }]);
  return r;
}
let tc = _$$z.object({
  cornerRadius: _$$z.number().or(_$$z.object({
    topLeft: _$$z.number().or(M1),
    topRight: _$$z.number().or(M1),
    bottomLeft: _$$z.number().or(M1),
    bottomRight: _$$z.number().or(M1)
  })).or(M1).describe('uniform corner radius, or 4 independent corner radii: topLeft topRight bottomRight bottomLeft').optional()
});
let tf = zA;
function th(e, t, i) {
  if (!e.cornerRadius && !e.rectangleCornerRadiiIndependent) return;
  let n = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.topLeftRadius : void 0) ?? e.rectangleTopLeftCornerRadius;
  let r = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.topRightRadius : void 0) ?? e.rectangleTopRightCornerRadius;
  let o = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.bottomRightRadius : void 0) ?? e.rectangleBottomRightCornerRadius;
  let a = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.bottomLeftRadius : void 0) ?? e.rectangleBottomLeftCornerRadius;
  let l = e.rectangleCornerRadiiIndependent ? {
    cornerRadius: {
      topLeft: n,
      topRight: r,
      bottomRight: o,
      bottomLeft: a
    }
  } : {
    cornerRadius: e.cornerRadius
  };
  return t.tailwind ? function (e) {
    let {
      cornerRadius
    } = e;
    let i = [];
    if (typeof cornerRadius == 'number') {
      i.push(`rounded${ty(cornerRadius)}`);
    } else if (typeof cornerRadius == 'object' && !Bj(cornerRadius)) {
      let {
        topLeft,
        topRight,
        bottomLeft,
        bottomRight
      } = cornerRadius;
      if (topLeft === topRight && topRight === bottomLeft && bottomLeft === bottomRight && typeof topLeft == 'number') {
        topLeft > 0 && i.push(`rounded${ty(topLeft)}`);
      } else {
        let t = {
          topLeft: typeof topLeft == 'number' && topLeft > 0,
          topRight: typeof topRight == 'number' && topRight > 0,
          bottomLeft: typeof bottomLeft == 'number' && bottomLeft > 0,
          bottomRight: typeof bottomRight == 'number' && bottomRight > 0
        };
        typeof topLeft == 'number' && t.topLeft && t.bottomLeft && topLeft === bottomLeft && (i.push(`rounded-l${ty(topLeft)}`), t.topLeft = !1, t.bottomLeft = !1);
        typeof topRight == 'number' && t.topRight && t.bottomRight && topRight === bottomRight && (i.push(`rounded-r${ty(topRight)}`), t.topRight = !1, t.bottomRight = !1);
        typeof topLeft == 'number' && t.topLeft && t.topRight && topLeft === topRight && (i.push(`rounded-t${ty(topLeft)}`), t.topLeft = !1, t.topRight = !1);
        typeof bottomLeft == 'number' && t.bottomLeft && t.bottomRight && bottomLeft === bottomRight && (i.push(`rounded-b${ty(bottomLeft)}`), t.bottomLeft = !1, t.bottomRight = !1);
        typeof topLeft == 'number' && t.topLeft && i.push(`rounded-tl${ty(topLeft)}`);
        typeof bottomLeft == 'number' && t.bottomLeft && i.push(`rounded-bl${ty(bottomLeft)}`);
        typeof topRight == 'number' && t.topRight && i.push(`rounded-tr${ty(topRight)}`);
        typeof bottomRight == 'number' && t.bottomRight && i.push(`rounded-br${ty(bottomRight)}`);
      }
    }
    return {
      className: i.join(' ')
    };
  }(l) : l;
}
function tm({
  params: e,
  options: t,
  context: i,
  elem: n
}) {
  let r = e;
  t.tailwind && (r = function (e) {
    let {
      className
    } = e;
    let i = {};
    let n = {
      topLeft: 0,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0
    };
    for (let {
      classParts
    } of mu(className)) {
      let t = classParts[0];
      if (t && t === 'rounded') {
        if (classParts.length === 1) {
          i.cornerRadius = 4;
        } else {
          let t = x_[classParts[1]];
          let r = Hc(classParts[1]);
          if (typeof t == 'number') {
            i.cornerRadius = t;
          } else if (r) {
            i.cornerRadius = r;
          } else {
            let t = () => {
              if (classParts.length === 2) return 4;
              let t = classParts.length - 1;
              return x_[classParts[t]] ?? Hc(classParts[t]) ?? 0;
            };
            switch (classParts[1]) {
              case 't':
                n.topLeft = t();
                n.topRight = t();
                break;
              case 'e':
              case 'r':
                n.topRight = t();
                n.bottomRight = t();
                break;
              case 'b':
                n.bottomLeft = t();
                n.bottomRight = t();
                break;
              case 's':
              case 'l':
                n.bottomLeft = t();
                n.topLeft = t();
                break;
              case 'ss':
              case 'tl':
                n.topLeft = t();
                break;
              case 'se':
              case 'tr':
                n.topRight = t();
                break;
              case 'es':
              case 'bl':
                n.bottomLeft = t();
                break;
              case 'ee':
              case 'br':
                n.bottomRight = t();
            }
          }
        }
      }
    }
    Object.values(n).some(e => e > 0) && (i.cornerRadius = n);
    'cornerRadius' in i || (i.cornerRadius = 0);
    return i;
  }(e));
  let {
    cornerRadius
  } = r;
  if (typeof cornerRadius == 'number') {
    return {
      props: {
        cornerRadius
      }
    };
  }
  if (Bj(cornerRadius)) {
    let e = i.jsxExpressionContainerToVariableAlias(cornerRadius, n);
    if (e) {
      return {
        props: {
          boundVariables: {
            topLeftRadius: e,
            topRightRadius: e,
            bottomLeftRadius: e,
            bottomRightRadius: e
          }
        }
      };
    }
  } else if (typeof cornerRadius == 'object') {
    let e = {
      rectangleCornerRadiiIndependent: !0
    };
    let t = {};
    typeof cornerRadius.topLeft == 'number' ? e.rectangleTopLeftCornerRadius = cornerRadius.topLeft : Bj(cornerRadius.topLeft) && (t.topLeftRadius = i.jsxExpressionContainerToVariableAlias(cornerRadius.topLeft, n));
    typeof cornerRadius.topRight == 'number' ? e.rectangleTopRightCornerRadius = cornerRadius.topRight : Bj(cornerRadius.topRight) && (t.topRightRadius = i.jsxExpressionContainerToVariableAlias(cornerRadius.topRight, n));
    typeof cornerRadius.bottomLeft == 'number' ? e.rectangleBottomLeftCornerRadius = cornerRadius.bottomLeft : Bj(cornerRadius.bottomLeft) && (t.bottomLeftRadius = i.jsxExpressionContainerToVariableAlias(cornerRadius.bottomLeft, n));
    typeof cornerRadius.bottomRight == 'number' ? e.rectangleBottomRightCornerRadius = cornerRadius.bottomRight : Bj(cornerRadius.bottomRight) && (t.bottomRightRadius = i.jsxExpressionContainerToVariableAlias(cornerRadius.bottomRight, n));
    return {
      props: Object.keys(t).length > 0 ? {
        ...e,
        boundVariables: t
      } : e
    };
  }
}
let tg = ei({
  name: 'CornerRadius',
  includeInTailwind: !0,
  fieldGroups: new Set(['rendering']),
  outputSchema: e => e.tailwind ? tf : tc,
  defaults: ({
    options: e
  }) => e.tailwind ? {} : {
    cornerRadius: 0
  },
  serialize: (e, t, i) => th(e, t, i),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => {
    if (['rectangle-top-left-corner-radius', 'rectangle-top-right-corner-radius', 'rectangle-bottom-left-corner-radius', 'rectangle-bottom-right-corner-radius', 'rectangle-corner-radii-independent', 'corner-radius'].some(e => t.includes(e))) return th(e, i, n);
  },
  deserialize: tm,
  deserializeOverrides: tm
});
function ty(e) {
  return v6(e, {
    alwaysUsePreciseValues: !0
  });
}
let tb = _$$z.enum(['inside', 'outside', 'center']);
let tS = _$$z.enum(['none', 'round', 'square', 'arrow-lines', 'arrow-equilateral']);
let tT = _$$z.object({
  stroke: y4.optional(),
  strokeDashPattern: _$$z.array(_$$z.number()).optional().describe('The alternating stroke dash and gap lengths, in pixels, in the format `<length> <gap>`. An empty array gives a solid stroke and a single value will be applied to both the dash and gap length.'),
  strokeWidth: _$$z.number().or(_$$z.object({
    top: _$$z.number().or(M1),
    bottom: _$$z.number().or(M1),
    left: _$$z.number().or(M1),
    right: _$$z.number().or(M1)
  })).or(M1).optional(),
  strokeAlign: tb.optional().describe('The alignment of the stroke with respect to the boundaries of the node. Defaults to inside alignment.'),
  strokeCap: tS.optional().describe('The decoration applied to vertices which have only one connected segment.')
});
let tz = zA.merge(tT.pick({
  stroke: !0,
  strokeDashPattern: !0,
  strokeAlign: !0,
  strokeCap: !0
}));
let tx = ei({
  name: 'Stroke',
  includeInTailwind: !0,
  fieldGroups: new Set(['rendering']),
  outputSchema: e => {
    let t = tT;
    e.tailwindOnly ? t = zA : e.tailwind && (t = tz);
    !e.includeAssetGenerationRequests && 'stroke' in t.shape && (t = _$$z.object({
      stroke: uw.optional()
    }).merge(t.omit({
      stroke: !0
    })));
    return t;
  },
  defaults: ({
    options: e
  }) => e.tailwindOnly ? {} : e.tailwind ? {
    strokeAlign: 'inside',
    strokeCap: 'none',
    strokeDashPattern: []
  } : {
    stroke: [],
    strokeAlign: 'inside',
    strokeWidth: 1,
    strokeCap: 'none',
    strokeDashPattern: []
  },
  serialize(e, t, i) {
    let {
      strokePaints,
      strokeAlign,
      strokeWeight,
      borderStrokeWeightsIndependent,
      dashPattern,
      strokeCap
    } = e;
    let d = strokePaints.data.filter(e => !!e.visible && e.opacity !== 0);
    if (!strokePaints || d.length === 0) return;
    let u = t.assetGenerationRequests?.filter(t => t.guid === e.guid && t.type === 'stroke') || [];
    let p = ti(d, e5(t), i, u);
    let c = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.strokeTopWeight : void 0) ?? e.borderTopWeight;
    let f = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.strokeBottomWeight : void 0) ?? e.borderBottomWeight;
    let h = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.strokeLeftWeight : void 0) ?? e.borderLeftWeight;
    let m = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.strokeRightWeight : void 0) ?? e.borderRightWeight;
    let g = {
      stroke: p,
      strokeAlign: strokeAlign.toLowerCase(),
      strokeWidth: borderStrokeWeightsIndependent ? {
        top: c,
        bottom: f,
        left: h,
        right: m
      } : strokeWeight,
      strokeCap: strokeCap?.toLowerCase()
    };
    return (dashPattern.length !== 0 && (g.strokeDashPattern = dashPattern), t.tailwind) ? function (e, t, i) {
      let {
        stroke,
        strokeDashPattern,
        strokeAlign,
        strokeCap
      } = e;
      let l = [];
      let s = {
        strokeAlign,
        strokeCap,
        strokeDashPattern
      };
      let d = !t.borderStrokeWeightsIndependent && t.strokeWeight > 0 || t.borderStrokeWeightsIndependent && [t.borderBottomWeight, t.borderLeftWeight, t.borderRightWeight, t.borderTopWeight].some(e => e > 0);
      let u = DI(t.strokePaints.data);
      if (u && d) {
        let {
          hexStr,
          opacitySuffix
        } = u;
        l.push(`border-${_$$iz(hexStr)}${opacitySuffix}`);
      } else {
        Array.isArray(stroke) && (s.stroke = stroke);
      }
      if (d) {
        let e = e => e === 1 ? '' : `-${qK(e)}`;
        if (t.borderStrokeWeightsIndependent) {
          let {
            borderLeftWeight,
            borderBottomWeight,
            borderRightWeight,
            borderTopWeight
          } = t;
          borderLeftWeight === borderRightWeight && borderRightWeight === borderBottomWeight && borderBottomWeight === borderTopWeight ? l.push(`border${e(borderLeftWeight)}`) : (borderLeftWeight === borderRightWeight ? borderLeftWeight > 0 && l.push(`border-x${e(borderLeftWeight)}`) : (borderLeftWeight > 0 && l.push(`border-l${e(borderLeftWeight)}`), borderRightWeight > 0 && l.push(`border-r${e(borderRightWeight)}`)), borderBottomWeight === borderTopWeight ? borderBottomWeight > 0 && l.push(`border-y${e(borderBottomWeight)}`) : (borderTopWeight > 0 && l.push(`border-t${e(borderTopWeight)}`), borderBottomWeight > 0 && l.push(`border-b${e(borderBottomWeight)}`)));
        } else {
          l.push(`border${e(t.strokeWeight)}`);
        }
      }
      let p = l.length > 0 ? l.join(' ') : void 0;
      return i ? {
        className: p
      } : {
        ...s,
        className: p
      };
    }(g, e, !!t.tailwindOnly) : g;
  },
  deserialize({
    params: e,
    options: t,
    context: i,
    elem: n
  }) {
    let r = e;
    t.tailwind && (r = function (e) {
      let {
        className,
        stroke,
        strokeAlign,
        strokeCap,
        strokeDashPattern
      } = e;
      let a = {
        strokeAlign,
        strokeCap,
        strokeDashPattern,
        stroke
      };
      let l = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      for (let {
        classParts
      } of mu(className)) {
        let t = classParts[0];
        let i = classParts[1];
        if (t && t === 'border') {
          let t = () => {
            'stroke' in a || (a.stroke = '#000');
          };
          if (i) {
            if (i) {
              let n = Number(i);
              let r = isNaN(n) ? Hc(i, 2) ?? 0 : n;
              if (r) {
                a.strokeWidth = r;
                t();
              } else if (['x', 'y', 'l', 'r', 't', 'b'].includes(i)) {
                let t = () => {
                  if (classParts.length === 2) return 1;
                  let t = classParts.length - 1;
                  let i = classParts[t];
                  let n = Number(i);
                  return isNaN(n) ? Hc(i, 2) ?? 0 : n;
                };
                switch (i) {
                  case 'x':
                    l.left = t();
                    l.right = t();
                    break;
                  case 'y':
                    l.top = t();
                    l.bottom = t();
                    break;
                  case 'l':
                    l.left = t();
                    break;
                  case 'r':
                    l.right = t();
                    break;
                  case 't':
                    l.top = t();
                    break;
                  case 'b':
                    l.bottom = t();
                }
              } else {
                let t = c1(classParts);
                if (t) {
                  let e = typeof t == 'string' ? QW(t) : typeof t == 'object' && 'r' in t ? t : null;
                  e && (a.stroke = [{
                    type: 'solid',
                    color: e,
                    opacity: e.a
                  }]);
                }
              }
            }
          } else {
            a.strokeWidth = 1;
            t();
          }
        }
      }
      Object.values(l).some(e => e > 0) && (a.strokeWidth = l);
      return a;
    }(e));
    let {
      stroke,
      strokeDashPattern,
      strokeAlign,
      strokeWidth,
      strokeCap
    } = r;
    let u = strokeAlign?.toUpperCase();
    let p = strokeCap?.toUpperCase();
    let {
      paints,
      imageGenerationRequests
    } = stroke ? tn({
      prop: stroke,
      options: e5(t),
      context: i,
      element: n
    }) : {
      paints: [],
      imageGenerationRequests: new Map()
    };
    if (paints.length === 0) {
      return {
        props: {
          strokePaints: {
            data: [],
            blobs: []
          },
          dashPattern: strokeDashPattern
        }
      };
    }
    let h = {};
    let m = {};
    if (h.strokePaints = {
      data: paints,
      blobs: []
    }, h.strokeAlign = u, h.strokeCap = p, h.dashPattern = strokeDashPattern, Bj(strokeWidth)) {
      let e = i.jsxExpressionContainerToVariableAlias(strokeWidth, n);
      m.strokeTopWeight = e;
      m.strokeBottomWeight = e;
      m.strokeLeftWeight = e;
      m.strokeRightWeight = e;
    } else {
      typeof strokeWidth == 'object' ? (h.borderStrokeWeightsIndependent = !0, typeof strokeWidth.top == 'number' ? h.borderTopWeight = strokeWidth.top : Bj(strokeWidth.top) && (m.strokeTopWeight = i.jsxExpressionContainerToVariableAlias(strokeWidth.top, n)), typeof strokeWidth.bottom == 'number' ? h.borderBottomWeight = strokeWidth.bottom : Bj(strokeWidth.bottom) && (m.strokeBottomWeight = i.jsxExpressionContainerToVariableAlias(strokeWidth.bottom, n)), typeof strokeWidth.left == 'number' ? h.borderLeftWeight = strokeWidth.left : Bj(strokeWidth.left) && (m.strokeLeftWeight = i.jsxExpressionContainerToVariableAlias(strokeWidth.left, n)), typeof strokeWidth.right == 'number' ? h.borderRightWeight = strokeWidth.right : Bj(strokeWidth.right) && (m.strokeRightWeight = i.jsxExpressionContainerToVariableAlias(strokeWidth.right, n))) : h.strokeWeight = strokeWidth;
    }
    return {
      props: Object.keys(m).length > 0 ? {
        ...h,
        boundVariables: m
      } : h,
      deserializeMetadata: {
        generationRequests: {
          stroke: [...imageGenerationRequests.entries()].map(([e, t]) => ({
            paintIndex: e,
            caption: t
          }))
        }
      }
    };
  }
});
let tI = _$$z.object({
  type: _$$z.literal('drop-shadow'),
  color: _6,
  offset: _$$z.object({
    x: _$$z.number().or(M1),
    y: _$$z.number().or(M1)
  }),
  blur: _$$z.number().or(M1),
  blendMode: U3.optional(),
  spread: _$$z.number().or(M1).optional(),
  visible: _$$z.boolean().optional(),
  showShadowBehindNode: _$$z.boolean().optional()
}).describe('@name(DropShadowEffect)');
let tE = _$$z.object({
  type: _$$z.literal('inner-shadow'),
  color: _6,
  offset: _$$z.object({
    x: _$$z.number().or(M1),
    y: _$$z.number().or(M1)
  }),
  blur: _$$z.number().or(M1),
  blendMode: U3.optional(),
  spread: _$$z.number().or(M1).optional(),
  visible: _$$z.boolean().optional()
}).describe('@name(InnerShadowEffect)');
let tN = _$$z.object({
  type: _$$z.union([_$$z.literal('layer-blur'), _$$z.literal('background-blur')]),
  blur: _$$z.number().or(M1),
  visible: _$$z.boolean().optional()
}).describe('@name(BlurEffect)');
let tv = _$$z.union([tI, tE, tN]);
function tO(e, t, i) {
  let n = _$$nl(e.blendMode);
  n === 'normal' && (n = void 0);
  let r = t.includeVariables ? i.variableDataToJSXExpressionContainer(e.colorVar) : void 0;
  let o = t.includeVariables ? i.variableDataToJSXExpressionContainer(e.radiusVar) : void 0;
  let a = t.includeVariables ? i.variableDataToJSXExpressionContainer(e.spreadVar) : void 0;
  let l = t.includeVariables ? i.variableDataToJSXExpressionContainer(e.xVar) : void 0;
  let s = t.includeVariables ? i.variableDataToJSXExpressionContainer(e.yVar) : void 0;
  switch (e.type) {
    case 'DROP_SHADOW':
      if (!e.color || !e.offset || void 0 === e.radius) return;
      let d = {
        type: 'drop-shadow',
        color: r ?? si(e.color),
        offset: {
          x: l ?? e.offset.x,
          y: s ?? e.offset.y
        },
        blur: o ?? e.radius
      };
      n && (d.blendMode = n);
      (e.spread || a) && (d.spread = a ?? e.spread);
      e.visible || (d.visible = !1);
      e.showShadowBehindNode && (d.showShadowBehindNode = !0);
      return d;
    case 'INNER_SHADOW':
      if (!e.color || !e.offset || void 0 === e.radius) return;
      let u = {
        type: 'inner-shadow',
        color: r ?? si(e.color),
        offset: {
          x: l ?? e.offset.x,
          y: s ?? e.offset.y
        },
        blur: o ?? e.radius
      };
      n && (u.blendMode = n);
      (e.spread || a) && (u.spread = a ?? e.spread);
      e.visible || (u.visible = !1);
      return u;
    case 'FOREGROUND_BLUR':
      if (!e.radius && !o) return;
      let p = {
        type: 'layer-blur',
        blur: o ?? e.radius
      };
      e.visible || (p.visible = !1);
      return p;
    case 'BACKGROUND_BLUR':
      if (!e.radius && !o) return;
      let c = {
        type: 'background-blur',
        blur: o ?? e.radius
      };
      e.visible || (c.visible = !1);
      return c;
    default:
  }
}
function tA(e, t, i) {
  let n;
  let r = 'color' in e && Bj(e.color) ? t.jsxExpressionContainerToVariableData(e.color, i) : void 0;
  let o = 'blur' in e && Bj(e.blur) ? t.jsxExpressionContainerToVariableData(e.blur, i) : void 0;
  let a = 'spread' in e && Bj(e.spread) ? t.jsxExpressionContainerToVariableData(e.spread, i) : void 0;
  let l = 'offset' in e && Bj(e.offset.x) ? t.jsxExpressionContainerToVariableData(e.offset.x, i) : void 0;
  let s = 'offset' in e && Bj(e.offset.y) ? t.jsxExpressionContainerToVariableData(e.offset.y, i) : void 0;
  switch (e.type) {
    case 'drop-shadow':
      n = {
        type: 'DROP_SHADOW',
        offset: {
          x: Bj(e.offset.x) ? 0 : e.offset.x,
          y: Bj(e.offset.y) ? 0 : e.offset.y
        },
        blendMode: hA(e.blendMode),
        visible: e.visible ?? !0,
        showShadowBehindNode: e.showShadowBehindNode ?? !1
      };
      r ? n.colorVar = r : n.color = typeof e.color == 'string' ? QW(e.color) ?? {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      } : Bj(e.color) ? {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      } : e.color;
      o ? n.radiusVar = o : n.radius = Bj(e.blur) ? 0 : e.blur;
      a ? n.spreadVar = a : n.spread = Bj(e.spread) ? 0 : e.spread ?? 0;
      l && (n.xVar = l);
      s && (n.yVar = s);
      break;
    case 'inner-shadow':
      n = {
        type: 'INNER_SHADOW',
        offset: {
          x: Bj(e.offset.x) ? 0 : e.offset.x,
          y: Bj(e.offset.y) ? 0 : e.offset.y
        },
        blendMode: hA(e.blendMode),
        visible: e.visible ?? !0
      };
      r ? n.colorVar = r : n.color = typeof e.color == 'string' ? QW(e.color) ?? {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      } : Bj(e.color) ? {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      } : e.color;
      o ? n.radiusVar = o : n.radius = Bj(e.blur) ? 0 : e.blur;
      a ? n.spreadVar = a : n.spread = Bj(e.spread) ? 0 : e.spread ?? 0;
      l && (n.xVar = l);
      s && (n.yVar = s);
      break;
    case 'layer-blur':
      n = {
        type: 'FOREGROUND_BLUR',
        visible: e.visible ?? !0
      };
      o ? n.radiusVar = o : n.radius = Bj(e.blur) ? 0 : e.blur;
      break;
    case 'background-blur':
      n = {
        type: 'BACKGROUND_BLUR',
        visible: e.visible ?? !0
      };
      o ? n.radiusVar = o : n.radius = Bj(e.blur) ? 0 : e.blur;
  }
  return n;
}
let tC = _$$z.object({
  effect: tv.or(_$$z.array(tv)).optional()
});
function tw(e, t, i) {
  if (e.effects && e.effects.length !== 0) {
    if (t.includeStyles && e.inheritedEffectStyle) {
      let t = e.sceneGraph.getStyleNodeByRef(e.inheritedEffectStyle);
      if (t) {
        return {
          spreadAttribute: i.styleToJSXSpreadAttribute(t)
        };
      }
    }
    if (e.effects.length === 1) {
      let n = tO(e.effects[0], {
        includeVariables: t.includeVariables
      }, i);
      if (n) {
        return {
          effect: n
        };
      }
    }
    return {
      effect: e.effects.map(e => tO(e, {
        includeVariables: t.includeVariables
      }, i)).filter(e6)
    };
  }
}
function tR({
  params: e,
  context: t,
  elem: i,
  styles: n
}) {
  if (!e.effect) return;
  let r = n.find(e => e.styleType === 'EFFECT');
  return r ? {
    props: {
      inheritedEffectStyle: {
        key: r.styleKeyForPublish,
        version: r.getStyleVersion()
      }
    }
  } : Array.isArray(e.effect) ? {
    props: {
      effects: e.effect.map(e => tA(e, t, i)).filter(e6)
    }
  } : {
    props: {
      effects: [tA(e.effect, t, i)]
    }
  };
}
let tP = ei({
  name: 'Effects',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => tC,
  defaults: () => ({
    effect: []
  }),
  serialize: (e, t, i) => tw(e, t, i),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => t.includes('effect-data') ? tw(e, i, n) : {},
  deserialize: tR,
  deserializeOverrides: tR
});
let tk = _$$z.object({
  mask: _$$z.boolean().optional().describe('When set to true, the node will mask its subsequent siblings.')
});
let tj = ei({
  name: 'Mask',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => tk,
  defaults: () => ({
    mask: !1
  }),
  serialize: ({
    mask: e
  }) => ({
    mask: e
  }),
  deserialize: ({
    params: {
      mask: e
    }
  }) => {
    if (void 0 !== e) {
      return {
        props: {
          mask: e
        }
      };
    }
  }
});
let tL = _$$z.object({
  opacity: _$$z.number().or(M1).optional()
});
function tD(e, t, i) {
  let {
    opacity
  } = e;
  if (typeof opacity == 'number') {
    return {
      opacity: i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.opacity : void 0) ?? opacity
    };
  }
}
function tV({
  params: e,
  context: t,
  elem: i
}) {
  let {
    opacity
  } = e;
  let r = {};
  let o = {};
  typeof opacity == 'number' ? r.opacity = opacity : Bj(opacity) && (o.opacity = t.jsxExpressionContainerToVariableAlias(opacity, i));
  return {
    props: Object.keys(o).length > 0 ? {
      ...r,
      boundVariables: o
    } : r
  };
}
let tM = ei({
  name: 'Opacity',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => tL,
  defaults: () => ({
    opacity: 1
  }),
  serialize: (e, t, i) => tD(e, t, i),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => t.includes('opacity') ? tD(e, i, n) : {},
  deserialize: tV,
  deserializeOverrides: tV
});
let t_ = _$$z.object({
  sharedPluginData: _$$z.record(_$$z.string(), _$$z.any()).optional()
});
let tF = ei({
  name: 'SharedPluginData',
  includeInTailwind: !0,
  fieldGroups: new Set([]),
  outputSchema: () => t_,
  defaults: () => ({}),
  serialize: () => ({}),
  deserialize: ({
    params: {
      sharedPluginData: e
    }
  }) => ({
    customProperties: {
      sharedPluginData: e
    }
  })
});
let tX = _$$z.object({
  overrideKey: _$$z.string().optional()
});
let tB = ei({
  name: 'OverrideKey',
  includeInTailwind: !0,
  fieldGroups: new Set([]),
  outputSchema: () => tX,
  defaults: () => ({}),
  serialize: (e, t) => e.isSymbolSublayer && e.overrideKey !== defaultSessionLocalIDString && e.overrideKey !== e.guid ? {
    overrideKey: e.overrideKey
  } : t.forcePopulateOverrideKey ? {
    overrideKey: e.guid
  } : {},
  deserialize: e => ({})
});
let tG = _$$z.object({
  sessionID: _$$z.number(),
  localID: _$$z.number()
});
let tJ = _$$z.object({
  x: _$$z.number(),
  y: _$$z.number()
});
let tH = _$$z.enum(['INSTANT_TRANSITION', 'DISSOLVE', 'FADE', 'SLIDE_FROM_LEFT', 'SLIDE_FROM_RIGHT', 'SLIDE_FROM_TOP', 'SLIDE_FROM_BOTTOM', 'PUSH_FROM_LEFT', 'PUSH_FROM_RIGHT', 'PUSH_FROM_TOP', 'PUSH_FROM_BOTTOM', 'MOVE_FROM_LEFT', 'MOVE_FROM_RIGHT', 'MOVE_FROM_TOP', 'MOVE_FROM_BOTTOM', 'SLIDE_OUT_TO_LEFT', 'SLIDE_OUT_TO_RIGHT', 'SLIDE_OUT_TO_TOP', 'SLIDE_OUT_TO_BOTTOM', 'MOVE_OUT_TO_LEFT', 'MOVE_OUT_TO_RIGHT', 'MOVE_OUT_TO_TOP', 'MOVE_OUT_TO_BOTTOM', 'MAGIC_MOVE', 'SMART_ANIMATE', 'SCROLL_ANIMATE']);
let t$ = _$$z.enum(['IN_CUBIC', 'OUT_CUBIC', 'INOUT_CUBIC', 'LINEAR', 'IN_BACK_CUBIC', 'OUT_BACK_CUBIC', 'INOUT_BACK_CUBIC', 'CUSTOM_CUBIC', 'SPRING', 'GENTLE_SPRING', 'CUSTOM_SPRING', 'SPRING_PRESET_ONE', 'SPRING_PRESET_TWO', 'SPRING_PRESET_THREE']);
let tU = _$$z.enum(['NAVIGATE', 'OVERLAY', 'SWAP', 'SWAP_STATE', 'SCROLL_TO']);
let tW = _$$z.enum(['PLAY', 'PAUSE', 'TOGGLE_PLAY_PAUSE', 'MUTE', 'UNMUTE', 'TOGGLE_MUTE_UNMUTE', 'SKIP_FORWARD', 'SKIP_BACKWARD', 'SKIP_TO', 'SET_PLAYBACK_RATE']);
let tK = _$$z.enum(['NONE', 'FADE', 'SLIDE_FROM_LEFT', 'SLIDE_FROM_RIGHT', 'SLIDE_FROM_TOP', 'SLIDE_FROM_BOTTOM']);
let tq = _$$z.enum(['IN', 'OUT']);
let tY = _$$z.object({
  guid: tG.optional()
});
let tZ = _$$z.object({
  guids: _$$z.array(tG).optional()
});
let tQ = _$$z.object({
  stablePathToNode: tZ.optional(),
  nodeField: _$$z.enum(['MISSING', 'COMPONENT_PROP_ASSIGNMENTS']).optional(),
  indexOrKey: _$$z.string().optional()
});
let t0 = _$$z.object({
  id: tY.optional(),
  nodeFieldAlias: tQ.optional()
});
let t1 = _$$z.lazy(() => _$$z.object({
  value: t2,
  dataType: _$$z.enum(['BOOLEAN', 'FLOAT', 'STRING', 'ALIAS', 'COLOR', 'EXPRESSION', 'MAP', 'SYMBOL_ID', 'FONT_STYLE', 'TEXT_DATA', 'INVALID', 'NODE_FIELD_ALIAS', 'CMS_ALIAS', 'PROP_REF', 'IMAGE', 'MANAGED_STRING_ALIAS', 'LINK', 'JS_RUNTIME_ALIAS', 'SLOT_CONTENT_ID', 'DATE']),
  resolvedDataType: _$$z.enum(['BOOLEAN', 'FLOAT', 'STRING', 'COLOR', 'MAP', 'SYMBOL_ID', 'FONT_STYLE', 'TEXT_DATA', 'IMAGE', 'LINK', 'JS_RUNTIME_ALIAS', 'SLOT_CONTENT_ID'])
}));
let t2 = _$$z.object({
  boolValue: _$$z.boolean().optional(),
  textValue: _$$z.string().optional(),
  floatValue: _$$z.number().optional(),
  alias: tY.optional(),
  colorValue: _$$z.object({
    r: _$$z.number(),
    g: _$$z.number(),
    b: _$$z.number(),
    a: _$$z.number()
  }).optional(),
  expressionValue: _$$z.object({
    expressionFunction: _$$z.enum(['ADDITION', 'SUBTRACTION', 'RESOLVE_VARIANT', 'MULTIPLY', 'DIVIDE', 'EQUALS', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'AND', 'OR', 'NOT', 'STRINGIFY', 'TERNARY', 'VAR_MODE_LOOKUP', 'NEGATE', 'IS_TRUTHY']),
    expressionArguments: _$$z.array(t1)
  }).optional(),
  mapValue: _$$z.object({
    values: _$$z.array(_$$z.object({
      key: _$$z.string(),
      value: t1
    }))
  }).optional(),
  symbolIdValue: tG.optional(),
  fontStyleValue: _$$z.object({
    asString: t1,
    asFloat: t1
  }).optional(),
  textDataValue: _$$z.object({
    characters: _$$z.string(),
    characterStyleIDs: _$$z.array(_$$z.number()),
    styleOverrideTable: _$$z.array(_$$z.any())
  }).optional(),
  nodeFieldAliasValue: tQ.optional(),
  cmsAliasValue: _$$z.object({
    collectionId: _$$z.string(),
    itemId: _$$z.string(),
    fieldId: _$$z.string()
  }).optional(),
  propRefValue: _$$z.object({
    defId: tG
  }).optional(),
  imageValue: _$$z.object({
    image: _$$z.any(),
    imageThumbnail: _$$z.any(),
    animatedImage: _$$z.any(),
    altText: _$$z.string(),
    originalImageHeight: _$$z.number(),
    originalImageWidth: _$$z.number(),
    animationFrame: _$$z.number()
  }).optional(),
  managedStringAliasValue: _$$z.object({
    managedStringId: _$$z.object({
      guid: tG.optional(),
      assetRef: _$$z.object({
        key: _$$z.string(),
        version: _$$z.string()
      }).optional()
    }),
    placeholderValues: _$$z.array(_$$z.object({
      key: _$$z.string(),
      value: _$$z.string()
    }))
  }).optional(),
  linkValue: _$$z.object({
    url: _$$z.string(),
    guid: tG.optional(),
    cmsTarget: _$$z.object({
      nodeId: tG,
      cmsItemId: _$$z.string(),
      fieldSchemaId: _$$z.string()
    }).optional(),
    openInNewTab: _$$z.boolean().optional()
  }).optional(),
  jsRuntimeAliasValue: _$$z.object({
    lookupKey: _$$z.string()
  }).optional(),
  slotContentIdValue: _$$z.object({
    guid: tG
  }).optional()
});
let t8 = _$$z.object({
  actions: _$$z.array(_$$z.lazy(() => is)),
  condition: t1.optional()
});
let t6 = _$$z.object({
  guid: tG.optional(),
  assetRef: _$$z.object({
    key: _$$z.string(),
    version: _$$z.string()
  }).optional()
});
let t4 = _$$z.object({
  nodeId: tG,
  cmsItemId: _$$z.string(),
  fieldSchemaId: _$$z.string()
});
let t5 = _$$z.object({
  opacity: _$$z.number(),
  transform: _$$z.object({
    m00: _$$z.number(),
    m01: _$$z.number(),
    m02: _$$z.number(),
    m10: _$$z.number(),
    m11: _$$z.number(),
    m12: _$$z.number()
  })
});
let t3 = _$$z.object({
  connectionType: _$$z.literal('URL'),
  connectionURL: _$$z.string(),
  openUrlInNewTab: _$$z.boolean().optional(),
  linkParam: t1.optional(),
  cmsTarget: t4.optional()
});
let t9 = _$$z.object({
  connectionType: _$$z.literal('BACK')
});
let t7 = _$$z.object({
  connectionType: _$$z.literal('CLOSE')
});
let ie = _$$z.object({
  connectionType: _$$z.literal('SET_VARIABLE'),
  targetVariable: t0,
  targetVariableData: t1
});
let it = _$$z.object({
  connectionType: _$$z.literal('UPDATE_MEDIA_RUNTIME'),
  mediaAction: tW,
  transitionResetVideoPosition: _$$z.boolean().optional(),
  mediaSkipToTime: _$$z.number().optional(),
  mediaSkipByAmount: _$$z.number().optional(),
  mediaPlaybackRate: _$$z.number().optional()
});
let ii = _$$z.object({
  connectionType: _$$z.literal('CONDITIONAL'),
  conditionalActions: _$$z.array(t8)
});
let ir = _$$z.object({
  connectionType: _$$z.literal('SET_VARIABLE_MODE'),
  targetVariableSetID: t6,
  targetVariableModeID: tG,
  targetVariableSetKey: _$$z.string().optional()
});
let io = _$$z.object({
  connectionType: _$$z.literal('OBJECT_ANIMATION'),
  animationType: tK,
  animationPhase: tq,
  animationState: t5
});
let ia = _$$z.object({
  connectionType: _$$z.enum(['INTERNAL_NODE']),
  navigationType: tU.optional(),
  transitionNodeID: _$$z.string().optional(),
  transitionType: tH.optional(),
  transitionDuration: _$$z.number().optional(),
  easingType: t$.optional(),
  transitionShouldSmartAnimate: _$$z.boolean().optional(),
  overlayRelativePosition: tJ.optional(),
  transitionPreserveScroll: _$$z.boolean().optional(),
  easingFunction: _$$z.array(_$$z.number()).optional(),
  extraScrollOffset: tJ.optional(),
  transitionResetScrollPosition: _$$z.boolean().optional(),
  transitionResetInteractiveComponents: _$$z.boolean().optional()
});
let il = _$$z.object({
  connectionType: _$$z.literal('NONE')
});
let is = _$$z.lazy(() => _$$z.discriminatedUnion('connectionType', [il, ia, t3, t9, t7, ie, it, ii, ir, io]));
let id = _$$z.object({
  sessionID: _$$z.number(),
  localID: _$$z.number()
});
let iu = _$$z.enum(['ON_CLICK', 'AFTER_TIMEOUT', 'MOUSE_IN', 'MOUSE_OUT', 'ON_HOVER', 'MOUSE_DOWN', 'MOUSE_UP', 'ON_PRESS', 'NONE', 'DRAG', 'ON_KEY_DOWN', 'ON_VOICE', 'ON_MEDIA_HIT', 'ON_MEDIA_END', 'MOUSE_ENTER', 'MOUSE_LEAVE']);
let ip = _$$z.enum(['KEYBOARD', 'UNKNOWN_CONTROLLER', 'XBOX_ONE', 'PS4', 'SWITCH_PRO']);
let ic = _$$z.object({
  keyCodes: _$$z.array(_$$z.number()).optional(),
  triggerDevice: ip.optional()
});
let ih = _$$z.object({
  guid: id
});
let im = _$$z.object({
  stablePathToNode: _$$z.array(id),
  nodeField: _$$z.enum(['MISSING', 'COMPONENT_PROP_ASSIGNMENTS']),
  indexOrKey: _$$z.string()
});
let ig = _$$z.lazy(() => _$$z.object({
  value: iy,
  dataType: _$$z.enum(['BOOLEAN', 'FLOAT', 'STRING', 'ALIAS', 'COLOR', 'EXPRESSION', 'MAP', 'SYMBOL_ID', 'FONT_STYLE', 'TEXT_DATA', 'INVALID', 'NODE_FIELD_ALIAS', 'CMS_ALIAS', 'PROP_REF', 'IMAGE', 'MANAGED_STRING_ALIAS', 'LINK', 'JS_RUNTIME_ALIAS', 'SLOT_CONTENT_ID', 'DATE']),
  resolvedDataType: _$$z.enum(['BOOLEAN', 'FLOAT', 'STRING', 'COLOR', 'MAP', 'SYMBOL_ID', 'FONT_STYLE', 'TEXT_DATA', 'IMAGE', 'LINK', 'JS_RUNTIME_ALIAS', 'SLOT_CONTENT_ID'])
}));
let iy = _$$z.object({
  boolValue: _$$z.boolean().optional(),
  textValue: _$$z.string().optional(),
  floatValue: _$$z.number().optional(),
  alias: ih.optional(),
  colorValue: _$$z.object({
    r: _$$z.number(),
    g: _$$z.number(),
    b: _$$z.number(),
    a: _$$z.number()
  }).optional(),
  expressionValue: _$$z.object({
    expressionFunction: _$$z.enum(['ADDITION', 'SUBTRACTION', 'RESOLVE_VARIANT', 'MULTIPLY', 'DIVIDE', 'EQUALS', 'NOT_EQUAL', 'LESS_THAN', 'LESS_THAN_OR_EQUAL', 'GREATER_THAN', 'GREATER_THAN_OR_EQUAL', 'AND', 'OR', 'NOT', 'STRINGIFY', 'TERNARY', 'VAR_MODE_LOOKUP', 'NEGATE', 'IS_TRUTHY']),
    expressionArguments: _$$z.array(ig)
  }).optional(),
  mapValue: _$$z.object({
    values: _$$z.array(_$$z.object({
      key: _$$z.string(),
      value: ig
    }))
  }).optional(),
  symbolIdValue: id.optional(),
  fontStyleValue: _$$z.object({
    asString: ig,
    asFloat: ig
  }).optional(),
  textDataValue: _$$z.object({
    characters: _$$z.string(),
    characterStyleIDs: _$$z.array(_$$z.number()),
    styleOverrideTable: _$$z.array(_$$z.any())
  }).optional(),
  nodeFieldAliasValue: im.optional(),
  cmsAliasValue: _$$z.object({
    collectionId: _$$z.string(),
    itemId: _$$z.string(),
    fieldId: _$$z.string()
  }).optional(),
  propRefValue: _$$z.object({
    defId: id
  }).optional(),
  imageValue: _$$z.object({
    image: _$$z.any(),
    imageThumbnail: _$$z.any(),
    animatedImage: _$$z.any(),
    altText: _$$z.string(),
    originalImageHeight: _$$z.number(),
    originalImageWidth: _$$z.number(),
    animationFrame: _$$z.number()
  }).optional(),
  managedStringAliasValue: _$$z.object({
    managedStringId: _$$z.object({
      guid: id.optional(),
      assetRef: _$$z.object({
        key: _$$z.string(),
        version: _$$z.string()
      }).optional()
    }),
    placeholderValues: _$$z.array(_$$z.object({
      key: _$$z.string(),
      value: _$$z.string()
    }))
  }).optional(),
  linkValue: _$$z.object({
    url: _$$z.string(),
    guid: id.optional(),
    cmsTarget: _$$z.object({
      nodeId: id,
      cmsItemId: _$$z.string(),
      fieldSchemaId: _$$z.string()
    }).optional(),
    openInNewTab: _$$z.boolean().optional()
  }).optional(),
  jsRuntimeAliasValue: _$$z.object({
    lookupKey: _$$z.string()
  }).optional(),
  slotContentIdValue: _$$z.object({
    guid: id
  }).optional()
});
let ib = _$$z.object({
  interactionType: iu
});
let iS = ib.extend({
  interactionType: _$$z.literal('ON_VOICE'),
  voiceEventPhrase: _$$z.string().optional()
});
let iT = ib.extend({
  interactionType: _$$z.literal('ON_KEY_DOWN'),
  keyTrigger: ic.optional()
});
let iz = ib.extend({
  interactionType: _$$z.literal('AFTER_TIMEOUT'),
  transitionTimeout: _$$z.number().optional()
});
let ix = ib.extend({
  interactionType: _$$z.literal('ON_MEDIA_HIT'),
  mediaHitTime: _$$z.number().optional()
});
let iI = ib.extend({
  interactionType: _$$z.literal('ON_MEDIA_END'),
  mediaHitTime: _$$z.number().optional()
});
let iE = ib.extend({
  interactionType: _$$z.enum(['ON_CLICK', 'MOUSE_IN', 'MOUSE_OUT', 'ON_HOVER', 'MOUSE_DOWN', 'MOUSE_UP', 'ON_PRESS', 'NONE', 'DRAG', 'MOUSE_ENTER', 'MOUSE_LEAVE'])
});
let iN = _$$z.discriminatedUnion('interactionType', [iS, iT, iz, ix, iI, iE]);
let iv = _$$z.object({
  id: _$$z.string(),
  event: _$$z.custom().optional(),
  actions: _$$z.array(_$$z.custom()),
  isDeleted: _$$z.boolean().optional(),
  stateManagementVersion: _$$z.number().optional()
});
function iO(e) {
  let t = {
    ...e
  };
  return e.connectionType === 'INTERNAL_NODE' ? {
    ...t,
    transitionNodeID: parseSessionLocalID(e.transitionNodeID) ?? void 0
  } : e.connectionType === 'SET_VARIABLE' ? {
    ...t,
    targetVariable: e.targetVariable,
    targetVariableData: e.targetVariableData
  } : e.connectionType === 'CONDITIONAL' ? {
    ...t,
    conditionalActions: e.conditionalActions?.map(e => ({
      actions: e.actions.map(iO),
      condition: e.condition
    }))
  } : t;
}
function iA(e) {
  return {
    id: parseSessionLocalID(e.id) ?? void 0,
    event: e.event ? function (e) {
      let t = {
        interactionType: e.interactionType
      };
      return e.interactionType === 'ON_MEDIA_HIT' ? {
        ...t,
        mediaHitTime: e.mediaHitTime
      } : e.interactionType === 'ON_VOICE' ? {
        ...t,
        voiceEventPhrase: e.voiceEventPhrase
      } : e.interactionType === 'ON_KEY_DOWN' ? {
        ...t,
        keyTrigger: e.keyTrigger
      } : e.interactionType === 'AFTER_TIMEOUT' ? {
        ...t,
        transitionTimeout: e.transitionTimeout
      } : t;
    }(e.event) : void 0,
    actions: e.actions.map(iO)
  };
}
let iC = _$$z.object({
  prototypeInteractions: _$$z.array(iv).optional()
});
function iw({
  params: e
}) {
  if (e.prototypeInteractions && e.prototypeInteractions.length !== 0) {
    return {
      props: {
        prototypeInteractions: e.prototypeInteractions.map(iA)
      }
    };
  }
}
let iR = ei({
  name: 'PrototypeInteractions',
  includeInTailwind: !1,
  fieldGroups: new Set(['interactivity']),
  outputSchema: () => iC,
  defaults: () => ({
    prototypeInteractions: []
  }),
  serialize: (e, t, i) => {
    let n = e.prototypeInteractions.map(t => function (e, t, i) {
      return {
        id: sessionLocalIDToString(e.id) ?? '-1:-1',
        event: e.event ? function (e, t, i) {
          let n = {
            interactionType: e.interactionType ?? 'NONE',
            voiceEventPhrase: e.voiceEventPhrase ?? void 0,
            keyTrigger: e.keyTrigger ?? void 0,
            transitionTimeout: e.transitionTimeout ?? void 0,
            mediaHitTime: e.mediaHitTime ?? void 0
          };
          let r = iN.safeParse(n);
          if (r.success) return r.data;
          i.trackSerializeIssue({
            message: `Failed to parse prototype event ${e.interactionType}`,
            context: {
              guid: t.guid
            }
          });
        }(e.event, t, i) : void 0,
        actions: (e.actions ?? []).map(e => function e(t, i, n) {
          let r = {
            transitionType: t.transitionType ?? void 0,
            navigationType: t.navigationType ?? void 0,
            transitionDuration: t.transitionDuration ?? void 0,
            easingType: t.easingType ?? void 0,
            transitionShouldSmartAnimate: t.transitionShouldSmartAnimate ?? void 0,
            connectionType: t.connectionType ?? void 0,
            overlayRelativePosition: t.overlayRelativePosition ?? void 0,
            targetVariable: t.targetVariable ?? void 0,
            targetVariableData: t.targetVariableData ?? void 0,
            mediaAction: t.mediaAction ?? void 0,
            transitionResetVideoPosition: t.transitionResetVideoPosition ?? void 0,
            mediaSkipToTime: t.mediaSkipToTime ?? void 0,
            mediaSkipByAmount: t.mediaSkipByAmount ?? void 0,
            mediaPlaybackRate: t.mediaPlaybackRate ?? void 0,
            connectionURL: t.connectionURL ?? void 0,
            openUrlInNewTab: t.openUrlInNewTab ?? void 0,
            linkParam: t.linkParam ?? void 0,
            cmsTarget: t.cmsTarget ?? void 0,
            transitionNodeID: t.transitionNodeID ? `${t.transitionNodeID?.sessionID ?? -1}:${t.transitionNodeID?.localID ?? -1}` : void 0,
            conditionalActions: t.conditionalActions?.map(t => ({
              condition: t.condition,
              actions: t.actions?.map(t => e(t, i, n)).filter(Boolean) ?? []
            })),
            targetVariableSetID: t.targetVariableSetID ?? void 0,
            targetVariableModeID: t.targetVariableModeID ?? void 0,
            targetVariableSetKey: t.targetVariableSetKey ?? void 0,
            animationType: t.animationType ?? void 0,
            animationPhase: t.animationPhase ?? void 0,
            animationState: t.animationState ?? void 0,
            transitionPreserveScroll: t.transitionPreserveScroll ?? void 0,
            easingFunction: t.easingFunction ?? void 0,
            extraScrollOffset: t.extraScrollOffset ?? void 0,
            transitionResetScrollPosition: t.transitionResetScrollPosition ?? void 0,
            transitionResetInteractiveComponents: t.transitionResetInteractiveComponents ?? void 0
          };
          let o = is.safeParse(r);
          return o.success ? o.data : (n.trackSerializeIssue({
            message: `Failed to parse prototype action ${t.connectionType}`,
            context: {
              guid: i.guid
            }
          }), null);
        }(e, t, i)).filter(e => e !== null)
      };
    }(t, e, i));
    return n.length === 0 ? {} : {
      prototypeInteractions: n
    };
  },
  serializeOverrides: () => ({}),
  deserialize: iw,
  deserializeOverrides: iw
});
let ij = dL.describe('@name(TransformMatrix)');
let iL = new Set();
let iD = new Set();
let iV = _$$f(fg, (e, t) => e === rw ? (iL.add(t.join('/')), _$$z.string()) : e === bG ? (iD.add(t.join('/')), ij) : e);
function iM(e, t, i) {
  let [n, ...r] = t;
  return e && void 0 !== n && void 0 !== e[n] ? n === '*' ? Array.isArray(e) ? e.map(e => iM(e, r, i)) : e : r.length === 0 ? {
    ...e,
    [n]: i(e[n])
  } : {
    ...e,
    [n]: iM(e[n], r, i)
  } : e;
}
let i_ = ei({
  name: 'Behavior',
  includeInTailwind: !1,
  fieldGroups: new Set(['interactivity']),
  outputSchema: () => iV,
  defaults: () => ({
    behaviors: {}
  }),
  serialize(e) {
    let t = fg.safeParse(e.behaviors);
    if (!t || !t.success) return;
    let {
      data
    } = t;
    if (data !== null) {
      for (let e of iL) i = iM(data, e.split('/'), sessionLocalIDToString);
      for (let e of iD) i = iM(data, e.split('/'), toArray2x3);
      return data;
    }
  },
  deserialize({
    params: e,
    context: t,
    elem: i
  }) {
    let n = iV.safeParse(e);
    if (!n.success) {
      t.trackDeserializeIssue({
        message: 'Failed to parse behaviors',
        context: {
          jsxElement: i,
          parseError: n.error.toString()
        }
      });
      return;
    }
    let {
      data
    } = n;
    if (void 0 === data || Object.keys(data).length === 0) return;
    let o = data;
    for (let e of iL) o = iM(o, e.split('/'), parseSessionLocalID);
    for (let e of iD) o = iM(o, e.split('/'), toMatrix2x3);
    return {
      props: {
        behaviors: o
      }
    };
  }
});
let iX = _$$z.object({
  transformMatrix: _$$z.object({
    m00: _$$z.number(),
    m01: _$$z.number(),
    m10: _$$z.number(),
    m11: _$$z.number()
  }).optional().describe('A 2D transformation matrix that represents the node\'s scale and skew, after all rotation has been removed. It does not include translation components.')
});
let iB = ei({
  name: 'TransformMatrix',
  includeInTailwind: !1,
  fieldGroups: new Set(['layout']),
  outputSchema: () => iX,
  defaults: () => ({}),
  serialize: ({
    relativeTransform: e
  }) => {
    let {
      m00,
      m01,
      m10,
      m11
    } = _$$n(e, 0);
    return (t = Math.abs(m00), r = Math.abs(m11), Math.abs(m01) < 0.001 && Math.abs(m10) < 0.001) ? {} : {
      transformMatrix: {
        m00,
        m01,
        m10,
        m11
      }
    };
  },
  deserialize: ({
    params: e
  }) => {
    if (!('transformMatrix' in e) || void 0 === e.transformMatrix) return;
    let {
      transformMatrix
    } = e;
    return {
      customProperties: {
        transformMatrix
      }
    };
  }
});
function iG(e) {
  let t = [tF];
  e.includeIDs ? (t.push(er), t.push(tB)) : e.forcePopulateOverrideKey && t.push(tB);
  e.includeNames && t.push(eg);
  return t;
}
function iJ(e) {
  let t = iG(e);
  t.push(e$, e_, eW, iB);
  return t;
}
function iH(e) {
  let t = iJ(e);
  t.push(td, tx, tP, eQ, tg, tj, tM, iR, i_);
  return t;
}
let i$ = _$$z.object({
  data: _$$z.string().optional().describe('If specified, refers to an asset containing the vector data or a caption for vector generation')
});
function iU({
  guid: e,
  options: t
}) {
  return t.includeAssetGenerationRequests ? t.assetGenerationRequests?.find(t => t.type === 'vector' && t.guid === e) : void 0;
}
let iW = ei({
  name: 'VectorData',
  includeInTailwind: !0,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => i$,
  defaults: () => ({}),
  serialize: (e, t, i) => {
    if (t.excludeVectorData || t.inlineVectorData || !e.vectorDataInfo) return;
    let n = function (e) {
      let t = e.vectorDataInfo;
      let i = sha1Hex(t.blobs[t.data.vectorNetworkBlob].bytes);
      return `asset:${i.slice(0, 8)}`;
    }(e);
    let o = _$$V({
      type: 'VectorData',
      props: {},
      children: iK(e, t, i)
    });
    let a = i.getAssets()[n];
    let l = a?.nodeIds ?? [];
    let s = t.ignoreDeveloperFriendlyIds ? e.id : e.developerFriendlyId;
    return (i.trackAssetInfo(n, {
      type: 'vector',
      data: o,
      nodeIds: [...l, s]
    }), t.vectorPlaceholderAssetId) ? {
      data: `asset:${t.vectorPlaceholderAssetId}`
    } : {
      data: n
    };
  },
  deserialize: ({
    params: e,
    options: t,
    context: i
  }) => {
    if (t.excludeVectorData || t.inlineVectorData || !t.assetsByName) return {};
    let n = e.data;
    if (n && t.assetsByName[n]) {
      let e = t.assetsByName[n];
      if (e.type === 'vector') {
        let n = parseJSX(e.data)?.[0];
        if (n) {
          let {
            cornerRadius,
            vectorNetwork
          } = iq({
            element: n,
            options: t,
            context: i
          });
          return {
            props: {
              cornerRadiusOrMixed: cornerRadius
            },
            customProperties: {
              vectorNetwork
            }
          };
        }
      }
    }
    return {};
  }
});
function iK(e, t, i) {
  let n = Kx(e);
  let r = Hn(n);
  let o = e.cornerRadiusOrMixed;
  return r.map(n => {
    let r = n.data;
    if (t.tempExternalPathData) {
      let n = function (e) {
        let t = sha1HexFromString(e);
        return `asset:${t.slice(0, 8)}`;
      }(r);
      let o = i.getAssets()[n];
      let a = o?.nodeIds ?? [];
      let l = t.ignoreDeveloperFriendlyIds ? e.id : e.developerFriendlyId;
      i.trackAssetInfo(n, {
        type: 'vector-path',
        data: r,
        nodeIds: [...a, l]
      });
      r = n;
    }
    let a = {
      fillRule: n.windingRule.toLowerCase(),
      data: r
    };
    typeof o == 'number' && o !== 0 && (a.cornerRadius = o);
    return {
      type: 'Path',
      props: a,
      children: []
    };
  });
}
function iq({
  element: e,
  options: t,
  context: i
}) {
  let n;
  let r = e.children;
  let o = [];
  for (let a of r) {
    if (!_$$id(a)) {
      i.trackDeserializeIssue({
        message: 'Invalid vector child',
        context: {
          jsxElement: e
        },
        location: e.parsedLocations?.children ?? e.parsedLocations?.full
      });
      continue;
    }
    a.type === 'Path' && (typeof a.props.fillRule == 'string' || typeof a.props.data == 'string') && (typeof a.props.cornerRadius == 'number' && (n = a.props.cornerRadius), t.tempExternalPathData || o.push({
      windingRule: a.props.fillRule.toUpperCase(),
      data: a.props.data
    }));
  }
  return t.tempExternalPathData ? {
    cornerRadius: n,
    vectorNetwork: void 0
  } : {
    cornerRadius: n,
    vectorNetwork: VS(o)
  };
}
let iY = ei({
  name: 'CaptionedVectorData',
  includeInTailwind: !0,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => i$,
  defaults: () => ({}),
  serialize: (e, t) => {
    let i = iU({
      guid: e.guid,
      options: t
    });
    return i ? {
      data: `caption:${i.caption}`
    } : {};
  },
  deserialize: ({
    params: e,
    options: t
  }) => {
    if (!t.includeAssetGenerationRequests) return {};
    let i = e.data?.startsWith('caption:') ? e.data.slice(8) : void 0;
    return i ? {
      props: {},
      deserializeMetadata: {
        generationRequests: {
          vector: [{
            caption: i
          }]
        }
      }
    } : {};
  }
});
let iZ = {
  name: 'Frame',
  getJSXType: (e, t) => iU({
    guid: e.guid,
    options: t
  }) ? 'Vector' : e.type !== 'FRAME' || e.isGroup || t.flavor === 'flow' && (e.isStack || e.isGrid) ? void 0 : t.useDivTagsForFrames ? 'div' : 'Frame',
  fromJSXType(e, t) {
    if (e === 'Frame' || e === 'div' && t.useDivTagsForFrames || e === f && t.tempDeserializeComponentsAsFrames) return 'FRAME';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    e.flavor !== 'flow' && t.push(eR);
    t.push(eD);
    e.includeAssetGenerationRequests && t.push(iY);
    return t;
  },
  supportsChildren: () => 'nodes',
  getJSXChildren(e, t) {
    if (iU({
      guid: e.guid,
      options: t
    })) {
      return [];
    }
  },
  possibleTagNames: ['Frame']
};
let i0 = {
  name: 'Star',
  getJSXType(e) {
    if (e.type === 'STAR') return 'Star';
  },
  fromJSXType(e) {
    if (e === 'Star') return 'STAR';
  },
  getFieldSerializers: e => iH(e),
  supportsChildren: () => 'none',
  possibleTagNames: ['Star']
};
let i1 = {
  name: 'Document',
  getJSXType(e) {
    if (e.type === 'DOCUMENT') return 'Document';
  },
  fromJSXType(e) {
    if (e === 'Document') return 'DOCUMENT';
  },
  getFieldSerializers: () => [],
  supportsChildren: () => 'nodes',
  possibleTagNames: ['Document']
};
let i2 = {
  name: 'Page',
  getJSXType(e) {
    if (e.type === 'CANVAS') return 'Page';
  },
  fromJSXType(e) {
    if (e === 'Page') return 'CANVAS';
  },
  getFieldSerializers: e => iG(e),
  supportsChildren: () => 'nodes',
  possibleTagNames: ['Page']
};
let i8 = _$$z.enum(['union', 'intersect', 'subtract', 'xor']);
let i6 = _$$z.object({
  operation: i8.optional()
});
let i4 = ei({
  name: 'BooleanOperation',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => i6,
  defaults: () => ({}),
  serialize: ({
    booleanOperation: e
  }) => {
    if (typeof e == 'string') {
      return {
        operation: function (e) {
          switch (e) {
            case 'UNION':
              return 'union';
            case 'INTERSECT':
              return 'intersect';
            case 'SUBTRACT':
              return 'subtract';
            case 'XOR':
              return 'xor';
            default:
              throwTypeError(e);
          }
        }(e)
      };
    }
  },
  deserialize: ({
    params: {
      operation: e
    }
  }) => {
    if (e) {
      return {
        requiredProps: {
          booleanOperation: function (e) {
            switch (e) {
              case 'union':
                return 'UNION';
              case 'intersect':
                return 'INTERSECT';
              case 'subtract':
                return 'SUBTRACT';
              case 'xor':
                return 'XOR';
              default:
                throwTypeError(e);
            }
          }(e)
        }
      };
    }
  }
});
let i5 = {
  name: 'Default',
  getJSXType: (e, t) => iU({
    guid: e.guid,
    options: t
  }) ? 'Vector' : e.type === 'BOOLEAN_OPERATION' ? 'BooleanOperation' : void 0,
  fromJSXType(e) {
    if (e === 'BooleanOperation') return 'BOOLEAN_OPERATION';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(i4);
    e.includeAssetGenerationRequests && t.push(iY);
    return t;
  },
  supportsChildren: () => 'nodes',
  getJSXChildren(e, t) {
    if (iU({
      guid: e.guid,
      options: t
    })) {
      return [];
    }
  },
  possibleTagNames: ['BooleanOperation']
};
let i9 = ['fontName', 'fontSize', 'fontWeight', 'textCase', 'textDecoration', 'letterSpacing', 'lineHeight', 'hyperlink', 'listOptions', 'fills', 'fillStyleId', 'textStyleId', 'boundVariables'];
let i7 = ['UnorderedList', 'OrderedList', 'ListItem', 'Link', 'Span'];
function ne(e, t, i) {
  let n = {
    jsxType: 'Span',
    paintOptions: e5(t),
    includeVariables: t.includeVariables,
    includeStyles: t.includeStyles,
    scene: t.scene
  };
  let r = nr(e, t);
  let o = e.getRangeLineType(0, r.length - 1);
  let a = textStyleProperties.reduce((t, i) => {
    let n = e.getRangeBoundVariable(0, r.length - 1, i);
    n !== null && n !== 'mixed' && (t[i] = n);
    return t;
  }, {});
  let l = nu({
    fontName: e.fontName,
    fontSize: e.fontSize,
    fontWeight: e.fontWeightOrMixed !== 'mixed' ? e.fontWeightOrMixed : void 0,
    lineHeight: e.lineHeightOrMixed !== 'mixed' ? e.lineHeightOrMixed : void 0,
    letterSpacing: e.letterSpacing,
    textCase: e.textCase,
    fills: {
      data: e.fills,
      blobs: []
    },
    fillStyleId: e.inheritedFillStyle,
    textStyleId: e.inheritedTextStyle,
    textDecoration: e.textDecoration,
    hyperlink: e.hyperlink === 'mixed' ? null : e.hyperlink,
    listOptions: o === 'mixed' ? 'PLAIN' : o,
    boundVariables: a
  }, n, i);
  let s = e.getStyledTextSegments(t.tailwind ? i9.filter(e => e !== 'fillStyleId' && e !== 'textStyleId') : i9).reduce((e, t) => {
    if (e.length === 0) {
      e.push([t]);
    } else {
      let i = e[e.length - 1];
      let n = i[0];
      n?.listOptions === t.listOptions ? i.push(t) : e.push([t]);
    }
    return e;
  }, []);
  return s.map((r, o) => {
    let a = r[0];
    if (!a) return null;
    let d = a.listOptions;
    let u = o === s.length - 1;
    let p = t.assetGenerationRequests?.filter(t => t.type === 'textRange' && t.guid === e.guid);
    if (d === 'PLAIN') {
      let o = r[r.length - 1];
      o && !u && o.characters.endsWith('\n') && (o.characters = o.characters.slice(0, -1));
      return r.map(r => {
        let o = p?.find(e => e.rangeStart === r.start && e.rangeEnd === r.end);
        let a = nr(r, t);
        let s = nt(r, l, t, i, o);
        if (Object.keys(s).length === 0) return e.boundVariables.characters && t.includeVariables ? i.variableAliasToJSXExpressionContainer(e.boundVariables.characters) : a;
        let d = ni(s);
        let u = [];
        if (s.fillStyleId) {
          let t = e.sceneGraph.getStyleNodeByRef(s.fillStyleId);
          t && u.push(i.styleToJSXSpreadAttribute(t));
        }
        s.spreadAttribute && u.push(s.spreadAttribute);
        return {
          type: s.href ? 'Link' : 'Span',
          props: t.tailwind ? nc(s, r, n, !!t.tailwindOnly) : d,
          children: [a],
          spreadAttributes: u
        };
      });
    }
    return function (r, o, a) {
      let d = r[0];
      if (!d) return [];
      let u = d.listOptions;
      let p = r.length === 1;
      let c = function (e, t) {
        let i = e.map(e => e.characters.split('\n').map(t => ({
          ...e,
          characters: t
        })));
        let n = [];
        for (let [e, t] of i.entries()) {
          let r = i[e - 1];
          if (!r) {
            n.push(...t.map(e => [e]));
            continue;
          }
          if (r[r.length - 1]?.characters === '') {
            n.push(...t.map(e => [e]));
          } else {
            let e = n[n.length - 1];
            e && (e.push(t[0]), t.shift());
            n.push(...t.map(e => [e]));
          }
        }
        return n = n.map(e => e.filter(e => e.characters !== '')).filter((e, i) => e.length > 0 && e[0]?.characters !== '' || i === n.length - 1 && t);
      }(r, o).map(r => function ({
        line: t,
        listHasSameStyling: r,
        options: o,
        generationRequests: a
      }) {
        let s = t.map(t => {
          let s = nr(t, o);
          if (r) return s;
          let d = a?.find(e => e.rangeStart === t.start && e.rangeEnd === t.end);
          let u = nt(t, l, o, i, d);
          if (Object.keys(u).length === 0) return s;
          let p = ni(u);
          let c = [];
          if (u.fillStyleId) {
            let t = e.sceneGraph.getStyleNodeByRef(u.fillStyleId);
            t && c.push(i.styleToJSXSpreadAttribute(t));
          }
          u.spreadAttribute && c.push(u.spreadAttribute);
          return {
            type: u.href ? 'Link' : 'Span',
            props: o.tailwind ? nc(u, t, n, !!o.tailwindOnly) : p,
            children: [s],
            spreadAttributes: c
          };
        });
        return s.length === 1 && typeof s[0] == 'object' && s[0].type === 'Span' ? {
          type: 'ListItem',
          props: s[0].props,
          children: s[0].children
        } : {
          type: 'ListItem',
          props: {},
          children: s
        };
      }({
        line: r,
        listHasSameStyling: p,
        options: t,
        generationRequests: a
      }));
      if (!(s.length > 1) && !l.href) return c;
      {
        let r = {};
        let o = [];
        if (p) {
          let s = a?.find(e => e.rangeStart === d.start && e.rangeEnd === d.end);
          let u = nt(d, l, t, i, s);
          if (Object.keys(u).length > 0) {
            let a = ni(u);
            if (r = t.tailwind ? nc(u, d, n, !!t.tailwindOnly) : a, u.fillStyleId) {
              let t = e.sceneGraph.getStyleNodeByRef(u.fillStyleId);
              t && o.push(i.styleToJSXSpreadAttribute(t));
            }
            u.spreadAttribute && o.push(u.spreadAttribute);
          }
        }
        return r.href ? [{
          type: 'Link',
          props: r,
          children: [{
            type: u === 'UNORDERED_LIST' ? 'UnorderedList' : 'OrderedList',
            props: {},
            children: c
          }],
          spreadAttributes: o
        }] : [{
          type: u === 'UNORDERED_LIST' ? 'UnorderedList' : 'OrderedList',
          props: r,
          children: c,
          spreadAttributes: o
        }];
      }
    }(r, u, p);
  }).filter(e => e !== null).flat();
}
function nt(e, t, i, n, r) {
  let o = nu(e, {
    jsxType: 'Span',
    paintOptions: e5(i),
    includeVariables: i.includeVariables,
    includeStyles: i.includeStyles,
    scene: i.scene,
    generationRequest: r
  }, n);
  let a = {};
  for (let [e, i] of Object.entries(o)) deepEqual(t[e], i) || (a[e] = i);
  return a;
}
function ni(e) {
  let t = {};
  for (let [i, n] of Object.entries(e)) i === 'listOptions' || i === 'fillStyleId' || i === 'fill' && e.fillStyleId || i === 'spreadAttribute' || (t[i] = n);
  return t;
}
function nn({
  element: e,
  options: t,
  context: i,
  declarativeNode: n,
  offset: r = 0
}) {
  let o = [];
  for (let [a, l] of e.children.entries()) {
    if (typeof l == 'string') {
      o.push({
        start: r,
        end: r + l.length,
        characters: l,
        imageGenerationRequests: new Map(),
        style: {}
      });
      r += l.length;
      continue;
    }
    if (Bj(l)) continue;
    if (!i7.includes(l.type)) {
      i.trackDeserializeIssue({
        message: 'Unexpected child type',
        context: {
          jsxElement: e
        },
        location: l.parsedLocations?.full
      });
      continue;
    }
    let s = l.spreadAttributes?.map(e => i.jsxSpreadAttributeToStyle(e, l)).filter(e => void 0 !== e) ?? [];
    let d = l.children[0];
    if (l.type === 'UnorderedList' || l.type === 'OrderedList' || l.type === 'Link' && typeof d == 'object' && ['UnorderedList', 'OrderedList'].includes(d.type)) {
      let e = o[o.length - 1];
      e && (e.characters = `${e.characters}\n`, e.end += 1, r += 1);
    }
    let u = nn({
      element: l,
      options: t,
      context: i,
      declarativeNode: n,
      offset: r
    });
    let p = u[u.length - 1];
    let c = a === e.children.length - 1;
    if (l.type === 'UnorderedList' || l.type === 'OrderedList') {
      p && !c && (p.characters = `${p.characters}\n`, p.end += 1);
    } else if (l.type === 'ListItem') {
      p && !c && (p.characters = `${p.characters}\n`, p.end += 1);
    } else if (l.type === 'Link') {
      let e = l.children[l.children.length - 1];
      p && !c && typeof e == 'object' && ['UnorderedList', 'OrderedList'].includes(e.type) && (p.characters = `${p.characters}\n`, p.end += 1);
    } else if (l.type === 'Span' && (l.children.length !== 1 || typeof l.children[0] != 'string')) {
      i.trackDeserializeIssue({
        message: 'Unexpected span child',
        context: {
          jsxElement: e
        },
        location: l?.parsedLocations?.full ?? e.parsedLocations?.children ?? e.parsedLocations?.full
      });
      continue;
    }
    let f = l.props;
    let h = {
      jsxType: 'Span',
      paintOptions: e5(t),
      includeVariables: t.includeVariables,
      includeStyles: t.includeStyles,
      scene: t.scene
    };
    t.tailwind && (f = nf(l.props, h));
    let {
      textStyle,
      imageGenerationRequests
    } = nd({
      props: {
        fontFamily: f.fontWeight ? e.props?.fontFamily ?? n.textMetadata?.style?.fontName?.family ?? '' : '',
        ...f
      },
      options: h,
      context: i,
      styles: s,
      elem: l
    });
    o.push(...u.map(e => ({
      ...e,
      imageGenerationRequests: 'fills' in e.style ? e.imageGenerationRequests : imageGenerationRequests,
      style: {
        ...textStyle,
        ...e.style
      }
    })));
    let y = o[o.length - 1];
    y && (r = y.end);
  }
  switch (e.type) {
    case 'UnorderedList':
    case 'OrderedList':
      return o.map(t => ({
        ...t,
        style: {
          ...t.style,
          listOptions: e.type === 'UnorderedList' ? 'UNORDERED_LIST' : 'ORDERED_LIST'
        }
      }));
  }
  return o;
}
function nr(e, t) {
  return t.replaceIrregularWhitespace ? e.characters.replace(/\v/g, '\v').replace(/\f/g, '\f').replace(/\u00A0/g, ' ').replace(/\u0085/g, '\n').replace(/\u1680/g, ' ').replace(/\u180E/g, '').replace(/\uFEFF/g, '').replace(/\u2000/g, ' ').replace(/\u2001/g, ' ').replace(/\u2002/g, ' ').replace(/\u2003/g, ' ').replace(/\u2004/g, ' ').replace(/\u2005/g, ' ').replace(/\u2006/g, ' ').replace(/\u2007/g, ' ').replace(/\u2008/g, ' ').replace(/\u2009/g, ' ').replace(/\u200A/g, ' ').replace(/\u200B/g, '').replace(/\u2028/g, '\n').replace(/\u2029/g, '\n\n').replace(/\u202F/g, ' ').replace(/\u205F/g, ' ').replace(/\u3000/g, ' ') : e.characters;
}
let na = _$$z.object({
  fontFamily: _$$z.string().or(M1).optional().describe('Defaults to "Inter".'),
  fontSize: _$$z.number().or(M1).optional().describe('Font size in px. Defaults to 12.'),
  fontWeight: _$$z.number().or(M1).optional(),
  italic: _$$z.boolean().optional(),
  lineHeight: _$$z.union([_$$z.literal('auto'), _$$z.string(), _$$z.number(), M1]).optional().describe('Defaults to "auto", which is the font\'s default line height. Can also be set to a percentage of the font size like "100%", or a fixed line height in pixels like "20px", or a multiplier of the font size like 1.5.'),
  letterSpacing: _$$z.union([_$$z.string().describe('Eg. 100% or 20px'), _$$z.number().describe('Raw values will be automatically inferred as px units'), M1]).optional().describe('The spacing between individual characters. Defaults to "0%". Can be set to a percentage of the font size like "100%", or a fixed spacing in pixels like "20px".'),
  textCase: _$$z.union([_$$z.literal('original'), _$$z.literal('upper'), _$$z.literal('lower'), _$$z.literal('title'), _$$z.literal('small_caps'), _$$z.literal('small_caps_forced')]).optional(),
  textDecoration: _$$z.union([_$$z.literal('none'), _$$z.literal('underline'), _$$z.literal('strikethrough')]).optional(),
  href: _$$z.string().optional(),
  truncate: _$$z.boolean().or(_$$z.number()).optional().describe('Whether the text should truncate if it overflows the size of the node. Set to a number to truncate after a specific number of lines.'),
  fill: y4.optional()
});
let nl = zA.merge(na.pick({
  fontFamily: !0,
  letterSpacing: !0,
  textCase: !0,
  textDecoration: !0,
  truncate: !0,
  fill: !0
}));
let ns = ei({
  name: 'Font',
  includeInTailwind: !0,
  fieldGroups: new Set(['text']),
  outputSchema: e => {
    let t = na;
    e.tailwindOnly ? t = zA : e.tailwind && (t = nl);
    !e.includeAssetGenerationRequests && 'fill' in t.shape && (t = t.omit({
      fill: !0
    }).extend({
      fill: uw.optional()
    }));
    return t;
  },
  defaults: ({
    nodeType: e,
    options: t
  }) => e !== 'TEXT' && e !== 'STICKY' || t.tailwindOnly ? {} : e === 'STICKY' ? {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: '-1.1%',
    textCase: 'original',
    textDecoration: 'none',
    truncate: !1,
    italic: !1
  } : {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 'auto',
    letterSpacing: 0,
    textCase: 'original',
    textDecoration: 'none',
    truncate: !1,
    italic: !1
  },
  serialize: (e, t, i) => {
    let {
      type,
      fontName
    } = e = MT(e.type) ? e.textSublayer ?? e : e;
    if (type !== 'TEXT' || !fontName || fontName.family === '') return;
    let {
      defaultFlavorProps,
      serializationOptions,
      textStyle
    } = np(e, t, i);
    return t.tailwind ? nc(defaultFlavorProps, textStyle, serializationOptions, !!t.tailwindOnly) : defaultFlavorProps;
  },
  deserialize: ({
    params: e,
    options: t,
    context: i,
    styles: n,
    elem: r
  }) => {
    let o = e;
    let a = {
      jsxType: 'Text',
      paintOptions: e5(t),
      includeVariables: t.includeVariables,
      includeStyles: t.includeStyles,
      scene: t.scene
    };
    t.tailwind && (o = nf(e, a));
    let {
      textStyle,
      imageGenerationRequests
    } = nd({
      props: o,
      options: a,
      context: i,
      styles: n,
      elem: r
    });
    return {
      textMetadata: {
        style: textStyle
      },
      deserializeMetadata: {
        generationRequests: {
          fill: [...imageGenerationRequests.entries()].map(([e, t]) => ({
            paintIndex: e,
            caption: t
          }))
        }
      }
    };
  },
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i, n) => {
    let r = [...textStyleProperties, 'characters'].some(t => void 0 !== e.boundVariables[t]);
    if (t.includes('text-data') || r && i.includeVariables) {
      let r = ne(e, i, n);
      let {
        defaultFlavorProps
      } = np(e, i, n);
      let a = nh(t, defaultFlavorProps, i);
      if (r.length > 0) {
        return {
          text: {
            type: 'Text',
            props: a,
            children: r
          }
        };
      }
    }
    return {};
  },
  deserializeOverrides: ({
    params: e,
    options: t,
    context: i,
    elem: n
  }) => {
    if (!e.text) return {};
    let r = e.text;
    if (r) {
      let e;
      let o = nn({
        element: r,
        options: t,
        context: i,
        declarativeNode: {},
        offset: 0
      });
      let a = {};
      for (let [e, t] of Object.entries(r.props)) {
        if (Bj(t)) {
          let o = i.jsxExpressionContainerToVariableAlias(t, n);
          o && (a[e] = o, delete r.props[e]);
        }
      }
      if (r.children.length === 1 && Bj(r.children[0]) && (e = r.children[0]), e) {
        let t = i.jsxExpressionContainerToVariableAlias(e, n);
        t && (a.characters = t);
      }
      let l = o.length > 0 ? {
        characters: o.map(e => e.characters).join(''),
        ranges: o
      } : {};
      return {
        props: {
          boundVariables: a,
          ...r.props
        },
        textMetadata: l,
        deserializeMetadata: {
          generationRequests: {
            textRange: o.flatMap(e => [...e.imageGenerationRequests.entries()].map(([t, i]) => ({
              paintIndex: t,
              rangeStart: e.start,
              rangeEnd: e.end,
              caption: i
            })))
          }
        }
      };
    }
    return {};
  }
});
function nd({
  props: e,
  options: t,
  context: i,
  styles: n,
  elem: r
}) {
  let o = {};
  let a = new Map();
  let l = {};
  if (typeof e.fontSize == 'number' ? o.fontSize = i.maybeDenormalizePxValue(e.fontSize, 'y') : Bj(e.fontSize) && (l.fontSize = i.jsxExpressionContainerToVariableAlias(e.fontSize, r)), e.fontFamily) {
    Bj(e.fontFamily) && (l.fontFamily = i.jsxExpressionContainerToVariableAlias(e.fontFamily, r));
    let n = Bj(e.fontWeight) ? e.italic ? 'Italic' : void 0 : getFontStyleName(e.fontWeight, e.italic);
    o.fontName = {
      family: typeof e.fontFamily == 'string' ? e.fontFamily : t.jsxType === 'Text' ? 'Inter' : void 0,
      style: n,
      postscript: ''
    };
    o.fontWeight = typeof e.fontWeight == 'number' ? e.fontWeight : 400;
  }
  if (Bj(e.fontWeight) && (l.fontWeight = i.jsxExpressionContainerToVariableAlias(e.fontWeight, r)), void 0 !== e.lineHeight) {
    if (Bj(e.lineHeight)) {
      l.lineHeight = i.jsxExpressionContainerToVariableAlias(e.lineHeight, r);
    } else {
      let t = _$$O(e.lineHeight);
      t && (t.units === 'AUTO' ? o.lineHeight = {
        units: 'PERCENT',
        value: 100
      } : t.units === 'PIXELS' ? o.lineHeight = {
        ...t,
        value: i.maybeDenormalizePxValue(t.value, 'y')
      } : t.units === 'PERCENT' ? o.lineHeight = {
        units: 'RAW',
        value: t.value / 100
      } : o.lineHeight = t);
    }
  }
  if (void 0 !== e.letterSpacing) {
    if (Bj(e.letterSpacing)) {
      l.letterSpacing = i.jsxExpressionContainerToVariableAlias(e.letterSpacing, r);
    } else {
      let t = _$$O(e.letterSpacing);
      t && (t.units === 'AUTO' ? o.letterSpacing = {
        units: 'PERCENT',
        value: 100
      } : t.value === 0 ? o.letterSpacing = {
        units: 'PERCENT',
        value: 0
      } : t.units === 'PIXELS' ? o.letterSpacing = {
        ...t,
        value: i.maybeDenormalizePxValue(t.value, 'x')
      } : o.letterSpacing = t);
    }
  }
  if (e.textCase && (o.textCase = function (e) {
    switch (e) {
      case 'original':
        return 'ORIGINAL';
      case 'upper':
        return 'UPPER';
      case 'lower':
        return 'LOWER';
      case 'title':
        return 'TITLE';
      case 'small_caps':
        return 'SMALL_CAPS';
      case 'small_caps_forced':
        return 'SMALL_CAPS_FORCED';
      default:
        throwTypeError(e);
    }
  }(e.textCase)), e.textDecoration && (o.textDecoration = function (e) {
    switch (e) {
      case 'none':
        return 'NONE';
      case 'underline':
        return 'UNDERLINE';
      case 'strikethrough':
        return 'STRIKETHROUGH';
      default:
        throwTypeError(e);
    }
  }(e.textDecoration)), e.href ? o.hyperlink = {
    value: e.href,
    type: 'URL'
  } : t.jsxType === 'Text' && (o.hyperlink = null), t.jsxType === 'Text' && (o.textTruncation = e.truncate ? 'ENDING' : 'DISABLED', typeof e.truncate == 'number' ? o.maxLines = e.truncate : !0 === e.truncate ? o.maxLines = 1 : o.maxLines = null), t.jsxType === 'Span') {
    let l = n.find(e => e.styleType === 'FILL');
    if (l && (o.fillStyleId = {
      key: l.styleKeyForPublish,
      version: l.getStyleVersion()
    }), e.fill) {
      let {
        paints,
        imageGenerationRequests
      } = tn({
        prop: e.fill,
        options: t.paintOptions,
        context: i,
        element: r
      });
      a = imageGenerationRequests;
      o.fills = {
        blobs: [],
        data: paints
      };
    }
  }
  let s = n.find(e => e.styleType === 'TEXT');
  s && (o.textStyleId = {
    key: s.styleKeyForPublish,
    version: s.getStyleVersion()
  });
  Object.keys(l).length > 0 && (o.boundVariables = l);
  return {
    textStyle: o,
    imageGenerationRequests: a
  };
}
function nu(e, t, i) {
  let n = {};
  if (t.jsxType === 'Span') {
    if (e.fills) {
      let r = e.fills.data.filter(e => e.visible && e.opacity !== 0);
      r.length === 1 && r[0]?.type === 'SOLID' && r[0]?.blendMode === 'NORMAL' && t.generationRequest ? n.fill = `image(${t.generationRequest.caption})` : n.fill = ti(e.fills.data, t.paintOptions ?? {}, i);
    }
    t.includeStyles && e.fillStyleId && Object.keys(e.fillStyleId).length > 0 && (n.fillStyleId = e.fillStyleId);
  }
  if (t.includeStyles && e.textStyleId && Object.keys(e.textStyleId).length > 0) {
    let r = t.scene.getStyleNodeByRef(e.textStyleId);
    r && (n.spreadAttribute = i.styleToJSXSpreadAttribute(r));
  }
  if (!n.spreadAttribute) {
    e.fontName?.family && (n.fontFamily = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables?.fontFamily : void 0) ?? e.fontName.family);
    e.fontSize && (n.fontSize = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables?.fontSize : void 0) ?? i.maybeNormalizePxValue(e.fontSize, 'y'));
    let r = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables?.fontWeight : void 0);
    if (r ? n.fontWeight = r : e.fontWeight && (n.fontWeight = e.fontWeight), e.fontName?.style) {
      let {
        fontWeight,
        italic
      } = parseFontStyle(e.fontName.style);
      n.fontWeight || (n.fontWeight = fontWeight);
      italic && (n.italic = !0);
    }
    if (typeof e.lineHeight == 'object') {
      e.lineHeight.units === 'PERCENT' && (e.lineHeight.value === 100 ? n.lineHeight = 'auto' : n.lineHeight = _$$S2(e.lineHeight.value, '%'));
      e.lineHeight.units === 'RAW' && (n.lineHeight = e.lineHeight.value);
      e.lineHeight.units === 'PIXELS' && (n.lineHeight = _$$S2(i.maybeNormalizePxValue(e.lineHeight.value, 'y'), 'px'));
      let r = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables?.lineHeight : void 0);
      r && (n.lineHeight = r);
    }
    if (e.letterSpacing) {
      e.letterSpacing.value === 0 ? n.letterSpacing = 0 : (e.letterSpacing.units === 'PERCENT' && (n.letterSpacing = _$$S2(e.letterSpacing.value, '%')), e.letterSpacing.units === 'RAW' && (n.letterSpacing = e.letterSpacing.value), e.letterSpacing.units === 'PIXELS' && (n.letterSpacing = _$$S2(i.maybeNormalizePxValue(e.letterSpacing.value, 'x'), 'px')));
      let r = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables?.letterSpacing : void 0);
      r && (n.letterSpacing = r);
    }
    e.textCase && (n.textCase = function (e) {
      switch (e) {
        case 'ORIGINAL':
          return 'original';
        case 'UPPER':
          return 'upper';
        case 'LOWER':
          return 'lower';
        case 'TITLE':
          return 'title';
        case 'SMALL_CAPS':
          return 'small_caps';
        case 'SMALL_CAPS_FORCED':
          return 'small_caps_forced';
        default:
          throwTypeError(e);
      }
    }(e.textCase));
    e.textDecoration && (n.textDecoration = function (e) {
      switch (e) {
        case 'NONE':
          return 'none';
        case 'UNDERLINE':
          return 'underline';
        case 'STRIKETHROUGH':
          return 'strikethrough';
        default:
          throwTypeError(e);
      }
    }(e.textDecoration));
  }
  e.hyperlink && (n.href = e.hyperlink.value);
  e.listOptions && (n.listOptions = function (e) {
    switch (e) {
      case 'PLAIN':
      case 'BLOCKQUOTE':
      case 'HEADER':
        return 'none';
      case 'ORDERED_LIST':
        return 'ordered';
      case 'UNORDERED_LIST':
        return 'unordered';
      default:
        throwTypeError(e);
    }
  }(e.listOptions));
  t.jsxType === 'Text' && e.textTruncation === 'ENDING' && (n.truncate = !((e.maxLines ?? 0) > 1) || e.maxLines);
  return n;
}
function np(e, t, i) {
  let {
    fontName,
    fontSize,
    fontWeightOrMixed,
    lineHeightOrMixed,
    letterSpacing,
    textCase,
    textDecoration,
    textTruncation,
    maxLines,
    hyperlink,
    inheritedTextStyle
  } = e;
  let h = textStyleProperties.reduce((t, i) => {
    let n = e.getRangeBoundVariable(0, e.characters.length - 1, i);
    n !== null && n !== 'mixed' && (t[i] = n);
    return t;
  }, {});
  let m = {
    jsxType: 'Text',
    paintOptions: e5(t),
    includeVariables: t.includeVariables,
    includeStyles: t.includeStyles,
    scene: t.scene
  };
  let g = {
    fontName,
    fontSize,
    fontWeight: fontWeightOrMixed !== 'mixed' ? fontWeightOrMixed : void 0,
    lineHeight: lineHeightOrMixed !== 'mixed' ? lineHeightOrMixed : void 0,
    letterSpacing,
    textCase,
    textDecoration,
    maxLines,
    textTruncation,
    hyperlink: hyperlink !== 'mixed' ? hyperlink : void 0,
    boundVariables: h,
    textStyleId: inheritedTextStyle
  };
  return {
    defaultFlavorProps: nu(g, m, i),
    textStyle: g,
    serializationOptions: m
  };
}
function nc(e, t, i, n) {
  let {
    fontSize,
    fontWeight,
    textDecoration,
    italic,
    lineHeight,
    textCase,
    fill,
    ...p
  } = e;
  let c = [];
  if (fontWeight && typeof fontWeight == 'number' && fontWeight !== 400 && c.push(`font-${jd(fontWeight)}`), fontSize && typeof fontSize == 'number' && fontSize !== 12 && c.push(`text-${KY(fontSize)}`), textDecoration) {
    switch (textDecoration) {
      case 'underline':
        c.push('underline');
        break;
      case 'strikethrough':
        c.push('line-through');
    }
  }
  italic && c.push('italic');
  let f = t.lineHeight;
  if (lineHeight && lineHeight !== 'auto' && f && c.push(`leading-${(e => {
    switch (e.units) {
      case 'RAW':
        return _$$rt(100 * e.value, 'PERCENT');
      case 'PERCENT':
        return _$$rt(e.value, 'PERCENT');
      case 'PIXELS':
        return _$$rt(e.value, 'PIXELS');
      default:
        throwTypeError(e.units);
    }
  })(f)}`), fill) {
    let e = tu({
      fill
    }, 'TEXT', n);
    e.className ? c.push(e.className) : e.fill ? p.fill = e.fill : i.jsxType === 'Span' && c.push('text-black');
  }
  if (textCase && textCase !== 'original') {
    switch (textCase) {
      case 'upper':
        c.push('uppercase');
        break;
      case 'lower':
        c.push('lowercase');
        break;
      case 'title':
        c.push('capitalize');
        break;
      default:
        p.textCase = textCase;
    }
  }
  let h = c.length > 0 ? c.join(' ') : void 0;
  return n ? {
    className: h
  } : {
    ...p,
    className: h
  };
}
function nf(e, t) {
  let {
    className,
    ...n
  } = e;
  for (let {
    classParts,
    className: _className
  } of mu(className)) {
    let o = classParts[0];
    if (o) {
      if (o === 'font') {
        let t = (() => {
          let t = classParts.length - 1;
          return sJ[classParts[t]];
        })();
        t && (n.fontWeight = t);
      } else if (o === 'text') {
        let r = (() => {
          let t = classParts.length - 1;
          return fx[classParts[t]] ?? Hc(classParts[t]);
        })();
        if (r && (n.fontSize = r), t.jsxType === 'Span') {
          let e = tp({
            className,
            fill: n.fill
          }, 'TEXT');
          n.fill = e.fill;
        }
      } else if (o === 'leading') {
        let t = (() => {
          let t = classParts.length - 1;
          let i = u0[classParts[t]];
          if (i) return i;
          let n = Cv[classParts[t]];
          if (n) return `${n}px`;
          let r = Hc(classParts[t]);
          if (r) return `${r.toFixed(0)}px`;
          let o = kX(classParts[t]);
          return o ? o / 100 : null;
        })();
        t && (n.lineHeight = t);
      } else {
        _className === 'underline' ? n.textDecoration = 'underline' : _className === 'line-through' ? n.textDecoration = 'strikethrough' : _className === 'italic' ? n.italic = !0 : _className === 'uppercase' ? n.textCase = 'upper' : _className === 'lowercase' ? n.textCase = 'lower' : _className === 'capitalize' && (n.textCase = 'title');
      }
    }
  }
  return n;
}
let nh = (e, t, i) => {
  let n = e.includes('variable-consumption-map') && i.includeVariables;
  let r = e.map(e => e.replace(/-/g, '').toLowerCase());
  for (let [e, i] of Object.entries(t)) r.includes(e.toLowerCase()) || Bj(i) && n || delete t[e];
  return t;
};
let nm = _$$z.object({
  horizontalAlignText: _$$z.enum(['left', 'right', 'center', 'justified']).optional(),
  verticalAlignText: _$$z.enum(['top', 'center', 'bottom']).optional()
});
let ng = zA;
function ny(e, t) {
  if (e.type !== 'TEXT') return;
  let i = {};
  if (e.textAlignHorizontal) {
    switch (e.textAlignHorizontal) {
      case 'LEFT':
      default:
        i.horizontalAlignText = 'left';
        break;
      case 'CENTER':
        i.horizontalAlignText = 'center';
        break;
      case 'RIGHT':
        i.horizontalAlignText = 'right';
        break;
      case 'JUSTIFIED':
        i.horizontalAlignText = 'justified';
    }
  }
  if (e.textAlignVertical) {
    switch (e.textAlignVertical) {
      case 'TOP':
      default:
        i.verticalAlignText = 'top';
        break;
      case 'CENTER':
        i.verticalAlignText = 'center';
        break;
      case 'BOTTOM':
        i.verticalAlignText = 'bottom';
    }
  }
  return t.tailwind ? function (e) {
    let {
      horizontalAlignText,
      verticalAlignText
    } = e;
    let n = [];
    if (horizontalAlignText && horizontalAlignText !== 'left') {
      switch (horizontalAlignText) {
        case 'center':
          n.push('text-center');
          break;
        case 'right':
          n.push('text-right');
          break;
        case 'justified':
          n.push('text-justify');
      }
    }
    if (verticalAlignText && verticalAlignText !== 'top') {
      switch (verticalAlignText) {
        case 'center':
          n.push('align-middle');
          break;
        case 'bottom':
          n.push('align-bottom');
      }
    }
    return {
      className: n.join(' ')
    };
  }(i) : i;
}
function nb({
  params: e,
  options: t
}) {
  t.tailwind && (e = function (e) {
    let {
      className
    } = e;
    let i = {};
    for (let {
      classParts
    } of mu(className)) {
      let t = classParts[0];
      if (t) {
        if (t === 'text') {
          switch (classParts[1]) {
            case 'left':
              i.horizontalAlignText = 'left';
              break;
            case 'center':
              i.horizontalAlignText = 'center';
              break;
            case 'right':
              i.horizontalAlignText = 'right';
              break;
            case 'justify':
              i.horizontalAlignText = 'justified';
          }
        } else if (t === 'align') {
          switch (classParts[1]) {
            case 'top':
              i.verticalAlignText = 'top';
              break;
            case 'middle':
              i.verticalAlignText = 'center';
              break;
            case 'bottom':
              i.verticalAlignText = 'bottom';
          }
        }
      }
    }
    return i;
  }(e));
  let {
    horizontalAlignText,
    verticalAlignText
  } = e;
  let r = {};
  horizontalAlignText && (r.textAlignHorizontal = function (e) {
    switch (e) {
      case 'left':
      default:
        return 'LEFT';
      case 'center':
        return 'CENTER';
      case 'right':
        return 'RIGHT';
      case 'justified':
        return 'JUSTIFIED';
    }
  }(horizontalAlignText));
  verticalAlignText && (r.textAlignVertical = function (e) {
    switch (e) {
      case 'top':
      default:
        return 'TOP';
      case 'center':
        return 'CENTER';
      case 'bottom':
        return 'BOTTOM';
    }
  }(verticalAlignText));
  return {
    props: r
  };
}
let nS = ei({
  name: 'TextLayout',
  includeInTailwind: !0,
  fieldGroups: new Set(['text']),
  outputSchema: e => e.tailwind ? ng : nm,
  defaults: ({
    nodeType: e,
    options: t
  }) => e !== 'TEXT' || t.tailwindOnly ? {} : {
    horizontalAlignText: 'left',
    verticalAlignText: 'top'
  },
  serialize: (e, t) => ny(e, t),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }, i) => t.includes('text-align-horizontal') || t.includes('text-align-vertical') ? ny(e, i) : {},
  deserialize: nb,
  deserializeOverrides: nb
});
let nT = {
  name: 'Text',
  getJSXType(e, t) {
    if (e.type === 'TEXT') {
      if (t.flattenTextContent) return 'Text';
      if (e.hyperlink && e.hyperlink !== 'mixed') return 'Link';
      let i = e.getRangeLineType(0, e.characters.length - 1);
      if (i !== 'mixed' && i !== 'PLAIN') {
        if (i === 'ORDERED_LIST') return 'OrderedList';
        if (i === 'UNORDERED_LIST') return 'UnorderedList';
      }
      return 'Text';
    }
  },
  fromJSXType(e) {
    if (e === 'Text' || e === 'Link' || e === 'OrderedList' || e === 'UnorderedList') return 'TEXT';
  },
  getFieldSerializers(e) {
    let t = [];
    e.includeIDs && t.push(er);
    e.includeNames && t.push(eg);
    t.push(e$, e_, eW, iB, ns, nS, td, tx, tP, eQ, tM, i_);
    return t;
  },
  supportsChildren: () => 'text',
  getJSXChildren(e, t, i) {
    if (t.serializeAsComponentDefinition) {
      let t = e.componentPropertyReferences();
      if (t && 'characters' in t) {
        let e = t.characters;
        let n = i.getRootComponentTypeInfo();
        let r = n && n.parsedDefs.find(t => t.rawProp === e);
        if (r) {
          return [{
            type: 'JSXExpressionContainer',
            expression: ed(r.devFriendlyProp)
          }];
        }
      }
    }
    if (t.includeVariables) {
      let t = i.variableAliasToJSXExpressionContainer(e.boundVariables.characters);
      if (t) return [t];
    }
    if (!e.characters) return [];
    let n = nr(e, t);
    if (t.flattenTextContent) {
      let e = n;
      t.truncateFlattenedTextContent && e.length > t.truncateFlattenedTextContent && (e = `${e.slice(0, t.truncateFlattenedTextContent)}... (truncated to ${t.truncateFlattenedTextContent} chars)`);
      return [e];
    }
    return ne(e, t, i);
  },
  fromJSXChildren(e, t, i, n) {
    let r = e.children[0];
    if (i.includeVariables && r && e.children.length === 1 && Bj(r)) {
      let t = n.jsxExpressionContainerToVariableAlias(r, e);
      return t ? {
        props: {
          boundVariables: {
            characters: t
          }
        }
      } : {};
    }
    let o = nn({
      element: e,
      options: i,
      context: n,
      declarativeNode: t,
      offset: 0
    });
    return {
      textMetadata: {
        characters: o.map(e => e.characters).join(''),
        ranges: o
      },
      deserializeMetadata: {
        generationRequests: {
          textRange: o.flatMap(e => [...e.imageGenerationRequests.entries()].map(([t, i]) => ({
            paintIndex: t,
            rangeStart: e.start,
            rangeEnd: e.end,
            caption: i
          })))
        }
      }
    };
  },
  possibleTagNames: ['Text', 'Link', 'UnorderedList', 'OrderedList', {
    jsxType: 'Span',
    fieldSerializers: [ns]
  }, {
    jsxType: 'ListItem',
    fieldSerializers: [ns]
  }]
};
let nz = {
  name: 'Vector',
  getJSXType(e) {
    if (e.type === 'VECTOR') return 'Vector';
  },
  fromJSXType(e) {
    if (e === 'Vector') return 'VECTOR';
  },
  getFieldSerializers(e) {
    let t = [];
    e.includeIDs && t.push(er);
    e.includeNames && t.push(eg);
    e.excludeVectorData || e.inlineVectorData || t.push(iW);
    e.includeAssetGenerationRequests && t.push(iY);
    t.push(e$, e_, eW, iB, td, tx, tP, eQ, tM);
    return t;
  },
  supportsChildren: () => 'nodes',
  getJSXChildren: (e, t, i) => !t.excludeVectorData && (!t.fieldGroups || t.fieldGroups.includes('rendering')) && e.vectorDataInfo && t.inlineVectorData ? iK(e, t, i) : [],
  fromJSXChildren(e, t, i, n) {
    if (i.excludeVectorData || !i.inlineVectorData) return {};
    let {
      cornerRadius,
      vectorNetwork
    } = iq({
      element: e,
      options: i,
      context: n
    });
    return {
      props: {
        cornerRadius
      },
      customProperties: {
        vectorNetwork
      }
    };
  },
  possibleTagNames: ['Vector']
};
let nx = {
  name: 'AutoLayout',
  getJSXType(e) {
    if (e.type === 'FRAME' && !e.isGroup && e.isStack) return 'AutoLayout';
  },
  fromJSXType(e) {
    if (e === 'AutoLayout') return 'FRAME';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(eR);
    t.push(eD);
    return t;
  },
  supportsChildren: () => 'nodes',
  possibleTagNames: e => e.flavor === 'flow' ? ['AutoLayout'] : []
};
let nI = _$$z.object({
  arcData: _$$z.object({
    innerRadius: _$$z.number(),
    endingAngle: _$$z.number(),
    startingAngle: _$$z.number()
  }).optional()
});
function nE(e) {
  if (!e.arcData) return {};
  let t = {};
  (e.arcData.innerRadius !== 0 || e.arcData.startingAngle !== 0 || e.arcData.endingAngle !== 6.2831854820251465) && (t.arcData = {
    innerRadius: e4(e.arcData.innerRadius, 0),
    startingAngle: e4(e.arcData.startingAngle, 0),
    endingAngle: e4(e.arcData.endingAngle, 6.2831854820251465)
  });
  return t;
}
function nN({
  params: e
}) {
  if (void 0 === e.arcData) return;
  let {
    arcData
  } = e;
  let i = arcData.endingAngle ?? 6.2831854820251465;
  Math.abs(i - 6.2831854820251465) < 0.001 && (i = 6.2831854820251465);
  return {
    props: {
      arcData: {
        startingAngle: e4(arcData.startingAngle ?? 0, 0),
        endingAngle: e4(i, 6.2831854820251465),
        innerRadius: e4(arcData.innerRadius ?? 0, 0)
      }
    }
  };
}
let nv = ei({
  name: 'ArcData',
  fieldGroups: new Set(['rendering']),
  includeInTailwind: !1,
  outputSchema: () => nI,
  defaults: ({
    nodeType: e
  }) => e !== 'ELLIPSE' ? {} : {
    arcData: {
      innerRadius: 0,
      startingAngle: 0,
      endingAngle: 6.2831854820251465
    }
  },
  serialize: e => nE(e),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }) => t.includes('arc-data') ? nE(e) : {},
  deserialize: nN,
  deserializeOverrides: nN
});
let nO = {
  name: 'Ellipse',
  getJSXType(e) {
    if (e.type === 'ELLIPSE') return 'Ellipse';
  },
  fromJSXType(e) {
    if (e === 'Ellipse') return 'ELLIPSE';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(nv);
    return t;
  },
  supportsChildren: () => 'none',
  possibleTagNames: ['Ellipse']
};
let nA = {
  name: 'Component',
  getJSXType(e, t) {
    if (e.type === 'SYMBOL') return t.serializeAsComponentDefinition ? t.useDivTagsForFrames ? 'div' : 'Frame' : f;
  },
  fromJSXType(e, t) {
    if (e === f && !t.tempDeserializeComponentsAsFrames) return 'SYMBOL';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(eR);
    t.push(eD);
    e.includeNames || t.push(eg);
    return t;
  },
  supportsChildren: () => 'nodes',
  possibleTagNames: [f]
};
let nC = {
  name: 'ComponentSet',
  getJSXType(e, t) {
    if (e.type === 'FRAME' && e.isStateGroup) return h;
  },
  fromJSXType(e, t) {
    if (e === h) return 'FRAME';
  },
  fromJSXElement: (e, t) => ({
    props: {
      isStateGroup: !0
    }
  }),
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(eR);
    t.push(eD);
    return t;
  },
  supportsChildren: () => 'nodes',
  possibleTagNames: e => e.flavor === 'flow' ? ['ComponentSet'] : ['Frame']
};
let nw = {
  name: 'Group',
  getJSXType: (e, t) => iU({
    guid: e.guid,
    options: t
  }) ? 'Vector' : e.isGroup || e.type === 'GROUP' ? 'Group' : void 0,
  fromJSXType(e) {
    if (e === 'Group') return 'GROUP';
  },
  getFieldSerializers(e) {
    let t = iJ(e);
    t.push(tM, eQ, tj, tP);
    e.includeAssetGenerationRequests && t.push(iY);
    return t;
  },
  supportsChildren: () => 'nodes',
  getJSXChildren(e, t) {
    if (iU({
      guid: e.guid,
      options: t
    })) {
      return [];
    }
  },
  possibleTagNames: ['Group']
};
let nR = {
  name: 'Rectangle',
  getJSXType(e) {
    switch (e.type) {
      case 'RECTANGLE':
      case 'ROUNDED_RECTANGLE':
        return 'Rectangle';
    }
  },
  fromJSXType(e) {
    if (e === 'Rectangle') return 'ROUNDED_RECTANGLE';
  },
  getFieldSerializers: e => iH(e),
  supportsChildren: () => 'none',
  possibleTagNames: ['Rectangle']
};
let nP = {
  name: 'Line',
  getJSXType(e) {
    if (e.type === 'LINE') return 'Line';
  },
  fromJSXType(e) {
    if (e === 'Line') return 'LINE';
  },
  getFieldSerializers: e => iH(e),
  supportsChildren: () => 'none',
  possibleTagNames: ['Line']
};
let nk = {
  name: 'Slice',
  getJSXType(e) {
    if (e.type === 'SLICE') return 'Slice';
  },
  fromJSXType(e) {
    if (e === 'Slice') return 'SLICE';
  },
  getFieldSerializers: e => iJ(e),
  supportsChildren: () => 'none',
  possibleTagNames: ['Slice']
};
let nj = _$$z.object({
  sides: _$$z.number().optional().describe('The number of sides of the polygon.')
});
function nL(e) {
  if (typeof e.count == 'number') {
    return {
      sides: e.count
    };
  }
}
function nD({
  params: e
}) {
  if (typeof e.sides == 'number') {
    return {
      props: {
        count: e.sides
      }
    };
  }
}
let nV = ei({
  name: 'Sides',
  includeInTailwind: !1,
  fieldGroups: new Set(['rendering']),
  outputSchema: () => nj,
  defaults: () => ({
    sides: 3
  }),
  serialize: e => nL(e),
  serializeOverrides: ({
    node: e,
    fieldNames: t
  }) => t.includes('count') ? nL(e) : {},
  deserialize: nD,
  deserializeOverrides: nD
});
let nM = {
  name: 'Polygon',
  getJSXType(e) {
    if (e.type === 'REGULAR_POLYGON') return 'Polygon';
  },
  fromJSXType(e) {
    if (e === 'Polygon') return 'REGULAR_POLYGON';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(nV);
    return t;
  },
  supportsChildren: () => 'none',
  possibleTagNames: ['Polygon']
};
let n_ = 'Unknown';
let nF = {
  name: 'Unknown',
  getJSXType: () => n_,
  fromJSXType(e) {
    if (e === n_) return 'FRAME';
  },
  getJSXChildren: () => [],
  fromJSXChildren: () => ({}),
  fromJSXElement(e, t, i) {
    if (e.type === n_) {
      let n = {};
      'name' in e.props || (typeof e.props?.originalType == 'string' ? n.name = `Unhandled ${e.props?.originalType}` : n.name = 'Unhandled Node');
      t.unknownNodeFallbackHex ? n.fills = tn({
        prop: t.unknownNodeFallbackHex,
        options: e5(t),
        context: i,
        element: e
      }).paints : n.fills = [];
      return {
        props: n,
        deserializeMetadata: {
          isUnknownNode: !0
        }
      };
    }
  },
  toJSXElement(e, t) {
    if (t.type === n_) {
      return {
        originalType: e.type
      };
    }
  },
  getFieldSerializers: e => iJ(e),
  supportsChildren: () => 'nodes',
  possibleTagNames: [n_]
};
let nX = {
  name: 'Sticky',
  getJSXType(e) {
    if (e.type === 'STICKY') return 'Sticky';
  },
  fromJSXType(e) {
    if (e === 'Sticky') return 'STICKY';
  },
  getFieldSerializers(e) {
    let t = iJ({
      ...e,
      includeNames: !1
    });
    t.push(td, tM, eQ, ns);
    return t;
  },
  supportsChildren: () => 'text',
  getJSXChildren: (e, t, i) => e.textSublayer ? ne(e.textSublayer, t, i) : [],
  fromJSXChildren(e, t, i, n) {
    let r = nn({
      element: e,
      options: i,
      context: n,
      declarativeNode: t,
      offset: 0
    });
    return {
      textMetadata: {
        characters: r.map(e => e.characters).join(''),
        ranges: r
      }
    };
  },
  possibleTagNames: ['Sticky']
};
let nB = {
  name: 'Section',
  getJSXType(e) {
    if (e.type === 'SECTION') return 'Section';
  },
  fromJSXType(e) {
    if (e === 'Section') return 'SECTION';
  },
  getFieldSerializers: e => iH(e),
  supportsChildren: () => 'nodes',
  possibleTagNames: ['Section']
};
let nG = 'Slide';
let nJ = {
  name: nG,
  getJSXType(e) {
    if (e.type === 'SLIDE') return nG;
  },
  fromJSXType(e) {
    if (e === nG) return 'SLIDE';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(eD);
    return t;
  },
  supportsChildren: () => 'nodes',
  possibleTagNames: [nG]
};
function nH(e) {
  if (e.startsWith('repeat(')) {
    let t = e.match(/repeat\((\d+), (.*)\)/);
    if (!t) return;
    let [, i, n] = t;
    if (void 0 === i || void 0 === n) return;
    let r = n$(n);
    if (!r) return;
    return Array.from({
      length: parseInt(i)
    }).fill(0).map(() => ({
      trackSize: r
    }));
  }
  {
    let t = e.replaceAll(', ', ',').split(' ');
    let i = t.map(n$).filter(e => void 0 !== e);
    if (i.length !== t.length) return;
    return i.map(e => ({
      trackSize: e
    }));
  }
}
function n$(e) {
  if (e.startsWith('minmax(')) {
    let t = e.match(/minmax\((.*),(.*)\)/);
    if (!t) return;
    let [,, i] = t;
    if (void 0 === i) return;
    let n = nU(i);
    if (!n) return;
    return {
      minSizing: {
        type: LayoutSizingType.FIXED,
        value: 0
      },
      maxSizing: n
    };
  }
  {
    let t = nU(e);
    if (!t) return;
    return {
      minSizing: {
        type: LayoutSizingType.FIXED,
        value: 0
      },
      maxSizing: t
    };
  }
}
function nU(e) {
  let t = parseFloat(e);
  return isNaN(t) ? void 0 : e.match(/.*px\w*/) ? {
    type: LayoutSizingType.FIXED,
    value: t
  } : e.match(/.*fr\w*/) ? {
    type: LayoutSizingType.FLEX,
    value: t
  } : void 0;
}
let nW = _$$z.object({
  vertical: _$$z.number().or(M1),
  horizontal: _$$z.number().or(M1),
  type: _$$z.literal('JSXExpressionContainer'),
  expression: _$$z.string()
}).partial();
let nK = _$$z.object({
  gridTemplateRows: _$$z.string(),
  gridTemplateColumns: _$$z.string(),
  padding: _$$z.union([_$$z.number(), _$$z.object({
    vertical: _$$z.number().or(M1),
    horizontal: _$$z.number().or(M1),
    top: _$$z.number().or(M1),
    left: _$$z.number().or(M1),
    bottom: _$$z.number().or(M1),
    right: _$$z.number().or(M1),
    type: _$$z.literal('JSXExpressionContainer'),
    expression: _$$z.string()
  }).partial()]).optional().describe('Determines the padding between the border of the frame and its children.'),
  spacing: _$$z.union([_$$z.number(), nW]).optional().describe('Determines distance between children of this frame. A single number value controls both horizontal and vertical gap.')
});
let nq = ei({
  name: 'GridLayout',
  includeInTailwind: !0,
  fieldGroups: new Set(['layout']),
  outputSchema: () => nK,
  defaults: () => ({}),
  serialize: (e, t, i) => {
    let {
      gridRowSizingCSS,
      gridColumnSizingCSS
    } = e;
    let o = {
      gridTemplateRows: gridRowSizingCSS.trim(),
      gridTemplateColumns: gridColumnSizingCSS.trim()
    };
    Object.assign(o, eE(e, t, i));
    Object.assign(o, function (e, t, i) {
      let n = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.gridRowGap : void 0);
      let r = i.variableAliasToJSXExpressionContainer(t.includeVariables ? e.boundVariables.gridColumnGap : void 0);
      let o = {
        horizontal: n ?? i.maybeNormalizePxValue(e.gridRowGap, 'x'),
        vertical: r ?? i.maybeNormalizePxValue(e.gridColumnGap, 'y')
      };
      return t.normalizePxToRange01 || typeof o.horizontal != 'number' || o.horizontal !== o.vertical ? {
        spacing: {
          vertical: o.vertical,
          horizontal: o.horizontal
        }
      } : {
        spacing: o.horizontal
      };
    }(e, t, i));
    return o;
  },
  deserialize: ({
    params: e,
    context: t,
    elem: i
  }) => {
    let {
      gridTemplateRows,
      gridTemplateColumns,
      padding,
      spacing
    } = e;
    let l = {
      stackMode: 'GRID'
    };
    let s = {};
    let d = nH(gridTemplateRows);
    if (!d) {
      t.trackDeserializeIssue({
        message: 'Failed to parse gridTemplateRows',
        context: {
          jsxElement: i
        },
        location: i.parsedLocations?.attributes.gridTemplateRows ?? i.parsedLocations?.opening
      });
      return;
    }
    let u = nH(gridTemplateColumns);
    if (!u) {
      t.trackDeserializeIssue({
        message: 'Failed to parse gridTemplateColumns',
        context: {
          jsxElement: i
        },
        location: i.parsedLocations?.attributes.gridTemplateColumns ?? i.parsedLocations?.opening
      });
      return;
    }
    let {
      props,
      boundVariables
    } = eN({
      padding,
      context: t,
      elem: i
    });
    Object.assign(l, props);
    Object.assign(s, boundVariables);
    let {
      props: _props2,
      boundVariables: _boundVariables
    } = function ({
      spacing: e,
      context: t,
      elem: i
    }) {
      let n = {};
      let r = {};
      void 0 === e || (typeof e == 'number' ? (n.gridRowGap = t.maybeDenormalizePxValue(e, 'x'), n.gridColumnGap = t.maybeDenormalizePxValue(e, 'y')) : (typeof e.horizontal == 'number' ? n.gridRowGap = t.maybeDenormalizePxValue(e.horizontal, 'x') : Bj(e.horizontal) && (r.gridRowGap = t.jsxExpressionContainerToVariableAlias(e.horizontal, i)), typeof e.vertical == 'number' ? n.gridColumnGap = t.maybeDenormalizePxValue(e.vertical, 'y') : Bj(e.vertical) && (r.gridColumnGap = t.jsxExpressionContainerToVariableAlias(e.vertical, i))));
      return {
        props: n,
        boundVariables: r
      };
    }({
      spacing,
      context: t,
      elem: i
    });
    Object.assign(l, _props2);
    Object.assign(s, _boundVariables);
    Object.keys(s).length > 0 && Object.assign(l, {
      boundVariables: s
    });
    return {
      props: l,
      customProperties: {
        gridRows: d,
        gridColumns: u
      }
    };
  }
});
let nY = {
  name: 'Grid',
  getJSXType(e) {
    if (e.type === 'FRAME' && !e.isGroup && e.isGrid) return 'Grid';
  },
  fromJSXType(e) {
    if (e === 'Grid') return 'FRAME';
  },
  getFieldSerializers(e) {
    let t = iH(e);
    t.push(nq);
    t.push(eD);
    return t;
  },
  supportsChildren: () => 'nodes',
  possibleTagNames: e => e.flavor === 'flow' ? ['Grid'] : []
};
export function $$nZ29(e) {
  let t = {
    ...KQ,
    ...e
  };
  let i = [nC, iZ];
  return (t.flavor === 'flow' && (i.push(nx), i.push(nY)), i.push(nw, nk, nA, nO, nM, rt, nT, nz, i5, i1, i2, nP, nR, i0, nB, nX, nJ, nF), t.testOnlyOmitNodeSerializers) ? i.filter(e => !t.testOnlyOmitNodeSerializers || !t.testOnlyOmitNodeSerializers.includes(e.name)) : i;
}
function nQ(e, t, i) {
  for (let n of $$nZ29(t)) {
    if (n.getJSXType(e, t, i)) return n;
  }
  return null;
}
export let $$n024 = [er, tB, eg, e$, i4, ec, eR, iB, e_, eW, ns, nS, nv, td, tx, tP, eQ, eD, tg, tj, tM, nV, iW, tF, iR, i_];
function n8({
  node: e,
  element: t,
  props: i,
  validKeys: n,
  defaults: r
}) {
  if (i) {
    for (let o of Object.keys(i)) {
      if (o !== 'spreadAttribute') {
        if (n && !n.has(o)) throw new Error(`Prop ${o} not a valid key`);
        if (o === 'className') {
          i[o] && (t.props[o] ? t.props[o] = [t.props[o], i[o]].join(' ') : t.props[o] = i[o]);
        } else {
          if (void 0 !== t.props[o]) throw new Error(`Prop ${o} already set on node ${e.guid}`);
          if (r && o in r && deepEqual(i[o], r[o])) continue;
          t.props[o] = i[o];
        }
      }
    }
  }
}
function n6({
  node: e,
  nodeSerializers: t,
  options: i,
  context: n,
  depth: r,
  serializeReason: o,
  excludeChildren: a,
  startTime: l,
  nodeCount: s
}) {
  if (i?.includeNodeTypes && !i.includeNodeTypes.includes(e.type) || i.maxSerializeTimeMs && r > 0 && performance.now() - l >= i.maxSerializeTimeMs || r > 0 && i?.filterFunction && !i?.filterFunction(e, {
    depth: o === 'serialize-jsx' ? r : null
  })) {
    return null;
  }
  for (let d of t) {
    let u = d.getJSXType(e, i, n);
    if (!u) continue;
    let p = {
      type: u,
      props: {},
      children: []
    };
    let c = d.getFieldSerializers(i);
    c.sort((e, t) => {
      let i = $$n024.indexOf(e);
      let n = $$n024.indexOf(t);
      return (i === -1 ? $$n024.length : i) - (n === -1 ? $$n024.length : n);
    });
    let f = {};
    for (let t of c = _$$c(c, {
      ...i
    })) {
      let n = t.serializeNodeInfoForDefaults?.(e, i);
      n && Object.assign(f, n);
    }
    let h = d?.toJSXElement?.(e, p, i, n);
    for (let t of (h && n8({
      node: e,
      element: p,
      props: h
    }), c)) {
      let r;
      let o = t.outputSchema(i);
      let a = (o._def.typeName === 'ZodNullable' ? o.unwrap() : o).shape;
      if (!a) throw new Error(`No output schema in fieldSerializer=${t.name} for flavor=${i.flavor}`);
      let l = new Set(Object.keys(a));
      if (i.maxNodeswithFields && s && s > i.maxNodeswithFields) {
        r = {};
      } else {
        try {
          r = t.serialize(e, i, n);
          r = function (e, t, i) {
            if (!i || !Object.keys(i).length || t.fieldGroups.size === 0 || !e) return e;
            let n = [];
            for (let e of t.fieldGroups) {
              let t = i[e];
              t && n.push(...t);
            }
            return n.length ? Object.fromEntries(Object.entries(e).filter(([e]) => n.includes(e))) : e;
          }(r, t, i.fieldGroupFilters);
        } catch (i) {
          n.trackSerializeIssue({
            message: `Could not serialize ${t.name} fields${i instanceof Error ? `: ${i.message}` : ''}`,
            context: {
              guid: e.guid
            }
          });
          continue;
        }
      }
      let d = t.defaults({
        nodeType: e.type,
        tagName: u,
        nodeInfo: f,
        options: i
      });
      let c = t.name === 'Instances' && i.topLevelComponentProps && r?.componentProps ? r.componentProps : r;
      n8({
        node: e,
        element: p,
        props: c,
        defaults: d,
        validKeys: t.name === 'Instances' ? new Set(Object.keys(c ?? {})) : l
      });
      r?.spreadAttribute && (p.spreadAttributes = p.spreadAttributes ?? [], p.spreadAttributes.push(r.spreadAttribute));
    }
    let m = d?.getJSXChildren?.(e, i, n);
    if (m) {
      p.children = m;
    } else if (!a && 'childrenNodes' in e && e.childrenNodes) {
      for (let a of i.orderChildrenByXY ? H(e) : $(e)) {
        let e = n6({
          node: a,
          nodeSerializers: t,
          options: i,
          context: n,
          depth: r + 1,
          serializeReason: o,
          startTime: l
        });
        e && p.children.push(e);
      }
    }
    if (i.excludeEmptyContainers && !a && (e.isGroup || e.type === 'FRAME')) {
      let t = e.isGroup ? ey.GROUP : ey.FRAME;
      let i = e.name.replace(/\d/g, '').replace(/\s/g, '');
      if (t && t.includes(i) && !p.children.length) return null;
    }
    return p;
  }
  n.trackSerializeIssue({
    message: 'Unable to serialize node',
    context: {
      guid: e.guid
    }
  });
  return null;
}
!function (e) {
  e[e.CONTINUE = 0] = 'CONTINUE';
  e[e.BREAK = 1] = 'BREAK';
  e[e.SKIP = 2] = 'SKIP';
}(n || (n = {}));
let n4 = new Set(['props', 'requiredProps', 'componentProps', 'customProperties', 'textMetadata', 'childrenMetadata', 'layoutMetadata', 'debuggingMetadata', 'deserializeMetadata']);
function n5(e, t, i) {
  if (t) {
    for (let n of Object.keys(t)) {
      if (n4.has(n)) {
        for (let [r, o] of Object.entries(t[n])) {
          if (n === 'props' && r === 'boundVariables' && typeof o == 'object') {
            let t = e[n][r] ?? {};
            e[n] = {
              ...e[n],
              boundVariables: {
                ...t,
                ...o
              }
            };
            continue;
          }
          if (n === 'customProperties' && typeof o == 'object') {
            let t = e[n] ?? {};
            e[n] = {
              ...t,
              [r]: o
            };
            continue;
          }
          if (n === 'deserializeMetadata' && r === 'generationRequests' && typeof o == 'object') {
            let t = e[n][r] ?? {};
            e[n] = {
              ...e[n],
              generationRequests: {
                ...t,
                ...o
              }
            };
            continue;
          }
          if (void 0 !== e[n][r]) throw new Error(`prop ${n}.${r} already set elem=${JSON.stringify(i)}, declarativeNode=${JSON.stringify(e)}`);
          e[n][r] = o;
        }
      }
    }
  }
}
function n3({
  jsxElement: e,
  nodeSerializers: t,
  options: i,
  context: n,
  depth: r
}) {
  for (let o of t) {
    let a = o.fromJSXType(e.type, i, n);
    if (!a) continue;
    if (i?.includeNodeTypes && !i.includeNodeTypes.includes(a)) return null;
    let l = o.getFieldSerializers(i);
    l = _$$c(l, {
      ...i
    });
    let s = {
      nodeType: a,
      requiredProps: {},
      props: {},
      customProperties: {},
      componentProps: {},
      textMetadata: {},
      layoutMetadata: {},
      childrenMetadata: {},
      debuggingMetadata: {
        location: e.parsedLocations?.opening
      },
      deserializeMetadata: {}
    };
    let d = o.fromJSXElement?.(e, i, n);
    d && n5(s, d, e);
    $$n918(s, l, a, e, i, n, r);
    let u = o?.fromJSXChildren?.(e, s, i, n);
    if (u) {
      n5(s, u, e);
    } else if (e.children.length) {
      for (let o of (s.childrenMetadata.children = [], e.children)) {
        if (o) {
          if (_$$id(o)) {
            s.childrenMetadata.children.push(...function e(o) {
              let a = [];
              if (o.type === 'Fragment' || o.type === '') {
                for (let t of o.children) _$$id(t) && a.push(...e(t));
              } else {
                let e = n3({
                  jsxElement: o,
                  nodeSerializers: t,
                  options: i,
                  context: n,
                  depth: r + 1
                });
                e && a.push(e);
              }
              return a;
            }(o));
            continue;
          }
          n.trackDeserializeIssue({
            message: 'Unhandled child value',
            context: {
              jsxElement: e
            },
            location: Bj(o) ? o.location : e.parsedLocations?.children ?? e.parsedLocations?.full
          });
        }
      }
    }
    return s;
  }
  return (n.trackDeserializeIssue({
    message: 'Unable to deserialize element',
    context: {
      jsxElement: e
    },
    location: e.parsedLocations?.full
  }), i.transformUnhandledNodes) ? n3({
    jsxElement: Aw(e),
    nodeSerializers: t,
    options: {
      ...i,
      tailwind: !0
    },
    context: n,
    depth: r
  }) : null;
}
export function $$n918(e, t, i, n, r, o, a) {
  let l = n.spreadAttributes?.map(e => o.jsxSpreadAttributeToStyle(e, n)).filter(e => void 0 !== e) ?? [];
  let s = {};
  for (let e of t) {
    let t = e.deserializeNodeInfoForDefaults?.(n.props, r);
    t && Object.assign(s, t);
  }
  for (let d of t) {
    let t = d.outputSchema(r);
    if (!t) throw new Error(`No output schema in fieldSerializer=${d.name} for flavor=${r.flavor}`);
    let u = t.safeParse(n.props);
    if (!u.success) {
      let {
        fieldErrors,
        formErrors
      } = u.error.flatten();
      for (let e of formErrors) {
        o.trackDeserializeIssue({
          message: e,
          context: {
            jsxElement: n
          },
          location: n.parsedLocations?.opening
        });
      }
      for (let [t, i] of Object.entries(fieldErrors)) {
        for (let e of i || []) {
          o.trackDeserializeIssue({
            message: e,
            context: {
              jsxElement: n
            },
            location: n.parsedLocations?.attributes[t] ?? n.parsedLocations?.opening
          });
        }
      }
      continue;
    }
    let p = d.deserialize({
      params: {
        ...d.defaults({
          nodeType: i,
          tagName: n.type,
          nodeInfo: s,
          options: r
        }),
        ...(i === 'INSTANCE' && d.name === 'Instances' && r.topLevelComponentProps ? n.props : u.data)
      },
      options: r,
      context: o,
      nodeType: i,
      depth: a,
      declarativeNodeRequiredProps: {
        ...e.requiredProps
      },
      styles: l,
      elem: n
    });
    n5(e, p, n);
  }
}
let n7 = _$$z.object({
  overrides: _$$z.record(_$$z.string(), _$$z.any()).optional()
});
let re = ei({
  name: 'Overrides',
  includeInTailwind: !0,
  fieldGroups: new Set(),
  outputSchema: () => n7,
  defaults: () => ({
    overrides: {}
  }),
  serialize(e, t, i) {
    let n = e.overridesInternal;
    let r = {};
    for (let o of n) {
      let n = t.scene.guidFromDeveloperFriendlyId(o.id);
      let a = t.scene.get(n);
      if (!a) {
        i.trackSerializeIssue({
          message: 'Cannot find sublayer to serialize overrides',
          context: {
            guid: e.guid
          }
        });
        continue;
      }
      let l = nQ(a, t, i);
      if (!l) {
        i.trackSerializeIssue({
          message: `Cannot find node serializer for overrides on ${a.type} sublayer`,
          context: {
            guid: e.guid
          }
        });
        continue;
      }
      let s = {};
      let d = l.getFieldSerializers(t);
      for (let n of (a.type === 'INSTANCE' && (d = Array.from(new Set([...d, ...iZ.getFieldSerializers(t)]))), d)) {
        if (!n.serializeOverrides) continue;
        let r = n.serializeOverrides({
          node: a,
          fieldNames: o.overriddenFields,
          nodeData: {
            overrides: e.overrides
          }
        }, t, i);
        r && Object.assign(s, r);
      }
      if (Object.keys(s).length > 0) {
        let e = r;
        for (let t of a.instanceOverridePath) {
          e.hasOwnProperty(t) || (e[t] = {});
          e = e[t];
        }
        Object.assign(e, s);
      }
    }
    return {
      overrides: r
    };
  },
  deserialize({
    params: e,
    options: t,
    context: i,
    elem: n,
    depth: r
  }) {
    if (!e.overrides) return {};
    let o = i.findComponentIdFromJSXName(n.type);
    let a = o ? t.scene.get(o) : null;
    if (!a) {
      i.trackDeserializeIssue({
        message: `Cannot find component ${n.type}`,
        context: {
          jsxElement: n
        },
        location: n.parsedLocations?.attributes.overrides ?? n.parsedLocations?.opening
      });
      return;
    }
    return {
      customProperties: {
        overrides: function e({
          backingNode: t,
          overrides: i,
          path: n,
          options: r,
          context: o,
          elem: a,
          depth: l
        }) {
          let s = {};
          let d = {};
          let u = !1;
          let p = {
            ...i
          };
          for (let [e, n] of Object.entries(i)) {
            if (e === t.guid) {
              for (let [e, t] of Object.entries(n)) {
                typeof p[e] != 'object' || typeof t != 'object' || Array.isArray(p[e]) || Array.isArray(t) ? p[e] = t : p[e] = {
                  ...p[e],
                  ...t
                };
              }
              delete p[e];
            }
          }
          for (let [i, c] of Object.entries(p)) {
            if (parseSessionLocalID(i)) {
              let d = function e(t, i) {
                if (t.overrideKey === i || t.guid === i) return t;
                for (let n of t.childrenNodes) {
                  let t = e(n, i);
                  if (t) return t;
                }
                return null;
              }(t, i);
              if (!d) {
                o.trackDeserializeIssue({
                  message: `cannot find sublayer ${i}`,
                  context: {
                    jsxElement: a
                  },
                  location: a.parsedLocations?.attributes.overrides ?? a.parsedLocations?.opening
                });
                continue;
              }
              Object.assign(s, e({
                backingNode: d,
                overrides: c,
                path: [...n, i],
                options: r,
                context: o,
                elem: a,
                depth: l
              }));
            } else {
              d[i] = c;
              u = !0;
            }
          }
          if (u) {
            let e = nQ(t, r, o);
            if (!e) {
              o.trackSerializeIssue({
                message: `Cannot find node serializer for overrides on ${t.type} sublayer`,
                context: {
                  guid: t.guid
                }
              });
              return;
            }
            let i = t.type === 'SYMBOL' ? 'INSTANCE' : t.type;
            let u = e.getFieldSerializers(r);
            for (let e of (i === 'INSTANCE' && (u = Array.from(new Set([...u, ...iZ.getFieldSerializers(r)]))), u)) {
              if (!e.deserializeOverrides) continue;
              let u = e.deserializeOverrides({
                params: d,
                options: r,
                context: o,
                elem: a,
                nodeType: i,
                depth: l,
                declarativeNodeRequiredProps: {},
                styles: []
              });
              if (u) {
                let e = n.length === 0 ? t.overrideKey ?? t.id : n.join(';');
                s[e] || (s[e] = {
                  nodeType: i,
                  requiredProps: {},
                  props: {},
                  customProperties: {},
                  componentProps: {},
                  textMetadata: {},
                  layoutMetadata: {},
                  childrenMetadata: {},
                  debuggingMetadata: {},
                  deserializeMetadata: {}
                });
                n5(s[e], u, a);
              }
            }
          }
          return s;
        }({
          backingNode: a,
          overrides: e.overrides,
          path: [],
          options: t,
          context: i,
          elem: n,
          depth: r
        })
      }
    };
  }
});
let rt = {
  name: 'Instance',
  getJSXType(e, t, i) {
    if (e.type === 'INSTANCE') {
      let t = e.mainComponent;
      if (!t) throw new Error('Cannot find component for instance');
      return i.getJSXNameForComponent(t);
    }
  },
  fromJSXType(e, t, i) {
    if (i.findComponentIdFromJSXName(e)) {
      i.trackComponentLookupSuccess();
      return 'INSTANCE';
    }
    m(e) && i.trackComponentLookupFailure();
  },
  fromJSXElement(e, t, i) {
    let n = i.findComponentIdFromJSXName(e.type);
    if (n) {
      return {
        requiredProps: {
          componentId: n
        }
      };
    }
  },
  getFieldSerializers(e) {
    let t = [];
    if (e.includeIDs && t.push(er), e.includeNames && t.push(eg), e.includeInstanceOverrides && t.push(re), e.forcePopulateOverrideKey && t.push(tB), t.push(ec, e$, e_, eW, iB), e.permissiveTopLevelOverrides) {
      for (let i of nA.getFieldSerializers(e)) t.includes(i) || t.push(i);
    }
    return t;
  },
  supportsChildren: e => e.includeInstanceSublayers ? 'nodes' : 'none',
  getJSXChildren(e, t, i) {
    if (!t.includeInstanceSublayers) return [];
  },
  fromJSXChildren: () => ({}),
  possibleTagNames: ['ComponentXYZ']
};
let ri = null;
function rn(e, t = null) {
  let i = getTypeInfoCached(e, {
    enableTsArrays: !1
  });
  let n = [];
  for (let e of i.parsedDefs) {
    switch (e.def.type) {
      case 'BOOLEAN':
      case 'TEXT':
      case 'NUMBER':
        break;
      case 'INSTANCE_SWAP':
      case 'VARIANT':
        e.typeRepr.typeDefBody && n.push(`type ${e.typeRepr.typeName} = {${e.typeRepr.typeDefBody}}`);
    }
  }
  ri === null && (ri = rt.getFieldSerializers({
    scene: getSingletonSceneGraph(),
    ...KQ
  }).map(e => `${e.name}Fields`));
  let r = ri;
  i.propsTypeRepr.typeDefBody !== '{}' && (r = [...r, `{ componentProps: ${i.propsTypeRepr.typeDefBody} }`]);
  n.push(`type ${t || i.jsxName} = React.FC<${r.join(' & ')}>`);
  return n.join('\n');
}
export async function $$rr26(e) {
  let t = e.type === 'INSTANCE' ? [e] : e.findAllWithCriteriaGUIDs({
    types: ['INSTANCE', 'COMPONENT']
  }).map(t => e.sceneGraph.get(t)).filter(Boolean);
  if (t.length === 0) return '';
  let i = _$$B(t, {
    followInstances: !0
  });
  i.reverse();
  return i.map(e => {
    try {
      return rn(e);
    } catch (t) {
      return `// Failed to generate schema for ${e.name}`;
    }
  }).join('\n\n');
}
let ra = 'variables';
function rl(e, t) {
  let i = t.getVariableNode(e);
  if (!i) {
    return {
      collectionName: null,
      variableName: null
    };
  }
  let n = t.getVariableCollectionNode(i.variableCollectionId);
  return n ? {
    collectionName: n.name,
    variableName: i.name
  } : {
    collectionName: null,
    variableName: null
  };
}
let rs = 'styles';
function rd(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class ru {
  getRootComponentTypeInfo() {
    return this.componentTypeInfo ?? null;
  }
  getJSXNameForComponent(e) {
    let t = d(e);
    if (!t) throw new Error('Node is not a Component or Component Set');
    if (t.guid in this.componentIdToJSXName) return this.componentIdToJSXName[t.guid];
    let i = S({
      name: g(t),
      usedNames: new Set(Object.keys(this.componentJSXNameToId))
    });
    this.componentIdToJSXName[t.guid] = i;
    this.componentJSXNameToId[i] = t.guid;
    return i;
  }
  getComponentJSXNameToIdMap() {
    return this.componentJSXNameToId;
  }
  findComponentIdFromJSXName(e) {
    let t = e.toLowerCase();
    let i = this.options.componentInfoByJSXName?.[e]?.guid ?? this.componentJSXNameToId[t];
    if (i && (i = b(i, this.options.scene)?.guid), !i && m(e)) {
      let n = y(e, this.options.scene);
      n && (i = n.guid, this.componentJSXNameToId[t] = i);
    }
    return i ?? null;
  }
  variableAliasToJSXExpressionContainer(e) {
    if (!e) return null;
    let t = VariableIdHandler.fromString(e.id);
    return t ? this.variableIdToJSXExpresssionContainer(t) : null;
  }
  variableIdToJSXExpresssionContainer(e) {
    if (this.options.substituteWebSyntaxForVariables) {
      let t = function (e, t) {
        let i = t.getVariableNode(e);
        if (!i) return null;
        let n = i.variableCodeSyntax?.WEB;
        return n ? JSON.stringify(n) : null;
      }(e, this.options.scene);
      if (t) {
        return {
          type: 'JSXExpressionContainer',
          expression: t
        };
      }
    }
    let {
      collectionName,
      variableName
    } = rl(e, this.options.scene);
    return collectionName && variableName ? (this.trackVariableUsage(e), {
      type: 'JSXExpressionContainer',
      expression: `${ra}[${JSON.stringify(collectionName)}][${JSON.stringify(variableName)}]`
    }) : null;
  }
  variableDataToJSXExpressionContainer(e) {
    if (e?.value?.alias) {
      let t = e.value.alias;
      let i = VariableIdHandler.fromKiwi(t);
      if (i) return this.variableIdToJSXExpresssionContainer(i);
    }
    return null;
  }
  jsxExpressionContainerToVariable(e, t) {
    if (!Bj(e)) return;
    let {
      isVariableExpression,
      collectionName,
      variableName
    } = function (e) {
      if (!e.startsWith(`${ra}[`)) {
        return {
          isVariableExpression: !1
        };
      }
      let t = e.match(/^variables\["([^"]+)"\]\["([^"]+)"\]$/);
      return t ? {
        isVariableExpression: !0,
        collectionName: t[1],
        variableName: t[2]
      } : {
        isVariableExpression: !0,
        collectionName: void 0,
        variableName: void 0
      };
    }(e.expression);
    if (!isVariableExpression) return;
    if (!collectionName || !variableName) {
      this.trackDeserializeIssue({
        message: 'Could not parse variable expression',
        context: {
          jsxElement: t
        },
        location: e.location ?? t.parsedLocations?.opening
      });
      return;
    }
    let o = this.findVariable(collectionName, variableName);
    if (!o) {
      this.trackDeserializeIssue({
        message: 'Could not find collection or variable',
        context: {
          jsxElement: t
        },
        location: e.location ?? t.parsedLocations?.opening
      });
      return;
    }
    return o;
  }
  jsxExpressionContainerToVariableData(e, t) {
    let i = this.jsxExpressionContainerToVariable(e, t);
    if (i) {
      return {
        value: {
          alias: VariableIdHandler.toKiwi(i.id)
        },
        dataType: 'ALIAS',
        resolvedDataType: getResolvedTypeName(i.variableResolvedType)
      };
    }
  }
  jsxExpressionContainerToVariableAlias(e, t) {
    let i = this.jsxExpressionContainerToVariable(e, t);
    if (i) {
      return {
        type: 'VARIABLE_ALIAS',
        id: i.id
      };
    }
  }
  findVariableCollection(e) {
    let t = this.variableCollectionNameToId[e];
    if (t) return this.options.scene.getVariableCollectionNode(t) ?? null;
    let i = this.options.scene.getLocalVariableCollectionNodes().find(t => t.name === e);
    return i ? (this.variableCollectionNameToId[e] = i.id, i) : null;
  }
  findVariable(e, t) {
    let i = this.variableNameToId[t];
    if (i) return this.options.scene.getVariableNode(i) ?? null;
    let n = this.findVariableCollection(e);
    if (!n) return null;
    let r = n.variableIds.map(e => this.options.scene.getVariableNode(VariableIdHandler.fromString(e))).filter(e6).find(e => e.name === t);
    return r ? (this.variableNameToId[t] = r.id, r) : null;
  }
  trackVariableUsage(e) {
    this.variablesUsed.add(e);
  }
  getVariablesUsed() {
    return this.variablesUsed;
  }
  getJSXNameForStyle(e) {
    let t = toCamelCase(e.name);
    if (e.id in this.styleIdToJSXName) return this.styleIdToJSXName[e.id];
    let i = S({
      name: t,
      usedNames: new Set(Object.keys(this.styleJSXNameToId))
    });
    this.styleIdToJSXName[e.id] = i;
    this.styleJSXNameToId[i] = e.id;
    return i;
  }
  getStyleInfoByName() {
    let e = {};
    let t = getSingletonSceneGraph();
    for (let [i, n] of Object.entries(this.styleJSXNameToId)) {
      let r = t.getStyleNode(n);
      r && (e[i] = {
        id: n,
        name: r.name,
        type: r.styleType
      });
    }
    return e;
  }
  styleToJSXSpreadAttribute(e) {
    return {
      type: 'JSXSpreadAttribute',
      argument: `styles.${this.getJSXNameForStyle(e)}`
    };
  }
  jsxSpreadAttributeToStyle(e, t) {
    let i;
    if (!fW(e)) return;
    let {
      isStyleExpression,
      name
    } = (i = e.argument).startsWith(`${rs}.`) ? {
      isStyleExpression: !0,
      name: i.slice(rs.length + 1)
    } : {
      isStyleExpression: !1
    };
    if (!isStyleExpression) return;
    if (!name) {
      this.trackDeserializeIssue({
        message: 'Could not parse style expression',
        context: {
          jsxElement: t
        },
        location: e.location ?? t.parsedLocations?.opening
      });
      return;
    }
    let a = this.options.styleInfoByName?.[name]?.id;
    let l = a ? StyleIdHandler.fromString(a) : void 0;
    if (!l) {
      this.trackDeserializeIssue({
        message: 'Could not find style',
        context: {
          jsxElement: t
        },
        location: e.location ?? t.parsedLocations?.opening
      });
      return;
    }
    let s = getSingletonSceneGraph().getStyleNode(l);
    if (!s) {
      this.trackDeserializeIssue({
        message: 'Could not find style',
        context: {
          jsxElement: t
        },
        location: e.location ?? t.parsedLocations?.opening
      });
      return;
    }
    return s;
  }
  trackAssetInfo(e, t) {
    this.assetInfoByHash[e] = t;
  }
  getAssets() {
    return this.assetInfoByHash;
  }
  isSerializationRoot(e) {
    return e.guid === this.rootId;
  }
  maybeNormalizePxValue(e, t) {
    return this.options.normalizePxToRange01 && this.options.flavor === 'default' && this.rootNodeSize ? e / this.rootNodeSize[t] : e;
  }
  maybeDenormalizePxValue(e, t) {
    return this.options.normalizePxToRange01 && this.options.flavor === 'default' && this.rootNodeSize ? e * this.rootNodeSize[t] : e;
  }
  trackComponentLookup() {
    this.deserializeStats.numComponents += 1;
  }
  trackComponentLookupSuccess() {
    this.trackComponentLookup();
    this.deserializeStats.componentLookupSuccesses += 1;
  }
  trackComponentLookupFailure() {
    this.trackComponentLookup();
    this.deserializeStats.componentLookupFailures += 1;
  }
  trackSerializeIssue(e) {
    if (this.options.strict) throw new LV(e.message, e.context);
    this.serializeIssues.push(e);
  }
  getSerializeIssues() {
    return this.serializeIssues;
  }
  getDeserializeStats() {
    return {
      ...this.deserializeStats
    };
  }
  trackDeserializeIssue(e) {
    if (this.options.strict) throw new Ug(e.message, e.context);
    this.deserializeIssues.push(e);
  }
  getDeserializeIssues() {
    return this.deserializeIssues;
  }
  constructor(e, t) {
    rd(this, 'rootId', void 0);
    rd(this, 'rootNodeSize', void 0);
    rd(this, 'options', void 0);
    rd(this, 'serializeIssues', []);
    rd(this, 'deserializeStats', {
      numComponents: 0,
      componentLookupSuccesses: 0,
      componentLookupFailures: 0
    });
    rd(this, 'deserializeIssues', []);
    rd(this, 'componentTypeInfo', void 0);
    rd(this, 'componentJSXNameToId', {});
    rd(this, 'componentIdToJSXName', {});
    rd(this, 'assetInfoByHash', {});
    rd(this, 'variableCollectionNameToId', {});
    rd(this, 'variableNameToId', {});
    rd(this, 'variablesUsed', new Set());
    rd(this, 'styleJSXNameToId', {});
    rd(this, 'styleIdToJSXName', {});
    this.options = t;
    this.rootId = e.rootNode?.guid;
    this.rootNodeSize = e.rootNode?.isAlive ? e.rootNode?.size : e.originalSize;
    t.serializeAsComponentDefinition && this.rootId && (this.componentTypeInfo = getComponentInfoById(this.rootId, {
      enableTsArrays: !1,
      noTypeInfoCache: t.noTypeInfoCache,
      exposeAllNestedInstances: !0
    }));
  }
}
export function $$rp19(e, t) {
  return new ru(e, t);
}
export function $$rc25(e, t, i, n = 2) {
  let r = e.split('\n');
  let o = i.start;
  let a = i.end ?? i.start;
  let l = Math.max(o.line - n, 1);
  let s = Math.min(a.line + n, r.length);
  let d = r.slice(l - 1, s);
  let u = [`${i.start.line}:${i.start.column}: ${t}`];
  for (let e = 1; e <= d.length; e++) {
    let t = e + l - 1;
    let i = d[e - 1];
    if (void 0 === i) throw new Error('Input line is undefined');
    if (u.push(`| ${i}`), t < o.line || t > a.line) continue;
    let n = t === o.line ? Math.max(o.column, 1) : 1;
    let r = t === a.line ? Math.min(a.column, i.length) : i.length;
    u.push(`| ${' '.repeat(n - 1)}${'^'.repeat(r - n + 1)}`);
  }
  return u.join('\n');
}
function rf(e, t, i = null) {
  for (let n of (i?.layoutMetadata.width === 'hug-contents' && t.layoutMetadata.width === 'fill-parent' && e.trackDeserializeIssue({
    message: 'Width "fill-parent" is invalid with parent width set to "hug-contents"',
    context: {
      jsxElement: null
    },
    location: t.debuggingMetadata.location
  }), i?.layoutMetadata.height === 'hug-contents' && t.layoutMetadata.height === 'fill-parent' && e.trackDeserializeIssue({
    message: 'Height "fill-parent" is invalid with parent height set to "hug-contents"',
    context: {
      jsxElement: null
    },
    location: t.debuggingMetadata.location
  }), t.childrenMetadata.children || [])) typeof n == 'object' && n && rf(e, n, t);
}
async function rh(e, t, i) {
  t && t.type === TextOverflowType.TextOverflow || i.trackDeserializeIssue({
    message: 'Unexpected edit quality issue',
    context: {
      jsxElement: e
    }
  });
  t.location || i.trackDeserializeIssue({
    message: 'Edit quality issue has no child node ID',
    context: {
      jsxElement: e
    }
  });
  i.trackDeserializeIssue({
    message: 'Text is overflowing its bounds. Please ensure the text fits within its parent container.',
    context: {
      jsxElement: e
    }
  });
}
export function $$rm39(e, t = {}) {
  let {
    jsxElement,
    ...n
  } = $$rg40(e, t);
  return {
    jsxStr: _$$V(jsxElement, t.formatterOptions),
    ...n
  };
}
export function $$rg40(e, t = {}) {
  let i = {
    ...KQ,
    scene: e.sceneGraph,
    ...t,
    tailwind: t.tailwind || t.tailwindOnly,
    includeStyles: t.includeStyles && !t.tailwind,
    assetGenerationRequests: t.includeAssetGenerationRequests ? t.assetGenerationRequests : []
  };
  let o = $$rp19({
    rootNode: e
  }, i);
  if (!e.isAlive) {
    throw new LV('Node does not exist', {
      guid: e.guid
    });
  }
  let a = new Set();
  let d = {
    node: e,
    options: i,
    nodeSerializers: $$nZ29(i),
    context: o,
    depth: 0,
    startTime: performance.now(),
    serializeReason: 'serialize-jsx',
    serializedIds: a
  };
  t.assetGenerationRequests?.length && !t.includeAssetGenerationRequests && o.trackSerializeIssue({
    message: 'Generation requests were provided but not included in serialization',
    context: {
      guid: e.guid
    }
  });
  return l(i.materializeInvisibleChildren, e, () => {
    let t = i.focusNodeId ? function ({
      node: e,
      nodeSerializers: t,
      options: i,
      context: r,
      serializeReason: o,
      startTime: a,
      serializedIds: l
    }) {
      let s = i.scene;
      let d = i.focusNodeId;
      if (!d) return null;
      let u = s.get(d);
      if (!u) {
        r.trackSerializeIssue({
          message: 'Focus node not found',
          context: {
            guid: d
          }
        });
        return null;
      }
      let p = {};
      let c = [u];
      if (u.guid !== e.guid) {
        let t = u.parentNode;
        for (; t && t.guid !== e.guid && t.type !== 'CANVAS';) {
          c.push(t);
          let e = t.parentNode;
          if (!e) return null;
          t = e;
        }
        if (!t || t.guid !== e.guid) {
          r.trackSerializeIssue({
            message: 'Focus node is not a descendant of the node',
            context: {
              guid: d
            }
          });
          return null;
        }
        c.push(t);
      }
      let f = new Set();
      let h = 0;
      let m = u;
      if (i.serializeAllFocusNodeAncestors) {
        for (let e of c) {
          let n = n6({
            node: e,
            nodeSerializers: t,
            options: i,
            context: r,
            depth: 0,
            startTime: a,
            serializeReason: o,
            excludeChildren: !0
          });
          n && (p[e.guid] = n, h++);
        }
      }
      for (let [e, l] of c.entries()) {
        if (i.maxSerializeNodes && h >= i.maxSerializeNodes || i.maxSerializeTimeMs && performance.now() - a >= i.maxSerializeTimeMs) break;
        m = l;
        (function (e, t, i) {
          let n = [e];
          for (; n.length;) {
            let e = n.shift();
            if (!e) continue;
            let {
              node,
              depth
            } = e;
            if (t.has(node.guid)) continue;
            t.add(node.guid);
            let a = i({
              node,
              depth
            });
            if (a === 1) break;
            if (a !== 2) {
              for (let e of node.childrenNodes) {
                n.push({
                  node: e,
                  depth: depth + 1
                });
              }
            }
          }
        })({
          node: l,
          depth: c.length - e - 1
        }, f, ({
          node: e,
          depth: l
        }) => {
          if (i.maxSerializeNodes && h >= i.maxSerializeNodes || i.maxSerializeTimeMs && performance.now() - a >= i.maxSerializeTimeMs) return n.BREAK;
          if (!p[e.guid]) {
            let s = n6({
              node: e,
              nodeSerializers: t,
              options: i,
              context: r,
              depth: l,
              startTime: a,
              serializeReason: o,
              excludeChildren: !0,
              nodeCount: h
            });
            if (!s) return n.SKIP;
            p[e.guid] = s;
            h++;
          }
          return e.isInstance && !i.includeInstanceSublayers || e.isInImmutableFrame ? n.SKIP : n.CONTINUE;
        });
      }
      let g = i.serializeAllFocusNodeAncestors ? e : m;
      !function e(t, i) {
        for (let n of t.childrenNodes) e(n, i);
        i(t);
      }(g, e => {
        let t = p[e.guid];
        if (t) {
          for (let n of i.orderChildrenByXY ? H(e) : $(e)) {
            let e = p[n.guid];
            e && t.children.push(e);
          }
          if (i.excludeEmptyContainers && (e.isGroup || e.type === 'FRAME')) {
            let i = e.isGroup ? ey.GROUP : ey.FRAME;
            let n = e.name.replace(/\d/g, '').replace(/\s/g, '');
            i && i.includes(n) && !t.children.length && delete p[e.guid];
          }
        }
      });
      let y = p[g.guid];
      if (!y) return null;
      for (let e of Object.keys(p)) l?.add(e);
      return y;
    }(d) : n6(d);
    if (!t) {
      throw new LV('Unable to serialize node', {
        guid: e.guid
      });
    }
    let l = i.ignoreFetchingComponentData ? {} : function (e, t, i) {
      let n = {};
      for (let o of _$$B([e], {
        followInstances: !0
      })) {
        let e = n6({
          node: o,
          options: t,
          nodeSerializers: $$nZ29(t),
          context: i,
          depth: 0,
          startTime: performance.now(),
          serializeReason: 'referenced-component'
        });
        if (e) {
          let a = _$$V(e);
          let l = i.getJSXNameForComponent(o);
          if (n[l] = {
            guid: o.guid,
            name: o.name,
            jsxStr: a,
            jsxName: l
          }, t.includeTypescriptTypes) {
            try {
              n[l].typescriptType = rn(o, l);
            } catch (e) {
              if (t.strict) throw e;
            }
          }
        }
      }
      return n;
    }(e, i, o);
    let u = i.includeVariables ? function (e, t) {
      let i = {};
      for (let n of e) {
        let e = t.getVariableNode(n);
        if (e) {
          let n = t.getVariableCollectionNode(e.variableCollectionId);
          if (!n) continue;
          let r = n.name;
          i[r] || (i[r] = {});
          i[r][e.name] = e.valuesByMode[n.defaultModeId];
        }
      }
      return Object.keys(i).length === 0 ? null : function (e, t) {
        let i = new eo();
        for (let [n, r] of (i.append('const variables = {'), i.newline(), Object.entries(e))) {
          for (let [e, o] of (i.append(`  ${JSON.stringify(n)}: {`), i.newline(), Object.entries(r))) {
            if (typeof o == 'object' && 'type' in o && o.type === 'VARIABLE_ALIAS') {
              let n = VariableIdHandler.fromString(o.id);
              if (!n) continue;
              let {
                collectionName,
                variableName
              } = rl(n, t);
              if (!collectionName || !variableName) continue;
              i.append(`    ${JSON.stringify(e)}: () => variables[${JSON.stringify(collectionName)}][${JSON.stringify(variableName)}],`);
            } else {
              i.append(`    ${JSON.stringify(e)}: ${JSON.stringify(o)},`);
            }
            i.newline();
          }
          i.append('  },');
          i.newline();
        }
        i.append('}');
        return i.toString();
      }(i, t);
    }(o.getVariablesUsed(), i.scene) ?? void 0 : void 0;
    return {
      jsxElement: t,
      componentInfoByJSXName: l,
      assetsByName: o.getAssets(),
      originalSize: e.size,
      issues: o.getSerializeIssues(),
      ...(i.focusNodeId ? {
        serializedIds: Array.from(a)
      } : {}),
      ...(i.includeVariables ? {
        variablesObjDefinition: u
      } : {}),
      ...(i.includeStyles ? {
        styleInfoByName: o.getStyleInfoByName()
      } : {})
    };
  });
}
export async function $$ry21(e, t = {}) {
  let i = _$$S(e)?.[0];
  if (!i) {
    return {
      node: null,
      generationRequests: [],
      issues: []
    };
  }
  let n = await $$rS22(i, t);
  for (let t of n.issues) t.location && (t.formatted = $$rc25(e, t.message, t.location));
  return n;
}
async function rb(e, t, i) {
  if (!t.componentInfoByJSXName) return;
  let n = t.scene;
  for (let r of function e(t) {
    let i = new Set();
    for (let n of (m(t.type) && i.add(t), t.children)) {
      if (n instanceof Object && !('expression' in n)) {
        for (let t of e(n)) i.add(t);
      }
    }
    return i;
  }(e)) {
    let o = r.type;
    let a = t.componentInfoByJSXName[o];
    if (!a || !a.jsxStr || y(o, n)) continue;
    let l = await $$ry21(a.jsxStr, t);
    if (l.node && l.node.type === 'SYMBOL') {
      let r = g(l.node);
      t.componentInfoByJSXName[r] = {
        guid: l.node.guid,
        jsxStr: a.jsxStr,
        name: l.node.name,
        jsxName: r
      };
      let o = n.getInternalCanvas();
      o ? o.appendChild(l.node) : i.trackDeserializeIssue({
        message: 'Could not find hidden canvas to place deserialized component',
        context: {
          jsxElement: e
        },
        location: e.parsedLocations?.full
      });
    }
  }
}
export async function $$rS22(e, t = {}) {
  let i = {
    ...KQ,
    scene: getSingletonSceneGraph(),
    ...t,
    componentInfoByJSXName: {
      ...(t.componentInfoByJSXName || {})
    }
  };
  let n = $$rp19({
    originalSize: i.originalSize
  }, i);
  await rb(e, i, n);
  let r = n3({
    jsxElement: e,
    options: i,
    context: n,
    nodeSerializers: $$nZ29(i),
    depth: 0
  });
  if (!r) {
    return {
      node: null,
      generationRequests: [],
      issues: n.getDeserializeIssues(),
      stats: n.getDeserializeStats()
    };
  }
  t.checkEditQuality && (await rf(n, r));
  let {
    outputNode,
    generationRequests
  } = await ee({
    declarativeNode: r,
    oldDeclarativeNode: void 0,
    serializerOptions: i
  });
  return {
    node: outputNode,
    generationRequests,
    issues: n.getDeserializeIssues(),
    stats: n.getDeserializeStats()
  };
}
export async function $$rT34({
  node: e,
  jsxStr: t,
  oldJSXStr: i,
  options: n = {},
  editScopeType: o,
  outerEditScopeLabel: a
}) {
  let l = _$$S(t)?.[0];
  if (!l) {
    return {
      node: null,
      generationRequests: [],
      issues: []
    };
  }
  let s = i ? _$$S(i)?.[0] : void 0;
  let d = await $$rz35({
    jsxElement: l,
    node: e,
    oldJSXElement: s,
    options: n,
    editScopeType: o,
    outerEditScopeLabel: a
  });
  for (let e of d.issues) e.location && (e.formatted = $$rc25(t, e.message, e.location));
  return d;
}
export async function $$rz35({
  jsxElement: e,
  node: t,
  oldJSXElement: i,
  options: n = {},
  editScopeType: r,
  outerEditScopeLabel: a
}) {
  if (!e) {
    return {
      node: null,
      generationRequests: [],
      issues: []
    };
  }
  let l = t?.sceneGraph ?? getSingletonSceneGraph();
  let s = {
    ...KQ,
    scene: l,
    ...n
  };
  let d = $$rp19({
    rootNode: t,
    originalSize: s.originalSize
  }, s);
  let u = n3({
    jsxElement: e,
    options: s,
    context: d,
    nodeSerializers: $$nZ29(s),
    depth: 0
  });
  let p = d.getDeserializeStats();
  if (!u) {
    return {
      node: null,
      generationRequests: [],
      issues: d.getDeserializeIssues(),
      stats: p
    };
  }
  if (t) {
    if (!t.isAlive) {
      return {
        node: null,
        generationRequests: [],
        issues: d.getDeserializeIssues()
      };
    }
    i || (i = $$rg40(t, s).jsxElement);
  }
  let c = i ? n3({
    jsxElement: i,
    options: s,
    context: d,
    nodeSerializers: $$nZ29(s),
    depth: 0
  }) : null;
  n.checkEditQuality && (rf(d, u), function (e, t, i) {
    let n = i?.sceneGraph ?? getSingletonSceneGraph();
    if (!n) {
      console.debug('No active scene graph found for self-healing');
      return;
    }
    let r = i?.guid ? AssistantTools?.checkEditQualityOfSubtree(n.scene, i.guid) : AssistantTools?.checkEditQualityOfScene(n.scene);
    if (!r || r.length === 0) {
      console.debug('No edit quality issues found for self-healing');
      return;
    }
    for (let i of (console.warn('Edit quality issues detected:', r), r)) rh(e, i, t);
  }(e, d, t));
  let {
    outputNode,
    generationRequests
  } = await ee({
    nodeId: t?.guid,
    declarativeNode: u,
    oldDeclarativeNode: c,
    serializerOptions: s,
    editScopeType: r,
    outerEditScopeLabel: a
  });
  return {
    node: outputNode,
    generationRequests,
    issues: d.getDeserializeIssues(),
    stats: p
  };
}
export function $$rx31(e) {
  try {
    if (!_$$S(e, {
      strict: !0
    })) {
      let t = 'Strict JSX parsing returned no elements';
      let i = {
        start: {
          line: 1,
          column: 1
        },
        end: {
          line: 1,
          column: 1
        }
      };
      return {
        message: t,
        context: {
          jsxElement: null
        },
        location: i,
        formatted: $$rc25(e, t, i)
      };
    }
  } catch (n) {
    let t = n.message.replace(/ *(\d+:\d+)$/, '');
    let i = {
      start: n.loc,
      end: n.loc
    };
    return {
      message: t,
      context: {
        jsxElement: null
      },
      location: i,
      formatted: $$rc25(e, t, i)
    };
  }
  return null;
}
function rI(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let $$rE12 = _$$z.array(_$$z.number());
let rN = _$$z.object({
  type: _$$z.literal('JSXSpreadAttribute'),
  argument: _$$z.string()
});
let $$rv3 = _$$z.object({
  type: _$$z.literal('INSERT'),
  path: $$rE12,
  element: _$$z.any(),
  index: _$$z.number()
});
let $$rO5 = _$$z.object({
  type: _$$z.literal('REMOVE'),
  path: $$rE12,
  index: _$$z.number(),
  removedElement: _$$z.any()
});
let $$rA7 = _$$z.object({
  type: _$$z.literal('REPLACE'),
  path: $$rE12,
  element: _$$z.any(),
  replacedElement: _$$z.any()
});
let $$rC9 = _$$z.object({
  type: _$$z.literal('SET_PROP'),
  path: $$rE12,
  prop: _$$z.string(),
  value: _$$z.any(),
  previousValue: _$$z.any().optional()
});
let $$rw4 = _$$z.object({
  type: _$$z.literal('REMOVE_PROP'),
  path: $$rE12,
  prop: _$$z.string(),
  removedValue: _$$z.any()
});
let $$rR10 = _$$z.object({
  type: _$$z.literal('SET_SPREAD'),
  path: $$rE12,
  spread: rN.optional(),
  previousSpread: rN.optional()
});
let $$rP11 = _$$z.object({
  type: _$$z.literal('SET_TEXT'),
  path: $$rE12,
  text: _$$z.string(),
  previousText: _$$z.string()
});
let $$rk6 = _$$z.object({
  type: _$$z.literal('REPLACE_CHILD'),
  path: $$rE12,
  index: _$$z.number(),
  child: _$$z.any(),
  replacedChild: _$$z.any()
});
let $$rj8 = _$$z.union([$$rv3, $$rO5, $$rA7, $$rC9, $$rw4, $$rR10, $$rP11, $$rk6]);
let rL = class {
  push(e) {
    this.heap.push(e);
    this.bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();
    let e = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return e;
  }
  get size() {
    return this.heap.length;
  }
  bubbleUp(e) {
    if (e === 0) return;
    let t = Math.floor((e - 1) / 2);
    if (!this.heap[t] || !this.heap[e]) throw new Error('Invalid heap state');
    this.compare(this.heap[e], this.heap[t]) < 0 && ([this.heap[e], this.heap[t]] = [this.heap[t], this.heap[e]], this.bubbleUp(t));
  }
  bubbleDown(e) {
    let t = 2 * e + 1;
    let i = 2 * e + 2;
    let n = e;
    let r = this.heap[n];
    if (!r) throw new Error('Invalid heap state');
    if (t < this.heap.length && this.heap[t] && this.compare(this.heap[t], r) < 0 && (n = t), i < this.heap.length && this.heap[i] && this.compare(this.heap[i], r) < 0 && (n = i), n !== e) {
      let t = this.heap[e];
      if (!t) throw new Error('Invalid heap state');
      [this.heap[e], this.heap[n]] = [r, t];
      this.bubbleDown(n);
    }
  }
  constructor(e) {
    rI(this, 'compare', void 0);
    rI(this, 'heap', void 0);
    this.compare = e;
    this.heap = [];
  }
};
function rD(e, t = [], i = [], n = 0) {
  if (!e) return [];
  let r = [];
  r.push({
    element: e,
    path: [...t],
    parentPath: [...i],
    indexInParent: n
  });
  typeof e == 'object' && 'type' in e && 'children' in e && e.children.forEach((e, i) => {
    r.push(...rD(e, [...t, i], t, i));
  });
  return r;
}
function rV(e) {
  switch (e) {
    case 'match':
      return 0;
    case 'update':
      return 1;
    case 'insert':
    case 'remove':
      return 2;
    default:
      return 1 / 0;
  }
}
function rM(e, t) {
  if (e === t) return !0;
  if (e == null || t == null || typeof e != typeof t || typeof e != 'object' || Array.isArray(e) !== Array.isArray(t)) return !1;
  if (Array.isArray(e)) {
    if (e.length !== t.length) return !1;
    for (let i = 0; i < e.length; i++) {
      if (!rM(e[i], t[i])) return !1;
    }
    return !0;
  }
  let i = Object.keys(e);
  let n = Object.keys(t);
  if (i.length !== n.length) return !1;
  for (let r of i) {
    if (!n.includes(r) || !rM(e[r], t[r])) return !1;
  }
  return !0;
}
export function $$r_23(e, t) {
  if (!e && !t) return [];
  if (!e && t) {
    return [$$rv3.parse({
      type: 'INSERT',
      path: [],
      element: t,
      index: 0
    })];
  }
  if (e && !t) {
    return [$$rO5.parse({
      type: 'REMOVE',
      path: [],
      index: 0,
      removedElement: e
    })];
  }
  if (!e || !t || function e(t, i) {
    if (t === i) return !0;
    if (!t || !i || typeof t != typeof i) return !1;
    if (typeof t == 'string') return t === i;
    if (typeof t == 'object' && typeof i == 'object') {
      if (t.type !== i.type) return !1;
      if (t.type === 'JSXExpressionContainer' && i.type === 'JSXExpressionContainer') return t.expression === i.expression;
      if ('children' in t && 'children' in i) {
        if (t.children.length !== i.children.length || !rM(t.props, i.props) || !rM(t.spreadAttributes, i.spreadAttributes)) return !1;
        for (let n = 0; n < t.children.length; n++) {
          if (!e(t.children[n], i.children[n])) return !1;
        }
        return !0;
      }
    }
    return !1;
  }(e, t)) {
    return [];
  }
  let i = rD(e);
  let n = rD(t);
  let r = new Set();
  let o = new rL((e, t) => e.cost - t.cost);
  o.push({
    leftIndex: 0,
    rightIndex: 0,
    cost: 0,
    patchNode: null
  });
  let a = e => `${e.leftIndex},${e.rightIndex}`;
  for (; o.size > 0;) {
    let e = o.pop();
    let t = a(e);
    if (!r.has(t)) {
      if (r.add(t), e.leftIndex >= i.length && e.rightIndex >= n.length) {
        return function (e) {
          let t = [];
          let i = e;
          for (; i;) {
            t.unshift(i.patch);
            i = i.parent;
          }
          return t;
        }(e.patchNode).map(e => $$rj8.parse(e));
      }
      for (let t of function (e, t, i) {
        let n = [];
        let {
          leftIndex,
          rightIndex,
          cost,
          patchNode
        } = e;
        if (leftIndex < t.length) {
          let e = t[leftIndex];
          if (!e) return n;
          let i = $$rO5.parse({
            type: 'REMOVE',
            path: e.parentPath,
            index: e.indexInParent,
            removedElement: e.element
          });
          n.push({
            leftIndex: leftIndex + 1,
            rightIndex,
            cost: cost + rV('remove'),
            patchNode: {
              patch: i,
              parent: patchNode
            }
          });
        }
        if (rightIndex < i.length) {
          let e = i[rightIndex];
          if (!e) return n;
          let t = $$rv3.parse({
            type: 'INSERT',
            path: e.parentPath,
            element: e.element,
            index: e.indexInParent
          });
          n.push({
            leftIndex,
            rightIndex: rightIndex + 1,
            cost: cost + rV('insert'),
            patchNode: {
              patch: t,
              parent: patchNode
            }
          });
        }
        if (leftIndex < t.length && rightIndex < i.length) {
          let s;
          let d;
          let u;
          let p;
          let c;
          let f;
          let h;
          let m;
          let e = t[leftIndex];
          let g = i[rightIndex];
          if (!e || !g) return n;
          if (s = e.element, d = g.element, typeof s == 'string' && typeof d == 'string' || typeof s == 'object' && s.type === 'JSXExpressionContainer' && typeof d == 'object' && d.type === 'JSXExpressionContainer' || typeof s == 'object' && 'type' in s && typeof s.type == 'string' && typeof d == 'object' && 'type' in d && typeof d.type == 'string' && s.type === d.type) {
            let t = [];
            let i = rV('match');
            typeof e.element == 'string' && typeof g.element == 'string' ? (u = e.element, p = g.element, c = e.path, (t = u !== p ? [$$rP11.parse({
              type: 'SET_TEXT',
              path: c,
              text: p,
              previousText: u
            })] : []).length > 0 && (i = rV('update'))) : typeof e.element == 'object' && e.element.type === 'JSXExpressionContainer' && typeof g.element == 'object' && g.element.type === 'JSXExpressionContainer' ? (f = e.element, h = g.element, m = e.path, (t = f.expression !== h.expression ? [$$rA7.parse({
              type: 'REPLACE',
              path: m,
              element: h,
              replacedElement: f
            })] : []).length > 0 && (i = rV('update'))) : typeof e.element == 'object' && 'type' in e.element && typeof g.element == 'object' && 'type' in g.element && (t = function (e, t, i) {
              let n = [];
              if (!rM(e.spreadAttributes, t.spreadAttributes)) {
                let r = $$rR10.parse({
                  type: 'SET_SPREAD',
                  path: i,
                  spread: t.spreadAttributes,
                  previousSpread: e.spreadAttributes
                });
                n.push(r);
              }
              let r = e.props || {};
              let o = t.props || {};
              for (let e of new Set([...Object.keys(r), ...Object.keys(o)])) {
                let t = r[e];
                let a = o[e];
                if (!rM(t, a)) {
                  if (void 0 === a) {
                    let r = $$rw4.parse({
                      type: 'REMOVE_PROP',
                      path: i,
                      prop: e,
                      removedValue: t
                    });
                    n.push(r);
                  } else {
                    let r = $$rC9.parse({
                      type: 'SET_PROP',
                      path: i,
                      prop: e,
                      value: a,
                      previousValue: t
                    });
                    n.push(r);
                  }
                }
              }
              return n;
            }(e.element, g.element, e.path)).length > 0 && (i = rV('update'));
            let s = patchNode;
            for (let e of t) {
              s = {
                patch: e,
                parent: s
              };
            }
            n.push({
              leftIndex: leftIndex + 1,
              rightIndex: rightIndex + 1,
              cost: cost + i,
              patchNode: s
            });
          }
        }
        return n;
      }(e, i, n)) {
        let e = a(t);
        r.has(e) || o.push(t);
      }
    }
  }
  return [$$rA7.parse({
    type: 'REPLACE',
    path: [],
    element: t,
    replacedElement: e
  })];
}
let rF = /^@name\(([A-Za-z1-9]+)\)\s*(.*)/;
function rX(e) {
  let t = e.match(rF);
  return t ? {
    name: t[1] ?? '',
    description: t[2] ?? ''
  } : {
    name: '',
    description: e
  };
}
let rB = ['onCopy', 'onCopyCapture', 'onCut', 'onCutCapture', 'onPaste', 'onPasteCapture', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyPressCapture', 'onKeyUp', 'onKeyUpCapture', 'onAuxClick', 'onAuxClickCapture', 'onClick', 'onClickCapture', 'onContextMenu', 'onContextMenuCapture', 'onDoubleClick', 'onDoubleClickCapture', 'onDrag', 'onDragCapture', 'onDragEnd', 'onDragEndCapture', 'onDragEnter', 'onDragEnterCapture', 'onDragExit', 'onDragExitCapture', 'onDragLeave', 'onDragLeaveCapture', 'onDragOver', 'onDragOverCapture', 'onDragStart', 'onDragStartCapture', 'onDrop', 'onDropCapture', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseMoveCapture', 'onMouseOut', 'onMouseOutCapture', 'onMouseOver', 'onMouseOverCapture', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onSelectCapture', 'onTouchCancel', 'onTouchCancelCapture', 'onTouchEnd', 'onTouchEndCapture', 'onTouchMove', 'onTouchMoveCapture', 'onTouchStart', 'onTouchStartCapture', 'onPointerDown', 'onPointerDownCapture', 'onPointerMove', 'onPointerMoveCapture', 'onPointerUp', 'onPointerUpCapture', 'onPointerCancel', 'onPointerCancelCapture', 'onPointerEnter', 'onPointerEnterCapture', 'onPointerLeave', 'onPointerLeaveCapture', 'onPointerOver', 'onPointerOverCapture', 'onPointerOut', 'onPointerOutCapture', 'onGotPointerCapture', 'onGotPointerCaptureCapture', 'onLostPointerCapture', 'onLostPointerCaptureCapture', 'onScroll', 'onScrollCapture', 'onWheel', 'onWheelCapture'];
export async function $$rG27(e, {
  includeInteractionProps: t = !1
} = {}) {
  let i = {
    ...KQ,
    scene: getSingletonSceneGraph(),
    ...e
  };
  let n = $$nZ29(i);
  let r = `/**
Figma JSX Typings

Generated from jsx-cli

bazel run //share/jsx-cli:jsx-cli -- generate-react-props /path/to/output.d.ts
*/

import React, { FC, PropsWithChildren, ReactNode } from 'react'`;
  let a = {};
  let l = [];
  let s = [];
  let d = {
    TextChildren: '{ children?: string | number | boolean | null | undefined }'
  };
  t && (d.SupportedInteractions = rB.map(e => `
  | "${e}"`).join(''), d.Interactions = '{ [k in SupportedInteractions]?: React.DOMAttributes<HTMLElement>[k] }');
  let u = {};
  for (let e of n) {
    let n = e.getFieldSerializers(i);
    for (let {
      jsxType,
      fieldSerializers
    } of (Array.isArray(e.possibleTagNames) ? e.possibleTagNames : e.possibleTagNames(i)).map(e => typeof e == 'string' ? {
      jsxType: e
    } : e)) {
      if (!u[jsxType]) {
        let l = function (e, t, i) {
          let n = {};
          let r = e => {
            let i = {};
            Object.entries(e.shape).forEach(([e, n]) => {
              let r = n._def.typeName === 'ZodOptional';
              let o = function e(t, i, n = !1) {
                let {
                  name
                } = rX(t.description ?? '');
                if (!n && name) {
                  if (!i[name]) {
                    let n = e(t, i, !0);
                    n && (i[name] = n);
                  }
                  return name;
                }
                if (t._def.typeName === 'ZodOptional') return `${e(t._def.innerType, i, n)} | undefined`;
                if (t._def.typeName === 'ZodNumber') return 'number';
                if (t._def.typeName === 'ZodString') return 'string';
                if (t._def.typeName === 'ZodBoolean') return 'boolean';
                if (t._def.typeName === 'ZodArray') {
                  let n = e(t._def.type, i);
                  let r = t._def.exactLength?.value;
                  return r ? `[${new Array(r).fill(n).join(', ')}]` : `Array<${n}>`;
                }
                if (t._def.typeName === 'ZodObject') {
                  let n = Object.fromEntries(Object.entries(t._def.shape()).map(([t, n]) => {
                    let r = n._def.typeName === 'ZodOptional';
                    let o = e(r ? n._def.innerType : n, i);
                    return [t, {
                      isOptional: r,
                      tsType: o
                    }];
                  }));
                  if (n.type?.tsType === '\'JSXExpressionContainer\'') {
                    let {
                      type,
                      expression,
                      location,
                      ...r
                    } = n;
                    if (!(Object.keys(r).length > 0)) return null;
                    n = r;
                  }
                  return `{ ${Object.entries(n).map(([e, {
                    isOptional: t,
                    tsType: i
                  }]) => `${e}${t ? '?' : ''}: ${i}`).join('; ')} }`;
                }
                if (t._def.typeName === 'ZodRecord') {
                  let n = e(t._def.keyType, i);
                  let r = e(t._def.valueType, i);
                  return `Record<${n}, ${r}>`;
                }
                return t._def.typeName === 'ZodEnum' ? t._def.values.map(e => `'${e}'`).join(' | ') : t._def.typeName === 'ZodUnion' || t._def.typeName === 'ZodDiscriminatedUnion' ? t._def.options.map(t => e(t, i)).filter(Boolean).join(' | ') : t._def.typeName === 'ZodNullable' ? `${e(t._def.innerType, i, n)} | null` : t._def.typeName === 'ZodLiteral' ? typeof t._def.value == 'string' ? `'${t._def.value}'` : `${t._def.value}` : t._def.typeName === 'ZodTuple' ? `[${t._def.items.map(e).join(', ')}]` : 'any';
              }(r ? n._def.innerType : n, t);
              o && (i[e] = {
                type: o,
                descriptionRaw: n.description,
                optional: r
              });
            });
            let n = Object.entries(i).map(([e, {
              type: t,
              descriptionRaw: i,
              optional: n
            }]) => {
              let {
                description
              } = rX(i ?? '');
              let o = description ? `  /** ${description} */
` : '';
              return `${o}  ${e}${n ? '?' : ''}: ${t};`;
            }).join('\n');
            if (n) {
              return {
                body: `{
${n}
}`,
                docstring: e.description
              };
            }
          };
          e.forEach(e => {
            let t = e.outputSchema(i);
            let o = t._def.typeName === 'ZodNullable';
            let a = o ? t.unwrap() : t;
            if (!a.shape) return;
            let l = `${e.name}Fields`;
            let s = r(a);
            s && (o && (s.body += ' | null'), n[l] = s);
          });
          return n;
        }(_$$c((fieldSerializers ?? n).filter(e => e.name !== 'SharedPluginData'), i), d, i);
        Object.assign(a, l);
        let s = Object.keys(l).map(e => `${e}`);
        let p = e.supportsChildren(i);
        p === 'text' && s.push('TextChildren');
        t && s.push('Interactions');
        let c = s.join(' & ');
        let f = p === 'nodes';
        u[jsxType] = {
          typeIntersection: c,
          supportsNodeChildren: f
        };
      }
    }
  }
  for (let [e, t] of Object.entries(d)) l.push(`type ${e} = ${t}`);
  for (let [e, {
    typeIntersection: t,
    supportsNodeChildren: i
  }] of Object.entries(u)) {
    let n = t ? `
${t}
` : '{}';
    let r = i ? `FC<PropsWithChildren<${n}>>` : `FC<${n}>`;
    s.push(`export const ${e}: ${r}`);
  }
  let p = [];
  for (let [e, t] of Object.entries(a).sort(([e], [t]) => e.localeCompare(t))) {
    p.push(`${t.docstring ? `/** ${t.docstring} */
` : ''}type ${e} = ${t.body}`);
  }
  return [r, l.join('\n\n'), p.join('\n\n'), s.join('\n')].join('\n\n');
}
export function $$rJ30(e, t, i) {
  if (!(e.type === 'SYMBOL' || e.isStateGroup)) throw new Error(`Expected SYMBOL or isStateGroup, got: ${e.type}`);
  t = {
    includePropsType: !0,
    enableTsArrays: !1,
    serializeAllVariants: !1,
    maxVariantsResultSize: void 0,
    topLevelComponentProps: !1,
    formatJSX: !0,
    ...t
  };
  let n = getComponentInfoById(e.guid, {
    enableTsArrays: !!t.enableTsArrays,
    noTypeInfoCache: !!t.noTypeInfoCache,
    exposeAllNestedInstances: !0
  });
  if (!n) throw new Error(`Could not find typeInfo for node: ${e.guid}`);
  let r = Object.values(n.prefixTypes);
  let o = new eo();
  let a = n.parsedDefs.map(e => e.devFriendlyProp.type === 'DERIVED_BOOLEAN' ? '' : e.devFriendlyProp.type === 'SIMPLE_CHOICE' ? e.def.type === 'VARIANT' && 'defaultValue' in e.def ? `${e.devFriendlyProp.key} = ${JSON.stringify(e.def.defaultValue)}` : e.devFriendlyProp.key : e.devFriendlyProp.type === 'GROUPED_INSTANCE_SWAP' || e.devFriendlyProp.type === 'IMAGE' ? e.devFriendlyProp.key : e.devFriendlyProp.type === 'SIMPLE' ? 'defaultValue' in e.def ? `${e.devFriendlyProp.key} = ${JSON.stringify(e.def.defaultValue)}` : e.devFriendlyProp.key : e.devFriendlyProp.type === 'ARRAY' ? t.enableTsArrays ? e.devFriendlyProp.index !== 0 ? '' : e.devFriendlyProp.key : e.devFriendlyProp.nonArrayKey : void throwTypeError(e.devFriendlyProp)).filter(Boolean);
  if (t.includePropsType) {
    let e = `${n.jsxName}Props`;
    a.length > 0 && n.propsTypeRepr.typeDefBody && (o.append(`type ${e} = `), o.append(es(n.propsTypeRepr.typeDefBody)), o.newline());
    o.append(`function ${n.jsxName}(`);
    a.length > 0 && (t.topLevelComponentProps ? (o.append(`{ ${a.join(', ')} }`), o.append(`: ${e}`)) : o.append(`{componentProps} : {componentProps: ${e}}`));
    o.append(') {');
  } else {
    o.append(`const ${n.jsxName}: React.FC<${n.propsTypeRepr.typeDefBody ?? '{}'}> = (`);
    a.length > 0 && o.append(`{${a.join(', ')}}`);
    o.append(') => {');
  }
  if (o.newline(), !t.topLevelComponentProps && a.length > 0 && (o.append(`  const { ${a.join(', ')} } = componentProps`), o.newline()), e.type === 'SYMBOL') {
    o.append(t.formatJSX ? el(r$(e, t, i)) : `  return ${r$(e, t, i)}`);
    o.newline();
    o.append('}');
  } else if (e.isStateGroup) {
    let n = !0;
    if (t.serializeAllVariants) {
      let r = t.maxVariantsResultSize;
      let a = 0;
      for (let l of e.childrenNodes) {
        let e = new eo();
        if (l.type !== 'SYMBOL') continue;
        let s = l.variantProperties();
        if (s) {
          if (n && t.formatJSX && e.append('  '), n || e.append(' else '), e.append('if ('), e.append(Object.entries(s).map(([e, t]) => `${toCamelCase(e)} === ${JSON.stringify(t)}`).join(' && ')), e.append(') {'), t.formatJSX ? (e.newline(), e.append(ea(el(r$(l, t, i)), '  ')), e.newline(), e.append('  }')) : (e.append(`    return ${r$(l, t, i)}`), e.newline(), e.append('}')), r) {
            let t = e.toString().length;
            if (!n && a + t > r) break;
            a += t;
          }
          o.append(e.toString());
          n = !1;
        }
      }
      t.formatJSX ? (o.newline(), o.append('  return null')) : o.append('  return null;');
    } else {
      let n = e.defaultVariant;
      if (n) {
        let e = n;
        o.append(t.formatJSX ? el(r$(e, t, i)) : `  return ${r$(e, t, i)}`);
      } else {
        o.append('return null');
      }
    }
    o.newline();
    o.append('}');
  }
  return {
    nodeId: e.guid,
    prefixTypes: t.formatJSX ? r.map(e => function (e) {
      if (e === CUSTOM_IMAGE_TYPE_STR) return e;
      let t = e.indexOf('{');
      let i = e.lastIndexOf('}');
      return t === -1 || i === -1 ? e : e.substring(0, t) + es(e.substring(t, i + 1)) + e.substring(i + 1);
    }(e)) : r,
    jsxStr: o.toString()
  };
}
let rH = {
  serializeAsComponentDefinition: !0,
  flavor: 'default',
  tailwind: !0,
  tailwindOnly: !0,
  includeIDs: !1,
  includeNames: !1,
  normalizeRootXY: !0,
  ignoreFetchingComponentData: !0
};
function r$(e, t, i = {}) {
  if (e.type !== 'SYMBOL') throw new Error(`Unexpected node type: ${e.type}`);
  return function (e, t = {}) {
    let {
      jsxElement,
      ...n
    } = $$rg40(e, t);
    return {
      jsxStr: _$$V(jsxElement, t.formatterOptions),
      ...n
    };
  }(e, {
    ...rH,
    topLevelComponentProps: t.topLevelComponentProps,
    ...i
  }).jsxStr || 'null';
}
function rW(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class rK {
  recordCreateNode(e, t) {
    let i = {
      editType: 'createNode',
      guid: e.guid,
      nodeType: t
    };
    this.edits.push(i);
    this.guidToSubtree[e.guid] = {
      descendants: [e.guid],
      editReference: i
    };
  }
  recordSetProperty(e, t, i) {
    let n = {
      editType: 'setProperty',
      guid: e.guid,
      key: t,
      value: i
    };
    for (let [t, i] of Object.entries(this.guidToSubtree)) i.descendants.includes(e.guid) || this.finalizeSubtree(t);
    (n.guid !== this.rootGuid || n.key !== 'x' && n.key !== 'y') && this.edits.push(n);
  }
  finalize() {
    for (let e in this.guidToSubtree) this.finalizeSubtree(e);
  }
  finalizeSubtree(e) {
    let t = this.guidToSubtree[e];
    if (!t) throw new Error(`Subtree not found for guid ${e}`);
    let i = t.editReference;
    let n = getSingletonSceneGraph().get(e);
    if (!n) throw new Error(`Node not found for guid ${e}`);
    let a = {
      scene: n.sceneGraph,
      ...KQ,
      includeIDs: !1,
      includeNames: !1
    };
    let l = n6({
      node: n,
      options: a,
      nodeSerializers: $$nZ29(a),
      context: this.context,
      depth: 0,
      startTime: performance.now(),
      serializeReason: 'serialize-jsx'
    });
    let s = [];
    let d = [];
    for (let e of this.edits) e !== i && t.descendants.includes(e.guid) ? d.push(e) : s.push(e);
    l && (i.nodeJsx = {
      jsxText: _$$V(l),
      guidsInJSX: t.descendants,
      subtreeEdits: d
    });
    this.edits = s;
    delete this.guidToSubtree[e];
  }
  recordFunctionCall(e, t, i) {
    t === 'insertChild' && i[1] === e.childrenNodes.length && (t = 'appendChild', i = [i[0], i[2]]);
    for (let e = 0; e < i.length; e++) {
      i[e] instanceof SceneNode && (i[e] = {
        guid: i[e].guid
      });
    }
    let n = this.guidToSubtree[e.guid];
    if (n && (t === 'insertChild' || t === 'appendChild')) {
      let e = i[0].guid;
      let t = this.guidToSubtree[e];
      if (t) {
        n.descendants.push(...t.descendants);
        delete this.guidToSubtree[e];
      } else {
        let t = getSingletonSceneGraph().get(e);
        if (!t) throw new Error(`Child ${e} not found in guidToSubtree`);
        n.descendants.push(...function e(t) {
          let i = [t.guid];
          t.childrenNodes.forEach(t => {
            i.push(t.guid);
            i.push(...e(t));
          });
          return i;
        }(t));
      }
    }
    this.edits.push({
      editType: 'callMethod',
      guid: e.guid,
      funcName: t,
      args: i
    });
  }
  createProxy(e) {
    let t = this;
    return new Proxy(e, {
      get: (e, i) => {
        let n = e[i];
        return typeof n == 'function' ? (...r) => (t.recordFunctionCall(e, i, r), n.bind(e)(...r)) : n;
      },
      set: (e, i, n) => {
        let r = e[i];
        e[i] = n;
        r !== n && t.recordSetProperty(e, i, n);
        return !0;
      }
    });
  }
  constructor({
    context: e,
    rootGuid: t
  }) {
    rW(this, 'edits', []);
    rW(this, 'context', void 0);
    rW(this, 'rootGuid', void 0);
    rW(this, 'guidToSubtree', {});
    this.context = e;
    this.rootGuid = t;
  }
}
export async function $$rq38({
  node: e,
  editedJsx: t,
  serializerOptions: i
}) {
  let n = {
    ...KQ,
    scene: e.sceneGraph,
    ...i
  };
  let o = $$rp19({}, n);
  let a = e.parentNode;
  let l = a.stackMode;
  let s = e.parentNode?.childrenGuids.indexOf(e.guid);
  let d = n3({
    jsxElement: n6({
      node: e,
      options: n,
      nodeSerializers: $$nZ29(n),
      context: o,
      depth: 0,
      startTime: performance.now(),
      serializeReason: 'serialize-jsx'
    }),
    options: n,
    context: o,
    nodeSerializers: $$nZ29(n),
    depth: 0
  });
  let u = n3({
    jsxElement: _$$S(t)?.[0],
    options: n,
    context: o,
    nodeSerializers: $$nZ29(n),
    depth: 0
  });
  try {
    let t = new rK({
      context: o,
      rootGuid: e.guid
    });
    let i = await D({
      declarativeNode: u
    });
    let r = new $$Y13({
      resourceStatus: i,
      recorder: t,
      scene: n.scene,
      serializerOptions: n
    });
    let p = new $$K15({
      guid: a.guid,
      runtime: r
    });
    let c = new $$K15({
      guid: e.guid,
      runtime: r
    });
    await Z({
      declarativeNode: u,
      oldDeclarativeNode: d,
      oldRootXY: {
        x: e.x,
        y: e.y
      },
      nodeShim: c,
      parentNodeShim: p,
      indexInParent: s,
      runtime: r,
      newParentDirection: l,
      oldParentDirection: l,
      serializerOptions: n,
      newNodeIds: new Set()
    });
    t.finalize();
    return {
      jsStr: function (e, t) {
        let i = [];
        let n = 0;
        let r = {};
        let o = {};
        let a = e => {
          if (e in o) throw new Error('Attempt to assign guid to variable twice');
          e === t ? o[e] = 'root' : (o[e] = `node${n}`, n += 1);
          return o[e];
        };
        let l = e => {
          if (e in o) return o[e];
          {
            if (e in r) throw new Error('Cannot reference node created through JSX');
            let t = a(e);
            i.push(`const ${t} = await figma.getNodeByIdAsync(${JSON.stringify(e)})`);
            return t;
          }
        };
        for (let t of e) {
          switch (t.editType) {
            case 'createNode':
              {
                let e = t.nodeJsx;
                if (e) {
                  r[t.guid] = e.jsxText;
                } else {
                  let e = a(t.guid);
                  i.push(`const ${e} = figma.create${t.nodeType.toLowerCase().replace(/(^|_)([a-z])/g, (e, t, i) => {
                    return i.toUpperCase();
                  })}()`);
                }
                break;
              }
            case 'setProperty':
              {
                let e = l(t.guid);
                i.push(`${e}.${t.key.toString()} = ${JSON.stringify(t.value)}`);
                break;
              }
            case 'callMethod':
              {
                let e = l(t.guid);
                switch (t.funcName) {
                  case 'update':
                    break;
                  case 'insertChild':
                    if (t.args[0].guid in r) {
                      i.push(`await ${e}.insertChildJsx(${t.args[1]}, ${r[t.args[0].guid]})`);
                    } else {
                      let n = l(t.args[0].guid);
                      i.push(`${e}.insertChild(${t.args[1]}, ${n})`);
                    }
                    break;
                  case 'appendChild':
                    if (t.args[0].guid in r) {
                      i.push(`await ${e}.appendChildJsx(${r[t.args[0].guid]})`);
                    } else {
                      let n = l(t.args[0].guid);
                      i.push(`${e}.appendChild(${n})`);
                    }
                    break;
                  default:
                    i.push(`${e}.${t.funcName.toString()}(${t.args.map(e => JSON.stringify(e)).join(', ')})`);
                }
              }
          }
        }
        return i.join('\n');
      }(t.edits, e.guid),
      serializeIssues: o.getSerializeIssues(),
      deserializeIssues: o.getDeserializeIssues(),
      edits: t.edits
    };
  } finally {
    V();
  }
}
export const CallMethodRecord = D1;
export const CreateNodeRecord = ao;
export const DeserializeIssueSchema = Mn;
export const JSXPatchInsertSchema = $$rv3;
export const JSXPatchRemovePropSchema = $$rw4;
export const JSXPatchRemoveSchema = $$rO5;
export const JSXPatchReplaceChildSchema = $$rk6;
export const JSXPatchReplaceSchema = $$rA7;
export const JSXPatchSchema = $$rj8;
export const JSXPatchSetPropSchema = $$rC9;
export const JSXPatchSetSpreadSchema = $$rR10;
export const JSXPatchSetTextSchema = $$rP11;
export const JSXPathSchema = $$rE12;
export const ReconciliationRuntime = $$Y13;
export const SceneNodeRecord = sU;
export const SceneNodeShim = $$K15;
export const SerializerOptionsSchema = Y_;
export const SetPropertyRecord = _$$tV;
export const applyFieldSerializersToDeclarativeNode = $$n918;
export const createSerializerContext = $$rp19;
export const defaultOptions = KQ;
export const deserializeJSX = $$ry21;
export const deserializeJSXElement = $$rS22;
export const diffJSX = $$r_23;
export const fieldSerializerOrdering = $$n024;
export const formatError = $$rc25;
export const generateComponentsSchema = $$rr26;
export const generateSchema = $$rG27;
export const getDescribedBooleanOptionLabels = UD;
export const getNodeSerializers = $$nZ29;
export const getReactFunctionComponentDefinition = $$rJ30;
export const getStrictParseError = $$rx31;
export const reconcileConstraints = $$P32;
export const reconcileFallbackWidthAndHeightIfHug = $$R33;
export const reconcileJSX = $$rT34;
export const reconcileJSXElement = $$rz35;
export const reconcileWidthAndHeight = $$w36;
export const reconcileXY = $$C37;
export const serializeEditsJS = $$rq38;
export const serializeJSX = $$rm39;
export const serializeJSXElement = $$rg40;
export const writeNonTextProps = $$Q41;