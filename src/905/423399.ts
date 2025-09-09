import { jsx, Fragment } from "react/jsx-runtime";
import { useEffect, memo } from "react";
import { b, YJ } from "../figma_app/860955";
import { H_ } from "../905/963340";
import { useHandleGenericEvent, generateRecordingKey } from "../figma_app/878298";
import { SU } from "../figma_app/451499";
import { g } from "../905/412697";
import { useIsFullscreenSitesView } from "../905/561485";
let u = new SU();
export function $$p0({
  blendMode: e,
  onChange: t,
  id: i
}) {
  let {
    getTriggerProps,
    manager
  } = b();
  let {
    updatePreview,
    clearPreview,
    valueBeforePreview,
    onSubmit
  } = g({
    property: e,
    onChange: t,
    id: i
  });
  useEffect(() => {
    !manager.isOpen && valueBeforePreview && clearPreview();
  }, [valueBeforePreview, manager.isOpen, clearPreview]);
  return {
    getTriggerProps,
    manager,
    updatePreview,
    clearPreview,
    onSubmit,
    valueBeforePreview
  };
}
let $$$$m1 = memo(function ({
  selectedItem: e,
  options: t,
  onChange: i,
  recordingKey: r,
  onFocus: s
}) {
  let o = useIsFullscreenSitesView();
  return jsx(Fragment, {
    children: t.map((t, l) => jsx(YJ, {
      children: t.map(t => jsx(h, {
        option: t,
        checked: t === e,
        onChange: i,
        onFocus: s,
        recordingKey: r,
        disabled: "LINEAR_BURN" === t && o
      }, `blend-menu-option-${t}`))
    }, l))
  });
});
let h = memo(function ({
  option: e,
  checked: t,
  onChange: i,
  recordingKey: r,
  disabled: a,
  onFocus: l
}) {
  let d = useHandleGenericEvent(generateRecordingKey(r, e), "focus", () => {
    a || l?.(e);
  });
  return jsx(H_, {
    recordingKey: generateRecordingKey(r, e),
    disabled: a,
    checked: t,
    onChange: () => i(e),
    htmlAttributes: {
      onFocus: d
    },
    children: u.format(e)
  }, `blend-menu-option-${e}`);
});
export const Z = $$p0;
export const m = $$$$m1;