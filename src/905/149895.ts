import { useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { Ez5 } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { md, Xr } from "../figma_app/27355";
import { XHR } from "../905/910117";
import { t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { ZS } from "../figma_app/519839";
import { lg } from "../figma_app/976749";
import { FFileType } from "../figma_app/191312";
import { aB } from "../905/576221";
import { AC, jO, FZ } from "../figma_app/803787";
import { o as _$$o } from "../figma_app/633080";
import { _g, UM, Md, F4 } from "../figma_app/60023";
import { CR, Dl, oX, ke } from "../905/58274";
export function $$b1(e) {
  e(F.enqueue({
    type: CR,
    message: t("slides.templates.publish_actions.toast.unpublish_success"),
    icon: zX.CHECK
  }));
}
export function $$v0(e) {
  e(F.enqueue({
    type: CR,
    error: !0,
    icon: zX.EXCLAMATION,
    message: t("slides.templates.publish_actions.toast.unpublish_error")
  }));
}
export function $$I2() {
  let e = useDispatch();
  let t = md(_g);
  let i = Xr(UM);
  let d = Md(t);
  let c = useSelector(e => AC(e));
  let u = Object.values(useSelector(e => jO(e, _$$o.LIBRARY)));
  let I = useSelector(e => FZ(e));
  let E = lg() === FFileType.SLIDES;
  return {
    initiateTemplatePublish: useCallback(t => {
      if (d || !E) return;
      let n = !!t.isPublishedTemplate && c.length > 0 && aB(u, new Set(c));
      if (!t.isPublishedTemplate && 0 === c.length && 0 === u.length || n) {
        Dl(e);
        return;
      }
      i({
        state: F4.PUBLISH_TEMPLATE_INITIATED,
        request: t
      });
      let r = Ez5?.slideThemeLibBindings()?.renameThemeForTemplatePublish(t.name) ? u.map(e => e.node_id) : c;
      let s = Object.keys(I);
      r.push(...s);
      0 === r.length ? oX(e, t) : requestAnimationFrame(() => {
        e(ZS({
          savepointDescription: "slide template publish",
          itemsToPublish: new Set(r),
          publishingMode: _$$o.LIBRARY,
          ...ke()
        }));
      });
    }, [e, E, u, d, I, c, i]),
    unpublishTemplate: useCallback(t => {
      E && (i({
        state: F4.UNPUBLISH_TEMPLATE_INITIATED
      }), XHR.del(`/api/templates/file/${t}`).then(() => {
        $$b1(e);
        Ez5?.canvasGrid().updateSourceLibraryKey(_$$l(""));
        e(ZS({
          publishingMode: _$$o.LIBRARY,
          unpublishAll: !0,
          savepointDescription: "slide template unpublish",
          ...ke()
        }));
      }).catch(() => {
        $$v0(e);
        i({
          state: F4.UNPUBLISH_TEMPLATE_ERRORED
        });
      }));
    }, [e, E, i]),
    publishState: t,
    publishInProgress: d
  };
}
export const U7 = $$v0;
export const br = $$b1;
export const r = $$I2;