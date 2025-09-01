import { jsx } from "react/jsx-runtime";
import { Rs } from "../figma_app/288654";
import { XHR } from "../905/910117";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { F } from "../905/302958";
import { X } from "../905/859195";
import { yJ } from "../figma_app/78808";
import { to, Ce } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { q5 } from "../figma_app/516028";
import { dq } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { cBJ } from "../figma_app/43951";
import { cD } from "../figma_app/598018";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { r as _$$r } from "../905/149895";
export function $$I1(e, t) {
  return () => {
    e(to({
      type: x,
      data: {
        dispatch: e,
        fileKey: t
      }
    }));
  };
}
function E({
  title: e,
  content: t,
  confirmText: i,
  trackedConfirmationProperties: r,
  destructive: a,
  onConfirm: l
}) {
  return jsx(yX, {
    size: 360,
    confirmationTitle: jsx("p", {
      className: _$$s.fontSemiBold.font11.$,
      children: e
    }),
    confirmText: i,
    cancelText: _$$t("general.cancel"),
    destructive: a,
    onConfirm: l,
    trackedConfirmationProperties: r,
    children: jsx("p", {
      className: _$$s.colorText.pr8.$,
      style: {
        marginBottom: "-8px"
      },
      children: t
    })
  });
}
let x = Ju(function ({
  dispatch: e,
  fileKey: t
}) {
  let i = q5();
  let s = dq();
  let y = cD();
  let b = Rs(cBJ, {
    fileKey: t
  }, {
    enabled: !i
  });
  let {
    unpublishTemplate
  } = _$$r();
  let {
    unpublishTemplate: _unpublishTemplate
  } = X();
  let S = i?.editorType === FFileType.SLIDES;
  let w = i?.editorType === FFileType.COOPER;
  let C = i?.template || b.data?.file?.template;
  if (!C) return null;
  let T = async () => {
    try {
      await XHR.del(`/api/templates/file/${C.fileKey}`);
    } catch (t) {
      e(F.enqueue({
        message: _$$t("templates.unpublishing.bell.failure"),
        type: "template-unpublish-error",
        error: !0
      }));
      return;
    }
    e(Ce());
    e(F.enqueue({
      message: _$$t("templates.unpublishing.bell.success"),
      type: "template-unpublish-success"
    }));
    e(yJ({
      file: {
        key: C.fileKey,
        is_team_template: !1
      }
    }));
  };
  return jsx(fu, {
    name: "Team Template Unpublish Confirmation Modal",
    properties: {
      orgId: s,
      teamId: y
    },
    children: jsx(E, {
      title: tx("templates.confirmation.unpublish.title"),
      content: tx("templates.confirmation.unpublish.description_v2", {
        templateName: C.name
      }),
      confirmText: tx("templates.detail.unpublish_button"),
      destructive: !0,
      onConfirm: S && unpublishTemplate ? () => unpublishTemplate(t) : w && _unpublishTemplate ? () => _unpublishTemplate(t) : T,
      trackedConfirmationProperties: {
        trackingDescriptor: _$$c.UNPUBLISH,
        fileKey: C.fileKey,
        productType: i?.editorType
      }
    })
  });
}, "UnpublishConfirmationModal");
let $$S0 = Ju(E, "TemplateConfirmationModal");
export const X0 = $$S0;
export const yz = $$I1;