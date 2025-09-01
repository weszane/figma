import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { lQ } from "../905/934246";
import { IK } from "../905/521428";
import { t as _$$t, tx } from "../905/303541";
import { _ } from "../905/381235";
import { Px } from "../905/825399";
import { hx } from "../905/66449";
import { W } from "../905/729905";
export function $$p0({
  publishedLibrary: e,
  onSubscribe: t = lQ,
  kbPath: i,
  kbColumn: s,
  entrypoint: o,
  positionForLogging: p,
  teamPositionForLogging: h
}) {
  let g = Px(e);
  let {
    teamPosition,
    workspacePosition
  } = W.usePositionDataForLogging();
  let A = W.useMetadataForSubscribeEvent(e, {
    libraryPosition: p,
    teamPosition: h ?? teamPosition,
    workspacePosition,
    entrypoint: o
  });
  let {
    subscribe,
    unsubscribe
  } = _(e, A);
  let v = useCallback(e => {
    subscribe();
    t();
    e.stopPropagation();
  }, [subscribe, t]);
  let I = useCallback(e => {
    unsubscribe();
    e.stopPropagation();
  }, [unsubscribe]);
  let {
    setKeyboardNavigationElement
  } = hx({
    path: i,
    column: s
  });
  return jsx($$m1, {
    isSubscribedTo: !!g,
    subscribeCallback: v,
    unsubscribeCallback: I,
    setKeyboardNavigationElement,
    libraryName: e.library_name
  });
}
export function $$m1({
  isSubscribedTo: e,
  subscribeCallback: t,
  unsubscribeCallback: i,
  setKeyboardNavigationElement: r,
  libraryName: a
}) {
  return jsx(IK, {
    variant: e ? "secondary" : "primary",
    onClick: e ? i : t,
    ref: r,
    "aria-label": e ? _$$t("design_systems.libraries_modal.remove_aria_label", {
      libraryName: a
    }) : _$$t("design_systems.libraries_modal.add_to_file_aria_label", {
      libraryName: a
    }),
    children: e ? tx("design_systems.libraries_modal.remove") : tx("design_systems.libraries_modal.add_to_file")
  });
}
export const S = $$p0;
export const u = $$m1;