import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useMemo, useRef, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IK } from "../905/521428";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { u1, Uv, XE } from "../figma_app/91703";
import { sw } from "../figma_app/914957";
import { fullscreenValue } from "../figma_app/455680";
import { normalizeValue, valueOrFallback, isValidValue } from "../905/216495";
import { kl } from "../905/275640";
import { selectOpenFileKey } from "../figma_app/516028";
import { V4 } from "../figma_app/383828";
import { lm } from "../figma_app/745458";
import { Sh, dT } from "../figma_app/889655";
import { cn } from "../905/959568";
import { O2, OE } from "../figma_app/164212";
import { e6, ME } from "../figma_app/545190";
import { Z3 } from "../figma_app/461594";
import { Lg, cv } from "../figma_app/505098";
import { K } from "../figma_app/566021";
import { Im, uA } from "../figma_app/454622";
import { z as _$$z } from "../905/454433";
import { Zk } from "../figma_app/626177";
import { aV } from "../figma_app/305626";
import { $ } from "../905/330495";
import { p as _$$p } from "../figma_app/295764";
import { n as _$$n } from "../figma_app/763473";
import { At } from "../905/973142";
import { detectEditorStateFormat, parseEditorStateToPlainText } from "../figma_app/9619";
import { dG } from "../figma_app/753501";
import { Tg } from "../figma_app/967154";
import { Ad } from "../figma_app/811257";
import { NA } from "../figma_app/760428";
import { S as _$$S } from "../905/459477";
import { Mx, Og, aE, Wf, Ki, $s, AQ, ns } from "../figma_app/882817";
var c = d;
let G = forwardRef(function ({
  instanceDescription: e,
  containingStateGroupLinks: t,
  containingStateGroupDescription: r,
  isDescriptionPaneOpen: a,
  onOpenDescriptionPane: s
}, o) {
  let l = Tg();
  let d = useMemo(() => e ? "lexical" === detectEditorStateFormat(e) ? parseEditorStateToPlainText(e) : At(e) : l?.[0]?.uri ? l?.[0]?.uri : r ? At(r) : t?.[0]?.uri ?? void 0, [e, l, t, r]);
  let c = useRef(null);
  let u = _$$n({
    ref: c,
    text: d,
    checkVerticalOverflow: !0
  });
  let p = useMemo(() => {
    let n = !!(l?.length || t?.length);
    let i = !!(e && r);
    return u || i || n;
  }, [r, t?.length, e, l?.length, u]);
  let _ = useCallback(() => {
    p && s(!a);
  }, [p, a, s]);
  return null == d ? null : jsx(Ad, {
    ref: o,
    appendedClassName: "instance_description_preview--ui3DescriptionRow--wG3Zi",
    label: null,
    input: jsx("button", {
      className: "instance_description_preview--ui3DescriptionButton--dZnej",
      disabled: !p,
      onMouseDown: dG,
      onClick: _,
      children: jsx("div", {
        ref: c,
        className: "instance_description_preview--ui3DescriptionText--o9WUm ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k",
        children: d
      })
    })
  });
});
export function $$W1(e) {
  let t = useSelector(Lg);
  let {
    nestedInstances
  } = _$$p(e);
  return t && !nestedInstances.length ? void 0 : NA.INSTANCE_SWAP_PICKER;
}
export let $$K0 = memo(function (e) {
  let t = normalizeValue(kl("resettableInstanceOverrides"));
  let r = useSelector(e => e.pickerShown);
  let s = useSelector(cv);
  let o = useSelector(Sh);
  let d = useSelector(dT);
  let u = useSelector(Z3);
  let _ = useDispatch();
  let {
    backingSymbolGUID,
    singleBackingStateGroup
  } = $(d);
  let {
    onlyInstances,
    onlyInstanceSublayers
  } = _$$p(d);
  let O = useRef(null);
  let L = useMemo(() => singleBackingStateGroup?.symbolLinks ?? [], [singleBackingStateGroup]);
  let k = useCallback(e => {
    if (e) {
      let e = cn(O.current, Im);
      _(u1({
        id: uA,
        initialX: e.x,
        initialY: e.y
      }));
      _(sw());
      _(Uv());
    } else _(XE());
  }, [_]);
  return ($$W1(d), onlyInstances || onlyInstanceSublayers) ? jsxs(Zk, {
    className: Mx,
    style: e.isInSelectionActionsPanel ? {
      paddingBottom: 0,
      borderBottom: "none"
    } : void 0,
    children: [jsx(Y, {
      recordingKey: generateRecordingKey(e, "restore")
    }), (() => {
      let e = r?.id === uA;
      let t = valueOrFallback(s, "");
      let i = backingSymbolGUID && isValidValue(backingSymbolGUID) ? singleBackingStateGroup?.description ?? "" : void 0;
      return jsxs(Fragment, {
        children: [e ? jsx(K, {
          containingStateGroupLinks: L,
          containingStateGroupDescription: i,
          description: t
        }) : null, jsx(G, {
          instanceDescription: t,
          containingStateGroupDescription: i,
          containingStateGroupLinks: L,
          onOpenDescriptionPane: k,
          isDescriptionPaneOpen: e,
          ref: O
        })]
      });
    })(), onlyInstances && jsx("div", {
      className: c()(Og, {
        [aE]: e.isInSelectionActionsPanel
      }),
      children: jsx(e6, {
        containerWidth: O2.RESIZABLE_SIDEBAR,
        propDimension: OE.ASSIGNMENT,
        guids: o,
        recordingKey: e.recordingKey,
        errorBoxFlushWithContainer: !1,
        enableHidingOverflowRowsInUI3: !1,
        entrypointForInstanceSwapPicker: _$$S.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_INSTANCE_PANEL,
        canAutoSuggestProps: getFeatureFlags().anticipation_props && null !== singleBackingStateGroup && 1 === o.length
      })
    }), u.map(r => jsx("div", {
      className: Wf,
      children: jsx(ME, {
        containerWidth: O2.RESIZABLE_SIDEBAR,
        entrypointForInstanceSwapPicker: _$$S.InstancePickerEntrypoint.INSTANCE_SWAP_PROP_INSTANCE_PANEL_BUBBLED,
        errorBoxFlushWithContainer: !1,
        forBubbledProps: !0,
        guids: r,
        hideErrors: !0,
        highlightNodesOnHover: !0,
        instanceAndSublayerGUIDs: r,
        instanceNameDisplayOverride: NA.NAME_ONLY,
        propDimension: OE.ASSIGNMENT,
        recordingKey: e.recordingKey,
        resettableInstanceOverrides: t && t.bubbledInstanceOverrides ? t.bubbledInstanceOverrides[r[0]] : void 0,
        shouldHideInstanceTitleButtons: !0
      })
    }, `bubbledInstance.${r[0]}`))]
  }) : jsx(Zk, {
    className: Mx
  });
});
function Y({
  recordingKey: e
}) {
  let {
    sceneGraphSelection,
    library
  } = selectWithShallowEqual(e => ({
    sceneGraphSelection: e.mirror.sceneGraphSelection,
    library: e.library
  }));
  let i = useSelector(dT);
  let {
    affiliatedStateGroup,
    singleBackingSymbol,
    restoreType,
    stateResetType
  } = $(i);
  let m = useSelector(lm);
  let f = useSelector(selectOpenFileKey);
  let E = useDispatch();
  let S = _$$S.useOpenFileProperties();
  if ("STATE_GROUP" === restoreType || "SYMBOL_AS_NON_STATE" === restoreType) {
    let t = jsx(_$$z, {
      onClick: function () {
        fullscreenValue.triggerActionInUserEditScope("restore-symbol-or-state-group");
      },
      recordingKey: generateRecordingKey(e, "restoreComponentButton"),
      children: renderI18nText("design_systems.instance_panel.restore_component")
    });
    return jsx("div", {
      className: Ki,
      children: t
    });
  }
  return "DELETED_LOCAL_STATE" === stateResetType || "DELETED_SUBSCRIBED_STATE" === stateResetType ? jsxs(aV, {
    title: getI18nString("design_systems.instance_panel.missing_variant_title"),
    appendedClassName: $s,
    children: [jsx("div", {
      className: AQ,
      children: renderI18nText("design_systems.instance_panel.the_selected_variant_is_missing_in_the_component")
    }), jsx("div", {
      className: ns,
      children: jsx(IK, {
        variant: "secondary",
        recordingKey: generateRecordingKey(e, "resetVariantButton"),
        onClick: function () {
          let e;
          if (f) {
            if ("DELETED_SUBSCRIBED_STATE" === stateResetType) {
              let t = singleBackingSymbol?.componentKey;
              if (!t) return;
              e = m.get(t);
            } else if ("DELETED_LOCAL_STATE" === stateResetType) {
              let t = affiliatedStateGroup?.guid;
              if (!t) return;
              e = library.local.stateGroups[t];
            }
            permissionScopeHandler.user("reset-variant", () => {
              e && V4(e, E, f, sceneGraphSelection, "Reset Variant Button", !1, S);
            });
          }
        },
        children: renderI18nText("design_systems.instance_panel.reset_to_default")
      })
    })]
  }) : null;
}
export const _ = $$K0;
export const Q = $$W1;