import { useRef } from "react";
import { VariableResolvedDataType, VariableDataType, VariablesBindings, LinterCppBindings } from "../figma_app/763686";
import { sessionLocalIDToString } from "../905/871411";
import { convertKiwiToVariableIdString } from "../905/805904";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { h as _$$h } from "../905/207101";
import { useLatestRef } from "../figma_app/922077";
import { logError } from "../905/714362";
import { ds } from "../figma_app/314264";
import { ZR, O8 } from "../905/313095";
import { X } from "../905/853613";
import { useCurrentFileKey } from "../figma_app/516028";
import { getUserId } from "../905/372672";
import { Ev, Eo } from "../figma_app/216057";
import { y as _$$y, v as _$$v } from "../905/456837";
function T(e) {
  switch (e) {
    case VariableResolvedDataType.BOOLEAN:
      return "boolean";
    case VariableResolvedDataType.FLOAT:
      return "float";
    case VariableResolvedDataType.STRING:
      return "string";
    case VariableResolvedDataType.COLOR:
      return "color";
    case VariableResolvedDataType.MAP:
      return "map";
    case VariableResolvedDataType.SYMBOL_ID:
      return "symbol_id";
    case VariableResolvedDataType.FONT_STYLE:
      return "font_style";
    case VariableResolvedDataType.TEXT_DATA:
      return "text_data";
    case VariableResolvedDataType.IMAGE:
      return "image";
    case VariableResolvedDataType.LINK:
      return "link";
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return "js_runtime_alias";
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return "slot_content_id";
  }
}
export function $$I0({
  isLoading: e,
  eventName: t
}) {
  let r = useLatestRef(e);
  let i = useRef();
  _$$h(() => {
    i.current = performance.now();
  });
  let a = function (e) {
    let t = useRef(!1);
    return function () {
      t.current || (e(), t.current = !0);
    };
  }(function () {
    if (i.current) {
      let e = performance.now() - i.current;
      analyticsEventManager.trackDefinedMetric(t, {
        loadTimeMs: e
      });
    }
  });
  r && !e && a();
}
export function $$S1({
  resolvedType: e
}) {
  let t = useCurrentFileKey();
  let r = getUserId();
  _$$h(() => {
    t && r && analyticsEventManager.trackDefinedEvent("variables.inline_creation_dialog_opened", {
      fileKey: t,
      userId: r,
      resolvedType: T(e)
    });
  });
}
function v(e) {
  return "type" in e;
}
export function $$A2(e, t, r) {
  try {
    if (v(t) ? t.type === VariableDataType.ALIAS : "ALIAS" === t.dataType) {
      let d = v(t) ? t.value : convertKiwiToVariableIdString(t.value?.alias);
      let u = v(t) ? T(t.resolvedType) : t.resolvedDataType;
      let p = debugState.getState();
      let _ = Object.keys(p.mirror.sceneGraphSelection);
      let f = p.openFile?.key;
      let E = p.user && p.user.id;
      let I = atomStoreManager.get(Ev(d));
      let S = I?.variableSetId ? atomStoreManager.get(Eo(I?.variableSetId))?.node_id : null;
      let A = I?.variableSetId ? atomStoreManager.get(Eo(I?.variableSetId))?.sortPosition : null;
      let x = VariablesBindings.getSubscribedVariableInfo(d);
      let N = ZR(I ?? O8(x), p.openFile);
      let C = X(N);
      let w = p.mirror.selectedStyleProperties.guid;
      w && (_ = [sessionLocalIDToString(w)]);
      let O = function () {
        if (getFeatureFlags().aip_flower_garden_design_logging && LinterCppBindings) return JSON.stringify(Object.fromEntries(LinterCppBindings.getVariableSetConsumptionForDocument()));
      }();
      let R = _$$y(d);
      for (let t of (_$$v(d), _)) {
        var n;
        let a = function (e) {
          if (getFeatureFlags().aip_flower_garden_design_logging && LinterCppBindings) return JSON.stringify(Object.fromEntries(LinterCppBindings.getVariableSetConsumptionForHighestNodeContainer(e)));
        }(t);
        ds("ds_variable_reference_set", f, p, {
          userId: E,
          variable_id: d,
          collection_id: S,
          value_type: u?.toString().toUpperCase(),
          node_id: t,
          variable_field_id: e,
          is_style: !!w,
          is_shared: I?.subscriptionStatus === "SUBSCRIBED",
          library_key: N,
          partner_type: C,
          appleEulaAccepted: !!p.userFlags.apple_eula_accepted,
          attachmentSurfaceKey: r?.attachmentSurfaceKey,
          attachmentRecordingKey: r?.attachmentRecordingKey,
          previousValueVariableKey: r?.previousVariableKey,
          previousValueStyleLibraryKey: r?.previousStyleKey,
          hasVisiblePaintBelow: r?.hasVisiblePaintBelow,
          modeContext: (n = r?.modeContext) ? JSON.stringify(Object.entries(n).map(([e, t]) => ({
            variableSetKey: e,
            modeGuidOrMixed: t
          }))) : null,
          variableSetConsumptionForSelection: a,
          variableSetConsumptionForDocument: O,
          sessionId: r?.sessionId,
          elapsedSecondsSinceLastInsertions: R,
          rerankerQueryId: r?.queryId,
          variable_collection_position: A
        }, {
          forwardToDatadog: !0
        });
      }
    } else if (v(t) && t.type === VariableDataType.FONT_STYLE) {
      let r = t.value.asString ?? t.value.asFloat;
      let n = debugState.getState();
      let s = Object.keys(n.mirror.sceneGraphSelection);
      let o = n.openFile?.key;
      let d = n.user && n.user.id;
      let u = atomStoreManager.get(Ev(r?.value));
      let p = u?.variableSetId ? atomStoreManager.get(Eo(u?.variableSetId))?.node_id : null;
      let _ = u?.variableSetId ? atomStoreManager.get(Eo(u?.variableSetId))?.sortPosition : null;
      let f = VariablesBindings.getSubscribedVariableInfo(r?.value);
      let E = ZR(u ?? O8(f), n.openFile);
      let b = X(E);
      let I = n.mirror.selectedStyleProperties.guid;
      for (let t of (I && (s = [sessionLocalIDToString(I)]), s)) ds("ds_variable_reference_set", o, n, {
        userId: d,
        variable_id: r?.value,
        collection_id: p,
        value_type: r?.resolvedType ? T(r?.resolvedType).toUpperCase() : void 0,
        node_id: t,
        variable_field_id: e,
        is_style: !!I,
        is_shared: u?.subscriptionStatus === "SUBSCRIBED",
        library_key: E,
        partner_type: b,
        appleEulaAccepted: !!n.userFlags.apple_eula_accepted,
        variable_collection_position: _
      }, {
        forwardToDatadog: !0
      });
    }
  } catch (e) {
    logError("variables", "Could not log variable consumption", {
      exception: e
    }, {
      reportAsSentryError: !0
    });
  }
}
export function $$x3(e, t) {
  try {
    let r = debugState.getState();
    let n = Object.keys(r.mirror.sceneGraphSelection);
    let a = r.openFile?.key;
    let s = r.user && r.user.id;
    let o = atomStoreManager.get(Ev(e));
    let d = VariablesBindings.getSubscribedVariableInfo(e);
    let u = ZR(o ?? O8(d), r.openFile);
    let p = X(u);
    for (let i of n) ds("ds_variable_reference_set", a, r, {
      userId: s,
      variable_id: e,
      value_type: T(t),
      node_id: i,
      variable_field_id: "VARIANT_PROPERTIES",
      library_key: u,
      partner_type: p,
      appleEulaAccepted: !!r.userFlags.apple_eula_accepted
    }, {
      forwardToDatadog: !0
    });
  } catch (e) {
    logError("variables", "Could not log variant binding variable consumption", {
      exception: e
    }, {
      reportAsSentryError: !0
    });
  }
}
export const D = $$I0;
export const NF = $$S1;
export const oz = $$A2;
export const ty = $$x3;