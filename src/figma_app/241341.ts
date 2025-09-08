import E from 'classnames';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { ar } from '../905/71';
import { _ as _$$_ } from '../905/39853';
import { useSprigWithSampling } from '../905/99656';
import { registerModal, ModalSupportsBackground } from '../905/102752';
import { hideModal } from '../905/156213';
import { ServiceCategories as _$$e } from '../905/165054';
import { O0, Ox, wv } from '../905/247509';
import { kiwiParserCodec } from '../905/294864';
import { getI18nString, renderI18nText } from '../905/303541';
import { $ as _$$$ } from '../905/330495';
import { iZ } from '../905/372672';
import { cF } from '../905/382883';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { L6 } from '../905/498948';
import { globalPerfTimer } from '../905/542194';
import { bL, c$ } from '../905/575478';
import { sceneDocumentType as _$$G } from '../905/582379';
import { getFeatureFlags } from '../905/601108';
import { PerfTimer } from '../905/609396';
import { G as _$$G2 } from '../905/630430';
import { F as _$$F } from '../905/642505';
import { i as _$$i, P as _$$P } from '../905/647955';
import { ReduxSceneGraph, getSingletonSceneGraph } from '../905/700578';
import { G as _$$G3 } from '../905/702115';
import { u as _$$u, qW, Ss, xY } from '../905/720292';
import { H1, q1 } from '../905/822030';
import { $8, f as _$$f, rb as _$$rb, S as _$$S, _H, b6, bV, dp, gO, Ik, K9, Kk, Lq, m7, m_, mq, ND, nL, Q9, sh, t4, tH, vF, Wc, wH, xZ, ZJ, Zl } from '../905/850755';
import { AW, cs, FO } from '../905/869235';
import { defaultSessionLocalIDString, sessionLocalIDToString } from '../905/871411';
import { dF, Dx, mH } from '../905/917193';
import { sf } from '../905/929976';
import { q as _$$q } from '../905/932270';
import { lE, mf, NI, X$ } from '../905/945781';
import { kF, zg } from '../905/993733';
import { E1 } from '../figma_app/9054';
import { atom, useAtomValueAndSetter } from '../figma_app/27355';
import { Y6 } from '../figma_app/91703';
import { rb } from '../figma_app/151869';
import { aS, Cr } from '../figma_app/221114';
import { mJ } from '../figma_app/311375';
import { w1 } from '../figma_app/449837';
import { tS } from '../figma_app/516028';
import { HISTORY_DOCUMENT_INDEX } from '../figma_app/518682';
import { _W, DS, q0, Q4, Qp, R$, t$ } from '../figma_app/571341';
import { eY } from '../figma_app/722362';
import { DiffImpl, SceneGraphHelpers, Fullscreen, FileSourceType, UIVisibilitySetting } from '../figma_app/763686';
import { _t, Ht, Nb, tP, V_, w_ } from '../figma_app/841351';
import { lF } from '../figma_app/915202';
import { Ib } from '../figma_app/955484';
import { useSelector, useDispatch } from '../vendor/514228';
let y = E;
let ea = [2, 3, 6, 13, 25, 50, 75, 100, 200, 300, 1e3];
function es(e, t, r) {
  if (!r) return !1;
  let n = t.get(sessionLocalIDToString(e));
  if (!n) return !1;
  let i = n.absoluteBoundingBox;
  return !!i && i.x < r.x + r.w && i.x + i.w > r.x && i.y < r.y + r.h && i.y + i.h > r.y;
}
function eo(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y,
    width: e.w,
    height: e.h
  };
}
function el(e, t, r = !1) {
  if (!t) return null;
  let n = e.get(t);
  return n ? r ? n.absoluteRenderBounds : n.absoluteBoundingBox : null;
}
function ed(e) {
  return !!(e?.basis?.styleType || e?.change?.styleType);
}
function ec(e, t, r) {
  let n = e?.basis?.guid ? sessionLocalIDToString(e.basis.guid) : defaultSessionLocalIDString;
  let i = ed(e) ? null : el(t.scene, n, !1);
  let a = e?.change.guid ? sessionLocalIDToString(e.change.guid) : defaultSessionLocalIDString;
  let s = e?.state === 'removed' || ed(e) ? null : el(r.scene, a, !1);
  let o = i && t.baseBox ? eo(i, t.baseBox) : null;
  let l = s && r.baseBox ? eo(s, r.baseBox) : null;
  return {
    before: {
      id: n,
      box: o,
      name: e?.basis?.name
    },
    after: {
      id: a,
      box: l,
      name: e?.change.name
    }
  };
}
function eu({
  frameId: e,
  historyFrameId: t,
  historySceneGraph: r,
  chunkChanges: n,
  discreteDiffing: a,
  setChunkChanges: d
}) {
  let c = eY();
  let [u, p] = useAtomValueAndSetter(Ib);
  let m = useMemo(() => a ? SceneGraphHelpers.getLayerGUIDMapping(t, r.scene, e, c.scene) : void 0, [a, e, t, r.scene, c.scene]);
  useEffect(() => {
    if (n) return;
    let i = DiffImpl.getNodeTree(t, r.scene, !a);
    let u = DiffImpl.getNodeTree(e, c.scene, !a);
    if (!i || !u) {
      p(new Map());
      d({});
      return;
    }
    globalPerfTimer.reset('dev_mode.compare_changes.diffing', t);
    globalPerfTimer.start('dev_mode.compare_changes.diffing', {
      key: t
    });
    let {
      deltaTree,
      deltaNodeMap
    } = function (e, t, r, n, i, a, d = !0) {
      let c;
      let u = new Map();
      let p = kiwiParserCodec.decodeMessage(e.nodeChanges).nodeChanges;
      let m = kiwiParserCodec.decodeMessage(t.nodeChanges).nodeChanges;
      if (!p || !m) {
        return {
          deltaTree: {},
          deltaNodeMap: u
        };
      }
      let g = new Map();
      let f = 0;
      !function e(t) {
        if (f >= p.length) {
          reportError(_$$e.DEVELOPER_TOOLS, new Error('History node index out of bounds'));
          return null;
        }
        for (let r of (g.set(t.id, {
          change: p[f],
          node: t
        }), f++, t.children)) e(r);
      }(e.tree);
      let E = d ? r.get(sessionLocalIDToString(m[0].guid)) : null;
      let y = p[0] && d ? n.get(sessionLocalIDToString(p[0].guid)) : null;
      let b = E?.absoluteBoundingBox || null;
      let T = y?.absoluteBoundingBox || null;
      function I(e, t, r) {
        u.set(e, t.value);
        NI(r, t);
      }
      let S = 0;
      let v = function e(t, c = {}) {
        let p;
        let f;
        if (S >= m.length) {
          reportError(_$$e.DEVELOPER_TOOLS, new Error('Node index out of bounds'));
          return {};
        }
        let E = m[S];
        let y = S === 0;
        S++;
        let v = a ? a.get(t.id) ?? defaultSessionLocalIDString : t.id;
        let x = g.get(v);
        let N = {
          previousChange: x?.change,
          currentChange: E,
          isRootNode: y
        };
        if (x) {
          let e = function (e, t, r, n, i) {
            let a = new Map();
            for (let [l, d] of AW) {
              let c = null;
              let u = null;
              if (ar(l) && (e[l] && e[l].guid && (c = sessionLocalIDToString(e[l].guid)), t[l] && t[l].guid && (u = sessionLocalIDToString(t[l].guid))), c || u) {
                let p = function (e, t) {
                  if (t) {
                    if (l === 'styleIdForStrokeFill') {
                      e.strokePaints = t.fillPaints;
                      return;
                    }
                    for (let r of d) e[r] = t[r];
                  }
                };
                let h = u ? DiffImpl.getNodeTree(u, n.scene, i)?.nodeChanges : null;
                let m = c ? DiffImpl.getNodeTree(c, r.scene, i)?.nodeChanges : null;
                let g = h ? kiwiParserCodec.decodeMessage(h).nodeChanges?.[0] : null;
                let f = m ? kiwiParserCodec.decodeMessage(m).nodeChanges?.[0] : null;
                if (p(t, g), p(e, f), g && !f) {
                  a.set(l, {
                    state: 'removed',
                    previousChange: g,
                    currentChange: {
                      phase: 'REMOVED'
                    }
                  });
                } else if (!g && f) {
                  a.set(l, {
                    state: 'added',
                    previousChange: {
                      phase: 'REMOVED'
                    },
                    currentChange: f
                  });
                } else if (g && f) {
                  for (let e of ['name', ...d]) {
                    if (!cF(g[e], f[e])) {
                      a.set(l, {
                        state: 'changed',
                        previousChange: g,
                        currentChange: f
                      });
                      break;
                    }
                  }
                }
              }
            }
            return a;
          }(E, x?.change, r, n, i);
          for (let e of cs) {
            if (!cF(x.change[e], E[e]) && (e !== 'textData' || x.change[e]?.characters !== E[e]?.characters)) {
              if (e === 'transform' && y || d && !es(x.change.guid, n, b) && !es(E.guid, r, b)) {
                continue;
              }
              N.state = 'changed';
              break;
            }
          }
          e.size > 0 && (N.changedStyles = e);
        } else {
          (!d || es(E.guid, r, b)) && (N.state = 'added');
        }
        for (let r of (E.guid && (N.state || N.changedStyles) && (f = {
          value: N
        }), p = f || c, f && I(sessionLocalIDToString(E.guid), f, c), t.children.forEach(t => e(t, p)), x?.node?.children || [])) {
          g.has(r.id) && function ({
            checkOverlap: e,
            parent: t,
            nodeId: r
          }) {
            let i = g.get(r);
            if (e && !es(i?.change.guid, n, T)) return;
            let a = {
              value: {
                state: 'removed',
                previousChange: i?.change,
                currentChange: {
                  phase: 'REMOVED'
                }
              }
            };
            u.has(sessionLocalIDToString(g.get(r)?.change.guid)) && reportError(_$$e.DEVELOPER_TOOLS, new Error('Error generating deleted nodes'));
            let s = sessionLocalIDToString(i?.change.guid);
            I(s, a, t);
            g.$$delete(s);
          }({
            checkOverlap: d,
            nodeId: r.id,
            parent: p
          });
        }
        g.$$delete(v);
        return c;
      }(t.tree);
      if (!v.value && v.children && v.children.length === 1) {
        let e = v.children[0];
        delete e.parent;
        c = e;
      } else {
        c = v;
      }
      return {
        deltaTree: c,
        deltaNodeMap: u
      };
    }(i, u, c, r, !a, m, !0);
    p(deltaNodeMap);
    d(X$(deltaTree, e => {
      let t = e.value;
      let r = null;
      let n = t.state;
      (t.state === 'added' || t.state === 'changed') && (r = {
        isRootNode: !!t.isRootNode,
        basis: t.previousChange ? t.previousChange : {
          phase: 'REMOVED'
        },
        change: t.currentChange,
        state: n
      });
      t.state === 'removed' && t.previousChange && (r = {
        isRootNode: !!t.isRootNode,
        basis: t.previousChange,
        change: {
          phase: 'REMOVED'
        },
        state: n
      });
      t.changedStyles && (r || (r = {
        isRootNode: !!t.isRootNode,
        basis: t.previousChange,
        change: t.currentChange,
        state: n
      }), r.changedStyles = t.changedStyles);
      return {
        result: r
      };
    }));
    let E = globalPerfTimer.tryStop('dev_mode.compare_changes.diffing', t);
    E && trackEventAnalytics('dev_mode.compare_changes.diffing', {
      type: 'node_changes',
      durationMs: E
    }, {
      forwardToDatadog: !0
    });
  }, [e, p, n, d, t, r.scene, c.scene, m, r, c, a]);
  useEffect(() => () => {
    p(new Map());
  }, [p]);
  return null;
}
export function $$ep1(e, t, r, n) {
  let i = debugState.getState().selectedView;
  t(sf({
    ...i,
    compareChangesVersionId: e,
    filterStatusVersions: r,
    compareChangesNodeId: n || void 0,
    compareChangesActivityId: void 0
  }));
}
function e_(e, t) {
  if (e.isState) {
    let t = e.parentNode?.name;
    return t ? `${t}/${e.name}` : e.name;
  }
  if (t.singleBackingSymbol && t.singleBackingStateGroup) {
    let r = t.singleBackingSymbol.name;
    return r ? `${e.name}/${r}` : e.name;
  }
  return e.name;
}
function eh(e) {
  return {
    node: mJ(e),
    backingSymbolData: _$$$([e])
  };
}
export function $$em3({
  nodeId: e,
  detachedComponentsScene: t,
  documentIndex: r,
  linterScene: n,
  showError: i
}) {
  let a;
  a = r === HISTORY_DOCUMENT_INDEX ? FileSourceType.HISTORY : t ? FileSourceType.DETACHED_COMPONENTS : n ? FileSourceType.LINTER : _$$G;
  let s = new ReduxSceneGraph(a);
  let o = s.get(e)?.absoluteRenderBounds || {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
  let l = 0;
  let d = !0;
  return () => ({
    nodeBounds: {
      x: o.x,
      y: o.y,
      width: o.w,
      height: o.h
    },
    getImage: ({
      scale: i,
      clipRect: a
    }) => {
      let o;
      let c = Date.now();
      c - l > 1e4 && (l = c, (o = new PerfTimer('performance.dev_mode.compare_changes.get_image', {})).start());
      let u = L6(e, r, t, n, i, a);
      if (o) {
        let e = o.stop();
        let t = u?.image?.length ?? 0;
        e && t && trackEventAnalytics('performance.dev_mode.compare_changes.get_image', {
          elapsedMs: e,
          imageBytes: t,
          sceneType: s.getSceneTypeDebugString(),
          isFirstImage: d
        }, {
          forwardToDatadog: !0
        });
      }
      d = !1;
      return u && {
        data: u.image,
        width: u.width,
        height: u.height,
        scale: u.width / u.canvasSpaceBounds.width,
        canvasSpaceBounds: u.canvasSpaceBounds
      };
    },
    showError: i
  });
}
function eg({
  version: e,
  isSection: t
}) {
  let r = new Date(e.touched_at ? e.touched_at : e.created_at);
  let i = e.label;
  e.frameCreated ? i = t ? renderI18nText('collaboration.feedback.compare_changes_modal.section_created') : renderI18nText('collaboration.feedback.compare_changes_modal.frame_created') : e.lastViewed && (i = renderI18nText('collaboration.feedback.compare_changes_modal.last_viewed_by_you'));
  let a = i ? jsx(Cr, {
    time: r
  }) : null;
  return jsxs('div', {
    className: sh,
    children: [jsx('div', {
      className: dp,
      children: i || jsx(Cr, {
        time: r
      })
    }), jsx('div', {
      className: m7,
      children: a
    })]
  });
}
let ef = atom(null);
export function $$eE2(e) {
  let {
    nodeId,
    onCloseModal,
    modalTitle,
    currentImage,
    historicImage,
    historicHeader,
    currentHeader,
    versions,
    selectedVersion,
    setSelectedVersion,
    renderLoadingBar,
    modalError,
    discreteDiffingInput,
    initialSelectedNodeId,
    skipCorrectHistoryCanvasCheck,
    preferencesApi,
    origin
  } = e;
  let D = tS();
  let k = iZ()?.id;
  let [M, F] = useState(Ss.SIDE_BY_SIDE);
  let [j, G] = useState(q0);
  let [V, H] = useState(!0);
  let [z, J] = useState(null);
  let [Q, et] = useState(null);
  let [es, eo] = useState(!0);
  let [ed, ep] = useState(!0);
  let e_ = rb() === 'SECTION';
  let [eh, em] = useState(() => initialSelectedNodeId ? {
    id: initialSelectedNodeId,
    zoomToSelection: !0
  } : null);
  let [eE, eT] = useAtomValueAndSetter(ef);
  let [eI, eS] = useState(void 0);
  let ev = useAtomValueAndSetter(w1)[1];
  let eA = t$(selectedVersion || null, nodeId) || !!discreteDiffingInput;
  let ex = skipCorrectHistoryCanvasCheck || eA;
  let eN = useMemo(() => discreteDiffingInput?.sceneGraph ? discreteDiffingInput.sceneGraph : new ReduxSceneGraph(FileSourceType.HISTORY), [discreteDiffingInput?.sceneGraph]);
  let eC = _$$G2();
  useEffect(() => {
    eh && eh.id !== nodeId && trackEventAnalytics('Diff Modal New Layer Selected', {
      userId: k,
      fileKey: D,
      frameId: nodeId,
      versionId: selectedVersion?.id,
      layer_id: eh.id
    });
  }, [eh]);
  let ew = useRef(selectedVersion);
  useEffect(() => {
    ew.current !== selectedVersion && (ew.current = selectedVersion, eS(void 0), em(null));
  }, [selectedVersion, ew]);
  let eO = void 0 !== currentImage;
  let eR = void 0 !== historicImage;
  let eL = useCallback(e => {
    e.key === 'Escape' && (eh ? (em(null), e.stopPropagation(), e.preventDefault()) : onCloseModal());
  }, [onCloseModal, eh]);
  useEffect(() => (document.addEventListener('keydown', eL), () => {
    document.removeEventListener('keydown', eL);
  }), [eL]);
  useEffect(() => {
    if (origin === 'cc_versions' && eI && !ed) {
      mf(eI) ? trackEventAnalytics('Diff Modal No Changes Between Versions', {
        userId: k,
        fileKey: D,
        frameId: nodeId,
        versionId: selectedVersion?.id,
        initialVersion: es,
        versionMetadata: !1
      }, {
        forwardToDatadog: !0
      }) : trackEventAnalytics('dev_mode.compare_changes.version_has_changes', {
        userId: k,
        fileKey: D,
        frameId: nodeId,
        versionId: selectedVersion?.id,
        initialVersion: es,
        versionMetadata: !1
      }, {
        forwardToDatadog: !0
      });
      let e = globalPerfTimer.tryStop('dev_mode.compare_changes.switch_versions', selectedVersion?.id);
      e && trackEventAnalytics('dev_mode.compare_changes.switch_versions', {
        elapsedMs: e
      }, {
        forwardToDatadog: !0
      });
    }
  }, [origin, es, ed, eI, selectedVersion, nodeId, D, k]);
  useEffect(() => {
    selectedVersion && historicImage === null && trackEventAnalytics('dev_mode.compare_changes.no_image', {
      userId: k,
      fileKey: D,
      frameId: nodeId,
      versionId: selectedVersion?.id
    }, {
      forwardToDatadog: !0
    });
  }, [historicImage, selectedVersion, nodeId, D, k]);
  let eP = () => eO && jsx(bL, {
    value: M,
    onChange: e => F(e),
    legend: jsx(_$$q, {
      children: getI18nString('collaboration.branching.comparison_options')
    }),
    className: tH,
    children: jsxs('div', {
      className: Wc,
      children: [jsx(c$, {
        'value': Ss.SIDE_BY_SIDE,
        'aria-label': getI18nString('collaboration.branching.side_by_side'),
        'className': y()(_$$rb, nL, {
          [wH]: M === Ss.SIDE_BY_SIDE
        }),
        'children': getI18nString('collaboration.branching.side_by_side')
      }), jsx(c$, {
        'value': Ss.OVERLAY,
        'aria-label': getI18nString('collaboration.branching.overlay'),
        'className': y()(_$$rb, _$$S, {
          [wH]: M === Ss.OVERLAY
        }),
        'children': getI18nString('collaboration.branching.overlay')
      })]
    })
  });
  let [eD, ek] = useState(new Set());
  let eM = useCallback((e, t) => {
    t ? ek(t => new Set([...t, ...e])) : ek(t => {
      let r = new Set(e);
      return new Set([...t].filter(e => !r.has(e)));
    });
  }, [ek]);
  let eF = useCallback(e => {
    let t = e?.value;
    if (t) {
      let r = t.state === 'removed' ? t.beforeNodeId : t.afterNodeId;
      em({
        id: r,
        zoomToSelection: !1
      });
      J(t.beforeNodeId);
      et(t.afterNodeId);
      let n = [r];
      let i = e?.parent;
      for (; i;) {
        let e = i.value;
        if (e) {
          let t = e.state === 'removed' ? e.beforeNodeId : e.afterNodeId;
          n.push(t);
        }
        i = i.parent;
      }
      eM(n, !0);
    } else {
      em(null);
      J(null);
      et(null);
    }
  }, [eM]);
  let ej = useCallback(e => {
    e ? eT(e.state === 'removed' ? e.beforeNodeId : e.afterNodeId) : eT(defaultSessionLocalIDString);
  }, [eT]);
  let eU = useCallback(e => eT(e), [eT]);
  let eB = useCallback((e, t) => {
    e === eh?.id ? (em(null), J(null), et(null)) : (em({
      id: e,
      zoomToSelection: !0
    }), eT(e), J(sessionLocalIDToString(t.basis.guid)), et(sessionLocalIDToString(t.change.guid)));
  }, [eh?.id, eT]);
  let eG = useMemo(() => eI && kF(eI, FO.LEGO, void 0, O0) || {}, [eI]);
  let eV = !mf(eG);
  let eH = discreteDiffingInput ? discreteDiffingInput.nodeId : nodeId;
  let {
    beforeBoxes,
    afterBoxes
  } = function (e) {
    let {
      frameId,
      historyFrameId,
      view,
      displayableChanges,
      historySceneGraph
    } = e;
    return useMemo(() => {
      if (!frameId || !historyFrameId) return {};
      let e = function (e, t, r, n) {
        let i = getSingletonSceneGraph();
        let a = el(t, r, !0);
        let s = el(i, e, !0);
        return X$(n, e => {
          let r = ec(e.value, {
            scene: t,
            baseBox: a
          }, {
            scene: i,
            baseBox: s
          });
          return {
            result: {
              beforeBox: r.before.box,
              afterBox: r.after.box,
              afterBoxNode: {
                id: r.after.id,
                name: r.after.name
              },
              beforeBoxNode: {
                id: r.before.id,
                name: r.before.name
              }
            }
          };
        });
      }(frameId, historySceneGraph, historyFrameId, displayableChanges);
      return {
        beforeBoxes: X$(e, e => {
          let n = e.value;
          let i = n.beforeBoxNode.id === historyFrameId || n.afterBoxNode.id === frameId;
          return n.afterBox ? n.beforeBox ? {
            result: {
              rect: n.beforeBox,
              beforeNodeId: n.beforeBoxNode.id,
              afterNodeId: n.afterBoxNode.id,
              state: 'changed',
              isRootFrame: i,
              name: n.beforeBoxNode.name
            }
          } : {
            result: {
              rect: n.afterBox,
              beforeNodeId: n.beforeBoxNode.id,
              afterNodeId: n.afterBoxNode.id,
              state: 'added',
              isRootFrame: i,
              name: n.afterBoxNode.name
            }
          } : {
            result: {
              rect: n.beforeBox,
              beforeNodeId: n.beforeBoxNode.id,
              afterNodeId: n.afterBoxNode.id,
              state: 'removed',
              isRootFrame: i,
              name: n.beforeBoxNode.name
            }
          };
        }),
        afterBoxes: X$(e, e => {
          let n = e.value;
          let i = n.beforeBoxNode.id === historyFrameId || n.afterBoxNode.id === frameId;
          return n.afterBox ? n.beforeBox ? {
            result: {
              rect: n.afterBox,
              beforeNodeId: n.beforeBoxNode.id,
              afterNodeId: n.afterBoxNode.id,
              state: 'changed',
              isRootFrame: i,
              name: n.afterBoxNode.name
            }
          } : {
            result: {
              rect: n.afterBox,
              beforeNodeId: n.beforeBoxNode.id,
              afterNodeId: n.afterBoxNode.id,
              state: 'added',
              isRootFrame: i,
              name: n.afterBoxNode.name
            }
          } : {
            result: {
              rect: n.beforeBox,
              beforeNodeId: n.beforeBoxNode.id,
              afterNodeId: n.afterBoxNode.id,
              state: 'removed',
              isRootFrame: i,
              name: n.beforeBoxNode.name
            }
          };
        })
      };
    }, [frameId, historyFrameId, view, displayableChanges]);
  }({
    frameId: nodeId,
    historyFrameId: eH,
    historySceneGraph: eN,
    view: M,
    displayableChanges: eG,
    activeNode: eE,
    selectedNode: eh
  });
  useEffect(() => {
    if (!eh?.id || !eh?.zoomToSelection || !nodeId || !eH) return;
    let {
      baseBeforeBox,
      baseAfterBox,
      resultBoxes
    } = function (e, t, r, n, i) {
      let a = getSingletonSceneGraph();
      let s = el(t, r, !0);
      let o = el(a, e, !0);
      let l = [];
      for (let e of n) {
        let r = lE(i, t => sessionLocalIDToString(t.change.guid) === e || sessionLocalIDToString(t.basis.guid) === e);
        if (r) {
          let e = ec(r, {
            scene: t,
            baseBox: s
          }, {
            scene: a,
            baseBox: o
          });
          l.push({
            beforeBox: e.before.box,
            afterBox: e.after.box,
            beforeBoxNode: {
              id: e.before.id,
              name: e.before.name
            },
            afterBoxNode: {
              id: e.after.id,
              name: e.after.name
            }
          });
        }
      }
      return {
        baseBeforeBox: s,
        baseAfterBox: o,
        resultBoxes: l
      };
    }(nodeId, eN, eH, [eh.id], eG);
    let {
      beforeBox,
      afterBox
    } = resultBoxes[0] ?? {};
    let s = 1 / 0;
    let o = 1 / 0;
    let l = -1 / 0;
    let d = -1 / 0;
    beforeBox && baseBeforeBox && (beforeBox.x -= baseBeforeBox.w / 2, beforeBox.y -= baseBeforeBox.h / 2, s = Math.min(s, beforeBox.x), o = Math.min(o, beforeBox.y), l = Math.max(l, beforeBox.x + beforeBox.width), d = Math.max(d, beforeBox.y + beforeBox.height));
    afterBox && baseAfterBox && (afterBox.x -= baseAfterBox.w / 2, afterBox.y -= baseAfterBox.h / 2, s = Math.min(s, afterBox.x), o = Math.min(o, afterBox.y), l = Math.max(l, afterBox.x + afterBox.width), d = Math.max(d, afterBox.y + afterBox.height));
    s !== 1 / 0 && ev({
      x: s,
      y: o,
      width: l - s,
      height: d - o
    });
  }, [eh, ev, nodeId, eG]);
  useEffect(() => () => {
    ev(void 0);
  }, [ev]);
  let eK = beforeBoxes ? {
    rootBox: beforeBoxes,
    onBoxClicked: eF,
    onBoxHovered: ej,
    selectedNodeId: eh?.id,
    expandedLayers: eD,
    ignoreState: 'added',
    interactive: M === Ss.SIDE_BY_SIDE,
    hoveredNodeIdAtom: ef,
    recordingKey: 'before'
  } : null;
  let eY = afterBoxes ? {
    rootBox: afterBoxes,
    onBoxClicked: eF,
    onBoxHovered: ej,
    selectedNodeId: eh?.id,
    expandedLayers: eD,
    ignoreState: 'removed',
    interactive: M === Ss.SIDE_BY_SIDE,
    hoveredNodeIdAtom: ef,
    recordingKey: 'after'
  } : null;
  let e$ = !renderLoadingBar && !modalError;
  let eX = _$$i();
  return jsx(Q4, {
    title: modalTitle,
    onClose: onCloseModal,
    open: eX,
    children: jsxs('div', {
      className: xZ,
      children: [jsxs('div', {
        className: _$$f,
        children: [renderLoadingBar && !modalError && jsx('div', {
          className: Lq,
          children: jsx(_$$G3, {
            hasLoadedDiffs: !1
          })
        }), e$ && jsxs('div', {
          className: ND,
          children: [(versions || eV) && jsxs('div', {
            className: y()(_H, 'devHandoffLeftPanel'),
            children: [setSelectedVersion && jsxs('div', {
              className: b6,
              children: [jsxs('div', {
                className: Zl,
                children: [jsx('h3', {
                  children: renderI18nText('collaboration.feedback.compare_changes_modal.history')
                }), getFeatureFlags().dt_compare_changes_debug_helpers && jsx(eb, {
                  fileKey: D,
                  setSelectedVersion
                })]
              }), jsx(aS, {
                versions: versions || [],
                selectedVersion,
                setVersion: e => {
                  e.id !== selectedVersion?.id && trackEventAnalytics('Diff Modal Selected Version Changed', {
                    userId: k,
                    fileKey: D,
                    frameId: nodeId,
                    versionId: e.id
                  });
                  globalPerfTimer.reset('dev_mode.compare_changes.switch_versions', e.id);
                  globalPerfTimer.start('dev_mode.compare_changes.switch_versions', {
                    key: e.id
                  });
                  ep(!0);
                  es && eo(!1);
                  setSelectedVersion(e);
                }
              })]
            }), jsx(zg, {
              changesToDisplay: eG,
              selectedNode: eh?.id,
              expandedLayers: eD,
              setLayerExpanded: eM,
              onHover: eU,
              onClick: eB
            })]
          }), jsxs('div', {
            className: vF,
            children: [M === Ss.SIDE_BY_SIDE && jsxs('div', {
              className: m_,
              children: [jsx('h3', {
                className: ZJ,
                children: historicHeader ? jsx('div', {
                  className: K9,
                  children: jsx('div', {
                    className: gO,
                    children: historicHeader
                  })
                }) : selectedVersion && jsx(eg, {
                  version: selectedVersion,
                  isSection: e_
                })
              }), jsx('div', {
                className: t4
              }), jsx('h3', {
                className: ZJ,
                children: currentHeader ? jsx('div', {
                  className: K9,
                  children: jsx('div', {
                    className: gO,
                    children: currentHeader
                  })
                }) : jsx('div', {
                  className: K9,
                  children: renderI18nText('collaboration.feedback.compare_changes_modal.current_image_header')
                })
              })]
            }), M === Ss.SIDE_BY_SIDE && jsx('div', {
              className: Ik,
              children: jsxs(qW, {
                zoomPercentageOptions: ea,
                resetStateOnChangeValue: nodeId,
                compareThumbnailSource: FO.LEGO,
                zoomOnMousePointer: !0,
                children: [jsxs('div', {
                  className: bV,
                  children: [eR ? jsx(H1, {
                    value: eK,
                    children: jsx(R$, {
                      image: historicImage,
                      view: M,
                      Overlay: q1
                    })
                  }) : jsx(Qp, {}), jsx('div', {
                    className: mq
                  }), eO ? jsx(H1, {
                    value: eY,
                    children: jsx(R$, {
                      image: currentImage,
                      view: M,
                      Overlay: q1
                    })
                  }) : jsx(Qp, {})]
                }), eO && eP()]
              })
            }), M === Ss.OVERLAY && jsx('div', {
              className: Ik,
              children: jsxs(xY, {
                zoomPercentageOptions: ea,
                resetStateOnChangeValue: nodeId,
                zoomOnMousePointer: !0,
                children: [jsxs('div', {
                  className: Kk,
                  children: [eR ? jsx(H1, {
                    value: eK,
                    children: jsx(R$, {
                      image: historicImage,
                      view: M,
                      hideNoImageText: !0,
                      Overlay: q1
                    })
                  }) : jsx(Qp, {}), V && (eO ? jsx(H1, {
                    value: eY,
                    children: jsx(R$, {
                      image: currentImage,
                      view: M,
                      hideNoImageText: !0,
                      opacity: j,
                      Overlay: q1
                    })
                  }) : jsx(Qp, {}))]
                }), eO && jsx(_$$u, {
                  opacity: j,
                  isAfterImageShown: V,
                  onToggleClick: () => H(!V),
                  onOpacityChange: e => G(e.a)
                }), eO && eP()]
              })
            }), ex && nodeId && eH && jsx(eu, {
              frameId: nodeId,
              historyFrameId: eH,
              historySceneGraph: eN,
              chunkChanges: eI,
              discreteDiffing: !!discreteDiffingInput,
              setChunkChanges: e => {
                ep(!1);
                eS(e);
              }
            })]
          })]
        }), modalError && jsx('div', {
          className: Q9,
          children: renderI18nText('collaboration.feedback.compare_changes_modal.error')
        }), jsx('div', {})]
      }), e$ && (ex ? eI && mf(eI) ? jsx(Ox, {
        text: getI18nString('collaboration.feedback.compare_changes_modal.no_changes')
      }) : jsx(ey, {
        layerChangeNodeId: Q,
        layerBasisNodeId: z,
        layerBasisSceneGraph: eN,
        selectedVersion: selectedVersion || void 0,
        displayableChanges: eG,
        showSelectLayerHint: !eh,
        preferencesApi: preferencesApi ?? eC
      }) : jsx(Ox, {
        text: ''
      }))]
    })
  });
}
function ey({
  layerChangeNodeId: e,
  layerBasisNodeId: t,
  layerBasisSceneGraph: r,
  selectedVersion: i,
  displayableChanges: a,
  showSelectLayerHint: s,
  preferencesApi: o
}) {
  return s ? jsx(Ox, {
    text: getI18nString('collaboration.feedback.compare_changes_modal.select_a_layer')
  }) : jsx(wv, {
    layerChangeNodeId: e,
    layerBasisNodeId: t,
    layerBasisSceneGraph: r,
    selectedVersion: i,
    displayableChanges: a,
    preferencesApi: o
  });
}
function eb({
  fileKey: e,
  setSelectedVersion: t
}) {
  let r = useRef(null);
  let [a, s] = useState('Upload local file');
  return jsxs('label', {
    className: $8,
    children: [a, jsx('input', {
      style: {
        display: 'none'
      },
      ref: r,
      type: 'file',
      accept: '.fig',
      onChange: async () => {
        let n = r.current?.files?.[0];
        if (n && _$$F) {
          let r = await _$$_(debugState, getFeatureFlags(), _$$F, n);
          let i = debugState.getState().mirror.appModel.currentPage;
          let a = `${e}-${i}-debug`;
          Ht.set(a, Promise.resolve({
            key: a,
            canvas: r.bytes
          }));
          s(n.name);
          t({
            id: 'debug'
          });
        }
      }
    })]
  });
}
let $$eT0 = registerModal(e => {
  let {
    nodeId,
    layerName
  } = e;
  let s = useDispatch();
  let o = useSelector(e => e.selectedView.view === 'fullscreen' ? e.selectedView.editorType : null);
  let d = useSelector(e => e.versionHistory.activeId);
  let {
    Sprig
  } = useSprigWithSampling();
  let u = tS();
  let h = E1()?.toISOString();
  let m = useAtomValueAndSetter(Ib)[1];
  let {
    versions,
    versionsQueryLoaded
  } = DS(nodeId);
  let y = useSelector(e => e.selectedView.compareChangesVersionId ?? null);
  let v = useSelector(e => e.selectedView.compareChangesActivityId ?? null);
  let N = useMemo(() => y ? versions.find(e => e.id === y) ?? null : v ? versions.find(e => e.dev_mode_activity?.some(e => e.id === v)) ?? null : null, [versions, y, v]);
  let C = useCallback(e => {
    !e && (z(void 0), $$ep1(e, s, !1, null), d && d !== V_ && (s(Y6({
      mode: UIVisibilitySetting.KEEP_UI,
      type: lF.SPINNER
    })), requestAnimationFrame(() => {
      s(Nb({
        id: d,
        nodeId: nodeId ?? void 0,
        eventType: 'LOAD_NEW_VERSION',
        versions
      }));
    })));
    e !== y && (z(void 0), function (e, t) {
      let r = debugState.getState().selectedView;
      t(sf({
        ...r,
        compareChangesVersionId: e,
        compareChangesActivityId: void 0
      }));
    }(e, s));
  }, [s, y, d, versions, nodeId]);
  let [O, R] = useAtomValueAndSetter(tP);
  let [M, F] = useState(!0);
  let [j, B] = useState(!1);
  let [H, z] = useState(void 0);
  let W = void 0 !== H;
  let [K, Y] = useState(void 0);
  let $ = void 0 !== K;
  let X = t$(N, nodeId);
  useEffect(() => {
    if (!M || !W || !$ || !versionsQueryLoaded) return;
    F(!1);
    let e = globalPerfTimer.tryStop('dev_handoff.view_history', nodeId);
    e && trackEventAnalytics('dev_handoff.view_history', {
      elapsedMs: e,
      origin: 'cc_versions'
    }, {
      forwardToDatadog: !0
    });
    Sprig('track', 'open_compare_changes', {
      origin: 'cc_versions'
    });
  }, [Sprig, M, W, $, versionsQueryLoaded, nodeId]);
  let J = _$$P();
  useEffect(() => {
    if (J && versionsQueryLoaded) {
      if (N) {
        y || C(N.id);
        return;
      }
      if (versions.length === 0) {
        z(null);
        C(void 0);
        return;
      }
      if (h) {
        for (let e of versions) {
          if (e.lastViewed) {
            C(e?.id);
            return;
          }
        }
      }
      C(versions[0]?.id);
    }
  }, [J, h, v, N, y, C, versions, versionsQueryLoaded]);
  useEffect(() => {
    if (X || !N) return;
    let e = performance.now();
    _t(N, nodeId)?.then(({
      canvas: t,
      key: r
    }) => {
      let n = performance.now();
      if (r === O) return;
      if (!Fullscreen.loadPartialHistoryScene(t)) throw new Error('Error loading history canvas');
      R(r);
      let i = performance.now();
      let a = Math.trunc(n - e);
      let s = Math.trunc(i - n);
      trackEventAnalytics('version_diffing_performance_metrics', {
        name: 'historic_nodes_load_time',
        fileKey: u,
        fetchBytesDurationMs: a,
        loadNodesDurationMs: s,
        canvasBytesLength: t.byteLength,
        fetchMode: 'node',
        entrypoint: 'lego_layer'
      });
    }).catch(e => {
      reportError(_$$e.DEVELOPER_TOOLS, new Error(`Error fetching history canvas: ${e}`));
      w_(N);
      B(!0);
    });
  }, [X, N, O, R, o, u, nodeId]);
  useEffect(() => {
    let e = setTimeout(() => {
      if (!X) {
        z(void 0);
        return;
      }
      z($$em3({
        nodeId,
        documentIndex: HISTORY_DOCUMENT_INDEX,
        showError: () => {
          z(null);
        }
      }));
    }, _W);
    return () => clearTimeout(e);
  }, [nodeId, N, X]);
  useEffect(() => {
    let e = setTimeout(() => {
      let e = () => {
        Y(void 0);
        reportError(_$$e.DEVELOPER_TOOLS, new Error('Current image loading error'));
        B(!0);
      };
      let r = $$em3({
        nodeId,
        showError: e
      });
      if (!r) {
        e();
        return;
      }
      Y(r);
    }, _W);
    return () => clearTimeout(e);
  }, [nodeId]);
  let Z = useCallback(() => {
    m(new Map());
    C(void 0);
    s(hideModal());
  }, [m, C, s]);
  useEffect(() => () => {
    R('');
    Fullscreen?.closeAllExtraDocuments();
  }, [R]);
  return jsx($$eE2, {
    currentImage: K,
    historicImage: H,
    modalError: j,
    modalTitle: layerName ? getI18nString('collaboration.feedback.compare_changes_modal.layer_name_header', {
      layerName
    }) : getI18nString('collaboration.feedback.compare_changes_modal.header'),
    nodeId,
    onCloseModal: Z,
    origin: 'cc_versions',
    renderLoadingBar: M,
    selectedVersion: N,
    setSelectedVersion: e => {
      C(e.id);
    },
    versions
  });
}, mH, ModalSupportsBackground.YES);
let $$eI4 = registerModal(e => {
  let {
    nodeId,
    detachedInfoStatus,
    origin
  } = e;
  let o = useDispatch();
  let {
    Sprig
  } = useSprigWithSampling();
  let [d, c] = useState(!0);
  let [p, g] = useState(!1);
  let [f, E] = useState(void 0);
  let [y, b] = useState(void 0);
  let S = void 0 !== f;
  let v = void 0 !== y;
  let A = detachedInfoStatus.status === 'loaded';
  let N = A ? detachedInfoStatus.result : void 0;
  useEffect(() => {
    if (!d || !S || !v || !A) return;
    c(!1);
    let e = globalPerfTimer.tryStop('dev_handoff.view_history', nodeId);
    e && trackEventAnalytics('dev_handoff.view_history', {
      elapsedMs: e,
      origin
    }, {
      forwardToDatadog: !0
    });
    Sprig('track', 'open_compare_changes', {
      origin: 'cc_detached_component'
    });
  }, [Sprig, d, S, v, nodeId, A, origin]);
  useEffect(() => {
    let e = setTimeout(() => {
      if (!A || !N?.dataComponentId) {
        E(void 0);
        return;
      }
      E($$em3({
        nodeId: N?.dataComponentId,
        detachedComponentsScene: N?.dataLocation === 'temp-scene',
        showError: () => {
          E(null);
        }
      }));
    }, _W);
    return () => clearTimeout(e);
  }, [A, N]);
  useEffect(() => {
    let e = setTimeout(() => {
      let e = () => {
        b(void 0);
        g(!0);
      };
      let r = $$em3({
        nodeId,
        showError: e
      });
      if (!r) {
        e();
        return;
      }
      b(r);
    }, _W);
    return () => clearTimeout(e);
  }, [nodeId]);
  let C = useCallback(() => {
    o(hideModal());
  }, [o]);
  let O = getI18nString('collaboration.feedback.compare_changes_modal.header');
  let R = renderI18nText('inspect_panel.node_type.main_component');
  let L = {
    nodeId: N?.dataComponentId ?? defaultSessionLocalIDString,
    sceneGraph: new ReduxSceneGraph(N?.dataLocation === 'temp-scene' ? FileSourceType.DETACHED_COMPONENTS : _$$G)
  };
  return jsx($$eE2, {
    nodeId,
    onCloseModal: C,
    modalTitle: O,
    currentImage: y,
    historicImage: f,
    historicHeader: R,
    renderLoadingBar: d,
    modalError: p,
    discreteDiffingInput: L
  });
}, dF, ModalSupportsBackground.YES);
let $$eS5 = registerModal(e => {
  let {
    changeNodeId,
    basisNodeId,
    initialSelectedNodeId,
    isComparingOverrides = !1
  } = e;
  let l = useDispatch();
  let {
    Sprig
  } = useSprigWithSampling();
  let c = eh(changeNodeId);
  let p = eh(basisNodeId);
  let [_, h] = useState(!1);
  let [g, f] = useState(void 0);
  let [E, y] = useState(void 0);
  let b = void 0 !== g;
  let S = void 0 !== E;
  useEffect(() => {
    if (!b || !S) return;
    let e = globalPerfTimer.tryStop('dev_handoff.view_history', changeNodeId);
    let r = isComparingOverrides ? 'cc_overrides' : 'cc_nodes';
    e && trackEventAnalytics('dev_handoff.view_history', {
      elapsedMs: e,
      origin: r
    }, {
      forwardToDatadog: !0
    });
    Sprig('track', 'open_compare_changes', {
      origin: r
    });
  }, [Sprig, isComparingOverrides, b, S, changeNodeId]);
  useEffect(() => {
    f($$em3({
      nodeId: basisNodeId,
      showError: () => f(null)
    }));
  }, [basisNodeId]);
  useEffect(() => {
    let e = () => {
      y(void 0);
      h(!0);
    };
    let r = $$em3({
      nodeId: changeNodeId,
      showError: e
    });
    if (!r) {
      e();
      return;
    }
    y(r);
  }, [changeNodeId]);
  let v = useCallback(() => {
    l(hideModal());
  }, [l]);
  let A = getI18nString('collaboration.feedback.compare_changes_modal.header');
  let N = {
    nodeId: basisNodeId,
    sceneGraph: new ReduxSceneGraph(_$$G)
  };
  return c.node && p.node ? jsx($$eE2, {
    currentHeader: e_(c.node, c.backingSymbolData),
    currentImage: E,
    discreteDiffingInput: N,
    historicHeader: e_(p.node, p.backingSymbolData),
    historicImage: g,
    initialSelectedNodeId,
    modalError: _,
    modalTitle: A,
    nodeId: changeNodeId,
    onCloseModal: v,
    renderLoadingBar: !1
  }) : null;
}, Dx, ModalSupportsBackground.YES);
export const EH = $$eT0;
export const L$ = $$ep1;
export const PZ = $$eE2;
export const SI = $$em3;
export const jo = $$eI4;
export const ku = $$eS5;