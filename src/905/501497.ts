import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { IK } from "../905/521428";
import { T } from "../905/632137";
import o from "classnames";
import { renderI18nText } from "../905/303541";
import { Ce } from "../905/156213";
import { GM } from "../figma_app/251115";
import { JT } from "../figma_app/632248";
import { B3 } from "../figma_app/862289";
import { cq } from "../905/794154";
import { Sn } from "../905/946805";
import { $I } from "../figma_app/322845";
import { Ay } from "../figma_app/724968";
import { sO } from "../figma_app/21029";
import { sn, Xb, zr } from "../905/119782";
var l = o;
export function $$b0({
  uploadImagePaint: e,
  recordingKey: t,
  isInset: i,
  imageButtonRef: o,
  disableAi: b = !1,
  onClose: v
}) {
  let {
    close
  } = cq();
  let E = sO();
  let x = useDispatch();
  let S = GM();
  return jsxs("div", {
    className: l()(sn, {
      [Xb]: i
    }),
    children: [jsx(IK, {
      onClick: e,
      recordingKey: t,
      ref: o,
      children: E ? renderI18nText("slides.properties_panel.replace_media") : renderI18nText("fullscreen.properties_panel.image_settings.upload_new")
    }), S && !b && jsx("div", {
      className: zr,
      children: jsx(IK, {
        onClick: () => {
          v?.();
          close();
          B3(JT.GENERATE_IMAGE);
          scheduler.postTask(() => {
            $I({
              moduleToOpen: {
                type: "custom",
                module: jsx(Ay, {}),
                name: Sn.GENERATE_IMAGE
              },
              trackingData: {
                source: "image_settings_swap_image_generate_new"
              }
            });
            x(Ce());
          });
        },
        iconPrefix: jsx(T, {}),
        variant: "secondary",
        children: renderI18nText("fullscreen.properties_panel.image_settings.generate_new")
      })
    })]
  });
}
export const v = $$b0;