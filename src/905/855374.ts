import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useMemo, useEffect, forwardRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { isNotNullish, isNullish } from "../figma_app/95419";
import { getFeatureFlags } from "../905/601108";
import { trackFileEventWithStore } from "../figma_app/901889";
import { h4, Nz, hh } from "../905/417232";
import { useLatestRef } from "../figma_app/922077";
import { generateRecordingKey, useHandleMouseEvent, useHandleGenericEvent, useHandleInputEvent } from "../figma_app/878298";
import { k as _$$k2 } from "../905/582200";
import { UK } from "../figma_app/740163";
import { wX, lC, yp, G6, EP, pN, lO, L5, rN, U6, x9, mm } from "../figma_app/852050";
import { BK, Um } from "../905/848862";
import { getObservableOrFallback } from "../figma_app/84367";
import { zy } from "../figma_app/915202";
import { isExtension, everyLocalSubscription, isLocalSubscription, isLocalSubscriptionStatus } from "../figma_app/633080";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { P as _$$P } from "../905/201667";
import { throwTypeError } from "../figma_app/465776";
import { t } from "../905/150656";
import { bL, _L } from "../905/911410";
import { DialogContents, DialogHeader, DialogHiddenTitle, DialogBody } from "../figma_app/272243";
import { Checkbox } from "../905/274480";
import { Label, HiddenLabel } from "../905/270045";
import { PlatformType, VariableResolvedDataType, VariableDataType, VariablesBindings, PropertyScope, ColumnInteraction } from "../figma_app/763686";
import k from "classnames";
import { parsePxNumber, parsePxInt } from "../figma_app/783094";
import { logError } from "../905/714362";
import { Point } from "../905/736624";
import { P as _$$P2 } from "../905/347284";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { JU, ks } from "../figma_app/626177";
import { d as _$$d } from "../905/976845";
import { IconButton } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { O as _$$O } from "../905/487602";
import { KindEnum } from "../905/129884";
import { c$, wv, l4, gw } from "../figma_app/236327";
import { Cf } from "../905/504727";
import { tq as _$$tq, lo } from "../905/386270";
import { $ as _$$$, b as _$$b } from "../905/483620";
import { $8, Mm, my } from "../figma_app/481279";
import { z as _$$z } from "../905/550439";
import { m as _$$m } from "../905/886380";
import { U as _$$U2 } from "../905/708285";
import { KN } from "../figma_app/741785";
import { cC } from "../905/923433";
import { Q8 } from "../figma_app/960196";
import { N3, tU as _$$tU, OI, hO } from "../905/616572";
import { $d, zG, BT } from "../905/901822";
import { P as _$$P3 } from "../905/884252";
import { uC, z7, gX, ic as _$$ic, oR, Z_, r$, _h, q7 } from "../905/831801";
import { permissionScopeHandler } from "../905/189185";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { useSessionStorageSync, getSessionStorage, useLocalStorageSync } from "../905/657224";
import { XE } from "../figma_app/91703";
import { Yf } from "../figma_app/933328";
import { popModalStack, showModalHandler } from "../905/156213";
import { B as _$$B } from "../905/330741";
import { fullscreenValue } from "../figma_app/455680";
import { normalizePath } from "../905/309735";
import { g as _$$g, s as _$$s } from "../905/578436";
import { RL, Ot } from "../905/850476";
import { Ez } from "../figma_app/766708";
import { rN as _$$rN, Pf, Lo as _$$Lo, cv, om, Qo, B9, GC, ky, ZR, nm, x9 as _$$x, yh, Pw, hF, Wx, Od, F$, US, qQ } from "../905/782020";
import { wp, jv } from "../905/886545";
import { createPortal } from "react-dom";
import { trackEventAnalytics } from "../905/449184";
import { VZ } from "../905/959568";
import { Gx } from "../figma_app/260445";
import { He, ED, kL, ok, qr } from "../905/24780";
import { fr } from "../905/530789";
import { ButtonPrimitive } from "../905/632989";
import { k as _$$k3 } from "../905/44647";
import { O as _$$O2 } from "../905/969533";
import { toggleElement } from "../figma_app/656233";
import { range, clamp } from "../figma_app/492908";
import e4 from "../vendor/626715";
import { isCommandEvent } from "../905/63728";
import { RecordableDiv } from "../905/511649";
import { G as _$$G } from "../905/750789";
import { i as _$$i } from "../905/186077";
import { dG, wo } from "../figma_app/753501";
import { useCurrentFileKey } from "../figma_app/516028";
import { J as _$$J2 } from "../905/125993";
import { debugState } from "../905/407919";
import { SvgComponent } from "../905/714743";
import { trackDefinedFileEvent } from "../figma_app/314264";
import { l6, c$ as _$$c$ } from "../905/794875";
import { setupToggleButton } from "../905/167712";
import { C as _$$C } from "../905/771975";
import { O as _$$O3 } from "../905/666679";
import { S as _$$S2 } from "../905/711470";
import { C as _$$C2 } from "../figma_app/974443";
import { UO } from "../905/261982";
import { o3, nt } from "../905/226610";
import { q as _$$q } from "../figma_app/905311";
import { dD, IV } from "../figma_app/941824";
import { Y9 as _$$Y2, Ad } from "../figma_app/811257";
import { Ao } from "../905/748636";
import { Flg } from "../figma_app/27776";
import { Q as _$$Q } from "../905/717951";
import { A as _$$A } from "../svg/182908";
import { E as _$$E2 } from "../905/53857";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuItemComp, MenuSeparator, MenuTitleComp, MenuHiddenTitleComp, MenuItemLead, MenuGroupComp } from "../figma_app/860955";
import { Ay } from "@stylexjs/stylex";
import { P as _$$P4 } from "../905/537307";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { Ay as _$$Ay } from "../figma_app/272902";
import { m as _$$m2 } from "../905/871166";
import { i as _$$i2 } from "../905/415810";
import { v6, Ar, N0, GC as _$$GC, uM, Mz, $4, SS } from "../905/984793";
import { X as _$$X } from "../905/456000";
import { l2, Ks, U3, SG, iw as _$$iw, NE, gZ, Cg } from "../905/101482";
import { Te } from "../vendor/813803";
import { VisualBellActions } from "../905/302958";
import { O4, Hf, zg, Vm, Kh, OM, Hk } from "../905/471795";
import { j$ } from "../figma_app/238665";
import { O as _$$O4 } from "../905/301080";
import { p as _$$p } from "../905/673591";
import { al } from "../905/176258";
import { Button } from "../905/521428";
import { x as _$$x2 } from "../905/587214";
import { H as _$$H } from "../905/404052";
import { e as _$$e2 } from "../905/428849";
import { H_, CU, z6 } from "../905/963340";
import { S as _$$S3 } from "../905/989967";
import { k as _$$k4 } from "../905/727631";
import { a as _$$a } from "../905/5627";
import { noop } from "../905/419236";
import { h as _$$h2 } from "../905/994594";
import { w as _$$w } from "../905/955293";
import { g as _$$g2 } from "../905/687265";
import { LazyInputForwardRef } from "../905/408237";
import { ne } from "../figma_app/563413";
import { deepEqual } from "../905/382883";
import { ox, bL as _$$bL2 } from "../905/163832";
import { useDebounce } from 'use-debounce';
import { k9 } from "../905/182598";
import { l as _$$l } from "../905/745972";
import { c as _$$c } from "../905/210851";
import { n as _$$n } from "../905/971006";
import { vL, pS } from "../905/826900";
var R = k;
function K({
  targetRect: e,
  codeSyntaxMap: t,
  recordingKey: i,
  onClick: r
}) {
  return jsx(Cf, {
    targetRect: e,
    hidePointWhenContentOffScreen: !0,
    disableDropdownScrollContainer: !0,
    children: _$$tq.map(e => function ({
      platform: e,
      onClick: r
    }) {
      return jsx(c$, {
        disabled: t.hasOwnProperty(e),
        recordingKey: generateRecordingKey(i, PlatformType[e].toLowerCase()),
        onClick: () => r(e),
        children: lo(e)
      }, e);
    }({
      platform: e,
      onClick: r
    }))
  });
}
function Y({
  platform: e,
  variableName: t,
  resolvedType: i
}) {
  let r = function ({
    platform: e,
    variableName: t,
    resolvedType: i
  }) {
    switch (e) {
      case PlatformType.ANDROID:
        return function ({
          variableName: e,
          resolvedType: t
        }) {
          switch (t) {
            case VariableResolvedDataType.FLOAT:
            case VariableResolvedDataType.BOOLEAN:
              return jsxs(Fragment, {
                children: [".property(", jsx(q, {
                  children: e
                }), ")"]
              });
            case VariableResolvedDataType.COLOR:
              return jsxs(Fragment, {
                children: [".property(color = ", jsx(q, {
                  children: e
                }), ")"]
              });
            case VariableResolvedDataType.STRING:
              return jsxs(Fragment, {
                children: ["Text(text = ", jsx(q, {
                  children: e
                }), ")"]
              });
            default:
              return null;
          }
        }({
          variableName: t,
          resolvedType: i
        });
      case PlatformType.WEB:
        return function ({
          variableName: e,
          resolvedType: t
        }) {
          switch (t) {
            case VariableResolvedDataType.FLOAT:
            case VariableResolvedDataType.BOOLEAN:
            case VariableResolvedDataType.COLOR:
              return jsxs(Fragment, {
                children: ["property: ", jsx(q, {
                  children: e
                }), ";"]
              });
            case VariableResolvedDataType.STRING:
              return jsxs(Fragment, {
                children: ["content: ", jsx(q, {
                  children: e
                }), ";"]
              });
            default:
              return null;
          }
        }({
          variableName: t,
          resolvedType: i
        });
      case PlatformType.iOS:
        return function ({
          variableName: e,
          resolvedType: t
        }) {
          switch (t) {
            case VariableResolvedDataType.FLOAT:
            case VariableResolvedDataType.BOOLEAN:
            case VariableResolvedDataType.COLOR:
              return jsxs(Fragment, {
                children: [".property(", jsx(q, {
                  children: e
                }), ")"]
              });
            case VariableResolvedDataType.STRING:
              return jsxs(Fragment, {
                children: ["Text(", jsx(q, {
                  children: e
                }), ")"]
              });
            default:
              return null;
          }
        }({
          variableName: t,
          resolvedType: i
        });
    }
  }({
    platform: e,
    variableName: t,
    resolvedType: i
  });
  return r ? jsx("div", {
    className: "code_syntax_preview--code--5ttYn code_panels_shared--code--VPQ05",
    children: r
  }) : null;
}
function q({
  children: e
}) {
  return jsx("div", {
    className: "code_syntax_preview--codeToken--lkzrb",
    children: e
  });
}
let $ = "280px";
let Z = "edit_variable_modal--section--Oxbp-";
let X = "edit_variable_modal--label--Z8v7Z ellipsis--ellipsis--Tjyfa";
let Q = "edit_variable_modal--value--JL-6X";
function J({
  codeSyntaxMap: e,
  recentlyCreatedPlatform: t,
  initialValue: i,
  resolvedType: a,
  isCreateTokenDropdownShown: s,
  recordingKey: o,
  onCreateTokenIconClick: l,
  onAddLocalToken: d,
  onUpdateToken: c,
  onRemoveToken: u
}) {
  let m = useRef(null);
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: R()({
        "code_syntax_entries_view--codeSyntaxRow--Cg4-5": !0,
        "code_syntax_entries_view--codeSyntaxRowWithIconButton--8F-x2": !0,
        "code_syntax_entries_view--codeSyntaxRowWithSubpanel--0VhLy": Object.keys(e).length > 0
      }),
      children: [jsx(JU, {
        className: X,
        children: renderI18nText("variables.edit_modal.input_label.token_name")
      }), l && jsx(_$$d, {
        "aria-label": getI18nString("variables.edit_modal.add_code_syntax"),
        ref: m,
        "aria-expanded": s,
        disabled: Object.keys(e).length >= _$$tq.length,
        onClick: l,
        recordingKey: generateRecordingKey(o, "createToken"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("variables.edit_modal.add_code_syntax")
        },
        children: jsx(_$$e, {})
      })]
    }), _$$tq.map(r => function ({
      platform: r
    }) {
      return e[r] ? jsx(ee, {
        platform: r,
        initialValue: e[r] ?? i,
        resolvedType: a,
        autoFocus: t === r,
        recordingKey: generateRecordingKey(o, PlatformType[r].toLowerCase()),
        onUpdateToken: c,
        onRemoveTokenClick: u ? () => u(r) : null
      }, r) : null;
    }({
      platform: r
    })), s && m.current && d && jsx(K, {
      targetRect: m.current.getBoundingClientRect(),
      codeSyntaxMap: e,
      recordingKey: generateRecordingKey(o, "createTokenDropdown"),
      onClick: d
    })]
  });
}
function ee({
  platform: e,
  initialValue: t,
  resolvedType: i,
  autoFocus: a,
  recordingKey: s,
  onUpdateToken: o,
  onRemoveTokenClick: l
}) {
  let d = useRef(null);
  let c = `code-syntax-input-row-${e}`;
  let [u, m] = useState(t);
  let h = useCallback(e => {
    m(e.currentTarget.value);
  }, []);
  let g = useMemo(() => o ? () => {
    if (0 === u.length) {
      m(t);
      return;
    }
    o({
      platform: e,
      value: u
    });
  } : null, [o, u, m, e, t]);
  let f = useRef(!1);
  let _ = useMemo(() => l ? () => {
    f.current = !0;
    l(e);
  } : null, [l, e]);
  let A = useRef();
  A.current = o ? () => {
    u.length > 0 && !f.current && o({
      platform: e,
      value: u
    });
  } : void 0;
  useEffect(() => () => {
    A.current?.();
  }, []);
  let y = useCallback(e => {
    e.preventDefault();
    g && (g(), d.current?.blur());
  }, [g]);
  return jsxs("div", {
    className: "code_syntax_entries_view--inputAndPreview--O-qdO",
    children: [jsxs("form", {
      className: "code_syntax_entries_view--inputRow--xh5D1 edit_variable_modal--valueRow--KYv7X",
      onSubmit: y,
      children: [jsx(JU, {
        className: X,
        htmlFor: c,
        children: lo(e)
      }), jsxs("div", {
        className: "code_syntax_entries_view--inputRowRightChildren--rhrU-",
        children: [jsx(ks, {
          innerRef: d,
          id: c,
          className: "code_syntax_entries_view--input--R9ZSR raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u",
          value: u,
          disabled: !g,
          autoFocus: a,
          recordingKey: generateRecordingKey(s, "input"),
          onChange: h,
          onBlur: () => {
            g?.();
          }
        }), _ && jsx(IconButton, {
          type: "button",
          "aria-label": getI18nString("variables.edit_modal.remove_code_syntax"),
          recordingKey: generateRecordingKey(s, "removeButton"),
          onClick: _,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("variables.edit_modal.remove_code_syntax")
          },
          children: jsx(_$$O, {})
        })]
      })]
    }), jsx("div", {
      className: "code_syntax_entries_view--codePreview--TAxX5",
      children: jsx(Y, {
        platform: e,
        variableName: u,
        resolvedType: i
      })
    })]
  });
}
function et({
  codeSyntaxMap: e,
  variable: t,
  initialValue: i,
  resolvedType: a,
  recordingKey: s,
  updateCodeSyntaxToken: o,
  removeCodeSyntaxToken: l
}) {
  let {
    showing,
    hide,
    toggle
  } = BK("code-syntax-entries-view-create-token");
  let [p, m] = useState(new Set());
  let [h, g] = useState(null);
  let _ = useMemo(() => {
    let t = {
      ...e
    };
    for (let e of p) t[e] = t[e] ?? i;
    return t;
  }, [p, e, i]);
  let A = useCallback(e => {
    m(t => new Set([...t, e]));
    g(e);
    hide();
  }, [hide]);
  let y = useMemo(() => o ? ({
    platform: e,
    value: i
  }) => {
    o(t, e, i) && requestAnimationFrame(() => {
      m(t => {
        let i = new Set([...t]);
        i.$$delete(e);
        return i;
      });
    });
  } : null, [t, o]);
  let b = !!y;
  let v = useMemo(() => l ? e => {
    l?.(t, e) && m(t => {
      let i = new Set([...t]);
      i.$$delete(e);
      return i;
    });
  } : null, [t, l]);
  return jsx(J, {
    codeSyntaxMap: _,
    initialValue: i,
    isCreateTokenDropdownShown: showing,
    onAddLocalToken: b ? A : null,
    onCreateTokenIconClick: b ? toggle : null,
    onRemoveToken: v,
    onUpdateToken: y,
    recentlyCreatedPlatform: h,
    recordingKey: s,
    resolvedType: a
  }, t.node_id);
}
function ed(e) {
  let t;
  let {
    variable,
    modeID,
    onContextMenu
  } = e;
  let o = generateRecordingKey(e.recordingKey, `modeId=${e.modeID}`);
  let d = useHandleMouseEvent(o, "contextmenu", e => {
    onContextMenu(variable.node_id, modeID, e, A);
    e.stopPropagation();
  });
  let c = e.variable.modeValues[e.modeID];
  let u = useRef(null);
  let m = getFeatureFlags().ds_reactive_variables && (variable.modeValues[modeID].type === VariableDataType.EXPRESSION || variable.modeValues[modeID].type === VariableDataType.ALIAS) && variable.resolvedType !== VariableResolvedDataType.COLOR;
  let [h, g] = useState(!1);
  let [f, _] = useState(!1);
  let A = () => {
    g(!0);
    _(!0);
  };
  let y = c && [VariableDataType.ALIAS, VariableDataType.EXPRESSION, VariableDataType.COLOR].includes(c.type);
  let b = c && [VariableDataType.ALIAS, VariableDataType.EXPRESSION].includes(c.type) && !!e.detachAlias;
  t = getFeatureFlags().ds_reactive_variables && (m || f) ? jsx(KN, {
    resolvedType: variable.resolvedType,
    targetVariableData: variable.modeValues[modeID],
    autoOpenExpressionBuilder: h,
    setAutoOpenExpressionBuilder: g,
    setVariableValue: e.onSubmit,
    onClose: () => {
      _(!1);
    },
    recordingKey: e.recordingKey
  }) : jsx(cC, {
    clearVariableOverride: e.clearVariableOverride,
    containerRef: u,
    contextType: e.type,
    isInaccessible: e.isInaccessible || !e.onSubmit,
    modeID: e.modeID,
    onCreateExpression: getFeatureFlags().ds_reactive_variables ? A : void 0,
    onSubmit: e.onSubmit ?? (() => !1),
    recordingKey: o,
    variable: e.variable,
    variableOverride: e.variableOverride,
    variableSetId: e.variableSetId
  });
  return jsxs("div", {
    className: R()({
      "variables_modal_mode_value--variableModeValue--KbcWG": !0,
      "variables_modal_mode_value--variableModeCell--gbd-P variables_modal_mode_value--variableModeValue--KbcWG": e.type !== _$$$.FORM,
      "variables_modal_mode_value--hideBorder--gwF0w": e.hideBorder
    }),
    onContextMenu: d,
    "data-testid": o,
    ref: u,
    children: [t, y && !e.isInaccessible && jsxs("span", {
      className: "variables_modal_mode_value--iconVisibleOnHover--5Plc4",
      children: [e.variableOverride && e.variableOverride.overrideValues?.[modeID] && e.clearVariableOverride && jsx(IconButton, {
        "aria-label": getI18nString("variables.authoring_modal.table.clear_override"),
        actionOnPointerDown: !0,
        onClick: e.clearVariableOverride,
        recordingKey: generateRecordingKey(e.recordingKey, "clearOverrideButton"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("variables.authoring_modal.table.clear_override")
        },
        children: jsx(_$$m, {})
      }), b && jsx(IconButton, {
        "aria-label": getI18nString("variables.authoring_modal.table.detach_alias"),
        actionOnPointerDown: !0,
        onClick: () => {
          e.detachAlias && e.detachAlias(e.variable.node_id, e.modeID, e.variableSetId);
        },
        recordingKey: generateRecordingKey(e.recordingKey, "detachVariableButton"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("variables.authoring_modal.table.detach_alias")
        },
        children: jsx(_$$U2, {})
      })]
    })]
  });
}
let ec = "EditVariableModal";
let eu = registerModal(function (e) {
  let {
    modalID,
    initialPosition,
    variableIDs,
    variableSetId,
    onClose,
    onSubmitRenameVar,
    onSubmitVariableValue,
    setVariableDescription,
    setVariableScope,
    setVariableIsPublishable,
    updateCodeSyntaxToken,
    removeCodeSyntaxToken
  } = e;
  let f = wX(variableIDs).filter(isNotNullish);
  let _ = lC(variableSetId);
  if (!_ || !f) return null;
  let A = isExtension(_);
  return jsx(ep, {
    initialPosition,
    modalID,
    onClose,
    onSubmitRenameVar,
    onSubmitVariableValue,
    recordingKey: e.recordingKey,
    removeCodeSyntaxToken,
    setVariableDescription,
    setVariableIsPublishable,
    setVariableScope,
    updateCodeSyntaxToken,
    variableSetId: _.node_id,
    variableSetModes: A ? void 0 : _?.modes,
    variables: f
  });
}, ec);
function ep(e) {
  let {
    modalID,
    initialPosition,
    variables,
    onClose,
    onSubmitRenameVar,
    onSubmitVariableValue,
    setVariableDescription,
    setVariableIsPublishable,
    setVariableScope,
    variableSetId,
    variableSetModes,
    updateCodeSyntaxToken,
    removeCodeSyntaxToken
  } = e;
  useEffect(() => {
    0 === variables.length && onClose();
  }, [variables, onClose]);
  let [_, A, y] = t.useTabs({
    details: !0,
    scoping: variables.some(e => $8().includes(e.resolvedType))
  }, {
    defaultActive: () => function ({
      numVariables: e
    }) {
      return 1 === e ? "details" : "scoping";
    }({
      numVariables: variables.length
    })
  });
  return 0 === variables.length ? null : jsx(bL, {
    onClose,
    defaultPosition: initialPosition ?? new Point(),
    width: parsePxNumber($),
    recordingKey: e.recordingKey,
    children: jsxs(DialogContents, {
      children: [jsxs(DialogHeader, {
        children: [jsx(DialogHiddenTitle, {
          children: renderI18nText("variables.edit_modal.title")
        }), jsxs(t.TabStrip, {
          manager: y,
          children: [jsx(t.Tab, {
            ..._.details,
            recordingKey: generateRecordingKey(e.recordingKey, "tabs", "details"),
            children: renderI18nText("variables.edit_modal.tabs.details")
          }), jsx(t.Tab, {
            ..._.scoping,
            recordingKey: generateRecordingKey(e.recordingKey, "tabs", "scoping"),
            children: renderI18nText("variables.edit_modal.tabs.scoping")
          })]
        })]
      }), jsx(DialogBody, {
        padding: 0,
        scrolling: "none",
        children: jsx(_$$P2, {
          className: "edit_variable_modal--scrollContents--1vjun",
          enableOverscroll: !0,
          children: jsx(AutoLayout, {
            direction: "vertical",
            spacing: 0,
            horizontalAlignItems: "stretch",
            children: jsxs(Fragment, {
              children: [jsx(t.TabPanel, {
                ...A.details,
                forceMount: !0,
                children: 1 === variables.length ? jsx(em, {
                  hideScopes: !0,
                  onSubmitRenameVar,
                  onSubmitVariableValue,
                  recordingKey: e.recordingKey,
                  removeCodeSyntaxToken,
                  setVariableDescription,
                  setVariableIsPublishable,
                  setVariableScope,
                  updateCodeSyntaxToken,
                  variable: variables[0],
                  variableSetId,
                  variableSetModes: variableSetModes ?? []
                }) : jsx(eh, {
                  variables,
                  hideScopes: !0,
                  setVariableIsPublishable,
                  setVariableScope,
                  recordingKey: e.recordingKey
                })
              }), jsx(t.TabPanel, {
                ...A.scoping,
                forceMount: !0,
                children: jsx(ef, {
                  variables,
                  setVariableScope,
                  recordingKey: generateRecordingKey(e.recordingKey, "scopesPanel")
                })
              })]
            })
          })
        })
      })]
    })
  }, modalID ?? "");
}
function em(e) {
  let {
    variable,
    variableSetId,
    hideScopes,
    onSubmitRenameVar,
    variableSetModes,
    setVariableIsPublishable,
    setVariableDescription,
    setVariableScope,
    updateCodeSyntaxToken,
    removeCodeSyntaxToken
  } = e;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: Z,
      children: [jsxs("div", {
        className: "edit_variable_modal--valueRow--KYv7X",
        children: [jsx(JU, {
          className: X,
          htmlFor: "name",
          children: renderI18nText("variables.edit_modal.input_label.name")
        }), jsx("div", {
          className: Q,
          children: jsx(_$$b, {
            id: "name",
            type: _$$$.FORM,
            disabled: !onSubmitRenameVar,
            onSubmit: e => onSubmitRenameVar?.(variable.node_id, e) ?? !1,
            onFinish: lQ,
            originalValue: variable.name,
            placeholder: getI18nString("variables.edit_modal.input_placeholder.name"),
            recordingKey: generateRecordingKey(e.recordingKey, "nameInput")
          })
        })]
      }), jsxs("div", {
        className: "edit_variable_modal--descriptionRow--90cfo edit_variable_modal--valueRow--KYv7X",
        children: [jsx(JU, {
          className: X,
          htmlFor: "description",
          children: renderI18nText("variables.edit_modal.input_label.description")
        }), jsx("div", {
          className: Q,
          children: jsx(_$$b, {
            canBeEmpty: !0,
            disabled: !setVariableDescription,
            id: "description",
            multiline: !0,
            onFinish: lQ,
            onSubmit: e => setVariableDescription?.(variable, e) ?? !1,
            originalValue: variable.description ?? "",
            placeholder: getI18nString("variables.edit_modal.input_label.description_placeholder"),
            recordingKey: generateRecordingKey(e.recordingKey, "descriptionInput"),
            type: _$$$.FORM
          })
        })]
      })]
    }), variableSetModes.length > 0 && jsx(eg, {
      variable,
      variableSetModes,
      variableSetId,
      onSubmitVariableValue: e.onSubmitVariableValue,
      recordingKey: e.recordingKey
    }), !hideScopes && jsx(ef, {
      variables: [variable],
      setVariableScope,
      recordingKey: generateRecordingKey(e.recordingKey, "scopesPanel")
    }), jsx("div", {
      className: "edit_variable_modal--sectionSmall--DlWKe edit_variable_modal--section--Oxbp-",
      children: jsx(et, {
        variable,
        codeSyntaxMap: variable.codeSyntax ?? {},
        initialValue: variable.name,
        resolvedType: variable.resolvedType,
        recordingKey: generateRecordingKey(e.recordingKey, "codeSyntax"),
        ...(updateCodeSyntaxToken && removeCodeSyntaxToken ? {
          updateCodeSyntaxToken,
          removeCodeSyntaxToken
        } : {
          updateCodeSyntaxToken: null,
          removeCodeSyntaxToken: null
        })
      })
    }), jsx("div", {
      className: Z,
      children: jsx(Checkbox, {
        checked: !variable.isPublishable,
        disabled: !setVariableIsPublishable,
        onChange: () => {
          setVariableIsPublishable?.([variable], !variable.isPublishable);
        },
        recordingKey: generateRecordingKey(e.recordingKey, "hideFromPublishing.checkBox"),
        label: jsx(Label, {
          children: getI18nString("variables.edit_modal.hide_from_publishing")
        })
      })
    })]
  });
}
function eh({
  variables: e,
  hideScopes: t,
  setVariableIsPublishable: i,
  setVariableScope: a,
  recordingKey: s
}) {
  let o = useMemo(() => function (e) {
    let t = e.filter(e => !0 === e.isPublishable).length;
    let i = e.length - t;
    return t === e.length || i !== e.length && null;
  }(e), [e]);
  return jsxs(Fragment, {
    children: [!t && jsx(ef, {
      variables: e,
      setVariableScope: a,
      recordingKey: generateRecordingKey(s, "scopesPanel")
    }), jsx("div", {
      className: Z,
      children: jsx(Checkbox, {
        disabled: !i,
        checked: !o,
        mixed: null === o,
        onChange: () => i?.(e, !(o ?? !0)),
        recordingKey: generateRecordingKey(s, "hideFromPublishing.checkBox"),
        label: jsx(Label, {
          children: getI18nString("variables.edit_modal.hide_from_publishing")
        })
      })
    })]
  });
}
function eg(e) {
  let {
    variableSetId,
    variable,
    variableSetModes
  } = e;
  let {
    modeLimit
  } = _$$z("authoring");
  return jsxs("div", {
    className: Z,
    children: [jsx("div", {
      className: "edit_variable_modal--sectionTitle--AymF1",
      children: renderI18nText("variables.edit_modal.mode_section_header", {
        count: variableSetModes.length
      })
    }), variableSetModes.map((r, o) => {
      let l = variable.modeValues[r.id];
      return jsxs("div", {
        className: "edit_variable_modal--modeRow--fGrM3 edit_variable_modal--valueRow--KYv7X",
        children: [jsxs(JU, {
          className: X,
          children: [" ", r.name, " "]
        }), jsx("div", {
          className: R()({
            [Q]: !0,
            "edit_variable_modal--modeColorAliasValue--50rTC": l?.type === VariableDataType.ALIAS && l?.resolvedType === VariableResolvedDataType.COLOR
          }),
          children: jsx(ed, {
            type: _$$$.FORM,
            recordingKey: generateRecordingKey(e.recordingKey, "modeValueInput"),
            variable,
            variableSetId,
            modeID: r.id,
            isInaccessible: !e.onSubmitVariableValue || o >= modeLimit,
            onContextMenu: lQ,
            onSubmit: (t, i) => e.onSubmitVariableValue?.(e.variable.node_id, r.id, t, i) ?? !1
          }, r.id + "value")
        })]
      }, r.id);
    })]
  });
}
function ef({
  setVariableScope: e,
  recordingKey: t,
  variables: i
}) {
  let a = $8();
  let s = useMemo(() => {
    let e = new Map();
    for (let t of a) e.set(t, []);
    for (let t of i) e.has(t.resolvedType) && e.get(t.resolvedType).push(t);
    return e;
  }, [i, a]);
  let o = [];
  for (let i of a) {
    let r = s.get(i);
    r.length > 0 && o.push(jsx(e_, {
      variables: r,
      variableType: i,
      setVariableScope: e,
      recordingKey: generateRecordingKey(t, VariableResolvedDataType[i])
    }, i));
  }
  return jsx(Fragment, {
    children: o
  });
}
function e_(e) {
  let {
    variables,
    variableType,
    recordingKey,
    setVariableScope
  } = e;
  let o = useMemo(() => {
    let e = variables.map(e => e.node_id);
    return VariablesBindings?.getVariableScopes(e) ?? {};
  }, [variables]);
  let l = useMemo(() => Mm(variableType), [variableType]);
  return jsxs("div", {
    className: R()(Z, "edit_variable_modal--scopesSection--Wzp-d"),
    children: [jsx(eA, {
      variableType
    }), l.map(e => {
      switch (e.type) {
        case my.LABEL:
          return function ({
            key: e,
            label: t
          }) {
            return jsx("div", {
              className: "edit_variable_modal--labelRow--l-Swy edit_variable_modal--_listRow--oonbp",
              children: t
            }, e);
          }({
            key: e.key,
            label: e.label
          });
        case my.SCOPE:
          let i = e.scope;
          let r = o[PropertyScope[i]];
          return function ({
            scope: e,
            name: i,
            subLabel: r,
            iconElement: o,
            indented: l,
            scopeSetting: d
          }) {
            let c = "true" === d;
            let u = "mixed" === d;
            return jsx("div", {
              children: jsxs("div", {
                className: R()({
                  "edit_variable_modal--scopeRow--xy-lv edit_variable_modal--_listRow--oonbp": !0,
                  "edit_variable_modal--scopeRowLabelOnly--sOZpl": !o,
                  "edit_variable_modal--scopeRowIndented--OFqqa": l
                }),
                children: [jsx(Checkbox, {
                  checked: c,
                  mixed: u,
                  disabled: !setVariableScope,
                  onChange: () => {
                    setVariableScope?.(variables, e, u || !c);
                  },
                  recordingKey: generateRecordingKey(recordingKey, PropertyScope[e]),
                  label: jsx(HiddenLabel, {
                    children: i
                  })
                }), o ? jsxs("div", {
                  className: "edit_variable_modal--scopeIcon--Wpijc",
                  children: [o, " "]
                }) : null, jsxs("div", {
                  children: [i, r ? jsxs("span", {
                    className: "edit_variable_modal--scopeSubLabel--Xa1rl",
                    children: [" ", r]
                  }) : null]
                })]
              })
            }, e);
          }({
            scope: i,
            name: e.name,
            subLabel: e.subLabel,
            iconElement: e.iconElement,
            indented: e.indented,
            scopeSetting: r
          });
      }
    })]
  });
}
function eA(e) {
  let t;
  let {
    variableType
  } = e;
  switch (variableType) {
    case VariableResolvedDataType.COLOR:
      t = renderI18nText("variables.scopes.color_scoping_header");
      break;
    case VariableResolvedDataType.FLOAT:
      t = renderI18nText("variables.scopes.number_scoping_header");
      break;
    case VariableResolvedDataType.STRING:
      t = renderI18nText("variables.scopes.string_scoping_header");
      break;
    case VariableResolvedDataType.BOOLEAN:
    case VariableResolvedDataType.MAP:
    case VariableResolvedDataType.SYMBOL_ID:
    case VariableResolvedDataType.FONT_STYLE:
    case VariableResolvedDataType.TEXT_DATA:
    case VariableResolvedDataType.IMAGE:
    case VariableResolvedDataType.LINK:
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      logError("variables", "Unsupported variable type");
      return null;
    default:
      throwTypeError(variableType);
  }
  return jsxs("div", {
    className: "edit_variable_modal--sectionTitleWithInfoIcon--dUJpP edit_variable_modal--sectionTitle--AymF1",
    children: [t, jsx("div", {
      className: "edit_variable_modal--spacer--vRgT2"
    })]
  });
}
function eM(e) {
  return [...e].sort((e, t) => -Ez(e.sortPosition, t.sortPosition));
}
var eU = (e => (e.READ_ONLY = "READ_ONLY", e.WRITEABLE = "WRITEABLE", e))(eU || {});
let eB = {
  allowedInReadOnly: !1,
  allowedInWriteableRootSets: !0,
  allowedInWriteableSetExtensions: !0
};
let eV = {
  allowedInReadOnly: !1,
  allowedInWriteableRootSets: !0,
  allowedInWriteableSetExtensions: !1
};
let eG = {
  allowedInReadOnly: !1,
  allowedInWriteableRootSets: !1,
  allowedInWriteableSetExtensions: !0
};
function ez(e, t, i, n) {
  if ("root" === n.variableSetType && !n.readOnly && !N3(t.variableList)) return null;
  let r = e(t);
  if (n.readOnly) return i.allowedInReadOnly ? r : null;
  switch (n.variableSetType) {
    case "extension":
      return i.allowedInWriteableSetExtensions ? r : null;
    case "root":
      return i.allowedInWriteableRootSets ? r : null;
  }
}
let eH = [];
function eZ(e) {
  let t = useDispatch();
  let i = e.contextMenuData.selectedVariableRows.map(e => e.variable);
  let s = _$$rN(useCallback(() => {
    if (!N3(i)) {
      e.hideContextMenu();
      return;
    }
    let t = "New group/";
    if (e.hasGroups) {
      let n = Pf(i[0].name);
      t = _$$Lo(e.allVariables, n + "New group/");
    }
    e.onCreateGroup?.(t, i);
  }, [e, i]), !!e.onCreateGroup && everyLocalSubscription(i));
  let o = _$$rN(useCallback(t => {
    permissionScopeHandler.user("delete-variables", () => {
      t.forEach(e => {
        VariablesBindings.deleteVariable(e.node_id);
      });
      e.onDeleteVariables?.(t);
    });
    fullscreenValue.triggerAction("commit");
  }, [e]), !!e.onDeleteVariables);
  let l = useRef(e.contextMenuData.cellElement);
  let d = _$$rN(useCallback(t => {
    trackEventAnalytics(e.contextMenuData.selectedVariableRows.length > 1 ? "multi_edit_variable_modal_opened" : "edit_variable_modal_opened");
    t.stopPropagation();
    let n = VZ(l.current, parsePxNumber($));
    e.toggleEditVariableModal(i.map(e => e.node_id), new Point(n.x, n.y));
    e.hideContextMenu();
  }, [e, i]), !!e.toggleEditVariableModal);
  let c = _$$rN(useCallback(() => {
    e.onDuplicateVariables?.();
    e.hideContextMenu();
  }, [e]), !!e.onDuplicateVariables);
  let u = _$$rN(useCallback(() => {
    e.onCopyVariables?.();
    e.hideContextMenu();
  }, [e]), !!e.onCopyVariables);
  let m = _$$rN(useCallback(() => {
    e.onPasteVariables?.();
    e.hideContextMenu();
  }, [e]), !!e.onPasteVariables);
  let h = _$$rN(useCallback(() => {
    if (!N3(i)) {
      e.hideContextMenu();
      return;
    }
    o?.(i);
    e.hideContextMenu();
  }, [o, e, i]), !!o && everyLocalSubscription(i));
  let g = _$$rN(useCallback(() => {
    let t = [];
    if (e.contextMenuData.groupNames.map(t => cv(e.allVariables, t)).reduce((e, t) => e + t) + e.allVariables.length > RL) {
      fullscreenValue.showVisualBellLocalized("variable_limit_in_collection_reached", "variables.variable_limit_in_collection_reached", {
        variableLimit: RL
      }, !1);
      return;
    }
    let i = e.allVariables.map(e => e.name);
    e.contextMenuData.groupNames.forEach(n => {
      let r = om(i, n);
      t.push(r);
      let a = Qo(e.allVariables, n);
      permissionScopeHandler.user("duplicate-variables", () => {
        a.forEach(e => {
          let t = r + e.name.replace(n, "");
          i.push(t);
          VariablesBindings.duplicateVariable(e.node_id, t);
        });
      });
    });
    fullscreenValue.triggerAction("commit");
    e.hideContextMenu();
  }, [e]), !!(e.onCreateGroup && e.onDuplicateVariables));
  let f = _$$rN(useCallback(() => {
    e.onUngroup?.(e.contextMenuData.groupNames);
    e.hideContextMenu();
    e.onSetAllVariablesSelected(!0);
  }, [e]), !!e.onUngroup);
  let _ = _$$rN(useCallback(() => {
    if (!e.onDeleteEmptyGroup || !e.onDeleteVariables) return;
    let {
      allVariables
    } = e;
    if (!N3(allVariables)) return;
    let i = e.contextMenuData.groupNames.reduce((i, n) => {
      let r = i.concat(Qo(allVariables, n));
      0 === r.length && e.onDeleteEmptyGroup?.();
      return r;
    }, []);
    o?.(i);
    e.hideContextMenu();
  }, [e, o]), !!o && everyLocalSubscription(e.allVariables));
  let A = useCallback(() => e.contextMenuData.groupNames.some(t => 0 === Qo(e.allVariables, t).length), [e]);
  let b = jsxs(Fragment, {
    children: [f && jsx(c$, {
      onClick: f,
      recordingKey: generateRecordingKey(e.recordingKey, "ungroupOption"),
      children: getI18nString("variables.authoring_modal.group_context_menu.ungroup")
    }), g && !A() && jsx(c$, {
      onClick: g,
      recordingKey: generateRecordingKey(e.recordingKey, "duplicateGroupOption"),
      children: e.contextMenuData.groupNames.length > 1 ? getI18nString("variables.authoring_modal.group_context_menu.duplicate_groups") : getI18nString("variables.authoring_modal.group_context_menu.duplicate_group")
    }), _ && jsx(c$, {
      onClick: _,
      recordingKey: generateRecordingKey(e.recordingKey, "deleteGroupOption"),
      children: e.contextMenuData.groupNames.length > 1 ? getI18nString("variables.authoring_modal.group_context_menu.delete_groups") : getI18nString("variables.authoring_modal.group_context_menu.delete_group")
    })]
  });
  let v = e.contextMenuData.modeID && 1 === e.contextMenuData.selectedVariableRows.length && e.contextMenuData.selectedVariableRows[0];
  let I = jsxs(Fragment, {
    children: [e.contextMenuData.modeID && e.contextMenuData.variableSet && v && jsx(eX, {
      cellElement: e.contextMenuData.cellElement,
      detachAlias: e.detachAlias,
      hideContextMenu: e.hideContextMenu,
      modeID: e.contextMenuData.modeID,
      onCreateExpression: e.contextMenuData.onCreateExpression,
      recordingKey: e.recordingKey,
      variable: v.variable,
      variableOverride: v.variableOverride,
      variableSet: e.contextMenuData.variableSet
    }), u && jsx(c$, {
      "data-testid": "copy-variables-menuopt",
      onClick: u,
      recordingKey: generateRecordingKey(e.recordingKey, "copyVariablesOption"),
      children: getI18nString("fullscreen_actions.copy")
    }), m && jsx(c$, {
      "data-testid": "paste-variables-menuopt",
      onClick: m,
      recordingKey: generateRecordingKey(e.recordingKey, "pasteVariablesOption"),
      children: getI18nString("fullscreen_actions.paste")
    }), u || m ? jsx(wv, {}) : null, s && jsx(c$, {
      onClick: s,
      recordingKey: generateRecordingKey(e.recordingKey, "createGroupOption"),
      children: getI18nString("variables.authoring_modal.context_menu.create_group")
    }), d && (1 === e.contextMenuData.selectedVariableRows.length && jsx(c$, {
      "data-testid": "edit-variable-menuopt",
      onClick: d,
      recordingKey: generateRecordingKey(e.recordingKey, "editVariableOption"),
      children: getI18nString("variables.authoring_modal.context_menu.edit", {
        count: e.contextMenuData.selectedVariableRows.length
      })
    }) || e.contextMenuData.selectedVariableRows.length > 1 && jsx(c$, {
      "data-testid": "edit-variables-menuopt",
      onClick: d,
      recordingKey: generateRecordingKey(e.recordingKey, "editVariablesOption"),
      children: getI18nString("variables.authoring_modal.context_menu.edit", {
        count: e.contextMenuData.selectedVariableRows.length
      })
    })), c && jsx(c$, {
      "data-testid": "duplicate-variables-menuopt",
      onClick: c,
      recordingKey: generateRecordingKey(e.recordingKey, "duplicateVariablesOption"),
      children: getI18nString("variables.authoring_modal.context_menu.duplicate", {
        count: e.contextMenuData.selectedVariableRows.length
      })
    }), h && jsxs(Fragment, {
      children: [jsx(wv, {}), jsx(c$, {
        onClick: h,
        recordingKey: generateRecordingKey(e.recordingKey, "deleteVariableOption"),
        children: e.contextMenuData.selectedVariableRows.length > 1 ? getI18nString("variables.authoring_modal.context_menu.delete_multiple") : getI18nString("variables.authoring_modal.context_menu.delete")
      })]
    })]
  });
  let E = useRef(null);
  let x = l4(E, e.contextMenuData.position);
  return createPortal(jsx(gw, {
    style: x,
    className: He,
    dispatch: t,
    dropdownRef: E,
    children: e.contextMenuData.groupNames.length > 0 ? b : I
  }), document.body);
}
function eX(e) {
  let t = !e.variableOverride && e.variable.variableSetId !== e.variableSet.node_id;
  let i = e.variableOverride ? e.variableOverride?.overrideValues[e.modeID] : e.variable.modeValues[e.modeID];
  let a = i?.type === VariableDataType.ALIAS;
  let s = i?.type === VariableDataType.EXPRESSION;
  let o = getFeatureFlags().ds_reactive_variables ? (a || s) && !t : a && !t;
  let [d, c] = Gx(e.variableSet.node_id, e.variable.node_id, e.modeID, i.resolvedType);
  let u = useCallback(() => {
    c(e.cellElement, {
      initialView: "library"
    });
    e.hideContextMenu();
  }, [e, c]);
  let m = useCallback(() => {
    e.onCreateExpression && e.onCreateExpression();
    e.hideContextMenu();
  }, [e]);
  let h = useCallback(() => {
    e.detachAlias && (e.detachAlias(e.variable.node_id, e.modeID, e.variableSet.node_id), e.hideContextMenu());
  }, [e]);
  return jsx(Fragment, {
    children: o && e.detachAlias ? jsx(c$, {
      recordingKey: generateRecordingKey(e.recordingKey, "clearAliasOption"),
      onClick: h,
      children: getI18nString("variables.authoring_modal.context_menu.clear_alias")
    }) : jsxs(Fragment, {
      children: [jsx(c$, {
        onClick: u,
        recordingKey: generateRecordingKey(e.recordingKey, "createAliasOption"),
        children: getI18nString("variables.authoring_modal.context_menu.create_alias")
      }), getFeatureFlags().ds_reactive_variables && jsx(c$, {
        onClick: m,
        recordingKey: generateRecordingKey(e.recordingKey, "createExpressionOption"),
        children: getI18nString("variables.authoring_modal.context_menu.create_expression")
      })]
    })
  });
}
var e3 = e4;
var e7 = (e => (e[e.SINGLE = 0] = "SINGLE", e[e.RANGE = 1] = "RANGE", e[e.TOGGLE = 2] = "TOGGLE", e))(e7 || {});
function e8(e) {
  let t = useRef(null);
  let i = useRef(null);
  let n = useRef(e);
  n.current = e;
  return useCallback((e, r) => {
    let a = r.shiftKey ? 1 : isCommandEvent(r) ? 2 : 0;
    switch (a) {
      case 0:
        if (t.current = e, i.current = null, n.current.includes(e)) return [...n.current];
        return [e];
      case 2:
        t.current = e;
        i.current = null;
        return toggleElement(n.current, e).sort();
      case 1:
        {
          if (null == t.current) {
            t.current = e;
            i.current = null;
            return [e];
          }
          let r = 1 === n.current.length ? n.current[0] : t.current;
          let a = new Set();
          null != i.current && (a = new Set(range(r, i.current))).add(i.current);
          i.current = e;
          return e3()([...n.current.filter(e => !a.has(e)), ...range(r, e), e]).sort();
        }
      default:
        throwTypeError(a);
    }
  }, []);
}
function tp({
  isSidebarOpen: e,
  onSidebarToggle: t
}) {
  return jsx(setupToggleButton, {
    recordingKey: generateRecordingKey("variablesModal", "toggleSidebar"),
    "aria-label": getI18nString("variables.authoring_modal.toggle_sidebar"),
    onIcon: jsx(_$$C, {}),
    offIcon: jsx(_$$O3, {}),
    checked: e,
    onChange: t
  });
}
let tI = "variables_sets_reorder_modal--UI3OneInputRowInput--mVda0";
let tE = parsePxInt(Flg) + 1;
function tx({
  close: e,
  initialPosition: t
}) {
  let i = yp();
  let a = i.map(e => e.node_id);
  let s = useRef(null);
  let [o, l] = useState(!1);
  let d = useCallback(() => l(!0), []);
  let c = useCallback(() => l(!1), []);
  _$$C2(s.current?.getScrollContainer(), o);
  let [u, p] = useState([]);
  let m = a.reduce((e, t, i) => (u.includes(t) && e.push(i), e), []);
  let h = useCallback((e, t, i) => {
    permissionScopeHandler.user("reorder-variant-prop-values", () => {
      VariablesBindings?.reorderVariableSets(i, e);
    });
  }, []);
  let f = useCallback(() => {
    let e = UO(i).map(e => e.node_id);
    permissionScopeHandler.user("sort-variable-collections", () => {
      VariablesBindings?.reorderVariableSets("", e);
    });
  }, [i]);
  let _ = new Point(0, 0);
  let A = o3(nt.useGrid);
  let [y, b] = useState(466);
  let v = useCallback(e => {
    b(e.height - tE - 24);
  }, []);
  let I = jsx("div", {
    className: "variables_sets_reorder_modal--sortButtonContainer----th1",
    children: jsx(IconButton, {
      "aria-label": getI18nString("variables.authoring_modal.reorder_collections_modal.sort_button"),
      onClick: f,
      children: jsx(_$$S2, {})
    })
  });
  return jsx(Ao, {
    allowResizeHeight: !0,
    alwaysEnsureHeaderModalOnScreen: !0,
    alwaysEnsureModalOnScreen: !0,
    canRenderBelowViewport: !1,
    customButton: I,
    initialPosition: t ?? _,
    onClose: e,
    onResize: v,
    preventClickEventBubbling: !0,
    tabIndex: 0,
    title: getI18nString("variables.authoring_modal.reorder_collections_modal.title"),
    children: jsx(_$$P2, {
      ref: s,
      className: `variables_sets_reorder_modal--scrollContainer---4uwN ${o ? "variables_sets_reorder_modal--cursorGrabbing--In4QI" : ""}`,
      maxHeight: y,
      dataTestId: "reorder-collections-modal",
      children: jsx(dD.Provider, {
        value: {
          useGrid: A
        },
        children: jsx(_$$q, {
          canDragLastItemToEnd: !1,
          shortenEndDivider: !0,
          listItems: a,
          selectedIndices: m,
          updateSelection: e => {
            o || p(e.map(e => a[e]).filter(e => void 0 !== e));
          },
          onChange: h,
          onDragStart: d,
          onDragEnd: c,
          renderListItem: (e, t, r, s, l, d, c) => {
            let u = i.find(t => t.node_id === e)?.name;
            return A ? jsx(IV, {
              selected: r,
              singletonRow: 1 === a.length,
              input: jsx("div", {
                className: tI,
                children: u
              })
            }) : jsx(_$$Y2, {
              selected: r,
              dragging: o,
              onMouseDown: l,
              onMouseMove: d,
              onMouseUp: c,
              showGrabberOnRowHover: !0,
              singletonRow: 1 === a.length,
              children: jsx(Ad, {
                label: null,
                appendedClassName: "variables_sets_reorder_modal--UI3OneInputRow--RbqSa",
                input: jsx("div", {
                  className: tI,
                  children: u
                })
              })
            });
          }
        })
      })
    })
  });
}
let tw = "variables_modal_set_header--dropdownOption--fI5Gu";
function tT({
  onCreateVariableSet: e,
  onCreateVariableSetExtension: t,
  onChangeVariableSet: i,
  onDeleteVariableSet: a,
  onRenameVariableSet: s,
  onSidebarToggle: o,
  variableSet: d,
  isShowingGuids: c,
  recordingKey: u,
  headerPosition: m
}) {
  let [h, g] = useState(!1);
  let [f, _] = useState(!1);
  let A = _$$rN(useCallback(e => s?.(d.node_id, e) ?? !1, [s, d.node_id]), !!s);
  let y = _$$rN(g, !!A);
  return jsxs(Fragment, {
    children: [A && y && h ? jsx("div", {
      children: jsx(_$$b, {
        type: _$$$.CELL,
        autoFocus: !0,
        originalValue: d.name,
        onSubmit: A,
        onFinish: () => y(!1),
        onCancel: () => y(!1),
        recordingKey: generateRecordingKey(u, "renameInput")
      })
    }) : jsx(tP, {
      variableSet: d,
      isRenaming: h,
      isShowingGuids: c,
      onChangeVariableSet: i,
      onRenameVariableSet: s,
      recordingKey: generateRecordingKey(u, "variableSetSwitcher")
    }), getFeatureFlags().ds_variables_modal_improvements_sidebar && jsx(tp, {
      isSidebarOpen: !0,
      onSidebarToggle: o
    }), jsx(tk, {
      recordingKey: generateRecordingKey(u, "variableSetOptions"),
      variableSet: d,
      onCreateVariableSet: e,
      onCreateVariableSetExtension: t,
      onChangeVariableSet: i,
      onDeleteVariableSet: a,
      setRename: y,
      setReorder: _
    }), f && jsx(_$$Q, {
      children: jsx(tx, {
        close: () => _(!1),
        initialPosition: new Point((m?.x ?? 0) + 9, (m?.y ?? 0) + 32)
      })
    })]
  });
}
function tk({
  variableSet: e,
  setRename: t,
  setReorder: i,
  onCreateVariableSet: a,
  onCreateVariableSetExtension: s,
  onChangeVariableSet: o,
  onDeleteVariableSet: l,
  recordingKey: d
}) {
  let {
    showing,
    toggle,
    hide
  } = BK("variable-modal-set-options");
  let h = yp();
  let _ = _$$rN(useHandleMouseEvent(generateRecordingKey(d, "createVariableSet"), "click", () => {
    a && t && (o(a()), t(!0), hide());
  }), !!a);
  let A = _$$rN(useHandleMouseEvent(generateRecordingKey(d, "createVariableSetExtension"), "click", async () => {
    s && t && (o(await s(e.node_id)), t(!0), hide());
  }), !!s);
  let y = _$$rN(useCallback(() => {
    t?.(!0);
    hide();
  }, [t, hide]), !!t);
  let b = debugState.getState();
  let v = b.openFile?.key;
  let I = _$$rN(useCallback(() => {
    i?.(!0);
    hide();
    trackDefinedFileEvent("reorder_collections.ds_reorder_variable_collection_menu_opened", v ?? "", b, {
      collection_id: e.node_id
    });
  }, [i, hide, v, b, e.node_id]), !!i);
  let E = _$$rN(useHandleMouseEvent(generateRecordingKey(d, "deleteVariableSet"), "click", () => {
    l?.(e.node_id);
    hide();
  }), !!l);
  let x = useRef(null);
  let S = [];
  return (y && S.push(jsx(c$, {
    className: tw,
    onClick: y,
    children: getI18nString("variables.authoring_modal.overflow_dropdown.rename_collection")
  }, "rename")), E && S.push(jsx(c$, {
    className: tw,
    onClick: E,
    children: getI18nString("variables.authoring_modal.overflow_dropdown.delete_collection")
  }, "delete")), (_ || A) && (S.length > 0 && S.push(jsx(wv, {}, "separator")), _ && S.push(jsx(c$, {
    className: tw,
    onClick: _,
    children: getI18nString("variables.authoring_modal.overflow_dropdown.create_collection")
  }, "create-root")), A && S.push(jsx(c$, {
    className: tw,
    onClick: A,
    children: getI18nString("variables.authoring_modal.overflow_dropdown.create_extended_collection")
  }, "create-extension")), h.length > 1 && I && (S.push(jsx(wv, {}, "separator")), S.push(jsx(c$, {
    className: tw,
    onClick: I,
    children: getI18nString("variables.authoring_modal.overflow_dropdown.reorder_collections")
  }, "reorder")))), 0 === S.length) ? null : jsxs(Fragment, {
    children: [jsx("div", {
      ref: x,
      children: jsx(_$$d, {
        "aria-label": getI18nString("variables.authoring_modal.more_variable_set_options_tooltip"),
        htmlAttributes: {
          "data-tooltip": getI18nString("variables.authoring_modal.more_variable_set_options_tooltip"),
          "data-tooltip-type": KindEnum.TEXT
        },
        recordingKey: generateRecordingKey(d, "moreOptionsButton"),
        onClick: () => {
          toggle();
          trackDefinedFileEvent("reorder_collections.ds_variable_collection_dropdown_opened", v ?? "", b, {
            collection_id: e.node_id
          });
        },
        "aria-expanded": showing,
        children: jsx(_$$J2, {})
      })
    }), showing && x.current && jsx(_$$Q, {
      children: jsxs(Cf, {
        targetRect: x.current.getBoundingClientRect(),
        children: [...S]
      })
    })]
  });
}
let tR = l6;
let tN = _$$c$;
function tP({
  variableSet: e,
  isShowingGuids: t,
  onChangeVariableSet: i,
  recordingKey: s
}) {
  let o = useDispatch();
  let l = Um();
  let d = yp();
  let c = G6(isExtension(e) ? e.backingVariableSetId : void 0);
  let u = EP(c);
  let m = d.length > 1;
  let h = useMemo(() => ({
    format: e => t ? `${e.name} (${e.node_id})` : e.name,
    isEqual: (e, t) => e.node_id === t.node_id
  }), [t]);
  return jsxs(Fragment, {
    children: [isExtension(e) && jsx(SvgComponent, {
      svg: _$$A,
      className: "variables_modal_set_header--extendedSetIcon--wnidP",
      "data-tooltip": u ? getI18nString("variables.authoring_modal.extended_collection.extension_based_off_library_tooltip", {
        libraryName: u,
        collectionName: c?.name ?? getI18nString("variables.authoring_modal.extended_collection.missing_base_collection_name")
      }) : getI18nString("variables.authoring_modal.extended_collection.extension_based_off_local_tooltip", {
        collectionName: c?.name ?? getI18nString("variables.authoring_modal.extended_collection.missing_base_collection_name")
      }),
      "data-tooltip-type": KindEnum.TEXT
    }), m ? jsx(tR, {
      ariaLabel: getI18nString("variables.binding_ui.variable_set"),
      className: "variables_modal_set_header--picker--JfS-D",
      dataTestId: "variable-set-select",
      dispatch: o,
      dropdownShown: l,
      formatter: h,
      id: "variable-set-select",
      neverConstrain: !0,
      onChange: e => {
        i(e.node_id);
      },
      property: e,
      targetDomNode: document.body,
      children: d.map(e => jsx(tN, {
        value: e,
        recordingKey: generateRecordingKey(s, "switcherOption")
      }, e.node_id))
    }) : jsx("div", {
      className: "variables_modal_set_header--pickerText--JlLOM",
      "data-testid": s,
      children: h.format(e)
    })]
  });
}
function tF() {
  return jsxs(Fragment, {
    children: [jsx(_$$E2, {
      variant: "inactiveOutline",
      children: "WIP"
    }), "\xa0"]
  });
}
function tM({
  libraryVariableSet: e,
  onChangeVariableSet: t,
  onCreateVariableSetExtension: i
}) {
  let {
    manager,
    getContextMenuTriggerProps
  } = setupMenu();
  let l = useCallback(() => {
    t(e.node_id);
  }, [e.node_id, t]);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx("div", {
      className: "x78zum5 x6s0dn4 x1tzdv60 x10w6t97 x87ps6o",
      ...getContextMenuTriggerProps(),
      onClick: l,
      children: e.name
    }, e.id), jsxs(MenuContainerComp, {
      children: [jsxs(MenuItemComp, {
        disabled: !0,
        onClick: lQ,
        children: [jsx(tF, {}), renderI18nText("variables.authoring_modal.sidebar.context_menu.copy_link_to_collection")]
      }), jsxs(MenuItemComp, {
        disabled: !0,
        onClick: lQ,
        children: [jsx(tF, {}), renderI18nText("variables.authoring_modal.sidebar.context_menu.go_to_collection")]
      }), jsx(MenuSeparator, {}), jsxs(MenuItemComp, {
        disabled: !0,
        onClick: lQ,
        children: [jsx(tF, {}), renderI18nText("variables.authoring_modal.sidebar.context_menu.duplicate_collection")]
      }), jsx(MenuItemComp, {
        onClick: () => {
          i?.(e.node_id);
        },
        children: renderI18nText("variables.authoring_modal.sidebar.context_menu.extend_collection")
      }), jsx(MenuSeparator, {}), jsxs(MenuItemComp, {
        disabled: !0,
        onClick: lQ,
        children: [jsx(tF, {}), renderI18nText("variables.authoring_modal.sidebar.context_menu.export_modes")]
      })]
    })]
  });
}
function tj({
  currentVariableSet: e,
  onChangeVariableSet: t,
  onCreateVariableSetExtension: i
}) {
  let r = pN();
  let a = "loaded" !== r.status;
  r.data?.libraryVariables;
  let s = r.data?.libraryVariableSets ?? [];
  let o = yp();
  return a ? jsx("div", {
    children: renderI18nText("variables.authoring_modal.sidebar.loading")
  }) : jsxs(Fragment, {
    children: [jsxs("div", {
      className: "x1n5zjp5",
      children: [jsx("div", {
        className: "x78zum5 x6s0dn4 x1tzdv60 x10w6t97 x87ps6o xk50ysn",
        children: renderI18nText("variables.authoring_modal.sidebar.library_collections")
      }), s.map(e => jsx(tM, {
        libraryVariableSet: e,
        onChangeVariableSet: t,
        onCreateVariableSetExtension: i
      }, e.node_id))]
    }), jsxs("div", {
      className: "x1n5zjp5",
      children: [jsx("div", {
        className: "x78zum5 x6s0dn4 x1tzdv60 x10w6t97 x87ps6o xk50ysn",
        children: renderI18nText("variables.authoring_modal.sidebar.local_collections")
      }), o.map(i => jsx("div", {
        ...Ay.props(tU.row, e.node_id === i.node_id && tU.selected),
        onClick: () => t(i.node_id),
        children: i.name
      }, i.id))]
    })]
  });
}
let tU = {
  row: {
    display: "x78zum5",
    alignItems: "x6s0dn4",
    padding: "x1tzdv60",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    height: "x10w6t97",
    userSelect: "x87ps6o",
    $$css: !0
  },
  selected: {
    backgroundColor: "x1v8gsql",
    $$css: !0
  }
};
function tY(e) {
  return jsx("div", {
    tabIndex: 0,
    onFocus: e.onFocus
  });
}
let tq = Symbol("VARIABLE_ROW");
let t$ = forwardRef(function ({
  recordingKey: e,
  isSelected: t = !1,
  isShowingGuids: i,
  onDrop: s,
  onRenameVariable: o,
  onSelect: d,
  onVariableContextMenu: u,
  renamingVariableID: m,
  setRenamingVariableID: h,
  variable: g,
  variableSet: f,
  variableOverride: _,
  virtualItem: A,
  toggleEditVariableModal: b,
  getVariableSetterForMode: v,
  clearVariableOverrideForMode: I,
  detachAlias: E,
  selectedVariableIDs: x,
  disableDragAndDrop: S,
  selectedModeID: w,
  draggingModeID: C
}, T) {
  let k = useRef(null);
  let P = useAtomWithSubscription(_$$X).isResizing;
  let D = !!s && !P && !S && isLocalSubscription(g);
  let {
    position
  } = h4(() => ({
    type: tq,
    element: k,
    item: g,
    onDrop(e) {
      _$$tU(e) && s?.(A.index, e);
    },
    canDrag: D,
    canDrop: D
  }));
  let M = useMemo(() => {
    let e = k.current;
    if (e && position) return position === Nz.BEFORE ? e.offsetTop - 1 : e.offsetTop + e.offsetHeight;
  }, [position]);
  let {
    modeLimit
  } = _$$z("authoring");
  let B = useHandleMouseEvent(e, "mousedown", e => {
    d(A.index, e);
  });
  let V = useHandleMouseEvent(e, "contextmenu", e => {
    u?.(g.node_id, void 0, e);
  });
  let z = useHandleGenericEvent(e, "focus", () => {
    t || d(A.index);
  });
  let H = useSelector(e => e.modalShown);
  let W = useRef(null);
  let K = H?.type === ec && H?.data.modalID === g.node_id;
  let Y = () => {
    if (K) {
      b(null);
      return;
    }
    let e = VZ(W.current, parsePxNumber($));
    x.includes(g.node_id) ? b(x, new Point(e.x + 16 - parsePxNumber($) / 2, e.y)) : b([g.node_id], new Point(e.x + 16 - parsePxNumber($) / 2, e.y));
  };
  let q = getFeatureFlags().ds_variables_modal_resize ? v6 : Ar;
  return jsxs(Fragment, {
    children: [M && jsx(N0, {
      top: M
    }), jsxs(_$$GC, {
      className: R()("variables_modal_table_item--row--fBkV2", {
        "variables_modal_table_item--selectedRow--w9Grw": t
      }),
      ref: _$$Ay(T, k),
      "data-index": A.index,
      isSelected: t,
      onMouseDown: B,
      onContextMenu: V,
      onFocus: z,
      children: [jsx(tZ, {
        recordingKey: generateRecordingKey(e, "name"),
        variable: g,
        onRenameVariable: o,
        renamingVariableID: m,
        setRenamingVariableID: h,
        isShowingGuids: i
      }), f.modes.map((t, i) => {
        let r = v?.(t.id);
        return jsx(tX, {
          canResize: !0,
          clearVariableOverride: () => I?.(t.id),
          detachAlias: E,
          isColumnSelected: t.id === w,
          isDragging: t.id === C,
          isInaccessible: i >= modeLimit,
          modeID: t.id,
          onContextMenu: (e, t, n, r) => {
            u?.(e, i < modeLimit ? t : void 0, n, r);
          },
          onSubmit: r,
          recordingKey: generateRecordingKey(e, "modeValue"),
          variable: g,
          variableOverride: _,
          variableSetId: f.node_id
        }, t.id);
      }), jsx(Ar, {}), jsx(q, {
        hasPadding: !1,
        noBorderOnFocus: !0,
        children: jsx("div", {
          className: R()("variables_modal_table_item--editButton--n24g1", {
            "variables_modal_table_item--editing--LGvvx": K
          }),
          children: jsx(_$$d, {
            "aria-label": getI18nString("variables.authoring_modal.edit_variable_button_tooltip"),
            onClick: e => {
              e.stopPropagation();
              Y();
            },
            "aria-expanded": K,
            recordingKey: generateRecordingKey(e, "editVariableModalIcon"),
            ref: W,
            htmlAttributes: {
              "data-tooltip": getI18nString("variables.authoring_modal.edit_variable_button_tooltip"),
              "data-tooltip-type": KindEnum.TEXT,
              "data-test-id": generateRecordingKey(e, "editVariableModalIcon")
            },
            children: jsx(_$$P4, {})
          })
        })
      })]
    })]
  });
});
function tZ({
  variable: e,
  onRenameVariable: t,
  renamingVariableID: i,
  setRenamingVariableID: r,
  isShowingGuids: a,
  recordingKey: s
}) {
  let o = B9(e.name);
  let l = Pf(e.name);
  let d = i === e.node_id;
  let c = _$$rN(useHandleMouseEvent(s, "dblclick", () => {
    r?.(e.node_id);
  }), !!r);
  return jsxs(Ar, {
    onDoubleClick: c ?? void 0,
    children: [t && d ? jsxs(Fragment, {
      children: [jsx("div", {
        className: "variables_modal_table_item--icon--vNHTu",
        children: jsx(_$$i2, {
          type: e.resolvedType
        })
      }), jsx(_$$b, {
        type: _$$$.CELL,
        recordingKey: generateRecordingKey(s, "renameInput"),
        autoFocus: !0,
        onCancel: () => r?.(null),
        onSubmit: i => t(e.node_id, normalizePath(l + i)),
        onFinish: () => r?.(null),
        originalValue: o,
        ignoreGroupPrefix: !0,
        noBorderOnFocus: !0
      })]
    }) : jsxs(Fragment, {
      children: [jsx(tY, {
        onFocus: () => r?.(e.node_id)
      }), jsx(_$$m2, {
        name: a ? `${o} (${e.node_id})` : o,
        resolvedType: e.resolvedType
      })]
    }), jsx(uM, {})]
  });
}
function tX({
  clearVariableOverride: e,
  detachAlias: t,
  variable: i,
  variableOverride: r,
  modeID: a,
  variableSetId: s,
  isInaccessible: o,
  onContextMenu: l,
  onSubmit: d,
  recordingKey: c,
  canResize: u,
  isColumnSelected: p
}) {
  return jsx("div", {
    className: "variables_modal_table_item--TableValueCell---DxIx",
    children: jsxs(Ar, {
      "data-mode-id": a,
      hasPadding: !1,
      style: p ? {
        backgroundColor: "var(--color-bg-selected)"
      } : {},
      children: [jsx(ed, {
        clearVariableOverride: e,
        detachAlias: t,
        hideBorder: !0,
        isInaccessible: o,
        modeID: a,
        onContextMenu: l,
        onSubmit: d,
        recordingKey: c,
        variable: i,
        variableOverride: r,
        variableSetId: s
      }), u && jsx(Mz, {
        modeID: a
      })]
    })
  });
}
let tJ = Symbol("VARIABLE_GROUP");
let t0 = [];
function t1({
  groups: e,
  onSidebarToggle: t,
  onChangeVariableSet: i,
  onContextMenu: a,
  onCreateVariableSet: s,
  onCreateVariableSetExtension: o,
  onDeleteVariableSet: d,
  onMoveSelectedGroupsToGroup: u,
  onMoveGroups: m,
  onMoveVariableToGroup: h,
  onRenameGroup: g,
  onRenameVariableSet: f,
  recordingKey: _,
  selectedGroupNames: A,
  selectedVariableIDs: y,
  setSelectedGroupNames: b,
  variableSet: v,
  isShowingGuids: I
}) {
  let E = useCurrentFileKey();
  let [x, S] = useSessionStorageSync(`variables_modal_sidebar_collapsed_groups__${E}`, {});
  let w = x[v.node_id] ?? t0;
  let C = useCallback((t, i) => {
    i.stopPropagation();
    let [n] = t4(e, [t]);
    S(e => {
      let t = e[v.node_id] ?? t0;
      let i = t.includes(n);
      return {
        ...e,
        [v.node_id]: i ? t.filter(e => e !== n) : [...t, n]
      };
    });
  }, [e, S, v.node_id]);
  let T = e8(A.map(t => e.findIndex(e => e.name === t)));
  let k = useCallback((t, i) => {
    i ? b(t4(e, T(t, i))) : b(t4(e, [t]));
  }, [T, b, e]);
  let R = _$$rN(useCallback(e => {
    for (let t of y) h?.(t, e);
  }, [h, y]), !!h);
  let N = _$$rN(useCallback(t => {
    let i = t.dropItem;
    if (!(0 > e.findIndex(e => e.name === i.name))) {
      if (t.position === Nz.INSIDE) {
        u?.(i.name);
        return;
      }
      t.position === Nz.BEFORE ? m?.(A, i.name, "before") : i.subgroups.length > 0 && !w.includes(i.name) ? m?.(A, i.subgroups[0].name, "before") : m?.(A, i.name, "after");
    }
  }, [e, A, w, u, m]), !!u && !!m);
  let P = useRef(null);
  return jsx("div", {
    className: "variables_modal_sidebar--root--RiRrt",
    children: jsxs("div", {
      className: "variables_modal_sidebar--sidebar--uUJuU",
      children: [jsx("div", {
        className: "variables_modal_sidebar--setPicker--3LuCn",
        ref: P,
        children: jsx(tT, {
          headerPosition: new Point(P.current?.getBoundingClientRect().left, P.current?.getBoundingClientRect().top),
          isShowingGuids: I,
          onChangeVariableSet: i,
          onCreateVariableSet: s,
          onCreateVariableSetExtension: o,
          onDeleteVariableSet: d,
          onRenameVariableSet: f,
          onSidebarToggle: t,
          recordingKey: generateRecordingKey(_, "variableSetHeader"),
          variableSet: v
        })
      }), jsx("div", {
        className: "variables_modal_sidebar--sidebarContent--lXlAP",
        onMouseDown: dG,
        children: jsxs(hh, {
          children: [getFeatureFlags().ds_variables_modal_improvements_sidebar && jsx(tj, {
            currentVariableSet: v,
            onChangeVariableSet: i,
            onCreateVariableSetExtension: o
          }), e.map((e, t) => {
            if ([...w].some(t => t !== e.name && e.name.startsWith(t))) return null;
            let i = "" === e.name ? "ALL_VARIABLES" : e.name;
            return jsx(t2, {
              group: e,
              isCollapsed: w.includes(e.name),
              isSelected: A.includes(e.name),
              onCollapse: e => C(t, e),
              onContextMenu: a,
              onDropGroup: N,
              onDropVariable: R,
              onRenameGroup: g,
              onSelect: e => k(t, e),
              recordingKey: generateRecordingKey(_, "group", i)
            }, i);
          })]
        })
      })]
    })
  });
}
function t2({
  group: e,
  isCollapsed: t = !1,
  isSelected: i = !1,
  onCollapse: a,
  onContextMenu: s,
  onDropGroup: o,
  onDropVariable: d,
  onRenameGroup: u,
  onSelect: m,
  recordingKey: h
}) {
  let g = useRef(null);
  let f = useRef(null);
  let _ = "" === e.name;
  let A = useMemo(() => GC(e).length, [e]);
  let b = _ ? getI18nString("variables.authoring_modal.table.all_variables") : ky(e.name);
  let v = _ ? 0 : e.name.split("/").length - 2;
  let [I, E] = useState(!1);
  let {
    position,
    dragType
  } = h4(() => ({
    type: tJ,
    item: e,
    element: g,
    accept: [tq],
    canDrag: !_ && !!d && !!o && everyLocalSubscription(e.variables),
    canDrop: !!o && !!d,
    dropPositionThreshold: 1 / 3,
    onDrop(t) {
      if (t.dragType === tq) d?.(e.name);else if (t.dragType === tJ && (!_ || t.position === Nz.INSIDE)) {
        if (!OI(t)) return;
        o?.(t);
      }
    }
  }));
  let w = null != position;
  let C = dragType === tJ ? position : Nz.INSIDE;
  let T = !t && e.subgroups.length > 0;
  let k = C === Nz.AFTER && T ? v + 1 : v;
  return jsxs(RecordableDiv, {
    forwardedRef: g,
    id: t3(e.name),
    recordingKey: generateRecordingKey(h, "nameValue"),
    className: R()({
      "variables_modal_sidebar--group--Tgizc": !0,
      "variables_modal_sidebar--allVariables--bCHIw": _ && !getFeatureFlags().ds_variables_modal_improvements_sidebar,
      "variables_modal_sidebar--selected--G9G2N": i,
      "variables_modal_sidebar--active--68MrH": w && C === Nz.INSIDE
    }),
    onMouseDown: m,
    onContextMenu: _ ? void 0 : t => s(e.name, t),
    onDoubleClick: _ || !u ? void 0 : e => {
      e.target !== f.current && E(!0);
    },
    children: [!_ && C && jsx(t5, {
      position: C,
      indentLevel: k
    }), jsxs("div", {
      className: "variables_modal_sidebar--groupInner--8iiPy",
      style: {
        "--group-indent-amount": `${16 * v}px`
      },
      children: [!_ && e.subgroups.length > 0 && jsx(ButtonPrimitive, {
        className: "variables_modal_sidebar--caret--SgjnT",
        onClick: a,
        recordingKey: generateRecordingKey(h, "groupCaret"),
        ref: f,
        "aria-label": t ? getI18nString("variables.visual_bell.expand_variable_group") : getI18nString("variables.visual_bell.collapse_variable_group"),
        "aria-controls": e.subgroups.map(e => t3(e.name)).join(","),
        "aria-expanded": !t,
        children: t ? jsx(_$$k3, {}) : jsx(_$$O2, {})
      }), u && I ? jsx("div", {
        className: "variables_modal_sidebar--renameInputWrapper--6cOyB",
        children: jsx(_$$b, {
          type: _$$$.CELL,
          recordingKey: generateRecordingKey(h, "renameInput"),
          autoFocus: !0,
          onCancel: () => E(!1),
          onSubmit: t => u(e.name, ZR(e.name, normalizePath(t))),
          onFinish: () => E(!1),
          originalValue: b
        })
      }) : jsxs(Fragment, {
        children: [jsx(_$$G, {
          text: b,
          showTooltip: _$$i.WHEN_TRUNCATED
        }), _ && jsx("h2", {
          "aria-describedby": t3(e.name),
          className: "variables_modal_sidebar--variableCount--wOIXB",
          children: A
        })]
      })]
    })]
  });
}
function t5({
  position: e,
  indentLevel: t
}) {
  if (!e || e === Nz.INSIDE) return null;
  let i = 16 * t + parsePxNumber(l2) - 2;
  return jsx("div", {
    className: R()({
      "variables_modal_sidebar--divider--GuHkJ": !0,
      "variables_modal_sidebar--before--CrDYJ": e === Nz.BEFORE,
      "variables_modal_sidebar--after--VRuk6": e === Nz.AFTER
    }),
    style: {
      marginLeft: i
    }
  });
}
function t4(e, t) {
  return t.map(i => isNullish(e[i]) ? (logError("variables", "Unable to find group name for index", {
    groups: e,
    indices: t
  }), "(missing)") : e[i].name);
}
function t3(e) {
  return `variable-group-${e || "all"}`;
}
let t8 = forwardRef(function ({
  name: e,
  "data-index": t,
  recordingKey: i,
  onRenameGroup: a
}, s) {
  let [o, l] = useState(!1);
  let d = _$$rN(l, !!a);
  let c = e.split("/").slice(0, -1);
  let u = c.slice(0, -1);
  let m = c[c.length - 1];
  return jsx($4, {
    ref: s,
    "data-index": t,
    children: jsxs("div", {
      className: "variables_modal_table_group_name--root--8xraW",
      children: [u.map((t, i) => {
        let r = `${e}-${i}`;
        return jsx(_$$G, {
          showTooltip: _$$i.WHEN_TRUNCATED,
          text: t,
          className: "variables_modal_table_group_name--parentGroupName--s-DDR"
        }, r);
      }), a && o ? jsx("div", {
        className: "variables_modal_table_group_name--renameInputWrapper---4f3i",
        children: jsx(_$$b, {
          type: _$$$.CELL,
          autoFocus: !0,
          recordingKey: generateRecordingKey(i, e, "renameInput"),
          onSubmit: t => {
            let i = !1;
            t && (i = a(e, ZR(e, normalizePath(t))));
            return i;
          },
          onFinish: () => d?.(!1),
          onCancel: () => d?.(!1),
          originalValue: m
        })
      }) : jsx(ButtonPrimitive, {
        className: "variables_modal_table_group_name--leafGroupNameWrapper--sv220",
        htmlAttributes: {
          onDoubleClick: () => d?.(!0)
        },
        recordingKey: generateRecordingKey(i, e, "nameValue"),
        children: jsx("span", {
          className: "variables_modal_table_group_name--leafGroupName--5i9Nf",
          children: m
        })
      })]
    })
  });
});
function ie({
  disabled: e,
  canDelete: t,
  modeID: i,
  name: s,
  maxLength: o,
  isOnly: d = !1,
  isDefault: c = !1,
  isShowingGuids: u,
  renamingModeGUID: m,
  setRenamingModeGUID: h,
  onDeleteMode: g,
  onDuplicateMode: _,
  onRenameMode: A,
  onSetModeAsDefault: y,
  recordingKey: b,
  atModeLimit: v,
  modeLimit: I,
  canShowModesCTA: E,
  showModesCTA: x,
  canResize: S,
  currentModeIDs: w,
  varSetID: C,
  selectedModeID: k,
  setSelectedModeID: R,
  draggingModeID: N,
  setDraggingModeID: P,
  setSelectedVariableIDs: O,
  dropTargetModeID: D,
  setDropTargetModeID: F,
  isDragging: M,
  setIsDragging: j,
  isDraggable: U
}) {
  let B = useDispatch();
  let {
    isResizing
  } = useAtomWithSubscription(_$$X);
  let G = useCallback(t => {
    if (isResizing || e) {
      t.preventDefault();
      return;
    }
    P(i);
    R(i);
    j(!0);
  }, [isResizing, P, i, e, R, j]);
  let H = useCallback(e => {
    e.preventDefault();
    let t = e.currentTarget.getBoundingClientRect();
    e.clientX > t.left + .75 * t.width ? F({
      modeID: i,
      position: "after"
    }) : F({
      modeID: i,
      position: "before"
    });
  }, [i, F]);
  let W = useCallback(e => {
    e.preventDefault();
    permissionScopeHandler.user("reorder-mode", () => {
      let e = O4(w, N ?? "", D?.modeID ?? "", D?.position ?? "before");
      e.indexOf(N ?? "") < I && VariablesBindings?.reorderVariableSetModes(C, N, e, ColumnInteraction.DRAG_AND_DROP);
    });
    F(null);
    P(null);
    j(!1);
  }, [N, F, P, j, D, w, C, I]);
  let K = useCallback(e => {
    e.stopPropagation();
    O([]);
    R(k === i ? null : i);
  }, [i, k, R, O]);
  let Y = k === i;
  let {
    showing,
    hide,
    show,
    data
  } = BK("variables-modal-mode-menu");
  let Q = _$$rN(useCallback(() => {
    v ? E && x() : _?.(i, s);
    hide();
  }, [v, E, hide, _, i, s, x]), !!_);
  let J = Xr(_$$X);
  let ee = _$$rN(useCallback(() => {
    getFeatureFlags().ds_variables_modal_resize && J(e => {
      let t = {
        ...e
      };
      t.valueColumnWidths.$$delete(i);
      return t;
    });
    g?.(i);
    hide();
  }, [hide, i, g, J]), !!g);
  let et = useCallback(() => {
    let e = w.indexOf(i);
    if (e > 0) {
      let t = w[e - 1];
      permissionScopeHandler.user("reorder-mode", () => {
        let e = O4(w, i, t ?? "", "before");
        VariablesBindings?.reorderVariableSetModes(C, i, e, ColumnInteraction.MOVE_COLUMN_LEFT);
      });
      R(i);
      hide();
    }
  }, [w, i, C, hide, R]);
  let en = useCallback(() => {
    let e = w.indexOf(i);
    if (-1 !== e && e < w.length - 1) {
      let t = w[e + 1];
      permissionScopeHandler.user("reorder-mode", () => {
        let e = O4(w, i, t ?? "", "after");
        VariablesBindings?.reorderVariableSetModes(C, i, e, ColumnInteraction.MOVE_COLUMN_RIGHT);
      });
      R(i);
      hide();
    }
  }, [w, i, C, hide, R]);
  let er = _$$rN(useCallback(e => !!A?.(i, e) && (fullscreenValue.triggerAction("commit"), !0), [i, A]), !!A);
  let ea = _$$rN(useCallback(() => {
    h?.(i);
    hide();
  }, [hide, h, i]), !!h);
  let es = _$$rN(useHandleMouseEvent(generateRecordingKey(b, "name"), "dblclick", () => h?.(i)), !!h);
  let eo = _$$rN(useCallback(() => {
    y?.(i);
    R(i);
    hide();
  }, [hide, y, i, R]), !!y);
  let el = !d && !c;
  let ed = d && s === nm ? getI18nString("variables.create_modal.value_label") : s;
  let ec = [];
  data && !data.onlyAllowDeletion && (Q && ec.push(jsx(c$, {
    onClick: Q,
    disabled: v && !E,
    recordingKey: generateRecordingKey(b, "duplicate"),
    children: getI18nString("variables.authoring_modal.mode_context_menu.duplicate_mode")
  }, "duplicate")), !e && el && eo && ec.push(jsx(c$, {
    onClick: eo,
    recordingKey: generateRecordingKey(b, "setAsDefault"),
    children: getI18nString("variables.authoring_modal.mode_context_menu.set_as_default")
  }, "setAsDefault")), !e && et && w.indexOf(i) > 0 && ec.push(jsx(c$, {
    onClick: et,
    recordingKey: generateRecordingKey(b, "moveLeft"),
    children: getI18nString("variables.authoring_modal.mode_context_menu.move_left")
  }, "moveLeft")), !e && en && -1 !== w.indexOf(i) && w.indexOf(i) < w.length - 1 && ec.push(jsx(c$, {
    onClick: en,
    recordingKey: generateRecordingKey(b, "moveRight"),
    children: getI18nString("variables.authoring_modal.mode_context_menu.move_right")
  }, "moveRight")), !d && ea && ec.push(jsx(c$, {
    onClick: ea,
    recordingKey: generateRecordingKey(b, "startRenaming"),
    children: getI18nString("variables.authoring_modal.mode_context_menu.rename_mode")
  }, "rename")));
  t && ee && (ec.length > 0 && ec.push(jsx(wv, {}, "separator1")), ec.push(jsx(c$, {
    onClick: ee,
    recordingKey: generateRecordingKey(b, "delete"),
    children: getI18nString("variables.authoring_modal.mode_context_menu.delete_mode")
  })));
  let eu = debugState.getState();
  let ep = eu.openFile?.key;
  let em = _$$rN(useHandleMouseEvent(b, "contextmenu", useCallback(t => {
    t.preventDefault();
    show({
      data: {
        position: {
          top: t.clientY - 4,
          left: t.clientX + 4
        },
        modeID: i,
        onlyAllowDeletion: !!e
      }
    });
    trackDefinedFileEvent("reorder_modes.ds_variable_mode_dropdown_opened", ep ?? "", eu, {
      collection_id: C,
      mode_id: i
    });
  }, [show, i, e, ep, eu, C])), ec.length > 0);
  return jsxs(Fragment, {
    children: [jsxs(Ar, {
      "data-mode-id": i,
      "data-mode-selectable": "true",
      "data-testid": i,
      disabled: e,
      draggable: U,
      onClick: K,
      onContextMenu: em ?? void 0,
      onDoubleClick: es ?? void 0,
      onDragOver: H,
      onDragStart: G,
      onDrop: W,
      onMouseDown: e => e.stopPropagation(),
      style: {
        cursor: M ? "grabbing" : U ? "grab" : void 0,
        zIndex: 0,
        ...(Y ? {
          backgroundColor: "var(--color-bg-selected)"
        } : {})
      },
      children: [er && h && i === m ? jsx("div", {
        className: "variables_modal_table_mode_cell--renameInputWrapper--ZKqoL",
        children: jsx(_$$b, {
          type: _$$$.CELL,
          autoFocus: !0,
          onCancel: () => h?.(null),
          onSubmit: er,
          onFinish: () => h?.(null),
          originalValue: ed,
          maxLength: o,
          recordingKey: generateRecordingKey(b, "rename"),
          noBorderOnFocus: !0
        })
      }) : jsxs(Fragment, {
        children: [jsx(tY, {
          onFocus: () => h?.(i)
        }), jsx(_$$G, {
          text: u ? `${ed} (${i})` : ed,
          showTooltip: _$$i.WHEN_TRUNCATED
        })]
      }), S && jsx(Mz, {
        modeID: i
      })]
    }), ec.length > 0 && showing && data?.modeID === i && createPortal(jsxs(gw, {
      dispatch: B,
      className: "variables_modal_table_mode_cell--contextMenu--B1Bjv",
      style: data?.position,
      children: [...ec]
    }), document.body)]
  });
}
function it({
  clearVariableOverrideForMode: e,
  detachAlias: t,
  onCreateMode: i,
  onDeleteMode: o,
  onDuplicateMode: d,
  onMoveVariableToGroup: u,
  onRenameGroup: m,
  onRenameMode: h,
  onSetModeAsDefault: g,
  onRenameVariable: f,
  onReorderVariables: _,
  onVariableContextMenu: A,
  recordingKey: y,
  renamingModeGUID: b,
  renamingVariableID: v,
  selectedVariableIDs: I,
  setRenamingModeGUID: E,
  setRenamingVariableID: x,
  setSelectedVariableIDs: S,
  variableSet: w,
  isShowingGuids: C,
  toggleEditVariableModal: T,
  setVariableValueForMode: k,
  setVariableOverrideForMode: R,
  filterState: P,
  tableRowItems: O,
  variableOverrides: D
}) {
  let F = useRef(null);
  let [M, j] = useState(!1);
  let [V, z] = useState(null);
  useEffect(() => {
    let e;
    let t = F.current;
    if (!t) return;
    let i = () => {
      if (null === V) return;
      let n = t.getBoundingClientRect();
      let r = .1 * n.width;
      let a = .3 * n.width;
      let s = 0;
      V < n.left + a ? s = -(2 * ((a - Math.max(V - n.left, 0)) / a)) : V > n.right - r && (s = (r - Math.max(n.right - V, 0)) / r * 2);
      t.scrollLeft += s;
      e = requestAnimationFrame(i);
    };
    null !== V && (e = requestAnimationFrame(i));
    let n = () => {
      j(!1);
      z(null);
      W(null);
    };
    document.addEventListener("dragend", n);
    return () => {
      cancelAnimationFrame(e);
      document.removeEventListener("dragend", n);
    };
  }, [M, V]);
  useEffect(() => {
    let e = F.current;
    if (!e) return;
    let t = e => {
      e.preventDefault();
      z(e.clientX);
    };
    e.addEventListener("dragover", t);
    return () => {
      e.removeEventListener("dragover", t);
    };
  }, [F]);
  let [H, W] = useState({
    modeID: null,
    position: "before"
  });
  let [K, Y] = useState(null);
  let [q, $] = useState(null);
  let Z = useCallback(e => {
    e.target.closest(".modeSelectable") || $(null);
  }, []);
  let X = useRef(w);
  let Q = useDispatch();
  useEffect(() => {
    X.current.node_id === w.node_id && X.current.defaultModeID !== w.defaultModeID && (Q(VisualBellActions.enqueue({
      type: "default-mode-changed",
      message: getI18nString("variables.authoring_modal.default_mode_changed")
    })), X.current = w);
  }, [Q, w]);
  let {
    showCTA,
    canShowCTA,
    modeLimit
  } = _$$z("authoring");
  let ei = w.modes.length >= modeLimit;
  let en = ei && !canShowCTA(w.modes.length);
  let ea = Te({
    count: O.length,
    getScrollElement: () => F.current,
    estimateSize: e => {
      let t = O[e];
      return t ? "group" === t.type ? 56 : 41 : 0;
    },
    overscan: 40,
    measureElement: e => e.getBoundingClientRect().height + 1
  });
  let es = e8(Hf(O, I));
  let eo = useCallback((e, t) => {
    if (-1 === e) {
      S([]);
      return;
    }
    if (t) {
      let i = es(e, t);
      let n = zg(O, i);
      if (t.shiftKey && 1 === i.length && 1 === I.length && I[0] === n[0]) {
        S([]);
        return;
      }
      S(n);
    } else S(zg(O, [e]));
  }, [es, O, I, S]);
  let el = useHandleMouseEvent(generateRecordingKey(y, "variablesModalTable"), "mousedown", e => {
    let t = e.target;
    (t === F.current || t.closest(".variablesModalTableHeader")) && eo(-1, e);
  }, {
    includeTarget: !0
  });
  let ed = _$$rN(useCallback((e, t) => {
    let i;
    let n = "";
    let r = "";
    t.position === Nz.BEFORE ? (i = Pf(t.dropItem.name), r = t.dropItem.node_id, n = e <= 0 ? "" : Vm(O, e - 1)?.node_id) : t.position === Nz.AFTER && (i = Pf(t.dropItem.name), n = t.dropItem.node_id, r = e >= O.length - 1 ? "" : Vm(O, e + 1)?.node_id);
    let a = [];
    for (let e of I) {
      let t = Kh(O, e);
      t && (null != i && Pf(t.name) !== i ? u?.(t.node_id, i) && a.push(t.node_id) : a.push(t.node_id));
    }
    _?.(a, n, r);
    fullscreenValue.triggerAction("commit");
  }, [u, _, O, I]), !!u && !!_);
  let ec = _$$x();
  let eu = yh(w.modes);
  let ep = getFeatureFlags().ds_variables_modal_resize ? `${ec} ${eu} ${Ks}` : `${U3} repeat(${w.modes.length}, ${SG}) minmax(${Ks}, 1fr)`;
  let em = getFeatureFlags().ds_variables_modal_resize ? v6 : Ar;
  let [eh, eg] = useState(null);
  useEffect(() => {
    let e = F.current;
    if (!e) return;
    let t = () => {
      if (!H || K && K === H.modeID && w.modes.length > 0 && (K === w.modes[0]?.id || K === w.modes[w.modes.length - 1]?.id)) {
        eg(null);
        return;
      }
      let t = e.querySelector(`[data-mode-id="${H.modeID}"]`);
      let i = e.querySelector(".variablesModalTableHeader");
      if (t && i) {
        let n = e.getBoundingClientRect();
        let r = t.getBoundingClientRect();
        let a = i.getBoundingClientRect();
        let s = "after" === H.position ? r.right - n.left + e.scrollLeft : r.left - n.left + e.scrollLeft;
        let o = a.top - n.top + e.scrollTop;
        eg({
          top: o,
          left: s,
          height: ea.getTotalSize() + parsePxNumber(_$$iw) - o,
          width: 2
        });
      }
    };
    t();
    e.addEventListener("scroll", t);
    window.addEventListener("resize", t);
    return () => {
      e.removeEventListener("scroll", t);
      window.removeEventListener("resize", t);
    };
  }, [K, H, w.modes, ea]);
  return jsxs("div", {
    className: "variables_modal_table--scrollContainer--SBj74",
    ref: F,
    onMouseDown: e => {
      Z(e);
      el(e);
    },
    "data-testid": "variables-modal-table",
    children: [eh && jsx("div", {
      className: "variables_modal_table--dividerRect--BxEIQ",
      style: {
        top: eh.top,
        left: eh.left,
        height: eh.height,
        width: eh.width
      }
    }), jsxs(SS, {
      gridColumnSizes: ep,
      style: {
        height: ea.getTotalSize() + parsePxNumber(_$$iw)
      },
      children: [jsxs(_$$GC, {
        isHeader: !0,
        className: "variablesModalTableHeader",
        "data-testid": "variables-modal-header",
        children: [jsxs(Ar, {
          children: [getI18nString("variables.authoring_modal.table.name_header"), jsx(uM, {})]
        }), w.modes.map((e, t) => jsx(ie, {
          atModeLimit: w.modes.length >= modeLimit,
          canDelete: w.modes.length > 1,
          canResize: !0,
          canShowModesCTA: canShowCTA(w.modes.length),
          currentModeIDs: w.modes.map(e => e.id),
          disabled: t >= modeLimit,
          draggingModeID: K,
          dropTargetModeID: H,
          isDefault: w.defaultModeID === e.id,
          isDraggable: t < modeLimit,
          isDragging: M,
          isOnly: 1 === w.modes.length,
          isShowingGuids: C,
          maxLength: 40,
          modeID: e.id,
          modeLimit,
          name: e.name,
          onDeleteMode: o,
          onDuplicateMode: d,
          onRenameMode: h,
          onSetModeAsDefault: g,
          recordingKey: generateRecordingKey(y, "modeHeader", t),
          renamingModeGUID: b,
          selectedModeID: q,
          setDraggingModeID: Y,
          setDropTargetModeID: W,
          setIsDragging: j,
          setRenamingModeGUID: E,
          setSelectedModeID: $,
          setSelectedVariableIDs: S,
          showModesCTA: showCTA,
          varSetID: w.node_id
        }, e.id)), jsx(ie, {
          atModeLimit: !1,
          canDelete: !1,
          canResize: !1,
          canShowModesCTA: !1,
          currentModeIDs: w.modes.map(e => e.id),
          disabled: !0,
          draggingModeID: K,
          dropTargetModeID: H,
          isDefault: !1,
          isDraggable: !1,
          isDragging: M,
          isOnly: !1,
          isShowingGuids: C,
          maxLength: 40,
          modeID: "",
          modeLimit: 0,
          name: "",
          onDeleteMode: lQ,
          onDuplicateMode: lQ,
          onRenameMode: () => !1,
          onSetModeAsDefault: lQ,
          renamingModeGUID: b,
          selectedModeID: q,
          setDraggingModeID: lQ,
          setDropTargetModeID: lQ,
          setIsDragging: lQ,
          setRenamingModeGUID: lQ,
          setSelectedModeID: lQ,
          setSelectedVariableIDs: lQ,
          showModesCTA: lQ,
          varSetID: w.node_id
        }), i && jsx(em, {
          hasPadding: !1,
          noBorderOnFocus: !0,
          children: jsx("div", {
            className: "variables_modal_table--newModeButton--HXURD",
            children: jsx(IconButton, {
              disabled: en,
              "aria-label": en ? getI18nString("variables.authoring_modal.reached_hard_mode_limit", {
                modeLimit
              }) : getI18nString("variables.authoring_modal.new_mode_tooltip"),
              onClick: () => {
                ei ? canShowCTA(w.modes.length) && showCTA() : i();
              },
              recordingKey: generateRecordingKey(y, "createMode"),
              htmlAttributes: {
                "data-tooltip": en ? getI18nString("variables.authoring_modal.reached_hard_mode_limit", {
                  modeLimit
                }) : getI18nString("variables.authoring_modal.new_mode_tooltip"),
                "data-tooltip-type": KindEnum.TEXT
              },
              children: jsx(_$$e, {})
            })
          })
        })]
      }), jsx("tr", {
        style: {
          height: ea.getVirtualItems()[0]?.start ?? 0,
          marginTop: -1
        }
      }), ea.getVirtualItems().map(i => {
        let r = O[i.index];
        if ("group" === r.type) return jsx(t8, {
          ref: ea.measureElement,
          name: r.name,
          "data-index": i.index,
          onRenameGroup: m
        }, r.name);
        let a = r?.variable;
        if (!a) return null;
        let s = OM(w, a, k, R);
        return jsx(t$, {
          ref: ea.measureElement,
          clearVariableOverrideForMode: t => {
            e?.(w.node_id, a.node_id, t);
          },
          detachAlias: t,
          disableDragAndDrop: !!P && uC(P),
          getVariableSetterForMode: s,
          isSelected: I.includes(r.variable.node_id),
          isShowingGuids: C,
          onDrop: ed,
          onRenameVariable: f,
          onSelect: eo,
          onVariableContextMenu: A,
          recordingKey: generateRecordingKey(y, "listItemRow", r.variable.node_id),
          renamingVariableID: v,
          selectedModeID: q,
          selectedVariableIDs: I,
          setRenamingVariableID: x,
          toggleEditVariableModal: T,
          variable: r.variable,
          variableOverride: D?.[r.variable.node_id],
          variableSet: w,
          virtualItem: i
        }, r.variable.node_id);
      })]
    })]
  });
}
function id({
  currentVariableSet: e,
  onCreateMode: t,
  recordingKey: i,
  showModesCTA: r,
  canShowModesCTA: a,
  modeLimit: s
}) {
  let o = e.modes.length >= s;
  let l = o && !a(e.modes.length);
  return t ? jsx(Button, {
    variant: "secondary",
    recordingKey: i,
    iconPrefix: jsx(_$$x2, {}),
    disabled: l,
    "aria-label": l ? getI18nString("variables.authoring_modal.reached_hard_mode_limit", {
      modeLimit: s
    }) : getI18nString("variables.authoring_modal.new_mode_tooltip"),
    onClick: () => {
      o ? a(e.modes.length) && r() : t();
    },
    htmlAttributes: {
      "data-tooltip": l ? getI18nString("variables.authoring_modal.reached_hard_mode_limit", {
        modeLimit: s
      }) : getI18nString("variables.authoring_modal.new_mode_tooltip"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: renderI18nText("variables.authoring_modal.action_bar.new_mode")
  }) : null;
}
function ic({
  currentVariableSet: e,
  selectedVariableIDs: t,
  groups: i,
  selectedGroup: a,
  setRenamingVariableID: s,
  setSelectedVariableIDs: o
}) {
  return jsx(fr, {
    id: "action-bar-create-variable-button",
    buttonComponent: forwardRef((e, t) => jsx(Button, {
      ...e,
      ref: t,
      variant: "primary",
      iconPrefix: jsx(_$$x2, {}),
      children: getI18nString("variables.authoring_modal.action_bar.new_variable")
    })),
    recordingKey: "variablesModal",
    groups: i,
    selectedGroup: a,
    setRenamingVariableID: s,
    variableSetID: e.node_id,
    selectedVariableIDs: t,
    setSelectedVariableID: o
  });
}
function ip({
  currentVariableSet: e,
  selectedVariableIDs: t,
  groups: i,
  selectedGroup: r,
  setRenamingVariableID: a,
  setSelectedVariableIDs: s,
  onCreateMode: o,
  showModesCTA: l,
  canShowModesCTA: d,
  modeLimit: c
}) {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x167g77z",
    children: [jsx(id, {
      currentVariableSet: e,
      onCreateMode: o,
      showModesCTA: l,
      canShowModesCTA: d,
      modeLimit: c
    }), _$$H(i) && jsx(ic, {
      currentVariableSet: e,
      selectedVariableIDs: t,
      groups: i,
      selectedGroup: r,
      setRenamingVariableID: a,
      setSelectedVariableIDs: s
    })]
  });
}
let iA = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 1a6 6 0 1 0 0 12 6 6 0 0 0 0-12m0 2.5a.5.5 0 0 1 .5.5v2.5H15a.5.5 0 0 1 0 1h-2.5V15a.5.5 0 0 1-1 0v-2.5H9a.5.5 0 0 1 0-1h2.5V9a.5.5 0 0 1 .5-.5"
    })
  });
});
function iv() {
  let e = $d();
  let t = useRef(!1);
  useEffect(() => {
    t.current || (t.current = !0, e("ds_variables_modal.filter_dropdown_opened"));
  }, [e]);
  return null;
}
function iI({
  currentVariableSet: e,
  filterState: t,
  toggleTypeFilter: i,
  setCollectionFilter: r
}) {
  let {
    manager,
    getTriggerProps
  } = setupMenu({
    initialPosition: "bottom-end"
  });
  let o = getFeatureFlags().ds_extended_collections && e && isExtension(e);
  let d = z7(t);
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(iE, {
      isActive: d,
      triggerProps: getTriggerProps()
    }), jsxs(MenuContainerComp, {
      children: [jsx(iv, {}), jsx(ix, {
        title: o ? jsx(MenuTitleComp, {
          children: getI18nString("variables.authoring_modal.filters.type")
        }) : jsx(MenuHiddenTitleComp, {
          children: getI18nString("variables.authoring_modal.filters.type")
        }),
        filterState: t,
        toggleTypeFilter: i
      }), o && jsx(iw, {
        filterState: t,
        setCollectionFilter: r
      })]
    })]
  });
}
function iE({
  isActive: e,
  triggerProps: t
}) {
  return jsx("div", {
    ...Ay.props(iT.filterButtonWrapper, e && iT.filterButtonWrapper_Active),
    children: jsx(_$$d, {
      "aria-label": getI18nString("variables.authoring_modal.search.filters"),
      ...t,
      children: e ? jsx(_$$S3, {}) : jsx(_$$S2, {})
    })
  });
}
function ix({
  title: e,
  filterState: t,
  toggleTypeFilter: i
}) {
  let r = Object.entries(gX).map(([e, {
    label: r,
    type: a
  }]) => jsxs(H_, {
    checked: t.filters.typeFilters.includes(e),
    onChange: () => i(e),
    children: [jsx(MenuItemLead, {
      children: jsx(iS, {
        type: a
      })
    }), jsx("div", {
      className: "x15l03u9",
      children: r
    })]
  }, e));
  return jsxs(MenuGroupComp, {
    children: [e, r]
  });
}
function iS({
  type: e
}) {
  return e === _$$ic ? jsx(_$$k4, {}) : jsx(_$$i2, {
    type: e
  });
}
function iw({
  filterState: e,
  setCollectionFilter: t
}) {
  let i = Object.entries(oR).map(([e, {
    label: t
  }]) => jsxs(CU, {
    value: e,
    children: [jsx(MenuItemLead, {
      children: jsx(iC, {
        collectionFilter: e
      })
    }), jsx("div", {
      className: "x15l03u9",
      children: t
    })]
  }, e));
  return jsx(z6, {
    title: jsx(MenuTitleComp, {
      children: getI18nString("variables.authoring_modal.filters.extended_collection_filter")
    }),
    onChange: t,
    value: e.filters.collectionFilter,
    children: i
  });
}
function iC({
  collectionFilter: e
}) {
  switch (e) {
    case "ALL":
      return jsx(_$$k4, {});
    case "LOCAL_TO_COLLECTION":
      return jsx(iA, {});
    case "OVERRIDES":
      return jsx(_$$a, {});
    default:
      noop(e);
      return null;
  }
}
let iT = {
  filterButtonWrapper: {
    backgroundColor: "x1v8gsql",
    borderTopRightRadius: "xq61x4o",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomRightRadius: "x1kz06h0",
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    "--color-icon": "xmauxvm",
    ":hover_--color-icon": "x1k89kn4",
    $$css: !0
  },
  filterButtonWrapper_Active: {
    backgroundColor: "xcr9a89",
    "--color-icon": "x1aue78i",
    ":hover_--color-icon": "xordocl",
    $$css: !0
  }
};
let iD = forwardRef((e, t) => {
  let {
    isFocused,
    onFocus,
    onBlur
  } = function () {
    let [e, t] = useState(!1);
    return {
      isFocused: e,
      onFocus: useCallback(() => t(!0), []),
      onBlur: useCallback(() => t(!1), [])
    };
  }();
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onFocus: _onFocus,
    onBlur: _onBlur,
    onClick,
    onSearchKeyDown,
    onSearchChange
  } = ne({
    ...e,
    onFocus,
    onBlur
  }, t);
  let [g, f] = useState(175);
  let _ = useRef(null);
  useEffect(() => {
    _.current && f(_.current.scrollWidth + 48);
  }, [e.query]);
  let A = {
    width: `${clamp(g, 175, 500)}px`
  };
  let y = e.placeholder ?? getI18nString("general.search");
  return jsxs(Fragment, {
    children: [jsxs("div", {
      ...Ay.props(iF.inputWrapper, isFocused && iF.inputWrapperFocused),
      style: A,
      children: [jsx(_$$h2, {
        ...Ay.props(iF.searchIcon, e.query || isFocused ? iF.searchIconPrimary : iF.searchIconSecondary)
      }), jsx(LazyInputForwardRef, {
        ref: searchInputRef,
        "aria-label": y,
        "data-testid": "search-bar-input",
        maxInputLength: e.maxInputLength,
        onBlur: _onBlur,
        onChange: onSearchChange,
        onClick,
        onFocus: _onFocus,
        onKeyDown: onSearchKeyDown,
        onMouseDown,
        onMouseUp,
        placeholder: y,
        spellCheck: !1,
        value: e.query,
        ...Ay.props(iF.inputTypography, iF.input)
      }), !!e.query && jsx(iL, {
        onClick: e.clearSearch
      })]
    }), jsx("span", {
      ref: _,
      "aria-hidden": "true",
      ...Ay.props(iF.inputTypography, iF.hiddenInputTextSizer),
      children: e.query
    })]
  });
});
function iL({
  onClick: e
}) {
  return jsx(ButtonPrimitive, {
    onClick: e,
    className: "xmauxvm xvy4d1p xxk0z11 xt0e3qv x1bh537i",
    "aria-hidden": !0,
    htmlAttributes: {
      tabIndex: -1,
      onPointerDown: wo
    },
    children: jsx(_$$w, {})
  });
}
let iF = {
  inputWrapper: {
    alignItems: "x6s0dn4",
    backgroundColor: "x1v8gsql",
    borderTopLeftRadius: "x5uboqo",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderBottomLeftRadius: "x1ym3s57",
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    display: "x78zum5",
    width: "x642log",
    transition: "x2kb5ha",
    transitionBehavior: null,
    transitionDelay: null,
    transitionDuration: null,
    transitionProperty: null,
    transitionTimingFunction: null,
    $$css: !0
  },
  inputWrapperFocused: {
    outline: "x1ruf69i",
    outlineColor: null,
    outlineStyle: null,
    outlineWidth: null,
    outlineOffset: "x1g40iwv",
    $$css: !0
  },
  inputTypography: {
    ..._$$g2.textBodyMedium,
    $$css: !0
  },
  input: {
    backgroundColor: "xjbqb8w",
    height: "xxk0z11",
    "::placeholder_color": "xuggh6c",
    width: "xh8yej3",
    $$css: !0
  },
  hiddenInputTextSizer: {
    display: "x1rg5ohu",
    height: "xqtp20y",
    left: "x3rpodo",
    insetInlineStart: null,
    insetInlineEnd: null,
    pointerEvents: "x47corl",
    position: "x10l6tqk",
    top: "x1agkon0",
    visibility: "xlshs6z",
    whiteSpace: "x1sdyfia",
    $$css: !0
  },
  searchIcon: {
    flexShrink: "x2lah0s",
    $$css: !0
  },
  searchIconSecondary: {
    "--color-icon": "xmauxvm",
    $$css: !0
  },
  searchIconPrimary: {
    "--color-icon": "xbzrb6o",
    $$css: !0
  }
};
function iM({
  currentVariableSet: e,
  filterState: t,
  clearFilterState: i,
  onQueryChange: a,
  toggleTypeFilter: s,
  setCollectionFilter: o
}) {
  let l = useCallback(() => {
    i({
      reason: Z_.InputButton
    });
  }, [i]);
  return jsx("div", {
    className: "x6s0dn4 x78zum5 x193iq5w",
    children: jsxs(_$$e2, {
      "aria-label": getI18nString("variables.authoring_modal.search.button_group"),
      children: [jsx(iD, {
        focusOnMount: !1,
        query: t.query,
        placeholder: getI18nString("variables.authoring_modal.filters.placeholder"),
        clearSearch: l,
        onChange: a
      }), jsx(iI, {
        currentVariableSet: e,
        filterState: t,
        toggleTypeFilter: s,
        setCollectionFilter: o
      })]
    })
  });
}
function ij() {
  return jsxs("div", {
    className: "variables_debug_preview_badge--variablePreviewBadge--ODs1j",
    children: [jsx("div", {
      className: "variables_debug_preview_badge--variablePreviewDot--zmx2J"
    }), renderI18nText("proto.variable_debugger.live_preview_indicator")]
  });
}
function iU({
  currentVariableSet: e,
  isCurrentVariableSetEmpty: t,
  selectedVariableIDs: i,
  groups: a,
  selectedGroup: s,
  isSidebarOpen: d,
  onSidebarToggle: c,
  filterState: m,
  clearFilterState: h,
  setQuery: g,
  toggleTypeFilter: f,
  setCollectionFilter: _,
  onCreateMode: A,
  showModesCTA: b,
  canShowModesCTA: v,
  modeLimit: I,
  setIsMaximized: E,
  isMaximized: x,
  setRenamingVariableID: S,
  setSelectedVariableIDs: w
}) {
  let C = al();
  let T = isNotNullish(e);
  let k = $d();
  let R = useCallback(() => {
    E(e => !e);
  }, [E]);
  let N = useLatestRef(x);
  useEffect(() => {
    x && !N ? k("ds_variables_modal.expanded") : !x && N && k("ds_variables_modal.minimized");
  }, [x, N, k]);
  let P = useCallback(e => {
    e.target === e.currentTarget && E(!x);
  }, [E, x]);
  let O = !t;
  let D = getFeatureFlags().ds_variables_modal_action_bar && !t && e && isLocalSubscriptionStatus(e);
  let F = !getFeatureFlags().ds_variables_modal_improvements_sidebar || !d;
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x12lumcd x6s0dn4 xh8yej3",
    style: d && T ? {
      paddingLeft: NE
    } : {},
    onDoubleClick: P,
    children: [T ? jsxs(Fragment, {
      children: [F && jsx("div", {
        className: "x1iog12x",
        children: jsx(tp, {
          isSidebarOpen: d,
          onSidebarToggle: c
        })
      }), getFeatureFlags().ds_variables_modal_improvements && jsx("div", {
        className: "xet2fuk x1s688f x1j6dyjg xs83m0k x1sf2cm4 xuxw1ft xktpd3l xb3r6kr xlyipyv x87ps6o",
        children: e.name
      }), O && jsx("div", {
        className: "x13fj5qh x1iyjqo2 xb3r6kr x78zum5 x13a6bvl",
        children: jsx(iM, {
          currentVariableSet: e,
          filterState: m,
          clearFilterState: h,
          onQueryChange: g,
          toggleTypeFilter: f,
          setCollectionFilter: _
        })
      }), D && jsx("div", {
        className: "x78zum5 x8x9d4c x13a6bvl x6s0dn4",
        children: jsx(ip, {
          canShowModesCTA: v,
          currentVariableSet: e,
          groups: a,
          modeLimit: I,
          onCreateMode: A,
          selectedGroup: s,
          selectedVariableIDs: i,
          setRenamingVariableID: S,
          setSelectedVariableIDs: w,
          showModesCTA: b
        })
      })]
    }) : jsx("div", {
      className: "xet2fuk x1s688f x1j6dyjg xs83m0k x1sf2cm4 xuxw1ft xktpd3l xb3r6kr xlyipyv x87ps6o",
      children: renderI18nText("variables.authoring_modal.title")
    }), C && jsx("div", {
      className: ED,
      children: jsx(ij, {})
    }), jsxs(Fragment, {
      children: [!O && !D && jsx("div", {
        className: "x1iyjqo2 x47corl"
      }), jsx("div", {
        className: "xet2fuk xl010v5",
        children: jsx(setupToggleButton, {
          recordingKey: generateRecordingKey("variablesModal", "expandModal"),
          "aria-label": x ? getI18nString("variables.authoring_modal.toggle_fullscreen_mode_minimize") : getI18nString("variables.authoring_modal.toggle_fullscreen_mode_expand"),
          onIcon: jsx(_$$O4, {}),
          offIcon: jsx(_$$p, {}),
          checked: !x,
          onChange: R
        })
      })]
    })]
  });
}
let iq = "variables-modal-width";
let i$ = "variables-modal-height";
let iZ = "variables-modal-position";
let iX = parsePxNumber(gZ);
let iQ = parsePxNumber(NE);
let iJ = parsePxNumber(Cg);
function i0() {
  let [{
    windowInnerWidth: e,
    windowInnerHeight: t
  }] = useDebounce(_$$l(), 300, {
    equalityFn: deepEqual
  });
  return {
    windowInnerWidth: e,
    windowInnerHeight: t
  };
}
function i1({
  isSidebarOpen: e,
  isMaximized: t,
  sessionDimensions: i
}) {
  let n = function ({
    isSidebarOpen: e,
    sessionDimensions: t
  }) {
    let {
      windowInnerWidth,
      windowInnerHeight
    } = i0();
    let a = useMemo(() => {
      let {
        position
      } = t;
      if (!position) return null;
      let a = e ? iQ : 0;
      return position.x + a > windowInnerWidth || position.y > windowInnerHeight ? null : new Point(position.x, position.y);
    }, [e, t, windowInnerHeight, windowInnerWidth]);
    let s = useMemo(() => {
      let e = t.width;
      return e && Number.isFinite(e) ? e : 642;
    }, [t.width]);
    let o = useMemo(() => {
      let e = t.height;
      return e && Number.isFinite(e) ? e : 380;
    }, [t.height]);
    return a && s && o ? {
      constraints: a ? {
        x: "left",
        y: "top"
      } : {
        x: "right",
        y: "top"
      },
      position: a,
      width: s,
      height: o
    } : null;
  }({
    isSidebarOpen: e,
    sessionDimensions: i
  });
  let a = {
    constraints: {
      x: "right",
      y: "top"
    },
    position: function () {
      let e = _$$P();
      return useMemo(() => new Point(e + parsePxNumber(gZ), parsePxNumber(gZ)), [e]);
    }(),
    width: 642,
    height: 380
  };
  let s = function () {
    let {
      windowInnerWidth,
      windowInnerHeight
    } = i0();
    return {
      constraints: {
        x: "left",
        y: "top"
      },
      position: new Point(iX, iX),
      width: windowInnerWidth - 2 * iX,
      height: windowInnerHeight - 2 * iX
    };
  }();
  useEffect(() => {
    let e = getSessionStorage();
    n || (e?.removeItem(iZ), e?.removeItem(iq), e?.removeItem(i$));
  }, [n]);
  return k9(() => t ? s : n || a, [t, s, n, a]);
}
function i2({
  children: e,
  renderTitle: t,
  handleKeyDown: i,
  handleClipboard: o,
  hasVariables: l,
  isSidebarOpen: d,
  onWindowCopy: c,
  onWindowPaste: p,
  modalIdentifier: h
}) {
  var g;
  var f;
  var _;
  let A = useRef(null);
  let y = useRef(null);
  let [b, v] = useState(!1);
  let [I, E] = useLocalStorageSync("variables-modal-maximized", !1);
  !function (e) {
    let t = useSelector(_$$c);
    let [i, n] = useState(!1);
    useEffect(() => {
      i || (n(!0), trackEventAnalytics("ds_variables_modal_opened", {
        ...t,
        view_type: e ? "expanded" : "minimized"
      }));
    }, [t, e, i]);
  }(I);
  let {
    sessionDimensions,
    setSessionWidth,
    setSessionHeight,
    setSessionPosition
  } = function () {
    let [e, t] = useSessionStorageSync(iq, 642);
    let [i, n] = useSessionStorageSync(i$, 380);
    let [a, s] = useSessionStorageSync(iZ, null);
    return useMemo(() => ({
      sessionDimensions: {
        width: e,
        height: i,
        position: a
      },
      setSessionWidth: t,
      setSessionHeight: n,
      setSessionPosition: s
    }), [e, i, a, t, n, s]);
  }();
  let R = i1({
    isSidebarOpen: d,
    isMaximized: I,
    sessionDimensions
  });
  let N = ox();
  let P = _$$n({
    type: h
  });
  let D = function ({
    hasVariables: e
  }) {
    let {
      windowInnerWidth,
      windowInnerHeight
    } = i0();
    return {
      maxWidth: windowInnerWidth - 2 * iX,
      maxHeight: windowInnerHeight - 2 * iX,
      minWidth: 400,
      minHeight: e ? 180 : 300
    };
  }({
    hasVariables: l
  });
  !function ({
    windowManager: e,
    isSidebarOpen: t,
    isMaximized: i,
    isResizing: n,
    sessionDimensions: a
  }) {
    let s = i1({
      isSidebarOpen: t,
      isMaximized: i,
      sessionDimensions: a
    });
    let o = useCallback(t => {
      n || (e.setPosition(t.position), e.setSize(new Point(t.width, t.height)));
    }, [e, n]);
    let l = useLatestRef(i);
    useEffect(() => {
      void 0 !== l && l !== i && o(s);
    }, [i, l, o, s]);
    let {
      windowInnerWidth,
      windowInnerHeight
    } = i0();
    useEffect(() => {
      i && o(s);
    }, [windowInnerWidth, windowInnerHeight, i, s, o]);
  }({
    isResizing: b,
    windowManager: N,
    isSidebarOpen: d,
    isMaximized: I,
    sessionDimensions
  });
  let L = useCallback(() => {
    let e = y.current;
    if (!e || !e.style.transform) return;
    let t = new DOMMatrix(e.style.transform);
    let i = t.m41;
    let n = t.m42;
    e.style.transform = "";
    e.style.left = `${i}px`;
    e.style.top = `${n}px`;
    N.setPosition(new Point(i, n));
  }, [N]);
  let F = function ({
    windowRef: e
  }) {
    return useCallback(() => {
      let t = e.current;
      if (!t) return;
      let {
        x,
        y
      } = t.getBoundingClientRect();
      let r = t.offsetWidth;
      let a = t.offsetHeight;
      let s = window.innerWidth;
      let o = window.innerHeight;
      let l = r / 2;
      let d = Math.max(-l, Math.min(x, s - l));
      let c = Math.max(0, Math.min(y, o - a / 2));
      (x !== d || y !== c) && (t.style.transform = `translate(${d}px, ${c}px)`);
    }, [e]);
  }({
    windowRef: y
  });
  let M = useCallback(({
    width: e,
    height: t
  }) => {
    E(!1);
    setSessionWidth(e);
    setSessionHeight(t - iJ);
  }, [E, setSessionWidth, setSessionHeight]);
  let j = useCallback(() => {
    let {
      x,
      y
    } = y.current?.getBoundingClientRect();
    setSessionPosition(new Point(x, y));
  }, [setSessionPosition]);
  !function ({
    keyboardReceiverRef: e,
    windowRef: t
  }) {
    useEffect(() => {
      let i = i => {
        let {
          target
        } = i;
        let r = t.current;
        target && r?.contains(target) ? e.current?.focus() : e.current?.blur();
      };
      document.body.addEventListener("mouseup", i);
      return () => document.body.removeEventListener("mouseup", i);
    }, [e, t]);
  }({
    keyboardReceiverRef: A,
    windowRef: y
  });
  return jsxs(_$$k2, {
    name: "variables_modal",
    children: [I && jsx(_$$bL2, {
      onClose: lQ,
      draggable: "header",
      children: jsx("div", {
        "data-testid": "variables-modal-backdrop",
        className: "x1w4pau8 xn9wirt x1dr59a3 x13vifvy xu96u03 xixxii4"
      })
    }), jsx(vL, {
      handleKeyDown: i,
      handleClipboard: o,
      ref: A,
      name: "variables-authoring-modal",
      focusOnMount: !0,
      children: jsx(_L, {
        ref: y,
        constraints: D,
        defaultHeight: R.height,
        defaultPosition: (g = R.constraints, f = R.position, _ = R.width, "right" === g.x && "top" === g.y ? {
          right: f.x + _,
          top: f.y
        } : {
          left: f.x,
          top: f.y
        }),
        defaultWidth: R.width,
        htmlAttributes: {
          onMouseUp: L,
          onCopy(e) {
            y.current === document.activeElement && (c(e), e.stopPropagation());
          },
          onPaste(e) {
            p(e);
            e.stopPropagation();
          },
          onKeyDown: e => i?.(new pS(e.nativeEvent))
        },
        manager: N,
        onClose: e => {
          "outside" !== e.source && P();
        },
        onTransform: ({
          size: e,
          commit: t
        }) => {
          E(!1);
          v(!t);
          e || F();
          j();
          e && M({
            width: e.x,
            height: e.y
          });
        },
        recordingKey: "variablesModal",
        children: jsxs(DialogContents, {
          children: [jsx(DialogHeader, {
            children: t({
              setIsMaximized: E,
              isMaximized: I
            })
          }), jsx(DialogBody, {
            padding: 0,
            scrolling: "none",
            children: jsx("div", {
              style: {
                height: "100%"
              },
              children: e
            })
          })]
        })
      })
    })]
  });
}
export let $$i50 = registerModal(function () {
  let e = getObservableOrFallback(UK().showGuids);
  let t = useSelector(e => e.modalShown?.type === eu.type);
  let {
    state: {
      currentVariableSet,
      renamingModeGUID,
      renamingVariableID,
      selectedGroupNames,
      selectedVariableIDs,
      variableGroupList,
      variableList,
      variableOverrides,
      isSidebarOpen
    },
    actions
  } = function (e) {
    let t = useDispatch();
    let i = useSelector(e => e.modalShown);
    let n = yp();
    let s = Object.values(lO());
    let d = pN();
    let c = d.data?.libraryVariableSets ?? eH;
    let [u, m] = function ({
      localVariableSets: e,
      subscribedVariableSets: t
    }) {
      let [i, n] = useLocalStorageSync("last-used-variable-set", e[0]?.node_id ?? "");
      return [useMemo(() => {
        let n = [...e, ...t].find(e => e.node_id === i);
        return !n && e.length > 0 ? e[0] : n;
      }, [i, e, t]), n];
    }({
      localVariableSets: n,
      subscribedVariableSets: s
    });
    let h = !!u && isExtension(u);
    let f = !u || isLocalSubscriptionStatus(u);
    let _ = useMemo(() => ({
      readOnly: "READ_ONLY" === e || !f,
      variableSetType: h ? "extension" : "root"
    }), [e, f, h]);
    let A = L5(u);
    let b = rN(u?.node_id ?? "");
    let v = U6(A?.node_id ?? "").filter(e => !e.isSoftDeleted);
    h && (v = v.map(e => {
      let t = b[e.node_id];
      return {
        ...e,
        ...(t && {
          modeValues: t.modeValues
        })
      };
    }));
    let I = x9(u && isExtension(u) ? u?.node_id ?? "" : "");
    let E = useMemo(() => Pw(v), [v]);
    let [x, S] = useState([]);
    let [w, C] = useState(new Map());
    let k = useCallback(e => {
      S([]);
      u && (0 === e.length || e.includes("") ? C(new Map(w).set(u.node_id, [""])) : C(new Map(w).set(u.node_id, e)));
    }, [u, w]);
    let R = useMemo(() => {
      if (!u || !w.has(u.node_id)) return [""];
      let e = (w.get(u.node_id) || [""]).filter(e => cv(v, e) > 0);
      return e.length ? e : [""];
    }, [u, w, v]);
    let [N, O] = useState(null);
    let [D, L] = useState(null);
    let [F, M] = useLocalStorageSync("variables-modal-is-sidebar-open", E.length >= 2);
    let j = useMemo(() => ({
      variableList: v,
      variableGroupList: E
    }), [E, v]);
    let U = wp();
    let B = jv();
    let V = mm();
    return useMemo(() => {
      let e = ez(() => (e, t) => permissionScopeHandler.user("rename-variable", () => VariablesBindings.renameVariable(e, normalizePath(t))) ? (fullscreenValue.triggerAction("commit"), !0) : (logError("variables", "Failed to rename variable", {
        variableID: e
      }), !1), j, eV, _);
      let r = ez(() => V.setVariableValueForMode, j, eB, _);
      let a = Ot() ? ez(() => V.setVariableOverrideForMode, j, eG, _) : null;
      let s = Ot() ? ez(() => (e, t, i) => a?.(e, t, i, null), j, eG, _) : null;
      let d = ez(() => (e, t) => {
        let i = permissionScopeHandler.user("delete-variable-code-syntax", () => VariablesBindings.deleteVariableCodeSyntax(e.node_id, t));
        i && fullscreenValue.triggerAction("commit");
        return i;
      }, j, eB, _);
      let h = ez(() => (e, t, i) => {
        if (0 === i.length) return !1;
        let n = permissionScopeHandler.user("edit-variable-code-syntax", () => VariablesBindings.editVariableCodeSyntax(e.node_id, t, i));
        n && fullscreenValue.triggerAction("commit");
        return n;
      }, j, eB, _);
      let g = ez(() => (e, t, i) => {
        permissionScopeHandler.user("edit-variable-scopes", () => {
          let n = e.map(e => e.node_id);
          return n.length > 0 && VariablesBindings.setVariableScopesBulk(n, t, i);
        }) && fullscreenValue.triggerAction("commit");
      }, j, eV, _);
      let f = ez(() => (e, t) => {
        let i = permissionScopeHandler.user("edit-variable-description", () => VariablesBindings.editVariableDescription(e.node_id, t));
        i && fullscreenValue.triggerAction("commit");
        return i;
      }, j, eV, _);
      let y = ez(() => (e, t) => {
        let i = !0;
        e.forEach(e => {
          (i = i && permissionScopeHandler.user("toggle-publishable", () => VariablesBindings.setVariableIsPublishable(e.node_id, t))) || logError("variables", "Failed to mark variable as publishable", {
            variableId: e.node_id
          });
        });
        i && fullscreenValue.triggerAction("commit");
      }, j, eV, _);
      let b = ez(() => V.detachAlias, j, eB, _);
      return {
        state: {
          currentVariableSet: u,
          isSidebarOpen: F,
          renamingModeGUID: D,
          renamingVariableID: N,
          selectedGroupNames: R,
          selectedVariableIDs: x,
          variableGroupList: E,
          variableList: v,
          variableOverrides: I
        },
        actions: {
          setCurrentVariableSetID: m,
          setRenamingModeGUID: L,
          setRenamingVariableID: ez(() => O, j, eV, _),
          setSelectedGroupNames: k,
          setSelectedVariableIDs: S,
          setIsSidebarOpen: M,
          createMode: ez(() => (e = "Mode") => {
            if (isNullish(u)) return !1;
            let t = permissionScopeHandler.user("add-variable-set-mode", () => VariablesBindings.addVariableSetMode(_$$g(_$$s(e), u.modes?.map(e => e.name) ?? []), u.node_id));
            return !!isValidSessionLocalID(parseSessionLocalID(t)) && (fullscreenValue.triggerAction("commit"), L(t), !0);
          }, j, eV, _),
          duplicateMode: ez(() => (e = u?.modes?.[0]?.id, t = "Mode") => {
            if (isNullish(e) || isNullish(u)) return !1;
            let i = permissionScopeHandler.user("duplicate-variable-set-mode", () => VariablesBindings.duplicateVariableSetMode(u.node_id, e, _$$g(_$$s(t), u.modes?.map(e => e.name) ?? [])));
            return !!isValidSessionLocalID(parseSessionLocalID(i)) && (fullscreenValue.triggerAction("commit"), L(i), !0);
          }, j, eV, _),
          deleteMode: ez(() => e => {
            let t = u?.node_id;
            return !!(t && permissionScopeHandler.user("delete-variable-set-mode", () => VariablesBindings.deleteVariableSetMode(t, e))) && (fullscreenValue.triggerAction("commit"), !0);
          }, j, eV, _),
          renameMode: ez(() => (e, t) => {
            let i = u?.node_id;
            return !!(i && permissionScopeHandler.user("rename-variable-set-mode", () => VariablesBindings.editVariableSetModeName(i, e, t))) && (fullscreenValue.triggerAction("commit"), !0);
          }, j, eV, _),
          setModeAsDefault: ez(() => e => {
            let t = u?.node_id;
            return !!(t && permissionScopeHandler.user("set-variable-set-mode-as-default", () => VariablesBindings.setVariableSetModeAsDefault(t, e))) && (fullscreenValue.triggerAction("commit"), !0);
          }, j, eV, _),
          moveVariableToGroup: ez(({
            variableList: e
          }) => (t, i) => {
            let n = e.find(e => e.node_id === t);
            if (!n) return !1;
            let r = Pf(n.name);
            let a = hF(n, r);
            let s = Qo(e, i);
            let o = normalizePath(i + a);
            s.some(e => e.name === o) && (o = _$$g(_$$s(o), s.map(e => e.name)));
            return permissionScopeHandler.user("move-variable-to-group", () => VariablesBindings.renameVariable(n.node_id, o));
          }, j, eV, _),
          moveSelectedGroupsToGroup: ez(({
            variableList: e,
            variableGroupList: t
          }) => i => {
            if (R.includes(i)) return !1;
            let n = t.filter(e => R.includes(e.name));
            if (0 === n.length) return !1;
            let r = t.find(e => e.name === i);
            return !!r && (k(permissionScopeHandler.user("move-variable-groups-to-group", () => function (e, t, i, n) {
              let r = new Set();
              let a = n;
              t.reverse().forEach(t => {
                let n = Qo(e, t.name);
                let s = Wx(t.name);
                let o = a ? Od(a) : null;
                n.reverse().forEach(e => {
                  let t = i.name + hF(e, s);
                  VariablesBindings.renameVariable(e.node_id, t);
                  r.add(Pf(t));
                  o && (VariablesBindings.insertVariableBetween(e.node_id, "", o?.node_id), o = e);
                });
                a = t;
              });
              fullscreenValue.triggerAction("commit");
              return Array.from(r);
            }(e, n, r, n[0]))), !0);
          }, j, eV, _),
          moveGroups: ez(({
            variableList: e,
            variableGroupList: t
          }) => (i, n, r) => {
            let a = t.reduce((e, t) => (e[t.name] = t, e), {});
            let s = a[n];
            if (!s) return;
            let o = i.filter(e => e.length > 0).map(e => a[e]).filter(Boolean);
            let {
              newGroupNames
            } = permissionScopeHandler.user("move-variable-groups", () => function (e, t) {
              let {
                groupsToMove,
                direction,
                anchorGroup
              } = t;
              let {
                movedVariables,
                newGroupNames: _newGroupNames
              } = function (e, t) {
                let i = [];
                let n = new Set();
                e.forEach(e => {
                  let r = GC(e);
                  let a = Wx(e.name);
                  r.forEach(e => {
                    let r = t + hF(e, a);
                    VariablesBindings.renameVariable(e.node_id, r) && (i.push(e), n.add(Pf(r)));
                  });
                });
                return {
                  movedVariables: i,
                  newGroupNames: n
                };
              }(groupsToMove, Wx(anchorGroup.name));
              let o = e.filter(e => !movedVariables.includes(e));
              let {
                prevVariable,
                nextVariable
              } = (() => {
                if ("before" === direction) {
                  let e = Od(anchorGroup);
                  return {
                    prevVariable: function (e, t) {
                      let i = eM(e);
                      let n = i.findIndex(e => e.node_id === t.node_id);
                      return 0 === n ? null : i[n - 1];
                    }(o, e),
                    nextVariable: e
                  };
                }
                {
                  let e = Od(anchorGroup);
                  let t = function (e, t) {
                    let i = eM(e);
                    let n = i.findIndex(e => e.node_id === t.node_id);
                    return n === i.length - 1 ? null : i[n + 1];
                  }(o, e);
                  return {
                    prevVariable: e,
                    nextVariable: t
                  };
                }
              })();
              VariablesBindings.insertVariablesBetween(movedVariables.map(e => e.node_id), prevVariable?.node_id ?? "", nextVariable?.node_id ?? "");
              return {
                newGroupNames: _newGroupNames
              };
            }(e, {
              groupsToMove: o,
              anchorGroup: s,
              direction: r
            }));
            k([...newGroupNames]);
          }, j, eV, _),
          renameGroup: ez(({
            variableList: e
          }) => (t, i) => {
            let n = !1;
            if (!i) return n;
            let r = Qo(e, t);
            r.length > 0 && (n = permissionScopeHandler.user("rename-variables", () => F$(r, t, i)), fullscreenValue.triggerAction("commit"));
            k(R.map(e => e === t ? i : e));
            return n;
          }, j, eV, _),
          createGroup: ez(() => (e, t) => (t.forEach(t => {
            if (!permissionScopeHandler.user("create-variable-group", () => VariablesBindings.renameVariable(t.node_id, US(t.name, e)))) {
              logError("variables", "Failed to rename variable", {
                variableID: t.node_id
              });
              return !1;
            }
          }), k([e]), M(!0), S(t.map(e => e.node_id)), fullscreenValue.triggerAction("commit"), !0), j, eV, _),
          ungroup: ez(({
            variableList: e
          }) => t => (permissionScopeHandler.user("ungroup-variables", () => {
            t.forEach(t => {
              !function (e) {
                e.forEach(e => {
                  VariablesBindings.renameVariable(e.node_id, US(e.name, ""));
                });
              }(Qo(e, t));
            });
          }), k(R.filter(e => !t.includes(e))), fullscreenValue.triggerAction("commit"), !0), j, eV, _),
          reorderVariables: ez(() => (e, t, i) => {
            let n = t;
            permissionScopeHandler.user("reorder-variables", () => {
              for (let t of e) VariablesBindings.insertVariableBetween(t, n ?? "", i ?? "") && (n = t);
            });
          }, j, eV, _),
          deleteVariables: ez(({
            variableList: e
          }) => t => {
            let i = new Set(t.map(e => e.node_id));
            k(R.filter(t => !Qo(e, t).every(e => i.has(e.node_id))));
          }, j, eV, _),
          renameVariable: e,
          duplicateVariables: ez(({
            variableList: e,
            variableGroupList: t
          }) => () => {
            let i = x[x.length - 1];
            let n = e[e.findIndex(e => e.node_id === i) + 1];
            let r = n?.node_id ?? "";
            let a = [];
            let s = null;
            let o = e.map(e => e.name) ?? [];
            if (x.length + e.length > RL) {
              fullscreenValue.showVisualBellLocalized("variable_limit_in_collection_reached", "variables.variable_limit_in_collection_reached", {
                variableLimit: RL
              }, !1);
              return;
            }
            permissionScopeHandler.user("duplicate-variables", () => {
              x.forEach(n => {
                let l = e.find(e => e.node_id === n);
                if (l) {
                  let e = _$$g(_$$s(l.name), o);
                  s = VariablesBindings.duplicateVariable(l.node_id, e);
                  o.push(e);
                  qQ(s, null, Pf(l.name), t);
                  a.push(s);
                  VariablesBindings.insertVariableBetween(s, i, r);
                  i = s;
                }
              });
            });
            O(s);
            S(a);
            fullscreenValue.triggerAction("commit");
          }, j, eV, _),
          copySelectedVariables: ez(() => e => {
            permissionScopeHandler.user("copy-variables", () => {
              VariablesBindings.copyVariables(x, e);
            });
          }, j, eB, _),
          pasteClipboardVariables: ez(({
            variableList: e
          }) => t => {
            let i = (x.length > 0 ? x[x.length - 1] : e[e.length - 1]?.node_id) ?? null;
            let n = A?.node_id;
            if (!n) {
              logError("pasteClipboardVariables", "Failed to paste variables, could not find variableCollectionIDStr", {
                currentVariableSetId: u?.node_id
              });
              return;
            }
            let r = i ? e[e.findIndex(e => e.node_id === i) + 1] : null;
            let a = r?.node_id ?? null;
            let s = (e.find(e => e.node_id === i)?.name ?? "").split("/");
            let o = s.length > 1 ? s.slice(0, -1).join("/") + "/" : "";
            permissionScopeHandler.user("paste-variables-into-collection", () => {
              VariablesBindings?.pasteVariablesIntoCollection(n, x.length > 0 ? o : null, i, a, t);
            });
            fullscreenValue.triggerAction("commit");
          }, j, eV, _),
          setVariableValueForMode: r,
          setVariableOverrideForMode: a,
          clearVariableOverrideForMode: s,
          detachAlias: b,
          createVariableSet: ez(() => () => {
            let e = permissionScopeHandler.user("create-variable-set", () => U(n));
            S([]);
            fullscreenValue.triggerAction("commit");
            return e;
          }, j, eB, _),
          createVariableSetExtension: getFeatureFlags().ds_extended_collections ? ez(() => async e => {
            let t = c.find(t => t.node_id === e);
            t && (await Yf(t));
            return permissionScopeHandler.user("create-variable-set-extension", () => B?.(n, e)) ?? "";
          }, j, eB, _) : null,
          renameVariableSet: ez(() => (e, t) => permissionScopeHandler.user("rename-variable-set", () => VariablesBindings.editVariableSetName(e, t)) ? (fullscreenValue.triggerAction("commit"), !0) : (logError("variables", "Failed to rename variable set", {
            variableSetID: e
          }), !1), j, eB, _),
          deleteVariableSet: ez(() => e => {
            permissionScopeHandler.user("delete-variable-set", () => VariablesBindings.deleteVariableSet(e));
            fullscreenValue.triggerAction("commit");
          }, j, eB, _),
          toggleEditVariableModal(n, a) {
            if (i?.type === ec && (t(popModalStack()), !n || 0 === n.length || !a)) return;
            let s = x.length > 1 ? x.join("-") : x[0];
            if (n && (i?.type !== ec || i?.data.modalID !== s)) {
              let i = {
                modalID: s,
                initialPosition: a,
                variableIDs: n ?? [],
                variableSetId: u?.node_id ?? "",
                onClose: function () {
                  t(popModalStack());
                  t(XE());
                  t(_$$B());
                },
                onSubmitRenameVar: e,
                onSubmitVariableValue: r,
                setVariableIsPublishable: y,
                setVariableDescription: f,
                setVariableScope: g,
                updateCodeSyntaxToken: h,
                removeCodeSyntaxToken: d,
                recordingKey: generateRecordingKey("editVariableModal", n.length > 1 ? n.join("-") : n[0])
              };
              t(showModalHandler({
                type: eu,
                data: i,
                showModalsBeneath: !0
              }));
            }
          },
          setVariableIsPublishable: y,
          setVariableDescription: f,
          setVariableScope: g,
          updateCodeSyntaxToken: h,
          removeCodeSyntaxToken: d
        }
      };
    }, [j, _, u, F, D, N, R, x, E, v, I, m, k, M, V.setVariableValueForMode, V.setVariableOverrideForMode, V.detachAlias, A?.node_id, U, n, c, B, i?.type, i?.data.modalID, t]);
  }(eU.WRITEABLE);
  let N = zG();
  let {
    showCTA,
    canShowCTA,
    modeLimit
  } = _$$z("authoring");
  let {
    showing,
    show,
    hide,
    data
  } = BK("variables-modal-context-menu");
  let B = trackFileEventWithStore();
  let V = useCallback((e, n, r, a) => {
    t && actions.toggleEditVariableModal(null);
    let s = selectedVariableIDs;
    selectedVariableIDs.includes(e) || (actions.setSelectedVariableIDs([e]), s = [e]);
    let l = s.map(e => {
      let t = variableList.find(t => t.node_id === e);
      return t ? {
        variable: t,
        variableOverride: variableOverrides[t.node_id]
      } : null;
    }).filter(isNotNullish);
    show({
      data: {
        position: {
          left: r.clientX,
          top: r.clientY
        },
        modeID: n,
        selectedVariableRows: l,
        variableSet: currentVariableSet || null,
        cellElement: r.currentTarget,
        groupNames: [],
        onCreateExpression: a
      }
    });
    B("variable_action_menu_opened", {
      variable_id: e,
      field: n ? "value" : "name",
      collection_id: currentVariableSet?.node_id,
      ...N
    });
    r.preventDefault();
  }, [t, selectedVariableIDs, show, B, currentVariableSet, N, actions, variableList, variableOverrides]);
  let G = useCallback((e, t) => {
    show({
      data: {
        position: {
          left: t.clientX,
          top: t.clientY
        },
        groupNames: selectedGroupNames,
        selectedVariableRows: [],
        variableSet: currentVariableSet || null,
        cellElement: t.currentTarget
      }
    });
    t.preventDefault();
  }, [selectedGroupNames, show, currentVariableSet]);
  let z = e => selectedVariableIDs.length > 0 && e?.key === "Enter" && !!e.shiftKey && (actions.duplicateVariables?.(), !0);
  let H = _$$rN(function (e, t, i) {
    let [n, a] = useState(null);
    let s = useLatestRef(e);
    useEffect(() => {
      let i = null !== n && Date.now() - n < 250;
      e.length > (s?.length ?? 0) && i && (t(e.filter(e => !s?.includes(e)).map(e => e.node_id)), a(null));
    }, [e, s, n, t]);
    return useCallback(e => {
      a(Date.now());
      i?.(e);
    }, [i, a]);
  }(variableList, actions.setSelectedVariableIDs, actions.pasteClipboardVariables), everyLocalSubscription(variableList));
  let W = useCallback((e, t) => {
    t === zy.COPY && (actions.copySelectedVariables?.({
      action: "keyboard_shortcut",
      ...N
    }), e.accept(), e.shouldPropagate = !1);
    t === zy.PASTE && (H?.({
      action: "keyboard_shortcut",
      ...N
    }), e.accept(), e.shouldPropagate = !1);
  }, [actions, H, N]);
  let K = useHandleInputEvent("variablesModal", "keydown", e => {
    z(e.event) && (e.accept(), z(e));
  });
  let Y = _$$P();
  let q = isNotNullish(currentVariableSet);
  let {
    filterState,
    setQuery,
    clearFilterState,
    clearQuery,
    toggleTypeFilter,
    setCollectionFilter
  } = r$();
  let et = useCallback(() => {
    actions.copySelectedVariables?.({
      action: "action_menu",
      ...N
    });
  }, [actions, N]);
  let ei = useCallback(() => {
    H?.({
      action: "action_menu",
      ...N
    });
  }, [H, N]);
  let en = yp().length > 0;
  let {
    tableRowItems,
    tableRowItemsEmptyReason,
    filteredTableRowCount,
    unfilteredTableRowCount
  } = Hk({
    variableGroupList,
    selectedGroupNames,
    filterState,
    currentVariableSet
  });
  let ed = tableRowItems.filter(e => "variable" === e.type).length;
  let ep = currentVariableSet?.node_id ?? "";
  _h({
    resultsCount: ed,
    filterState,
    emptyReason: tableRowItemsEmptyReason,
    currentVariableSetId: ep
  });
  BT({
    filterState,
    resultsCount: ed,
    currentVariableSetId: ep
  });
  q7({
    currentVariableSetId: ep,
    unfilteredTableRowCount,
    filteredTableRowCount,
    clearFilterState,
    clearQuery
  });
  return jsx(_$$P3, {
    currentVariableSet,
    children: jsxs(i2, {
      modalIdentifier: $$i50,
      onWindowCopy: () => {
        actions.copySelectedVariables?.({
          action: "keyboard_shortcut",
          ...N
        });
      },
      onWindowPaste: () => {
        H?.({
          action: "keyboard_shortcut",
          ...N
        });
      },
      handleClipboard: W,
      handleKeyDown: K,
      renderTitle: ({
        setIsMaximized: e,
        isMaximized: t
      }) => jsx(iU, {
        canShowModesCTA: canShowCTA,
        clearFilterState,
        currentVariableSet,
        filterState,
        groups: variableGroupList,
        isCurrentVariableSetEmpty: 0 === variableList.length,
        isMaximized: t,
        isSidebarOpen,
        modeLimit,
        onCreateMode: actions.createMode,
        onSidebarToggle: e => actions.setIsSidebarOpen(e),
        recordingKey: generateRecordingKey("variablesModal", "title"),
        selectedGroup: selectedGroupNames[0] ?? null,
        selectedVariableIDs,
        setCollectionFilter,
        setIsMaximized: e,
        setQuery,
        setRenamingVariableID: actions.setRenamingVariableID,
        setSelectedVariableIDs: actions.setSelectedVariableIDs,
        showModesCTA: showCTA,
        toggleTypeFilter
      }),
      hasVariables: q,
      isSidebarOpen,
      children: [jsxs("div", {
        className: kL,
        style: {
          "--propertiesPanelWidth": `${Y}px`
        },
        "data-testid": "variables-modal-container",
        children: [isSidebarOpen && currentVariableSet && jsx(t1, {
          groups: variableGroupList,
          isShowingGuids: e,
          onChangeVariableSet: actions.setCurrentVariableSetID,
          onContextMenu: G,
          onCreateVariableSet: actions.createVariableSet,
          onCreateVariableSetExtension: actions.createVariableSetExtension,
          onDeleteVariableSet: actions.deleteVariableSet,
          onMoveGroups: actions.moveGroups,
          onMoveSelectedGroupsToGroup: actions.moveSelectedGroupsToGroup,
          onMoveVariableToGroup: actions.moveVariableToGroup,
          onRenameGroup: actions.renameGroup,
          onRenameVariableSet: actions.renameVariableSet,
          onSidebarToggle: actions.setIsSidebarOpen,
          recordingKey: "variablesModal",
          selectedGroupNames,
          selectedVariableIDs,
          setSelectedGroupNames: actions.setSelectedGroupNames,
          variableSet: currentVariableSet
        }), jsx(hh, {
          children: jsx("div", {
            className: ok,
            children: void 0 === tableRowItemsEmptyReason && currentVariableSet ? jsxs(_$$k2, {
              name: "variables_modal_table",
              children: [jsx(it, {
                clearVariableOverrideForMode: actions.clearVariableOverrideForMode,
                detachAlias: actions.detachAlias,
                filterState,
                isShowingGuids: e,
                onCreateMode: actions.createMode,
                onDeleteMode: actions.deleteMode,
                onDuplicateMode: actions.duplicateMode,
                onMoveVariableToGroup: actions.moveVariableToGroup,
                onRenameGroup: actions.renameGroup,
                onRenameMode: actions.renameMode,
                onRenameVariable: actions.renameVariable,
                onReorderVariables: actions.reorderVariables,
                onSetModeAsDefault: actions.setModeAsDefault,
                onVariableContextMenu: V,
                recordingKey: "variablesModal",
                renamingModeGUID,
                renamingVariableID,
                selectedVariableIDs,
                setRenamingModeGUID: actions.setRenamingModeGUID,
                setRenamingVariableID: actions.setRenamingVariableID,
                setSelectedVariableIDs: actions.setSelectedVariableIDs,
                setVariableOverrideForMode: actions.setVariableOverrideForMode,
                setVariableValueForMode: actions.setVariableValueForMode,
                tableRowItems,
                toggleEditVariableModal: actions.toggleEditVariableModal,
                variableOverrides,
                variableSet: currentVariableSet
              }, selectedGroupNames.join("-")), actions.setRenamingVariableID && !getFeatureFlags().ds_variables_modal_action_bar && _$$H(variableGroupList) && hO(variableGroupList) && jsx("div", {
                className: qr,
                children: jsx(fr, {
                  id: "footer-create-variable-button",
                  recordingKey: "variablesModal",
                  groups: variableGroupList,
                  selectedGroup: selectedGroupNames[0],
                  setRenamingVariableID: actions.setRenamingVariableID,
                  variableSetID: currentVariableSet.node_id,
                  selectedVariableIDs,
                  setSelectedVariableID: actions.setSelectedVariableIDs
                })
              })]
            }) : jsx(j$, {
              clearFilterState,
              clearQuery,
              groups: variableGroupList,
              hasVariableSets: en,
              mayShowCreateVariableAction: !currentVariableSet || !isExtension(currentVariableSet),
              recordingKey: "variablesModal",
              selectedGroup: selectedGroupNames[0],
              setRenamingVariableID: actions.setRenamingVariableID,
              setSelectedVariableID: actions.setSelectedVariableIDs,
              tableRowItemsEmptyReason,
              variableSetID: currentVariableSet?.node_id
            })
          })
        })]
      }), showing && data && jsx(eZ, {
        allVariables: variableList,
        contextMenuData: data,
        detachAlias: actions.detachAlias,
        hasGroups: variableGroupList.length > 1,
        hideContextMenu: hide,
        onCopyVariables: et,
        onCreateGroup: actions.createGroup,
        onDeleteEmptyGroup: lQ,
        onDeleteVariables: actions.deleteVariables,
        onDuplicateVariables: actions.duplicateVariables,
        onPasteVariables: ei,
        onSetAllVariablesSelected: lQ,
        onUngroup: actions.ungroup,
        recordingKey: generateRecordingKey("variablesModal", "contextMenuDropdown"),
        toggleEditVariableModal: actions.toggleEditVariableModal
      }), jsx(Q8, {})]
    })
  });
}, "VariablesModal", ModalSupportsBackground.YES);
export const y = $$i50;