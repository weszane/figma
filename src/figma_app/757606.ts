import { jsx } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ay } from "../figma_app/272902";
import { analyticsEventManager } from "../905/449184";
import { useSingleEffect } from "../905/791079";
import { M3 } from "../figma_app/119475";
import { IW, Lp } from "../figma_app/563413";
import { searchEndSession, searchStartSession } from "../figma_app/925970";
import { fullscreenValue } from "../figma_app/455680";
import { f7 } from "../figma_app/896988";
import { selectCurrentFile } from "../figma_app/516028";
import { k as _$$k } from "../905/540025";
import { K } from "../905/954649";
let f = e => !!e.isNewAssetsPanel;
export function $$E2({
  isVisible: e,
  autofocus: t,
  selectOnFocus: r,
  ref: n
}) {
  return useCallback(() => {
    n?.current && e && t && n.current.focus(r);
  }, [t, e, n, r]);
}
export function $$y1(e) {
  let {
    isVisible,
    query,
    placeholder,
    onChange,
    className,
    extraSpacing,
    hideXIcon,
    hideSearchIcon,
    isFigjam,
    isLibraryModalUi3,
    autofocus,
    selectOnFocus,
    entryPointForTracking,
    forwardedRef,
    recordingKey
  } = e;
  let R = useDispatch();
  let L = selectCurrentFile();
  let P = useSelector(e => e.search.sessionId);
  let D = _$$k();
  let k = useRef(null);
  let M = $$E2({
    isVisible,
    autofocus,
    selectOnFocus,
    ref: k
  });
  let F = useCallback(e => !!(e.altKey && fullscreenValue.isReady()) && f7(e), []);
  useSingleEffect(() => {
    function e() {
      R(searchEndSession());
    }
    M();
    e();
    return e;
  });
  let j = useCallback(() => {
    "editor:assets_panel" === entryPointForTracking && analyticsEventManager.trackDefinedEvent("assets_panel.search_cleared", {
      searchQuery: query,
      assetsPanelVersion: D,
      fileKey: L?.key,
      fileTeamId: L?.teamId ?? void 0,
      fileOrgId: L?.parentOrgId ?? void 0
    });
    f(e) ? e.onClearSearch() : onChange("");
    R(searchEndSession());
  }, [entryPointForTracking, e, R, query, D, L?.key, L?.teamId, L?.parentOrgId, onChange]);
  let U = useCallback(e => {
    entryPointForTracking && ("" === e && P ? R(searchEndSession()) : "" === e || P || R(searchStartSession({
      entryPoint: entryPointForTracking
    })), onChange(e));
  }, [R, entryPointForTracking, P, onChange]);
  let B = useCallback(() => {
    "" === query || P || R(searchStartSession({
      entryPoint: entryPointForTracking
    }));
    "editor:assets_panel" === entryPointForTracking && analyticsEventManager.trackDefinedEvent("assets_panel.search_focused", {
      assetsPanelVersion: D,
      fileKey: L?.key,
      fileTeamId: L?.teamId ?? void 0,
      fileOrgId: L?.parentOrgId ?? void 0
    });
    f(e) && e.onFocus();
  }, [entryPointForTracking, L?.key, L?.parentOrgId, L?.teamId, e, D, P, R, query]);
  let G = useCallback(() => {
    "editor:assets_panel" === entryPointForTracking && analyticsEventManager.trackDefinedEvent("assets_panel.search_unfocused", {
      assetsPanelVersion: D,
      fileKey: L?.key,
      fileTeamId: L?.teamId ?? void 0,
      fileOrgId: L?.parentOrgId ?? void 0
    });
    f(e) && e.onBlur();
  }, [entryPointForTracking, L?.key, L?.parentOrgId, L?.teamId, e, D]);
  return isFigjam || isLibraryModalUi3 ? jsx(IW, {
    ref: Ay(k, forwardedRef),
    className,
    clearSearch: j,
    focusOnMount: !1,
    hideXIcon,
    isKeyDownHandled: F,
    onBlur: G,
    onChange: U,
    onFocus: B,
    placeholder,
    query,
    recordingKey,
    withUI3Icon: isLibraryModalUi3
  }) : f(e) ? jsx(K, {
    ref: Ay(k, forwardedRef),
    clearSearch: j,
    focusOnMount: !1,
    isKeyDownHandled: F,
    onBlur: G,
    onChange: U,
    onFocus: B,
    placeholder: e.placeholder,
    query,
    recordingKey
  }) : jsx(Lp, {
    ref: Ay(k, forwardedRef),
    className,
    clearSearch: j,
    dataTestId: "asset-panel-search-bar-input",
    extraSpacing,
    focusOnMount: !1,
    hideSearchIcon,
    hideXIcon,
    isKeyDownHandled: F,
    onBlur: G,
    onChange: U,
    onFocus: B,
    placeholder,
    query,
    recordingKey
  });
}
export function $$b0({
  autofocus: e,
  className: t,
  column: r,
  extraSpacing: a,
  hideSearchIcon: o,
  hideXIcon: c,
  isFigjam: u,
  isVisible: p,
  onChange: _,
  path: h,
  placeholder: m,
  query: g,
  recordingKey: f,
  selectOnFocus: E,
  entryPointForTracking: b,
  forwardedRef: T,
  ...I
}) {
  let S = useRef(null);
  let v = useCallback(() => {
    E && S.current?.select();
  }, [E]);
  let {
    setKeyboardNavigationElement
  } = M3({
    path: h,
    column: r,
    disabled: !p,
    onFocus: v
  });
  useSingleEffect(() => {
    S.current && setKeyboardNavigationElement?.(S.current.searchInput);
  });
  return jsx($$y1, {
    autofocus: e,
    className: t,
    entryPointForTracking: b,
    extraSpacing: a,
    forwardedRef: Ay(S, T),
    hideSearchIcon: o,
    hideXIcon: c,
    isFigjam: u,
    isVisible: p,
    onChange: _,
    placeholder: m,
    query: g,
    recordingKey: f,
    selectOnFocus: E,
    setKeyboardNavigationElement,
    ...I
  });
}
export const E1 = $$b0;
export const aU = $$y1;
export const vb = $$E2;