import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { K } from "../905/443068";
import { r as _$$r } from "../905/784543";
import { StateHierarchy } from "../figma_app/763686";
import d from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { replaceSelection } from "../figma_app/741237";
import { s } from "../figma_app/874592";
import { Dr, Ct } from "../figma_app/803787";
import { KindEnum } from "../905/129884";
import { O2, OE } from "../figma_app/164212";
import { e6 } from "../figma_app/545190";
import { I9 } from "../figma_app/151869";
import { selectWithShallowEqual } from "../905/103090";
import { g0 } from "../figma_app/167249";
import { Lg } from "../figma_app/505098";
import { n as _$$n } from "../642/665823";
import { x as _$$x } from "../642/848308";
import { Zk } from "../figma_app/626177";
import { j as _$$j } from "../figma_app/231130";
import { DE, Ad } from "../figma_app/811257";
import { z6, Od, h$ } from "../figma_app/967154";
import { R as _$$R } from "../figma_app/636548";
import { yf } from "../905/42379";
var $$c = d;
export let $$M0 = memo(function (e) {
  let {
    stateGroupSelectionMode,
    containingProductComponent,
    componentDescription
  } = z6();
  let a = useRef(null);
  Od(a);
  h$(a);
  let d = useSelector(Dr);
  let u = useSelector(Ct);
  let {
    allowLibraryPublish
  } = useContext(s);
  return stateGroupSelectionMode !== StateHierarchy.STATE ? null : containingProductComponent ? containingProductComponent && containingProductComponent.isAlive ? jsxs(Zk, {
    className: "component_panel--componentPanel--aKD1Q",
    style: e.isInSelectionActionsPanel ? {
      paddingBottom: 0,
      borderBottom: "none"
    } : void 0,
    ref: a,
    children: [jsx($$P1, {}), jsx(_$$n, {
      description: componentDescription
    }), jsx(DE, {
      appendedClassName: $$c()(e.isInSelectionActionsPanel ? "component_panel--ui3PanelHeaderRowSAP--3-23z props_panel--ui3PanelHeaderRowSAP--ws4dj props_panel--ui3PanelHeaderRow--Ab8Jz" : "component_panel--ui3PanelHeaderRow--hU6q6 props_panel--ui3PanelHeaderRow--Ab8Jz", yf),
      label: null,
      input: renderI18nText("design_systems.component_panel.current_variant"),
      icon: jsx(A, {
        recordingKey: e.recordingKey
      })
    }), stateGroupSelectionMode === StateHierarchy.STATE && jsx(e6, {
      containerWidth: O2.REGULAR,
      propDimension: OE.DEFINITION,
      guids: [containingProductComponent.guid],
      recordingKey: e.recordingKey,
      entrypointForInstanceSwapPicker: null
    }), d && u && allowLibraryPublish && jsx(_$$x, {})]
  }) : null : jsx(_$$j, {
    recordingKey: "createStateGroup"
  });
});
function A(e) {
  let t = function () {
    let e = selectWithShallowEqual(Lg);
    return g0(e);
  }();
  return t && ("SYMBOL" === t.type && !t.isState || t.isStateGroup) ? jsx(K, {
    recordingKey: generateRecordingKey(e.recordingKey, "goToParent"),
    "aria-label": getI18nString("design_systems.component_panel.select_component"),
    onClick: () => {
      replaceSelection([t.guid]);
    },
    htmlAttributes: {
      "data-tooltip": getI18nString("design_systems.component_panel.select_component"),
      "data-tooltip-type": KindEnum.TEXT
    },
    children: jsx(_$$r, {})
  }) : null;
}
export function $$P1() {
  let e = I9();
  return e && e.length > 1 ? jsx(Ad, {
    label: null,
    appendedClassName: "component_panel--ui3ComponentRenameInputRow--nU8OK",
    input: jsx(_$$R, {
      alwaysShowParentComponent: !0,
      shouldHideComponentIcon: !0,
      unfocusedInputOverridesClassName: "component_panel--ui3ComponentRenameUnfocusedInputOverride--n2SfL"
    })
  }) : null;
}
export const c = $$M0;
export const Q = $$P1;