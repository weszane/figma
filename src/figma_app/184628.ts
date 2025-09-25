import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { w4, Z9 } from "../figma_app/770359";
import { lV, lr } from "../figma_app/617606";
import { noop } from 'lodash-es';
import { IconButton } from "../905/443068";
import { k as _$$k } from "../905/443820";
import { R as _$$R } from "../905/256203";
import { m as _$$m } from "../905/375522";
import { b as _$$b } from "../905/484176";
import { V as _$$V } from "../905/802779";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { logInfo } from "../905/714362";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { Dm } from "../figma_app/8833";
import { EditorPreferencesApi } from "../figma_app/740163";
import { KindEnum } from "../905/129884";
import { Zk } from "../figma_app/626177";
import { Wv } from "../figma_app/711157";
import { getCombinedAiPermission } from "../figma_app/251115";
import { QK } from "../figma_app/259678";
import { p as _$$p } from "../905/786248";
import { kb, JL } from "../figma_app/690664";
import { $W } from "../figma_app/325537";
import { Nm } from "../figma_app/202307";
import { U as _$$U } from "../905/389812";
import { Ho, a5 } from "../figma_app/337924";
import { _H } from "../figma_app/408883";
import { p as _$$p2, h as _$$h } from "../905/397119";
import { Wn } from "../figma_app/114522";
import { b_, OV, pO } from "../figma_app/302802";
import { isFigmakeSitesEnabled, useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { O as _$$O } from "../905/273186";
import { d as _$$d } from "../905/977713";
import { C as _$$C } from "../905/660687";
import { h3, Mq, xN } from "../905/918995";
import { l as _$$l } from "../905/674573";
import { A as _$$A, a as _$$a } from "../905/904550";
let K = (e, t, r) => {
  EditorPreferencesApi().toggleCollaborativeTextDebugLogging.getCopy() && logInfo(e, t, r);
};
let Y = () => !_H();
function $({
  codeFile: e,
  displayName: t,
  isGenerating: r,
  isEditable: i,
  formatExtension: a,
  downloadCode: s,
  setIsChatVisible: c,
  isChatVisible: _,
  format: h,
  streamingCodeToDisplay: f,
  aiEnabled: E,
  isDownloadProcessing: y
}) {
  let T = b_();
  return jsxs(Wv, {
    titleTx: jsx(_$$p, {
      fileName: t || "",
      onChange: t => {
        e && permissionScopeHandler.user("edit-code-file-name", () => {
          e.setHasBeenManuallyRenamed(!0);
          e.name = t;
          Fullscreen?.commit();
        });
      },
      disabled: r || !i,
      readOnly: QK(e, lV.FIGMAKE),
      path: e?.codeFileFullPathWithoutScheme ?? null
    }),
    children: [T && jsx(IconButton, {
      "aria-label": getI18nString("sites.panel.code_component_multiplayer_warning"),
      onClick: noop,
      htmlAttributes: {
        "data-tooltip": getI18nString("sites.panel.code_component_multiplayer_warning"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(_$$R, {})
    }), a && i && jsx(IconButton, {
      "aria-label": getI18nString("sites.panel.format_code_tooltip"),
      htmlAttributes: {
        "data-tooltip": getI18nString("sites.panel.format_code_tooltip"),
        "data-tooltip-type": KindEnum.TEXT
      },
      onClick: h,
      disabled: !!f,
      children: jsx(_$$m, {})
    }), s && jsx(IconButton, {
      "aria-label": getI18nString("figmake.code_editor.download_code"),
      onClick: s,
      disabled: y,
      children: jsx(q, {})
    }), E && c && jsx(_$$U, {
      isChatVisible: _ ?? !1,
      setIsChatVisible: c
    })]
  });
}
export function $$X1({
  codeFile: e,
  maxHeight: t,
  fullHeight: r,
  isChatVisible: l,
  setIsChatVisible: d,
  nodeWithChatMessages: c,
  downloadCode: u,
  isDownloadProcessing: p
}) {
  let _ = e?.codeFileFullPathWithoutScheme ?? "tmp-code.tsx";
  let h = e?.name;
  let m = c ?? e;
  let y = m?.guid;
  let S = e?.guid;
  let v = e?.isSubscribedAsset;
  let x = OV(e);
  let C = x && !x.hasNeverBeenEdited();
  let {
    exchange
  } = $W(m?.guid);
  let P = useAtomWithSubscription(kb);
  let {
    code,
    edits
  } = function (e, t) {
    let r = !!e && e.messages.length > 0;
    let n = {};
    if (r) {
      let r = e?.messages[e.messages.length - 1];
      let i = lr(r?.textContent || "");
      let a = e.fileUpdates.find(e => e.name === t);
      i.edits ? n = {
        edits: i.edits
      } : i.code ? n = {
        code: i.code
      } : a && (n = {
        code: a.contents
      });
    }
    return n;
  }(exchange, _);
  let G = useCallback(() => {
    if (S) {
      let e = _$$O.get(S);
      e && (e.hasUserEdited = !0);
      atomStoreManager.set(Nm(y), "user");
    }
  }, [S, y]);
  let W = useCallback((e, t, r) => {
    K(e, `[GUID(${S})] ${t}`, r);
  }, [S]);
  let X = useCallback(() => C ? e?.collaborativeSourceCode ?? null : null, [C, e]);
  let q = useMemo(() => C && x ? _$$C(X, W, G) : null, [C, x, X, W, G]);
  let Z = useCallback(t => {
    x && x.hasNeverBeenEdited() ? (W("Collaborative Text", "Initializing collaborative text"), x.startBatch(), x.createInsertionOp(0, t.length, t, 0), x.endBatch()) : e && (permissionScopeHandler.user("edit-code-file-code", () => {
      e.sourceCode = t;
    }), G());
  }, [e, x, W, G]);
  let Q = useDispatch();
  pO();
  let ee = h3(_);
  let et = useMemo(() => new Mq(), []);
  let er = useMemo(() => ee ? xN(et, ee) : null, [et, ee]);
  let en = useCallback(async () => {
    try {
      await et.format();
      Q(VisualBellActions.enqueue({
        message: getI18nString("sites.code_component.format_code_success"),
        error: !1
      }));
    } catch (e) {
      Ho(e, lV.CODE_IN_SITES, a5.FORMAT);
      Q(VisualBellActions.enqueue({
        message: getI18nString("sites.code_component.format_code_error", {
          message: e.message.split("\n")[0]
        }),
        error: !0
      }));
    }
  }, [Q, et]);
  let ei = useMemo(() => w4.of([{
    key: "Mod-s",
    stopPropagation: !0,
    preventDefault: !0,
    run: () => (en(), !0)
  }]), [en]);
  let ea = useMemo(() => S ? Z9.define(e => new _$$l(S, JL, e)) : null, [S]);
  let es = useMemo(() => [er, ei, q, ea].filter(Boolean), [er, q, ei, ea]);
  let eo = exchange && exchange.messages.length > 0;
  let el = Y() && !v && !eo;
  let ed = useCallback(() => C ? e?.collaborativeSourceCode?.computeCurrentText() : e?.sourceCode, [e, C]);
  let ec = getCombinedAiPermission();
  let eu = getFeatureFlags().sites || getFeatureFlags().sts_code;
  let ep = isFigmakeSitesEnabled();
  let e_ = useIsSelectedFigmakeFullscreen();
  let eh = Wn(S);
  if (!ep && !eu || !ed) return null;
  let em = C ? x?.handle : `non-collab-${y}-${P}`;
  return jsxs(Zk, {
    className: "x18d9i69 x87ps6o x5yr21d",
    children: [e_ && jsx($, {
      aiEnabled: ec,
      codeFile: e,
      displayName: h,
      downloadCode: u,
      format: en,
      formatExtension: er,
      isChatVisible: l,
      isDownloadProcessing: p,
      isEditable: el,
      isGenerating: eh,
      setIsChatVisible: d,
      streamingCodeToDisplay: code
    }), jsx("div", {
      className: Dm,
      style: {
        height: e_ ? "calc(100% - 40px)" : "100%"
      },
      children: jsx(J, {
        codeFileGuid: S,
        codeMirrorInstanceKey: em,
        disableUndoRedoExtension: !!C,
        extensions: es,
        fileName: _,
        formatCode: en,
        fullHeight: r,
        initialText: ed,
        isEditable: el,
        isGenerating: eh,
        largeFont: e_,
        maxHeight: `${t}px`,
        onChange: C ? void 0 : Z,
        streamingCodeToDisplay: code,
        streamingEditsToDisplay: edits
      })
    })]
  });
}
function q() {
  return getFeatureFlags().make_download ? jsx(_$$b, {}) : jsx(_$$V, {});
}
function J({
  isGenerating: e,
  isEditable: t,
  streamingCodeToDisplay: r,
  streamingEditsToDisplay: i,
  fileName: a,
  codeFileGuid: s,
  fullHeight: o = !1,
  maxHeight: l,
  codeMirrorInstanceKey: d,
  disableUndoRedoExtension: c,
  extensions: u,
  initialText: p,
  formatCode: _,
  onChange: h,
  largeFont: m = !1
}) {
  if (e) return jsxs("div", {
    className: "x1n2onr6 xh8yej3 x5yr21d",
    children: [jsx(_$$d, {
      disableUndoRedoExtension: c,
      editable: !1,
      extensions: [],
      fileName: a,
      fullHeight: o,
      initialText: () => "",
      maxHeight: l,
      placeholder: getI18nString("living_designs.converting_design_to_code"),
      largeFont: m
    }), e && jsx(ee, {})]
  });
  if (i) {
    let e = Object.entries(i)[0];
    return jsx(Z, {
      initialText: p,
      edit: e[1],
      fileName: a,
      fullHeight: o,
      maxHeight: l,
      largeFont: m
    });
  }
  return r ? jsx($$Q0, {
    code: r,
    fileName: a,
    fullHeight: o,
    maxHeight: l,
    largeFont: m
  }) : jsx(_$$d, {
    codeFileGuid: s,
    disableUndoRedoExtension: c,
    editable: t,
    extensions: [...u],
    fileName: a,
    formatCode: _,
    fullHeight: o,
    initialText: p,
    largeFont: m,
    maxHeight: l,
    onChange: h,
    retainEditorState: !0
  }, d);
}
function Z({
  edit: e,
  initialText: t,
  fileName: r,
  fullHeight: a,
  maxHeight: s,
  largeFont: o
}) {
  let l = useMemo(() => new _$$A(), []);
  useEffect(() => {
    e.oldString && l.setHighlightText(e.oldString, e.newString, e.done);
  }, [l, e]);
  let d = useMemo(() => [_$$a(l)], [l]);
  return jsx(_$$d, {
    editable: !1,
    fileName: r,
    fullHeight: a,
    initialText: t,
    maxHeight: `${s}px`,
    extensions: d,
    largeFont: o
  });
}
export function $$Q0({
  code: e,
  fileName: t,
  fullHeight: r,
  maxHeight: a,
  onlyShowCode: s,
  largeFont: l = !1
}) {
  let d = useMemo(() => new _$$p2(), []);
  useEffect(() => {
    if (e) try {
      d.setText(e);
    } catch (t) {
      let e = isFigmakeSitesEnabled() ? lV.FIGMAKE : lV.CODE_IN_SITES;
      Ho(t, e, a5.EDIT_LOCALLY);
    }
  }, [d, e]);
  let c = useMemo(() => [_$$h(d)], [d]);
  return jsx(_$$d, {
    editable: !1,
    initialText: () => e,
    fileName: t,
    fullHeight: r,
    maxHeight: `${a}px`,
    extensions: c,
    showStats: !s,
    showGutters: !s,
    largeFont: l
  });
}
function ee() {
  return jsx("div", {
    className: "x10l6tqk x13vifvy xu96u03 x3m8u43 x1ey2m1c xldgpng x1vjfegm x78zum5 xl56j7k x6s0dn4 x47corl",
    children: jsx(_$$k, {})
  });
}
export const O = $$Q0;
export const R = $$X1;
