import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback, useMemo, useId, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { IconButton } from "../905/443068";
import { setupDragHandler } from "../905/97346";
import { O as _$$O } from "../905/487602";
import { A as _$$A } from "../905/24328";
import { StateHierarchy, Fullscreen, PrototypingTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { areSessionLocalIDsEqual, defaultSessionLocalID, sessionLocalIDToString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import y from "classnames";
import { parsePxNumber, parsePercentNumber } from "../figma_app/783094";
import { d as _$$d } from "../figma_app/429226";
import { generateRecordingKey, useHandleKeyboardEvent, SKIP_RECORDING } from "../figma_app/878298";
import { captureMessage } from "../905/11";
import { Point } from "../905/736624";
import { P as _$$P } from "../905/347284";
import { renderI18nText, getI18nString } from "../905/303541";
import { o$ } from "../figma_app/8833";
import { fullscreenValue } from "../figma_app/455680";
import { fG, C4 } from "../figma_app/540726";
import { isValidValue, normalizeValue, MIXED_MARKER, valueOrFallback, isInvalidValue } from "../905/216495";
import { useAppModelProperty } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { I as _$$I } from "../5421/927984";
import { trackPrototypeScaleChangeEvent } from "../figma_app/2590";
import { ClipboardOperation } from "../figma_app/915202";
import { KindEnum } from "../905/129884";
import { KeyboardReceiver } from "../905/826900";
import { ht } from "../figma_app/741785";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { useSingleEffect } from "../905/791079";
import { YT, Oz, Qe, dJ, eG as _$$eG, uU, n6, iC, zt } from "../figma_app/84580";
import { hh } from "../905/417232";
import { AutoLayout } from "../905/470281";
import { rp, Zk, fI, U8, JU, nV } from "../figma_app/626177";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { registerTooltip } from "../905/524523";
import { A as _$$A2 } from "../svg/420906";
import { j as _$$j, u as _$$u } from "../642/638075";
import { rC } from "../5421/658325";
import { useIsFullscreenSitesView } from "../905/561485";
import { kc } from "../figma_app/85384";
import { P as _$$P2 } from "../5421/146016";
import { Op, qQ, Vp } from "../figma_app/405038";
import { A as _$$A3 } from "../figma_app/121266";
import { Y as _$$Y2 } from "../5421/483739";
import { getBigNudgeAmount } from "../figma_app/740163";
import { TimeMillisecondsInput, TimeDurationInput } from "../figma_app/178475";
import { GameControllerListener } from "../905/550169";
import { parseKeyCodes, getGamepadInputLabel, formatKeyboardShortcut, MODIFIER_KEY_CODES, KEY_CODE_MAP, keyboardEventToKeyCodes } from "../figma_app/800999";
import { A as _$$A4 } from "../897/590880";
import { selectWithShallowEqual } from "../905/103090";
import { Q as _$$Q } from "../figma_app/67145";
import { isInteractionPathCheck } from "../figma_app/897289";
import { VG, EX, JV, Eq } from "../figma_app/451499";
import { dq, e7 as _$$e } from "../figma_app/316316";
import { NE } from "../3276/373312";
import { useDropdownState } from "../905/848862";
import { l6, c$, sK } from "../905/794875";
import { Ay, HS } from "../figma_app/976110";
import { dU, sQ, BX, Lp, Gl, Ym, vE, eU as _$$eU } from "../897/934363";
import { ButtonWide, Button } from "../905/521428";
import { Link } from "../905/438674";
import { Label } from "../905/270045";
import { k as _$$k2 } from "../905/582200";
import { VisualBellActions } from "../905/302958";
import { zZ } from "../figma_app/299859";
import { lg } from "../figma_app/651753";
import { t as _$$t2 } from "../5421/711842";
import { b as _$$b } from "../5421/909298";
import { DraggableModalManager, ArrowPosition, HEADER_HEIGHT } from "../905/748636";
import { useIsCodeViewPanel } from "../905/298663";
import { x as _$$x } from "../897/253631";
import { c as _$$c, P as _$$P3 } from "../905/200950";
import { prototypeInteractionModalWidth, prototypeInteractionModalExpandedWidth } from "../figma_app/786175";
let o;
var f = y;
let Y = registerTooltip("prototype_action_info", function () {
  return jsxs("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyCenter.$,
    children: [jsx(SvgComponent, {
      className: "prototype_action_info_tooltip--prototypeDestinationInfoIcon--GeQWS",
      svg: _$$A2
    }), jsx("span", {
      className: cssBuilderInstance.flexGrow1.m6.$,
      style: {
        maxWidth: 144
      },
      children: renderI18nText("proto.prototype_panel.use_the_circular_node_to_connect_the_selected_object_to_another_frame_tooltip")
    })]
  });
}, () => ({
  unconstrainWidth: !0
}));
function es({
  onChange: e,
  value: t,
  shouldFocusKeyCaptureField: n,
  setShouldFocusKeyCaptureField: o
}) {
  let a;
  let l = parseKeyCodes(t?.keyCodes);
  let s = t => e({
    keyCodes: t,
    triggerDevice: "KEYBOARD"
  });
  let [d, c] = useState(!1);
  let p = useRef(null);
  useEffect(() => {
    (!t || !t.keyCodes || 0 === t.keyCodes.length) && n && p.current && (o(!1), p.current.focus(), c(!0));
  }, [o, n, t]);
  useEffect(() => {
    if (!d) return () => {};
    let t = new GameControllerListener();
    let n = t.onPress(t => {
      e({
        keyCodes: [t.buttons[0]],
        triggerDevice: t.controllerType
      });
      requestAnimationFrame(() => {
        document.activeElement instanceof HTMLElement && document.activeElement.blur();
      });
    });
    t.start();
    return () => {
      n.release();
      t.end();
    };
  }, [e, d]);
  let u = null;
  let h = getGamepadInputLabel(t);
  d ? a = jsx(ed, {
    children: renderI18nText("proto.keyCapture.press_key_lowercase")
  }) : t?.triggerDevice === "KEYBOARD" && l ? u = formatKeyboardShortcut(l) : h ? u = h : a = jsx(ed, {
    children: renderI18nText("proto.keyCapture.click_to_set_key")
  });
  return jsx(rp, {
    ref: p,
    className: "prototype_key_capture_field--root--bD21s",
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": u && u.length > 10 ? u : null,
    onFocus: () => c(!0),
    onBlur: () => c(!1),
    onKeyDown: e => {
      e.preventDefault();
      e.stopPropagation();
      let t = e.which || e.keyCode;
      !MODIFIER_KEY_CODES.has(t) && KEY_CODE_MAP[t] && (t === l?.keyCode && e.repeat ? s(keyboardEventToKeyCodes({
        keyCode: t,
        metaKey: e.metaKey || l.metaKey,
        shiftKey: e.shiftKey || l.shiftKey,
        ctrlKey: e.ctrlKey || l.ctrlKey,
        altKey: e.altKey || l.altKey
      })) : s(keyboardEventToKeyCodes({
        ...e,
        keyCode: t
      })), document.activeElement instanceof HTMLElement && document.activeElement.blur());
    },
    recordingKey: "keycapture",
    children: u ?? a
  });
}
function ed({
  children: e
}) {
  return jsx("span", {
    className: "prototype_key_capture_field--placeholder--gWUKF",
    children: e
  });
}
let e_ = l6;
let eb = c$;
let ev = new VG();
let eI = new EX();
let eC = new JV();
let eE = new Eq();
function ej(e) {
  let t = useDispatch();
  let n = useDropdownState();
  let o = useIsFullscreenSitesView();
  let {
    showVideoV2Triggers
  } = selectWithShallowEqual(e => ({
    allStatesInSelection: e.mirror.selectionProperties.stateGroupSelectionInfo?.mode === StateHierarchy.STATE,
    allTopLevelFramesInSelection: !!e.mirror.selectionProperties.allTopLevelFramesInSelection,
    showVideoV2Triggers: dq(e.mirror.selectionProperties)
  }));
  let s = useAtomWithSubscription(NE);
  let d = t => {
    let n = jsx("div", {
      className: "transition_interaction_dropdown--prototypeInteractionIcon---njby",
      children: _$$e(t)
    });
    return jsx(eb, {
      value: t,
      icon: n,
      recordingKey: generateRecordingKey(e, t),
      disabled: !function (t) {
        if ("NONE" === t) return !0;
        let n = !!e.interactionsOnSelectedNodes && e.interactionsOnSelectedNodes.every(t => e.interactionsOnSelectedNodes && areSessionLocalIDsEqual(t.sourceNodeID, e.interactionsOnSelectedNodes[0].sourceNodeID)) && !isValidValue(e.property);
        let o = function () {
          if (e.interactionsOnSelectedNodes) return new Set(e.interactionsOnSelectedNodes.map(e => e?.event?.interactionType).filter(e => void 0 !== e));
        }()?.has(t) && isValidValue(e.property) && e.property !== t;
        return (!n && !o || !!["ON_KEY_DOWN", "DRAG", "ON_VOICE", "ON_MEDIA_HIT"].includes(t)) && ("AFTER_TIMEOUT" === t ? !e.interactionContainsOpenLinkAction : "ON_MEDIA_HIT" === t || "ON_MEDIA_END" === t ? showVideoV2Triggers : (!e.interactionContainsOpenLinkAction || "ON_CLICK" === t || "MOUSE_UP" === t) && (!e.interactionContainsUpdateMediaRuntime || "ON_HOVER" !== t && "ON_PRESS" !== t && "DRAG" !== t) && (!e.interactionOnlyContainsBack || "ON_HOVER" !== t && "ON_PRESS" !== t));
      }(t)
    }, t);
  };
  let c = (o ? [] : ["NONE"]).map(d);
  let p = ["ON_CLICK", ...(o ? [] : ["DRAG"]), "ON_HOVER", "ON_PRESS", "ON_KEY_DOWN"].map(d);
  let h = ["MOUSE_ENTER", "MOUSE_LEAVE", "MOUSE_DOWN", "MOUSE_UP"].map(d);
  let x = (o ? [] : ["ON_MEDIA_HIT", "ON_MEDIA_END"]).map(d);
  let y = ["AFTER_TIMEOUT"].map(d);
  let f = s ? "ON_MEDIA_HIT" !== e.property ? eI : eE : "ON_MEDIA_HIT" !== e.property ? ev : eC;
  let _ = useCallback(e => e - 24, []);
  let b = [...c, !o && jsx(sK, {}, "select1"), ...p, jsx(sK, {}, "select2"), ...h, !o && jsx(sK, {}, "select3"), ...y, ...(!o && showVideoV2Triggers ? [jsx(sK, {}, "select4"), ...x] : [])];
  let [I, C] = useState(void 0);
  let E = jsx(_$$Q, {
    setMaxWidth: C,
    options: b,
    formatOption: e => e && e.props.value ? f.format(e.props.value) : "",
    getIcon: () => _$$e("AFTER_TIMEOUT")
  });
  let j = normalizeValue(e.property);
  return jsxs(Fragment, {
    children: [jsx(e_, {
      ariaLabel: e.ariaLabel,
      ariaLabelledBy: e.ariaLabelledBy,
      chevronClassName: "transition_interaction_dropdown--chevron--pyzhq",
      className: e.className,
      dataTestId: "interaction-select",
      dispatch: t,
      dropdownAlignment: _,
      dropdownShown: n,
      dropdownWidth: I,
      formatter: f,
      hideDropdownWhenContainerMoves: !isInteractionPathCheck(),
      icon: j ? _$$e(j) : void 0,
      id: "interaction-type-select",
      onChange: e.onChange,
      property: e.property,
      recordingKey: generateRecordingKey(e, "select"),
      children: b
    }), E]
  });
}
let eS = {
  keyCodes: [],
  triggerDevice: "KEYBOARD"
};
function eA(e, t, n) {
  return jsx(_$$A4, {
    label: e,
    input: t,
    appendedClassName: n ? void 0 : dU
  });
}
function ew(e) {
  let {
    detailPropsMultipleActions,
    interactionsOnSelectedNodesAndComponents,
    updateSelectionProperties
  } = Ay(e.category);
  let {
    interactionType,
    transitionTimeout = .8,
    mediaHitTime = 0,
    interactionMaintained = !1,
    interactionDuration = .3,
    keyTrigger = eS
  } = detailPropsMultipleActions.interactionEvent;
  let h = useAtomWithSubscription(_$$j);
  let m = useMemo(() => new Set(h.map(e => JSON.stringify(e))).size, [h]);
  let x = useMemo(() => !interactionType && m > 1 || interactionType && m > 0 ? MIXED_MARKER : interactionType || "NONE", [interactionType, m]);
  let y = (e, t) => {
    if (e.connectionType === t) return e;
    if ("CONDITIONAL" === e.connectionType) for (let n of isValidValue(e.conditionalActions) && e.conditionalActions ? e.conditionalActions : []) {
      let e = n.actions ? n.actions.find(e => e.connectionType === t) : void 0;
      if (void 0 !== e) return e;
    }
    return null;
  };
  let f = void 0 !== detailPropsMultipleActions.interactionActions.find(e => y(e, "URL"));
  let _ = void 0 !== detailPropsMultipleActions.interactionActions.find(e => y(e, "UPDATE_MEDIA_RUNTIME"));
  let b = 1 === detailPropsMultipleActions.interactionActions.length && "BACK" === detailPropsMultipleActions.interactionActions[0].connectionType;
  let I = void 0 !== detailPropsMultipleActions.interactionActions.find(e => y(e, "CONDITIONAL"));
  return function (e) {
    let t = useDispatch();
    let n = e.updateSelectionProperties;
    let o = getBigNudgeAmount();
    let [l, s] = useState(!1);
    let d = YT();
    let c = d === Oz.SINGLE_COL;
    let p = d === Oz.TWO_COL;
    let u = !0 === normalizeValue(e.maintained);
    let h = normalizeValue(e.keyTrigger);
    let m = "ON_KEY_DOWN" === normalizeValue(e.interactionType);
    let x = "AFTER_TIMEOUT" === normalizeValue(e.interactionType);
    let g = "ON_MEDIA_HIT" === normalizeValue(e.interactionType);
    let y = ["MOUSE_IN", "MOUSE_OUT", "MOUSE_ENTER", "MOUSE_LEAVE", "MOUSE_DOWN", "MOUSE_UP"].indexOf(normalizeValue(e.interactionType) || "") > -1;
    let f = useId();
    let _ = jsx(ej, {
      ariaLabel: getI18nString("proto.trigger"),
      ariaLabelledBy: f,
      className: sQ,
      interactionContainsOpenLinkAction: e.interactionContainsOpenLinkAction,
      interactionContainsUpdateMediaRuntime: e.interactionContainsUpdateMediaRuntime,
      interactionOnlyContainsBack: e.interactionOnlyContainsBack,
      interactionsOnSelectedNodes: e.interactionsOnSelectedNodes,
      onChange: o => {
        globalPerfTimer.start("interaction_details_changed");
        n({
          interactionType: o
        });
        t(trackPrototypeScaleChangeEvent({
          name: "Prototype Interaction Type Changed",
          params: {
            newType: o,
            oldType: valueOrFallback(e.interactionType, "MIXED")
          }
        }));
        "ON_KEY_DOWN" === o && s(!0);
      },
      property: e.interactionType,
      recordingKey: generateRecordingKey(e, "interactionDropdown")
    });
    let b = c ? jsx(_$$A4, {
      labelId: f,
      label: getI18nString("proto.trigger"),
      input: _
    }) : jsx("div", {
      className: BX,
      children: _
    });
    let I = jsxs(Fragment, {
      children: [x && eA(getI18nString("proto.delay"), jsx(TimeMillisecondsInput, {
        className: Lp,
        "data-tooltip": getI18nString("proto.trigger.after_delay_timeout"),
        "data-tooltip-type": KindEnum.TEXT,
        dataTestId: "timeout-input",
        dispatch: t,
        inputClassName: Gl,
        max: 20,
        onValueChange: e => {
          n({
            transitionTimeout: e
          });
        },
        recordingKey: generateRecordingKey(e, "timeoutInput"),
        scrubMultiplier: o / 1e3,
        tooltipForScreenReadersOnly: !0,
        value: e.timeout,
        wheelMultiplier: o / 1e3,
        children: jsx(_$$A3, {})
      }), c), m && eA(getI18nString("proto.key"), jsx(es, {
        onChange: e => {
          n({
            keyTrigger: e
          });
        },
        value: h,
        shouldFocusKeyCaptureField: l,
        setShouldFocusKeyCaptureField: s
      }), c), g && eA(getI18nString("proto.time"), jsx(TimeDurationInput, {
        className: Ym,
        "data-tooltip": getI18nString("proto.trigger.video_hit_time"),
        "data-tooltip-type": KindEnum.TEXT,
        dataTestId: "mediaHitTime-input",
        dispatch: t,
        displayFractions: !0,
        inputClassName: vE,
        max: 3600,
        onValueChange: e => {
          n({
            mediaHitTime: e
          });
        },
        recordingKey: generateRecordingKey(e, "mediaHitTimeInput"),
        scrubMultiplier: o / 1e3,
        tooltipForScreenReadersOnly: !0,
        value: e.mediaHitTime,
        wheelMultiplier: o / 1e3,
        children: jsx(_$$Y2, {})
      }), c), y && eA(getI18nString("proto.delay"), jsx(TimeMillisecondsInput, {
        allowEmpty: !0,
        className: Lp,
        "data-tooltip": getI18nString("proto.trigger.after_delay_timeout"),
        "data-tooltip-type": KindEnum.TEXT,
        dataTestId: "duration-input",
        dispatch: t,
        inputClassName: Gl,
        min: 0,
        onValueChange: e => {
          n(e && e > 0 ? {
            interactionMaintained: !0,
            interactionDuration: e
          } : {
            interactionMaintained: !1
          });
        },
        placeholder: getI18nString("proto.trigger.add_delay_placeholder"),
        recordingKey: generateRecordingKey(e, "delayInput"),
        scrubMultiplier: o / 1e3,
        tooltipForScreenReadersOnly: !0,
        value: u ? e.interactionDuration : void 0,
        wheelMultiplier: o / 1e3,
        children: jsx(_$$A3, {})
      }), c)]
    });
    return jsxs("div", {
      className: p ? _$$eU : void 0,
      children: [b, I]
    });
  }({
    ...e,
    updateSelectionProperties,
    interactionType: x,
    interactionContainsOpenLinkAction: f,
    interactionContainsUpdateMediaRuntime: _,
    interactionOnlyContainsBack: b,
    interactionContainsConditionalAction: I,
    timeout: transitionTimeout,
    maintained: interactionMaintained,
    interactionDuration,
    mediaHitTime,
    keyTrigger,
    interactionsOnSelectedNodes: interactionsOnSelectedNodesAndComponents,
    recordingKey: generateRecordingKey(e.recordingKey, Qe)
  });
}
let ek = "prototype_interaction_edit_modal--contentContainer--bo2b4";
let eP = "prototype_interaction_edit_modal--ui3TwoColContentContainer--x9vrG";
let eO = "prototype_interaction_edit_modal--ui3SingleColContentContainer--uF-ir";
let eL = "prototype_interaction_edit_modal--ui3CollapsedModalHeaderButtons--7yPuD";
let eD = "prototype_interaction_edit_modal--dividerHorizontal--3wvnB";
let eR = "prototype_interaction_edit_modal--ui3InteractionsPanelContentRight--bVfG8";
function eM(e) {
  let {
    selectedInteractions,
    makeUpdateSelectionPropertiesForActionIndex,
    makeUpdateMultipleDestinationNodesForActionIndex,
    differentLengthActions,
    mergedActions
  } = Ay(e.category, e.filterOutNoneActions);
  let s = void 0 !== mergedActions.find(e => "CONDITIONAL" === e.connectionType);
  let {
    selectedActionIndex,
    onSelect
  } = e;
  let p = YT();
  let u = p === Oz.SINGLE_COL;
  let h = p === Oz.TWO_COL;
  let {
    expandedRows,
    setExpandedRows,
    deleteButtonPressed,
    newActionIndexPath,
    resetNewActionIndexPath
  } = e;
  let I = useAtomWithSubscription(_$$j);
  let C = useIsFullscreenSitesView() && kc({
    interactionType: e.interactionType,
    actions: mergedActions
  });
  useEffect(() => {
    newActionIndexPath && !newActionIndexPath?.equals([]) && (onSelect(newActionIndexPath.path, !0), resetNewActionIndexPath());
  }, [expandedRows, setExpandedRows, newActionIndexPath, resetNewActionIndexPath, onSelect]);
  let E = useCallback(e => {
    expandedRows.find(t => t.equals(e)) ? setExpandedRows(expandedRows.filter(t => !t.equals(e))) : setExpandedRows([...expandedRows, new Op(e)]);
  }, [expandedRows, setExpandedRows]);
  let N = useCallback(n => {
    var o = n.dropItem;
    if (isInvalidValue(o) || qQ(n.dragItem.action)) return;
    let i = e.interactionsOnSelectedNodes;
    if (!i || !selectedInteractions) return;
    for (var r = 0; r < selectedInteractions?.length; r++) {
      let e = selectedInteractions[r];
      if (e && e.actions) {
        let i = e.actions;
        let a = Vp(i, selectedActionIndex, expandedRows, o, n.position);
        if (a.newSelectedActionIndex && h && onSelect(a.newSelectedActionIndex.path, !0), a.newActions && (selectedInteractions[r].actions = a.newActions), a.newExpandedRows) {
          if (h) {
            let e = [];
            a.newActions?.forEach((t, n) => {
              "CONDITIONAL" === t.connectionType && e.push(new Op([n]));
            });
            setExpandedRows(e);
          } else setExpandedRows(a.newExpandedRows);
        }
      }
    }
    let a = i.map(e => selectedInteractions.find(t => t.id === e.id) ?? e);
    fullscreenValue.updateSelectionProperties({
      prototypeInteractions: a
    });
  }, [expandedRows, setExpandedRows, e.interactionsOnSelectedNodes, selectedActionIndex, selectedInteractions, onSelect, h]);
  let S = f()({
    "prototype_interaction_edit_modal--panelUI3--WK3CN": !0,
    "prototype_interaction_edit_modal--panelUI3TwoColumn--V5gi4": h
  });
  return C ? jsx(rC, {
    isInteractionModal: !0
  }) : jsx(hh, {
    children: jsxs(Zk, {
      className: S,
      children: [e.shouldHideTitle ? null : jsx(fI, {
        children: jsx(U8, {
          title: getI18nString("proto.interaction.interaction"),
          dataTooltipContentKey: Y,
          dataTooltipTimeoutDelay: 50
        })
      }), jsx("div", {
        children: jsxs(Fragment, {
          children: [u && (0 === I.length ? jsxs(Fragment, {
            children: [jsx(ew, {
              category: e.category,
              recordingKey: dJ,
              headerButtons: jsx(Fragment, {})
            }), jsx("div", {
              className: "prototype_interaction_edit_modal--dividerHorizontalUI3--HMCeE"
            })]
          }) : jsx(AutoLayout, {
            direction: "horizontal",
            padding: {
              horizontal: 16,
              vertical: 8
            },
            children: jsx(JU, {
              children: renderI18nText("fullscreen.mixed")
            })
          })), differentLengthActions && jsx(AutoLayout, {
            direction: "horizontal",
            padding: {
              horizontal: 16,
              vertical: 8
            },
            children: jsx(nV, {
              children: renderI18nText("fullscreen.properties_panel.click_plus_to_replace_mixed_content")
            })
          }), !differentLengthActions && 0 === I.length && jsx(Fragment, {
            children: mergedActions?.map((r, a) => jsx(_$$P2, {
              action: r,
              actionIndexPath: [a],
              autoOpenExpressionBuilder: e.autoOpenExpressionBuilder,
              autoOpenVariablePicker: e.autoOpenVariablePicker,
              expandedRows,
              interactionType: e.interactionType,
              isNarrowPanel: !s,
              isNestedInConditional: !1,
              numActions: mergedActions.length,
              onDeleteAction: () => deleteButtonPressed(a),
              onDrop: N,
              onExpand: E,
              onNewActionAdded: e.onNewActionAdded,
              onSelect: e.onSelect,
              recordingKey: generateRecordingKey(e.recordingKey, _$$eG, a),
              selectedActionIndex,
              selectedInteractions,
              setAutoOpenExpressionBuilder: e.setAutoOpenExpressionBuilder,
              stateManagementVersion: e.stateManagementVersion,
              updateMultipleDestinationNodes: makeUpdateMultipleDestinationNodesForActionIndex(a),
              updateSelectionProperties: makeUpdateSelectionPropertiesForActionIndex(a)
            }, a))
          })]
        })
      })]
    })
  });
}
function e$({
  transition: e,
  recordingKey: t,
  updateSelectionProperties: n,
  stateManagementVersion: o,
  selectedInteractions: r
}) {
  let l = useDispatch();
  let s = YT() === Oz.SINGLE_COL;
  let d = s ? ButtonWide : Button;
  let c = 1 === o ? jsx(d, {
    variant: "secondary",
    onClick: () => {
      analyticsEventManager.trackDefinedEvent("prototype.state_management_noodle_reverted", {
        num_interactions: r.length
      });
      n({
        stateManagementVersion: 0
      });
    },
    recordingKey: generateRecordingKey(t, "revert-state-management-version"),
    htmlAttributes: {
      "data-testid": "revert-state-management-button"
    },
    children: renderI18nText("proto.state_management.revert_controls")
  }) : jsx(d, {
    variant: "primary",
    onClick: () => {
      for (let t of (analyticsEventManager.trackDefinedEvent("prototype.state_management_noodle_upgraded", {
        num_interactions: r.length,
        preserve_scroll_position_value: !!e.preserveScroll
      }), r)) uU(t.stateManagementVersion) && t.id && t.sourceNodeID && zZ.recordInteractionUpgraded(t.id, t.sourceNodeID);
      n({
        ...(isValidValue(e.preserveScroll) && isValidValue(o) ? {
          transitionResetScrollPosition: !e.preserveScroll
        } : {}),
        stateManagementVersion: 1
      });
      l(VisualBellActions.enqueue({
        type: "state-management-updated",
        message: getI18nString("proto.state_management.visual_bell_updated_message"),
        button: {
          text: getI18nString("proto.state_management.visual_bell_update_all"),
          action: () => {
            fullscreenValue.triggerActionInUserEditScope("update-interactions-state-management-on-page");
            l(VisualBellActions.enqueue({
              type: "state-management-updated-all",
              message: getI18nString("proto.state_management.visual_bell_update_all_message")
            }));
          }
        }
      }));
    },
    recordingKey: generateRecordingKey(t, "update-state-management-version"),
    children: renderI18nText("proto.state_management.update_controls")
  });
  let p = 1 === o ? renderI18nText("proto.state_management.new_controls") : renderI18nText("proto.state_management.old_controls");
  let u = jsx(Link, {
    trusted: !0,
    newTab: !0,
    href: "https://help.figma.com/hc/articles/14397859494295",
    children: renderI18nText("proto.state_management.controls_help_link_new")
  });
  let h = jsxs("div", {
    className: "prototype_state_management_version_panel--containerUI3--V5tpG",
    children: [jsx(Label, {
      children: p
    }), jsx(Label, {
      children: u
    }), c]
  });
  let m = jsxs("div", {
    className: "prototype_state_management_version_panel--containerUI3TwoCol--AAp8u",
    children: [jsx("span", {
      className: "prototype_state_management_version_panel--labelWrapperUI3--37g5A",
      children: jsx(Label, {
        children: p
      })
    }), jsx("span", {
      className: "prototype_state_management_version_panel--helpLinkWrapperUI3--BttuC",
      children: u
    }), c]
  });
  return jsx(_$$k2, {
    name: "prototype_state_management_version_panel",
    children: jsx(Zk, {
      className: "prototype_state_management_version_panel--panelUI3--8-Db5",
      children: s ? h : m
    })
  });
}
let ez = "created_noodle";
function eW(e) {
  let {
    shouldHideTitle = !1,
    category,
    newActionIndexPath
  } = e;
  let r = YT() === Oz.TWO_COL;
  let {
    detailProps,
    detailPropsMultipleActions,
    interactionsOnSelectedNodesAndComponents,
    updateSelectionProperties,
    selectedInteractions
  } = Ay(e.category, e.filterOutNoneActions);
  useSingleEffect(() => {
    if (void 0 !== globalPerfTimer.get(ez)) {
      let e = globalPerfTimer.stop(ez);
      trackEventAnalytics(ez, {
        elapsedMs: e,
        numConnectors: selectedInteractions.length
      }, {
        forwardToDatadog: !0
      });
    }
  });
  let {
    showPanel,
    transition
  } = n6(detailProps, detailPropsMultipleActions, selectedInteractions);
  let {
    interactionType = "NONE",
    interactionMaintained = !1,
    interactionDuration = .3,
    keyTrigger = eS,
    transitionTimeout = .8,
    mediaHitTime = 0
  } = detailPropsMultipleActions.interactionEvent;
  let _ = iC(selectedInteractions);
  let b = jsx(eM, {
    autoOpenExpressionBuilder: e.autoOpenExpressionBuilder,
    autoOpenVariablePicker: e.autoOpenVariablePicker,
    category,
    deleteButtonPressed: e.deleteButtonPressed,
    expandedRows: e.expandedRows,
    filterOutNoneActions: e.filterOutNoneActions,
    interactionDuration,
    interactionType,
    interactionsOnSelectedNodes: interactionsOnSelectedNodesAndComponents,
    keyTrigger,
    maintained: interactionMaintained,
    mediaHitTime,
    newActionIndexPath,
    onNewActionAdded: e.onNewActionAdded,
    onSelect: e.onSelect,
    recordingKey: generateRecordingKey(e, Qe),
    resetNewActionIndexPath: e.resetNewActionIndexPath,
    selectedActionIndex: e.selectedActionIndex,
    setAutoOpenExpressionBuilder: e.setAutoOpenExpressionBuilder,
    setExpandedRows: e.setExpandedRows,
    shouldHideTitle,
    stateManagementVersion: _,
    timeout: transitionTimeout
  });
  return jsxs("div", {
    children: [b, !r && showPanel && jsx(e$, {
      transition,
      recordingKey: generateRecordingKey(e, "stateManagementVersionPanel"),
      updateSelectionProperties,
      stateManagementVersion: _,
      selectedInteractions
    })]
  });
}
function eQ(e, t, n) {
  let [o, i, r] = e.path;
  if (void 0 === o || void 0 === i || void 0 === r) return;
  let a = t[o]?.conditionalActions;
  if (isValidValue(a)) {
    let e = a?.[i]?.actions?.length ?? 0;
    if (r >= e) {
      if (0 === e) {
        n([o], !0);
        return;
      }
      n([o, i, r - 1], !0);
      return;
    }
  }
}
function e0(e, t, n) {
  let o = e.path[0] >= t.length;
  let i = 0 === e.path.length;
  if (o) {
    n([t.length - 1], !0);
    return;
  }
  if (i) {
    n([0], !0);
    return;
  }
}
let e3 = () => {
  Fullscreen?.setSelectedInteractions([]);
  getFeatureFlags().prototype_ai_magic_link_show_suggestion_toast && fullscreenValue.showMagicLinkSuggestedVisualBell("create_node_transition");
  fullscreenValue.deselectProperty();
};
let e5 = parsePxNumber("197px");
let e6 = parsePercentNumber("50%");
function e8(e) {
  var t;
  return e && o?.height < 369 ? o = t = {
    ...o,
    height: 369
  } : o ??= {
    width: 440,
    height: e ? 369 : 320,
    leftWidthPct: 45
  };
}
let $$e90 = memo(function ({
  filterOutNoneActions: e
}) {
  let t = useSelector(tn);
  let n = HS();
  let {
    selectedInteractions
  } = Ay(n, e);
  let l = selectedInteractions.length > 0;
  let [s, d] = useState(!1);
  let c = useHandleKeyboardEvent(dJ, "keydown", e => "Shift" !== e.key ? SKIP_RECORDING : (d(!0), t && l) ? void 0 : SKIP_RECORDING);
  let p = useHandleKeyboardEvent(dJ, "keyup", e => "Shift" !== e.key ? SKIP_RECORDING : (d(!1), t && l) ? void 0 : SKIP_RECORDING);
  if (useEffect(() => (document.addEventListener("keydown", c), document.addEventListener("keyup", p), () => {
    document.removeEventListener("keydown", c);
    document.removeEventListener("keyup", p);
  }), [c, p]), useIsCodeViewPanel() || !t || !l) return null;
  let u = selectedInteractions.some(e => e.actions?.some(e => "CONDITIONAL" === e.connectionType));
  return jsx(e7, {
    category: n,
    containsConditional: u,
    pressingShiftKey: s,
    initialX: t.initialX,
    initialY: t.initialY,
    shouldPin: t.shouldPin,
    setPressingShiftKey: d,
    filterOutNoneActions: e
  });
});
let e7 = memo(function ({
  category: e,
  containsConditional: t,
  pressingShiftKey: n,
  initialX: l,
  initialY: p,
  shouldPin: x,
  setPressingShiftKey: y,
  filterOutNoneActions: N
}) {
  let A;
  let V = useDispatch();
  let [B, H] = useState(!1);
  let [, F] = useAtomValueAndSetter(_$$x);
  let K = useRef(null);
  let [$, z] = useState(0);
  let W = x || B;
  let Z = YT();
  let G = Z === Oz.SINGLE_COL;
  let Y = Z === Oz.TWO_COL;
  let [X, ee] = useState(new Op([0]));
  let {
    selectedInteractions,
    differentLengthActions,
    interactionsOnSelectedNodesAndComponents,
    mergedActions,
    detailProps,
    detailPropsMultipleActions,
    updateSelectionProperties
  } = Ay(e, N);
  let ed = detailPropsMultipleActions.interactionEvent.interactionType ?? "NONE";
  let ec = useIsFullscreenSitesView();
  var ep = X.path.length > 0 ? X : new Op([0]);
  let eu = ep.isConditional();
  let eh = (e, t) => ep = new Op(e);
  ep.path[0] >= mergedActions.length && !eu ? e0(X, mergedActions, eh) : eu && eQ(X, mergedActions, eh);
  let em = useCallback((e, t) => {
    t ? ee(new Op(e)) : ee(new Op([]));
  }, []);
  useEffect(() => {
    if (0 === mergedActions.length) {
      captureMessage("the interactions panel should always have actions if rendered");
      let e = JSON.parse(JSON.stringify(selectedInteractions));
      for (let t of e) if (t && t.actions?.length === 0) {
        let e = {
          connectionType: "NONE"
        };
        t.actions = [e];
      }
      let t = interactionsOnSelectedNodesAndComponents.map(t => e.find(e => areSessionLocalIDsEqual(e.id, t.id)) ?? t);
      fullscreenValue.updateSelectionProperties({
        prototypeInteractions: t
      });
    }
    let e = X.isConditional();
    if (e) {
      if (e) {
        eQ(X, mergedActions, em);
        return;
      }
    } else {
      e0(X, mergedActions, em);
      return;
    }
  }, [mergedActions, X, em, selectedInteractions, interactionsOnSelectedNodesAndComponents]);
  let {
    shouldShowAdvancedPrototypingPaywall,
    showAdvancedPrototypinglMultipleActionsModal
  } = zt();
  let {
    showPanel,
    transition
  } = n6(detailProps, detailPropsMultipleActions, selectedInteractions);
  let e_ = iC(selectedInteractions);
  var eb = [];
  Y ? mergedActions.forEach((e, t) => {
    "CONDITIONAL" === e.connectionType && eb.push(new Op([t]));
  }) : mergedActions.length < 4 && mergedActions.forEach((e, t) => {
    eb.push(new Op([t]));
  });
  let [ev, eI] = useState(eb);
  let eC = useRef(null);
  let eE = n && !W && $ <= 1;
  let ej = parsePxNumber(prototypeInteractionModalWidth);
  let eT = parsePxNumber(prototypeInteractionModalExpandedWidth);
  let eS = e8(showPanel).width;
  let eA = t ? eT : ej;
  Y && (eA = eS);
  let [eL, eR] = useState(x);
  let eM = useCallback(() => {
    B || (V(trackPrototypeScaleChangeEvent({
      name: "prototype_interaction_details_modal_dragged"
    })), H(!0));
  }, [V, B, H]);
  let eV = useCallback((e, n) => Y ? new Point(e - (eS - ej), n) : t ? new Point(e - (eT - ej), n) : new Point(e, n), [Y, t, eS, ej, eT]);
  let eB = _$$I(l, p, x, eA, eV);
  useEffect(() => {
    if (!n) return;
    let e = e => {
      !e.shiftKey && n && y(!1);
    };
    document.addEventListener("mousemove", e);
    return () => {
      document.removeEventListener("mousemove", e);
    };
  }, [n, y]);
  useEffect(() => {
    F(eE);
  }, [F, eE]);
  useEffect(() => {
    eR(x);
  }, [x]);
  useEffect(() => () => {
    V(trackPrototypeScaleChangeEvent({
      name: "prototype_interaction_details_modal_closed"
    }));
  }, [V]);
  let eH = useAtomWithSubscription(_$$u);
  useEffect(() => {
    ec && eH?.focus();
  }, [ec, eH]);
  let eU = useRef(null);
  let [eF, ez] = useState(!1);
  useEffect(() => {
    eF && (ez(!1), eU.current?.scrollToBottom());
  }, [eF, ez, eU]);
  let [eX, e9] = useState(new Op([]));
  let e7 = selectCurrentFile();
  let tn = useCallback((e, t) => {
    let n = e.event.clipboardData || window.clipboardData;
    switch (t) {
      case ClipboardOperation.COPY:
      case ClipboardOperation.CUT:
        {
          let o = JSON.parse(JSON.stringify(selectedInteractions));
          let i = lg(o);
          let r = fG(e7?.key || null, {
            prototypeInteractions: i
          });
          if (!r) break;
          if (C4(n, r, ""), t === ClipboardOperation.CUT) {
            let e = [];
            for (let t of selectedInteractions) {
              let {
                sourceNodeID,
                id
              } = t;
              sourceNodeID && id && e.push(_$$d({
                nodeID: sourceNodeID,
                interactionID: id
              }));
            }
            permissionScopeHandler.user("delete-prototype-interactions", () => Fullscreen?.deleteInteractions(e));
            fullscreenValue.deselectProperty();
          }
          e.accept();
        }
    }
  }, [e7?.key, selectedInteractions]);
  let to = useRef(!1);
  let [ti, tr] = useState(!1);
  let {
    firstVariableSetMode,
    firstVariableSetID
  } = _$$b();
  let ts = useAppModelProperty("currentPage");
  let td = useCallback((e, t, n, o) => {
    V(trackPrototypeScaleChangeEvent({
      name: "Prototype delete action",
      params: {
        action: e,
        source: "panel",
        connector_id: t,
        page_id: n,
        actionInConditionalAction: o
      }
    }));
  }, [V]);
  let tc = useCallback(e => {
    if (interactionsOnSelectedNodesAndComponents && selectedInteractions) {
      var t = !1;
      var n = !1;
      if (shouldShowAdvancedPrototypingPaywall) showAdvancedPrototypinglMultipleActionsModal();else {
        for (let r = 0; r < selectedInteractions?.length; r++) {
          let a = selectedInteractions[r];
          let l = [];
          if (a && a.actions) {
            var o = 0;
            var i = [];
            for (let r = 0; r < a.actions.length; r++) {
              let s = a.actions[r];
              if (r !== e) {
                void 0 !== ev.find(e => e.equals([r])) && i.push(new Op([o]));
                l.push(s);
                o++;
              } else {
                let e = a.id ? a.id : defaultSessionLocalID;
                td(s.connectionType ? s.connectionType : "NONE", sessionLocalIDToString(e), ts);
                r === a.actions.length - 1 && (t = !0);
                2 === a.actions.length && (n = !0);
              }
              eI(i);
            }
            selectedInteractions[r].actions = l;
          }
        }
        let r = interactionsOnSelectedNodesAndComponents.map(e => selectedInteractions.find(t => t.id === e.id) ?? e);
        fullscreenValue.updateSelectionProperties({
          prototypeInteractions: r
        });
        n && eI([new Op([0])]);
        t && Y && ee(new Op([e - 1]));
      }
    }
  }, [interactionsOnSelectedNodesAndComponents, selectedInteractions, shouldShowAdvancedPrototypingPaywall, showAdvancedPrototypinglMultipleActionsModal, ev, ts, td, Y]);
  let tp = useCallback(e => {
    if (!interactionsOnSelectedNodesAndComponents || !selectedInteractions || !e.path.length || void 0 === e.path[0]) return;
    let [t, n, o] = e.path;
    let i = e.isConditional();
    if (shouldShowAdvancedPrototypingPaywall) showAdvancedPrototypinglMultipleActionsModal();else if (i) {
      let e = !1;
      let i = !1;
      let r = selectedInteractions.map(r => {
        let a = r.actions;
        if (!a) return r;
        let l = a.map((a, l) => {
          if (l !== t || "CONDITIONAL" !== a.connectionType) return a;
          let s = a.conditionalActions;
          if (!s) return a;
          let d = s.map((t, a) => {
            if (a !== n) return t;
            let l = t.actions;
            if (!l) return t;
            let s = l[o];
            s && td(s.connectionType ? s.connectionType : "NONE", sessionLocalIDToString(r.id ?? defaultSessionLocalID), ts, !0);
            let d = l.filter((e, t) => t !== o);
            e = o === l.length - 1;
            i = 0 === d.length;
            return {
              ...t,
              actions: d
            };
          });
          return {
            ...a,
            conditionalActions: d
          };
        });
        return {
          ...r,
          actions: l
        };
      });
      let a = interactionsOnSelectedNodesAndComponents.map(e => r.find(t => t.id === e.id) ?? e);
      fullscreenValue.updateSelectionProperties({
        prototypeInteractions: a
      });
      i ? ee(new Op([t])) : !i && e && ee(new Op([t, n, o - 1]));
    } else tc(t);
    document.activeElement?.blur();
  }, [interactionsOnSelectedNodesAndComponents, selectedInteractions, shouldShowAdvancedPrototypingPaywall, showAdvancedPrototypinglMultipleActionsModal, tc, ts, td]);
  let tu = ec && kc({
    interactionType: ed,
    actions: mergedActions
  });
  let th = jsx(_$$P, {
    className: Y ? "prototype_interaction_edit_modal--ui3TwoColScrollContainer--IWuQ4" : ek,
    useBottomPinning: !Y,
    ref: eU,
    allowScrollAndZoomOver: !0,
    "data-not-draggable": !0,
    children: jsx(eW, {
      autoOpenExpressionBuilder: ti,
      autoOpenVariablePicker: to,
      category: e,
      deleteButtonPressed: tc,
      expandedRows: ev,
      filterOutNoneActions: N,
      newActionIndexPath: eX,
      onNewActionAdded: e => {
        e9(e);
      },
      onSelect: em,
      recordingKey: Y ? generateRecordingKey("leftCol", dJ) : dJ,
      resetNewActionIndexPath: () => {
        e9(new Op([]));
      },
      selectedActionIndex: X,
      setAutoOpenExpressionBuilder: tr,
      setExpandedRows: eI,
      shouldHideTitle: !0
    })
  });
  let tm = 1 === selectedInteractions.length;
  let tx = selectedInteractions[0];
  let tg = !1;
  tx && (tg = !!tx.actions && tx.actions.length < 2, tx.actions && 1 === tx.actions.length && (A = tx.actions[0]));
  let ty = !A || "NONE" === A.connectionType;
  let tf = tm && tg && ty;
  var t_ = defaultSessionLocalID;
  let tb = jsx(_$$t2, {
    skipPaywall: tf,
    addButtonPressed: e => {
      if (!selectedInteractions) return;
      if (("CONDITIONAL" === e.connectionType || "SET_VARIABLE" === e.connectionType || "SET_VARIABLE_MODE" === e.connectionType) && shouldShowAdvancedPrototypingPaywall) {
        showAdvancedPrototypinglMultipleActionsModal();
        return;
      }
      "SET_VARIABLE_MODE" === e.connectionType && (e.targetVariableSetID = firstVariableSetID, e.targetVariableModeID = firstVariableSetMode);
      "SET_VARIABLE" === e.connectionType && to && (to.current = !0);
      "CONDITIONAL" === e.connectionType && tr(!0);
      let t = !1;
      var n = null;
      var o = !differentLengthActions && !tf && selectedInteractions[0].actions && 1 === selectedInteractions[0].actions.length;
      if (differentLengthActions || tf) for (var i = 0; i < selectedInteractions.length; i++) {
        let t = selectedInteractions[i];
        t.actions = [e];
        let n = t.id;
        let o = t.sourceNodeID;
        uU(t.stateManagementVersion) && n && o && zZ.recordInteractionUpgraded(n, o);
        t.stateManagementVersion = 1;
      } else for (var i = 0; i < selectedInteractions.length; i++) {
        let o = selectedInteractions[i];
        if (o.actions) {
          if (uU(o.stateManagementVersion) && (o.id && o.sourceNodeID && zZ.recordInteractionUpgraded(o.id, o.sourceNodeID), o.actions?.forEach(e => {
            e.transitionResetScrollPosition = !e.transitionPreserveScroll;
          })), Y) {
            if (X.isConditional()) {
              let n = X.path[0];
              let i = X.path[1];
              let r = X.path[2];
              let a = o.actions?.[n];
              let l = a.conditionalActions?.[i].actions?.length ?? 0;
              n === o.actions.length - 1 && r === l - 1 && (t = !0);
              a.conditionalActions?.[i].actions?.splice(r + 1, 0, e);
            } else {
              let n = X.path[0] + 1;
              n === o.actions.length && (t = !0);
              o.actions?.splice(n, 0, e);
            }
          } else o.actions?.push(e);
          t_ = o.id ? o.id : defaultSessionLocalID;
        } else {
          o.actions = [e];
          t_ = o.id ? o.id : defaultSessionLocalID;
        }
        if (o.stateManagementVersion = 1, Y) {
          let e = [...X.path];
          e[e.length - 1] += 1;
          n = new Op([...e]);
        } else n = new Op([o.actions.length - 1]);
      }
      let r = interactionsOnSelectedNodesAndComponents.map(e => selectedInteractions.find(t => t.id === e.id) ?? e);
      if (fullscreenValue.updateSelectionProperties({
        prototypeInteractions: r
      }), o || Y) {
        var a = [];
        r[0].actions?.forEach((e, t) => {
          "CONDITIONAL" === e.connectionType && a.push(new Op([t]));
        });
        eI(a);
      }
      ez && (!Y || t) && ez(!0);
      e9 && e9(n);
      V(trackPrototypeScaleChangeEvent({
        name: "Prototype add action",
        params: {
          action: e.connectionType ? e.connectionType : "NONE",
          source: "panel",
          connector_id: sessionLocalIDToString(t_),
          page_id: ts
        }
      }));
    },
    renderButton: !0,
    recordingKey: dJ,
    isNestedInConditional: Y && X.isConditional()
  });
  let tv = selectedInteractions.some(e => void 0 !== e.actions && e.actions?.length > 1);
  let tI = !X.isConditional() && !tv;
  let tC = jsx(IconButton, {
    onClick: () => tp(X),
    "aria-label": getI18nString("proto.prototype_panel.delete"),
    disabled: tI,
    recordingKey: generateRecordingKey(dJ, "actionDeleteButton"),
    htmlAttributes: {
      "data-tooltip": getI18nString("proto.prototype_panel.delete"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$O, {})
  });
  let tE = jsxs("div", {
    className: "prototype_interaction_edit_modal--ui3FooterContainer--oYsXM",
    children: [tb, " ", tC]
  });
  let tj = jsx(_$$c.Provider, {
    value: _$$P3.LEFT,
    children: jsxs("div", {
      className: Y ? "prototype_interaction_edit_modal--ui3InteractionsPanelContentLeftResizable--16pLu" : "prototype_interaction_edit_modal--ui3InteractionsPanelContentLeft--UYWSG",
      ref: eC,
      style: Y ? {
        width: `${e8(showPanel).leftWidthPct}%`
      } : void 0,
      children: [jsx(ew, {
        category: e,
        recordingKey: dJ,
        headerButtons: jsx(Fragment, {})
      }), jsx("div", {
        className: eD
      }), th, jsx("div", {
        className: eD
      }), jsx(Fragment, {
        children: tE
      })]
    })
  });
  let tN = mergedActions.length > 0 ? jsx(_$$c.Provider, {
    value: _$$P3.RIGHT,
    children: jsx(_$$P, {
      allowScrollAndZoomOver: !0,
      "data-not-draggable": !0,
      className: Y ? "prototype_interaction_edit_modal--ui3ScrollContainerRight--LJr-n" : void 0,
      children: jsx(e4, {
        selectedActionIndex: ep,
        handleExpandUI3: (e, t) => {
          !t && mergedActions.length > 1 ? eI(ev.filter(t => !t.equals(e))) : ev.find(t => t.equals(e)) || eI([...ev, new Op(e)]);
        },
        autoOpenVariablePicker: to,
        autoOpenExpressionBuilder: ti,
        setAutoOpenExpressionBuilder: tr,
        filterOutNoneActions: N
      })
    })
  }) : null;
  let tT = useRef(e5);
  let [, tS] = setupDragHandler({
    disabled: !Y,
    onDragStart() {
      eC.current && (tT.current = eC.current.getBoundingClientRect().width);
    },
    onDrag(e) {
      if (eC.current && tT.current) {
        let t = e8(showPanel);
        let n = tT.current + e.delta.x;
        let i = n / t.width * 100;
        n < e5 ? i = e5 / t.width * 100 : i > e6 && (i = e6);
        eC.current.style.width = `${i}%`;
        o = {
          ...t,
          leftWidthPct: i
        };
      }
    }
  });
  let tA = Y ? jsxs("div", {
    className: "prototype_interaction_edit_modal--ui3TwoColPanelContainer--e8MK8",
    children: [jsxs("div", {
      className: "prototype_interaction_edit_modal--ui3TwoColInnerContainer--ZvJj2",
      children: [tj, jsx("div", {
        className: "prototype_interaction_edit_modal--dividerVertical--Noi1C",
        children: jsx("div", {
          ...tS({
            className: "prototype_interaction_edit_modal--verticalResizeHandle--xkc8V"
          })
        })
      }), tN]
    }), showPanel && jsx(e$, {
      transition,
      recordingKey: generateRecordingKey(dJ, "stateManagementVersionPanel"),
      updateSelectionProperties,
      stateManagementVersion: e_,
      selectedInteractions
    })]
  }) : th;
  let tw = jsx(DraggableModalManager, {
    ref: K,
    allowAutoExpanding: !0,
    allowResizeHeight: Y,
    allowResizeWidth: Y,
    allowWheelPassthrough: !0,
    arrowPosition: x ? void 0 : ArrowPosition.TOP,
    arrowRelativeX: x ? void 0 : eA / 2,
    beMoreAccessible: !0,
    canRenderBelowViewport: !0,
    containerClassName: f()({
      [ek]: !Y,
      [eP]: Y,
      [eO]: G,
      "prototype_interaction_edit_modal--abovePropertiesPanel--hFejC": eL,
      "prototype_interaction_edit_modal--belowPropertiesPanel--f1Jfl": !eL,
      "prototype_interaction_edit_modal--hideModal--RSp-R": eE
    }),
    contentContainerClassName: f()({
      [ek]: !Y,
      [eP]: Y,
      [eO]: G
    }),
    dataTestId: "in-context-prototype-interaction-edit-modal",
    dragHeaderOnly: !0,
    fullFrame: Y,
    headerClassName: "prototype_interaction_edit_modal--multilineInteractionDetailsHeader--OE8Wr",
    headerSize: "small",
    initialHeight: Y ? e8(showPanel).height - HEADER_HEIGHT : void 0,
    initialPosition: eB,
    initialWidth: Y ? e8(showPanel).width : void 0,
    maxHeight: Y ? 800 : void 0,
    maxWidth: Y ? 800 : void 0,
    minHeight: Y ? showPanel ? 369 : 320 : void 0,
    minWidth: Y ? 440 : void 0,
    onClose: e3,
    onDragStart: () => {
      eR(!0);
      eM();
    },
    onFocus: () => z(e => e + 1),
    onResize: Y ? e => {
      o = {
        ...e8(showPanel),
        height: e.height,
        width: e.width
      };
    } : void 0,
    recordingKey: "interactionDetailsModal",
    title: (t, {
      titleId: n
    }) => jsx("div", {
      className: "prototype_interaction_edit_modal--onboardingRow--UlvE0",
      children: tu ? jsx(tt, {
        closeButton: t
      }) : jsx(te, {
        category: e,
        createActionTrigger: tb,
        closeButton: t,
        titleId: n
      })
    }),
    children: tA
  });
  let tk = ec ? tw : jsx(KeyboardReceiver, {
    name: "Prototype Draggable modal",
    className: "prototype_interaction_edit_modal--prototypeDraggableModal--njJ6A",
    handleClipboard: tn,
    children: tw
  });
  return jsx(ht.Provider, {
    value: useMemo(() => ({
      autoCloseOnScroll: !W
    }), [W]),
    children: tk
  });
});
function e4({
  selectedActionIndex: e,
  autoOpenVariablePicker: t,
  handleExpandUI3: n,
  autoOpenExpressionBuilder: o,
  setAutoOpenExpressionBuilder: r,
  filterOutNoneActions: a
}) {
  let s = HS();
  let {
    selectedInteractions,
    mergedActions,
    makeUpdateSelectionPropertiesForActionIndex,
    makeUpdateMultipleDestinationNodesForActionIndex,
    detailPropsMultipleActions
  } = Ay(s, a);
  let m = e.path[0];
  let x = makeUpdateMultipleDestinationNodesForActionIndex(m);
  let g = makeUpdateSelectionPropertiesForActionIndex(m);
  let y = iC(selectedInteractions);
  let f = detailPropsMultipleActions.interactionEvent.interactionType ?? "NONE";
  if (e.isConditional()) {
    let n = e.path[1];
    let a = e.path[2];
    let s = mergedActions[m];
    let p = (isValidValue(s.conditionalActions) && s.conditionalActions ? s.conditionalActions : [])[n];
    let u = p?.actions?.[a];
    return u ? jsx("div", {
      className: eR,
      children: jsx(_$$P2, {
        action: u,
        actionIndexPath: e.path,
        autoOpenExpressionBuilder: o,
        autoOpenVariablePicker: t,
        expandedRows: [e],
        interactionType: f,
        isNarrowPanel: !0,
        isNestedInConditional: !0,
        numActions: mergedActions.length,
        onDeleteAction: noop,
        onDrop: noop,
        onExpand: noop,
        onSelect: noop,
        recordingKey: generateRecordingKey(dJ, Qe, _$$eG, m),
        selectedActionIndex: e,
        selectedInteractions,
        setAutoOpenExpressionBuilder: r,
        stateManagementVersion: y,
        updateMultipleDestinationNodes: x.appendActionIndex(n).appendActionIndex(a),
        updateSelectionProperties: g.appendActionIndex(n).appendActionIndex(a)
      }, a)
    }) : null;
  }
  return jsx("div", {
    className: eR,
    children: jsx(_$$P2, {
      action: mergedActions[m],
      actionIndexPath: [m],
      autoOpenExpressionBuilder: o,
      autoOpenVariablePicker: t,
      expandedRows: [e],
      interactionType: f,
      isNarrowPanel: !0,
      isNestedInConditional: !1,
      numActions: mergedActions.length,
      onDeleteAction: noop,
      onDrop: noop,
      onExpand: n,
      onSelect: noop,
      recordingKey: generateRecordingKey(dJ, Qe, _$$eG, m),
      selectedActionIndex: e,
      selectedInteractions,
      setAutoOpenExpressionBuilder: r,
      stateManagementVersion: y,
      updateMultipleDestinationNodes: x,
      updateSelectionProperties: g
    }, m)
  });
}
function te({
  category: e,
  closeButton: t,
  createActionTrigger: n,
  titleId: o
}) {
  let r = useDispatch();
  let {
    selectedInteractions
  } = Ay(e);
  let d = YT();
  let c = (() => {
    if (1 !== selectedInteractions.length) return 0;
    let e = selectedInteractions[0];
    let t = {
      nodeID: e.sourceNodeID,
      interactionID: e.id
    };
    return (PrototypingTsApi?.getMatchingInteractions(_$$d(t)) ?? []).length;
  })();
  let h = getFeatureFlags().prototype_hide_matching_noodles && 1 === selectedInteractions.length && c > 1 && jsx(IconButton, {
    actionOnPointerDown: !0,
    onClick: () => {
      if (1 !== selectedInteractions.length) return;
      let e = selectedInteractions[0];
      let t = {
        nodeID: e.sourceNodeID,
        interactionID: e.id
      };
      let n = PrototypingTsApi?.getMatchingInteractions(_$$d(t)) ?? [];
      Fullscreen?.selectInteractionsAndSourceNodes(n);
      let o = getI18nString("proto.interaction_details.visual_bell.selected_n_matching_interactions", {
        total_num_interactions: n.length
      });
      fullscreenValue.showVisualBellWithUndo("selected-matching-noodles", o, !1);
      r(trackPrototypeScaleChangeEvent({
        name: "prototype_select_matching_interactions",
        params: {
          num_connectors: n.length
        }
      }));
    },
    "aria-label": getI18nString("proto.interaction_details.select_n_matching_interactions", {
      total_num_interactions: c
    }),
    htmlAttributes: {
      tabIndex: -1,
      onMouseEnter: () => {
        if (1 !== selectedInteractions.length) return;
        let e = selectedInteractions[0];
        let t = {
          nodeID: e.sourceNodeID,
          interactionID: e.id
        };
        let n = PrototypingTsApi?.getMatchingInteractions(_$$d(t)) ?? [];
        Fullscreen?.hoverInteractions(n);
      },
      onMouseLeave: () => Fullscreen?.hoverInteractions([]),
      "data-tooltip": getI18nString("proto.interaction_details.select_n_matching_interactions", {
        total_num_interactions: c
      }),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$A, {})
  });
  switch (d) {
    case Oz.TWO_COL:
      return jsxs("div", {
        className: "prototype_interaction_edit_modal--ui3ExpandedModalHeader--Ka7aM",
        children: [jsx("span", {
          id: o,
          children: renderI18nText("proto.interaction_details.header")
        }), jsxs("div", {
          className: "prototype_interaction_edit_modal--ui3ExpandedModalHeaderButtons--UqykU",
          children: [h, t]
        })]
      });
    case Oz.SINGLE_COL:
      return jsxs(Fragment, {
        children: [jsx("span", {
          id: o,
          children: renderI18nText("proto.interaction_details.header")
        }), jsxs("div", {
          className: eL,
          children: [h, n, t]
        })]
      });
  }
}
function tt({
  closeButton: e
}) {
  return jsxs(Fragment, {
    children: [renderI18nText("proto.sites_interaction_link_details.header"), jsx("div", {
      className: eL,
      children: e
    })]
  });
}
let tn = e => e.pickerShown?.id === o$ ? e.pickerShown : null;
export const E = $$e90;