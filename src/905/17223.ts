import { jsx } from "react/jsx-runtime";
import { A } from "../905/251970";
import { generateRecordingKey } from "../figma_app/878298";
import { Uz } from "../905/63728";
import { GG } from "../905/511649";
import { getI18nString } from "../905/303541";
import { Lo } from "../905/156213";
import { tf } from "../figma_app/831799";
import { $ } from "../905/355607";
import { Nk, J_ } from "../905/871493";
export let $$m0 = tf(({
  onMouseDown: e,
  onClick: t,
  className: i,
  disabled: d,
  dataOnboardingKey: c,
  dataTestId: m = "close-button",
  "aria-label": h = getI18nString("general.close"),
  ...g
}) => {
  let f = $();
  return jsx(GG, {
    "aria-label": h,
    className: `${Nk} ${i || ""}`,
    "data-fullscreen-intercept": g["data-fullscreen-intercept"],
    "data-not-draggable": !0,
    "data-onboarding-key": c,
    dataTestId: m,
    disabled: d,
    onClick: f ? void 0 : t,
    onKeyDown: e => {
      e.keyCode === Uz.ESCAPE && e.currentTarget.blur();
    },
    onMouseDown: e,
    onPointerDown: f ? t : void 0,
    recordingKey: generateRecordingKey(g, "closeButton"),
    type: "button",
    children: jsx(A, {})
  });
});
$$m0.displayName = "CloseButton";
let $$h1 = function (e) {
  return jsx("div", {
    className: J_,
    style: {
      ...e.customStyle
    },
    "data-testid": "modal-upper-right-corner",
    children: jsx($$m0, {
      ...e
    })
  });
};
let $$g2 = function (e) {
  return jsx($$h1, {
    ...e,
    onClick: () => {
      e.dispatch(Lo());
      e.onClose?.();
    }
  });
};
export const Jn = $$m0;
export const i0 = $$h1;
export const s_ = $$g2;