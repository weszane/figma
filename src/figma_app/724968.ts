import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useRef, useMemo, useEffect } from "react";
import { xw, TU } from "../905/585727";
import { y1 } from "../905/869092";
import { lQ } from "../905/934246";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuTitleComp, MenuItemComp } from "../figma_app/860955";
import { IconButton } from "../905/443068";
import { d as _$$d } from "../905/976845";
import { bL as _$$bL, c$ } from "../905/575478";
import { q as _$$q } from "../905/932270";
import { s as _$$s } from "../905/551945";
import { T as _$$T } from "../905/632137";
import { a as _$$a } from "../905/964520";
import { ImageToolsBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { xk } from "@stylexjs/stylex";
import { getFeatureFlags } from "../905/601108";
import { createLocalStorageAtom, useAtomValueAndSetter, atomStoreManager } from "../figma_app/27355";
import { KeyCodes } from "../905/63728";
import { uint8ArrayToBase64, base64ToUint8Array } from "../figma_app/930338";
import { oW } from "../905/675859";
import { getI18nString, renderI18nText } from "../905/303541";
import { canvasGridAtom } from "../905/618447";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { zD } from "../figma_app/109758";
import { fullscreenValue } from "../figma_app/455680";
import { UD } from "../figma_app/624361";
import { Mo } from "../905/913055";
import { useCurrentUserOrg } from "../905/845253";
import { XJ, VG, gg, qY } from "../905/23253";
import { JT, LC } from "../figma_app/632248";
import { s as _$$s2, w as _$$w } from "../905/286488";
import { RL, B3, qy } from "../figma_app/862289";
import { cq } from "../905/794154";
import { a as _$$a2 } from "../905/290931";
import { hm } from "../905/487011";
import { Cq, $J, o2, sd } from "../905/278499";
import { c as _$$c } from "../905/566438";
import { F1 } from "../figma_app/171177";
import { B as _$$B } from "../905/222272";
import { _ as _$$_ } from "../905/614936";
import { aU } from "../figma_app/360824";
import { I as _$$I } from "../905/537408";
import { E as _$$E, f as _$$f } from "../905/690713";
import { A as _$$A } from "../905/721854";
import { is, Oq, R as _$$R } from "../905/904596";
import { A as _$$A2 } from "../905/296182";
import { F as _$$F } from "../905/382217";
import { z as _$$z } from "../905/634240";
import { is as _$$is, eQ, cb, ui, Xo, vj, pN } from "../905/561689";
import { xJ, qq } from "../figma_app/514229";
import { O as _$$O, n as _$$n } from "../905/353086";
import { V as _$$V, z as _$$z2 } from "../905/919335";
let er = createLocalStorageAtom("generate_image_prompt_history", []);
let en = createLocalStorageAtom("edit_image_prompt_history", []);
let ei = createLocalStorageAtom("generate_image_model_type", void 0);
let ea = createLocalStorageAtom("edit_image_model_type", void 0);
var es = (e => (e.SUCCESS = "SUCCESS", e.MODEL_DOES_NOT_SUPPORT_REFERENCES = "MODEL_DOES_NOT_SUPPORT_REFERENCES", e.MAX_REFERENCES_EXCEEDED = "MAX_REFERENCES_EXCEEDED", e))(es || {});
function eo(e) {
  return Array.from({
    length: e
  }, () => ({
    state: "PENDING"
  }));
}
export async function $$el1(e) {
  let t = e.map(async e => {
    let t = getSingletonSceneGraph().get(e.nodeGuid);
    if (!t) return null;
    try {
      let r = xJ(e.imageHash);
      let n = uint8ArrayToBase64(r);
      let i = XJ({
        node: t,
        hash: n
      });
      return await VG(i);
    } catch (e) {
      console.error("[ReferenceImages] Failed:", e.message || e);
      return null;
    }
  });
  return (await Promise.allSettled(t)).flatMap(e => "fulfilled" === e.status && e.value ? [e.value] : []);
}
function ed(e) {
  return "original" === e ? "0" : e;
}
export function $$ec2({
  fileInputRef: e,
  disabled: t,
  tooltip: r,
  onFileUpload: a,
  multiple: s
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  let h = useCallback(async t => {
    let r = t.target.files;
    if (!r || 0 === r.length) return;
    let n = Array.from(r);
    let i = e => {
      e.imageHash && a({
        nodeGuid: e.nodeGuid,
        imageHash: e.imageHash
      });
    };
    await Promise.allSettled(n.map(e => _$$z(e, i)));
    e.current && (e.current.value = "");
  }, [e, a]);
  let m = jsx(IconButton, {
    onClick: () => e.current?.click(),
    "aria-label": r,
    "data-tooltip-show-above": !0,
    variant: "secondary",
    disabled: t,
    children: jsx(_$$s, {})
  });
  let g = jsxs(MenuRootComp, {
    manager,
    children: [jsx("div", {
      className: "x19y5rnk x1q3zegg",
      children: jsx(_$$d, {
        ...getTriggerProps(),
        "aria-label": r,
        "data-tooltip-show-above": !0,
        variant: "secondary",
        disabled: t,
        children: jsx(_$$s, {})
      })
    }), jsxs(MenuContainerComp, {
      children: [jsx(MenuTitleComp, {
        children: getI18nString("image_ai.edit_image.attach_reference_image")
      }), jsx(MenuItemComp, {
        onClick: () => e.current?.click(),
        disabled: t,
        children: getI18nString("image_ai.edit_image.upload_image")
      }), jsx(MenuItemComp, {
        onClick: lQ,
        disabled: t,
        children: getI18nString("image_ai.edit_image.select_from_canvas")
      })]
    })]
  });
  return jsxs(Fragment, {
    children: [jsx("input", {
      ref: e,
      type: "file",
      accept: "image/*",
      multiple: s,
      "aria-label": getI18nString("image_ai.edit_image.upload_image"),
      style: {
        display: "none"
      },
      onChange: h
    }), getFeatureFlags().aip_attach_reference_image_add_entrypoints ? g : m]
  });
}
function eu({
  action: e
}) {
  let [t, r] = useState(e);
  let [a, s] = useState(eo(_$$is(t)));
  let [o, l] = useState(void 0);
  let [d, c] = useState(void 0);
  let u = useCallback(() => {
    s(eo(_$$is(t)));
    l(void 0);
  }, [t]);
  let p = useCallback(e => {
    s(t => {
      let r = [...t];
      let n = r.findIndex(e => "PENDING" === e.state);
      r[n] = {
        state: "SUCCESS",
        image: e
      };
      r.sort((e, t) => {
        let r = {
          SUCCESS: 1,
          FAILURE: 2,
          PENDING: 3
        };
        return r[e.state] - r[t.state];
      });
      return r;
    });
  }, []);
  let _ = useCallback(() => {
    s(e => {
      let t = [...e];
      let r = t.findIndex(e => "PENDING" === e.state);
      t[r] = {
        state: "FAILURE"
      };
      return t;
    });
  }, []);
  return t === JT.GENERATE_IMAGE ? jsx(eg, {
    onIterate: e => {
      r(JT.EDIT_IMAGE);
      c(e);
    },
    onReset: u,
    focusedOption: o,
    onFocusedOptionChange: l,
    onImageSuccess: p,
    onImageFailed: _,
    imageResults: a
  }) : t === JT.EDIT_IMAGE ? jsx(ef, {
    onReset: u,
    focusedOption: o,
    onFocusedOptionChange: l,
    initialEditTarget: d,
    onImageSuccess: p,
    onImageFailed: _,
    imageResults: a
  }) : null;
}
function ep(e) {
  let t = getSingletonSceneGraph().get(e.guid);
  if (!t) return;
  let r = t.fills[e.fillIndex];
  if (r) return {
    node: t,
    fill: r
  };
}
function e_(e, t) {
  hm({
    ...t,
    interaction_type: Cq.BUTTON_CLICK,
    iteration_view_type: $J.SUCCESS_WITH_ITERATION,
    status: o2.COMPLETED,
    interaction: sd.GALLERY_SELECT,
    value: ed(e)
  });
}
function eh(e, t, {
  keyboard: r
} = {
  keyboard: !1
}) {
  hm({
    ...t,
    ...(r ? {
      interaction_type: Cq.KEYBOARD_SHORTCUT,
      keyboard_shortcut: F1({
        key: KeyCodes.ENTER
      })
    } : {
      interaction_type: Cq.BUTTON_CLICK
    }),
    iteration_view_type: $J.SUCCESS_WITH_ITERATION,
    status: o2.COMPLETED,
    interaction: sd.GALLERY_ACCEPT,
    value: ed(e)
  });
}
function em({
  modelType: e
}) {
  let t;
  let [r, n] = useState([]);
  let o = useRef(null);
  let l = getFeatureFlags().aip_attach_reference_image;
  let d = e && [xw.GPT_4O_IMAGE, TU.OPENAI_GPT_IMAGE_1, TU.GOOGLE_GEMINI_2_0_FLASH_PREVIEW_IMAGE_GENERATION].includes(e) ? r.length >= y1 ? "MAX_REFERENCES_EXCEEDED" : "SUCCESS" : "MODEL_DOES_NOT_SUPPORT_REFERENCES";
  switch (d) {
    case "MODEL_DOES_NOT_SUPPORT_REFERENCES":
      t = getI18nString("image_ai.edit_image.model_does_not_support_reference_images");
      break;
    case "MAX_REFERENCES_EXCEEDED":
      t = getI18nString("image_ai.edit_image.max_reference_images_added");
      break;
    case "SUCCESS":
      t = getI18nString("image_ai.edit_image.attach_reference_image");
  }
  let c = "MODEL_DOES_NOT_SUPPORT_REFERENCES" === d && r.length > 0;
  return {
    referenceImages: r,
    setReferenceImages: n,
    fileInputRef: o,
    enableReferenceImage: l,
    referenceButtonTooltip: t,
    isReferenceButtonDisabled: "SUCCESS" !== d,
    isSubmitDisabled: c,
    handleFileUpload: e => {
      n(t => t.length >= y1 ? t : [...t, e]);
    }
  };
}
function eg({
  onReset: e,
  focusedOption: t,
  onFocusedOptionChange: r,
  onIterate: a,
  onImageSuccess: s,
  onImageFailed: o,
  imageResults: l
}) {
  let d = useCurrentUserOrg();
  let c = useIsSelectedViewFullscreenCooper();
  let u = useMemo(() => _$$O(JT.GENERATE_IMAGE, d), [d]);
  let [p, _] = useAtomValueAndSetter(ei);
  let h = u[0]?.value;
  let m = p ?? h;
  useEffect(() => {
    p && !u.find(e => e.value === p) && _(void 0);
  }, [u, p, _]);
  let {
    referenceImages,
    enableReferenceImage,
    fileInputRef,
    isReferenceButtonDisabled,
    referenceButtonTooltip,
    isSubmitDisabled,
    handleFileUpload
  } = em({
    modelType: m
  });
  let {
    close
  } = cq();
  let [G, H] = useState("");
  let {
    promptHistory,
    addPromptToHistory
  } = _$$a2(er, e => e);
  let [Y] = useState(_$$V(4));
  let J = atomStoreManager.get(canvasGridAtom);
  let [en, ea] = useState(eQ());
  let es = useMemo(() => ({
    modelType: m
  }), [m]);
  let eo = RL(JT.GENERATE_IMAGE, cb, es);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = eo;
  let ef = gg(state);
  let eE = useCallback(() => {
    ey.current = void 0;
    ea(void 0);
    B3(JT.GENERATE_IMAGE);
    e();
  }, [e]);
  let ey = useRef();
  let eT = useCallback(async () => {
    let e;
    eE();
    let t = en ?? eQ();
    if (t && !ui(t) && (t = eQ()), t && "componentPropDefId" in t) {
      if (!(e = getSingletonSceneGraph().get(t.guid))) return;
    } else (e = qq({
      create: !0,
      canvasGrid: J
    })).guid !== t?.guid && (t = {
      guid: e.guid,
      fillIndex: e.fills.length - 1
    });
    ey.current = t;
    ea(t);
    addPromptToHistory(G);
    let r = async e => {
      let r = await UD(base64ToUint8Array(e), "image/png", G);
      t === ey.current && s(r);
    };
    let n = qY(e);
    let i = Math.max(e.size.x, e.size.y);
    let a = "componentPropDefId" in t ? {
      width: i,
      height: i
    } : {
      width: e.size.x,
      height: e.size.y
    };
    try {
      let e = await $$el1(referenceImages);
      await start({
        action: JT.GENERATE_IMAGE,
        prompt: G,
        images: e,
        dimensions: a,
        onImageSuccess: r,
        onImageFailed: o,
        modelType: m,
        numGenerations: l.length
      });
    } catch (t) {
      zD({
        node: e
      });
      return t;
    } finally {
      n();
    }
  }, [en, J, addPromptToHistory, G, s, start, referenceImages, o, m, l.length, eE]);
  let eI = useCallback(e => {
    if (!en) {
      eE();
      return;
    }
    let n = getSingletonSceneGraph().get(en.guid);
    if (!n) {
      eE();
      return;
    }
    t !== e && (r(e), e_(e, aiTrackingContext), Mo(n, "fill-paint-data").forEach(t => {
      let r = Number(e);
      if (isNaN(r) || !l[r] || "SUCCESS" !== l[r].state) return;
      let n = l[r].image;
      Xo({
        node: t,
        image: n,
        fillIndex: "fillIndex" in en ? en.fillIndex : void 0,
        componentPropDefId: "componentPropDefId" in en ? en.componentPropDefId : void 0,
        action: JT.GENERATE_IMAGE
      });
    }), fullscreenValue.triggerAction("commit"), "fillIndex" in en && void 0 === en.fillIndex && ea({
      guid: n.guid,
      fillIndex: n.fills.length - 1
    }));
  }, [en, t, r, aiTrackingContext, eE, l]);
  let eS = useCallback((e, t) => {
    eI(e);
    eh(e, aiTrackingContext, t);
    close();
  }, [eI, close, aiTrackingContext]);
  useEffect(() => {
    if (t) return;
    let e = l.findIndex(e => "SUCCESS" === e.state);
    -1 !== e && eI(e.toString());
  }, [t, l, eI]);
  useEffect(() => () => {
    stop();
    B3(JT.GENERATE_IMAGE);
  }, [stop]);
  let ev = l.length > 1 ? jsx(eb, {
    prompt: G,
    imageResults: l,
    onSelect: eI,
    onAccept: eS,
    value: t
  }) : null;
  let eA = useCallback(() => {
    en && "fillIndex" in en && void 0 !== en.fillIndex && a({
      guid: en.guid,
      fillIndex: en.fillIndex
    });
  }, [en, a]);
  let ex = useMemo(() => [{
    type: is.BACK,
    callback: eE
  }, ...(en && "componentPropDefId" in en ? [] : [{
    type: is.MAKE_CHANGES,
    callback: eA
  }])], [eE, eA, en]);
  switch (state) {
    case qy.INITIAL:
      return jsx(_$$A2, {
        action: JT.GENERATE_IMAGE,
        aiTrackingContext,
        ariaLabel: getI18nString("cooper.inline_menu.make_an_image"),
        disableSubmit: enableReferenceImage && isSubmitDisabled,
        extraFooter: jsxs(_$$B, {
          gap: 8,
          align: "center",
          children: [jsx(_$$n, {
            modelType: m,
            setModelType: _,
            action: JT.GENERATE_IMAGE
          }), enableReferenceImage && jsx($$ec2, {
            fileInputRef,
            disabled: isReferenceButtonDisabled,
            tooltip: referenceButtonTooltip,
            onFileUpload: handleFileUpload,
            multiple: !0
          })]
        }),
        featureNameForInstrumentation: "generate_image",
        maxLength: 512,
        minLength: 3,
        onBack: c ? close : void 0,
        onChangePrompt: H,
        onRun: eT,
        prompt: G,
        promptHistory,
        submitLabel: renderI18nText("ai.make_it"),
        suggestion: Y[0]?.prompt,
        suggestionPills: Y.slice(1),
        useClose: c
      });
    case qy.RUNNING:
      return jsx(_$$F, {
        content: ev,
        onCancel: close,
        aiTrackingContext,
        children: ef || renderI18nText("image_ai.make_image.processing")
      });
    case qy.DONE:
      let eN = {
        ...aiTrackingContext,
        iteration_view_type: $J.SUCCESS_WITH_ITERATION
      };
      return jsx(Oq, {
        iterateOptions: ex,
        targets: en ? [en.guid] : [],
        content: ev,
        aiTrackingContext: eN
      });
    case qy.ERROR:
      return jsx(_$$E, {
        error: eo.error,
        buttons: [{
          type: _$$f.GO_BACK,
          callback: eE
        }],
        aiTrackingContext
      });
    case qy.CANCELLED:
      return null;
  }
}
function ef({
  onReset: e,
  focusedOption: t,
  onFocusedOptionChange: r,
  initialEditTarget: a,
  onImageSuccess: s,
  onImageFailed: l,
  imageResults: d
}) {
  let c = useCurrentUserOrg();
  let u = useIsSelectedViewFullscreenCooper();
  let p = useMemo(() => _$$O(JT.EDIT_IMAGE, c), [c]);
  let [_, m] = useAtomValueAndSetter(ea);
  let f = p[0]?.value;
  let E = _ ?? f;
  useEffect(() => {
    _ && !p.find(e => e.value === _) && m(void 0);
  }, [p, _, m]);
  let {
    referenceImages,
    enableReferenceImage,
    fileInputRef,
    isReferenceButtonDisabled,
    referenceButtonTooltip,
    isSubmitDisabled,
    handleFileUpload
  } = em({
    modelType: E
  });
  let {
    close
  } = cq();
  let [H, J] = useState("");
  let {
    promptHistory,
    addPromptToHistory
  } = _$$a2(en, e => e);
  let [ei] = useState(_$$z2(4));
  let [es, eo] = useState(a);
  let [ed, eu] = useState();
  let eg = useMemo(() => ({
    modelType: E
  }), [E]);
  let ef = RL(JT.EDIT_IMAGE, cb, eg);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = ef;
  let eS = gg(state);
  let ev = useCallback(() => {
    eA.current = void 0;
    eu(void 0);
    eo(void 0);
    B3(JT.EDIT_IMAGE);
    e();
  }, [e]);
  let eA = useRef();
  let ex = useCallback(async () => {
    ev();
    let e = es ?? vj();
    if (!e || !pN(e)) return;
    let t = ep(e);
    if (!t) return;
    let {
      node,
      fill
    } = t;
    eA.current = e;
    eo(e);
    (async t => {
      let r = await _$$I(t);
      if (!r) return;
      let n = await UD(r, "image/png", H);
      e === eA.current && eu({
        fill: t,
        image: n
      });
    })(fill);
    addPromptToHistory(H);
    J("");
    let i = async t => {
      let r = await UD(base64ToUint8Array(t), "image/png", H);
      e === eA.current && s(r);
    };
    let a = qY(node);
    let o = {
      width: fill.originalImageWidth ?? node.size.x,
      height: fill.originalImageHeight ?? node.size.y
    };
    try {
      let e = await VG(fill);
      let t = await $$el1(referenceImages);
      await start({
        action: JT.EDIT_IMAGE,
        prompt: H,
        images: [e, ...t],
        dimensions: o,
        onImageSuccess: i,
        onImageFailed: l,
        modelType: E,
        numGenerations: d.length
      });
    } finally {
      a();
    }
  }, [es, addPromptToHistory, H, ev, s, start, l, E, referenceImages, d.length]);
  let eN = useCallback(e => {
    if (!es) {
      ev();
      return;
    }
    let n = ep(es);
    if (!n) {
      ev();
      return;
    }
    let {
      node,
      fill
    } = n;
    t !== e && (r(e), e_(e, aiTrackingContext), Mo(node, "fill-paint-data").forEach(t => {
      let r;
      if ("original" === e) {
        if (!ed) return;
        r = ed.image;
      } else {
        let t = Number(e);
        if (isNaN(t) || !d[t] || "SUCCESS" !== d[t].state) return;
        r = d[t].image;
      }
      Xo({
        node: t,
        image: r,
        fillIndex: es.fillIndex,
        originalFill: fill,
        action: JT.EDIT_IMAGE
      });
    }), fullscreenValue.triggerAction("commit"));
  }, [es, ed, t, r, ev, d, aiTrackingContext]);
  let eC = useCallback((e, t) => {
    eN(e);
    eh(e, aiTrackingContext, t);
    close();
  }, [eN, close, aiTrackingContext]);
  useEffect(() => {
    if (t) return;
    let e = d.findIndex(e => "SUCCESS" === e.state);
    -1 !== e && eN(e.toString());
  }, [t, d, eN]);
  useEffect(() => () => {
    stop();
    B3(JT.EDIT_IMAGE);
  }, [stop]);
  let ew = _$$s2(JT.EDIT_IMAGE);
  let eO = useCallback(() => (ImageToolsBindings?.getNodeImagePairsForEdit().length ?? 0) > 1 ? renderI18nText("image_ai.background_remove.only_one_image") : renderI18nText("image_ai.background_remove.instruction"), []);
  let eR = useMemo(() => {
    if (state !== qy.INITIAL) return ed ? {
      state: "SUCCESS",
      image: ed.image
    } : {
      state: "PENDING"
    };
  }, [ed, state]);
  let eL = jsx(eb, {
    originalImage: eR,
    prompt: H,
    imageResults: d,
    onSelect: eN,
    onAccept: eC,
    value: t
  });
  let eP = (() => {
    let e = {
      ...aiTrackingContext,
      iteration_view_type: $J.SUCCESS_WITH_ITERATION
    };
    return jsx(_$$R, {
      iterateOptions: [{
        type: is.MAKE_CHANGES,
        callback: lQ
      }],
      targets: es ? [es.guid] : [],
      content: jsxs(Fragment, {
        children: [eL, jsx(aU, {
          action: JT.EDIT_IMAGE,
          value: H,
          onChange: J,
          minLength: 3,
          maxLength: 512,
          aiTrackingContext: e,
          onRun: ex,
          promptHistory
        })]
      }),
      aiTrackingContext: e
    });
  })();
  switch (state) {
    case qy.INITIAL:
      if (ew.state !== _$$w.SELECTION_OK) return jsx(_$$A, {
        action: JT.EDIT_IMAGE,
        actionIcon: jsx(_$$T, {}),
        actionLabel: renderI18nText("fullscreen_actions.edit_image"),
        onPerform: () => {
          ew.confirmInitialSelection();
        },
        aiTrackingContext,
        instructionAction: {
          type: "learn_more",
          url: LC
        },
        getCustomDisabledTextFromSelectedNodes: eO,
        children: renderI18nText("image_ai.background_remove.instruction")
      });
      if (a) return eP;
      return jsx(_$$A2, {
        action: JT.EDIT_IMAGE,
        aiTrackingContext,
        ariaLabel: getI18nString("fullscreen_actions.edit_image"),
        disableSubmit: enableReferenceImage && isSubmitDisabled,
        extraFooter: jsxs(_$$B, {
          gap: 8,
          align: "center",
          children: [jsx(_$$n, {
            modelType: E,
            setModelType: m,
            action: JT.EDIT_IMAGE
          }), enableReferenceImage && jsx($$ec2, {
            fileInputRef,
            disabled: isReferenceButtonDisabled,
            tooltip: referenceButtonTooltip,
            onFileUpload: handleFileUpload,
            multiple: !0
          })]
        }),
        featureNameForInstrumentation: "edit_image",
        maxLength: 512,
        minLength: 3,
        onBack: u ? close : void 0,
        onChangePrompt: J,
        onRun: ex,
        prompt: H,
        promptHistory,
        submitLabel: renderI18nText("fullscreen_actions.edit_image"),
        suggestion: ei[0]?.prompt,
        suggestionPills: ei.slice(1),
        useClose: u
      });
    case qy.RUNNING:
      return jsx(_$$F, {
        content: d.length > 1 ? eL : null,
        onCancel: close,
        aiTrackingContext,
        children: eS || renderI18nText("image_ai.edit_image.processing")
      });
    case qy.DONE:
      return eP;
    case qy.ERROR:
      return jsx(_$$E, {
        error: ef.error,
        buttons: [{
          type: _$$f.GO_BACK,
          callback: ev
        }],
        aiTrackingContext
      });
    case qy.CANCELLED:
      return null;
  }
}
export function $$eE0() {
  return jsx(eu, {
    action: JT.GENERATE_IMAGE
  });
}
export function $$ey3() {
  return jsx(eu, {
    action: JT.EDIT_IMAGE
  });
}
function eb({
  originalImage: e,
  imageResults: t,
  prompt: r,
  onSelect: i,
  onAccept: a,
  value: s
}) {
  return jsx(_$$_, {
    fillWidth: !0,
    children: jsx(_$$bL, {
      legend: jsx(_$$q, {
        children: renderI18nText("image_ai.grid_legend")
      }),
      value: s,
      onChange: e => i(e),
      children: jsxs("div", {
        ...xk(eI.grid({
          numGenerations: t.length,
          hasOriginal: !!e
        })),
        children: [e && jsxs(Fragment, {
          children: [jsx(eT, {
            value: "original",
            prompt: r,
            result: e,
            isActive: "original" === s,
            onSelect: i,
            onAccept: a,
            animationDelay: 0,
            alt: getI18nString("image_ai.edit_image.original_image")
          }, "original"), jsx("div", {
            className: "xyi5qop x78zum5 x6s0dn4",
            children: jsx(_$$a, {})
          })]
        }), t.map((e, t) => {
          let o = t.toString();
          return jsx(eT, {
            value: o,
            prompt: r,
            result: e,
            isActive: s === o,
            onSelect: i,
            onAccept: a,
            animationDelay: 300 * t,
            alt: getI18nString("image_ai.edit_image.edited_image", {
              index: t + 1
            })
          }, o);
        })]
      })
    })
  });
}
function eT({
  result: e,
  prompt: t,
  onSelect: r,
  onAccept: a,
  isActive: s,
  animationDelay: o,
  value: l,
  alt: d
}) {
  let c = useRef(null);
  switch (useEffect(() => {
    if (s && c.current) {
      let e = c.current;
      e.focus();
      let t = e => {
        "Enter" === e.key && a(l, {
          keyboard: !0
        });
      };
      e.addEventListener("keydown", t);
      return () => {
        e.removeEventListener("keydown", t);
      };
    }
  }, [s, a, l]), e.state) {
    case "SUCCESS":
      return jsx(c$, {
        value: l,
        ref: c,
        "aria-label": d,
        children: jsx(_$$c, {
          active: s,
          children: jsx("button", {
            className: "x1v8gsql xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xb3r6kr x19y5rnk x1n2onr6 x1plog1",
            tabIndex: -1,
            onClick: () => {
              c.current?.focus();
              r(l);
            },
            onDoubleClick: () => {
              c.current?.focus();
              a(l);
            },
            children: jsx(oW, {
              className: "x10l6tqk xh8yej3 x5yr21d xl1xv1r",
              crossOrigin: "anonymous",
              draggable: !0,
              onDragStart: e => {
                e.dataTransfer.setData("filename", `${t}@2x.png`);
              },
              src: `data:image/png;base64,${uint8ArrayToBase64(e.image.thumbnail.compressedData)}`,
              alt: d,
              "aria-hidden": !0
            })
          })
        })
      });
    case "PENDING":
      return jsx("div", {
        ...xk(eI.gridItem, eI.pulse(o))
      });
    case "FAILURE":
      return jsxs("div", {
        className: "x1v8gsql xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k xb3r6kr x19y5rnk x1n2onr6 x1plog1",
        children: [jsx("div", {
          className: "x10l6tqk xh8yej3 x5yr21d xl1xv1r x5u7ob3 x1lvsgvq xiy17q3 x11e7y0g"
        }), jsx("div", {
          className: "xwjheq5 x10l6tqk xh8yej3 x5yr21d xz16r55 x78zum5 x6s0dn4 xl56j7k x149b52m x70tecm x1j61x8r x1ys4hos x181hs4k x1nbva22 x1ger3g xg01cxk x1vq37if x1o7uuvo",
          children: renderI18nText("ai_image_tools.blocked")
        })]
      });
  }
}
let eI = {
  grid: e => [{
    display: "xrvj5dj",
    gap: "x1rjybxy",
    rowGap: null,
    columnGap: null,
    gridTemplateColumns: (e.hasOriginal, e.numGenerations, "x7t9t1q"),
    $$css: !0
  }, {
    "--gridTemplateColumns": (e.hasOriginal, e.numGenerations, `${e.hasOriginal ? "1fr 8px" : ""} repeat(${e.numGenerations}, minmax(0, 1fr))`)
  }],
  gridItem: {
    backgroundColor: "x1v8gsql",
    width: "xh8yej3",
    height: "x5yr21d",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    position: "x1n2onr6",
    aspectRatio: "x1plog1",
    $$css: !0
  },
  pulse: e => [{
    opacity: "xuzhngd",
    animation: "x67mm0",
    animationComposition: null,
    animationName: null,
    animationDuration: null,
    animationTimingFunction: null,
    animationIterationCount: null,
    animationDirection: null,
    animationFillMode: null,
    animationPlayState: null,
    animationRange: null,
    animationRangeEnd: null,
    animationRangeStart: null,
    animationTimeline: null,
    animationDelay: "x1js0keu",
    $$css: !0
  }, {
    "--animationDelay": (e => "number" == typeof e ? e + "ms" : null != e ? e : void 0)(`${e}ms`)
  }]
};
export const Ay = $$eE0;
export const DI = $$el1;
export const Ti = $$ec2;
export const Tu = $$ey3;