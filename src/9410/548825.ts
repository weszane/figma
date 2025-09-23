import { useEffect } from "react";
import { ServiceCategories } from "../905/165054";
import { AppStateTsApi } from "../figma_app/763686";
import { v } from "../figma_app/163822";
import { getSingletonSceneGraph } from "../905/700578";
import { $convertFromMarkdownString, UNORDERED_LIST, ORDERED_LIST } from "../vendor/693164";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { atomStoreManager, Xr } from "../figma_app/27355";
import { CLEAR_EDITOR_COMMAND } from "lexical";
import { logError } from "../905/714362";
import { JT } from "../figma_app/632248";
import { wj, qy } from "../figma_app/862289";
import { hD } from "../figma_app/164260";
export function $$g6(e, t = "history-push") {
  let i = atomStoreManager.get(hD);
  i && i.update(() => {
    $convertFromMarkdownString(e, [UNORDERED_LIST, ORDERED_LIST]);
  }, {
    tag: t
  });
}
export function $$_8(e, t) {
  let i = getSingletonSceneGraph().get(e);
  if (i) try {
    i.slideSpeakerNotes = t;
  } catch (e) {
    logError(ServiceCategories.SLIDES, "Failed to set slide speaker notes", {
      error: e
    });
  }
}
export function $$x5() {
  let e = atomStoreManager.get(hD);
  e && e.dispatchCommand(CLEAR_EDITOR_COMMAND, void 0);
}
export function $$y4() {
  let [e] = useLexicalComposerContext();
  let t = Xr(hD);
  useEffect(() => {
    t(e);
  }, [e, t]);
  return null;
}
export function $$b0() {
  let [e] = useLexicalComposerContext();
  let t = $$C7();
  useEffect(() => {
    t ? e.setEditable(!1) : e.setEditable(!0);
  }, [e, t]);
  return null;
}
export function $$C7() {
  return wj(JT.SLIDES_GENERATE_SPEAKER_NOTES).state === qy.RUNNING;
}
export function $$v1() {
  AppStateTsApi?.editorPreferences().speakerNotesHeight.set(0);
}
export function $$E9(e) {
  AppStateTsApi?.editorPreferences().speakerNotesHeight.set(e);
}
export function $$T2(e, t, i, r) {
  let n = e.absoluteTransform.m12 > i && e.absoluteTransform.m12 + e.absoluteBoundingBox.h < r;
  let a = e.fontSize > t;
  return e.visible && (a || n);
}
export async function $$w3(e) {
  let t = getSingletonSceneGraph().get(e);
  if (t) return await v(t);
}
export const B_ = $$b0;
export const Hk = $$v1;
export const O = $$T2;
export const Yu = $$w3;
export const ap = $$y4;
export const gH = $$x5;
export const hp = $$g6;
export const k8 = $$C7;
export const lq = $$_8;
export const ud = $$E9;
