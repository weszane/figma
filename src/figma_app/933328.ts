import { atom, useSetAtom } from 'jotai';
import n, { useEffect, useMemo } from 'react';
import { reportError } from '../905/11';
import { gi } from '../905/2848';
import { NC } from '../905/17179';
import { Sc, VP } from '../905/18797';
import { cI, Dl } from '../905/49792';
import { qB } from '../905/63598';
import { TG } from '../905/72677';
import { Ml, yD } from '../905/92359';
import { E as _$$E2 } from '../905/128063';
import { f as _$$f2 } from '../905/135117';
import { showModalHandler } from '../905/156213';
import { ServiceCategories as _$$e } from '../905/165054';
import { permissionScopeHandler } from '../905/189185';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { cO, ZR } from '../905/313095';
import { t as _$$t } from '../905/338602';
import { D as _$$D2 } from '../905/347702';
import { createOptimistThunk } from '../905/350402';
import { E as _$$E } from '../905/355220';
import { debugState } from '../905/407919';
import { f as _$$f } from '../905/412913';
import { qU } from '../905/420347';
import { waitForFontLoaded } from '../905/426868';
import { v as _$$v } from '../905/439972';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { Q as _$$Q } from '../905/477656';
import { atomStoreManager } from '../905/490038';
import { Hk } from '../905/497152';
import { YQ } from '../905/502364';
import { s as _$$s2 } from '../905/506024';
import { L as _$$L } from '../905/522457';
import { e as _$$e3 } from '../905/545750';
import { Nn, sj } from '../905/561897';
import { s as _$$s } from '../905/573154';
import { VisualBellIcon } from '../905/576487';
import { a as _$$a } from '../905/586871';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { jE, vQ } from '../905/656545';
import { PT } from '../905/669853';
import { N as _$$N } from '../905/696711';
import { getSingletonSceneGraph, ReduxSceneGraph } from '../905/700578';
import { N2 } from '../905/709171';
import { IT, M4 } from '../905/713695';
import { logError } from '../905/714362';
import { l as _$$l } from '../905/716947';
import { d1 } from '../905/766303';
import { V as _$$V } from '../905/810505';
import { X as _$$X } from '../905/853613';
import { An, fe, sh, Sp } from '../905/854258';
import { q as _$$q, F7, VariableStyleId, ii, mW, Pg } from '../905/859698';
import { defaultSessionLocalIDString } from '../905/871411';
import { LH } from '../905/872904';
import { dC } from '../905/879323';
import { XHR } from '../905/910117';
import { Z as _$$Z } from '../905/939602';
import { c6 } from '../905/950959';
import { r as _$$r } from '../905/955316';
import { qp } from '../905/977779';
import { b as _$$b } from '../905/985254';
import { ZC } from '../figma_app/39751';
import { LibraryOrgSubscriptions, LibraryTeamSubscriptions, LibraryUserSubscriptions, LibraryFileSubscriptions } from '../figma_app/43951';
import { uo, yJ } from '../figma_app/78808';
import { Eo } from '../figma_app/80990';
import { Ob } from '../figma_app/111825';
import { LL, OQ } from '../figma_app/141508';
import o, { VariableSetIdCompatHandler } from '../figma_app/243058';
import { e as _$$e2 } from '../figma_app/267183';
import { Rs } from '../figma_app/288654';
import { ds } from '../figma_app/314264';
import { RX } from '../figma_app/409131';
import { am, F$ } from '../figma_app/430563';
import { fullscreenValue } from '../figma_app/455680';
import { C$ } from '../figma_app/457074';
import { isEmptyObject } from '../figma_app/493477';
import { kb } from '../figma_app/502247';
import { DC } from '../figma_app/566371';
import { cD } from '../figma_app/598018';
import { qr } from '../figma_app/608944';
import { PW, wg } from '../figma_app/633080';
import { $j, td as _$$td, _B, GA, iw, kw, lG, Mb, Ve, vu, Ys } from '../figma_app/646357';
import { n1 } from '../figma_app/657017';
import { Cx, of, x2, yH } from '../figma_app/714946';
import { AppStateTsApi, Confirmation, CopyPasteType, FileSourceType, Fullscreen, LibraryPubSub, SceneIdentifier, StyleVariableOperation, TemplateType, VariablesBindings } from '../figma_app/763686';
import { vP } from '../figma_app/864378';
import { fu, xB } from '../figma_app/990334';
import E from '../vendor/223926';
import b from '../vendor/239910';
import { useDispatch, useStore } from 'react-redux';
let y = E;
let T = b;
export async function $$eV38(e, t = SceneIdentifier.ACTIVE_SCENE) {
  let r;
  if (!e.canvas_url && t === SceneIdentifier.PLAYGROUND_SCENE) {
    return {
      newSymbolOrStateGroupGuid: LibraryPubSub.upsertLocalProductComponentToPlaygroundScene(e.node_id)
    };
  }
  let n = await Eo.getCanvas(e);
  if (e.type === PW.COMPONENT) {
    let i = permissionScopeHandler.system('upsert-shared-symbol', () => LibraryPubSub.upsertSharedSymbol(e.component_key ?? ii.INVALID, e.content_hash ?? F7.INVALID, e.library_key, Confirmation.NO, n, t));
    if (!i || isEmptyObject(i) || i.fileUpdateRequired) return;
    i.localGUID || logError(_$$e.DESIGN_SYSTEMS_EDITOR, 'no local GUID in response', {
      response: JSON.stringify(i)
    }, {
      reportAsSentryError: !0
    });
    r = i.localGUID;
  } else if (e.type === PW.STATE_GROUP) {
    let i = permissionScopeHandler.system('upsert-shared-state-group', () => LibraryPubSub.upsertSharedStateGroup(e.key, e.version, e.library_key, Confirmation.NO, n, t));
    if (!i || isEmptyObject(i) || i.fileUpdateRequired) return;
    if (!i.localGUID) throw new Error('Swap to Shared Component Error, no local GUID');
    if (i.C2) throw new Error(i.C2);
    r = i.localGUID;
  } else {
    throw new Error(`Unexpected type for dragging library item: ${e.type}`);
  }
  return {
    newSymbolOrStateGroupGuid: r,
    buffer: n
  };
}
let $$eH49 = createOptimistThunk((e, t) => {
  let {
    item,
    callback,
    bufferCallback,
    errorCallback,
    alwaysFetch,
    targetUpsertScene = SceneIdentifier.ACTIVE_SCENE
  } = t;
  let c = d1(e.getState());
  if (c) {
    if (!N2(item, c) || alwaysFetch) {
      let t = async () => {
        try {
          let e = await $$eV38(item, targetUpsertScene);
          e && (callback?.(e.newSymbolOrStateGroupGuid), e.buffer && bufferCallback?.(e.buffer));
        } catch (t) {
          e.dispatch(_$$s.error(getI18nString('banner.component_or_set_retrieval_error')));
          reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
          errorCallback?.();
        }
      };
      e.dispatch(vQ({
        assetLibraryKey: item.library_key,
        onInsertAsset: t,
        source: jE.LOAD_COMPONENT
      }));
    } else {
      callback?.(item.node_id);
    }
  }
});
let $$ez3 = NC('SWAP_TO_SHARED_COMPONENT_OR_STATE_GROUP');
let $$eW48 = createOptimistThunk((e, t) => {
  let {
    item,
    instanceGUIDs,
    usedSwapInstanceKeyboardShortcut,
    storeInRecentsKey,
    queryId
  } = t;
  let l = Ml(item, instanceGUIDs);
  e.dispatch(Cx({
    key: l
  }));
  let c = e.getState();
  let p = _$$s2(c);
  e.dispatch($$tG17({
    storeInRecentsKey,
    item,
    userId: p
  }));
  let _ = d1(c);
  if (!_) {
    e.dispatch(of({
      key: l
    }));
    return;
  }
  let h = async () => {
    try {
      let t = await $$eV38(item);
      if (t) {
        let a = item.type === PW.STATE_GROUP ? Fullscreen.getSimilarStates(instanceGUIDs, t.newSymbolOrStateGroupGuid, item.default_state_key) : {
          [t.newSymbolOrStateGroupGuid]: instanceGUIDs
        };
        permissionScopeHandler.user('replace-symbol-backing-instances', () => {
          Fullscreen.replaceSymbolBackingInstances(a, usedSwapInstanceKeyboardShortcut);
        });
        e.dispatch(x2({
          key: l
        }));
        _$$V(_.key, item, !0, !!e.getState().userFlags.apple_eula_accepted);
      }
    } catch (t) {
      e.dispatch(of({
        key: l
      }));
      e.dispatch(_$$s.error('An error occurred while adding an instance of this component.'));
      reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
      _$$V(_.key, item, !1, !!e.getState().userFlags.apple_eula_accepted);
    }
    ds('Instance Swapped To Shared Component', _.key, e.getState(), {
      componentLibraryKey: item.library_key,
      componentId: item.id,
      source: t.sourceForTracking,
      queryId
    });
  };
  e.dispatch(vQ({
    assetLibraryKey: item.library_key,
    onInsertAsset: h,
    source: jE.SWAP_TO_COMPONENT
  }));
  e.dispatch($$ez3(t));
});
function eK(e) {
  e(VisualBellActions.enqueue({
    type: 'insert_instance',
    message: getI18nString('design_systems.subscriptions.inserting_instance'),
    icon: VisualBellIcon.SPINNER,
    delay: 1e3
  }));
  return function () {
    e(VisualBellActions.dequeue({
      matchType: 'insert_instance'
    }));
  };
}
let $$eY0 = NC('INSERT_SHARED_COMPONENT');
let $$e$8 = createOptimistThunk((e, t) => {
  e.dispatch($$eY0(t));
  let {
    item
  } = t;
  let {
    canvasPosition,
    percentageOffset,
    isFromDoubleClick,
    useSmartPositioning,
    insertionCallback,
    storeInRecentsKey,
    fromPlayground,
    insertLogArgsOverride,
    isClick,
    selectAfterInsert,
    sourceForTracking
  } = t;
  let T = t.insertAsChildOfCanvas ? getSingletonSceneGraph().getCurrentPage()?.guid : t.insertAsChildOfGuid;
  let I = e.getState();
  let S = atomStoreManager.get(TG).has(item.library_key);
  let v = async () => {
    let t = _$$s2(I);
    e.dispatch($$tG17({
      storeInRecentsKey,
      item,
      userId: t
    }));
    let f = d1(I);
    if (!f) return;
    let v = (t, r) => {
      let a = Dl();
      let s = fromPlayground ? Fullscreen.insertPlaygroundInstance({
        x: canvasPosition.x,
        y: canvasPosition.y,
        percentOffsetX: percentageOffset.x,
        percentOffsetY: percentageOffset.y
      }, S) : Fullscreen.insertInstance(t, {
        x: canvasPosition.x,
        y: canvasPosition.y,
        percentOffsetX: percentageOffset.x,
        percentOffsetY: percentageOffset.y
      }, r, T ?? null, useSmartPositioning ?? !1, S, selectAfterInsert ?? !0);
      try {
        _$$L(canvasPosition, s);
        cI(a, canvasPosition, s, sourceForTracking);
      } catch (e) {
        logError('auto_suggest', 'Error logging shadow reads on component insertion', {
          error: e
        });
      }
      if (insertionCallback?.([s], canvasPosition, isClick), qr(e.dispatch), s !== defaultSessionLocalIDString) {
        let r = C$(getSingletonSceneGraph().get(t));
        let n = I.mirror.sceneGraph.get(s);
        let i = Object.keys(n && n.type === 'INSTANCE' && n.componentProperties() || {}).length > 0;
        r && i ? (e.dispatch(_$$E({
          nodeId: s
        })), YQ({
          id: sh
        })) : r ? (e.dispatch(_$$E({
          nodeId: s
        })), YQ({
          id: Sp
        })) : i ? YQ({
          id: An
        }) : YQ({
          id: fe
        });
      }
      fullscreenValue.triggerAction('commit');
      fullscreenValue.triggerAction('set-tool-default');
    };
    if (N2(item, f)) {
      let t = I.library.local.components[item.node_id];
      if (!t || !I.mirror.sceneGraph.get(t.node_id)) {
        e.dispatch(showModalHandler({
          type: _$$Q
        }));
        return;
      }
      try {
        permissionScopeHandler.user('insert-component', () => {
          v(t.node_id, insertLogArgsOverride);
        });
        ds('Component Local Symbol Inserted', f.key, e.getState(), {
          componentLibraryKey: item.library_key,
          componentId: item.id,
          ComponentCanvasPositionX: canvasPosition.x,
          ComponentCanvasPositionY: canvasPosition.y
        });
        _$$V(f.key, t, !0, !!e.getState().userFlags.apple_eula_accepted);
        e.dispatch(tX());
      } catch (r) {
        e.dispatch(_$$s.error('An error occurred while adding an instance of this component.'));
        reportError(_$$e.DESIGN_SYSTEMS_EDITOR, r);
        _$$V(f.key, t, !1, !!e.getState().userFlags.apple_eula_accepted);
      }
    } else {
      let t = performance.now();
      if (th && th === item.component_key && tm) {
        let e = (await tm).component;
        e && e.updated_at > item.updated_at && (r = e);
      }
      let i = eK(e.dispatch);
      Eo.getCanvas(item).then(e => {
        permissionScopeHandler.user('insert-component', () => {
          let t = permissionScopeHandler.system('upsert-shared-symbol', () => LibraryPubSub.upsertSharedSymbol(item.component_key ?? ii.INVALID, item.content_hash ?? F7.INVALID, item.library_key, Confirmation.NO, e, SceneIdentifier.ACTIVE_SCENE));
          if (!t) {
            logError('design-systems', 'response from upsertSharedSymbol was nullish', {
              componentKey: item.component_key ?? ii.INVALID,
              contentHash: item.content_hash ?? F7.INVALID
            }, {
              reportAsSentryError: !0
            });
            return new Error('An error occurred while adding an instance of this component.');
          }
          if (t.fileUpdateRequired || !t.localGUID) throw new Error('An error occurred while adding an instance of this component.');
          v(t.localGUID, insertLogArgsOverride);
        });
      }, e => {
        let t = Fullscreen.getSymbolNodeId(item.component_key, item.content_hash);
        if (!t) {
          if (e?.status === 403) throw new Error('A 403 error occurred while adding an instance of this component.');
          throw new Error('An error occurred while adding an instance of this component.');
        }
        permissionScopeHandler.user('insert-component', () => {
          v(t, insertLogArgsOverride);
        });
      }).then(() => {
        let i = performance.now() - t;
        ds('Component Shared Symbol Inserted', f.key, e.getState(), {
          elapsedMs: i,
          componentLibraryKey: item.library_key,
          componentId: item.id,
          componentName: item.name,
          ComponentCanvasPositionX: canvasPosition.x,
          ComponentCanvasPositionY: canvasPosition.y,
          isFromDefaultLibrary: _$$td(I.library.defaultPublished, item.library_key),
          isFromDoubleClick: !!isFromDoubleClick,
          useSmartPositioning: !!useSmartPositioning
        });
        _$$V(f.key, item, !0, !!e.getState().userFlags.apple_eula_accepted, {
          metricName: 'design_systems.subscribed_component.insert_time',
          duration: i
        });
        e.dispatch(tX());
      }).catch(n => {
        e.dispatch(_$$s.error(n.message));
        reportError(_$$e.DESIGN_SYSTEMS_EDITOR, n);
        _$$V(f.key, item, !1, !!e.getState().userFlags.apple_eula_accepted, {
          metricName: 'design_systems.subscribed_component.insert_time',
          duration: performance.now() - t
        });
      }).$$finally(() => {
        i();
      });
    }
  };
  e.dispatch(vQ({
    assetLibraryKey: item.library_key,
    onInsertAsset: v,
    source: jE.INSERT_SHARED_COMPONENT
  }));
});
let $$eX7 = NC('INSERT_SHARED_STATE_GROUP');
let $$eq32 = createOptimistThunk(async (e, t) => {
  let {
    item
  } = t;
  let {
    canvasPosition,
    percentageOffset,
    isFromDoubleClick,
    useSmartPositioning,
    insertionCallback,
    storeInRecentsKey,
    fromPlayground,
    insertLogArgsOverride,
    isClick,
    sourceForTracking
  } = t;
  let T = t.insertAsChildOfCanvas ? getSingletonSceneGraph().getCurrentPage()?.guid : t.insertAsChildOfGuid;
  let I = e.getState();
  let S = atomStoreManager.get(TG).has(item.library_key);
  let v = async () => {
    let t = _$$s2(I);
    e.dispatch($$tG17({
      storeInRecentsKey,
      item,
      userId: t
    }));
    let m = d1(I);
    if (!m) return;
    let v = (t, a, s) => {
      let l = Dl();
      let u = fromPlayground ? Fullscreen.insertPlaygroundInstance({
        x: canvasPosition.x,
        y: canvasPosition.y,
        percentOffsetX: percentageOffset.x,
        percentOffsetY: percentageOffset.y
      }, S) : Fullscreen.insertStateGroup(t, {
        x: canvasPosition.x,
        y: canvasPosition.y,
        percentOffsetX: percentageOffset.x,
        percentOffsetY: percentageOffset.y
      }, s, T ?? null, useSmartPositioning ?? !1, a, S);
      try {
        _$$L(canvasPosition, u);
        cI(l, canvasPosition, u, sourceForTracking);
      } catch (e) {
        logError('auto_suggest', 'Error logging shadow reads on state group insertion', {
          error: e
        });
      }
      getFeatureFlags().anticipation_props_shadow_reads && (atomStoreManager.set(xB, u), atomStoreManager.set(fu, item.key));
      insertionCallback?.([u], canvasPosition, isClick);
      qr(e.dispatch);
      fullscreenValue.triggerAction('commit');
      fullscreenValue.triggerAction('set-tool-default');
      return u;
    };
    if (N2(item, m)) {
      let t = I.library.local.stateGroups[item.node_id];
      if (!t || !I.mirror.sceneGraph.get(t.node_id)) {
        e.dispatch(showModalHandler({
          type: _$$Q
        }));
        return;
      }
      permissionScopeHandler.user('insert-state-group', () => {
        v(t.node_id, '', insertLogArgsOverride);
      });
      ds('State Group Local Symbol Inserted', m.key, e.getState(), {
        stateGroupLibraryKey: item.library_key,
        stateGroupId: item.id,
        StateGroupCanvasPositionX: canvasPosition.x,
        StateGroupCanvasPositionY: canvasPosition.y
      });
      e.dispatch(tX());
    } else {
      let t = performance.now();
      if (tb && tb === item.key && tT) {
        let e = await tT;
        e && e.updated_at > item.updated_at && (r = e);
      }
      let i = eK(e.dispatch);
      Eo.getCanvas(item).then(t => {
        permissionScopeHandler.user('insert-state-group', () => {
          let n = permissionScopeHandler.system('upsert-shared-state-group', () => LibraryPubSub.upsertSharedStateGroup(item.key ?? _$$q.INVALID, item.version, item.library_key, Confirmation.NO, t, SceneIdentifier.ACTIVE_SCENE));
          if (!n || n.fileUpdateRequired || !n.localGUID) throw new Error('An error occurred while adding an instance of this component.');
          let i = v(n.localGUID, item.default_state_key, insertLogArgsOverride);
          let a = I.mirror.sceneGraph.get(n.localGUID)?.childrenNodes[0];
          a && (C$(a) && i !== defaultSessionLocalIDString ? (e.dispatch(_$$E({
            nodeId: i
          })), YQ({
            id: sh
          })) : YQ({
            id: An
          }));
        });
      }, e => {
        let t = Fullscreen.getStateGroupNodeId(item.key, item.version);
        if (!t) throw new Error('An error occurred while adding an instance of this component.');
        v(t, '', insertLogArgsOverride);
      }).then(() => {
        ds('State Group Shared Symbol Inserted', m.key, e.getState(), {
          stateGroupLibraryKey: item.library_key,
          stateGroupId: item.id,
          stateGroupName: item.name,
          StateGroupCanvasPositionX: canvasPosition.x,
          StateGroupCanvasPositionY: canvasPosition.y,
          isFromDefaultLibrary: _$$td(I.library.defaultPublished, item.library_key),
          isFromDoubleClick: !!isFromDoubleClick
        });
        _$$V(m.key, item, !0, !!e.getState().userFlags.apple_eula_accepted, {
          metricName: 'design_systems.subscribed_state_group.insert_time',
          duration: performance.now() - t
        });
        e.dispatch(tX());
      }).catch(n => {
        e.dispatch(_$$s.error(n.message));
        reportError(_$$e.DESIGN_SYSTEMS_EDITOR, n);
        _$$V(m.key, item, !1, !!e.getState().userFlags.apple_eula_accepted, {
          metricName: 'design_systems.subscribed_state_group.insert_time',
          duration: performance.now() - t
        });
      }).$$finally(() => {
        i();
      });
    }
  };
  await e.dispatch(vQ({
    assetLibraryKey: item.library_key,
    onInsertAsset: v,
    source: jE.INSERT_SHARED_STATE_GROUP
  }));
  e.dispatch($$eX7(t));
});
let $$eJ4 = createOptimistThunk(async (e, t) => {
  let {
    item
  } = t;
  if (!RX(item)) return;
  let {
    canvasPosition,
    percentageOffset,
    insertAsChildOfCanvas,
    useSmartPositioning,
    insertLogArgsOverride,
    insertionCallback,
    storeInRecentsKey,
    fromPlayground,
    selectAfterInsert,
    isClick,
    shouldShowVisualBell = !0,
    errorCallback
  } = t;
  let E = e.getState();
  let y = _$$s2(E);
  e.dispatch($$tG17({
    storeInRecentsKey,
    item,
    userId: y
  }));
  let b = (t, r) => {
    let s = permissionScopeHandler.user('insert-module', () => fromPlayground ? Fullscreen.insertPlaygroundModuleUsage({
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }) : Fullscreen.insertModule(t, {
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }, r, insertAsChildOfCanvas, useSmartPositioning ?? !1, selectAfterInsert ?? !0));
    insertionCallback?.(s, canvasPosition, isClick);
    qr(e.dispatch);
    fullscreenValue.triggerAction('set-tool-default');
    return s;
  };
  let T = d1(E);
  if (N2(item, T)) {
    b(item.node_id, insertLogArgsOverride);
    e.dispatch(tX());
  } else {
    let t = () => {};
    shouldShowVisualBell && (t = function (e) {
      e(VisualBellActions.enqueue({
        type: 'insert_template',
        message: getI18nString('design_systems.subscriptions.inserting_template'),
        icon: VisualBellIcon.SPINNER,
        delay: 1e3
      }));
      return function () {
        e(VisualBellActions.dequeue({
          matchType: 'insert_template'
        }));
      };
    }(e.dispatch));
    try {
      let e = await $$e010(item);
      b(e.localGUID, insertLogArgsOverride);
    } catch (t) {
      e.dispatch(_$$s.error(t.message));
      errorCallback ? errorCallback(t) : reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
    } finally {
      shouldShowVisualBell && t();
    }
  }
});
let $$eZ54 = createOptimistThunk(async (e, t) => {
  let {
    modules,
    canvasPosition,
    percentageOffset,
    insertAsChildOfCanvas,
    afterSlideModulesInsertion,
    useSmartPositioning,
    insertLogArgsOverride,
    storeInRecentsKey,
    selectAfterInsert,
    errorCallback
  } = t;
  if (modules.some(e => e.moduleSource !== TemplateType.SLIDES_TEMPLATE || !RX(e))) return;
  let m = e.getState();
  let g = _$$s2(m);
  let f = (e, t) => permissionScopeHandler.user('insert-module', () => Fullscreen.insertModule(e, {
    x: canvasPosition.x,
    y: canvasPosition.y,
    percentOffsetX: percentageOffset.x,
    percentOffsetY: percentageOffset.y
  }, t, insertAsChildOfCanvas, useSmartPositioning ?? !1, selectAfterInsert ?? !0));
  try {
    let t = (await Promise.all(modules.map($$e010))).map(e => f(e.localGUID, insertLogArgsOverride));
    modules.forEach(t => {
      e.dispatch($$tG17({
        storeInRecentsKey,
        item: t,
        userId: g
      }));
    });
    afterSlideModulesInsertion(modules, t);
    fullscreenValue.triggerAction('set-tool-default');
  } catch (e) {
    errorCallback ? errorCallback(e) : reportError(_$$e.SLIDES, e);
  }
});
let $$eQ39 = createOptimistThunk(async (e, t) => {
  let {
    item
  } = t;
  let {
    cmsCollectionMappings,
    canvasPosition,
    percentageOffset,
    insertAsChildOfCanvas,
    useSmartPositioning,
    insertLogArgsOverride,
    selectAfterInsert,
    errorCallback
  } = t;
  let h = canvasPosition ? {
    x: canvasPosition.x,
    y: canvasPosition.y,
    percentOffsetX: percentageOffset?.x || 0.5,
    percentOffsetY: percentageOffset?.y || 0.5
  } : null;
  _$$e2(item);
  let m = (t, r) => {
    let i = cmsCollectionMappings?.collectionId ?? null;
    let a = cmsCollectionMappings ? new Map(Object.entries(cmsCollectionMappings.fieldSchemaMappings)) : null;
    let s = permissionScopeHandler.user('insert-responsive-set', () => Fullscreen.insertResponsiveSet(t, h, r, i, a, insertAsChildOfCanvas, useSmartPositioning ?? !1, selectAfterInsert ?? !0));
    qr(e.dispatch);
    fullscreenValue.triggerAction('commit');
    fullscreenValue.triggerAction('set-tool-default');
    return s;
  };
  if (item.subscriptionStatus !== 'LIBRARY') {
    m(item.assetId, insertLogArgsOverride);
  } else {
    try {
      let e = await _$$e3(item);
      m(e, insertLogArgsOverride);
    } catch (t) {
      e.dispatch(_$$s.error(t.message));
      errorCallback ? errorCallback(t) : reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
    }
  }
});
export async function $$e010(e) {
  let t = await Eo.getCanvas(e);
  let r = permissionScopeHandler.system('upsert-shared-module', () => LibraryPubSub.upsertSharedModule(e.key ?? mW.INVALID, e.version ?? Pg.INVALID, e.library_key, Confirmation.NO, t, SceneIdentifier.ACTIVE_SCENE));
  if (!r || r.fileUpdateRequired || !r.localGUID) throw new Error('An error occurred while inserting this template.');
  return r;
}
function e1(e, t, r) {
  return _$$a(t, r, {
    batchSize: 5,
    onBatchFinish(t, r) {
      e(qB({
        delta: r
      }));
    }
  });
}
let $$e22 = createOptimistThunk(async (e, t) => {
  let {
    stateGroups,
    usedItemsByKey,
    instanceIdsToUpdate,
    updateStartTime,
    subscribedLibraryKeys,
    fileSubscribedLibraryKeys
  } = t;
  let p = e.getState();
  let _ = p.openFile;
  if (_) {
    try {
      let t = await Promise.all(stateGroups.map(e => Eo.getCanvas(e)));
      let s = new Set();
      await e1(e.dispatch, stateGroups, (e, r) => {
        let l = t[r];
        if (permissionScopeHandler.user('update-shared-state-group', () => {
          LibraryPubSub.updateSharedStateGroup(e.key, e.library_key, e.newStateKeyToOutdatedItems, instanceIdsToUpdate.map(_$$v.toString), l, updateStartTime);
        }), Object.keys(e.newStateKeyToOutdatedItems).length) {
          for (let t of Object.values(e.newStateKeyToOutdatedItems)) {
            let {
              localIdsToUpdate,
              oldSubscribedKeysToUpdate
            } = t;
            if (GA(p.library, _, localIdsToUpdate, oldSubscribedKeysToUpdate, usedItemsByKey, subscribedLibraryKeys)) {
              s.has(e.library_key) || s.add(e.library_key);
              break;
            }
          }
        }
      });
      fullscreenValue.triggerAction('commit');
      let h = stateGroups.map(e => e.id);
      ds('Components Updated', _.key, e.getState(), {
        stateGroups: h,
        isSgShimFFEnabled: !0
      });
      s.size > 0 && tV(e, Array.from(s), fileSubscribedLibraryKeys);
    } catch (t) {
      e.dispatch(_$$s.error('An error occurred while updating the instances of this component.'));
      reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
    }
  }
});
let $$e543 = createOptimistThunk(async (e, t) => {
  let {
    components,
    usedItemsByKey,
    instanceIdsToUpdate,
    updateStartTime,
    subscribedLibraryKeys,
    fileSubscribedLibraryKeys
  } = t;
  let _ = e.getState();
  let h = _.openFile;
  if (h) {
    try {
      let t = await Promise.all(components.map(e => Eo.getCanvas(e)));
      let s = new Set();
      await e1(e.dispatch, components, (e, r) => {
        let p = t[r];
        permissionScopeHandler.user('update-shared-symbol', () => {
          LibraryPubSub.updateSharedSymbol(e.component_key ?? ii.INVALID, e.library_key, e.oldSubscribedKeysToUpdate, e.localIdsToUpdate, instanceIdsToUpdate.map(_$$v.toString), p, updateStartTime);
        });
        (e.localIdsToUpdate.length || e.oldSubscribedKeysToUpdate.length) && GA(_.library, h, e.localIdsToUpdate, e.oldSubscribedKeysToUpdate, usedItemsByKey, subscribedLibraryKeys) && !s.has(e.library_key) && s.add(e.library_key);
      });
      fullscreenValue.triggerAction('commit');
      let m = components.map(e => e.id);
      ds('Components Updated', h.key, e.getState(), {
        components: m,
        isShimFFEnabled: !0
      });
      s.size > 0 && tV(e, Array.from(s), fileSubscribedLibraryKeys);
    } catch (t) {
      e.dispatch(_$$s.error('An error occurred while updating the instances of this component.'));
      reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
    }
  }
});
export function $$e328(e) {
  e(VisualBellActions.enqueue({
    type: 'missing-font',
    message: getI18nString('design_systems.missing_font_cant_make_changes'),
    button: {
      text: getI18nString('design_systems.missing_font_learn_more'),
      action: () => {
        customHistory.unsafeRedirect('https://help.figma.com/hc/articles/360039956894-Add-a-font-to-Figma-design', '_blank');
      }
    }
  }));
}
let $$e41 = createOptimistThunk((e, t) => {
  let {
    style,
    inheritStyleKeyField,
    fromSearch,
    targetGuids,
    onSuccess,
    onError,
    targetUpsertScene = SceneIdentifier.ACTIVE_SCENE,
    omitFullscreenCommit = !1
  } = t;
  let p = e.getState();
  let _ = d1(p);
  let h = _ && !N2(style, _);
  let m = p.openFile;
  let g = ZR(cO(style, h ?? !1), m);
  let f = _$$X(g);
  e.dispatch($$e841({
    style,
    callback: (t, l, p = SceneIdentifier.ACTIVE_SCENE) => {
      if (l) {
        $$e328(e.dispatch);
        onError && onError();
        return;
      }
      targetGuids ? permissionScopeHandler.user('apply-style-to-nodes', () => {
        _$$f2(StyleVariableOperation.STYLE_ATTACH, CopyPasteType.DIRECT, () => {
          Fullscreen?.applyStyleToNodes(inheritStyleKeyField, t, !omitFullscreenCommit, targetGuids, p);
        });
      }) : permissionScopeHandler.user('apply-style-to-selection', () => {
        _$$f2(StyleVariableOperation.STYLE_ATTACH, CopyPasteType.DIRECT, () => {
          Fullscreen?.applyStyleToSelection(inheritStyleKeyField, t, !omitFullscreenCommit);
        });
      });
      trackEventAnalytics('Style Applied', {
        styleType: style.style_type,
        isShared: !!h,
        viewMode: e.getState().stylePickerListLayout ? 'LIST' : 'GRID',
        fromSearch: !!fromSearch,
        nonInteraction: 0,
        styleKey: style.key,
        consumedVariableIds: VariablesBindings.getConsumedVariableIDs(style.node_id),
        styleLibraryKey: g,
        consumingFileKey: m?.key,
        fileTeamId: m?.teamId,
        fileParentOrgId: m?.parentOrgId,
        partnerType: f,
        success: !0,
        appleEulaAccepted: !!e.getState().userFlags.apple_eula_accepted,
        targetScene: tQ(p)
      }, {
        forwardToDatadog: !0
      });
      onSuccess && onSuccess();
    },
    errorCallback: () => {
      trackEventAnalytics('Style Applied Error', {
        partnerType: f,
        targetScene: tQ(targetUpsertScene)
      }, {
        forwardToDatadog: !0
      });
      onError && onError();
    },
    targetUpsertScene,
    omitFullscreenCommit
  }));
});
let $$e841 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let {
    style,
    targetUpsertScene = SceneIdentifier.ACTIVE_SCENE
  } = t;
  let a = d1(r);
  if (!a) return;
  let o = !N2(style, a);
  let c = style.style_type === 'GRID' && !AppStateTsApi.editorPreferences().showFrameGrids.getCopy();
  if (o) {
    let r = async () => {
      try {
        let r = await Eo.getCanvas(style);
        t.bufferCallback?.(r);
        let a = permissionScopeHandler.system('ensure-style-is-loaded', () => LibraryPubSub.getOrCreateSubscribedStyleNodeId(style.key, style.content_hash ?? VariableStyleId.INVALID, style.library_key, r, targetUpsertScene));
        if (a?.fileUpdateRequired) return;
        t.omitFullscreenCommit || fullscreenValue.triggerAction('commit');
        c && (c6(), AppStateTsApi.editorPreferences().showFrameGrids.set(!0));
        let s = !1;
        if (style.style_type === 'TEXT' && a && a.localGUID) {
          let t;
          let r = (t = targetUpsertScene === SceneIdentifier.LINTER_SCENE ? new ReduxSceneGraph(FileSourceType.LINTER).get(a.localGUID) : e.getState().mirror.sceneGraph.get(a.localGUID)) && t.fontName;
          r && (await waitForFontLoaded(r.family, r.style).catch(() => {
            console.error(`Text style font did not load: ${r.family} ${r.style}`);
            s = !0;
          }));
        }
        t.callback?.(a.localGUID, s, targetUpsertScene);
      } catch (r) {
        e.dispatch(_$$s.error('An error occurred while applying the style to the selection.'));
        reportError(_$$e.DESIGN_SYSTEMS_EDITOR, r);
        t.errorCallback?.();
      }
    };
    e.dispatch(vQ({
      assetLibraryKey: style.library_key,
      onInsertAsset: r,
      source: jE.LOAD_STYLE
    }));
  } else {
    c && (c6(), AppStateTsApi.editorPreferences().showFrameGrids.set(!0));
    t.callback?.(style.node_id, !1, targetUpsertScene);
    t.bufferCallback?.(void 0);
  }
});
let $$e644 = createOptimistThunk(async (e, t) => {
  let {
    styles,
    updateStartTime,
    subscribedLibraryKeys,
    fileSubscribedLibraryKeys
  } = t;
  let o = e.getState().openFile;
  if (o) {
    try {
      let t = await Promise.all(styles.map(e => Eo.getCanvas(e)));
      let s = new Set();
      let c = e.getState();
      await e1(e.dispatch, styles, (e, r) => {
        let a = t[r];
        permissionScopeHandler.user('update-shared-style', () => {
          LibraryPubSub.updateSharedStyle(e.key, e.library_key, e.content_hash ?? VariableStyleId.INVALID, e.oldSubscribedKeysToUpdate, e.localIdsToUpdate, a, updateStartTime);
        });
        GA(c.library, o, e.localIdsToUpdate, e.oldSubscribedKeysToUpdate, c.library.used__LIVEGRAPH.styles, subscribedLibraryKeys) && !s.has(e.library_key) && s.add(e.library_key);
      });
      fullscreenValue.triggerAction('commit');
      let p = styles.map(e => e.id);
      ds('Styles Updated', c.openFile?.key, e.getState(), {
        styles: p
      });
      s.size > 0 && tV(e, Array.from(s), fileSubscribedLibraryKeys);
    } catch (t) {
      e.dispatch(_$$s.error('An error occurred while updating this style.'));
      reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
    }
  }
});
let $$e718 = createOptimistThunk((e, t) => {
  let r = LibraryPubSub.getTimestampForLibraryUpdateStart();
  let {
    styleUpdateInfo,
    oldStyleGUID,
    consumerGUIDsToUpdate
  } = t;
  let {
    updateAsset
  } = n;
  Eo.getCanvas(updateAsset).then(t => {
    let n = e.getState();
    let {
      content_hash
    } = o;
    if (!oldStyleGUID) throw new Error('guid to update can not be empty');
    if (!content_hash) throw new Error('content_hash not specified on style');
    let l = permissionScopeHandler.user('update-selected-shared-style-consumers', () => LibraryPubSub.updateSelectedSharedStyleConsumers(updateAsset.key, updateAsset.library_key, content_hash, updateAsset.oldSubscribedKeysToUpdate, updateAsset.localIdsToUpdate, consumerGUIDsToUpdate, oldStyleGUID, t, r));
    if (fullscreenValue.triggerAction('commit'), !l) throw new Error('unable to update');
    ds('Styles Updated', n.openFile?.key, e.getState(), {
      styles: [updateAsset.id]
    });
  }).catch(t => {
    e.dispatch(_$$s.error('An error occurred while updating this style.'));
    reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
  });
});
let $$e930 = createOptimistThunk((e, t) => {
  let {
    variableSets,
    updateStartTime
  } = t;
  if (e.getState().openFile) {
    return Promise.all(variableSets.map(e => Eo.getCanvas(e))).then(t => e1(e.dispatch, variableSets, (e, r) => {
      let i = t[r];
      permissionScopeHandler.user('update-shared-variable-set', () => {
        LibraryPubSub.updateSharedVariableSet(e.node_id, e.libraryVariableIdsForUpdate, i, updateStartTime);
      });
    })).then(() => {
      fullscreenValue.triggerAction('commit');
    }).catch(t => {
      e.dispatch(_$$s.error('An error occurred while updating this variable collection'));
      reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
    });
  }
});
let $$te35 = createOptimistThunk((e, t) => {
  let {
    assets,
    updateStartTime
  } = t;
  return Promise.all(assets.map(e => Eo.getCanvas({
    canvas_url: e.canvasUrl
  }))).then(t => e1(e.dispatch, assets, (e, r) => {
    let i = t[r];
    if (i) {
      permissionScopeHandler.user('update-shared-library-asset', () => {
        LibraryPubSub.updateSharedLibraryAsset(Hk(e.type), e.assetId, e.sourceLibraryKey, i, updateStartTime);
      });
    } else {
      throw new Error('Missing buffer in updateSharedLibraryAssets');
    }
  })).then(() => {
    fullscreenValue.triggerAction('commit');
  }).catch(t => {
    e.dispatch(_$$s.error('An error occurred while updating this asset'));
    reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
  });
});
let $$tt53 = createOptimistThunk((e, t) => {
  let {
    assets,
    updateStartTime
  } = t;
  return Promise.all(assets.map(e => Eo.getCanvas({
    canvas_url: e.canvasUrl
  }))).then(e => _$$a(assets, (t, r) => {
    let i = e[r];
    if (i) {
      _$$r(() => {
        permissionScopeHandler.system('auto-update-shared-library-asset', () => {
          LibraryPubSub.updateSharedLibraryAsset(Hk(t.type), t.assetId, t.sourceLibraryKey, i, updateStartTime);
        });
      });
    } else {
      throw new Error('Missing buffer in autoUpdateSharedLibraryAssets');
    }
  }, {
    batchSize: 5
  })).catch(e => {
    reportError(_$$e.DESIGN_SYSTEMS_EDITOR, e);
  });
});
export async function $$tr36(e) {
  let t = await Eo.getCanvas(e);
  if (!permissionScopeHandler.system('upsert-shared-variable', () => LibraryPubSub.upsertSharedVariable(e.node_id, Confirmation.NO, t)).fileUpdateRequired) {
    return {
      buffer: t
    };
  }
}
let $$tn25 = createOptimistThunk((e, t) => {
  let {
    item,
    callback,
    bufferCallback,
    errorCallback
  } = t;
  if (!d1(e.getState())) {
    errorCallback?.(new Error('editing file not found'));
    return;
  }
  if (item.subscriptionStatus === 'LIBRARY') {
    let t = async () => {
      try {
        let e = await $$tr36(item);
        e && (callback?.(item.node_id), bufferCallback?.(e.buffer));
      } catch (t) {
        e.dispatch(_$$s.error('An error occurred while retrieving the variable.'));
        reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
        analyticsEventManager.trackDefinedEvent('variables.variable_load.error', {
          partnerType: _$$X(item.library_key)
        });
        errorCallback?.(t);
      }
    };
    e.dispatch(vQ({
      assetLibraryKey: item.library_key,
      onInsertAsset: t,
      source: jE.LOAD_VARIABLE
    }));
  } else {
    callback?.(item.node_id);
  }
});
let $$ti16 = createOptimistThunk((e, t) => new Promise((r, n) => {
  e.dispatch($$tn25({
    item: t,
    callback: r,
    errorCallback: n
  }));
}));
export async function $$ta24(e) {
  let t = await Eo.getCanvas(e);
  let r = permissionScopeHandler.system('upsert-entire-variable-set', () => {
    if (!LibraryPubSub) {
      logError(_$$e.DESIGN_SYSTEMS_EDITOR, 'LibraryPubSub binding is not available, can\'t upsert variable set');
      return;
    }
    let r = VariableSetIdCompatHandler.fromString(e.node_id);
    return e.isExtension && r ? LibraryPubSub.upsertSharedVariableSetExtension(r, e.library_key, Confirmation.NO, t, SceneIdentifier.ACTIVE_SCENE) : LibraryPubSub.upsertSharedRootVariableSet(e.node_id, e.library_key, Confirmation.NO, Confirmation.YES, t);
  });
  if (r && !r.fileUpdateRequired) {
    return {
      buffer: t
    };
  }
}
async function ts(e) {
  let t = await Eo.getCanvas(e);
  let r = permissionScopeHandler.system('upsert-shared-variable-set', () => {
    if (!LibraryPubSub) {
      logError(_$$e.DESIGN_SYSTEMS_EDITOR, 'LibraryPubSub binding is not available, can\'t upsert variable set');
      return;
    }
    let r = VariableSetIdCompatHandler.fromString(e.node_id);
    return e.isExtension && r ? LibraryPubSub.upsertSharedVariableSetExtension(r, e.library_key, Confirmation.NO, t, SceneIdentifier.ACTIVE_SCENE) : LibraryPubSub.upsertSharedRootVariableSet(e.node_id, e.library_key, Confirmation.NO, Confirmation.NO, t);
  });
  if (r && !r.fileUpdateRequired) {
    return {
      buffer: t
    };
  }
}
let $$to21 = createOptimistThunk((e, t) => {
  let {
    item,
    callback,
    bufferCallback,
    errorCallback
  } = t;
  if (d1(e.getState())) {
    if (item.subscriptionStatus === 'LIBRARY') {
      let t = async () => {
        try {
          let e = await ts(item);
          e && (callback?.(item.node_id), bufferCallback?.(e.buffer));
        } catch (t) {
          e.dispatch(_$$s.error('An error occurred while retrieving the variable collection.'));
          reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
          errorCallback?.();
        }
      };
      e.dispatch(vQ({
        assetLibraryKey: item.library_key,
        onInsertAsset: t,
        source: jE.LOAD_VARIABLE_SET
      }));
    } else {
      callback?.(item.node_id);
    }
  }
});
let $$tl11 = createOptimistThunk((e, t) => {
  e.dispatch(yH({
    key: yD(t.openFileKey)
  }));
  e.dispatch(yH({
    key: iw(t.openFileKey)
  }));
});
let td = new Set();
let tc = new Set();
export function $$tu33() {
  td = new Set();
  tc = new Set();
}
let $$tp46 = createOptimistThunk(async e => {
  let t = e.getState();
  t.user && (await gi, $$t_45(OQ(t), LL(t), e));
});
let $$t_45 = async (e, t, r, n) => {
  if (e.length === 0 && t.length === 0) {
    atomStoreManager.set($$tg22, 'loaded');
    return;
  }
  let i = r.getState().openFile;
  if (!i) {
    atomStoreManager.set($$tg22, 'loaded');
    return;
  }
  atomStoreManager.set($$tg22, 'loading');
  let a = (n = n ?? lG(r)).loadingKey;
  VP(r.getState().loadingState, a) && (await n.promise);
  r.dispatch(Cx({
    key: a
  }));
  i.editorType === 'whiteboard' && (await kw);
  let s = r.getState();
  let o = [];
  if (e.length > 0) {
    let t = new Set([...vu(s.library.publishedByLibraryKey.components).map(e => e.component_key), ...$j(s.library.defaultPublished.componentsByLibraryKey).map(e => e.component_key)]);
    o = e.filter(e => !t.has(e) && !td.has(e));
  }
  let l = [];
  if (t.length > 0) {
    let e = new Set([...vu(s.library.publishedByLibraryKey.stateGroups).map(e => e.key), ...$j(s.library.defaultPublished.stateGroupsByLibraryKey).map(e => e.key)]);
    l = t.filter(t => !e.has(t) && !tc.has(t));
  }
  try {
    if (o.length > 0 || l.length > 0) {
      let e = await XHR.post('/api/design_systems/components_state_groups', {
        component_keys: o,
        state_group_keys: l,
        org_id: i.parentOrgId
      });
      o.forEach(e => {
        td.add(e);
      });
      l.forEach(e => {
        tc.add(e);
      });
      let t = e.data.meta.components;
      let n = e.data.meta.state_groups;
      let a = e.data.meta.files;
      r.dispatch(uo({
        files: a,
        subscribeToRealtime: !0
      }));
      r.dispatch(dC({
        subscribedOldKeyToNewKey: e.data.meta.move_remappings,
        localOldGuidToNewKey: {}
      }));
      let s = atomStoreManager.get(qp);
      $$tZ20(t, PW.COMPONENT, s, r.dispatch);
      $$tZ20(n, PW.STATE_GROUP, s, r.dispatch);
    }
    n.callbackForComponent?.(!0);
  } catch (e) {
    n.callbackForComponent?.(!1);
  }
  n.resetPromise();
  r.dispatch(yH({
    key: a
  }));
  n.callback();
  atomStoreManager.set($$tg22, 'loaded');
};
let th = null;
let tm = null;
let $$tg22 = atom('loading');
let $$tf14 = atom('loading');
export async function $$tE47(e, t, r) {
  try {
    let n = await _$$Z.getLibraryComponentV2({
      componentKey: t,
      source: r
    });
    let i = n.data.meta.file;
    i && e.dispatch(yJ({
      file: i
    }));
    let a = n.data.meta.component || null;
    let s = n.data.meta.component_set || null;
    let o = atomStoreManager.get(qp);
    if (a && (a.team_id = o[a.library_key]?.team_id), s && (s.team_id = o[s.library_key]?.team_id), i) {
      let t = {};
      t[a.node_id] = a;
      n.data.meta.state_components.forEach(e => {
        t[e.node_id] = e;
      });
      e.dispatch(vP({
        itemsById: t,
        fileKey: i.key,
        libraryKey: _$$l(i.library_key),
        teamId: i.team_id,
        type: PW.COMPONENT
      }));
      n.data.meta.component_set && e.dispatch(vP({
        itemsById: {
          [n.data.meta.component_set.key]: n.data.meta.component_set
        },
        fileKey: i.key,
        libraryKey: _$$l(i.library_key),
        teamId: i.team_id,
        type: PW.STATE_GROUP
      }));
      a && Eo.getCanvas(a);
    }
    return {
      component: a,
      parentStateGroup: n.data.meta.component_set || null
    };
  } catch (e) {
    if (e?.status === 403) {
      let e = new Error('Permissions error for /api/design_systems/library/component_v2/key');
      _$$t('component');
      console.error(e);
    }
    return {
      component: null,
      parentStateGroup: null
    };
  }
}
let $$ty31 = createOptimistThunk((e, t) => {
  th = t.componentKey;
  tm = $$tE47(e, t.componentKey, t.callsite);
});
let tb = null;
let tT = null;
export async function $$tI55(e, t) {
  try {
    let r = (await _$$Z.getLibraryStateGroup({
      stateGroupKey: t
    })).data.meta;
    let n = {
      [r.node_id]: r
    };
    let i = atomStoreManager.get(qp)[r.library_key];
    if (!i) return r;
    r.team_id = i.team_id;
    e.dispatch(vP({
      itemsById: n,
      fileKey: i.key,
      libraryKey: _$$l(i.library_key),
      teamId: i.team_id,
      type: PW.STATE_GROUP
    }));
    Eo.getCanvas(r);
    return r;
  } catch (e) {
    if (e?.status === 403) {
      let e = new Error('Permissions error for /api/design_systems/library/state_group/key');
      _$$t('state');
      console.error(e);
    }
    return null;
  }
}
export async function $$tS13(e, t) {
  try {
    let {
      style,
      file
    } = (await _$$Z.getLibraryStyleByKey({
      styleKey: t
    })).data.meta;
    file && e.dispatch(yJ({
      file
    }));
    Eo.getCanvas(style);
    return style;
  } catch (e) {
    if (e?.status === 403) {
      let e = new Error('Permissions error for /api/design_systems/library/styles/key');
      _$$t('style');
      console.error(e);
    }
    return null;
  }
}
export let $$tv5 = createOptimistThunk((e, t) => {
  tb = t.stateGroupKey;
  tT = $$tI55(e, t.stateGroupKey);
});
export async function $$tA52(e) {
  let {
    loadingState
  } = e.getState();
  let r = e.getState().openFile;
  if (r == null) {
    atomStoreManager.set($$tf14, 'loaded');
    return;
  }
  let n = Mb(_$$l(r.libraryKey));
  if (!Sc(loadingState, n)) {
    atomStoreManager.set($$tf14, 'loaded');
    return;
  }
  atomStoreManager.set($$tf14, 'loading');
  let i = _$$Z.getLibraryPublishedAndMovedComponents({
    openFileKey: r.key
  });
  _$$N(i, {
    dispatch: e.dispatch
  }, n);
  Ys.add(n);
  try {
    let t = await i;
    e.dispatch(uo({
      files: t.data.meta.files,
      subscribeToRealtime: !0
    }));
    Ve(r.key);
    Ve(r.libraryKey);
    let n = atomStoreManager.get(qp);
    $$tZ20(t.data.meta.state_groups, PW.STATE_GROUP, n, e.dispatch);
    $$tZ20(t.data.meta.components, PW.COMPONENT, n, e.dispatch);
    e.dispatch(dC({
      subscribedOldKeyToNewKey: {},
      localOldGuidToNewKey: t.data.meta.move_remappings
    }));
  } catch (e) {
    console.warn('Failed to get published and moved components for editing file');
  }
  atomStoreManager.set($$tf14, 'loaded');
  _B();
}
let $$tx37 = M4.Query({
  fetch: async e => (await PT.getOrgMigrationStatus({
    orgId: e
  })).data.meta,
  enabled: e => !!e
});
let $$tN27 = M4.Query({
  fetch: async e => await tC(debugState.dispatch, e),
  key: 'libraryStats'
});
let tC = async (e, t) => {
  let r = PT.getLibraries({
    orgId: t,
    fv: Ob
  });
  let n = function (e) {
    return `LIBRARY${e ? `_${e}` : ''}'_STATS'`;
  }(t);
  _$$N(r, {
    dispatch: e
  }, n);
  try {
    let t = await r;
    let n = t && t.data && t.data.meta || [];
    let i = 0;
    let a = 0;
    let s = 0;
    let o = 0;
    let l = 0;
    let d = 0;
    let c = 0;
    let u = 0;
    let p = [];
    let _ = [];
    let h = new Set();
    let m = {};
    for (let e of n) (e.num_components !== 0 || e.num_styles !== 0 || e.num_variable_collections !== 0 || e.num_variables !== 0 || e.num_module_assets !== 0) && (e.team_id && !h.has(e.team_id) && (h.add(e.team_id), c++), p.push(e), _.push(e.file), e.thumbnail_url && (m[e.library_key] = e.thumbnail_url), i += e.num_components, s += e.num_styles, o += e.num_variable_collections, l += e.num_variables, e.num_state_groups = 0, a += e.num_state_groups, d += e.num_module_assets, u++);
    _.length > 0 && e(uo({
      files: _,
      subscribeToRealtime: !1
    }));
    return {
      totalComponents: i,
      totalStateGroups: a,
      totalStyles: s,
      totalVariableCollections: o,
      totalVariables: l,
      totalModuleAssets: d,
      teamsWithLibraries: c,
      totalLibraries: u,
      files: p,
      libraryThumbnailByLibraryKey: m
    };
  } catch (e) {
    return wg;
  }
};
let $$tw23 = M4.Query({
  fetch: e => $$tL(e),
  key: 'libraryInfo'
});
let $$tO50 = M4.Query({
  fetch: async e => (await _$$Z.getLibrariesV2(e)).data.meta ?? [],
  key: 'libraryInfoV2'
});
export function $$tR19(e, t = {}) {
  let r = IT($$tw23(e), t);
  let n = useDispatch();
  let [a] = r;
  let s = useSetAtom(qU);
  DC(a, e => {
    let t = e.files.map(e => e.file);
    t.length > 0 && n(uo({
      files: t,
      subscribeToRealtime: !1
    }));
    s(e.files.map(e => _$$E2(e)));
  });
  return r;
}
let $$tL = _$$D2(async ({
  currentOrgId: e,
  excludeDrafts: t,
  subscriptionFileKey: r,
  includeThumbnails: n,
  includeSharingGroupInfo: i
}) => {
  let a = _$$Z.getLibraries({
    orgId: e,
    subscriptionFileKey: r || void 0,
    includeThumbnails: n,
    includeSharingGroupInfo: i
  });
  try {
    let e = await a;
    let r = e && e.data && e.data.meta || [];
    let i = 0;
    let s = 0;
    let o = 0;
    let l = 0;
    let d = 0;
    let c = 0;
    let u = 0;
    let p = 0;
    let _ = [];
    let h = [];
    let m = new Set();
    let g = {};
    for (let e of r) {
      e.num_state_groups = 0;
      (e.num_components !== 0 || e.num_styles !== 0 || e.num_variable_collections !== 0 || e.num_variables !== 0 || e.num_module_assets !== 0) && (!t || e.team_id) && (e.team_id && !m.has(e.team_id) && (m.add(e.team_id), u++), _.push(n ? {
        ...e,
        thumbnail_url: e.file.thumbnail_url
      } : e), h.push(e.file), e.thumbnail_url && (g[e.library_key] = e.thumbnail_url), i += e.num_components, o += e.num_styles, l += e.num_variable_collections, d += e.num_variables, s += e.num_state_groups, c += e.num_module_assets, p++);
    }
    return {
      totalComponents: i,
      totalStateGroups: s,
      totalStyles: o,
      totalVariableCollections: l,
      totalVariables: d,
      totalModuleAssets: c,
      teamsWithLibraries: u,
      totalLibraries: p,
      files: _,
      libraryThumbnailByLibraryKey: g
    };
  } catch (e) {
    return {
      ...wg
    };
  }
});
function tP(e) {
  return _$$l(e.libraryKey || '');
}
function tD(e, t, r) {
  if (!t || !r) return;
  t = t.filter(e => e.library || e.communityLibrary);
  r = r.filter(e => e.library || e.communityLibrary);
  let n = T()(t, tP);
  for (let t of r) {
    let r = tP(t);
    let i = n[r];
    i && i.isSubscribed === t.isSubscribed && i.figJamSubscribed === t.figJamSubscribed && i.slidesSubscribed === t.slidesSubscribed || e.dispatch(F$({
      libraryKey: r,
      subscriptions: {
        design: !!t.isSubscribed,
        figjam: !!t.figJamSubscribed,
        slides: !!t.slidesSubscribed,
        buzz: !1
      }
    }));
  }
}
export function $$tk34(e, t, r) {
  tD(e, t?.map(tF), r?.map(tF));
}
let $$tM9 = function (e) {
  let t = useStore();
  let r = Rs(LibraryFileSubscriptions, {
    fileKey: e
  }, {
    enabled: !!e
  });
  let {
    data
  } = useMemo(() => r.transform(e => e?.file?.libraryFileSubscriptionOverrides ?? []), [r]);
  let s = ZC(data);
  useEffect(() => {
    s && data && tD(t, s, data);
  }, [t, data, s]);
};
let tF = e => ({
  ...e
});
let $$tj42 = function () {
  let e = useStore();
  let t = n1();
  let r = LH();
  let {
    data
  } = Rs(LibraryUserSubscriptions, {});
  let s = ZC(data);
  useEffect(() => {
    if (!s || !data) return;
    let t = data?.currentUser?.libraryUserSubscriptions;
    $$tk34(e, s?.currentUser?.libraryUserSubscriptions, t);
  }, [e, data, s]);
  let o = Nn();
  let l = ZC(o);
  useEffect(() => {
    if (!o || !l) return;
    let t = sj(o);
    tD(e, sj(l), t);
  }, [e, o, l]);
  let {
    data: _data
  } = Rs(LibraryOrgSubscriptions, {
    orgId: r
  }, {
    enabled: !!r
  });
  let c = ZC(_data);
  useEffect(() => {
    if (!c || !_data) return;
    let t = _data?.orgLibrarySubscriptions;
    $$tk34(e, c?.orgLibrarySubscriptions, t);
  }, [e, _data, c]);
  let u = cD();
  let p = Rs(LibraryTeamSubscriptions, {});
  let {
    data: _data2
  } = useMemo(() => p.transform(e => {
    let n = (e.allTeamRoles || []).filter(e => e.team && !e.team.deletedAt && (e.team.orgId === r || e.team.id === u)).map(e => e.team);
    let i = {};
    for (let e of n) {
      let r = e.libraryTeamSubscriptionOverrides.map(tF).filter(e => t || !e.communityLibrary);
      i[e.id] = r;
    }
    return i;
  }), [t, r, u, p]);
  let h = ZC(_data2);
  useEffect(() => {
    h && _data2 && tD(e, Object.values(h).flat(), Object.values(_data2).flat());
  }, [e, _data2, h]);
};
let $$tU26 = createOptimistThunk(async e => {
  if (await kb.promise, !e.getState().user) return;
  let t = Promise.resolve(null);
  let r = Promise.resolve(null);
  let n = Promise.resolve(null);
  try {
    await Promise.all([t, n, r]);
  } catch (e) {}
});
export async function $$tB15(e) {
  if (!e) return 0;
  try {
    return (await PT.getNumTeams({
      orgId: e
    })).data.meta.num_teams;
  } catch (e) {}
  return 0;
}
let $$tG17 = NC('ADD_ASSET_TO_RECENTS');
let tV = (e, t, r) => {
  let n = e.getState();
  let i = n.openFile?.key || null;
  let a = n.openFile?.libraryKey || null;
  i && t.forEach(t => {
    t !== a && e.dispatch(am({
      libraryFileSubscription: {
        file_key: i,
        library_key: t,
        is_subscribed: !0
      },
      userInitiated: !0,
      fileSubscribedLibraryKeys: r
    }));
  });
};
let tH = 'LIBRARY_REMAPPING_PROGRESS_VISUAL_BELL';
let tz = null;
let $$tW40 = createOptimistThunk((e, t) => {
  tz = {
    done: 0,
    total: t.total
  };
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connecting_fraction', {
      current: 0,
      total: t.total
    }),
    type: tH,
    icon: VisualBellIcon.SPINNER,
    timeoutOverride: 1 / 0
  }));
});
let $$tK12 = createOptimistThunk((e, t) => {
  tz && (tz.done += t.done, e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connecting_fraction', {
      current: tz.done,
      total: tz.total
    }),
    type: tH,
    icon: VisualBellIcon.SPINNER,
    timeoutOverride: 1 / 0
  })));
});
let $$tY6 = createOptimistThunk(e => {
  tz = null;
  e.dispatch(VisualBellActions.dequeue({
    matchType: tH
  }));
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connected'),
    type: tH,
    icon: VisualBellIcon.CHECK
  }));
});
let $$t$51 = createOptimistThunk(e => {
  tz = null;
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connection_failed'),
    type: tH,
    error: !0
  }));
});
let tX = createOptimistThunk(e => {
  e.getState().userFlags.has_inserted_component || e.dispatch(_$$b({
    has_inserted_component: !0
  }));
});
let $$tq29 = createOptimistThunk(e => {
  e.getState().userFlags.has_opened_libraries_modal || e.dispatch(_$$b({
    has_opened_libraries_modal: !0
  }));
});
let tJ = _$$f();
export function $$tZ20(e, t, r, n) {
  for (let [i, a] of (e = e.map(e => ({
    ...e,
    team_id: r[e.library_key]?.team_id
  })), Object.entries(y()(e, e => e.library_key)))) {
    let e = _$$l(i);
    n(vP({
      itemsById: T()(a, e => e.node_id),
      fileKey: tJ(a[0]),
      libraryKey: e,
      teamId: r[e]?.team_id ?? null,
      type: t
    }));
  }
}
function tQ(e) {
  switch (e) {
    case SceneIdentifier.ACTIVE_SCENE:
      return 'ACTIVE_SCENE';
    case SceneIdentifier.PLAYGROUND_SCENE:
      return 'PLAYGROUND_SCENE';
    case SceneIdentifier.LINTER_SCENE:
      return 'LINTER_SCENE';
  }
}
export const $h = $$eY0;
export const AV = $$e41;
export const As = $$e22;
export const BK = $$ez3;
export const Bs = $$eJ4;
export const D6 = $$tv5;
export const EY = $$tY6;
export const Ee = $$eX7;
export const FU = $$e$8;
export const Gb = $$tM9;
export const Hm = $$e010;
export const Kd = $$tl11;
export const Kk = $$tK12;
export const Ky = $$tS13;
export const M7 = $$tf14;
export const NW = $$tB15;
export const Oe = $$ti16;
export const PI = $$tG17;
export const Qn = $$e718;
export const Tn = $$tR19;
export const VF = $$tZ20;
export const Wo = $$to21;
export const Xh = $$tg22;
export const Yb = $$tw23;
export const Yf = $$ta24;
export const Yi = $$tn25;
export const Yx = $$tU26;
export const Z = $$tN27;
export const Zl = $$e328;
export const Zn = $$tq29;
export const _K = $$e930;
export const a9 = $$ty31;
export const b$ = $$eq32;
export const e$ = $$tu33;
export const eB = $$tk34;
export const f$ = $$te35;
export const ff = $$tr36;
export const fv = $$tx37;
export const jD = $$eV38;
export const jR = $$eQ39;
export const n8 = $$tW40;
export const nh = $$e841;
export const nz = $$tj42;
export const rX = $$e543;
export const t5 = $$e644;
export const tL = $$t_45;
export const tg = $$tp46;
export const u7 = $$tE47;
export const uO = $$eW48;
export const uP = $$eH49;
export const wV = $$tO50;
export const x = $$t$51;
export const xZ = $$tA52;
export const yA = $$tt53;
export const yy = $$eZ54;
export const zn = $$tI55;