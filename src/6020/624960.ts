import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { memo, useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { K as _$$K } from "../905/443068";
import { E as _$$E } from "../905/632989";
import { o as _$$o } from "../905/821217";
import { e as _$$e } from "../905/149844";
import { r as _$$r } from "../905/857502";
import { O as _$$O } from "../905/487602";
import { Fullscreen, PrototypingTsApi } from "../figma_app/763686";
import { permissionScopeHandler, scopeAwareFunction } from "../905/189185";
import $$m from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { Uz } from "../905/63728";
import { useHandleMouseEvent, generateRecordingKey, useHandleChangeEvent, useHandleGenericEvent, useHandleKeyboardEvent } from "../figma_app/878298";
import { getI18nString, renderI18nText } from "../905/303541";
import { lW } from "../figma_app/11182";
import { fullscreenValue } from "../figma_app/455680";
import { normalizeValue, valueOrFallback } from "../905/216495";
import { lJ } from "../905/275640";
import { useOpenFileObjectWithSinatraType } from "../figma_app/516028";
import { qb, Rv } from "../figma_app/2590";
import { vp } from "../figma_app/831696";
import { Ib } from "../905/129884";
import { uQ, Tv } from "../figma_app/151869";
import { Q as _$$Q } from "../905/346809";
import { parsePxInt } from "../figma_app/783094";
import { X } from "../figma_app/313269";
import { Point } from "../905/736624";
import { P as _$$P } from "../905/347284";
import { Ao } from "../905/748636";
import { M0y } from "../figma_app/27776";
import { JU, Zk, fI, nV } from "../figma_app/626177";
import { DE } from "../figma_app/811257";
let p = memo(function (t) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...t,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M15 17H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1m-6 1h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2m1.5-9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
var f = $$m;
let B = function ({
  startingPoint: t,
  closeModal: e,
  parentPanelRectObject: o,
  recordingKey: r
}) {
  let [a, l] = useState(t?.description || "");
  let s = useRef(a);
  useEffect(() => {
    s.current = a;
  }, [a]);
  let p = uQ();
  let d = useRef(p);
  let c = useCallback(() => {
    permissionScopeHandler.user("submit-prototype-starting-point-description", () => {
      d.current && Fullscreen.updatePrototypeStartingPointDescription(d.current, s.current);
    });
    e();
  }, [e]);
  useEffect(() => c, [c]);
  let u = useCallback(() => {
    permissionScopeHandler.user("blur-prototype-starting-point-description", () => {
      d.current && Fullscreen.updatePrototypeStartingPointDescription(d.current, s.current);
    });
  }, []);
  useEffect(() => (window.addEventListener("blur", u), window.addEventListener("focus", u), () => {
    window.removeEventListener("blur", u);
    window.removeEventListener("focus", u);
  }), [u]);
  return jsx(Ao, {
    title: getI18nString("proto.starting_point_modal.description"),
    initialPosition: new Point(o.x - parsePxInt(M0y), o.y),
    headerSize: "small",
    truncateTitleText: !0,
    dragHeaderOnly: !0,
    onClose: c,
    children: jsx(_$$P, {
      className: "prototype_starting_point_modal--contentContainer--PuTTf",
      children: jsx("div", {
        className: "prototype_starting_point_modal--richTextEditor--Ru95M",
        dir: "auto",
        children: jsx(X, {
          fallback: null,
          errorFallback: null,
          placeholder: getI18nString("proto.starting_point_modal.enter_a_description_for_your_starting_point"),
          defaultValue: a,
          onInputChange: t => {
            l(t);
          },
          onBlur: u,
          mountBehavior: "focusAndSelectAll",
          toolbarOptions: "minimal",
          toolbarProps: {
            "aria-label": getI18nString("proto.starting_point_modal.description")
          }
        })
      })
    })
  });
};
export function $$F1(t) {
  let [e, o] = lJ("prototypeStartingPoint");
  let m = !!selectWithShallowEqual(L);
  let [h, R] = useState(!1);
  let [S, C] = useState(normalizeValue(e)?.name || "");
  let [D, K] = useState(!1);
  useEffect(() => {
    let t = normalizeValue(e)?.name || "";
    t !== S && (C(t), !S && D && (K(!1), R(!0)));
  }, [e, S, D]);
  let [M, F] = useState(!1);
  let U = useRef(null);
  let H = Tv();
  let X = useOpenFileObjectWithSinatraType({
    useSinatraType: !0
  });
  let Y = !!X;
  let G = X?.prototype_url;
  let Q = useSelector(t => t.mirror.appModel.urlNodeId);
  let q = useDispatch();
  let J = useCallback(() => {
    F(!1);
  }, []);
  useEffect(() => {
    J();
  }, [J, H]);
  let Z = scopeAwareFunction.user("delete-prototype-starting-points", () => {
    H && Fullscreen.deletePrototypeStartingPoints(H);
  });
  let W = useHandleMouseEvent(generateRecordingKey(t.recordingKey, "minusButton"), "click", t => {
    Z();
  });
  let $ = useHandleMouseEvent(generateRecordingKey(t.recordingKey, "nameLabel"), "click", t => {
    R(!0);
  });
  useEffect(() => (fullscreenValue.fromFullscreen.on("focusPrototypeStartingPointPanelToEditName", $), () => {
    fullscreenValue.fromFullscreen.removeListener("focusPrototypeStartingPointPanelToEditName", $);
  }), [$]);
  let tt = useHandleMouseEvent(t.recordingKey, "click", t => {
    K(!0);
    permissionScopeHandler.user("add-prototype-starting-point", () => {
      fullscreenValue.triggerAction("add-prototype-starting-point");
    });
  });
  let te = H && H.length > 1;
  let to = valueOrFallback(e, {});
  let tn = jsx(Fragment, {
    children: h ? jsx($$z0, {
      defaultValue: S,
      submitRename: function (t) {
        R(!1);
        t ? o({
          name: t,
          description: normalizeValue(e) ? normalizeValue(e)?.description : "",
          position: normalizeValue(e) ? normalizeValue(e)?.position : ""
        }) : C(normalizeValue(e)?.name || "");
      },
      recordingKey: generateRecordingKey(t, "startingPointNameInput")
    }) : jsx(JU, {
      className: "prototype_starting_point_panel--startingPointNameLabel--Mipwi raw_components--textAreaInput--mi1Ag raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t",
      onClick: $,
      children: S
    })
  });
  let ti = jsx(_$$K, {
    onClick: () => {
      F(!0);
    },
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("proto.starting_points.edit_description")
    },
    "aria-label": getI18nString("proto.starting_points.edit_description"),
    recordingKey: generateRecordingKey(t, "startingPointPanelIcon"),
    children: jsx(p, {})
  });
  let tr = jsx(DE, {
    ref: U,
    label: null,
    input: tn,
    icon: ti
  });
  return m ? jsxs(Zk, {
    children: [jsxs(fI, {
      className: "prototype_starting_point_panel--flowStartingPointRow--Ajjk1 collapsible_property_panel--panelTitleRowOuter--i5K0R",
      children: [jsx(_$$Q, {
        extended: !0,
        children: renderI18nText("proto.starting_points.flow_starting_point_title")
      }), jsx("span", {
        className: "prototype_starting_point_panel--fadeOutOnUnhover--6-o5B",
        children: !te && jsx(_$$K, {
          disabled: !Y,
          onClick: () => function (t) {
            let e = PrototypingTsApi.currentDeviceType();
            let o = vp({
              scalingInfo: {
                viewportScalingMode: qb(e),
                contentScalingMode: Rv(e)
              },
              nodeId: void 0,
              startingPointNodeId: t,
              showHotspots: void 0
            });
            q(lW({
              stringToCopy: `${G}${o}`
            }));
          }(Q),
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("proto.flows_panel.copy_link")
          },
          "aria-label": getI18nString("proto.flows_panel.copy_link"),
          children: jsx(_$$r, {})
        })
      }), jsx("span", {
        className: "prototype_starting_point_panel--rightIconButton--ID6ZQ",
        children: jsx(_$$K, {
          onClick: W,
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("proto.starting_points.delete_starting_point_tooltip")
          },
          "aria-label": getI18nString("proto.starting_points.delete_starting_point_tooltip"),
          children: jsx(_$$O, {})
        })
      })]
    }), te ? jsx(fI, {
      children: jsx(nV, {
        className: "prototype_starting_point_panel--mixedNoteLabel--gzISu draggable_list--label--Gcpsi",
        children: renderI18nText("proto.starting_points.click_to_remove_mixed_content")
      })
    }) : jsxs(Fragment, {
      children: [tr, M && jsx(B, {
        startingPoint: to,
        closeModal: J,
        parentPanelRectObject: U.current.getBoundingClientRect(),
        recordingKey: generateRecordingKey(t, "startingPointDescriptionModal")
      })]
    })]
  }) : te ? null : jsx(Zk, {
    children: jsxs(fI, {
      className: f()("prototype_starting_point_panel--panelHeaderRowFaded--pswTv draggable_list--panelHeaderRowFaded--kETRR draggable_list--hover--yEfA5", "prototype_starting_point_panel--hover--5t-WV"),
      children: [jsx(_$$Q, {
        faded: !0,
        extended: !0,
        children: jsx(_$$E, {
          className: "prototype_starting_point_panel--panelTitleText--F75N0 draggable_list--panelTitleText--SwKez",
          onClick: tt,
          recordingKey: generateRecordingKey(t, "panelTitle"),
          children: renderI18nText("proto.starting_points.flow_starting_point_title")
        })
      }), jsx("span", {
        className: "prototype_starting_point_panel--addButton--M-0Xy draggable_list--addButton--D0q--",
        children: jsx(_$$o, {
          eventListeners: ["onMouseDown"],
          display: "contents",
          children: jsx(_$$K, {
            onClick: tt,
            htmlAttributes: {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": getI18nString("proto.starting_points.add_starting_point_tooltip")
            },
            "aria-label": getI18nString("proto.starting_points.add_starting_point_tooltip"),
            recordingKey: generateRecordingKey(t, "plusButton"),
            children: jsx(_$$e, {})
          })
        })
      })]
    })
  });
}
function L(t) {
  return t.mirror.selectionProperties.prototypeStartingPoint;
}
export function $$z0(t) {
  let [e, o] = useState(t.defaultValue);
  let r = useHandleChangeEvent(t.recordingKey, "change", t => {
    o(t.target.value);
  });
  let a = useHandleGenericEvent(t.recordingKey, "blur", scopeAwareFunction.user("rename-starting-point", () => t.submitRename(e)));
  let l = useHandleKeyboardEvent(t.recordingKey, "keydown", o => {
    "Enter" === o.key ? t.submitRename(e) : "Escape" === o.key ? t.submitRename("") : t.shouldListenForTabKeyboardEvent && o.keyCode === Uz.TAB && (o.preventDefault(), t.submitRename(e), t.onTabKeyboardEvent?.(o.shiftKey));
  });
  return jsx(_$$o, {
    eventListeners: ["onMouseDown"],
    display: "contents",
    children: jsx("input", {
      autoFocus: !0,
      className: t.className || "prototype_starting_point_panel--startingPointNameInput--uR8GY raw_components--textAreaInput--mi1Ag raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t",
      defaultValue: t.defaultValue,
      dir: "auto",
      onBlur: a,
      onChange: r,
      onFocus: t => {
        t.currentTarget.select();
      },
      onKeyDown: l,
      placeholder: "Flow name",
      type: "text"
    })
  });
}
export const m = $$z0;
export const A = $$F1;