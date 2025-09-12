import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useContext, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { R as _$$R } from "../905/57445";
import { EventShield } from "../905/821217";
import { K as _$$K } from "../905/443068";
import { A as _$$A } from "../905/24328";
import { U as _$$U } from "../905/708285";
import { RR } from "../figma_app/338442";
import { ComponentPropType, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import h from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { selectWithShallowEqual } from "../905/103090";
import { useHandleMouseEvent } from "../figma_app/878298";
import { ms, c$ } from "../figma_app/236327";
import { a as _$$a } from "../905/632329";
import { n as _$$n } from "../905/734251";
import { renderI18nText, getI18nString } from "../905/303541";
import { n0 } from "../figma_app/389091";
import { j7 } from "../905/929976";
import { clearSelection, addToSelection } from "../figma_app/741237";
import { o3, nt } from "../905/226610";
import { Sh } from "../figma_app/889655";
import { Ib } from "../905/129884";
import { FX } from "../figma_app/831569";
import { pG, DE } from "../figma_app/811257";
import { p as _$$p } from "../905/427409";
import { i as _$$i } from "../905/415810";
import { sD, Xn } from "../905/429125";
import { Fv } from "../figma_app/164212";
import { Lg, UR, PY } from "../figma_app/505098";
import { en as _$$en } from "../figma_app/323320";
import { uj0 } from "../figma_app/27776";
import { Q_, LC, RH, YM, K8, Me, V_, t$, uZ, fd, UD } from "../905/246565";
var m = h;
let U = ms;
let B = c$;
let G = "component-prop-pill-dropdown";
let V = e => {
  e.preventDefault();
  e.stopPropagation();
};
export function $$H0(e) {
  let t;
  let {
    nodeField,
    instanceGUIDs,
    label
  } = e;
  let c = useMemo(_$$en, []);
  let _ = useContext(_$$p);
  let {
    containingProductComponentGUID,
    containingInstanceGUID,
    def,
    selectionHasInstanceSublayer,
    dropdownShown
  } = selectWithShallowEqual(e => {
    let t = Sh(e);
    return {
      containingProductComponentGUID: Lg(e),
      containingInstanceGUID: UR(e),
      def: c(e, instanceGUIDs ?? t, nodeField),
      selectionHasInstanceSublayer: PY(e),
      dropdownShown: e.dropdownShown
    };
  });
  let V = useDispatch();
  let H = useCallback(e => {
    containingProductComponentGUID && def && V(j7({
      type: G,
      data: {
        position: {
          top: e.clientY,
          left: Math.min(e.clientX, window.innerWidth - parsePxInt(uj0) / 2)
        }
      }
    }));
  }, [containingProductComponentGUID, def, V]);
  let $ = useRef(null);
  let X = sD.concat("-", nodeField);
  let q = useRef(null);
  let J = useHandleMouseEvent(`propPill.${nodeField}`, "click", () => {
    !selectionHasInstanceSublayer && def && q.current && (q.current && (nodeField === RR.TEXT || nodeField === RR.VISIBLE) ? _?.showBindingUI(q.current) : V(j7({
      type: X,
      data: {
        nodeField,
        targetRect: q.current.getBoundingClientRect()
      }
    })));
  });
  let Z = useCallback(() => {
    let e = def?.explicitDefID;
    containingProductComponentGUID && e && (clearSelection(), addToSelection([containingProductComponentGUID]), V(n0({
      propDefId: e
    })));
  }, [containingProductComponentGUID, def, V]);
  let Q = dropdownShown?.type === G;
  let ee = o3(nt.variablePillA11y) && !0;
  let et = useRef(null);
  let er = _$$R(et);
  if (!def) return null;
  def.type === ComponentPropType.BOOL ? t = "BOOLEAN" : def.type === ComponentPropType.TEXT ? t = "STRING" : def.type === ComponentPropType.NUMBER && (t = "FLOAT");
  let en = jsxs(_$$a, {
    className: m()({
      [Q_]: selectionHasInstanceSublayer,
      [LC]: !selectionHasInstanceSublayer,
      [RH]: dropdownShown?.type === X,
      [YM]: def.type === ComponentPropType.INSTANCE_SWAP
    }),
    onClick: J,
    pillRef: q,
    children: [jsx("div", {
      ref: $,
      children: t ? jsx("div", {
        className: K8,
        children: jsx(_$$i, {
          type: t
        })
      }) : jsx("div", {})
    }), jsx("p", {
      className: Me,
      children: def.name
    })]
  });
  let ei = jsx(EventShield, {
    eventListeners: ["onMouseDown"],
    children: jsx("div", {
      className: V_,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-offset-x": (() => {
        if ($.current && q.current) return $.current.offsetLeft + $.current.offsetWidth / 2 - (q.current.offsetLeft + q.current.offsetWidth / 2);
      })(),
      "data-tooltip": er ? def.name : null,
      "data-tooltip-tip-align-left": !0,
      "data-tooltip-text-left": !0,
      ref: et,
      children: en
    })
  });
  let ea = jsx($$z1, {
    containingInstanceGUID,
    containingProductComponentGUID: ee ? containingProductComponentGUID : void 0,
    propDefId: def.explicitDefID
  });
  let es = jsx(W, {
    nodeField
  });
  let eo = jsx(Y, {
    goToPropertyButton: ea,
    detachPropertyButton: es,
    selectionHasInstanceSublayer,
    containingProductComponentGUID
  });
  let el = jsx(K, {
    input: ei,
    ui2RefButton: eo,
    goToPropertyButton: ea,
    detachPropertyButton: es,
    selectionHasInstanceSublayer,
    def,
    onContextMenu: H,
    nodeField,
    label
  });
  return jsxs(Fragment, {
    children: [el, Q && !ee && jsx(U, {
      style: dropdownShown?.data.position,
      positionFixed: !0,
      children: jsx(B, {
        onClick: Z,
        recordingKey: "go-to-property",
        children: renderI18nText("design_systems.component_properties.go_to_property")
      })
    }), jsx(Xn, {
      source: Fv.PILL,
      nodeField,
      iconWidth: $?.current ? $.current.getBoundingClientRect().width / 2 + 10 : void 0
    })]
  });
}
export function $$z1(e) {
  let {
    containingInstanceGUID,
    containingProductComponentGUID,
    propDefId
  } = e;
  let o = useDispatch();
  let c = containingInstanceGUID || containingProductComponentGUID;
  let u = useCallback(() => {
    c && propDefId && (clearSelection(), addToSelection([c]), o(n0({
      propDefId
    })));
  }, [c, propDefId, o]);
  return jsx(_$$K, {
    onClick: u,
    "aria-label": getI18nString("design_systems.component_properties.go_to_property"),
    recordingKey: "selectContainingInstance",
    htmlAttributes: {
      "data-tooltip": getI18nString("design_systems.component_properties.go_to_property"),
      "data-tooltip-type": Ib.TEXT
    },
    children: jsx(_$$A, {})
  });
}
function W(e) {
  let {
    nodeField
  } = e;
  let r = useCallback(() => {
    permissionScopeHandler.user("delete-prop-ref", () => Fullscreen.deleteComponentPropRef(nodeField));
  }, [nodeField]);
  return jsx(_$$K, {
    onClick: r,
    "aria-label": getI18nString("design_systems.component_properties.detach_property"),
    recordingKey: "deleteComponentPropRef",
    htmlAttributes: {
      "data-tooltip": getI18nString("design_systems.component_properties.detach_property"),
      "data-tooltip-type": Ib.TEXT,
      "data-onboarding-key": FX
    },
    children: jsx(_$$U, {})
  });
}
function K(e) {
  let {
    input,
    ui2RefButton,
    goToPropertyButton,
    detachPropertyButton,
    selectionHasInstanceSublayer,
    def,
    onContextMenu,
    nodeField,
    label
  } = e;
  let h = o3(nt.variablePillA11y);
  let {
    ui3FirstButton,
    ui3SecondButton
  } = useCallback(() => h ? {
    ui3FirstButton: goToPropertyButton,
    ui3SecondButton: detachPropertyButton
  } : {
    ui3FirstButton: selectionHasInstanceSublayer ? jsx("span", {
      onContextMenu: V,
      children: goToPropertyButton
    }) : jsx("span", {
      onContextMenu: V,
      children: detachPropertyButton
    })
  }, [goToPropertyButton, detachPropertyButton, h, selectionHasInstanceSublayer])();
  return jsx(_$$n.div, {
    onContextMenu,
    children: ui3SecondButton ? jsx(pG, {
      dataTestId: "component-prop-pill",
      appendedClassName: m()(t$, {
        [uZ]: def.type === ComponentPropType.INSTANCE_SWAP,
        [fd]: nodeField === RR.TEXT
      }),
      label,
      input,
      leftIcon: ui3FirstButton,
      rightIcon: ui3SecondButton
    }) : jsx(DE, {
      dataTestId: "component-prop-pill",
      appendedClassName: m()(t$, {
        [uZ]: def.type === ComponentPropType.INSTANCE_SWAP,
        [fd]: nodeField === RR.TEXT
      }),
      input,
      icon: ui2RefButton,
      label
    })
  });
}
function Y(e) {
  let {
    goToPropertyButton,
    detachPropertyButton,
    selectionHasInstanceSublayer
  } = e;
  return jsx("span", {
    onContextMenu: V,
    children: selectionHasInstanceSublayer ? goToPropertyButton : jsx("div", {
      className: UD,
      children: detachPropertyButton
    })
  });
}
export const L = $$H0;
export const f = $$z1;