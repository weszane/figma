import { jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { o as _$$o } from "../905/821217";
import { E as _$$E } from "../905/632989";
import { O } from "../905/969533";
import l from "classnames";
import { Pt } from "../figma_app/806412";
import { YQ } from "../905/502364";
import { hx } from "../figma_app/290668";
import { BK } from "../905/848862";
import { Ib } from "../905/129884";
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
  let v = BK(r);
  let A = E || createRef();
  return jsx(_$$o, {
    eventListeners: ["onClick", "onMouseDown"],
    children: jsx(_$$E, {
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
      "data-tooltip-type": Ib.TEXT,
      htmlAttributes: {
        onKeyDown: e => hx({
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
        }), T && YQ({
          id: T,
          properties: {
            dropdownKey: r
          }
        }));
      },
      recordingKey: Pt(I, "chevron"),
      children: jsx(O, {})
    })
  });
}
export const c = $$g0;