import { Children, createElement, useEffect, useMemo, useState } from 'react';
import i from 'react-reconciler';
import { Fragment, jsx } from 'react/jsx-runtime';
import { Cd, mn } from '../048e062c/416936';
import { ZP } from '../048e062c/444406';
import { N as _$$N } from '../048e062c/525184';
import { permissionScopeHandler } from '../905/189185';
import { VS } from '../905/696699';
import { getSingletonSceneGraph } from '../905/700578';
import { applyFieldSerializersToDeclarativeNode, createSerializerContext, fieldSerializerOrdering, reconcileConstraints, reconcileWidthAndHeight, reconcileXY, ReconciliationRuntime, SceneNodeShim, writeNonTextProps } from '../5973/625973';
import { getObservableValue } from '../figma_app/84367';
import { Fk } from '../figma_app/167249';
import { TrackType, SceneGraphTsApi } from '../figma_app/763686';
import { useLatestRef } from '../figma_app/922077';
import { A as _$$A6 } from '../vendor/55270';
import { A as _$$A5 } from '../vendor/255778';
import { A as _$$A2 } from '../vendor/308491';
import { A as _$$A4 } from '../vendor/520489';
import { A as _$$A3 } from '../vendor/527842';
import { DefaultEventPriority } from '../vendor/846192';
import { useDebounce } from 'use-debounce';
let p = new ReconciliationRuntime({
  resourceStatus: {
    loadedFonts: {},
    fontFallbacks: {}
  },
  scene: getSingletonSceneGraph()
});
let f = i({
  supportsMutation: !0,
  supportsPersistence: !1,
  supportsMicrotasks: !0,
  isPrimaryRenderer: !0,
  supportsHydration: !1,
  createInstance: (e, t) => {
    let r = function (e) {
      switch (e) {
        case 'frame':
          return 'FRAME';
        case 'group':
          return 'GROUP';
        case 'slice':
          return 'SLICE';
        case 'ellipse':
          return 'ELLIPSE';
        case 'polygon':
          return 'REGULAR_POLYGON';
        case 'componentDefinitionRef':
          return 'SYMBOL';
        case 'componentXYZ':
          return 'INSTANCE';
        case 'text':
        case 'link':
        case 'orderedList':
        case 'unorderedList':
          return 'TEXT';
        case 'vector':
          return 'VECTOR';
        case 'booleanOperation':
          return 'BOOLEAN_OPERATION';
        case 'line':
          return 'LINE';
        case 'rectangle':
          return 'ROUNDED_RECTANGLE';
        case 'star':
          return 'STAR';
        case 'section':
          return 'SECTION';
        case 'sticky':
          return 'STICKY';
        default:
          throw new Error('Unknown node type');
      }
    }(e);
    let n = x(r, e, t);
    let l = p.createNodeFromType(r, n.requiredProps, TrackType.IGNORE);
    g(l, e, t);
    r === 'TEXT' && typeof t.children == 'string' && h(l, t.children);
    return l;
  },
  createTextInstance(e) {
    let t = p.createNodeFromType('TEXT', {}, TrackType.IGNORE);
    h(t, e);
    y(t, 'text', {});
    return t;
  },
  finalizeInitialChildren: () => !1,
  shouldSetTextContent: (e, t) => e === 'vector' || e === 'path' || (e === 'text' || e === 'link' || e === 'unorderedList' || e === 'orderedList') && typeof t.children == 'string',
  getRootHostContext: () => null,
  getChildHostContext: e => e,
  getPublicInstance: e => e,
  prepareForCommit: () => null,
  resetAfterCommit() {},
  preparePortalMount() {},
  scheduleTimeout: (e, t) => +setTimeout(e, t),
  cancelTimeout(e) {
    clearTimeout(e);
  },
  noTimeout: -1,
  scheduleMicrotask(e) {
    queueMicrotask(e);
  },
  getCurrentEventPriority: () => DefaultEventPriority,
  appendInitialChild(e, t) {
    e.insertChild(e.children.length, t.guid);
  },
  appendChild(e, t) {
    e.insertChild(e.children.length, t.guid);
  },
  appendChildToContainer(e, t) {
    e.insertChild(e.children.length, t.guid);
  },
  insertBefore(e, t, r) {
    let n = e.children.findIndex(e => e.guid === r.guid);
    e.insertChild(n, t.guid);
  },
  insertInContainerBefore(e, t, r) {
    let n = e.children.findIndex(e => e.guid === r.guid);
    e.insertChild(n, t.guid);
  },
  removeChild(e, t) {
    t.isNodeAlive && t.removeNode();
  },
  removeChildFromContainer(e, t) {
    t.isNodeAlive && t.removeNode();
  },
  resetTextContent(e) {
    h(e, '');
  },
  commitTextUpdate(e, t, r) {
    h(e, r);
  },
  commitMount() {},
  prepareUpdate: (e, t, r, n) => ({
    oldProps: r,
    newProps: n
  }),
  commitUpdate(e, t, r, n, l) {
    g(e, r, l, n);
  },
  hideInstance(e) {
    m(e, 0);
  },
  hideTextInstance(e) {
    m(e, 0);
  },
  unhideInstance(e, t) {
    m(e, ('opacity' in t && typeof t.opacity == 'number' ? t.opacity : 1) ?? 1);
  },
  unhideTextInstance(e) {
    m(e, 1);
  },
  clearContainer(e) {
    permissionScopeHandler.system('renderer-clear-container', () => {
      e.children.forEach(e => {
        e.isNodeAlive && e.removeNode();
      });
    });
  },
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur() {},
  prepareScopeUpdate() {},
  getInstanceFromScope: () => null,
  detachDeletedInstance() {}
});
function h(e, t) {
  permissionScopeHandler.system('renderer-set-text-content', () => {
    e.writeProperty('textContent', t);
  });
}
function m(e, t) {
  permissionScopeHandler.system('renderer-set-opacity', () => {
    e.writeProperty('opacity', t);
  });
}
function g(e, t, r, n = null) {
  let l = x(e.type, t, r);
  let i = n ? x(e.type, t, n) : null;
  writeNonTextProps({
    declarativeNode: l,
    oldDeclarativeNode: i,
    nodeShim: e,
    runtime: p
  });
  p.safeWriteProperty(() => {
    reconcileWidthAndHeight({
      nodeShim: e,
      declarativeNode: l,
      oldDeclarativeNode: i,
      newParentDirection: 'VERTICAL',
      oldParentDirection: 'NONE'
    });
  });
  p.safeWriteProperty(() => {
    reconcileXY({
      nodeShim: e,
      declarativeNode: l,
      oldDeclarativeNode: i
    });
  });
  p.safeWriteProperty(() => {
    reconcileConstraints({
      declarativeNode: l,
      nodeShim: e,
      oldDeclarativeNode: i
    });
  });
  y(e, t, r);
  void 0 !== r.drillDownKey && e.writeProperty('jsxDrillDownKey', `${r.drillDownKey}`);
}
function y(e, t, r) {
  e.writeProperty('jsxStableKeyPart', t);
  void 0 !== r.stableKey && e.writeProperty('jsxStableKeyOverride', `${r.stableKey}`);
}
function x(e, t, r) {
  let n = function (e, t) {
    let r;
    let n;
    if (e === 'VECTOR' && t.children) {
      let e = [];
      Children.forEach(t.children, t => {
        if (t && typeof t == 'object' && 'props' in t) {
          let n = t.props;
          typeof n.cornerRadius == 'number' && (r = n.cornerRadius);
          typeof n.fillRule == 'string' && typeof n.data == 'string' && e.push({
            windingRule: n.fillRule.toUpperCase(),
            data: n.data
          });
        }
      });
      n = VS(e);
    }
    return {
      nodeType: e,
      requiredProps: {},
      props: typeof r == 'number' ? {
        cornerRadius: r
      } : {},
      customProperties: typeof n == 'object' ? {
        vectorNetwork: n
      } : {},
      componentProps: {},
      textMetadata: {},
      layoutMetadata: {},
      childrenMetadata: {},
      debuggingMetadata: {},
      deserializeMetadata: {}
    };
  }(e, r);
  applyFieldSerializersToDeclarativeNode(n, fieldSerializerOrdering, e, {
    type: t,
    props: r,
    children: [],
    spreadAttributes: void 0
  }, {
    flavor: 'default',
    scene: getSingletonSceneGraph()
  }, createSerializerContext({}, {
    flavor: 'default',
    scene: getSingletonSceneGraph()
  }), 0);
  return n;
}
function b() {}
function E(e) {
  return createElement('frame', e);
}
function T(e) {
  return createElement('rectangle', e);
}
let O = {
  top: 40,
  right: 0,
  bottom: 0,
  left: 0
};
let k = '#eaedff';
function z(e) {
  let {
    data,
    keys,
    getX0Value,
    scales,
    dimensions,
    width,
    height
  } = e;
  if (!data.length || !keys.length || !scales || !dimensions || !getX0Value) return null;
  let {
    x0Scale,
    x1Scale,
    yScale,
    colorScale
  } = scales;
  let {
    yMax
  } = dimensions;
  return x1Scale ? jsx(E, {
    width,
    height,
    fill: k,
    cornerRadius: 14,
    children: jsx(_$$A2, {
      data,
      keys,
      height: yMax,
      x0: getX0Value,
      x0Scale,
      x1Scale,
      yScale,
      color: colorScale,
      children: e => e.map(e => e.bars.map(t => jsx(T, {
        stableKey: `bar-${e.index}-${t.index}-${t.key}`,
        drillDownKey: `bar-${t.key}`,
        x: e.x0 + t.x,
        y: t.y,
        width: t.width,
        height: t.height,
        fill: t.color
      }, `bar-${e.index}-${t.index}-${t.key}`)))
    })
  }) : null;
}
function j(e) {
  let {
    data,
    keys,
    getX0Value,
    scales,
    width,
    height
  } = e;
  if (!data.length || !keys.length || !scales || !getX0Value) return null;
  let {
    x0Scale,
    yScale,
    colorScale
  } = scales;
  return jsx(E, {
    width,
    height,
    fill: k,
    cornerRadius: 14,
    children: jsx(_$$A3, {
      data,
      keys,
      x: getX0Value,
      xScale: x0Scale,
      yScale,
      color: colorScale,
      children: e => e.map(e => e.bars.map(t => jsx(T, {
        stableKey: `bar-${e.index}-${t.index}-${t.key}`,
        drillDownKey: `bar-${t.key}`,
        x: t.x,
        y: t.y,
        height: t.height,
        width: t.width,
        fill: t.color
      }, `bar-${e.index}-${t.index}-${t.key}`)))
    })
  });
}
function D({
  jsxProps: e,
  width: t,
  height: r
}) {
  let o = function ({
    jsxProps: e,
    width: t,
    height: r
  }) {
    let {
      data,
      keys
    } = ZP(e);
    let {
      chartType,
      color1,
      color2,
      color3,
      color4,
      color5
    } = e;
    return useMemo(() => {
      if (!data.length || !keys.length) {
        return {
          data: [],
          keys: [],
          getX0Value: null,
          scales: null,
          dimensions: null
        };
      }
      let e = e => e.date || '';
      let l = t - O.left - O.right;
      let p = r - O.top - O.bottom;
      let f = _$$A4({
        domain: data.map(e),
        padding: 0.2
      });
      f.rangeRound([0, l]);
      let h = _$$A5({
        domain: keys,
        range: [color1, color2, color3, color4, color5]
      });
      let m = data.reduce((e, t) => {
        let r = keys.reduce((e, r) => e += Number(t[r] || 0), 0);
        e.push(r);
        return e;
      }, []);
      let g = chartType === _$$N.BAR_GROUPED ? _$$A6({
        domain: [0, Math.max(...data.map(e => Math.max(...keys.map(t => Number(e[t])))))]
      }) : _$$A6({
        domain: [0, Math.max(...m)],
        nice: !0
      });
      g.range([p, 0]);
      let y = _$$A4({
        domain: keys,
        padding: 0.1
      });
      y.rangeRound([0, f.bandwidth()]);
      return {
        data,
        keys,
        getX0Value: e,
        scales: {
          x0Scale: f,
          yScale: g,
          x1Scale: y,
          colorScale: h
        },
        dimensions: {
          xMax: l,
          yMax: p
        }
      };
    }, [data, keys, chartType, t, r, color1, color2, color3, color4, color5]);
  }({
    jsxProps: e,
    width: t,
    height: r
  });
  return e.chartType === _$$N.BAR_STACKED ? jsx(j, {
    ...o,
    width: t,
    height: r
  }) : e.chartType === _$$N.BAR_GROUPED ? jsx(z, {
    ...o,
    width: t,
    height: r
  }) : null;
}
let U = new Set();
export function $$K0() {
  let e = getObservableValue(SceneGraphTsApi?.jsxNodeIds(getSingletonSceneGraph().scene), U);
  return jsx(Fragment, {
    children: Array.from(e).map(e => jsx(L, {
      jsxNodeId: e
    }, e))
  });
}
function L({
  jsxNodeId: e
}) {
  let [t, r] = useState(null);
  useEffect(() => {
    let t = getSingletonSceneGraph().get(e);
    t && r(function (e) {
      let t = new SceneNodeShim({
        guid: e.guid,
        runtime: p
      });
      let r = f.createContainer(t, 0, null, !1, !1, '', () => {}, null);
      return {
        render: (e, t = b) => f.updateContainer(e, r, null, t)
      };
    }(t));
  }, [e]);
  let i = Cd(e);
  let a = mn(e);
  let s = Fk((e, t) => e.get(t)?.size.x || 0, e);
  let c = Fk((e, t) => e.get(t)?.size.y || 0, e);
  let [u] = useDebounce(s, 100);
  let [h] = useDebounce(c, 100);
  let m = useLatestRef(a);
  let [g, y] = useState(0);
  useEffect(() => {
    !0 === m && !1 === a && y(e => e + 1);
  }, [m, a]);
  useEffect(() => {
    t && i && t.render(jsx(D, {
      width: u,
      height: h,
      jsxProps: i
    }, `chart-${g}`));
  }, [t, i, e, u, h, g]);
  return null;
}
export const ReactScenegraphRoot = $$K0;
