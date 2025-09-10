import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { atom, Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { dP, bh, M3 } from "../figma_app/119475";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { L } from "../905/773253";
import { MB } from "../figma_app/525558";
import { zm, er } from "../905/753512";
import { Ir } from "../905/789781";
var $$n8;
let m = atom(!1);
let h = atom(!1);
export function $$g3({
  children: e
}) {
  let t = Xr(h);
  let {
    tabManager
  } = zm();
  let n = tabManager.activeTab;
  let l = useCallback(() => (t(!0), null), [t]);
  let d = useCallback(e => 0 === e.path[0] && "search" !== n ? {
    path: [1, Ir.findIndex(e => e === n)],
    column: null
  } : null, [n]);
  return jsx(dP, {
    overrideRight: l,
    overrideDown: d,
    children: e
  });
}
export function $$f0(e, t) {
  let [i, n] = useAtomValueAndSetter(m);
  useEffect(() => {
    e && i && t && (e.focus(), n(!1));
  }, [i, t, n, e]);
}
export function $$_9(e) {
  let [t, i] = useAtomValueAndSetter(m);
  let n = zm().tabManager.activeTab;
  useEffect(() => {
    e.current && t && "search" === n && (e.current.focus(), i(!1));
  }, [t, i, e, n]);
}
export function $$A6({
  children: e
}) {
  let t = Xr(m);
  let i = useCallback(e => (e.column && 0 !== e.column || t(!0), null), [t]);
  return jsx(dP, {
    overrideLeft: i,
    children: jsx(y, {
      children: e
    })
  });
}
function y({
  children: e
}) {
  let t = bh({
    preventScroll: !0
  });
  let [i, n] = useAtomValueAndSetter(h);
  useEffect(() => {
    i && (n(!1), setTimeout(t, 0));
  }, [t, n, i]);
  return jsx(Fragment, {
    children: e
  });
}
export function $$b7(e) {
  let t = L();
  let i = e.disabled || t;
  let {
    onClick,
    ...r
  } = e;
  let l = Xr(h);
  let u = useCallback(() => l(!0), [l]);
  let p = MB({
    onBoth: onClick,
    onKeyDown: u
  });
  let m = M3({
    ...r,
    disabled: i
  });
  return useMemo(() => ({
    ...m,
    onClickWithFocus: p
  }), [m, p]);
}
export function $$v4() {
  return useCallback(e => {
    if (e.target === e.currentTarget && ("Enter" === e.key || " " === e.key)) {
      e.preventDefault();
      let t = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0,
        detail: 0
      });
      e.currentTarget.dispatchEvent(t);
    }
  }, []);
}
export function $$I5({
  children: e,
  kbArgs: t,
  elementRef: i
}) {
  return er() ? jsx($$E2, {
    elementRef: i,
    kbArgs: t,
    children: e
  }) : jsx(Fragment, {
    children: e
  });
}
export function $$E2({
  children: e,
  kbArgs: t,
  elementRef: i
}) {
  let {
    setKeyboardNavigationElement
  } = $$b7(t);
  useEffect(() => {
    setKeyboardNavigationElement(i.current);
  }, [setKeyboardNavigationElement, i]);
  return jsx(Fragment, {
    children: e
  });
}
export function $$x1(e) {
  return {
    ref: useRef(null),
    kbArgs: e
  };
}
(e => {
  (e => {
    e[e.Search = 0] = "Search";
    e[e.Tabs = 1] = "Tabs";
  })(e.TabStripSection || (e.TabStripSection = {}));
  (e => {
    e[e.Header = 0] = "Header";
    e[e.Body = 1] = "Body";
    e[e.Footer = 2] = "Footer";
  })(e.TabBodySection || (e.TabBodySection = {}));
  (e => {
    e[e.CreatedInThisFile = 0] = "CreatedInThisFile";
    e[e.AddedToThisFile = 1] = "AddedToThisFile";
    e[e.UsedInThisFile = 2] = "UsedInThisFile";
    e[e.MissingLibrariesButton = 3] = "MissingLibrariesButton";
  })(e.InThisFileSection || (e.InThisFileSection = {}));
  (e => {
    e[e.List = 0] = "List";
    e[e.Footer = 1] = "Footer";
  })(e.UpdatesSection || (e.UpdatesSection = {}));
  (e => {
    e[e.AllPagesToggle = 0] = "AllPagesToggle";
    e[e.UpdateAllButton = 1] = "UpdateAllButton";
  })(e.UpdatesSectionFooter || (e.UpdatesSectionFooter = {}));
  e.UpdatesListAssetSection = {
    [PrimaryWorkflowEnum.COMPONENT]: 0,
    [PrimaryWorkflowEnum.STATE_GROUP]: 1,
    [PrimaryWorkflowEnum.STYLE]: 2,
    [PrimaryWorkflowEnum.VARIABLE_SET]: 3,
    [PrimaryWorkflowEnum.CODE_COMPONENT]: 4
  };
  (e => {
    e[e.SeeMore = 0] = "SeeMore";
    e[e.CardRow = 1] = "CardRow";
  })(e.TeamsListSection || (e.TeamsListSection = {}));
  (e => {
    e[e.CurrentWorkspace = 0] = "CurrentWorkspace";
    e[e.AllWorkspaces = 1] = "AllWorkspaces";
  })(e.WorkspacesSection || (e.WorkspacesSection = {}));
})($$n8 || ($$n8 = {}));
export const $_ = $$f0;
export const E4 = $$x1;
export const Tq = $$E2;
export const Y7 = $$g3;
export const a8 = $$v4;
export const bj = $$I5;
export const ej = $$A6;
export const hx = $$b7;
export const m3 = $$n8;
export const p1 = $$_9;
