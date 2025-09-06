import { useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { ZS } from "../figma_app/519839";
import { Ol } from "../905/576221";
import { vQ, p6 } from "../figma_app/803787";
import { V } from "../905/186961";
import { UV, _9, Md, VW } from "../figma_app/755939";
import { Bj, _I, sG, Ao } from "../905/686934";
export function $$f0() {
  let e = useDispatch();
  let t = useAtomWithSubscription(UV);
  let i = Xr(_9);
  let f = Md(t);
  let _ = useSelector(vQ);
  let A = Object.values(useSelector(p6));
  return {
    initiateTemplatePublish: useCallback(t => {
      if (f) return;
      let n = !!t.isPublishedTemplate && _.length > 0 && Ol(A);
      if (!t.isPublishedTemplate && 0 === _.length || n) {
        Bj(e);
        return;
      }
      i({
        state: VW.PUBLISH_TEMPLATE_INITIATED,
        request: t
      });
      0 === _.length ? _I(e, t) : requestAnimationFrame(() => {
        e(ZS({
          savepointDescription: "cooper template publish",
          itemsToPublish: new Set(_),
          publishScope: V(t.publishScope),
          ...sG()
        }));
      });
    }, [e, f, _, A, i]),
    unpublishTemplate: useCallback(t => {
      i({
        state: VW.UNPUBLISH_TEMPLATE_INITIATED
      });
      XHR.del(`/api/templates/file/${t}`).then(() => {
        e(F.enqueue({
          type: Ao,
          message: getI18nString("cooper.templates.unpublished"),
          icon: zX.CHECK
        }));
        e(ZS({
          unpublishAll: !0,
          savepointDescription: "cooper template unpublish",
          ...sG()
        }));
      }).catch(() => {
        e(F.enqueue({
          type: Ao,
          error: !0,
          icon: zX.EXCLAMATION,
          message: getI18nString("cooper.templates.failed_to_unpublish_template")
        }));
        i({
          state: VW.UNPUBLISH_TEMPLATE_ERRORED
        });
      });
    }, [e, i]),
    publishState: t,
    publishInProgress: f
  };
}
export const X = $$f0;