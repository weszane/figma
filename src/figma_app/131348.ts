import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useRef } from "react";
import { mc, r1, Q$, ME, Ov, rm, b as _$$b, bL } from "../figma_app/860955";
import { Jo, rN } from "../905/872033";
import { h as _$$h } from "../905/207101";
import { usePersistentValue } from "../figma_app/922077";
import { generateRecordingKey, addInteractionPath, removeInteractionPath } from "../figma_app/878298";
import { useDispatch } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { z6, CU } from "../905/963340";
import { r } from "../905/571562";
import { SV } from "../figma_app/272902";
import m from "classnames";
import { L } from "../figma_app/819472";
import { jD } from "../905/765855";
import { KindEnum } from "../905/129884";
import { Yq, wK, OT, Tp, fW } from "../figma_app/769863";
import { sg } from "../figma_app/48566";
import { C as _$$C } from "../figma_app/938538";
var g = m;
function $$I(e) {
  let {
    getTriggerProps,
    isSelected,
    disabled,
    tooltipText,
    onboardingKey,
    "data-testid": p,
    recordingKey
  } = e;
  let b = useDispatch();
  let {
    ref,
    ...S
  } = getTriggerProps();
  let v = Jo();
  let A = SV(v, ref);
  let x = useContext(sg);
  let N = disabled || x;
  let C = L();
  useEffect(() => {
    isSelected && (b(jD()), C());
  }, [isSelected, b, C]);
  return jsx(ButtonPrimitive, {
    ref: A,
    className: g()("tool_group--flyoutChevron--21UP1", {
      "tool_group--flyoutChevronSelected--aAgNx": isSelected,
      "tool_group--flyoutChevronDisabled--eHrKk": N
    }),
    disabled: N,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": tooltipText,
      "data-tooltip-show-above": !0,
      "data-onboarding-key": onboardingKey,
      "data-testid": p
    },
    "aria-label": tooltipText,
    "aria-disabled": N,
    "aria-hidden": N,
    "aria-pressed": isSelected,
    recordingKey: generateRecordingKey(recordingKey, "chevron"),
    ...S,
    children: jsx("span", {
      "aria-hidden": !0,
      children: jsx(r, {})
    })
  });
}
function S(e) {
  let {
    items,
    tooltipText,
    selectedTool,
    onSelect,
    recordingKey
  } = e;
  return jsx(mc, {
    children: jsx(z6, {
      title: jsx(r1, {
        children: tooltipText
      }),
      value: selectedTool.text,
      onChange: (e, {
        event: t
      }) => {
        onSelect(e);
        Yq(t);
      },
      recordingKey: generateRecordingKey(recordingKey, "menu"),
      children: items.map(e => jsxs(CU, {
        value: e.text,
        disabled: e.disabled,
        "data-onboarding-key": e.onboardingKey,
        children: [jsx(Q$, {
          children: e.smallIcon || e.icon
        }), jsxs("div", {
          children: [e.text, jsx(ME, {
            children: e.subtext
          })]
        }), jsx(Ov, {
          children: jsx(rm, {
            children: e.shortcutText
          })
        })]
      }, `tool-${e.toolId}`))
    })
  });
}
export function $$A0(e) {
  let {
    items
  } = e;
  let r = items.filter(e => !e.hidden);
  return r.some(e => !e.disabled) ? jsx(x, {
    ...e,
    items: r
  }) : null;
}
function x(e) {
  let {
    items,
    tooltipText,
    overlayId,
    activeToolId,
    onActivateTool,
    disabled,
    initialToolId,
    onboardingKey,
    chevronOnboardingKey,
    recordingKey = `tool-group-${overlayId}`
  } = e;
  let E = null != activeToolId && wK(items, activeToolId) ? activeToolId : void 0;
  let y = useRef();
  let T = usePersistentValue(E, y);
  _$$h(() => {
    let e = () => y.current = void 0;
    addInteractionPath(e);
    return () => removeInteractionPath(e);
  });
  let A = E || wK(items, T) && T || initialToolId || OT(items).toolId;
  let x = Tp(items, A);
  let N = A === activeToolId;
  let C = generateRecordingKey(recordingKey, `default.${x.recordingKey}`);
  let {
    getTriggerProps,
    manager
  } = _$$b();
  return jsxs(bL, {
    manager,
    children: [jsxs(rN, {
      className: "tool_group--toolGroup--qWm-s",
      "aria-label": x.text,
      children: [jsx(_$$C, {
        "data-testid": `${x.text}-tool`,
        disabled,
        icon: x.icon || x.text,
        isActive: N,
        onClick: () => onActivateTool(A),
        onboardingKey,
        recordingKey: C,
        tooltipShortcut: x.shortcutText,
        tooltipText: x.text
      }), jsx($$I, {
        getTriggerProps,
        isSelected: manager.isOpen,
        disabled,
        tooltipText,
        onboardingKey: chevronOnboardingKey,
        "data-testid": `${overlayId}-chevron`,
        recordingKey
      })]
    }), jsx(S, {
      items,
      tooltipText,
      selectedTool: x,
      onSelect: e => {
        let r = fW(items, e);
        r && onActivateTool(r.toolId);
      },
      recordingKey
    })]
  });
}
export const I = $$A0;