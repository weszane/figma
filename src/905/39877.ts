import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { lQ } from "../905/934246";
import { ButtonWide } from "../905/521428";
import { getI18nString, renderI18nText } from "../905/303541";
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
  return jsx(ButtonWide, {
    variant: e ? "secondary" : "primary",
    onClick: e ? i : t,
    ref: r,
    "aria-label": e ? getI18nString("design_systems.libraries_modal.remove_aria_label", {
      libraryName: a
    }) : getI18nString("design_systems.libraries_modal.add_to_file_aria_label", {
      libraryName: a
    }),
    children: e ? renderI18nText("design_systems.libraries_modal.remove") : renderI18nText("design_systems.libraries_modal.add_to_file")
  });
}
export const S = $$p0;
export const u = $$m1;