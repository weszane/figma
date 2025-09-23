import { ServiceCategories as _$$e } from "../905/165054";
import { AppStateTsApi, SlideConstantsCppBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { mz } from "../figma_app/456871";
import { cortexAPI, StreamAsyncIterator } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { fullscreenValue } from "../figma_app/455680";
import { JT } from "../figma_app/632248";
import { B3, Ag, cT } from "../figma_app/862289";
import { zF } from "../figma_app/297822";
import { ed, hD, TD } from "../figma_app/164260";
import { yU } from "../figma_app/509285";
import { $3, Ay as _$$Ay2, k0, dk } from "../9410/172674";
import { x as _$$x, f as _$$f } from "../9410/391621";
import { O as _$$O, ud, gH, Yu, hp } from "../9410/548825";
let v = e => {
  let t = mz();
  let i = getSingletonSceneGraph().get(e);
  if (!i) return t;
  let r = i.absoluteTransform.m12;
  let n = i.absoluteBoundingBox.h;
  let s = .1 * n;
  let o = r + s;
  let l = r + n - s;
  return t.filter(e => _$$O(e, 24, o, l));
};
let $$E0 = async ({
  params: e,
  abortController: t,
  clientLifecycleId: i
}) => {
  let {
    source
  } = e;
  let c = debugState.getState().openFile?.key;
  let T = atomStoreManager.get(ed);
  let w = atomStoreManager.get(hD);
  if (!w) {
    reportError(_$$e.AI_PRODUCTIVITY, Error("Editor is null when trying to generate speaker notes"));
    return;
  }
  let S = w.getEditorState();
  atomStoreManager.set(TD, S);
  let j = (AppStateTsApi?.editorPreferences().speakerNotesHeight.getCopy() ?? 0) === 0;
  _$$x({
    eventName: "started",
    fileKey: c,
    slideId: T,
    source
  });
  let I = !1;
  try {
    let e;
    $3(T);
    AppStateTsApi?.singleSlideView() && j && ud(SlideConstantsCppBindings?.initialSpeakerNotesHeightInViewport() ?? 0);
    w.setEditorState(w.getEditorState());
    let r = {
      ..._$$Ay(),
      clientLifecycleId: i
    };
    let a = v(T);
    _$$Ay2(a);
    gH();
    let o = a.map(e => ({
      text: e.characters,
      x: e.absoluteTransform.m02,
      y: e.absoluteTransform.m12
    }));
    getFeatureFlags().figjam_ai_piper_speaker_notes_image_filtering ? yU(T) && (e = await Yu(T), I = !0) : (e = await Yu(T), I = !0);
    let l = {
      texts: o,
      image: e
    };
    let d = await cortexAPI.slides.speakerNotes(l, r);
    let m = new StreamAsyncIterator(d);
    if (t.signal.aborted) {
      _$$x({
        eventName: "stopped",
        fileKey: c,
        slideId: T,
        imageIncluded: I
      });
      return;
    }
    let f = "";
    for await (let e of m) {
      if (t.signal.aborted) {
        _$$x({
          eventName: "stopped",
          fileKey: c,
          slideId: T,
          imageIncluded: I
        });
        return;
      }
      f += e.delta;
      (f = f.replace(/(.) -/g, "$1\n -")).length > 0 && hp(f, "history-merge");
    }
    fullscreenValue.commit();
    _$$x({
      eventName: "finished",
      fileKey: c,
      slideId: T,
      imageIncluded: I
    });
    return;
  } catch (e) {
    w.setEditorState(S);
    k0(e, () => {
      (function () {
        let e = _$$f.TRY_AGAIN;
        atomStoreManager.set(zF, e);
        B3(JT.SLIDES_GENERATE_SPEAKER_NOTES);
        Ag(JT.SLIDES_GENERATE_SPEAKER_NOTES, $$E0, {
          source: e
        });
      })();
    });
    _$$x({
      eventName: "failed",
      fileKey: c,
      slideId: T,
      imageIncluded: I,
      errorType: e.type || e.marker
    });
    cT(JT.SLIDES_GENERATE_SPEAKER_NOTES);
    dk.some(t => e instanceof t) || reportError(_$$e.AI_PRODUCTIVITY, Error(`Unexpected error encountered while generating speaker notes: ${e.message}`));
    return;
  }
};
export const O = $$E0;