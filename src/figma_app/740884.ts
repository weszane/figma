import { jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { EventShield } from "../905/821217";
import { ButtonPrimitive } from "../905/632989";
import { O } from "../905/969533";
import l from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { handleAtomEvent } from "../905/502364";
import { handleAccessibilityKeyboardEvents } from "../figma_app/290668";
import { useDropdown } from "../905/848862";
import { KindEnum } from "../905/129884";
import { FH, u as _$$u } from "../905/38438";
var d = l;
export function $$g0({
  ariaLabel: e,
  className: t,
  dropdownKey: r,
  tooltipText: l,
  additionalDispatchData: g,
  toggleOnClick: f,
  divRef: E,
  dataTestId: y,
  dataOnboardingKey: b,
  rcsHandlerId: T,
  recordingKey: I,
  canOpenDropdown: S
}) {
  let v = useDropdown(r);
  let A = E || createRef();
  return jsx(EventShield, {
    eventListeners: ["onClick", "onMouseDown"],
    children: jsx(ButtonPrimitive, {
      ref: A,
      actionOnPointerDown: !f,
      "aria-expanded": v.showing,
      "aria-label": e,
      className: d()(FH, t, {
        [_$$u]: v.showing
      }),
      "data-onboarding-key": b,
      "data-testid": y,
      "data-tooltip": l,
      "data-tooltip-type": KindEnum.TEXT,
      htmlAttributes: {
        onKeyDown: e => handleAccessibilityKeyboardEvents({
          e,
          onClickHandler: () => v.toggle(),
          onEscapeHandler: E?.current?.blur
        })
      },
      onClick: () => {
        (!S || S()) && A?.current && (v.toggle({
          data: {
            ...g,
            targetRect: A?.current.getBoundingClientRect()
          }
        }), T && handleAtomEvent({
          id: T,
          properties: {
            dropdownKey: r
          }
        }));
      },
      recordingKey: generateRecordingKey(I, "chevron"),
      children: jsx(O, {})
    })
  });
}
export const c = $$g0;