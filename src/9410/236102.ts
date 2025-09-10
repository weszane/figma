import { Jh } from "../9410/60886";
import { useCallback, useEffect } from "react";
import { um, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { WS, S7 } from "../7222/396421";
let o = {
  step: "NOT_STARTED",
  data: {
    deckOptions: Jh
  }
};
let l = setupRemovableAtomFamily(() => um(o, (e, t) => {
  switch (t.type) {
    case "SET_STEP":
      if (!function (e, t) {
        let i = "GENERATION_LOADING" === e.step || "DONE" === e.step;
        switch (t) {
          case "NOT_STARTED":
          case "OUTLINE":
            return !i;
          case "GENERATION_LOADING":
            return e.data?.outline !== void 0;
          case "GENERATION_ON_CANVAS":
            return "GENERATION_LOADING" === e.step;
          case "DONE":
            return "GENERATION_LOADING" === e.step || "GENERATION_ON_CANVAS" === e.step;
        }
      }(e, t.step)) return e;
      if ("NOT_STARTED" === t.step) return o;
      return {
        ...e,
        step: t.step
      };
    case "SET_PROMPT":
      if (!d(e)) return e;
      return {
        ...e,
        data: {
          ...e.data,
          prompt: t.prompt
        }
      };
    case "SET_OUTLINE":
      if (!d(e)) return e;
      return {
        ...e,
        data: {
          ...e.data,
          outline: t.outline
        }
      };
    case "SET_TEMPLATE_LIBRARY_KEY":
      if (!d(e)) return e;
      return {
        ...e,
        data: {
          ...e.data,
          templateLibraryKey: t.templateLibraryKey
        }
      };
    case "SET_USECASE":
      return {
        ...e,
        data: {
          ...e.data,
          deckOptions: {
            ...e.data?.deckOptions,
            usecase: t.usecase
          }
        }
      };
    case "SET_SLIDE_COUNT":
      return {
        ...e,
        data: {
          ...e.data,
          deckOptions: {
            ...e.data?.deckOptions,
            slideCount: t.slideCount
          }
        }
      };
    case "SET_TEXT_DENSITY":
      return {
        ...e,
        data: {
          ...e.data,
          deckOptions: {
            ...e.data?.deckOptions,
            textDensity: t.textDensity
          }
        }
      };
  }
}));
function d(e) {
  return "OUTLINE" === e.step;
}
export function $$c2() {
  return useAtomWithSubscription(l).step;
}
export function $$u4() {
  switch ($$c2()) {
    case "NOT_STARTED":
    case "GENERATION_ON_CANVAS":
    case "DONE":
      return !1;
    case "OUTLINE":
    case "GENERATION_LOADING":
      return !0;
  }
}
export function $$p0() {
  return useAtomWithSubscription(l).data;
}
export function $$h1() {
  let [e, t] = useAtomValueAndSetter(l);
  let i = useCallback(() => {
    t({
      type: "SET_STEP",
      step: "OUTLINE"
    });
  }, [t]);
  let a = useCallback(() => {
    t({
      type: "SET_STEP",
      step: "GENERATION_LOADING"
    });
  }, [t]);
  let s = useCallback(() => {
    t({
      type: "SET_STEP",
      step: "GENERATION_ON_CANVAS"
    });
  }, [t]);
  let o = useCallback(() => {
    t({
      type: "SET_STEP",
      step: "DONE"
    });
  }, [t]);
  let d = useCallback(() => {
    t({
      type: "SET_STEP",
      step: "NOT_STARTED"
    });
  }, [t]);
  let c = useCallback(e => {
    t({
      type: "SET_PROMPT",
      prompt: e
    });
  }, [t]);
  let u = useCallback(e => {
    t({
      type: "SET_TEMPLATE_LIBRARY_KEY",
      templateLibraryKey: e
    });
  }, [t]);
  let p = useCallback(e => {
    t({
      type: "SET_OUTLINE",
      outline: e
    });
  }, [t]);
  let h = useCallback(e => {
    t({
      type: "SET_USECASE",
      usecase: e
    });
  }, [t]);
  let m = useCallback(e => {
    t({
      type: "SET_SLIDE_COUNT",
      slideCount: e
    });
  }, [t]);
  let f = useCallback(e => {
    t({
      type: "SET_TEXT_DENSITY",
      textDensity: e
    });
  }, [t]);
  return {
    step: e.step,
    data: e.data,
    start: i,
    createDeck: a,
    showDeckGenerationOnCanvas: s,
    finish: o,
    reset: d,
    setPrompt: c,
    setOutline: p,
    setTemplateLibraryKey: u,
    setUsecase: h,
    setSlideCount: m,
    setTextDensity: f
  };
}
export function $$m3() {
  let {
    data,
    setTemplateLibraryKey
  } = $$h1();
  let i = data?.templateLibraryKey;
  let n = WS();
  let a = n.data || [];
  let o = "loaded" === n.status && a.length > 0;
  let l = a[0];
  let d = S7();
  i ? d = i : o && l && (d = l.library_key);
  useEffect(() => {
    d !== i && setTemplateLibraryKey(d);
  }, [d, i, setTemplateLibraryKey]);
  return d;
}
export const EG = $$p0;
export const JY = $$h1;
export const mG = $$c2;
export const sH = $$m3;
export const wd = $$u4;