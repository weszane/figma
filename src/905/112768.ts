import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { $ } from "../905/411599";
import { X } from "../905/647103";
import { ruz, Egt, glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { getI18nString, renderI18nText } from "../905/303541";
import { B } from "../905/969273";
import { sZ } from "../figma_app/948389";
import { KH } from "../figma_app/722362";
import { fk, jM, zs, PE, gg, ME } from "../905/23253";
import { r6, sj } from "../905/507950";
import { J } from "../905/494216";
import { JT, LC } from "../figma_app/632248";
import { Ag, RL, qy } from "../figma_app/862289";
import { cq } from "../905/794154";
import { $J } from "../905/278499";
import { f as _$$f, E as _$$E } from "../905/690713";
import { A as _$$A } from "../905/721854";
import { Oq, is } from "../905/904596";
import { F } from "../905/382217";
export function $$x1({
  source: e
}) {
  return jsx(k, {
    action: JT.REMOVE_BACKGROUND,
    actionCallback: J,
    actionIcon: jsx($, {}),
    actionLabel: getI18nString("fullscreen_actions.remove_background"),
    getErrorViewCustomMessage: $$w,
    source: e,
    runningText: getI18nString("image_ai.background_remove.processing")
  });
}
export function $$S0({
  source: e
}) {
  return jsx(k, {
    action: JT.UPSCALE_IMAGE,
    actionCallback: r6,
    actionIcon: jsx(X, {}),
    actionLabel: getI18nString("fullscreen.properties_panel.ai_image_tools.upscale_image"),
    getErrorViewButtons: T,
    getErrorViewCustomMessage: C,
    runningText: getI18nString("image_ai.upscale_image.processing"),
    source: e
  });
}
function $$w(e) {
  if (getFeatureFlags().aip_batch_image_modify && (e instanceof fk || sZ(e) === B.GENERIC)) return getI18nString("image_ai.background_remove.failed");
}
function C(e) {
  return e instanceof jM ? getI18nString("image_ai.upscale_image.image_too_large_error") : e instanceof zs ? getI18nString("image_ai.upscale_image.image_too_small_error") : e instanceof PE ? getI18nString("image_ai.upscale_image.image_already_max_upscaled_error") : e instanceof fk || sZ(e) === B.GENERIC ? getFeatureFlags().aip_batch_image_modify ? getI18nString("image_ai.upscale_image.failed") : getI18nString("image_ai.upscale_image.image_error") : void 0;
}
function T(e, t) {
  return e instanceof PE ? [{
    type: _$$f.BOOST_ANYWAY,
    callback: () => {
      let e = ruz?.getNodeImagePairsForEdit() ?? [];
      Ag(JT.UPSCALE_IMAGE, sj, {
        source: t,
        targets: e
      }, {
        isBatch: e.length > 1
      });
    }
  }] : void 0;
}
function k({
  action: e,
  actionCallback: t,
  actionIcon: i,
  actionLabel: a,
  source: s,
  runningText: c,
  getErrorViewCustomMessage: u,
  getErrorViewButtons: h
}) {
  let g = KH();
  let x = useMemo(() => !!g && (ruz?.getNodeImagePairsForEdit().length ?? 0) > 1, [g]);
  let {
    close
  } = cq();
  let w = RL(e, t, {
    isBatch: x
  });
  let {
    state,
    aiTrackingContext
  } = w;
  let k = gg(state);
  let R = useCallback(() => {
    let e = ruz?.getNodeImagePairsForEdit().length ?? 0;
    return getFeatureFlags().aip_batch_image_modify ? e > 25 ? renderI18nText("image_ai.image_modification.max_images", {
      max: 25
    }) : renderI18nText("image_ai.image_modification.instruction") : e > 1 ? renderI18nText("image_ai.background_remove.only_one_image") : renderI18nText("image_ai.background_remove.instruction");
  }, []);
  if (state === qy.INITIAL) return jsx(_$$A, {
    action: e,
    actionIcon: i,
    actionLabel: a,
    onPerform: () => w.start({
      source: s,
      targets: ruz?.getNodeImagePairsForEdit() ?? []
    }),
    aiTrackingContext,
    instructionAction: {
      type: "learn_more",
      url: LC
    },
    getCustomDisabledTextFromSelectedNodes: R,
    children: renderI18nText("image_ai.image_modification.instruction")
  });
  if (state === qy.RUNNING) return jsx(F, {
    aiTrackingContext,
    children: k || c
  });
  if (state === qy.DONE) {
    let e = w.result?.modifiedNodes ?? [];
    let t = e.filter(e => e.error);
    if (t.length > 0) {
      let i;
      let r = t[0]?.error;
      let a = t.every(e => e.error?.message === r?.message);
      i = r && a ? r : new fk("Mixed errors occurred", {
        reportToSentry: !1
      });
      let s = u ? u(i) : void 0;
      let l = [{
        type: _$$f.SELECT,
        callback: () => {
          Egt?.replaceSelection(t.map(e => e.guid), !0);
        }
      }];
      return jsx(_$$E, {
        buttons: l,
        error: i,
        aiTrackingContext,
        customMessage: jsxs("div", {
          className: "x78zum5 x8439ig",
          children: [s, jsx("span", {
            className: "x1n0bwc9 x1ys4hos",
            children: getI18nString("image_ai.image_modification.error_counter", {
              count: t.length,
              total: e.length
            })
          })]
        })
      });
    }
    return jsx(Oq, {
      iterateOptions: [{
        type: is.UNDO,
        callback: () => {
          glU.triggerActionInUserEditScope("undo", {});
          close();
        }
      }],
      aiTrackingContext: {
        ...aiTrackingContext,
        iteration_view_type: $J.DEFAULT_SUCCESS
      },
      targets: e.map(e => e.guid)
    });
  }
  if (state === qy.ERROR) {
    let {
      error
    } = w;
    if (error instanceof ME) return jsx(_$$E, {
      error,
      aiTrackingContext,
      customMessage: jsx("div", {
        className: "x78zum5 x8439ig",
        children: getI18nString("image_ai.image_modification.would_exceed_meter_error", {
          remaining: error.remaining
        })
      })
    });
    let t = u ? u(error) : void 0;
    let i = h ? h(error, s) : void 0;
    return jsx(_$$E, {
      buttons: i,
      error,
      aiTrackingContext,
      customMessage: t
    });
  }
  return null;
}
export const q = $$S0;
export const w = $$x1;