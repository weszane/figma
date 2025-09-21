import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { isNotNullish } from "../figma_app/95419";
import { bL, l9, mc, wv, c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { IconButton } from "../905/443068";
import { t as _$$t } from "../905/947268";
import { Z as _$$Z } from "../905/498136";
import { VariableResolvedDataType } from "../figma_app/763686";
import { trackFileEventWithStore } from "../figma_app/901889";
import { partitionByPredicate } from "../905/918929";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { wJ } from "../figma_app/630951";
import { FX } from "../figma_app/12491";
import { sF } from "../figma_app/777207";
import { t as _$$t3 } from "../905/511388";
import { P as _$$P } from "../figma_app/582341";
import { useCurrentUserOrg } from "../905/845253";
import { isBigmaEnabledAlias3 } from "../figma_app/336853";
import { KindEnum } from "../905/129884";
import { fI } from "../figma_app/626177";
import { zz, b8, aX } from "../905/794523";
var w = (e => (e.ALL_LIBRARIES = "ALL_LIBRARIES", e.LOCAL_VARIABLES = "LOCAL_VARIABLES", e.SUBSCRIBED_VARIABLES = "SUBSCRIBED_VARIABLES", e))(w || {});
let C = e => {
  let t = {};
  for (let i of e) t[`${i.libraryKey}`] = i;
  return t;
};
function T({
  recordingKey: e,
  currentView: t,
  subscribedLibraries: i,
  onSetSelect: a
}) {
  let l = trackFileEventWithStore();
  let d = isBigmaEnabledAlias3(useCurrentUserOrg());
  let {
    pass,
    fail
  } = useMemo(() => partitionByPredicate(i, e => wJ(e.fileKey)), [i]);
  let h = useMemo(() => C(i), [i]);
  let b = "SUBSCRIBED_VARIABLES" === t.type ? t.libraryKey : void 0;
  let E = useCallback(e => {
    if ("ALL_LIBRARIES" === e || "LOCAL_VARIABLES" === e) {
      a({
        type: e,
        layout: t.layout
      });
      return;
    }
    let i = h[e];
    i && (a({
      type: "SUBSCRIBED_VARIABLES",
      layout: t.layout,
      ...i
    }), b !== i.libraryKey && l("variable_picker_library_changed", {
      pickerViewType: "SUBSCRIBED_VARIABLES",
      libraryFilterKey: i.fileKey
    }));
  }, [a, t.layout, h, l, b]);
  return jsxs(bL, {
    recordingKey: e,
    onChange: E,
    value: "SUBSCRIBED_VARIABLES" === t.type ? t.libraryKey : t.type,
    children: [jsx(l9, {
      label: jsx(HiddenLabel, {
        children: renderI18nText("variables.binding_ui.variable_set")
      }),
      "data-testid": "variable-set-selector-trigger",
      children: jsx(k, {
        currentView: t,
        selectedLibraryKey: b
      })
    }), jsxs(mc, {
      children: [jsx(R, {
        value: "ALL_LIBRARIES",
        formattedValue: getI18nString("variables.binding_ui.set_labels.all_libraries")
      }), i.length > 0 && jsxs(Fragment, {
        children: [jsx(wv, {}), jsx(R, {
          value: "LOCAL_VARIABLES",
          formattedValue: getI18nString("variables.binding_ui.set_labels.assets_created_in_file")
        }), jsx(wv, {})]
      }), fail.map(e => {
        let t = d && sF(e.libraryKey);
        return jsx(R, {
          value: e.libraryKey,
          formattedValue: e.fileName,
          rightIcon: t && jsx(FX, {})
        }, e.fileKey);
      }), pass.map(e => jsx(R, {
        value: e.libraryKey,
        formattedValue: e.fileName,
        rightIcon: jsx(_$$t3, {})
      }, e.fileKey))]
    })]
  });
}
function k({
  currentView: e,
  selectedLibraryKey: t
}) {
  return "ALL_LIBRARIES" === e.type ? renderI18nText("variables.binding_ui.set_labels.all_libraries") : "LOCAL_VARIABLES" === e.type ? renderI18nText("variables.binding_ui.set_labels.assets_created_in_file") : jsxs("span", {
    className: "x3nfvp2 x6s0dn4",
    children: [e.fileName, t && jsx(_$$P, {
      libraryKey: t
    })]
  });
}
function R({
  value: e,
  formattedValue: t,
  rightIcon: i
}) {
  return jsx(c$, {
    value: e,
    children: jsxs("span", {
      className: "x3nfvp2",
      children: [t, i]
    })
  });
}
export var $$N1 = (e => (e[e.MIXED_MODES = 0] = "MIXED_MODES", e))($$N1 || {});
function P({
  recordingKey: e,
  currentView: t,
  resolvedType: i,
  onToggleLayoutIconClick: r,
  disabledReason: s
}) {
  if (i !== VariableResolvedDataType.COLOR) return null;
  {
    let i = function (e) {
      switch (e) {
        case "list":
          return 0 === s ? getI18nString("variables.binding_ui.grid_view_unavailable_multiple_modes") : getI18nString("variables.binding_ui.show_as_grid_tooltip");
        case "grid":
          return getI18nString("variables.binding_ui.show_as_list_tooltip");
      }
    }(t.layout);
    return jsx(IconButton, {
      "aria-label": i,
      recordingKey: e,
      onClick: r,
      disabled: isNotNullish(s),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": i
      },
      children: "list" === t.layout ? jsx(_$$t, {}) : jsx(_$$Z, {})
    });
  }
}
export function $$O0({
  recordingKey: e,
  currentView: t,
  subscribedLibraries: i,
  setControlRightButtons: r,
  resolvedType: a,
  onSetSelect: s,
  onToggleLayoutIconClick: o,
  disableGridLayout: l
}) {
  return jsxs(fI, {
    className: zz,
    children: [s ? jsx(T, {
      currentView: t,
      subscribedLibraries: i,
      recordingKey: generateRecordingKey(e, "setSelector"),
      onSetSelect: s
    }) : jsx("div", {
      className: b8,
      children: getI18nString("proto.action_set_variable_dropdown_option")
    }), (o || r) && jsxs("div", {
      className: aX,
      children: [o && jsx(P, {
        currentView: t,
        resolvedType: a,
        onToggleLayoutIconClick: o,
        recordingKey: generateRecordingKey(e, "toggleLayout"),
        disabledReason: l
      }), r]
    })]
  });
}
export const Z = $$O0;
export const t = $$N1;