import { Y5 } from "../figma_app/455680";
export function $$r1(e) {
  Y5.onReady().then(() => {
    Y5.triggerAction("toggle-use-numbers-for-opacity", {
      value: !!e.use_numbers_for_opacity,
      skipSave: !0
    });
  }, () => {});
}
export function $$a0(e, t) {
  !!t.use_numbers_for_opacity != !!e.use_numbers_for_opacity && Y5?.onReady().then(() => {
    Y5.triggerAction("toggle-use-numbers-for-opacity", {
      value: !!t.use_numbers_for_opacity,
      skipSave: !0
    });
  }, () => {});
}
export const f = $$a0;
export const y = $$r1;