import { useCallback, useRef, useState, useMemo, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CortexError } from "../figma_app/691470";
import { CortexErrorV2, ClientContentLengthLimitExceededError, ProviderContentLengthLimitExceededError, MeterExceededError, ProviderRateLimitExceededError, ProviderOverloadedError, CortexRateLimitExceededError, ClientNoTextSelectedError, ProviderServiceIssueError, ProviderServiceBusyError, OfflineError, UnsafeOrHarmfulPromptError, ProviderUnsafeOrHarmfulContentError, UnauthorizedError, NotImplementedError } from "../figma_app/316567";
import { ProductType, ToneType } from "../figma_app/571325";
import { ServiceCategories } from "../905/165054";
import { UnitType, UserActionState } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import h from "../vendor/128080";
import { $ } from "../905/455748";
import { useLatestRef } from "../figma_app/922077";
import { reportError } from "../905/11";
import { useSprigWithSampling } from "../905/99656";
import { getFalseValue } from "../figma_app/897289";
import { BE } from "../figma_app/991591";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { useSceneGraphSelectionKeys } from "../figma_app/311375";
import { showPickerThunk, hidePickerThunk } from "../figma_app/91703";
import { slidesRewriteTextPicker } from "../figma_app/8833";
import { Gc, nl, fN } from "../figma_app/456871";
import { isDesignFileType, isWhiteboardFileType } from "../figma_app/976749";
import { cortexAPI } from "../figma_app/432652";
import { TJ } from "../figma_app/482495";
import { useDeepEqualSceneValue, useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { isActionEnabled } from "../figma_app/357047";
import { calculatePickerPositionLeft, DEFAULT_PICKER_WIDTH } from "../905/959568";
import { h as _$$h } from "../figma_app/203891";
import { A as _$$A2 } from "../figma_app/78608";
import { JT } from "../figma_app/632248";
import { pP, cT, qy } from "../figma_app/862289";
import { zF } from "../figma_app/297822";
import { Hd, n4, y_ } from "../figma_app/878113";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { o2 } from "../figma_app/667212";
import { u as _$$u } from "../figma_app/913494";
import { G as _$$G } from "../figma_app/682672";
var m = h;
let $$W0 = 1 / 3;
let K = "tone-dial-visual-bell";
let $$Y4 = TJ(slidesRewriteTextPicker);
export function $$$12() {
  let e = BE();
  let t = useSelector(e => isActionEnabled(e.mirror.appModel, JT.SLIDES_REWRITE_TEXT));
  let r = useIsFullscreenSlidesView();
  let n = isDesignFileType();
  let a = isWhiteboardFileType();
  let s = r || !!getFeatureFlags().aip_tone_dial_fd && n || a;
  return useDeepEqualSceneValue((e, t, r, n) => {
    if (!t || !r || !n) return !1;
    let i = e.getDirectlySelectedNodes();
    return Gc(i, {
      allowEmpty: !1,
      excludeLockedNodes: !0
    }).filter(e => !e.isSlideNumber).length > 0;
  }, e, s, t);
}
export function $$X6(e, t) {
  let {
    source,
    toggle
  } = t;
  let i = atomStoreManager.get(_$$h);
  let a = atomStoreManager.get(_$$A2);
  let s = a?.current || i?.current;
  if (!s) return;
  if (atomStoreManager.set(zF, source), atomStoreManager.get($$Y4)) {
    toggle && $$q1(e);
    return;
  }
  let o = getFalseValue() ? {
    x: 0,
    y: 0
  } : calculatePickerPositionLeft(s, DEFAULT_PICKER_WIDTH);
  e(showPickerThunk({
    id: slidesRewriteTextPicker,
    initialX: o.x,
    initialY: o.y
  }));
  _$$G({
    eventName: "modal_opened",
    source
  });
}
export function $$q1(e) {
  e(hidePickerThunk());
  _$$G({
    eventName: "modal_closed"
  });
}
export function $$J13(e, t, r, i) {
  let a = isDesignFileType();
  let s = !!getFeatureFlags().aip_tone_dial_fd && a;
  let l = isWhiteboardFileType();
  let d = useCallback(({
    texts: t,
    parameters: r,
    targetMap: n,
    authInfo: i
  }) => {
    let a = e(n.values());
    let d = t.map(({
      id: e,
      text: t
    }) => {
      let r = n.get(e);
      let i = r && a.get(r.node.guid);
      return {
        id: e,
        text: i?.effectiveText ?? t
      };
    });
    return cortexAPI.slides.rewriteText({
      texts: d,
      tones: r.tones,
      productType: s ? ProductType.DESIGN : l ? ProductType.FIGJAM : ProductType.SLIDES
    }, i);
  }, [s, l, e]);
  let {
    onRun,
    lastParameters,
    longRunningAction,
    cancel
  } = Hd({
    makeCortexRequest: d,
    featureType: JT.SLIDES_REWRITE_TEXT,
    excludeDigitsAndSpecialChar: !0,
    allowEditsToLockedNodes: !0,
    onNodeStreamEvent: t,
    onError: r,
    onSuccess: i,
    editScopeLabel: o2
  });
  let {
    enqueueRun
  } = function (e) {
    let t = useRef();
    let r = useRef();
    let i = useCallback(() => {
      t.current = void 0;
      r.current && (t.current = r.current().then(i), r.current = void 0);
    }, []);
    return {
      enqueueRun: useCallback(n => {
        if (t.current) {
          r.current = () => e(n);
          return;
        }
        t.current = e(n).then(i);
      }, [i, e])
    };
  }(onRun);
  return {
    enqueueRun,
    lastParameters,
    longRunningAction,
    cancel
  };
}
export function $$Z14(e) {
  let {
    originalNodeInfos,
    setOriginalNodeInfos
  } = function (e) {
    let [t, r] = useState(() => new Map());
    let i = useStrictDeepEqualSceneValue(e => e.getCurrentPage()?.originalNodeInfos ?? []);
    let a = useMemo(() => new Map(i.map(e => [e.nodeId, e])), [i]);
    let s = useCallback(e => {
      let t = getSingletonSceneGraph().getCurrentPage();
      t && (t.originalNodeInfos = [...e.values()]);
    }, []);
    return getFeatureFlags().slides_tone_dial_undo && e === o2 ? {
      originalNodeInfos: a,
      setOriginalNodeInfos: s
    } : {
      originalNodeInfos: t,
      setOriginalNodeInfos: r
    };
  }(e);
  let i = useCallback(e => {
    if (originalNodeInfos.size) return originalNodeInfos;
    let n = new Map();
    for (let t of e) {
      let e = t.node;
      let r = t.selectionRange?.start ?? 0;
      let i = e.getRangeFontSize(r, r + 1);
      let a = e.getRangeLineHeight(r, r + 1);
      let s = e.inheritedTextStyle;
      ("mixed" === i || "mixed" === a) && reportError(ServiceCategories.AI_PRODUCTIVITY, Error("Unexpected mixed font size or line height while saving initial font size and line height"));
      n.set(e.guid, {
        nodeId: e.guid,
        nodeText: t.nodeText,
        effectiveText: t.effectiveText,
        selectionRange: t.selectionRange ?? null,
        fontSize: "mixed" !== i ? i : null,
        lineHeight: "mixed" !== a ? function (e) {
          switch (e.units) {
            case "RAW":
              return {
                value: e.value,
                units: UnitType.RAW
              };
            case "PERCENT":
              return {
                value: e.value,
                units: UnitType.PERCENT
              };
            case "PIXELS":
              return {
                value: e.value,
                units: UnitType.PIXELS
              };
          }
        }(a) : null,
        textStyle: s
      });
    }
    setOriginalNodeInfos(n);
    return n;
  }, [originalNodeInfos, setOriginalNodeInfos]);
  let a = useCallback(() => {
    setOriginalNodeInfos(new Map());
  }, [setOriginalNodeInfos]);
  let s = useCallback(r => {
    let n = originalNodeInfos.get(r.guid);
    if (!n) return;
    let i = n.fontSize;
    let a = n.lineHeight;
    let s = n.textStyle;
    let o = r.characters.length;
    permissionScopeHandler.ai(e, () => {
      i && r.fontSize !== i && r.setRangeFontSize(0, o, i);
      a && !m()(r.lineHeightOrMixed, a) && r.setRangeLineHeight(0, o, function (e) {
        switch (e.units) {
          case UnitType.RAW:
            return {
              value: e.value,
              units: "RAW"
            };
          case UnitType.PERCENT:
            return {
              value: e.value,
              units: "PERCENT"
            };
          case UnitType.PIXELS:
            return {
              value: e.value,
              units: "PIXELS"
            };
        }
      }(a));
      s && (r.inheritedTextStyle = s);
    });
  }, [originalNodeInfos, e]);
  let o = useCallback(() => {
    for (let e of originalNodeInfos.values()) {
      let t = getSingletonSceneGraph().get(e.nodeId);
      t && s(t);
    }
  }, [originalNodeInfos, s]);
  return {
    originalNodeInfos,
    saveOriginalNodeInfos: i,
    resetOriginalNodeInfos: a,
    revertNodeToOriginalNodeInfo: s,
    resetAllNodesToOriginalTextStyles: o
  };
}
export function $$Q9(e) {
  let t = pP(JT.SLIDES_REWRITE_TEXT);
  let r = t.state;
  let o = useLatestRef(r) !== r;
  let l = useDispatch<AppDispatch>();
  useEffect(() => () => {
    l(VisualBellActions.dequeue({
      matchType: K
    }));
    cT(JT.SLIDES_REWRITE_TEXT);
  }, [l]);
  useEffect(() => {
    if (o) {
      if (r === qy.RUNNING) l(VisualBellActions.enqueue({
        message: getI18nString("slides.properties_panel.rewrite_text.action_rewriting"),
        icon: VisualBellIcon.SPINNER,
        type: K,
        timeoutOverride: 1 / 0,
        button: {
          text: getI18nString("slides.properties_panel.rewrite_text.action_stop"),
          action: () => cT(JT.SLIDES_REWRITE_TEXT)
        }
      }));else if (r === qy.CANCELLED) l(VisualBellActions.dequeue({
        matchType: K
      }));else if (r === qy.DONE) l(VisualBellActions.enqueue({
        icon: VisualBellIcon.CHECK,
        message: getI18nString("slides.properties_panel.rewrite_text.action_done"),
        type: K,
        timeoutOverride: 8e3,
        button: {
          text: getI18nString("slides.properties_panel.rewrite_text.action_rewrite_again"),
          action: () => e()
        },
        onDismiss: () => {}
      }));else if (r === qy.ERROR) {
        let r = t.error;
        let n = function (e) {
          if (e instanceof n4) return getI18nString("slides.properties_panel.rewrite_text.error.no_text_characters_found");
          if (!(e instanceof CortexError || e instanceof CortexErrorV2)) return getI18nString("slides.properties_panel.rewrite_text.error.default");
          let t = {
            offline: getI18nString("slides.properties_panel.rewrite_text.error.connection"),
            meter_exceeded: getI18nString("slides.properties_panel.rewrite_text.error.rate_limit"),
            rate_limit_exceeded: getI18nString("slides.properties_panel.rewrite_text.error.rate_limit"),
            content_length_limit_exceeded: getI18nString("slides.properties_panel.rewrite_text.error.token_limit"),
            text_tool_no_text: getI18nString("slides.properties_panel.rewrite_text.error.empty_text"),
            unsafe_or_harmful_content: getI18nString("slides.properties_panel.rewrite_text.error.inappropriate_input"),
            service_issue: getI18nString("slides.properties_panel.rewrite_text.error.openai_down"),
            ai_opt_out_error: getI18nString("slides.properties_panel.rewrite_text.error.opt_out"),
            unauthorized: getI18nString("slides.properties_panel.rewrite_text.error.default"),
            generic: getI18nString("slides.properties_panel.rewrite_text.error.default"),
            not_implemented: getI18nString("ai.error.not_implemented")
          };
          let r = "generic";
          if (e instanceof CortexErrorV2) ClientContentLengthLimitExceededError.isInstance(e) || ProviderContentLengthLimitExceededError.isInstance(e) ? r = "content_length_limit_exceeded" : MeterExceededError.isInstance(e) ? r = "meter_exceeded" : ProviderRateLimitExceededError.isInstance(e) || ProviderOverloadedError.isInstance(e) || CortexRateLimitExceededError.isInstance(e) ? r = "rate_limit_exceeded" : ClientNoTextSelectedError.isInstance(e) ? r = "text_tool_no_text" : ProviderServiceIssueError.isInstance(e) || ProviderServiceBusyError.isInstance(e) ? r = "service_issue" : OfflineError.isInstance(e) ? r = "offline" : UnsafeOrHarmfulPromptError.isInstance(e) || ProviderUnsafeOrHarmfulContentError.isInstance(e) ? r = "unsafe_or_harmful_content" : UnauthorizedError.isInstance(e) ? r = "unauthorized" : NotImplementedError.isInstance(e) ? r = "not_implemented" : e?.statusCode === 404 ? r = "service_issue" : e?.statusCode === 429 || e?.statusCode === 529 ? r = "rate_limit_exceeded" : e?.statusCode === 403 && (r = "ai_opt_out_error");else if (e instanceof CortexError) switch (e.type) {
            case "content_length_limit_exceeded":
            case "meter_exceeded":
            case "rate_limit_exceeded":
            case "text_tool_no_text":
            case "service_issue":
            case "offline":
            case "unsafe_or_harmful_content":
            case "ai_opt_out_error":
            case "unauthorized":
              r = e.type;
              break;
            case "generic":
              switch (e.data?.status) {
                case 404:
                  r = "service_issue";
                  break;
                case 429:
                  r = "rate_limit_exceeded";
                  break;
                case 403:
                  r = "ai_opt_out_error";
              }
          }
          return t[r] || getI18nString("slides.properties_panel.rewrite_text.error.default");
        }(r);
        let i = function (e) {
          switch (e.type) {
            case "text_tool_no_text":
            case "unsafe_or_harmful_content":
            case "content_length_limit_exceeded":
            case "no_text_characters_found":
              return !1;
            default:
              return !0;
          }
        }(r);
        l(VisualBellActions.enqueue({
          icon: VisualBellIcon.CLOSE_FILLED,
          message: n,
          type: K,
          button: i ? {
            text: getI18nString("slides.properties_panel.rewrite_text.action_rewrite_again"),
            action: () => e()
          } : void 0,
          onDismiss: () => {}
        }));
      }
    }
  }, [l, r, o, e, t]);
}
export function $$ee11(e, t) {
  let r = $(useSceneGraphSelectionKeys().join(","));
  let a = $(useSelector(e => e.mirror.appModel.activeUserAction === UserActionState.SELECTING_TEXT));
  let s = r || a;
  let o = $(useSelector(() => nl()?.characters));
  let l = e === qy.RUNNING;
  let c = useLatestRef(l) && !l;
  let u = l || c;
  useEffect(() => {
    if (!getFeatureFlags().slides_tone_dial_undo) {
      if (s) {
        t();
        return;
      }
      o && !u && t();
    }
  }, [t, s, o, u]);
}
export function $$et10(e, t) {
  let r = useLatestRef(e);
  let i = r && !m()(r, e);
  let a = m()(e, [0, 0]);
  let s = i && a;
  useEffect(() => {
    getFeatureFlags().slides_tone_dial_undo && s && t();
  }, [t, s]);
}
export function $$er15(e) {
  let {
    Sprig
  } = useSprigWithSampling();
  let r = useLatestRef(e);
  useEffect(() => {
    e === qy.DONE && r === qy.RUNNING && Sprig("track", "slides_rewrite_text");
  }, [Sprig, e, r]);
}
export function $$en7(e, t) {
  if (1 !== e.size) {
    for (let {
      nodeId,
      nodeText
    } of e.values()) {
      let e = getSingletonSceneGraph().get(nodeId);
      e?.isAlive && permissionScopeHandler.ai(o2, () => {
        e.characters = nodeText;
        t(e);
      });
    }
    return;
  }
  let [r] = e.values();
  let n = fN();
  if (!n || !r || !n.node.isAlive) return;
  let i = n.node;
  let a = n.selectionRange?.start ?? 0;
  let s = n.selectionRange?.end ?? i.characters.length;
  let o = r.effectiveText;
  permissionScopeHandler.ai(o2, () => {
    i.spliceCharacters(a, s, o, "BEFORE");
    t(i);
  });
  let l = getSingletonSceneGraph().getCurrentPage();
  r.selectionRange ? l?.setSelectedTextRange(i.guid, a, a + o.length) : y_(i.guid);
}
export function $$ei16(e) {
  let [t, r] = useState(!1);
  let {
    tonePosition,
    setTonePosition,
    setPositionAndRun
  } = useContext(_$$u);
  let o = useCallback(e => {
    r(!0);
    e.stopPropagation();
  }, []);
  let l = useCallback(() => {
    t && (r(!1), setPositionAndRun(tonePosition, {
      source: "dial_drag"
    }));
  }, [t, setPositionAndRun, tonePosition]);
  let d = useCallback(r => {
    if (!t || !e.current) return;
    let {
      clientX,
      clientY
    } = r;
    setTonePosition($$ea5(clientX, clientY, e.current.getBoundingClientRect()));
  }, [e, t, setTonePosition]);
  useEffect(() => (document.addEventListener("mouseup", l), document.addEventListener("mousemove", d), () => {
    document.removeEventListener("mouseup", l);
    document.removeEventListener("mousemove", d);
  }), [d, l]);
  return {
    onMouseDown: o,
    isDragging: t
  };
}
export function $$ea5(e, t, r) {
  return [(e - r.left) / r.width, (r.bottom - t) / r.height].map(e => Math.max(.045, Math.min(.955, e))).map(e => (e - .5) * 2).map(es);
}
function es(e) {
  return Math.round(100 * e) / 100;
}
export function $$eo8([e, t]) {
  return [es(e), es(t)];
}
export function $$el3([e, t]) {
  let r = [];
  let n = e => Math.abs(e);
  e < -$$W0 ? r.push({
    tone: ToneType.CONCISE,
    weight: n(e)
  }) : e > $$W0 && r.push({
    tone: ToneType.EXPANDED,
    weight: n(e)
  });
  t < -$$W0 ? r.push({
    tone: ToneType.CASUAL,
    weight: n(t)
  }) : t > $$W0 && r.push({
    tone: ToneType.PROFESSIONAL,
    weight: n(t)
  });
  return r;
}
export function $$ed2(e) {
  return [(() => {
    let t = e.find(({
      tone: e
    }) => e === ToneType.EXPANDED)?.weight;
    if (t) return t;
    let r = e.find(({
      tone: e
    }) => e === ToneType.CONCISE)?.weight;
    if (r) return -r;
  })() ?? 0, (() => {
    let t = e.find(({
      tone: e
    }) => e === ToneType.PROFESSIONAL)?.weight;
    if (t) return t;
    let r = e.find(({
      tone: e
    }) => e === ToneType.CASUAL)?.weight;
    if (r) return -r;
  })() ?? 0];
}
export function $$ec17() {
  let [e, t] = useState(() => [0, 0]);
  let r = useStrictDeepEqualSceneValue(e => {
    let t = e.getCurrentPage()?.tonePosition;
    return t ? [es(t.x), es(t.y)] : [0, 0];
  });
  let i = useCallback(e => {
    getSingletonSceneGraph().getCurrentPage()?.setTonePosition({
      x: e[0],
      y: e[1]
    });
  }, []);
  return getFeatureFlags().slides_tone_dial_undo ? {
    tonePosition: r,
    setTonePosition: i
  } : {
    tonePosition: e,
    setTonePosition: t
  };
}
export const fm = $$W0;
export const o$ = $$q1;
export const JU = $$ed2;
export const p$ = $$el3;
export const Tm = $$Y4;
export const fp = $$ea5;
export const mD = $$X6;
export const Cw = $$en7;
export const cx = $$eo8;
export const Os = $$Q9;
export const xf = $$et10;
export const PF = $$ee11;
export const Ne = $$$12;
export const h$ = $$J13;
export const cR = $$Z14;
export const Jp = $$er15;
export const uG = $$ei16;
export const Ib = $$ec17;