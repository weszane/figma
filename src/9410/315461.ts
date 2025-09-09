import { useCallback } from "react";
import { useSelector } from "react-redux";
import { AnimationTriggerType } from "../figma_app/763686";
import { analyticsEventManager } from "../905/449184";
import { isInvalidValue } from "../905/216495";
import { useCurrentFileKey } from "../figma_app/516028";
import { AF } from "../figma_app/889655";
import { Jb } from "../figma_app/224338";
function u() {
  let e = useCurrentFileKey() ?? "";
  let t = Jb() ?? "";
  let i = useSelector(AF);
  return {
    fileKey: e,
    slideId: t,
    nodeId: i?.guid
  };
}
export function $$p5() {
  let e = u();
  return useCallback((t, i) => {
    analyticsEventManager.trackDefinedEvent("slides.modify_object_animation.type", {
      ...e,
      oldValue: t,
      newValue: i
    });
  }, [e]);
}
export function $$h6() {
  let e = u();
  return useCallback((t, i) => {
    analyticsEventManager.trackDefinedEvent("slides.modify_object_animation.duration", {
      ...e,
      oldValue: t,
      newValue: i
    });
  }, [e]);
}
export function $$m0() {
  let e = u();
  return useCallback((t, i) => {
    let r = e => void 0 === e ? void 0 : isInvalidValue(e) ? "MIXED" : e === AnimationTriggerType.TRIGGER ? "TRIGGER" : "AFTER_PREVIOUS";
    analyticsEventManager.trackDefinedEvent("slides.modify_object_animation.start_condition", {
      ...e,
      oldValue: r(t),
      newValue: r(i)
    });
  }, [e]);
}
export function $$f4() {
  let e = u();
  return useCallback((t, i) => {
    analyticsEventManager.trackDefinedEvent("slides.modify_object_animation.phase", {
      ...e,
      oldValue: t,
      newValue: i
    });
  }, [e]);
}
export function $$g3() {
  let e = u();
  return useCallback(() => {
    analyticsEventManager.trackDefinedEvent("slides.reorder_object_animation", e);
  }, [e]);
}
export function $$_1() {
  let e = u();
  return useCallback(() => {
    analyticsEventManager.trackDefinedEvent("slides.delete_object_animation", e);
  }, [e]);
}
export function $$x2() {
  let e = u();
  return useCallback(t => {
    analyticsEventManager.trackDefinedEvent("slides.preview_object_animation", {
      ...e,
      numAnimations: t
    });
  }, [e]);
}
export const AC = $$m0;
export const D0 = $$_1;
export const Mp = $$x2;
export const Z4 = $$g3;
export const sQ = $$f4;
export const tx = $$p5;
export const xl = $$h6;