import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDelayedCallback } from '../905/116724';
import { s as _$$s } from '../905/139639';
import { permissionScopeHandler } from '../905/189185';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { trackEventAnalytics } from '../905/449184';
import { handleAtomEvent } from '../905/502364';
import { F as _$$F } from '../905/680873';
import { getSingletonSceneGraph } from '../905/700578';
import { atom, useAtomValueAndSetter, createRemovableAtomFamily } from '../figma_app/27355';
import { useLatestRef } from '../figma_app/922077';
import { getObservableValue } from '../figma_app/84367';
import { L3 } from '../figma_app/385215';
import { fullscreenValue } from '../figma_app/455680';
import { setupRemovableAtomFamily } from '../figma_app/615482';
import { useAppModelProperty } from '../figma_app/722362';
import { getSidebarSplitPosition, EditorPreferencesApi } from '../figma_app/740163';
import { renameNode, renameSelectedNodes, expandNodeToRoot } from '../figma_app/741237';
import { AppStateTsApi, ViewType, UserInterfaceElements, SelectionPanelType } from '../figma_app/763686';
import { tu } from '../figma_app/779249';
import { parseMsNumber } from '../figma_app/783094';
import { d as _$$d, W as _$$W } from '../figma_app/833988';
import { EditorUIState } from '../figma_app/941983';
import { U } from '../figma_app/964810';
import { useSelector, useDispatch } from 'react-redux';
let $$w4 = 240;
let $$O10 = 500;
let $$R14 = 240;
let $$L13 = 280;
let $$P6 = 350;
export function $$D1(e) {
  return e.reduce((e, t, r) => (e[t.nodeId] = r, e), {});
}
export function $$k0(e = $$w4, t = $$O10) {
  return F(getSidebarSplitPosition(), e, t);
}
export function $$M16(e, t, r) {
  let n = F(e, t, r);
  document.documentElement.style.setProperty('--left-panel-width', `${n}px`);
  EditorPreferencesApi().sidebarSplitPosition.set(n);
}
function F(e, t, r) {
  return Math.max(t, Math.min(r, e || 0));
}
export function $$j3() {
  getObservableValue(AppStateTsApi?.editorPreferences()?.showSidebar, EditorUIState.showSidebar);
  return getObservableValue(AppStateTsApi?.uiState()?.leftPanelCollapsedUI3, !EditorUIState.showSidebar);
}
export function $$U9() {
  return useMemo(() => parseMsNumber(getComputedStyle(document.body).getPropertyValue('--duration-md')) / 1e3, []);
}
export function $$B11({
  onLeftPanelCollapsedChange: e
}) {
  !function (e) {
    let t = $$j3();
    let r = useLatestRef(t);
    let i = useAppModelProperty('showUi');
    let a = useLatestRef(i);
    let s = useDelayedCallback(() => {
      e(t);
    });
    useEffect(() => {
      void 0 !== r && t !== r && s.start(10);
      void 0 !== a && i !== a && s.start(1);
    });
  }(e);
  return null;
}
export function $$G7() {
  !function (e) {
    let t = $$j3();
    let r = useLatestRef(e);
    let i = useRef();
    useEffect(() => {
      e !== r && void 0 !== r && (e ? t ? i.current = !1 : (fullscreenValue.triggerAction('toggle-sidebar', {
        source: 'spotlight-following'
      }), i.current = !0) : i.current && t && fullscreenValue.triggerAction('toggle-sidebar', {
        source: 'spotlight-following'
      }));
    }, [e, r, t]);
  }(useSelector(e => L3(e.multiplayer)));
}
export function $$V8() {
  return useSelector(e => e.mirror.appModel.isReadOnly || e.mirror.appModel.topLevelMode === ViewType.HISTORY);
}
export function $$H12() {
  return useAppModelProperty('pagesList');
}
export function $$z2() {
  let [e, t] = useState(null);
  let r = _$$F(e);
  let l = U();
  let d = $$V8();
  let c = useSelector(e => e.openFile ? e.leftPanel.activeTab : UserInterfaceElements.LAYERS);
  let p = _$$F(c);
  let _ = useDispatch();
  let {
    setIsLayersOpen
  } = $$K15();
  let y = _$$W();
  let T = _$$s();
  let I = useCallback(e => {
    if (d) return;
    let r = getSingletonSceneGraph().get(e);
    if (r?.isResponsiveSetOrWebpage && r.parentNode?.defaultResponsiveSetId === e) {
      _(VisualBellActions.enqueue({
        message: getI18nString('sites.panel.pages_panel.cant_rename_default_responsive_set')
      }));
      return;
    }
    !r?.isReactFiber && (p.current !== UserInterfaceElements.LAYERS && p.current !== UserInterfaceElements.CODE && l.showLayersPanel(), setIsLayersOpen(!0), t(e), r?.parentGuid && expandNodeToRoot(r.parentGuid));
  }, [p, _, d, l, setIsLayersOpen]);
  let S = useCallback((e, n, i) => {
    if (d) return;
    let l = r.current;
    if (l && e) {
      let e = getSingletonSceneGraph().get(l);
      let t = n || '';
      let r = AppStateTsApi.uiState().focusModeState.getCopy();
      e?.isCodeFile ? (t = tu(t), (!n || T(e.codeFilePath, i, t)) && (t = e.name), permissionScopeHandler.user('set-node-name', () => renameNode(l, t))) : e?.isResponsiveSetOrWebpage || e?.isBreakpointFrame || e?.isDerivedWebpageBreakpoint ? (t ||= e?.name, permissionScopeHandler.user('set-node-name', () => renameNode(l, t))) : SelectionPanelType.RESPONSIVE_SET === r || SelectionPanelType.COMPONENT_SET === r ? permissionScopeHandler.user('set-node-name', () => renameSelectedNodes(t)) : permissionScopeHandler.user('set-node-name', () => renameNode(l, t));
      fullscreenValue.commit();
      t !== i && e?.type && ['FRAME', 'SECTION'].includes(e.type) && (y({
        newTitle: t,
        nodeType: e.type
      }), e.type === 'FRAME' && _$$d(t).length > 0 && handleAtomEvent({
        id: 'frame_node_name_changed_with_rfd_indicator',
        properties: {
          nodeId: l
        }
      }));
    }
    t(null);
  }, [d, r, y, T]);
  useEffect(() => {
    let e = ({
      nodeId: e
    }) => {
      I(e);
    };
    fullscreenValue.fromFullscreen.on('startRenamingNode', e);
    return () => {
      fullscreenValue.fromFullscreen.removeListener('startRenamingNode', e);
    };
  }, [I]);
  return useMemo(() => ({
    renamingNodeGuid: e,
    startRenamingNode: I,
    stopRenamingNode: S
  }), [e, I, S]);
}
let W = createRemovableAtomFamily(e => setupRemovableAtomFamily(() => atom(e)));
export function $$K15() {
  let [e, t] = useAtomValueAndSetter(W(!0));
  let r = _$$F(e);
  let i = useCallback(() => {
    let e = !r.current;
    trackEventAnalytics('objects_panel_open_toggle', {
      isLayersOpen: e
    });
    t(e);
  }, [r, t]);
  return {
    isLayersOpen: e,
    setIsLayersOpen: t,
    toggleLayersAction: i
  };
}
export function $$Y5() {
  let e = U();
  return useCallback(() => {
    e.showLayersPanel();
    fullscreenValue.triggerAction('canvas-search', {
      source: 'toolbar'
    });
  }, [e]);
}
export const GQ = $$k0;
export const Pe = $$D1;
export const TU = $$z2;
export const Ye = $$j3;
export const Yh = $$w4;
export const _4 = $$Y5;
export const bQ = $$P6;
export const bi = $$G7;
export const cT = $$V8;
export const dc = $$U9;
export const g_ = $$O10;
export const jq = $$B11;
export const n0 = $$H12;
export const nJ = $$L13;
export const qm = $$R14;
export const vr = $$K15;
export const xT = $$M16;